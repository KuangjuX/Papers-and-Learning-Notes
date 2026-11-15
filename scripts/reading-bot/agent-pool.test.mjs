import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, basename, dirname } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { Worker, acquireLock, concurrencyLimit, runWorker } from './worker.mjs';
import { readJson } from './core.mjs';
import { validateConfig } from './cli.mjs';

function deferred() { let resolve; const promise = new Promise(r => { resolve = r; }); return { promise, resolve }; }
async function until(predicate) {
  const end = Date.now() + 10000;
  while (!predicate()) { if (Date.now() > end) throw new Error('Timed out waiting for pool transition'); await delay(5); }
}
async function fixture(t, limit = 3) {
  const directory = await mkdtemp(join(tmpdir(), 'agent-pool-'));
  const config = { version: 1, repo: 'owner/notes', slug: 'reader', repositoryId: 9, appId: 7,
    installationId: 8, allowedUserId: 42, workspace: directory, codexPath: '/bin/codex', privateKeyPath: '/private/key.pem',
    stateDirectory: directory, pollSeconds: 10, taskTimeoutSeconds: 120, maxConcurrentJobs: limit };
  const incoming = [], replies = [], starts = [], gates = new Map();
  let polls = 0, worker;
  const github = {
    verify: async () => {},
    comments: async () => { polls++; return [...incoming]; }, issues: async () => [],
    issue: async n => ({ number: n, state: 'open', title: `Paper ${n}`, body: 'source', html_url: `https://github.com/owner/notes/issues/${n}` }),
    comment: async id => incoming.find(c => c.id === id),
    issueComments: async n => [...incoming.filter(c => c.issue === n), ...replies.filter(c => c.issue === n)],
    createReply: async (issue, body) => {
      const reply = { id: 9000 + replies.length, issue, body, user: { login: 'reader[bot]' } };
      replies.push(reply); return reply;
    },
    updateReply: async (id, body) => { const reply = replies.find(c => c.id === id); reply.body = body; return reply; },
  };
  const execute = async (id, threadId, mode) => {
    const job = worker.state.jobs[id];
    starts.push({ id, issue: job.issue, threadId, mode, agent: job.claim?.agent });
    await gates.get(id).promise;
    return { text: `Answer ${id}`, threadId: `session-${job.issue}` };
  };
  worker = new Worker(config, { github, log: () => {},
    runner: args => execute(Number(basename(dirname(args.directory))), args.threadId, 'ask'),
    notes: { run: async ({ job }) => (await execute(job.id, undefined, 'note')).text, cleanup: async () => {} },
  });
  await worker.load(); worker.state.activatedAt = '2020-01-01T00:00:00Z'; await worker.save();
  t.after(async () => {
    worker.closing = true; for (const gate of gates.values()) gate.resolve();
    await worker.close(); await rm(directory, { recursive: true, force: true });
  });
  return { worker, config, github, incoming, replies, starts, gates, directory, polls: () => polls,
    add(issue, id, command = 'ask') {
      gates.set(id, deferred()); incoming.push({ id, issue, body: `@reader /${command}${command === 'reset' ? '' : ` Question ${id}`}`,
        user: { id: 42, type: 'User' }, created_at: new Date(Date.UTC(2026, 0, 1) + id * 1000).toISOString(),
        issue_url: `https://api.github.com/repos/owner/notes/issues/${issue}`, html_url: `https://github.com/owner/notes/issues/${issue}#issuecomment-${id}` });
    },
    finish: id => gates.get(id).resolve(),
    tick: signal => worker.tick(signal, { wait: false }),
  };
}

