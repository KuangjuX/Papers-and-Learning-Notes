import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, symlinkSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { runInNewContext } from 'node:vm';
import { mergeBlocks, renderDossier, syncDossier } from './zotero-sync.mjs';
import { proxyRequest, readingExportScript, decodeToolResult } from './zotero-mcp.mjs';

const fixture = () => ({ schemaVersion: 1,
  paper: { itemId: 12, key: 'PAPER123', title: 'Test Paper', libraryID: 1, date: '2026',
    url: 'https://example.org/paper', creators: [{ name: 'A Researcher' }] },
  attachments: [{ key: 'ATTACH12', itemId: 13, libraryID: 1,
    annotations: [{ key: 'ANNOT123', itemId: 14, text: 'A'.repeat(900), comment: '解释',
      type: 'highlight', pageLabel: 'iv', position: { pageIndex: 3 } }] }], notes: [],
});
function repo() {
  const root = mkdtempSync(join(tmpdir(), 'zotero-sync-test-'));
  mkdirSync(join(root, 'Papers/01_Attention'), { recursive: true });
  mkdirSync(join(root, 'Papers'), { recursive: true });
  writeFileSync(join(root, 'Papers/01_Attention/index.md'), '# LLM\n');
  writeFileSync(join(root, 'Papers/index.md'), '# Reading\n');
  return root;
}

test('round trip preserves long annotations and verified Zotero coordinates', () => {
  const desired = renderDossier(fixture());
  assert.ok(desired['annotation-ANNOT123'].includes('A'.repeat(900)));
  assert.ok(desired['annotation-ANNOT123'].includes('annotation=ANNOT123&page=4'));
  assert.ok(desired['annotation-ANNOT123'].includes('第 iv 页'));
});

test('incremental update preserves user text, adds annotation and updates unchanged blocks', () => {
  const root = repo(), data = fixture();
  const options = { root, topic: '01_Attention', slug: 'test-paper' };
  const first = syncDossier(data, options);
  assert.equal(first.file, '.local/zotero-sync/PAPER123.md');
  const file = join(root, first.file);
  writeFileSync(file, readFileSync(file, 'utf8') + '\n手写的重要理解\n');
  data.attachments[0].annotations[0].comment = '新解释';
  data.attachments[0].annotations.push({ key: 'ANNOT456', text: 'New quote', type: 'highlight', position: { pageIndex: 5 } });
  assert.deepEqual(syncDossier(data, options).conflicts, []);
  const updated = readFileSync(file, 'utf8');
  assert.ok(updated.includes('手写的重要理解'));
  assert.ok(updated.includes('新解释'));
  assert.ok(updated.includes('New quote'));
  const again = syncDossier(data, options);
  assert.equal(readFileSync(file, 'utf8'), updated);
  assert.deepEqual(again.conflicts, []);
  assert.equal(readFileSync(join(root, 'Papers/index.md'), 'utf8'), '# Reading\n');
  assert.equal(readFileSync(join(root, 'Papers/01_Attention/index.md'), 'utf8'), '# LLM\n');
});

test('sync only writes private caches and leaves public notes and indexes untouched', () => {
  const root = repo();
  const topic = join(root, 'Papers/01_Attention/index.md');
  const content = '# Attention\n\n## 本地笔记\n\n- Existing note\n';
  writeFileSync(topic, content);
  const options = { root, topic: '01_Attention', slug: 'test-paper' };
  syncDossier(fixture(), options);
  syncDossier(fixture(), options);
  assert.equal(readFileSync(topic, 'utf8'), content);
  assert.equal(existsSync(join(root, 'Papers/01_Attention/Test-Paper')), false);
  assert.equal(readFileSync(join(root, 'Papers/index.md'), 'utf8'), '# Reading\n');
  assert.deepEqual(JSON.parse(readFileSync(join(root, '.local/zotero-sync/PAPER123.export.json'), 'utf8')), fixture());
  assert.doesNotMatch(readFileSync(join(root, '.local/zotero-sync/PAPER123.md'), 'utf8'), /我的理解|阅读状态：进行中/);
});

test('manual edits inside managed blocks survive source changes and produce private conflict draft', () => {
  const root = repo(), data = fixture(), options = { root, topic: '01_Attention', slug: 'test-paper' };
  const first = syncDossier(data, options), file = join(root, first.file);
  writeFileSync(file, readFileSync(file, 'utf8').replace('解释', '我的手写分析'));
  data.attachments[0].annotations[0].comment = '上游修改';
  const result = syncDossier(data, options);
  assert.deepEqual(result.conflicts, ['annotation-ANNOT123']);
  assert.ok(readFileSync(file, 'utf8').includes('我的手写分析'));
  assert.ok(readFileSync(join(root, '.local/zotero-sync/PAPER123.incoming.md'), 'utf8').includes('上游修改'));
});

