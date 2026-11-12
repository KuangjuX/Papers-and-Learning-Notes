import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, readFile, writeFile, lstat, realpath, access } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { createHash } from 'node:crypto';
import { buildPrompt, commentsBeforeJob, saveJson, readJson } from './core.mjs';
import { childEnvironment, runCodex } from './codex.mjs';
import { GitHub } from './github.mjs';

const execute = promisify(execFile);
export const NOTE_CHECKS = [
  'docs:check-links', 'docs:check-sidebar', 'docs:check-translation-rendering',
  'docs:build', 'docs:check-reading-list', 'docs:check-anchors',
  'docs:check-translations', 'docs:check-math', 'docs:check-diagrams',
];
export const noteMarker = issue => `<!-- reading-bot-note:issue-${issue} -->`;
const sha256 = data => createHash('sha256').update(data).digest('hex');

export class NoteError extends Error {
  constructor(message) { super(message); this.publicMessage = message; }
}

export async function git(cwd, args, { env = {}, signal, input } = {}) {
  const child = execute('git', args, {
    cwd, env: { ...childEnvironment(), ...env }, timeout: 120000,
    maxBuffer: 20 * 1024 * 1024, encoding: 'utf8', signal,
  });
  if (input !== undefined) { child.child.stdin.on('error', () => {}); child.child.stdin.end(input); }
  return (await child).stdout;
}

