import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, writeFile, rm, symlink, access } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { Notes, NoteError, allowedNotePath, collectChanges, git, noteMarker, pullBody } from './notes.mjs';
import { parseMention, readJson, saveJson, buildPrompt } from './core.mjs';
import { codexArgs } from './codex.mjs';
import { AUTHORING_FILES, loadAuthoringContext, parseReview } from './authoring.mjs';
import { Worker } from './worker.mjs';

const notePath = 'Papers/01_Attention/Paper/index.md';
test('only explicit /note opens note mode; normal prose and /ask stay read-only', () => {
  assert.equal(parseMention('@reader /note 整理讨论', 'reader').mode, 'note');
  assert.ok(parseMention('@reader /note', 'reader').question);
  for (const text of ['请整理笔记', '/ask 请整理笔记', '/notebook hello']) assert.notEqual(parseMention(`@reader ${text}`, 'reader').mode, 'note');
  assert.ok(codexArgs({}, null, '/tmp/answer', [], 'note').includes('workspace-write'));
  assert.throws(() => codexArgs({}, 'old-read-only-thread', '/tmp/answer', [], 'note'), /fresh/);
});

test('note paths reject workflow/code files, traversal, hidden files and metadata injection', () => {
  for (const path of [notePath, 'Papers/01_Attention/index.md', 'Projects/Some Project/images/a.svg', 'README.md']) assert.ok(allowedNotePath(path));
  for (const path of ['.github/workflows/x.yml', 'Papers/../config.md', 'Papers/.local/a.md', 'Papers/x/AGENTS.md', 'Papers/x/SKILL.md', 'Papers/a.js', 'Papers/a`\nFixes #1.md', '/Papers/a.md', 'Papers/a.exe']) assert.ok(!allowedNotePath(path), path);
});

test('note prompt requires complete snapshot and the two authoring skills', () => {
  const prompt = buildPrompt({ title: 'Paper' }, [], { id: 1, request: { mode: 'note', question: '整合' } }, { contextPath: '/private/discussion.json' });
  assert.ok(prompt.includes('/private/discussion.json'));
  assert.ok(prompt.includes('skills/write-learning-notes/SKILL.md'));
  assert.ok(prompt.includes('skills/zotero-reading-workflow/SKILL.md'));
  assert.ok(prompt.includes('不因本次整理把论文标记为已读'));
  assert.ok(prompt.includes('VitePress'));
  assert.ok(!prompt.includes('行内公式使用 $`S_t`$'));
});