test('deleted blocks are not resurrected; deleted source annotations are reported, preserved', () => {
  const first = mergeBlocks('', { a: 'source' });
  assert.deepEqual(mergeBlocks('', { a: 'source' }, first.baseline).conflicts.map(c => c.id), ['a']);
  const root = repo(), data = fixture(), options = { root, topic: '01_Attention', slug: 'test-paper' };
  const result = syncDossier(data, options);
  data.attachments[0].annotations = [];
  assert.deepEqual(syncDossier(data, options).removed, ['annotation-ANNOT123']);
  assert.ok(readFileSync(join(root, result.file), 'utf8').includes('ANNOT123'));
});

test('dry run and path validation do not write outside the intended topic', () => {
  const root = repo();
  syncDossier(fixture(), { root, topic: '01_Attention', slug: 'test-paper', dryRun: true });
  assert.equal(existsSync(join(root, 'Papers/01_Attention/Test-Paper')), false);
  assert.equal(existsSync(join(root, '.local')), false);
  assert.throws(() => syncDossier(fixture(), { root, topic: '../outside', slug: 'x' }));
  assert.throws(() => syncDossier(fixture(), { root, topic: '01_Attention', slug: '../outside' }));
  const outside = mkdtempSync(join(tmpdir(), 'zotero-outside-'));
  symlinkSync(outside, join(root, 'Papers/01_Attention/Escape'));
  assert.throws(() => syncDossier(fixture(), { root, topic: '01_Attention', slug: 'escape' }), /Symlink/);
});

test('raw annotations cannot inject HTML, Vue expressions or managed-block markers', () => {
  const data = fixture();
  data.attachments[0].annotations[0].text = '<script>alert(1)</script> {{ expr }} <!-- zotero:a:end -->';
  const rendered = renderDossier(data)['annotation-ANNOT123'];
  assert.ok(!rendered.includes('<script>'));
  assert.ok(!rendered.includes('{{'));
  assert.ok(!rendered.includes('<!-- zotero:a:end -->'));
});

test('annotation comments preserve literal notation and lines without HTML or marker injection', () => {
  const data = fixture();
  data.attachments[0].annotations[0].comment = 'IDs[0:4] S_j\\U\n{{ expr }} <script>bad</script>\n<!-- zotero:a:end -->';
  const rendered = renderDossier(data)['annotation-ANNOT123'];
  assert.ok(rendered.includes('<pre v-pre'));
  assert.ok(rendered.includes('IDs[0:4] S_j\\U\n{{ expr }}'));
  assert.ok(rendered.includes('&lt;script&gt;bad&lt;/script&gt;'));
  assert.ok(!rendered.includes('<script>'));
  assert.ok(!rendered.includes('<!-- zotero:a:end -->'));
});

test('proxy filters broad tools and offers a fixed read-only export', async () => {
  const response = await proxyRequest({ jsonrpc: '2.0', id: 1, method: 'tools/list' }, async () => ({
    jsonrpc: '2.0', id: 1, result: { tools: ['library_read', 'run_command', 'file_io', 'library_delete', 'zotero_script'].map(name => ({ name })) },
  }));
  assert.deepEqual(response.result.tools.map(t => t.name), ['library_read', 'zotero_reading_export']);
  let called = false;
  const denied = await proxyRequest({ jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'run_command' } }, async () => { called = true; });
  assert.equal(called, false); assert.ok(denied.error);
  await proxyRequest({ jsonrpc: '2.0', id: 3, method: 'tools/call', params: { name: 'zotero_reading_export', arguments: { itemId: 12 } } }, async request => {
    assert.equal(request.params.name, 'zotero_script');
    assert.equal(request.params.arguments.effect, 'read');
    assert.equal(request.params.arguments.access, 'library');
    assert.ok(request.params.arguments.script.includes('Zotero.Items.get(12)'));
    return { jsonrpc: '2.0', id: 3, result: {} };
  });
  assert.throws(() => readingExportScript('12); deleteAll()'));
});

test('proxy notifications produce no response and failures do not expose credentials', async () => {
  const notification = await proxyRequest({ jsonrpc: '2.0', method: 'notifications/initialized' }, () => { throw new Error('Unexpected call'); });
  assert.equal(notification, null);
  assert.equal((await proxyRequest({ method: 'tools/list', id: 1 })).error.code, -32600);
});

