import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildSidebars, sectionLabels } from '../.vitepress/sidebar.mjs'
import { isActive } from 'vitepress/dist/client/shared.js'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const sidebars = buildSidebars(root)
const sidebar = sidebars['/']
const links = new Set()
const nodes = []

function walk(items, parent, depth = 0) {
  const siblings = new Set()
  for (const item of items) {
    nodes.push(item)
    assert(depth <= 5, `VitePress cannot render this sidebar depth: ${item.text}`)
    assert(item.text !== parent?.text, `Repeated parent/child title: ${item.text}`)
    if (item.link) {
      const path = item.link.split('#')[0]
      assert(!siblings.has(item.link), `Repeated sibling link: ${item.link}`)
      assert(item.link !== parent?.link, `Index page duplicated beneath its group: ${item.link}`)
      const file = path.endsWith('/') ? path.slice(1) + 'index.md' : path.slice(1) + '.md'
      assert(existsSync(join(root, file)), `Missing sidebar page: ${path}`)
      assert(isActive(file, path), `VitePress cannot activate or expand this sidebar route: ${path}`)
      const hash = item.link.split('#')[1]
      if (hash) {
        const source = readFileSync(join(root, file), 'utf8')
        assert(source.includes(`id="${hash}"`), `Missing explicit sidebar anchor: ${item.link}`)
      }
      siblings.add(item.link)
      links.add(path)
    }
    walk(item.items ?? [], item, depth + 1)
  }
}
walk(sidebar)

function contentFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return contentFiles(path)
    return entry.name.endsWith('.md') && entry.name !== 'index.md' ? [path] : []
  })
}

for (const section of Object.keys(sectionLabels)) {
  for (const file of contentFiles(join(root, section))) {
    const route = file.slice(root.length, -3)
    assert(links.has(route), `Content is missing from the sidebar: ${route}`)
  }
}

const math = nodes.find((item) => item.text === '数学基础')
assert.deepEqual(math.items.map((item) => item.text), [
  '[译] 深度学习所需的矩阵微积分',
  'Adam 优化器前置知识',
  'CuTe Layouts：范畴基础',
])
const cute = nodes.filter((item) => item.link === '/Papers/04_GPU_Compiler_and_Performance/CuTe-Layouts/')
assert.equal(cute.length, 2, 'CuTe Layouts should be reachable under both GPU papers and mathematics')
for (const group of cute) assert.equal(group.items.filter((item) => item.link.includes('/Translation-')).length, 12)
const paperSidebar = sidebars['/Papers/04_GPU_Compiler_and_Performance/CuTe-Layouts/']
assert(paperSidebar, 'CuTe Layouts must use the original paper navigation on every page')
for (const [route, items] of Object.entries(sidebars)) if (route !== '/') walk(items)
for (const group of paperSidebar.filter((item) => item.text === 'CuTe Layouts')) {
  const base = '/Papers/04_GPU_Compiler_and_Performance/CuTe-Layouts/'
  const original = readFileSync(join(root, base, 'Translation-00-Front-Matter.md'), 'utf8')
  const expected = [...original.matchAll(/^\| ([\dA.]+) \| \[[^\]]+\]\(([^)]+)\)/gm)]
    .map(([, number, href]) => ({ number, link: base + href.replace('.md#', '#') }))
  assert.equal(expected.length, 54, 'The complete original table of contents must be present')
  const sections = []
  const chunks = new Set()
  function chapterItems(items, parentNumber) {
    for (const item of items) {
      if (item.link.includes('/Translation-')) chunks.add(item.link.split('#')[0])
      const anchor = item.link.split('#paper-section-')[1]
      if (anchor) {
        const number = anchor.replaceAll('-', '.')
        assert.equal(number.includes('.') ? number.slice(0, number.lastIndexOf('.')) : undefined,
          parentNumber, `Section has the wrong chapter parent: ${number}`)
        const file = join(root, item.link.split('#')[0] + '.md')
        const source = readFileSync(file, 'utf8').split(`<a id="paper-section-${anchor}"></a>`)[1]
        const heading = source?.match(/^### (.+)$/m)?.[1]
        const expectedHeading = number.includes('.') ? number + ' '
          : number === 'A' ? '附录 A' : `第 ${number} 章`
        assert(heading?.startsWith(expectedHeading), `Section target points to the wrong heading: ${item.link}`)
        sections.push({ number, link: item.link })
        chapterItems(item.items ?? [], number)
      }
    }
  }
  chapterItems(group.items)
  assert.equal(chunks.size, 12, 'Every translation chunk must remain reachable')
  assert.deepEqual(sections, expected, 'Sidebar order and nesting must match the original contents')
}

console.log(`Sidebar check passed: ${nodes.length} entries, ${links.size} unique pages; all content pages are reachable.`)