test('pool claims different Issues concurrently, obeys its bound, and refills without another poll', async t => {
  const f = await fixture(t, 2);
  for (const n of [1, 2, 3, 4]) f.add(n, n);
  await f.tick(); await until(() => f.starts.length === 2);
  assert.deepEqual(f.starts.map(s => s.issue), [1, 2]);
  assert.equal(new Set(f.starts.map(s => s.agent)).size, 2);
  const polls = f.polls(); f.finish(1);
  await until(() => f.starts.length === 3);
  assert.equal(f.starts[2].issue, 3); assert.equal(f.starts[2].agent, f.starts[0].agent);
  assert.equal(f.polls(), polls); assert.equal(f.worker.active.size, 2);
  assert.equal(f.worker.state.jobs[2].status, 'running');
  f.finish(3); await until(() => f.starts.length === 4);
  f.finish(2); f.finish(4); await until(() => !f.worker.active.size);
  assert.ok(Object.values(f.worker.state.jobs).every(j => j.status === 'done' && !j.claim));
});

test('polling discovers another Issue while a long-running Agent is busy', async t => {
  const f = await fixture(t); f.add(1, 1);
  await f.tick(); await until(() => f.starts.length === 1);
  f.add(2, 2); await f.tick(); await until(() => f.starts.length === 2);
  assert.equal(f.worker.state.jobs[1].status, 'running'); assert.equal(f.polls(), 2);
  f.finish(2); await until(() => f.worker.state.jobs[2].status === 'done');
  assert.equal(f.worker.state.jobs[1].status, 'running');
});

test('questions, reset and note in the same Issue cannot overlap or overtake; sessions belong to Issues', async t => {
  const f = await fixture(t);
  f.add(1, 1); f.add(1, 2, 'reset'); f.add(1, 3, 'note'); f.add(1, 4); f.add(2, 5);
  await f.tick(); await until(() => f.starts.length === 2);
  assert.deepEqual(f.starts.map(s => s.id), [1, 5]);
  f.finish(5); await until(() => f.worker.state.jobs[5].status === 'done');
  assert.equal(f.starts.length, 2);
  f.finish(1); await until(() => f.starts.some(s => s.id === 3));
  assert.equal(f.worker.state.jobs[2].status, 'done'); assert.equal(f.worker.state.threads[1], undefined);
  assert.ok(!f.starts.some(s => s.id === 4));
  f.finish(3); await until(() => f.starts.some(s => s.id === 4));
  assert.equal(f.starts.find(s => s.id === 4).threadId, undefined);
  assert.equal(f.worker.state.threads[2], 'session-2');
  f.finish(4); await until(() => !f.worker.active.size);
  f.add(1, 6); await f.tick(); await until(() => f.starts.some(s => s.id === 6));
  assert.equal(f.starts.find(s => s.id === 6).threadId, 'session-1');
});

test('publication retry blocks only its own Issue and never regenerates the durable answer', async t => {
  const f = await fixture(t, 2); f.add(1, 1); f.add(1, 2); f.add(2, 3);
  const update = f.github.updateReply; let fail = true;
  f.github.updateReply = async (id, body) => {
    if (fail && f.replies.find(r => r.id === id).issue === 1) { fail = false; throw new Error('network down'); }
    return update(id, body);
  };
  await f.tick(); await until(() => f.starts.length === 2); f.finish(1); f.finish(3);
  await until(() => !f.worker.active.size);
  assert.equal(f.worker.state.jobs[1].status, 'answered'); assert.ok(f.worker.state.jobs[1].retryAfter > Date.now());
  assert.equal(f.worker.state.jobs[2].status, 'queued'); assert.equal(f.worker.state.jobs[3].status, 'done');
  f.add(3, 4); await f.tick(); await until(() => f.starts.some(s => s.id === 4));
  assert.ok(!f.starts.some(s => s.id === 2));
  f.worker.state.jobs[1].retryAfter = 0; await f.tick(); await until(() => f.starts.some(s => s.id === 2));
  assert.equal(f.starts.filter(s => s.id === 1).length, 1); assert.equal(f.replies.filter(r => r.issue === 1).length, 2);
});

test('a removed trigger releases its Issue to the next request', async t => {
  const f = await fixture(t); f.add(1, 1); f.add(1, 2);
  const comment = f.github.comment;
  f.github.comment = async id => { if (id === 1) { const error = new Error('gone'); error.status = 404; throw error; } return comment(id); };
  await f.tick(); await until(() => f.starts.length === 1);
  assert.equal(f.worker.state.jobs[1].status, 'unavailable'); assert.equal(f.starts[0].id, 2);
});