test('decodes the upstream MCP result envelope for full exports and search', () => {
  const data = fixture();
  const raw = { content: [{ type: 'text', text: JSON.stringify({
    ok: true, result: { access: 'library', effect: 'read', returnValue: data }, artifacts: [],
  }) }] };
  assert.deepEqual(decodeToolResult(raw).returnValue, data);
  assert.deepEqual(decodeToolResult({ structuredContent: { ok: true, result: { results: [] } } }), { results: [] });
  assert.throws(() => decodeToolResult({ content: [{ type: 'text', text: '{"ok":false,"error":"failed"}' }] }), /failed/);
});

test('export rehydrates detached upstream annotation snapshots without losing getter fields', () => {
  const data = fixture(), annotation = data.attachments[0].annotations[0];
  const items = new Map([
    [12, { id: 12, key: data.paper.key, libraryID: 1,
      isRegularItem: () => true, toJSON: () => data.paper,
      getAttachments: () => [13], getNotes: () => [] }],
    [13, { id: 13, key: 'ATTACH12', libraryID: 1,
      isPDFAttachment: () => true, getField: () => 'PDF',
      getAnnotations: () => [{ _id: 14, _key: 'ANNOT123' }] }],
    [14, { id: 14, key: annotation.key, isAnnotation: () => true,
      annotationType: annotation.type, annotationText: annotation.text,
      annotationComment: annotation.comment, annotationPageLabel: annotation.pageLabel,
      annotationPosition: JSON.stringify(annotation.position) }],
  ]);
  const result = runInNewContext(`(function(){${readingExportScript(12)}})()`,
    { Zotero: { Items: { get: id => items.get(id) } } });
  const exported = result.attachments[0].annotations[0];
  assert.equal(exported.key, 'ANNOT123');
  assert.equal(exported.text, 'A'.repeat(900));
  assert.equal(exported.comment, '解释');
  assert.equal(exported.position.pageIndex, 3);
});


test('legacy export migration preserves manual text, hashes and old topic aliases', () => {
  for (const oldPath of [
    'notes/llm/flashattention-4/zotero-reading.md',
    'papers/01_Attention/flashattention-4/zotero-reading.md',
    'Papers/01_Attention/FlashAttention-4/zotero-reading.md',
  ]) {
    const root = repo(), data = fixture();
    const old = mergeBlocks('# Original\n\n归档前的个人笔记\n', renderDossier(data));
    const legacy = join(root, 'Papers/01_Attention/FlashAttention-4/zotero-reading.md');
    mkdirSync(join(root, 'Papers/01_Attention/FlashAttention-4'), { recursive: true });
    writeFileSync(legacy, old.text.replace('解释', '我的手写分析'));
    mkdirSync(join(root, '.local/zotero-sync'), { recursive: true });
    const stateFile = join(root, '.local/zotero-sync/PAPER123.json');
    const state = JSON.stringify({ file: oldPath, baseline: old.baseline });
    writeFileSync(stateFile, state);
    data.attachments[0].annotations[0].comment = '上游更新';
    const options = { root, topic: 'llm', slug: 'flashattention-4' };
    const preview = syncDossier(data, { ...options, dryRun: true });
    assert.equal(readFileSync(stateFile, 'utf8'), state);
    assert.equal(existsSync(join(root, preview.file)), false);
    const result = syncDossier(data, options);
    assert.deepEqual(result.conflicts, ['annotation-ANNOT123']);
    const cached = readFileSync(join(root, result.file), 'utf8');
    assert.ok(cached.includes('归档前的个人笔记'));
    assert.ok(cached.includes('我的手写分析'));
    assert.equal(readFileSync(legacy, 'utf8'), cached);
    const migrated = JSON.parse(readFileSync(stateFile, 'utf8'));
    assert.equal(migrated.file, '.local/zotero-sync/PAPER123.md');
    assert.equal(migrated.noteDirectory, 'Papers/01_Attention/FlashAttention-4');
    assert.deepEqual(migrated.baseline, old.baseline);
    assert.equal(syncDossier(data, { root, topic: '01_Attention', slug: 'flashattention-4' }).file, result.file);
    assert.throws(() => syncDossier(data, { root, topic: '01_Attention', slug: 'different-paper' }), /reuse/);
    assert.throws(() => syncDossier(data, { root, topic: 'llm', slug: 'unmapped-paper' }), /numbered topic/);
    assert.equal(existsSync(join(root, 'notes')), false);
  }
});

test('private cache paths reject symlink escapes', () => {
  const root = repo();
  const outside = mkdtempSync(join(tmpdir(), 'zotero-private-outside-'));
  symlinkSync(outside, join(root, '.local'));
  assert.throws(() => syncDossier(fixture(), { root, topic: '01_Attention', slug: 'test-paper' }), /Symlink/);
});
