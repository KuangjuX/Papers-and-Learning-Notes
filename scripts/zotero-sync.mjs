import { createHash } from 'node:crypto';
import { existsSync, readFileSync, mkdirSync, writeFileSync, realpathSync } from 'node:fs';
import { resolve, dirname, relative, isAbsolute } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';
import { callTool } from './zotero-mcp.mjs';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const hash = text => createHash('sha256').update(text).digest('hex');
const escape = text => String(text ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('{', '&#123;').replaceAll('}', '&#125;')
  .replace(/([\\`*_[\]])/g, '\\$1');
const linkPath = path => path.split('/').map(encodeURIComponent).join('/');

function within(root, path) {
  const rel = relative(root, path);
  if (rel === '..' || rel.startsWith('../') || isAbsolute(rel)) throw new Error('Path must stay inside the repository');
  let ancestor = path;
  while (!existsSync(ancestor)) ancestor = dirname(ancestor);
  const realRel = relative(realpathSync(root), realpathSync(ancestor));
  if (realRel === '..' || realRel.startsWith('../') || isAbsolute(realRel)) throw new Error('Symlink escapes the repository');
  return path;
}

function block(id, body) {
  return `<!-- zotero:${id}:start -->\n${body.trim()}\n<!-- zotero:${id}:end -->`;
}

export function mergeBlocks(current, desired, previous = {}) {
  let text = current;
  const baseline = { ...previous };
  const conflicts = [];
  for (const [id, body] of Object.entries(desired)) {
    const start = `<!-- zotero:${id}:start -->`;
    const end = `<!-- zotero:${id}:end -->`;
    const first = text.indexOf(start), last = text.indexOf(end);
    const incoming = block(id, body);
    if (first < 0 && last < 0 && !Object.hasOwn(previous, id)) {
      text = `${text.trimEnd()}\n\n${incoming}\n`;
      baseline[id] = hash(incoming);
    } else if (first < 0 || last < first || text.indexOf(start, first + start.length) >= 0
      || text.indexOf(end, last + end.length) >= 0) {
      conflicts.push({ id, incoming });
    } else {
      const existing = text.slice(first, last + end.length);
      if (existing === incoming || (previous[id] && hash(existing) === previous[id])) {
        text = text.slice(0, first) + incoming + text.slice(last + end.length);
        baseline[id] = hash(incoming);
      } else if (previous[id] !== hash(incoming)) conflicts.push({ id, incoming });
    }
  }
  return { text, baseline, conflicts };
}

export function renderDossier(data) {
  if (data.schemaVersion !== 1 || !data.paper?.key || !data.paper?.title
    || !Array.isArray(data.attachments) || !/^[A-Z0-9]{8}$/.test(data.paper.key)) {
    throw new Error('Expected a complete zotero_reading_export result');
  }
  const p = data.paper;
  const uriBase = p.libraryID === 1 ? 'library' : null;
  // Zotero group IDs differ from local library IDs. Refuse to invent a group URI.
  if (!uriBase) throw new Error('Group libraries require a verified Zotero group ID; personal library supported currently');
  const source = /^https?:\/\//.test(p.url) ? `[论文](${p.url.replace(/[()\s]/g, encodeURIComponent)})` : '';
  const doi = p.doi ? `[DOI](https://doi.org/${encodeURIComponent(p.doi)})` : '';
  const creators = (p.creators || []).map(c => c.name || [c.firstName, c.lastName].filter(Boolean).join(' ')).join(', ');
  const desired = { metadata: [
    '## 论文来源', `- 作者：${escape(creators)}`, `- 日期：${escape(p.date)}`,
    `- Zotero 条目：\`${p.key}\`（本机 ID ${Number(p.itemId)}）`,
    `- 来源：${[source, doi, `[Zotero](zotero://select/${uriBase}/items/${p.key})`].filter(Boolean).join(' · ')}`,
    '- 阅读状态：进行中。下面为原始标注材料，正式解读需核对论文后另行整理。',
  ].join('\n') };
  for (const attachment of data.attachments) {
    if (!/^[A-Z0-9]{8}$/.test(attachment.key)) throw new Error('Invalid attachment key');
    for (const annotation of attachment.annotations || []) {
      if (!/^[A-Z0-9]{8}$/.test(annotation.key)) throw new Error('Invalid annotation key');
      const pageIndex = annotation.position?.pageIndex;
      const page = Number.isInteger(pageIndex) && pageIndex >= 0 ? `&page=${pageIndex + 1}` : '';
      const url = `zotero://open-pdf/${uriBase}/items/${attachment.key}?annotation=${annotation.key}${page}`;
      if (Object.hasOwn(desired, `annotation-${annotation.key}`)) throw new Error('Duplicate annotation key');
      desired[`annotation-${annotation.key}`] = [
        `## 标注 ${annotation.key} · 第 ${escape(annotation.pageLabel || (pageIndex === undefined ? '?' : pageIndex + 1))} 页`,
        `[回到原文](${url}) · PDF \`${attachment.key}\` · ${escape(annotation.type)}`,
        '', '**原文**', '', annotation.text ? escape(annotation.text).split('\n').map(l => `> ${l}`).join('\n') : '（区域或图片标注，无文本）',
        '', '**Zotero 评论（含个人批注或 AI 解读；来源由评论本身标明）**', '',
        annotation.comment ? escape(annotation.comment) : '（无评论）',
      ].join('\n');
    }
  }
  for (const note of data.notes || []) {
    if (!/^[A-Z0-9]{8}$/.test(note.key)) throw new Error('Invalid note key');
    desired[`note-${note.key}`] = `## Zotero 子笔记 ${note.key}\n\n[打开笔记](zotero://select/${uriBase}/items/${note.key})\n\n`
      + escape(String(note.html || '').replace(/<\/(p|div|li|h[1-6])>/gi, '\n').replace(/<[^>]*>/g, ''));
  }
  return desired;
}

export function syncDossier(data, { root = ROOT, topic, slug, dryRun = false } = {}) {
  if (!/^[a-z][a-z0-9-]*$/.test(topic || '') || !/^[a-z0-9][a-z0-9-]*$/.test(slug || '')) {
    throw new Error('Provide --topic and --slug using lowercase letters, digits and hyphens');
  }
  const topicIndex = within(root, resolve(root, 'notes', topic, 'index.md'));
  if (!existsSync(topicIndex)) throw new Error('Choose an existing topic in notes/');
  const desired = renderDossier(data);
  const file = within(root, resolve(root, 'notes', topic, slug, 'zotero-reading.md'));
  const stateFile = within(root, resolve(root, '.local/zotero-sync', data.paper.key + '.json'));
  const state = existsSync(stateFile) ? JSON.parse(readFileSync(stateFile, 'utf8')) : { baseline: {} };
  if (state.file && state.file !== relative(root, file)) throw new Error('This paper was synced elsewhere; reuse its original topic/slug');
  const existing = existsSync(file) ? readFileSync(file, 'utf8') : '';
  if (existing && !state.file) throw new Error('Existing note has no sync history; choose another slug');
  const initial = `# ${escape(data.paper.title)}：阅读材料\n\n## 我的理解\n\n在此记录个人理解、待验证问题和补充推导。此区域由你维护。\n`;
  const merged = mergeBlocks(existing || initial, desired, state.baseline);
  const removed = Object.keys(state.baseline).filter(id => !Object.hasOwn(desired, id));
  const result = { file: relative(root, file), conflicts: merged.conflicts.map(c => c.id), removed, dryRun };
  if (dryRun) return result;
  const save = (path, content) => {
    within(root, path);
    if (existsSync(path) && readFileSync(path, 'utf8') === content) return;
    mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, content, 'utf8');
  };
  save(file, merged.text);
  // Keep conflict drafts private: they should not enter the public notes website.
  const conflictFile = within(root, resolve(root, '.local/zotero-sync', data.paper.key + '.incoming.md'));
  if (merged.conflicts.length) save(conflictFile, '# 待合并的 Zotero 更新\n\n' + merged.conflicts.map(c => c.incoming).join('\n\n') + '\n');
  save(stateFile, JSON.stringify({ file: relative(root, file), baseline: merged.baseline }, null, 2) + '\n');
  const title = escape(data.paper.title) + '（阅读中）';
  for (const [index, label] of [[topicIndex, 'Zotero 阅读材料'], [resolve(root, 'reading/index.md'), 'Zotero 阅读进度']]) {
    within(root, index);
    const content = readFileSync(index, 'utf8');
    const target = linkPath(relative(dirname(index), file));
    if (!content.includes(`](${target})`)) save(index, content.trimEnd() + (content.includes(`## ${label}`) ? '\n' : `\n\n## ${label}\n\n`) + `- [${title}](${target})\n`);
  }
  return result;
}

async function main() {
  const { values } = parseArgs({ options: {
    item: { type: 'string' }, input: { type: 'string' }, topic: { type: 'string' },
    slug: { type: 'string' }, 'dry-run': { type: 'boolean' }, search: { type: 'string' },
  } });
  if (values.search) {
    const data = await callTool('library_search', {
      entity: 'items', mode: 'search',
      conditions: [{ condition: 'title', operator: 'contains', value: values.search }],
      include: ['attachments'], limit: 20,
    });
    console.log(JSON.stringify({ results: data.results?.map(item => ({
      itemId: item.itemId, key: item.itemKey, title: item.title,
      year: item.year, attachments: item.attachments,
    })), totalCount: data.totalCount, limited: data.limited, warnings: data.warnings }, null, 2)); return;
  }
  const raw = values.input ? JSON.parse(readFileSync(resolve(values.input), 'utf8'))
    : await callTool('zotero_reading_export', { itemId: Number(values.item) });
  const data = raw.returnValue ?? raw;
  const result = syncDossier(data, { topic: values.topic, slug: values.slug, dryRun: values['dry-run'] });
  console.log(JSON.stringify(result, null, 2));
  if (result.conflicts.length) process.exitCode = 2;
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