async function fixture(t, options = {}) {
  const root = await mkdtemp(join(tmpdir(), 'reading-notes-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const workspace = join(root, 'repo'); await mkdir(workspace);
  await git(workspace, ['init', '-b', 'main']);
  await mkdir(join(workspace, 'Papers/01_Attention/Paper'), { recursive: true });
  await mkdir(join(workspace, 'scripts'));
  await writeFile(join(workspace, notePath), '# Original\n\nUser judgment remains.\n');
  await writeFile(join(workspace, 'scripts/check.mjs'), '// trusted check\n');
  await writeFile(join(workspace, '.gitignore'), 'node_modules/\n.vitepress/dist/\n');
  for (const path of AUTHORING_FILES) {
    await mkdir(join(workspace, path, '..'), { recursive: true });
    await writeFile(join(workspace, path), `# Trusted ${path}\nNo invented conclusions.\n`);
  }
  await git(workspace, ['add', '.']);
  await git(workspace, ['-c', 'user.name=Fixture', '-c', 'user.email=fixture@example.com', '-c', 'commit.gpgsign=false', 'commit', '-m', 'base']);
  const base = (await git(workspace, ['rev-parse', 'HEAD'])).trim();
  const config = { version: 1, workspace, stateDirectory: join(root, 'state'), notesEnabled: true,
    repo: 'owner/notes', slug: 'reader', appId: 7, installationId: 8, repositoryId: 9, allowedUserId: 42 };
  const job = { id: 1001, issue: 31, attempts: 1, url: 'https://github.com/owner/notes/issues/31#issuecomment-1001', request: { mode: 'note', question: '将讨论整合进主笔记' } };
  const issue = { number: 31, state: 'open', title: 'Paper', body: 'source', html_url: 'https://github.com/owner/notes/issues/31' };
  const comments = [{ id: 1000, user: { login: 'owner' }, body: 'Use the existing note and preserve the user judgment.' }, { id: 1002, body: 'future comment' }];
  const calls = { run: 0, check: 0, create: 0, refs: 0, updates: 0, reviews: 0, remote: new Map(), pulls: [] };
  const save = () => saveJson(join(root, 'job.json'), job);
  const fakeGitHub = {
    base: () => '/repos/owner/notes',
    notePermissions: async () => options.permissions !== false,
    pulls: async query => calls.pulls.filter(pr => {
      const params = new URLSearchParams(query);
      return (params.get('state') === 'all' || pr.state === 'open') && (!params.has('head') || params.get('head') === `owner:${pr.head.ref}`);
    }),
    pull: async number => calls.pulls.find(pr => pr.number === number),
    branchRef: async branch => calls.remote.has(branch) ? { object: { sha: calls.remote.get(branch) } } : null,
    request: async (path, opts) => {
      if (opts?.method === 'DELETE') { calls.remote.delete(path.split('/git/refs/heads/')[1]); return; }
      if (opts?.method === 'PATCH') {
        assert.equal(opts.body.force, false);
        const branch = path.split('/git/refs/heads/')[1];
        const head = calls.remote.get(branch);
        if (options.beforeUpdate) await options.beforeUpdate({ calls, branch, workspace });
        // Model GitHub's non-fast-forward rejection, including an update race.
        try { await git(workspace, ['merge-base', '--is-ancestor', calls.remote.get(branch), opts.body.sha]); }
        catch { const error = new Error('Non-fast-forward'); error.status = 422; throw error; }
        calls.updates++; calls.remote.set(branch, opts.body.sha);
        const pr = calls.pulls.find(pr => pr.head.ref === branch); pr.head.sha = opts.body.sha;
        if (options.loseUpdateResponse && calls.updates === 1) throw new TypeError('Network response lost');
        return {};
      }
      const sha = path.split('/git/commits/')[1];
      return { tree: { sha: (await git(workspace, ['rev-parse', `${sha}^{tree}`])).trim() } };
    },
    gitObject: async (type, body) => {
      if (type === 'blobs') return { sha: (await git(workspace, ['hash-object', '-w', '--stdin'], { input: Buffer.from(body.content, 'base64') })).trim() };
      if (type === 'trees') {
        const env = { GIT_INDEX_FILE: join(root, 'remote-index') };
        await git(workspace, ['read-tree', body.base_tree], { env });
        for (const file of body.tree) {
          await git(workspace, file.sha ? ['update-index', '--add', '--cacheinfo', file.mode, file.sha, file.path] : ['update-index', '--force-remove', '--', file.path], { env });
        }
        return { sha: (await git(workspace, ['write-tree'], { env })).trim() };
      }
      if (type === 'commits') return { sha: (await git(workspace, ['commit-tree', body.tree, '-p', body.parents[0]], {
        input: body.message, env: { GIT_AUTHOR_NAME: body.author.name, GIT_AUTHOR_EMAIL: body.author.email, GIT_AUTHOR_DATE: body.author.date,
          GIT_COMMITTER_NAME: body.committer.name, GIT_COMMITTER_EMAIL: body.committer.email, GIT_COMMITTER_DATE: body.committer.date },
      })).trim() };
      if (type === 'refs') {
        calls.refs++; calls.remote.set(body.ref.replace('refs/heads/', ''), body.sha);
        if (options.loseRefResponse && calls.refs === 1) throw new TypeError('Network response lost');
        return {};
      }
      throw new Error(`Unexpected Git operation ${type}`);
    },
    createPull: async body => {
      calls.create++;
      const pr = { number: 99, html_url: 'https://github.com/owner/notes/pull/99', state: 'open', body: body.body,
        title: body.title, user: { login: 'reader[bot]' }, head: { ref: body.head, sha: calls.remote.get(body.head), repo: { id: 9 } }, base: { ref: body.base, repo: { id: 9 } } };
      calls.pulls.push(pr);
      if (options.losePullResponse && calls.create === 1) throw new TypeError('Network response lost');
      return pr;
    },
  };
  const notes = new Notes(config, {
    github: fakeGitHub, reader: { repository: async () => ({ default_branch: 'main' }) },
    fetchBase: (ref, branch) => git(workspace, ['update-ref', ref, calls.remote.get(branch) ?? base]),
    reviewer: async args => { calls.reviews++; return options.review ? options.review(args, calls.reviews) : { approved: true, findings: [] }; },
    runner: async args => {
      calls.run++; assert.equal(args.mode, 'note'); assert.equal(args.threadId, undefined);
      assert.notEqual(args.config.workspace, workspace);
      for (const path of AUTHORING_FILES) assert.ok(args.prompt.includes(`# Trusted ${path}`));
      if (options.edit) await options.edit(args.config.workspace, args);
      else await writeFile(join(args.config.workspace, notePath), `# Original\n\nUser judgment remains.\n\nNew mechanism with evidence. Revision ${calls.run}.\n`);
      return { text: 'Summary; Closes #31 must never enter PR metadata.', threadId: 'isolated-editor-thread' };
    },
    checker: async worktree => { calls.check++; if (options.check) await options.check(worktree); },
  });
  return { root, workspace, base, config, notes, job, issue, comments, calls, save, fakeGitHub,
    run: () => notes.run({ job, issue, comments, save }) };
}

test('real Git worktree, immutable commit and PR preserve the current workspace', async t => {
  const f = await fixture(t);
  const result = await f.run();
  assert.ok(result.includes('/pull/99')); assert.equal(f.calls.run, 1); assert.equal(f.calls.check, 1);
  assert.equal(f.job.note.stage, 'published');
  assert.equal(await git(f.workspace, ['status', '--porcelain']), '');
  assert.equal((await git(f.workspace, ['rev-parse', 'HEAD'])).trim(), f.base);
  assert.equal(await readFile(join(f.workspace, notePath), 'utf8'), '# Original\n\nUser judgment remains.\n');
  assert.equal((await git(f.job.note.worktree, ['status', '--porcelain'])), '');
  const pr = f.calls.pulls[0];
  assert.ok(pr.body.includes('Refs #31')); assert.ok(!/Closes|Fixes|Resolves/i.test(pr.body));
  const context = await readJson(join(f.job.note.directory, 'discussion.json'));
  assert.equal(context.comments.length, 1);
  assert.equal((await git(f.workspace, ['rev-parse', `${f.job.note.remoteCommit}^{tree}`])).trim(), f.job.note.tree);
});

test('lost PR response resumes publication without rerunning Codex or creating a second PR', async t => {
  const f = await fixture(t, { losePullResponse: true });
  await assert.rejects(f.run(), /Network/);
  assert.equal(f.job.note.stage, 'committed');
  const saved = await readJson(join(f.root, 'job.json')); Object.assign(f.job, saved);
  await f.run();
  assert.equal(f.calls.run, 1); assert.equal(f.calls.check, 1); assert.equal(f.calls.create, 1);
});

test('lost ref response recovers the exact remote commit', async t => {
  const f = await fixture(t, { loseRefResponse: true });
  await assert.rejects(f.run(), /Network/); await f.run();
  assert.equal(f.calls.refs, 1); assert.equal(f.calls.run, 1); assert.equal(f.calls.create, 1);
});

test('modified remote branches are never overwritten', async t => {
  const f = await fixture(t, { loseRefResponse: true });
  await assert.rejects(f.run());
  f.calls.remote.set(f.job.note.branch, 'another-commit');
  await assert.rejects(f.run(), /未覆盖/);
  assert.equal(f.calls.create, 0); assert.equal(f.calls.remote.get(f.job.note.branch), 'another-commit');
});

test('failed checks preserve edits and prevent all publication', async t => {
  const f = await fixture(t, { check: async () => { throw new NoteError('check failed'); } });
  await assert.rejects(f.run(), /自动修订后检查仍未通过/);
  assert.equal(f.calls.run, 3); assert.equal(f.calls.check, 3);
  assert.equal(f.calls.create, 0); assert.equal(f.calls.refs, 0);
  assert.ok((await readFile(join(f.job.note.worktree, notePath), 'utf8')).includes('New mechanism'));
});

test('unexpected code or staged-only changes are rejected before checks', async t => {
  const f = await fixture(t, { edit: async path => {
    await writeFile(join(path, 'scripts/check.mjs'), '// malicious\n');
    await git(path, ['add', 'scripts/check.mjs']);
    await writeFile(join(path, 'scripts/check.mjs'), '// trusted check\n');
  } });
  await assert.rejects(f.run(), /不允许发布/); assert.equal(f.calls.check, 0); assert.equal(f.calls.create, 0);
});

test('symlinked note directories cannot publish files outside the workspace', async t => {
  const f = await fixture(t, { edit: async path => {
    const outside = join(f.root, 'outside'); await mkdir(outside); await writeFile(join(outside, 'note.md'), 'secret');
    await symlink(outside, join(path, 'Papers/01_Attention/External'));
  } });
  await assert.rejects(f.run(), /不允许发布|符号链接/); assert.equal(f.calls.create, 0);
});

test('disabled or unapproved note mode never invokes Codex', async t => {
  const f = await fixture(t, { permissions: false });
  await assert.rejects(f.run(), /尚未获得/); assert.equal(f.calls.run, 0);
  f.config.notesEnabled = false;
  assert.ok((await f.run()).includes('尚未启用')); assert.equal(f.job.note, undefined);
});

test('explicit update edits the existing PR head, preserves its content and publishes to the same branch', async t => {
  const f = await fixture(t); await f.run();
  const first = { ...f.job.note };
  delete f.job.note; f.job.id++; f.job.request.question = '修改 PR #99：标题只使用论文原题';
  const answer = await f.run();
  assert.ok(answer.includes('更新 [PR #99]'));
  assert.equal(f.calls.run, 2); assert.equal(f.calls.create, 1); assert.equal(f.calls.updates, 1);
  assert.equal(f.job.note.base, first.remoteCommit);
  assert.equal(f.job.note.branch, first.branch); assert.notEqual(f.job.note.localBranch, first.localBranch);
  assert.equal((await git(f.workspace, ['rev-parse', `${f.job.note.remoteCommit}^`])).trim(), first.remoteCommit);
  assert.equal((await git(first.worktree, ['rev-parse', 'HEAD'])).trim(), first.localCommit);
  assert.ok((await readFile(join(f.job.note.worktree, notePath), 'utf8')).includes('Revision 2'));
  assert.equal(f.calls.reviews, 2);
});

test('multiple successive requests keep appending to one PR and retain a human commit', async t => {
  const f = await fixture(t); await f.run();
  const first = f.job.note;
  await writeFile(join(first.worktree, notePath), '# Human correction\n');
  await git(first.worktree, ['add', notePath]);
  await git(first.worktree, ['-c', 'user.name=Human', '-c', 'user.email=human@example.com', '-c', 'commit.gpgsign=false', 'commit', '-m', 'human edit']);
  const humanHead = (await git(first.worktree, ['rev-parse', 'HEAD'])).trim();
  f.calls.remote.set(first.branch, humanHead); f.calls.pulls[0].head.sha = humanHead;
  f.notes.runner = async args => {
    const path = join(args.config.workspace, notePath);
    const before = await readFile(path, 'utf8'); assert.ok(before.includes('Human correction'));
    await writeFile(path, before + 'Requested addition.\n'); return { text: 'Updated.' };
  };
  for (let i = 0; i < 2; i++) { delete f.job.note; f.job.id++; await f.run(); }
  assert.equal(f.calls.create, 1); assert.equal(f.calls.updates, 2);
  assert.ok((await readFile(join(f.job.note.worktree, notePath), 'utf8')).includes('Human correction'));
});

test('lost update response resumes without rerunning editor, reviewer or duplicating commits', async t => {
  const f = await fixture(t, { loseUpdateResponse: true }); await f.run();
  delete f.job.note; f.job.id++;
  await assert.rejects(f.run(), /Network/);
  assert.equal(f.job.note.stage, 'committed');
  const remote = f.calls.remote.get(f.job.note.branch);
  Object.assign(f.job, await readJson(join(f.root, 'job.json')));
  await f.run();
  assert.equal(f.calls.run, 2); assert.equal(f.calls.reviews, 2); assert.equal(f.calls.updates, 1);
  assert.equal(f.calls.remote.get(f.job.note.branch), remote);
  assert.equal(f.calls.create, 1);
});

test('remote changes after checks prevent overwriting an existing PR', async t => {
  const f = await fixture(t); await f.run();
  delete f.job.note; f.job.id++;
  f.notes.checker = async () => f.calls.remote.set(f.calls.pulls[0].head.ref, 'human-commit');
  await assert.rejects(f.run(), /未覆盖现有提交/);
  assert.equal(f.calls.updates, 0); assert.equal(f.calls.create, 1);
});

test('a PR closed during editing is never updated or replaced', async t => {
  const f = await fixture(t); await f.run();
  delete f.job.note; f.job.id++;
  f.notes.checker = async () => { f.calls.pulls[0].state = 'closed'; };
  await assert.rejects(f.run(), /目标 PR 已关闭/);
  assert.equal(f.calls.updates, 0); assert.equal(f.calls.create, 1);
});

test('explicit mismatched PR and ambiguous matching PRs are rejected before editing', async t => {
  const f = await fixture(t); await f.run();
  delete f.job.note; f.job.id++; f.job.request.question = '修改 PR #123';
  await assert.rejects(f.run(), /指定 PR/); assert.equal(f.calls.run, 1);
  f.job.request.question = '修改'; f.calls.pulls.push({ ...f.calls.pulls[0], number: 101 });
  await assert.rejects(f.run(), /多个 bot PR/); assert.equal(f.calls.run, 1);
});

test('skill findings trigger another edit and checks before any publication', async t => {
  const f = await fixture(t, { review: async (args, n) => {
    assert.ok(args.authoring.text.includes('No invented conclusions.'));
    return n === 1 ? { approved: false, findings: ['标题有自行添加的后缀，删除重复结论。'] } : { approved: true, findings: [] };
  } });
  await f.run();
  assert.equal(f.calls.run, 2); assert.equal(f.calls.check, 2); assert.equal(f.calls.reviews, 2);
  assert.equal(f.calls.create, 1); assert.equal(f.job.note.repairs, 1);
  assert.ok(f.job.note.feedback.includes('删除重复结论'));
});

test('persistent skill violations never publish', async t => {
  const f = await fixture(t, { review: async () => ({ approved: false, findings: ['Unsupported conclusion.'] }) });
  await assert.rejects(f.run(), /自动修订后检查仍未通过/);
  assert.equal(f.calls.run, 3); assert.equal(f.calls.create, 0); assert.equal(f.calls.refs, 0);
});

test('repairable check failure is fixed and rechecked automatically', async t => {
  let checks = 0;
  const f = await fixture(t, { check: async () => { if (++checks === 1) throw new NoteError('math failed'); } });
  await f.run(); assert.equal(f.calls.run, 2); assert.equal(f.calls.check, 2); assert.equal(f.calls.reviews, 1);
});

test('every request reloads complete authoring rules; missing rules fail closed', async t => {
  const f = await fixture(t); await f.run();
  const path = join(f.workspace, AUTHORING_FILES[1]);
  await writeFile(path, '# Trusted skills/write-learning-notes/SKILL.md\nNew requirement.\n');
  delete f.job.note; f.job.id++; await f.run();
  const snapshot = await readJson(join(f.job.note.directory, 'authoring.json'));
  assert.ok(snapshot.text.includes('New requirement.'));
  await rm(path); delete f.job.note; f.job.id++;
  await assert.rejects(f.run(), /ENOENT/); assert.equal(f.calls.run, 2);
});

test('review parser rejects malformed or contradictory approval', () => {
  assert.deepEqual(parseReview('```json\n{"approved":true,"findings":[]}\n```'), { approved: true, findings: [] });
  for (const text of ['OK', '{}', '{"approved":true,"findings":["bad"]}', '{"approved":false,"findings":[]}']) assert.throws(() => parseReview(text));
});

test('no-op note work and closed Issues do not create PRs', async t => {
  const f = await fixture(t, { edit: async () => {} });
  assert.ok((await f.run()).includes('没有产生笔记差异'));
  assert.equal(f.calls.create, 0); assert.equal(f.calls.check, 0);
  f.issue.state = 'closed'; assert.ok((await f.run()).includes('已关闭'));
});

test('cleanup requires a merged matching PR and retains subsequent local edits', async t => {
  const f = await fixture(t); await f.run();
  await f.notes.cleanup(f.job, f.save); assert.ok(!f.job.note.cleaned);
  f.calls.pulls[0].merged_at = new Date().toISOString();
  await writeFile(join(f.job.note.worktree, notePath), 'local edit');
  await f.notes.cleanup(f.job, f.save); assert.ok(!f.job.note.cleaned);
  await git(f.job.note.worktree, ['restore', '--', notePath]);
  await f.notes.cleanup(f.job, f.save);
  assert.equal(f.job.note.cleaned, true); assert.equal(f.calls.remote.size, 0);
  await assert.rejects(access(f.job.note.worktree));
  await f.notes.cleanup(f.job, f.save);
});

test('worker routes explicit note jobs separately and retains transient publication errors for retry', async t => {
  const f = await fixture(t);
  const trigger = { id: 1001, body: '@reader /note 整理', user: { id: 42, login: 'owner', type: 'User' } };
  const github = { issue: async () => f.issue, comment: async () => trigger, issueComments: async () => [],
    createReply: async () => ({ id: 2001 }), updateReply: async () => ({}) };
  let runs = 0;
  const worker = new Worker(f.config, { github, notes: { run: async () => { runs++; if (runs === 1) throw new TypeError('fetch failed'); return 'PR created'; } }, runner: () => assert.fail('ask runner used') });
  await worker.load();
  const job = { ...f.job, body: trigger.body, status: 'queued' }; worker.state.jobs[job.id] = job;
  await assert.rejects(worker.process(job)); assert.equal(job.status, 'queued');
  await worker.process(job); assert.equal(job.status, 'done'); assert.equal(job.answer, 'PR created');
  assert.deepEqual(worker.state.threads, {});
});

test('a concurrent remote commit during the update request is rejected without force', async t => {
  const f = await fixture(t, { beforeUpdate: async ({ calls, branch, workspace }) => {
    const parent = calls.remote.get(branch);
    const tree = (await git(workspace, ['rev-parse', `${parent}^{tree}`])).trim();
    const human = (await git(workspace, ['commit-tree', tree, '-p', parent], {
      input: 'concurrent human edit\n', env: { GIT_AUTHOR_NAME: 'Human', GIT_COMMITTER_NAME: 'Human', GIT_AUTHOR_EMAIL: 'human@example.com', GIT_COMMITTER_EMAIL: 'human@example.com' },
    })).trim();
    calls.remote.set(branch, human);
  } });
  await f.run(); delete f.job.note; f.job.id++;
  await assert.rejects(f.run(), /Non-fast-forward/);
  assert.equal(f.calls.updates, 0); assert.notEqual(f.calls.remote.get(f.job.note.branch), f.job.note.remoteCommit);
});

test('no-op updates keep the original PR without creating or publishing a commit', async t => {
  const f = await fixture(t); await f.run();
  f.notes.runner = async () => ({ text: 'Already meets request.' });
  delete f.job.note; f.job.id++;
  assert.ok((await f.run()).includes('现有 PR：[PR #99]'));
  assert.equal(f.calls.updates, 0); assert.equal(f.calls.create, 1);
});

test('cleanup after PR amendment removes only the amendment local branch', async t => {
  const f = await fixture(t); await f.run(); const first = f.job.note;
  delete f.job.note; f.job.id++; await f.run();
  f.calls.pulls[0].merged_at = new Date().toISOString();
  await f.notes.cleanup(f.job, f.save);
  assert.equal(f.job.note.cleaned, true);
  assert.equal((await git(first.worktree, ['rev-parse', 'HEAD'])).trim(), first.localCommit);
  assert.equal(f.calls.remote.size, 0);
});
