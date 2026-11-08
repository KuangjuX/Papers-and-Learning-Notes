import { mkdir, open, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { buildPrompt, enqueue, marker, newState, readJson, replyBody, saveJson } from './core.mjs';
import { GitHub } from './github.mjs';
import { runCodex } from './codex.mjs';

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

export class Worker {
  constructor(config, { github = new GitHub(config), runner = runCodex, log = console.log } = {}) {
    Object.assign(this, { config, github, runner, log });
    this.path = join(config.stateDirectory, 'state.json');
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
    }
    await this.save();
  }
  save() { return saveJson(this.path, this.state); }
  async poll() {
    const started = Date.now();
    const comments = await this.github.comments(this.state.since);
    enqueue(this.state, comments, this.config);
    // Overlap catches updates during pagination. Deduplicate using immutable comment IDs.
    this.state.since = new Date(started - 60000).toISOString();
    await this.save();
  }
  async ensureReply(job) {
    if (job.replyId) return;
    const comments = await this.github.issueComments(job.issue);
    const previous = comments.find(c => c.user?.login === `${this.config.slug}[bot]` && c.body?.includes(marker(job.id)));
    // A previous POST may have succeeded even if its response was lost.
    const reply = previous ?? await this.github.createReply(job.issue, replyBody(job, '已收到，正在由本机 Codex 查阅资料。'));
    job.replyId = reply.id;
    await this.save();
  }
  async process(job, signal) {
    if (job.status === 'answered') {
      await this.ensureReply(job);
      await this.github.updateReply(job.replyId, replyBody(job, job.answer));
      job.status = 'done'; await this.save(); return;
    }
    const [issue, trigger] = await Promise.all([this.github.issue(job.issue), this.github.comment(job.id)]);
    if (issue.pull_request || trigger.body !== job.body || trigger.user?.id !== this.config.allowedUserId) {
      job.status = 'skipped'; await this.save(); return;
    }
    await this.ensureReply(job);
    if (job.request.reset) {
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
  async tick(signal) {
    await this.poll();
    const jobs = Object.values(this.state.jobs)
      .filter(job => ['queued', 'answered'].includes(job.status))
      .sort((a, b) => a.id - b.id);
    // One task per tick keeps polling active between long Codex turns.
    const job = jobs.find(candidate => !candidate.retryAfter || candidate.retryAfter <= Date.now());
    if (job) {
      try { await this.process(job, signal); }
      catch (error) {
        if ([404, 410, 422].includes(error.status)) {
          job.status = 'unavailable';
        } else {
          job.retryAfter = Date.now() + 60000;
        }
        await this.save(); throw error;
      }
    }
  }
}

export async function runWorker(config, { once = false, signal } = {}) {
  const release = await acquireLock(config.stateDirectory);
  try {
    const worker = new Worker(config);
    await worker.github.verify();
    await worker.load();
    console.log(`Reading bot @${config.slug} listening on ${config.repo}; only user ID ${config.allowedUserId} can trigger it.`);
    do {
      try { await worker.tick(signal); }
      catch (error) {
        if (signal?.aborted) break;
        console.error(error.status ? `GitHub request failed (HTTP ${error.status}); retrying later.` : 'Worker failed; check local configuration and job logs.');
        if (once) throw error;
      }
      if (once || signal?.aborted) break;
      await delay(config.pollSeconds * 1000, undefined, { signal }).catch(error => { if (error.name !== 'AbortError') throw error; });
    } while (!signal?.aborted);
  } finally { await release(); }
}
