import assert from 'node:assert/strict'
import { existsSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildSidebar, sectionLabels } from '../.vitepress/sidebar.mjs'
import { isActive } from 'vitepress/dist/client/shared.js'

const root = resolve(fileURLToPath(new URL('..', import.meta.url)))
const sidebar = await buildSidebar(root)
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
      assert(!siblings.has(path), `Repeated sibling link: ${path}`)
      assert(path !== parent?.link, `Index page duplicated beneath its group: ${path}`)
      const file = path.endsWith('/') ? path.slice(1) + 'index.md' : path.slice(1) + '.md'
      assert(existsSync(join(root, file)), `Missing sidebar page: ${path}`)
      assert(isActive(file, path), `VitePress cannot activate or expand this sidebar route: ${path}`)
      siblings.add(path)
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
for (const group of cute) {
  assert.equal(group.items.filter((item) => item.link.includes('/Translation-')).length, 12)
}

console.log(`Sidebar check passed: ${nodes.length} entries, ${links.size} unique pages; all content pages are reachable.`)
