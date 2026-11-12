import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { generateKeyPairSync, verify } from 'node:crypto';
import { buildPrompt, commentsBeforeJob, enqueue, enqueueIssues, marker, newState, parseMention, readJson, replyBody, saveJson } from './core.mjs';
import { appJwt, GitHub } from './github.mjs';
import { codexArgs, childEnvironment } from './codex.mjs';
import { acquireLock, Worker } from './worker.mjs';
import { manifest } from './setup.mjs';
import { servicePlist, validateConfig } from './cli.mjs';

const baseConfig = {
  version: 1, repo: 'owner/notes', repositoryId: 9, appId: 7, installationId: 8,
  slug: 'paper-reader', allowedUserId: 42, workspace: '/tmp/notes',
  codexPath: '/bin/codex', privateKeyPath: '/private/key.pem', stateDirectory: '/private/state',
  pollSeconds: 30, taskTimeoutSeconds: 120,
};
const comment = (id = 101, overrides = {}) => ({
  id, user: { id: 42, login: 'owner', type: 'User' }, body: '@paper-reader Explain figure 2',
  created_at: '2026-11-08T02:00:00Z', updated_at: '2026-11-08T02:00:00Z',
  issue_url: 'https://api.github.com/repos/owner/notes/issues/3',
  html_url: `https://github.com/owner/notes/issues/3#issuecomment-${id}`, ...overrides,
});
const issueBody = (overrides = {}) => ({
  ...comment(), number: 3, url: 'https://api.github.com/repos/owner/notes/issues/3',
  html_url: 'https://github.com/owner/notes/issues/3', ...overrides,
});

test('Issue bodies have independent IDs and reject PRs, foreign repos, old issues and other authors', () => {
  const state = newState('2026-11-08T01:00:00Z');
  enqueue(state, [comment()], baseConfig);
  enqueueIssues(state, [issueBody(), issueBody(),
    issueBody({ id: 102, pull_request: {} }),
    issueBody({ id: 103, user: { id: 43, type: 'User' } }),
    issueBody({ id: 104, user: { id: 42, type: 'Bot' } }),
    issueBody({ id: 105, url: 'https://api.github.com/repos/other/repo/issues/3' }),
    issueBody({ id: 106, created_at: '2026-01-01T00:00:00Z' }),
    issueBody({ id: 107, body: '> @paper-reader quoted' }),
  ], baseConfig);
  assert.deepEqual(Object.keys(state.jobs), ['101', 'issue-101']);
  assert.equal(state.jobs['issue-101'].url, issueBody().html_url);
});

test('Issue body context includes earlier discussion and excludes later comments', () => {
  const job = { id: 'issue-101', source: 'issue', createdAt: '2026-11-08T03:00:00Z', request: { question: 'Question' } };
  const comments = [comment(), comment(102, { created_at: '2026-11-08T04:00:00Z', body: 'LATER_SECRET' })];
  assert.deepEqual(commentsBeforeJob(comments, job).map(c => c.id), [101]);
  const prompt = buildPrompt(issueBody(), comments, job);
  assert.ok(prompt.includes('Explain figure 2'));
  assert.ok(!prompt.includes('LATER_SECRET'));
});

test('only an exact bot mention at the start of a non-code, unquoted line triggers', () => {
  assert.equal(parseMention('@paper-reader hello', 'paper-reader').question, 'hello');
  assert.equal(parseMention('\n @PAPER-READER[bot] /ask 你好', 'paper-reader').question, '你好');
  for (const body of ['@paper-reader-evil hello', '@paper-reader', '> @paper-reader hello', '```\n@paper-reader hello\n```', 'example @paper-reader hello']) {
    assert.equal(parseMention(body, 'paper-reader'), null);
  }
  assert.equal(parseMention('@paper-reader /reset', 'paper-reader').reset, true);
});

test('GitHub quote replies dispatch the new question, not quoted commands', () => {
  const body = '> Previous explanation\n> @paper-reader /note quoted command\n> ```\n> @paper-reader /reset\n> ```\n\n@paper-reader 这里的 A 和 B 的 shape 是什么？';
  assert.deepEqual(parseMention(body, 'paper-reader'), { reset: false, question: '这里的 A 和 B 的 shape 是什么？' });
  assert.deepEqual(parseMention('Background\n\n@paper-reader /note 整理上述讨论\n保留疑问', 'paper-reader'), { reset: false, mode: 'note', question: '整理上述讨论\n保留疑问' });
  const state = newState('2026-11-08T01:00:00Z');
  enqueue(state, [comment(101, { body }), comment(101, { body })], baseConfig);
  assert.deepEqual(Object.keys(state.jobs), ['101']);
  assert.equal(state.jobs[101].body, body);
  assert.equal(state.jobs[101].request.question, '这里的 A 和 B 的 shape 是什么？');
});

