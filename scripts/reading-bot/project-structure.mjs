import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const PROJECT_REDIRECTS = '.vitepress/project-redirects.json';

const safeProjectPath = value => typeof value === 'string' && /^Projects\/.+\.md$/.test(value)
  && !value.split('/').some(part => !part || part.startsWith('.')) && !/[\\\x00-\x1f?#]/.test(value);

export async function checkProjectStructure(root, { changedPaths, requireRedirects = false } = {}) {
  const paths = [];
  async function walk(directory) {
    let entries;
    try { entries = await readdir(join(root, directory), { withFileTypes: true }); }
    catch (error) { if (error.code === 'ENOENT') return; throw error; }
    for (const entry of entries) {
      const path = `${directory}/${entry.name}`;
      if (entry.isDirectory()) await walk(path);
      else if (entry.isFile() && path.endsWith('.md')) paths.push(path);
    }
  }
  await walk('Projects');
  const problems = [];
  const changed = changedPaths && new Set(changedPaths);
  for (const path of paths) {
    if (path === 'Projects/index.md' || (changed && !changed.has(path))) continue;
    const parts = path.split('/');
    if (parts.length < 3 || /^\d+[_-]/.test(parts[1])) {
      problems.push(`${path}：项目正文必须位于 Projects/<项目名>/<主题>，不能放在编号学科目录或 Projects 根目录。`);
    }
  }
  let redirects = {};
  try { redirects = JSON.parse(await readFile(join(root, PROJECT_REDIRECTS), 'utf8')); }
  catch (error) {
    if (error.code !== 'ENOENT') problems.push(`${PROJECT_REDIRECTS}：无效 JSON。`);
    else if (requireRedirects) problems.push(`${PROJECT_REDIRECTS}：缺少站点需要的重定向数据文件。`);
  }
  if (!redirects || Array.isArray(redirects) || typeof redirects !== 'object') {
    problems.push(`${PROJECT_REDIRECTS} 必须是重定向对象。`);
  } else {
    const existing = new Set(paths);
    for (const [source, entry] of Object.entries(redirects)) {
      if (!safeProjectPath(source) || !entry || typeof entry !== 'object' || Array.isArray(entry)
        || !safeProjectPath(entry.target) || source === entry.target
        || Object.keys(entry).some(key => !['target', 'fragment', 'anchors'].includes(key))
        || (entry.fragment !== undefined && typeof entry.fragment !== 'string')
        || (entry.anchors !== undefined && (!entry.anchors || typeof entry.anchors !== 'object'
          || Array.isArray(entry.anchors) || Object.values(entry.anchors).some(value => typeof value !== 'string')))) {
        problems.push(`${PROJECT_REDIRECTS}：非法重定向 ${source}`); continue;
      }
      if (existing.has(source)) problems.push(`重定向不能覆盖现存页面：${source}`);
      if (!existing.has(entry.target)) problems.push(`重定向目标不存在：${entry.target}`);
    }
  }
  return { paths: paths.sort(), problems };
}
