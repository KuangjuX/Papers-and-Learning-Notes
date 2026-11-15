import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import vm from 'node:vm';
import { checkPaperStructure, paperSlug, paperTitle, PAPER_REDIRECTS } from './paper-structure.mjs';
import { redirectPage, resolveRedirect } from '../../.vitepress/redirect-page.mjs';

async function fixture(t, files) {
  const root = await mkdtemp(join(tmpdir(), 'paper-structure-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const [path, text] of Object.entries(files)) {
    await mkdir(dirname(join(root, path)), { recursive: true });
    await writeFile(join(root, path), text);
  }
  return root;
}
const paper = 'Papers/01_Attention/FlashAttention-3/flashattention3.md';
const title = '# FlashAttention-3: Fast and Accurate Attention\n\nMechanism.\n';

test('paper name uses the formal name or complete title, including version numbers', () => {
  assert.equal(paperSlug('FlashAttention-3: Fast and Accurate Attention'), 'flashattention3');
  assert.equal(paperSlug('Attention Is All You Need'), 'attention-is-all-you-need');
  assert.equal(paperSlug('DeepSeek-V3.2-Exp: Sparse Attention'), 'deepseek-v3-2-exp');
  assert.equal(paperTitle('---\ntitle: ignored\n---\n```md\n# Example\n```\n<pre>\n# Source\n</pre>\n'+title), 'FlashAttention-3: Fast and Accurate Attention');
});

test('one canonical note and collection indexes pass without requiring extra paper files', async t => {
  const root = await fixture(t, { [paper]: title, 'Papers/01_Attention/index.md': '# Attention\n', 'Papers/index.md': '# Papers\n' });
  const result = await checkPaperStructure(root);
  assert.equal(result.notes.length, 1); assert.deepEqual(result.problems, []);
});

test('topic, source-platform and paper-level index filenames cannot publish', async t => {
  for (const name of ['fp8.md', 'github-reading.md', 'zhihu-reading.md', 'index.md']) {
    const root = await fixture(t, { [paper.replace('flashattention3.md', name)]: title });
    assert.ok((await checkPaperStructure(root)).problems.some(p => p.includes('flashattention3.md')));
  }
});

test('a second note for the same named paper in another directory is rejected', async t => {
  const second = 'Papers/08_Quantization/Other/flashattention3.md';
  const root = await fixture(t, { [paper]: title, [second]: '# FlashAttention-3: FP8 implementation\n' });
  assert.ok((await checkPaperStructure(root, { changedPaths: [second] })).problems.some(p => p.includes('多个正文')));
});

test('a separately titled topic in a named paper directory still fails uniqueness', async t => {
  const second = paper.replace('flashattention3.md', 'low-precision.md');
  const root = await fixture(t, { [paper]: title, [second]: '# Low Precision\n' });
  assert.ok((await checkPaperStructure(root, { changedPaths: [second] })).problems.some(p => p.includes('论文目录')));
});

test('shared collection folders may contain different named papers', async t => {
  const root = await fixture(t, { 'Papers/04_GPU/Kernel-Generation/cake.md': '# CAKE: A compiler\n', 'Papers/04_GPU/Kernel-Generation/avo.md': '# AVO: Another paper\n' });
  assert.deepEqual((await checkPaperStructure(root)).problems, []);
});

test('legacy PRs are checked for touched notes without forcing unrelated migrations', async t => {
  const root = await fixture(t, { [paper]: title, 'Papers/01_Attention/Old/github-reading.md': '# Old Paper\n' });
  assert.deepEqual((await checkPaperStructure(root, { changedPaths: [paper] })).problems, []);
  assert.ok((await checkPaperStructure(root)).problems.length);
});

test('rename with a data-only redirect leaves a single paper and valid old URL', async t => {
  const root = await fixture(t, { [paper]: title, [PAPER_REDIRECTS]: JSON.stringify({ [paper.replace('flashattention3.md', 'fp8.md')]: { target: paper } }) });
  assert.deepEqual((await checkPaperStructure(root)).problems, []);
});

test('redirect validation rejects traversal, executable values, missing targets and canonical overwrite', async t => {
  const old = paper.replace('flashattention3.md', 'fp8.md');
  for (const redirects of [[], null, { [old]: { target: '../outside.md' } }, { [old]: { target: paper, code: 'alert(1)' } },
    { [old]: { target: paper, anchors: { x: {} } } }, { [old]: { target: 'Papers/Missing/missing.md' } }, { [paper]: { target: old } }]) {
    const root = await fixture(t, { [paper]: title, [PAPER_REDIRECTS]: JSON.stringify(redirects) });
    assert.ok((await checkPaperStructure(root)).problems.length, JSON.stringify(redirects));
  }
});

test('historical redirects resolve through renames, preserving section hashes and query strings', () => {
  const redirects = { 'notes/layout.md': 'Papers/Old.md', 'Papers/Old.md': { target: 'Papers/New.md', fragment: 'chapter-1', anchors: { '定义': 'chapter-1-定义' } } };
  const resolved = resolveRedirect('notes/layout.md', redirects);
  assert.equal(resolved.target, 'Papers/New.md');
  const html = redirectPage('/Papers/New.html', resolved.steps);
  const script = html.match(/<script>(.*?)<\/script>/s)[1];
  for (const [hash, expected] of [['', 'chapter-1'], ['#%E5%AE%9A%E4%B9%89', 'chapter-1-定义'], ['#pdf-page-5', 'pdf-page-5'], ['#constructor', 'constructor'], ['#%ZZ', '%ZZ']]) {
    let target;
    vm.runInNewContext(script, { location: { hash, search: '?from=old', replace: value => { target = value; } } });
    assert.equal(target, '/Papers/New.html?from=old#'+encodeURIComponent(expected));
  }
  assert.throws(() => resolveRedirect('a', { a: 'b', b: 'a' }), /cycle/);
});

test('the repository check requires the redirect data that its site configuration imports', async t => {
  const root = await fixture(t, { [paper]: title });
  assert.ok((await checkPaperStructure(root, { requireRedirects: true })).problems.some(p => p.includes('缺少站点')));
  assert.deepEqual((await checkPaperStructure(root, { changedPaths: [paper] })).problems, []);
});
