import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs'
import { resolve, dirname, relative, extname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createMarkdownRenderer } from 'vitepress'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const roots = ['notes', 'courses', 'projects', 'reading']
function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? markdownFiles(path) : path.endsWith('.md') ? [path] : []
  })
}
const files = ['README.md', 'index.md'].map((path) => join(root, path))
  .concat(roots.flatMap((path) => markdownFiles(join(root, path))))
const markdown = await createMarkdownRenderer(root)
const failures = []
let checked = 0
function check(url, source) {
  if (!url || /^(?:[a-z][\w+.-]*:|\/\/|#)/i.test(url)) return
  const path = decodeURIComponent(url.split(/[?#]/)[0])
  const target = path.startsWith('/') ? resolve(root, path.slice(1)) : resolve(dirname(source), path)
  const candidates = [target]
  if (!extname(target)) candidates.push(`${target}.md`, join(target, 'index.md'))
  if (target.endsWith('.html')) candidates.push(target.slice(0, -5) + '.md')
  checked++
  if (!candidates.some((candidate) => existsSync(candidate) && statSync(candidate).isFile())) {
    failures.push(`${relative(root, source)}: ${url}`)
  }
}
function inspect(tokens, source) {
  for (const token of tokens) {
    if (token.type === 'link_open') check(token.attrGet('href'), source)
    if (token.type === 'image') check(token.attrGet('src'), source)
    if (token.type === 'html_inline' || token.type === 'html_block') {
      for (const match of token.content.matchAll(/(?:src|href)=["']([^"']+)["']/g)) check(match[1], source)
    }
    if (token.children) inspect(token.children, source)
  }
}
for (const file of files) inspect(markdown.parse(readFileSync(file, 'utf8'), {}), file)
if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`Local links passed: ${files.length} Markdown files, ${checked} file/image links.`)
