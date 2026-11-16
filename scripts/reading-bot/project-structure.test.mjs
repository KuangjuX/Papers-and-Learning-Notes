import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { checkProjectStructure, PROJECT_REDIRECTS } from './project-structure.mjs';

async function fixture(t, files) {
  const root = await mkdtemp(join(tmpdir(), 'project-archive-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  for (const [path, body] of Object.entries(files)) {
    await mkdir(dirname(join(root, path)), { recursive: true });
    await writeFile(join(root, path), body);
  }
  return root;
}
const target = 'Projects/FlashMLA/dsa-sparse-attention.md';
const old = 'Projects/01_Attention/FlashMLA/dsa-sparse-attention.md';

test('project topics stay separate while papers and foundations keep their topic layout', async t => {
  const root = await fixture(t, {
    'Projects/index.md': '# Projects', [target]: '# DSA',
    'Projects/SGLang/Disaggregation/index.md': '# PD',
    'Projects/SGLang/MTP/verification.md': '# MTP',
    'Projects/DeepGEMM/fp8.md': '# FP8 implementation',
    'Papers/01_Attention/Paper/paper.md': '# Paper',
    'Foundations/01_Attention/attention.md': '# Attention',
  });
  assert.deepEqual((await checkProjectStructure(root)).problems, []);
});

test('legacy numbered project hierarchy and ungrouped articles are rejected only when touched', async t => {
  const root = await fixture(t, { [old]: '# DSA', [target]: '# DSA', 'Projects/loose.md': '# Loose' });
  assert.equal((await checkProjectStructure(root)).problems.length, 2);
  assert.equal((await checkProjectStructure(root, { changedPaths: [old] })).problems.length, 1);
  assert.deepEqual((await checkProjectStructure(root, { changedPaths: [target] })).problems, []);
});

test('project migration preserves old pages with data redirects to existing project topics', async t => {
  const root = await fixture(t, { [target]: '# DSA', [PROJECT_REDIRECTS]: JSON.stringify({
    [old]: { target, anchors: { old: 'kernel-design' } },
  }) });
  assert.deepEqual((await checkProjectStructure(root, { requireRedirects: true })).problems, []);
});

test('project redirects reject external/traversal targets, invalid data and page overwrites', async t => {
  for (const redirects of [null, [], { [old]: { target: '../outside.md' } },
    { [old]: { target: 'https://example.com/' } }, { [old]: { target: 'Projects/Missing/topic.md' } },
    { [old]: { target, code: 'alert(1)' } }, { [old]: { target, anchors: [] } },
    { [old]: { target, anchors: { old: {} } } }, { [target]: { target } }]) {
    const root = await fixture(t, { [target]: '# DSA', [PROJECT_REDIRECTS]: JSON.stringify(redirects) });
    assert.ok((await checkProjectStructure(root)).problems.length, JSON.stringify(redirects));
  }
  const root = await fixture(t, { [target]: '# DSA', [old]: '# Old', [PROJECT_REDIRECTS]: JSON.stringify({ [old]: { target } }) });
  assert.ok((await checkProjectStructure(root, { changedPaths: [] })).problems.some(p => p.includes('覆盖')));
});

test('site checks require project redirect data but legacy PRs may lack it', async t => {
  const root = await fixture(t, { [target]: '# DSA' });
  assert.ok((await checkProjectStructure(root, { requireRedirects: true })).problems.length);
  assert.deepEqual((await checkProjectStructure(root)).problems, []);
});
