import { mkdir, open, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { buildPrompt, enqueue, enqueueIssues, marker, newState, readJson, replyBody, saveJson } from './core.mjs';
import { GitHub } from './github.mjs';
import { runCodex } from './codex.mjs';
import { Notes } from './notes.mjs';

export async function acquireLock(directory) {
  await mkdir(directory, { recursive: true, mode: 0o700 });
  const path = join(directory, 'worker.lock');
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const handle = await open(path, 'wx', 0o600);
      await handle.writeFile(String(process.pid));
      await handle.close();
      return async () => { await rm(path, { force: true }); };
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
      const pid = Number(await readFile(path, 'utf8'));
      if (!Number.isInteger(pid) || pid < 1) throw new Error('Incomplete worker.lock; check for a running worker before removing it');
      try { process.kill(pid, 0); throw new Error('A reading-bot worker is already running'); }
      catch (probe) { if (probe.code !== 'ESRCH') throw probe; }
      await rm(path);
    }
  }
  throw new Error('Could not acquire worker lock');
}

export const DEFAULT_CONCURRENCY = 3;

export function concurrencyLimit(config) {
  const value = config.maxConcurrentJobs === undefined ? DEFAULT_CONCURRENCY : config.maxConcurrentJobs;
  if (!Number.isInteger(value) || value < 1 || value > 8) throw new Error('maxConcurrentJobs must be an integer between 1 and 8');
  return value;
}