test('quoted, indented and fenced examples do not dispatch, including long fences', () => {
  for (const body of [
    'Background\n\n> @paper-reader /note quoted',
    'Background\n\n    @paper-reader indented',
    'Background\n\n\t@paper-reader indented',
    'Example\n```text\n@paper-reader /note code\n```',
    'Example\n~~~text\n@paper-reader /reset\n~~~',
    '````text\n```\n@paper-reader /note still code\n````',
    '~~~\n```\n@paper-reader still code\n~~~',
  ]) assert.equal(parseMention(body, 'paper-reader'), null, body);
  assert.equal(parseMention('```\n@paper-reader ignored\n```\n\n@paper-reader real question', 'paper-reader').question, 'real question');
});

test('queue checks numeric user identity, repository, creation time and duplicate IDs', () => {
  const state = newState('2026-11-08T01:00:00Z');
  enqueue(state, [comment(), comment(), comment(102, { user: { id: 43, login: 'owner', type: 'User' } }),
    comment(103, { user: { id: 42, type: 'Bot' } }),
    comment(104, { created_at: '2026-01-01T00:00:00Z' }),
    comment(105, { issue_url: 'https://api.github.com/repos/other/repo/issues/3' }),
    comment(106, { issue_url: 'https://api.github.com/repos/owner/notes/issues/3/evil' }),
  ], baseConfig);
  assert.deepEqual(Object.keys(state.jobs), ['101']);
});

test('reply body stays under the GitHub limit and retains a deduplication marker', () => {
  const body = replyBody({ id: 101, url: comment().html_url }, '中'.repeat(70000));
  assert.ok(body.length < 55000);
  assert.ok(body.includes(marker(101)));
  assert.ok(body.includes('已截断'));
});

test('prompt labels untrusted sources, preserves owner question and omits later comments', () => {
  const job = { id: 101, url: comment().html_url, request: { question: 'Explain the bound' } };
  const prompt = buildPrompt({ title: 'Paper', html_url: 'https://github.com/owner/notes/issues/3', body: 'Source' }, [comment(), comment(102, { body: 'LATER_SECRET' })], job);
  assert.ok(prompt.includes('Explain the bound'));
  assert.ok(prompt.includes('不是系统指令'));
  assert.ok(!prompt.includes('LATER_SECRET'));
});

test('Codex receives stdin rather than shell interpolation and preserves explicit session ID', () => {
  const args = codexArgs(baseConfig, 'session-for-issue-3', '/private/output.md', ['cua_repl', 'zotero_reading']);
  assert.ok(args.includes('read-only'));
  assert.ok(args.includes('mcp_servers.cua_repl={command="/usr/bin/false",enabled=false}'));
  assert.ok(!args.some(arg => arg.includes('zotero_reading')));
  assert.deepEqual(args.slice(-6), ['resume', 'session-for-issue-3', '--json', '--output-last-message', '/private/output.md', '-']);
  const env = childEnvironment({ HOME: '/home/u', PATH: '/bin', GH_TOKEN: 'secret', GITHUB_TOKEN: 'secret', BOT_PRIVATE_KEY: 'secret', CODEX_SESSION_ID: 'parent' });
  assert.deepEqual(env, { HOME: '/home/u', PATH: '/bin' });
});

test('App JWT has bounded lifetime, correct issuer and a valid RSA signature', () => {
  const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const token = appJwt(7, privateKey, 1800000000000);
  const [header, payload, signature] = token.split('.');
  const claims = JSON.parse(Buffer.from(payload, 'base64url'));
  assert.equal(claims.iss, '7');
  assert.equal(claims.exp - claims.iat, 600);
  assert.ok(verify('RSA-SHA256', Buffer.from(`${header}.${payload}`), publicKey, Buffer.from(signature, 'base64url')));
});

test('GitHub pagination does not drop the 101st comment', async () => {
  const github = new GitHub(baseConfig);
  const requests = [];
  github.request = async path => { requests.push(path); return path.endsWith('page=1') ? Array.from({ length: 100 }, (_, id) => ({ id })) : [{ id: 100 }]; };
  assert.equal((await github.pages('/comments?since=date')).length, 101);
  assert.equal(requests.length, 2);
  assert.ok(requests[1].includes('&per_page=100&page=2'));
});