test('concurrent state saves are ordered, durable snapshots and leave no shared temporary file', async t => {
  const f = await fixture(t); const saves = [];
  for (let i = 0; i < 60; i++) { f.worker.state.sequence = i; f.worker.state.threads[i] = `thread-${i}`; saves.push(f.worker.save()); }
  await Promise.all(saves);
  const saved = await readJson(f.worker.path);
  assert.equal(saved.sequence, 59); assert.equal(Object.keys(saved.threads).length, 60);
  assert.ok(!(await readdir(f.directory)).some(name => name.endsWith('.tmp')));
});

test('cleanup does not remove a PR branch being updated by another Agent', async t => {
  const f = await fixture(t); f.worker.config.notesEnabled = true;
  f.worker.state.jobs.old = { id: 'old', issue: 1, status: 'done', note: { pr: { number: 10 } } };
  let cleanups = 0; f.worker.notes.cleanup = async () => { cleanups++; };
  f.add(1, 1, 'note'); await f.tick(); await until(() => f.starts.length === 1);
  await f.worker.cleanupTask; assert.equal(cleanups, 0);
  f.finish(1); await until(() => !f.worker.active.size);
  f.worker.state.cleanupAt = 0; await f.worker.cleanup(); assert.equal(cleanups, 1);
});

test('restart recovers claimed/running jobs but keeps answered jobs and per-Issue sessions', async t => {
  const f = await fixture(t); f.add(1, 1); f.add(2, 2); await f.worker.poll();
  f.worker.state.jobs[1].status = 'running'; f.worker.state.jobs[1].claim = { agent: 1 };
  f.worker.state.jobs[2].status = 'answered'; f.worker.state.jobs[2].answer = 'durable'; f.worker.state.jobs[2].claim = { agent: 2 };
  f.worker.state.threads[2] = 'session-2'; await f.worker.save();
  const restarted = new Worker(f.config, { github: f.github }); await restarted.load();
  assert.equal(restarted.state.jobs[1].status, 'queued'); assert.equal(restarted.state.jobs[2].status, 'answered');
  assert.equal(restarted.state.jobs[2].answer, 'durable'); assert.equal(restarted.state.threads[2], 'session-2');
  assert.ok(Object.values(restarted.state.jobs).every(j => !j.claim));
});

test('shutdown cancels every Agent and holds the process lock until recovery state is durable', async t => {
  const f = await fixture(t); for (const n of [1, 2, 3]) f.add(n, n);
  const controller = new AbortController(), stopped = deferred(); let running = 0, aborted = 0;
  f.worker.runner = async ({ signal }) => {
    running++; await new Promise(resolve => signal.addEventListener('abort', resolve, { once: true }));
    aborted++; await stopped.promise; throw new Error('interrupted');
  };
  const run = runWorker(f.config, { worker: f.worker, signal: controller.signal });
  try {
    await until(() => running === 3); controller.abort(); await until(() => aborted === 3);
    await assert.rejects(acquireLock(f.directory), /already running/);
  } finally { controller.abort(); stopped.resolve(); await run; }
  const saved = await readJson(f.worker.path);
  assert.ok(Object.values(saved.jobs).every(j => j.status === 'queued' && !j.claim));
  await (await acquireLock(f.directory))();
});

test('pool size defaults to three and configurable bounds reject invalid values', async t => {
  const f = await fixture(t);
  assert.equal(concurrencyLimit({}), 3); assert.equal(concurrencyLimit({ maxConcurrentJobs: 1 }), 1);
  assert.equal(concurrencyLimit({ maxConcurrentJobs: 8 }), 8);
  for (const maxConcurrentJobs of [0, 9, -1, 1.5, '3', NaN, null, Infinity]) assert.throws(() => validateConfig({ ...f.config, maxConcurrentJobs }), /maxConcurrentJobs/);
});