export function allowedNotePath(path) {
  if (/[\x00-\x1f\x7f`]/.test(path)) return false;
  const parts = path.split('/');
  if (parts.some(part => !part || part.startsWith('.') || part === 'node_modules') || path.includes('\\')) return false;
  if (/^(?:README|index|CATALOG)\.md$/.test(path)) return true;
  return /^(?:Papers|Projects|Foundations)\/.+\.(?:md|png|jpe?g|webp|gif|svg)$/.test(path)
    && !['AGENTS.md', 'SKILL.md'].includes(parts.at(-1));
}

export async function collectChanges(worktree, base) {
  const changed = (await git(worktree, ['diff', '--name-only', '--no-renames', '-z', base, '--'])).split('\0');
  const staged = (await git(worktree, ['diff', '--cached', '--name-only', '--no-renames', '-z', base, '--'])).split('\0');
  const untracked = (await git(worktree, ['ls-files', '--others', '--exclude-standard', '-z'])).split('\0');
  const paths = [...new Set([...changed, ...staged, ...untracked].filter(Boolean))].sort();
  if (paths.length > 60) throw new NoteError('本次改动超过 60 个文件，已保留工作区，请缩小整理范围。');
  const root = await realpath(worktree);
  const files = [];
  let total = 0;
  for (const path of paths) {
    if (!allowedNotePath(path)) throw new NoteError(`改动包含不允许发布的路径：${path}。未创建 PR，差异保留在独立工作区。`);
    const absolute = join(worktree, path);
    let info;
    try { info = await lstat(absolute); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
    if (!info) { files.push({ path, deleted: true }); continue; }
    const actual = relative(root, await realpath(absolute));
    if (!info.isFile() || info.isSymbolicLink() || actual !== path.split('/').join(sep)) {
      throw new NoteError(`不发布符号链接或工作区以外的文件：${path}`);
    }
    if (info.size > 5 * 1024 * 1024 || (total += info.size) > 20 * 1024 * 1024) throw new NoteError('笔记附件过大，已保留工作区，请缩小到必要图片后重试。');
    const data = await readFile(absolute);
    files.push({ path, content: data.toString('base64'), digest: sha256(data), mode: (info.mode & 0o111) ? '100755' : '100644' });
    if (files.at(-1).mode !== '100644') throw new NoteError(`不发布可执行文件：${path}`);
  }
  return files;
}

function sameFiles(a, b) { return JSON.stringify(a) === JSON.stringify(b); }

export async function checkNotes(worktree, directory, signal) {
  const commands = [['install', '--offline', '--frozen-lockfile', '--ignore-scripts'], ...NOTE_CHECKS.map(name => [name])];
  for (const [index, args] of commands.entries()) {
    try {
      const result = await execute('pnpm', args, { cwd: worktree, env: { ...childEnvironment(), CI: 'true' },
        timeout: 20 * 60 * 1000, maxBuffer: 16 * 1024 * 1024, signal });
      await writeFile(join(directory, `check-${index}.log`), result.stdout + result.stderr, { mode: 0o600 });
    } catch (error) {
      await writeFile(join(directory, `check-${index}.log`), (error.stdout ?? '') + (error.stderr ?? ''), { mode: 0o600 });
      if (signal?.aborted) throw error;
      throw new NoteError(`检查未通过：pnpm ${args.join(' ')}。未创建 PR，修改和检查日志已保留在本机独立工作区。`);
    }
  }
}

export function pullBody(issue, job, note, files) {
  // Model text is not interpolated into PR metadata, preventing accidental auto-close directives.
  return `${noteMarker(issue.number)}\n\n将 [用户要求](${job.url}) 指定的 Issue 讨论整理到主笔记，保留来源、个人判断和未解决疑问。\n\n改动文件：\n${files.map(f => `- \`${f.path}\``).join('\n')}\n\n验证：${NOTE_CHECKS.map(s => `\`${s}\``).join('、')} 均通过。\n\nRefs #${issue.number}\n\n本次是阶段性整理，PR 留待审阅，不代表论文阅读完成。\n\n<!-- reading-bot-job:${job.id}; base:${note.base} -->`;
}

export class Notes {
  constructor(config, { github = new GitHub(config, { notes: true }), reader = new GitHub(config), runner = runCodex, checker = checkNotes, fetchBase } = {}) {
    Object.assign(this, { config, github, reader, runner, checker, fetchBase });
  }
  async existing(issue, branch) {
    const pulls = await this.github.pulls(branch ? `state=all&head=${encodeURIComponent(`${this.config.repo.split('/')[0]}:${branch}`)}` : 'state=open');
    return pulls.find(pr => pr.user?.login === `${this.config.slug}[bot]`
      && pr.head?.repo?.id === this.config.repositoryId && pr.base?.repo?.id === this.config.repositoryId
      && pr.body?.includes(noteMarker(issue)));
  }
  async prepare(job, save, signal) {
    if (!job.note) {
      const repo = await this.reader.repository();
      const branch = `codex/reading-issue-${job.issue}-${job.id}`;
      const baseRef = `refs/reading-bot/base/${job.id}`;
      if (this.fetchBase) await this.fetchBase(baseRef, repo.default_branch);
      else {
        const token = await this.reader.token();
        await git(this.config.workspace, ['fetch', '--no-tags', '--no-write-fetch-head',
          `https://github.com/${this.config.repo}.git`, `+refs/heads/${repo.default_branch}:${baseRef}`], {
          signal, env: { GIT_TERMINAL_PROMPT: '0', GIT_CONFIG_COUNT: '2',
            GIT_CONFIG_KEY_0: 'http.https://github.com/.extraheader',
            GIT_CONFIG_VALUE_0: `AUTHORIZATION: basic ${Buffer.from(`x-access-token:${token}`).toString('base64')}`,
            GIT_CONFIG_KEY_1: 'credential.helper', GIT_CONFIG_VALUE_1: '' },
        });
      }
      const base = (await git(this.config.workspace, ['rev-parse', baseRef])).trim();
      job.note = { branch, baseRef, base, defaultBranch: repo.default_branch,
        worktree: join(this.config.stateDirectory, 'worktrees', String(job.id)),
        directory: join(this.config.stateDirectory, 'notes', String(job.id)), stage: 'planned' };
      await save();
    }
    const note = job.note;
    await mkdir(note.directory, { recursive: true, mode: 0o700 });
    if (note.stage === 'planned') {
      await mkdir(join(this.config.stateDirectory, 'worktrees'), { recursive: true, mode: 0o700 });
      try { await access(note.worktree); }
      catch (error) {
        if (error.code !== 'ENOENT') throw error;
        await git(this.config.workspace, ['worktree', 'add', '-b', note.branch, note.worktree, note.base], { signal });
      }
      await this.assertHead(note, note.base);
      note.stage = 'prepared'; await save();
    }
    return note;
  }
  async assertHead(note, expected) {
    const branch = (await git(note.worktree, ['branch', '--show-current'])).trim();
    const head = (await git(note.worktree, ['rev-parse', 'HEAD'])).trim();
    if (branch !== note.branch || head !== expected) throw new NoteError('独立工作区的分支或提交已被更改；为保留这些改动，本次任务停止。');
  }
  async commit(note, job, save) {
    const files = await readJson(join(note.directory, 'candidate.json'));
    if (!sameFiles(files, await collectChanges(note.worktree, note.base))) throw new NoteError('检查完成后文件又有变化；本次不发布未经检查的差异。');
    // Compare-and-swap the local branch only after the durable commit object is saved.
    if (!note.localCommit) {
      await this.assertHead(note, note.base);
      await git(note.worktree, ['add', '--', ...files.map(f => f.path)]);
      note.tree = (await git(note.worktree, ['write-tree'])).trim();
      note.message = `整理 Issue #${job.issue} 的阅读讨论\n\nRefs #${job.issue}\n`;
      note.date = new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
      const author = `${this.config.slug}[bot]`;
      const env = { GIT_AUTHOR_NAME: author, GIT_COMMITTER_NAME: author,
        GIT_AUTHOR_EMAIL: `${author}@users.noreply.github.com`, GIT_COMMITTER_EMAIL: `${author}@users.noreply.github.com`,
        GIT_AUTHOR_DATE: note.date, GIT_COMMITTER_DATE: note.date };
      note.localCommit = (await git(note.worktree, ['commit-tree', note.tree, '-p', note.base], { env, input: note.message })).trim();
      await save();
    }
    const head = (await git(note.worktree, ['rev-parse', 'HEAD'])).trim();
    if (head === note.base) await git(note.worktree, ['update-ref', `refs/heads/${note.branch}`, note.localCommit, note.base]);
    await this.assertHead(note, note.localCommit);
    note.stage = 'committed'; await save();
    return files;
  }
  async publish(note, job, issue, save) {
    const existing = await this.existing(job.issue, note.branch);
    if (existing) { note.pr = { number: existing.number, url: existing.html_url }; note.stage = 'published'; await save(); return; }
    await this.assertHead(note, note.localCommit);
    if ((await git(note.worktree, ['status', '--porcelain'])).trim()) throw new NoteError('提交后工作区出现新改动；已保留改动，本次不继续发布。');
    const files = await readJson(join(note.directory, 'candidate.json'));
    if (!note.remoteCommit) {
      const baseCommit = await this.github.request(`${this.github.base()}/git/commits/${note.base}`);
      const entries = [];
      for (const file of files) {
        const blob = file.deleted ? null : await this.github.gitObject('blobs', { content: file.content, encoding: 'base64' });
        entries.push({ path: file.path, mode: '100644', type: 'blob', sha: blob?.sha ?? null });
      }
      const tree = await this.github.gitObject('trees', { base_tree: baseCommit.tree.sha, tree: entries });
      if (tree.sha !== note.tree) throw new NoteError('远端文件树与本机已检查的提交不一致，未发布分支。');
      const author = { name: `${this.config.slug}[bot]`, email: `${this.config.slug}[bot]@users.noreply.github.com`, date: note.date };
      const commit = await this.github.gitObject('commits', { message: note.message, tree: tree.sha, parents: [note.base], author, committer: author });
      note.remoteCommit = commit.sha; await save();
    }
    const ref = await this.github.branchRef(note.branch);
    if (ref && ref.object.sha !== note.remoteCommit) throw new NoteError('远端工作分支已被更新；未覆盖现有提交，请人工检查。');
    if (!ref) await this.github.gitObject('refs', { ref: `refs/heads/${note.branch}`, sha: note.remoteCommit });
    const pr = await this.github.createPull({ title: `阶段性整理阅读笔记（Issue #${job.issue}）`,
      head: note.branch, base: note.defaultBranch, body: pullBody(issue, job, note, files) });
    note.pr = { number: pr.number, url: pr.html_url }; note.stage = 'published'; await save();
  }
  async run({ issue, comments, job, save, signal }) {
    if (!this.config.notesEnabled) return '笔记整理模式尚未启用。请完成 GitHub App 的 Contents / Pull requests 写权限配置，并运行 enable-notes 后重新发送 /note。';
    if (issue.state === 'closed') return '这个 Issue 已关闭。按仓库约定，新一轮笔记更新应先新建对应主题的 Issue，再在新 Issue 中发送 /note。';
    if (!await this.github.notePermissions()) throw new NoteError('GitHub App 尚未获得 Contents 和 Pull requests 写权限；请更新安装权限后重新发送 /note。');
    if (!job.note) {
      const previous = await this.existing(job.issue);
      if (previous) return `这个 Issue 已有待审阅的整理 PR：[PR #${previous.number}](${previous.html_url})。本次没有叠加新的修改；请先审阅该 PR，合并或关闭后再发新的 /note。`;
    }
    const note = await this.prepare(job, save, signal);
    if (note.stage === 'prepared') {
      const contextPath = join(note.directory, 'discussion.json');
      // Keep an immutable full snapshot on retries, rather than truncating the source for editing.
      let context = await readJson(contextPath, null);
      if (!context) {
        context = { issue, comments: commentsBeforeJob(comments, job), trigger: job.url };
        await saveJson(contextPath, context);
      }
      let result;
      try {
        result = await this.runner({ config: { ...this.config, workspace: note.worktree }, mode: 'note',
          prompt: buildPrompt(context.issue, context.comments, job, { contextPath }),
          directory: join(note.directory, `codex-${job.attempts}`), signal });
      } catch (error) {
        if (signal?.aborted) throw error;
        throw new NoteError('本机 Codex 整理未完成。已有差异和日志保留在独立工作区，未创建 PR；请检查日志后再发 /note。');
      }
      note.summary = result.text; note.stage = 'edited'; await save();
    }
    if (note.stage === 'edited') {
      await this.assertHead(note, note.base);
      const files = await collectChanges(note.worktree, note.base);
      if (!files.length) { note.stage = 'no-change'; await save(); return `没有产生笔记差异，未创建 PR。\n\n${note.summary}`; }
      await this.checker(note.worktree, note.directory, signal);
      const candidate = await collectChanges(note.worktree, note.base);
      await git(note.worktree, ['diff', '--check', note.base]);
      await saveJson(join(note.directory, 'candidate.json'), candidate);
      note.stage = 'validated'; await save();
    }
    if (note.stage === 'validated') await this.commit(note, job, save);
    if (note.stage === 'committed') await this.publish(note, job, issue, save);
    if (note.stage === 'no-change') return `没有产生笔记差异，未创建 PR。\n\n${note.summary}`;
    return `已整理主笔记并创建 [PR #${note.pr.number}](${note.pr.url})，仓库文档检查已通过。PR 留待审阅，阅读 Issue 保持原状态。\n\n${note.summary}`;
  }
  async cleanup(job, save) {
    const note = job.note;
    if (!note?.pr || note.cleaned) return;
    const pr = await this.github.pull(note.pr.number);
    if (!pr.merged_at) return;
    if (pr.head.sha !== note.remoteCommit) return; // Someone added commits; preserve their work.
    if (!note.cleanupStarted) {
      await this.assertHead(note, note.localCommit);
      if ((await git(note.worktree, ['status', '--porcelain'])).trim()) return;
      note.cleanupStarted = true; await save();
    }
    const ref = await this.github.branchRef(note.branch);
    if (ref && ref.object.sha !== note.remoteCommit) return;
    if (ref) await this.github.request(`${this.github.base()}/git/refs/heads/${note.branch}`, { method: 'DELETE' });
    let exists = true;
    try { await access(note.worktree); } catch (error) { if (error.code !== 'ENOENT') throw error; exists = false; }
    if (exists) {
      await this.assertHead(note, note.localCommit);
      if ((await git(note.worktree, ['status', '--porcelain'])).trim()) return;
      await git(this.config.workspace, ['worktree', 'remove', note.worktree]);
    }
    // Squash merge may not retain the original commit as an ancestor; identity and clean state were checked above.
    const branch = (await git(this.config.workspace, ['for-each-ref', '--format=%(objectname)', `refs/heads/${note.branch}`])).trim();
    if (branch && branch !== note.localCommit) return;
    if (branch) await git(this.config.workspace, ['branch', '-D', note.branch]);
    await git(this.config.workspace, ['update-ref', '-d', note.baseRef]);
    note.cleaned = true; await save();
  }
}