export class Worker {
  constructor(config, { github = new GitHub(config), runner = runCodex, notes = new Notes(config, { runner }), log = console.log } = {}) {
    Object.assign(this, { config, github, runner, notes, log });
    this.path = join(config.stateDirectory, 'state.json');
    this.limit = concurrencyLimit(config);
    this.active = new Map();
    this.busyIssues = new Set();
    this.saveQueue = Promise.resolve();
    this.closing = false;
  }
  async load() {
    this.state = await readJson(this.path, {
      ...newState(), repositoryId: this.config.repositoryId, appId: this.config.appId,
    });
    if (this.state.version !== 1 || this.state.repositoryId !== this.config.repositoryId || this.state.appId !== this.config.appId) {
      throw new Error('State belongs to another repository/App or has an unsupported version');
    }
    for (const job of Object.values(this.state.jobs)) {
      if (job.status === 'running') job.status = 'queued';
      delete job.claim;
    }
    await this.save();
  }
  save() {
    // Capture each transition at invocation time, then write in that order.
    // Concurrent jobs must not share saveJson's temporary file or replace a
    // newer durable state with an older snapshot.
    const snapshot = structuredClone(this.state);
    const saving = this.saveQueue.catch(() => {}).then(() => saveJson(this.path, snapshot));
    this.saveQueue = saving;
    saving.catch(() => {});
    return saving;
  }
  async poll() {
    const started = Date.now();
    const [comments, issues] = await Promise.all([
      this.github.comments(this.state.since),
      // Existing installations must discover bodies missed by comment-only polling.
      this.github.issues(this.state.issuesSince ?? this.state.activatedAt),
    ]);
    enqueue(this.state, comments, this.config);
    enqueueIssues(this.state, issues, this.config);
    // Overlap catches updates during pagination. Deduplicate using immutable comment IDs.
    this.state.since = new Date(started - 60000).toISOString();
    this.state.issuesSince = this.state.since;
    await this.save();
  }
  async ensureReply(job) {
    if (job.replyId) return;
    const comments = await this.github.issueComments(job.issue);
    const previous = comments.find(c => c.user?.login === `${this.config.slug}[bot]` && c.body?.includes(marker(job.id)));
    // A previous POST may have succeeded even if its response was lost.
    const reply = previous ?? await this.github.createReply(job.issue, replyBody(job, job.request.mode === 'note'
      ? '已收到，正在整理主笔记；检查通过后会在此回复 PR 链接。' : '已收到，正在由本机 Codex 查阅资料。'));
    job.replyId = reply.id;
    await this.save();
  }
  async process(job, signal) {
    if (job.status === 'answered') {
      await this.ensureReply(job);
      await this.github.updateReply(job.replyId, replyBody(job, job.answer));
      job.status = 'done'; await this.save(); return;
    }
    const [issue, comment] = await Promise.all([
      this.github.issue(job.issue),
      job.source === 'issue' ? null : this.github.comment(job.id),
    ]);
    const trigger = job.source === 'issue' ? issue : comment;
    if (issue.pull_request || trigger.body !== job.body || trigger.user?.id !== this.config.allowedUserId || trigger.user?.type !== 'User') {
      job.status = 'skipped'; await this.save(); return;
    }
    await this.ensureReply(job);
    if (job.request.mode === 'note') {
      job.status = 'running'; job.attempts++; await this.save();
      try {
        job.answer = await this.notes.run({ issue, comments: await this.github.issueComments(job.issue), job, save: () => this.save(), signal });
      } catch (error) {
        if (signal?.aborted || !error.publicMessage) { job.status = 'queued'; await this.save(); throw error; }
        job.answer = error.publicMessage;
      }
    } else if (job.request.reset) {
      delete this.state.threads[job.issue];
      job.answer = '已重置这个 Issue 对应的 Codex 会话。下次提问会创建新会话，并重新读取 Issue 讨论。';
    } else {
      const comments = await this.github.issueComments(job.issue);
      job.status = 'running'; job.attempts++; await this.save();
      try {
        const result = await this.runner({
          config: this.config, prompt: buildPrompt(issue, comments, job),
          threadId: this.state.threads[job.issue],
          directory: join(this.config.stateDirectory, 'jobs', String(job.id), String(job.attempts)), signal,
        });
        job.answer = result.text;
        if (result.threadId) this.state.threads[job.issue] = result.threadId;
      } catch (error) {
        if (signal?.aborted) { job.status = 'queued'; await this.save(); throw error; }
        // Do not publish raw model/tool errors, which may contain private context.
        this.log(`Codex task ${job.id} failed; inspect private job logs.`);
        job.answer = '这次本机 Codex 执行未完成（可能是登录、工具连接或超时问题）。请检查本机任务日志；修复后重新发一条 @ 提问即可。必要时先发送 `@' + this.config.slug + ' /reset`。';
      }
    }
    job.status = 'answered'; await this.save();
    await this.process(job, signal);
  }
  pending() {
    return Object.values(this.state.jobs)
      .filter(job => ['queued', 'answered', 'running'].includes(job.status))
      .sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt) || String(a.id).localeCompare(String(b.id), 'en', { numeric: true }));
  }
  async runJob(job, signal) {
    try { await this.save(); await this.process(job, signal); }
    catch (error) {
      if ([404, 410, 422].includes(error.status)) job.status = 'unavailable';
      else {
        if (job.status === 'running') job.status = 'queued';
        if (!signal?.aborted) job.retryAfter = Date.now() + 60000;
      }
      await this.save();
      throw error;
    } finally {
      delete job.claim;
      await this.save();
    }
  }
  dispatch(signal) {
    const started = [];
    const seen = new Set();
    for (const job of this.pending()) {
      if (this.closing || signal?.aborted || this.active.size >= this.limit) break;
      // Reserve the oldest unfinished request even during retry backoff. Later
      // questions/reset/note requests must never overtake it in this Issue.
      if (seen.has(job.issue)) continue;
      seen.add(job.issue);
      if (this.busyIssues.has(job.issue) || job.status === 'running'
        || job.retryAfter > Date.now()) continue;
      this.busyIssues.add(job.issue);
      const slot = Array.from({ length: this.limit }, (_, i) => i + 1).find(id => !this.active.has(id));
      job.claim = { agent: slot, claimedAt: new Date().toISOString() };
      const task = Promise.resolve().then(() => this.runJob(job, signal))
        .then(() => ({}), error => {
          if (!signal?.aborted) this.log(`Task ${job.id}: execution or publication deferred; check private logs.`);
          return { error };
        }).finally(() => {
          this.active.delete(slot);
          this.busyIssues.delete(job.issue);
          if (this.background) this.dispatch(signal);
        });
      this.active.set(slot, task);
      started.push(task);
    }
    return started;
  }
  cleanup(signal) {
    if (this.closing || signal?.aborted || this.cleanupTask || !this.config.notesEnabled
      || (this.state.cleanupAt && Date.now() - this.state.cleanupAt <= 3600000)) return this.cleanupTask;
    this.state.cleanupAt = Date.now();
    this.cleanupTask = (async () => {
      await this.save();
      for (const completed of Object.values(this.state.jobs).filter(item => item.status === 'done' && item.note?.pr && !item.note.cleaned)) {
        if (this.closing || signal?.aborted) break;
        if (this.busyIssues.has(completed.issue) || this.pending().some(job => job.issue === completed.issue)) continue;
        this.busyIssues.add(completed.issue);
        try { await this.notes.cleanup(completed, () => this.save()); }
        catch { this.log(`Note task ${completed.id}: cleanup deferred; local changes were preserved.`); }
        finally { this.busyIssues.delete(completed.issue); }
      }
    })().catch(() => { this.log('Note cleanup deferred; check private state storage.'); })
      .finally(() => { this.cleanupTask = undefined; if (this.background) this.dispatch(signal); });
    return this.cleanupTask;
  }
  async tick(signal, { wait = true } = {}) {
    this.background = !wait;
    await this.poll();
    const started = this.dispatch(signal);
    if (wait) {
      const results = await Promise.all(started);
      const failed = results.find(result => result.error);
      if (failed) throw failed.error;
      await this.cleanup(signal);
    } else this.cleanup(signal);
  }
  async close() {
    this.closing = true;
    await Promise.all([...this.active.values(), this.cleanupTask]);
    await this.saveQueue;
  }

}

export async function runWorker(config, { once = false, signal, worker = new Worker(config) } = {}) {
  const release = await acquireLock(config.stateDirectory);
  const controller = new AbortController();
  const abort = () => controller.abort();
  signal?.addEventListener('abort', abort, { once: true });
  if (signal?.aborted) abort();
  try {
    await worker.github.verify();
    await worker.load();
    console.log(`Reading bot @${config.slug} listening on ${config.repo}; up to ${worker.limit} Issues concurrently, ordered within each Issue.`);
    do {
      try { await worker.tick(controller.signal, { wait: once }); }
      catch (error) {
        if (controller.signal.aborted) break;
        console.error(error.status ? `GitHub request failed (HTTP ${error.status}); retrying later.` : 'Worker failed; check local configuration and job logs.');
        if (once) throw error;
      }
      if (once || controller.signal.aborted) break;
      await delay(config.pollSeconds * 1000, undefined, { signal: controller.signal }).catch(error => { if (error.name !== 'AbortError') throw error; });
    } while (!controller.signal.aborted);
  } finally {
    // Keep the process lock until all children have stopped and their recovery
    // states are durable, so a restarted service cannot duplicate active work.
    controller.abort();
    try { await worker.close(); }
    finally { signal?.removeEventListener('abort', abort); await release(); }
  }
}
