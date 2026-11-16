import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { completionDirective, completionProblems } from './completion.mjs';

test('only a direct close-after-merge instruction authorizes completion of this Issue', () => {
  for (const text of ['PR 合并后关闭 issue', '请整理，PR合并后自动关闭当前Issue。', 'PR 合并完成后，请关闭 issue #31',
    'PR #99 合并后关闭本 issue', '不需要报告，PR合并后关闭issue', '补充为什么需要转置？PR合并后关闭issue。', 'after the PR is merged, close this issue #31']) {
    assert.equal(completionDirective(text, 31), true, text);
  }
  for (const text of ['整理阶段性笔记', 'Closes #31', 'PR 合并后关闭 issue #99', '> PR 合并后关闭 issue',
    '```text\nPR 合并后关闭 issue\n```', '“PR 合并后关闭 issue”', '`PR 合并后关闭 issue`',
    'PR 合并后关闭 issue 吗？', '是否 PR 合并后关闭 issue', '例如 PR 合并后关闭 issue', '如果 PR 合并后关闭 issue']) {
    assert.equal(completionDirective(text, 31), null, text);
  }
  for (const text of ['PR 合并后不要关闭 issue', 'PR 合并后关闭 issue，但现在还没读完', '暂时不要关闭 issue，保持打开',
    'PR合并后关闭issue，不需要标记已读', 'PR合并后关闭issue，别标记已读',
    "after the PR is merged, don't close this issue"]) assert.equal(completionDirective(text, 31), false, text);
});

test('completion gate verifies the matching paper, leaves projects exempt and rejects missing/ambiguous targets', async t => {
  const root = await mkdtemp(join(tmpdir(), 'reading-completion-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(join(root, 'Papers/topic'), { recursive: true });
  await writeFile(join(root, 'Papers/topic/index.md'), '| ⬜ 📝 | **Paper A** | [Note](A/a.md) |\n| ✅ 📝 | **Paper B** | [Note](B/b.md) |\n');
  const check = (title, files = []) => completionProblems(root, { title }, files);
  assert.equal((await check('[论文阅读] Paper A')).length, 1);
  assert.deepEqual(await check('Paper B'), []);
  assert.equal((await check('Unrecognized paper', [{ path: 'Papers/topic/A/a.md' }])).length, 1);
  assert.equal((await check('Unknown', [{ path: 'Papers/topic/A/a.md' }, { path: 'Papers/topic/B/b.md' }])).length, 1);
  assert.deepEqual(await check('[代码阅读] CuDNN QSA backward'), []);
  assert.equal((await check('[论文阅读] Unknown', [{ path: 'Projects/Example/a.md' }])).length, 1);
});