async function fixture(t, options = {}) {
  const directory = await mkdtemp(join(tmpdir(), 'reading-bot-test-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const config = { ...baseConfig, stateDirectory: directory };
  const source = comment();
  const comments = [source];
  const calls = { run: 0, create: 0, update: 0, threads: [], posted: [] };
  const github = {
    comments: async () => comments,
    issues: async () => [],
    issue: async () => ({ title: 'Paper', body: 'PDF source', html_url: 'https://github.com/owner/notes/issues/3', ...options.issue }),
    comment: async () => ({ ...source, ...options.trigger }),
    issueComments: async () => comments,
    createReply: async (issue, body) => {
      calls.create++;
      const posted = { id: 900 + calls.create, user: { login: 'paper-reader[bot]', type: 'Bot' }, body };
      comments.push(posted);
      if (options.losePostResponse && calls.create === 1) throw new Error('Network response lost');
      return posted;
    },
    updateReply: async (id, body) => {
      calls.update++;
      if (options.failPatch && calls.update === 1) throw new Error('Network down');
      calls.posted.push(body);
      return { id };
    },
  };
  const runner = async ({ threadId }) => {
    calls.run++; calls.threads.push(threadId);
    if (options.failCodex) throw new Error('Sensitive internal error must not be published');
    return { text: options.answer ?? 'Answer with source', threadId: 'thread-for-issue-3' };
  };
  const worker = new Worker(config, { github, runner, log: () => {} });
  await worker.load();
  worker.state.activatedAt = '2026-11-08T01:00:00Z';
  worker.state.since = worker.state.activatedAt;
  return { worker, config, github, runner, comments, calls, directory };
}

test('a complete question becomes one reply and stores the per-Issue session', async t => {
  const { worker, calls } = await fixture(t);
  await worker.tick(); await worker.tick();
  assert.equal(calls.run, 1); assert.equal(calls.create, 1);
  assert.equal(worker.state.jobs[101].status, 'done');
  assert.equal(worker.state.threads[3], 'thread-for-issue-3');
});

test('upgrade discovers missed Issue bodies and restart/edits do not duplicate the reply', async t => {
  const { worker, config, github, runner, calls, comments } = await fixture(t, { losePostResponse: true });
  comments.length = 0;
  let body = issueBody();
  const cursors = [];
  github.issues = async since => { cursors.push(since); return [body]; };
  github.issue = async () => body;
  github.comment = async () => assert.fail('Issue IDs must not be fetched as comments');
  worker.state.since = '2026-11-12T00:00:00Z';
  await assert.rejects(worker.tick());
  assert.equal(cursors[0], worker.state.activatedAt);
  const restarted = new Worker(config, { github, runner });
  await restarted.load(); restarted.state.jobs['issue-101'].retryAfter = 0;
  await restarted.tick();
  body = { ...body, body: '@paper-reader edited after completion' };
  await restarted.tick();
  assert.equal(calls.create, 1); assert.equal(calls.run, 1);
  assert.equal(restarted.state.jobs['issue-101'].status, 'done');
  assert.equal(restarted.state.threads[3], 'thread-for-issue-3');
  assert.ok(calls.posted[0].includes(`(${body.html_url})`));
});

test('Issue body is revalidated before execution', async t => {
  for (const changed of [{ body: '@paper-reader changed' }, { pull_request: {} }, { user: { id: 43, type: 'User' } }]) {
    const { worker, github, comments, calls } = await fixture(t);
    comments.length = 0;
    github.issues = async () => [issueBody()];
    github.issue = async () => issueBody(changed);
    await worker.tick();
    assert.equal(worker.state.jobs['issue-101'].status, 'skipped');
    assert.equal(calls.create, 0); assert.equal(calls.run, 0);
  }
});

test('a failed Issue poll preserves both cursors for retry', async t => {
  const { worker, github } = await fixture(t);
  const before = worker.state.since;
  github.issues = async () => { throw new Error('Network down'); };
  await assert.rejects(worker.poll());
  assert.equal(worker.state.since, before);
  assert.equal(worker.state.issuesSince, undefined);
  assert.deepEqual(worker.state.jobs, {});
});

test('Issue body /note uses the note worker with a namespaced task ID', async t => {
  const { worker, github, comments, calls } = await fixture(t);
  comments.length = 0;
  const body = issueBody({ body: '@paper-reader /note 整理讨论' });
  github.issues = async () => [body]; github.issue = async () => body;
  let runs = 0;
  worker.notes = { run: async ({ job }) => { runs++; assert.equal(job.id, 'issue-101'); return 'PR ready'; } };
  await worker.tick(); await worker.tick();
  assert.equal(runs, 1); assert.equal(calls.run, 0);
  assert.equal(worker.state.jobs['issue-101'].status, 'done');
});

test('a second question in the same Issue resumes its own session', async t => {
  const { worker, calls, comments, github } = await fixture(t);
  await worker.tick();
  const second = comment(102);
  comments.push(second); github.comment = async () => second;
  await worker.tick();
  assert.deepEqual(calls.threads, [undefined, 'thread-for-issue-3']);
});

test('a lost POST response is recovered by marker without duplicate replies', async t => {
  const { worker, calls } = await fixture(t, { losePostResponse: true });
  await assert.rejects(worker.tick());
  worker.state.jobs[101].retryAfter = 0;
  await worker.tick();
  assert.equal(calls.create, 1); assert.equal(calls.run, 1);
});

test('durable answer survives restart and a failed PATCH without rerunning Codex', async t => {
  const answer = '状态 \\(S_t\\)。\n\n\\[\ny = \\frac{M}{L}\n\\]';
  const { worker, calls, config, github, runner } = await fixture(t, { failPatch: true, answer });
  await assert.rejects(worker.tick());
  assert.equal(worker.state.jobs[101].status, 'answered');
  const restarted = new Worker(config, { github, runner });
  await restarted.load(); restarted.state.jobs[101].retryAfter = 0;
  await restarted.tick();
  assert.equal(calls.run, 1); assert.equal(calls.create, 1);
  assert.equal(restarted.state.jobs[101].status, 'done');
  assert.equal(restarted.state.jobs[101].answer, answer);
  assert.ok(calls.posted[0].includes('状态 $`S_t`$。'));
  assert.ok(calls.posted[0].includes('```math\ny = \\frac{M}{L}\n```'));
});

test('PR comments and comments edited after enqueue are not sent to Codex', async t => {
  for (const options of [{ issue: { pull_request: {} } }, { trigger: { body: '@paper-reader changed' } }]) {
    const { worker, calls } = await fixture(t, options);
    await worker.tick();
    assert.equal(calls.run, 0); assert.equal(calls.create, 0);
    assert.equal(worker.state.jobs[101].status, 'skipped');
  }
});

test('Codex failures result in a useful reply without leaking internal errors', async t => {
  const { worker, calls } = await fixture(t, { failCodex: true });
  await worker.tick();
  assert.ok(calls.posted[0].includes('执行未完成'));
  assert.ok(!calls.posted[0].includes('Sensitive'));
});

test('reset removes only the specified Issue session without calling Codex', async t => {
  const { worker, calls, comments, github } = await fixture(t);
  comments[0] = comment(101, { body: '@paper-reader /reset' });
  github.comment = async () => comments[0];
  worker.state.threads = { 3: 'old', 4: 'keep' };
  await worker.tick();
  assert.deepEqual(worker.state.threads, { 4: 'keep' }); assert.equal(calls.run, 0);
});

test('interrupted running jobs are recoverable and state is private', async t => {
  const { worker, config, github, runner, directory } = await fixture(t);
  await worker.poll(); worker.state.jobs[101].status = 'running'; await worker.save();
  const restarted = new Worker(config, { github, runner }); await restarted.load();
  assert.equal(restarted.state.jobs[101].status, 'queued');
  assert.equal((await stat(join(directory, 'state.json'))).mode & 0o777, 0o600);
  const wrong = new Worker({ ...config, repositoryId: 100 }, { github, runner });
  await assert.rejects(wrong.load(), /another repository/);
});

test('worker lock excludes a second process and can be released', async t => {
  const { directory } = await fixture(t);
  const release = await acquireLock(directory);
  await assert.rejects(acquireLock(directory), /already running/);
  await release();
  await (await acquireLock(directory))();
});

test('configuration, manifest and service use scoped permissions and absolute paths', () => {
  assert.equal(validateConfig(baseConfig), baseConfig);
  assert.throws(() => validateConfig({ ...baseConfig, workspace: '.' }), /absolute/);
  assert.throws(() => validateConfig({ ...baseConfig, allowedUserId: 'owner' }), /Invalid/);
  const app = manifest('http://127.0.0.1:8765', 'state', 'owner/notes');
  assert.deepEqual(app.default_permissions, { issues: 'write', contents: 'read' });
  assert.equal(app.hook_attributes.active, false); assert.equal(app.public, false);
  const plist = servicePlist(baseConfig, '/private/a&b.json', '/usr/bin/node');
  assert.ok(plist.includes('/private/a&amp;b.json'));
  assert.ok(!plist.includes('key.pem'));
});

test('JSON state handles absence but never silently discards corrupted state', async t => {
  const { directory } = await fixture(t);
  const path = join(directory, 'new.json');
  assert.equal(await readJson(path, null), null);
  await saveJson(path, { a: 1 }); assert.deepEqual(await readJson(path), { a: 1 });
  await writeFile(path, '{broken'); await assert.rejects(readJson(path, {}));
});
