import { readdir, readFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';

// The name before a subtitle is the paper's named method/system. Papers without
// one use their full title. A filename identifies the paper, never a session.
export function paperSlug(title) {
  return title.split(/[:：]/u)[0].normalize('NFKC').toLowerCase()
    .replace(/\{#[^}]+\}\s*$/, '').replace(/['’]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '')
    .replace(/(?<=\p{L})-(?=\d)/gu, '');
}

export function paperTitle(text) {
  // Ignore frontmatter, fenced examples, and literal imported source blocks.
  text = text.replace(/^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/, '')
    .replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, '');
  let fence;
  for (const line of text.split(/\r?\n/)) {
    const marker = line.match(/^\s{0,3}(`{3,}|~{3,})/);
    if (marker) {
      if (!fence) fence = marker[1];
      else if (marker[1][0] === fence[0] && marker[1].length >= fence.length) fence = undefined;
      continue;
    }
    if (!fence && /^#\s+\S/.test(line)) return line.replace(/^#\s+/, '').trim();
  }
  return '';
}

export function collectionIndex(path) {
  return /^Papers\/(?:index\.md|[^/]+\/index\.md|[^/]+\/(?:Compiler|Agents)\/index\.md)$/.test(path);
}

export async function readPaperNotes(root) {
  const notes = [];
  async function walk(directory) {
    let entries;
    try { entries = await readdir(join(root, directory), { withFileTypes: true }); }
    catch (error) { if (error.code === 'ENOENT') return; throw error; }
    for (const entry of entries) {
      const path = `${directory}/${entry.name}`;
      if (entry.isDirectory()) await walk(path);
      else if (entry.isFile() && path.endsWith('.md') && !collectionIndex(path)) {
        const title = paperTitle(await readFile(join(root, path), 'utf8'));
        notes.push({ path, title, slug: paperSlug(title) });
      }
    }
  }
  await walk('Papers');
  return notes.sort((a, b) => a.path.localeCompare(b.path));
}

export const PAPER_REDIRECTS = '.vitepress/paper-redirects.json';
const safePaperPath = value => typeof value === 'string' && /^Papers\/.+\.md$/.test(value)
  && !value.split('/').some(part => !part || part.startsWith('.')) && !/[\\\x00-\x1f?#]/.test(value);

export async function checkPaperStructure(root, { changedPaths } = {}) {
  const notes = await readPaperNotes(root);
  const changed = changedPaths && new Set(changedPaths);
  const touched = note => !changed || changed.has(note.path);
  const problems = [];
  const groups = new Map();
  for (const note of notes) {
    const name = basename(note.path);
    if (touched(note) && (!note.slug || name !== `${note.slug}.md`
      || /^(?:fp\d+|kernel-design|github-reading|zhihu-reading|index)$/.test(note.slug))) {
      problems.push(`${note.path}：正文文件按论文名命名，应为 ${note.slug || '论文名称'}.md；局部主题、来源平台和 index 不能作为论文文件名。`);
    }
    const group = groups.get(note.slug) ?? []; group.push(note); groups.set(note.slug, group);
  }
  for (const [slug, group] of groups) {
    if (slug && group.length > 1 && group.some(touched)) problems.push(`同一论文名 ${slug} 对应多个正文，合并到唯一文件：${group.map(n => n.path).join('、')}`);
  }
  // A named paper directory cannot gain a second topic/translation document.
  const directories = new Map();
  for (const note of notes) {
    const directory = dirname(note.path);
    const group = directories.get(directory) ?? []; group.push(note); directories.set(directory, group);
  }
  for (const [directory, group] of directories) {
    if (group.length > 1 && group.some(touched)
      && group.some(n => n.slug === paperSlug(basename(directory)))) {
      problems.push(`${directory} 是论文目录，正文、译文和源码解读必须合并到一个 Markdown 文件：${group.map(n => basename(n.path)).join('、')}`);
    }
  }
  let redirects = {};
  try { redirects = JSON.parse(await readFile(join(root, PAPER_REDIRECTS), 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT') problems.push(`${PAPER_REDIRECTS}：无效 JSON。`); }
  if (!redirects || Array.isArray(redirects) || typeof redirects !== 'object') {
    problems.push(`${PAPER_REDIRECTS} 必须是重定向对象。`);
  } else {
    for (const [source, entry] of Object.entries(redirects)) {
      if (!safePaperPath(source) || !entry || typeof entry !== 'object' || Array.isArray(entry)
        || !safePaperPath(entry.target) || source === entry.target
        || Object.keys(entry).some(k => !['target', 'fragment', 'anchors'].includes(k))
        || (entry.fragment !== undefined && typeof entry.fragment !== 'string')
        || (entry.anchors !== undefined && (!entry.anchors || typeof entry.anchors !== 'object' || Array.isArray(entry.anchors)
          || Object.values(entry.anchors).some(v => typeof v !== 'string')))) {
        problems.push(`${PAPER_REDIRECTS}：非法重定向 ${source}`); continue;
      }
      if (notes.some(n => n.path === source) || collectionIndex(source) && await exists(root, source)) {
        problems.push(`重定向不能覆盖现存页面：${source}`);
      }
      if (!await exists(root, entry.target)) problems.push(`重定向目标不存在：${entry.target}`);
    }
  }
  return { notes, problems };
}
async function exists(root, path) {
  try { await readFile(join(root, path)); return true; }
  catch (error) { if (error.code === 'ENOENT') return false; throw error; }
}
