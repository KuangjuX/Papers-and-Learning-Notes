import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, posix, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const layout = JSON.parse(readFileSync(resolve(root, 'scripts/archive-layout.json'), 'utf8'))
const start = '<!-- paper-reading-list:start -->'
const end = '<!-- paper-reading-list:end -->'

function rootLinks(line, directory) {
  return line.replace(/\]\(([^)]+)\)/g, (match, target) => {
    if (/^(?:[a-z][\w+.-]*:|\/\/|\/)/i.test(target)) return match
    return `](${target.startsWith('#') ? `${directory}/index.md${target}` : posix.normalize(`${directory}/${target}`)})`
  })
}

let total = 0
let read = 0
const topics = layout.sections.map(({ directory, title }) => {
  const path = `Papers/${directory}`
  const lines = readFileSync(resolve(root, path, 'index.md'), 'utf8').split('\n')
  const groups = []
  let heading = ''
  for (const line of lines) {
    if (line.startsWith('## ')) heading = line.slice(3)
    if (!/^\| (?:✅|⬜)/u.test(line)) continue
    let group = groups.at(-1)
    if (!group || group.heading !== heading) {
      group = { heading, rows: [] }
      groups.push(group)
    }
    group.rows.push(rootLinks(line, path))
  }
  const rows = groups.flatMap(group => group.rows)
  const done = rows.filter(line => line.startsWith('| ✅')).length
  total += rows.length
  read += done
  return { title, path, groups, count: rows.length, done }
})

const paperIndex = readFileSync(resolve(root, 'Papers/index.md'), 'utf8')
const zoteroProgress = paperIndex.split('## Zotero 阅读进度\n')[1]?.split('\n## ')[0].trim()

const block = [
  start,
  '## Paper 阅读清单',
  '',
  `共 **${total} 个分类条目**：已读 ${read}，待读 ${total - read}。保留原有跨分类重复收录；下载 PDF 或存在标注不代表已读。`,
  '',
  '✅ 已读 · ⬜ 待读 · 📝 有笔记。此清单由各主题索引生成；修改阅读状态后运行 `pnpm docs:sync-reading-list` 同步。',
  '',
  '已下载论文、教材与技术资料的分类标签、PDF 和 Zotero 入口见 [PDF 归档与标签目录](Papers/downloaded-papers.md)。',
  '',
  '| 主题 | 条目 | 已读 | 待读 |',
  '| --- | ---: | ---: | ---: |',
  ...topics.map(t => `| [${t.title}](${t.path}/index.md) | ${t.count} | ${t.done} | ${t.count - t.done} |`),
  '',
  ...(zoteroProgress ? ['### Zotero 阅读进度', '', rootLinks(zoteroProgress, 'Papers'), ''] : []),
  ...topics.filter(t => t.count).flatMap(t => [
    '<details>',
    `<summary>${t.title}（${t.count} 篇；已读 ${t.done}，待读 ${t.count - t.done}）</summary>`,
    '',
    ...t.groups.flatMap(group => [
      `### ${group.heading || t.title}`,
      '',
      '| Status | Paper | Venue | Why It Matters | Links |',
      '|:------:|-------|-------|----------------|-------|',
      ...group.rows,
      '',
    ]),
    '</details>',
    '',
  ]),
  end,
].join('\n')

const path = resolve(root, 'README.md')
const previous = readFileSync(path, 'utf8')
const startIndex = previous.indexOf(start)
const endIndex = previous.indexOf(end)
if ((startIndex < 0) !== (endIndex < 0) || (startIndex >= 0 && endIndex < startIndex)) {
  throw new Error('README reading list markers are incomplete or out of order')
}
const next = startIndex >= 0
  ? previous.slice(0, startIndex) + block + previous.slice(endIndex + end.length)
  : previous.replace('\n## 维护约定\n', `\n${block}\n\n## 维护约定\n`)
if (!next.includes(block)) throw new Error('README maintenance section was not found')
if (process.argv.includes('--check')) {
  if (next !== previous) {
    console.error('README reading list is out of date; run pnpm docs:sync-reading-list')
    process.exit(1)
  }
} else if (next !== previous) {
  writeFileSync(path, next)
}
console.log(`README reading list: ${total} entries, ${read} read, ${total - read} unread.`)
