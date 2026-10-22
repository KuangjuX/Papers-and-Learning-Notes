import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { basename, dirname, join, relative, resolve, sep } from 'node:path'
import MarkdownIt from 'markdown-it'

// Directory labels are shared by the navigation bar and the sidebar.
export const sectionLabels = {
  Papers: '论文',
  Projects: '项目',
  Foundations: '基础',
}

const directoryLabels = {
  'Kernel-Generation': 'Kernel 自动生成',
  'CuTe-Layouts': 'CuTe Layouts',
  'Operating-Systems': '操作系统论文',
  'Dual-Chunk-Attention': 'Dual Chunk Attention',
  'Architecture': '体系结构',
  'Compiler': '编译器',
  'Systems': '系统',
  'Programming': '编程语言',
  'Virtualization': '虚拟化',
  'Surveys': '综述',
  'Foundations': '基础',
  'Optimization': '优化方法',
  'Agents': 'Agent 系统',
  'Tools': '工具与环境',
  'Math': '数学基础',
  'Books': '教材阅读',
  'Courses': '课程',
  'Projects': '项目',
  'Learning-Paths': '学习路线',
  'FractalTensor': 'FractalTensor',
  'InfiniTensor': 'InfiniTensor',
  'ThunderKittens': 'ThunderKittens',
  'NNFusion': 'NNFusion',
  'sglang': 'SGLang',
  'SGLang': 'SGLang',
  'Xv6-Rust': 'Xv6-Rust',
  'Xv6-RISC-V': 'Xv6-RISC-V',
  'QEMU': 'QEMU',
  'ArceOS': 'ArceOS',
  'B200-Attention': 'B200 Attention',
  'B200-GEMM': 'B200 GEMM',
  'Matrix-Calculus': '矩阵微积分',
  'DeepSeek-DSA': 'DeepSeek Sparse Attention',
  'DeepSeek-V4': 'DeepSeek V4',
  'Event-Tensor': 'Event Tensor',
  'HIDA': 'HIDA',
  'Honeycomb': 'Honeycomb',
  'IndexCache': 'IndexCache / IndexShare',
  'Knowledge-Distillation': '知识蒸馏',
  'MegaMoE': 'MegaMoE',
  'MiniMax-MSA': 'MiniMax Sparse Attention',
  'Nephele': 'Nephele',
  'PithTrain': 'PithTrain',
  'SkVM': 'SkVM',
  'TIRAMISU-CGO': 'TIRAMISU',
  'DuVisor': 'DuVisor',
}

function cleanTitle(value) {
  return value.replace(/\s+#+\s*$/, '').replace(/[`*_]/g, '').trim()
}

function escapeText(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

export function buildSidebar(repositoryRoot) {
  const archiveLayout = JSON.parse(readFileSync(join(repositoryRoot, 'scripts/archive-layout.json'), 'utf8'))
  const labels = { ...directoryLabels, ...Object.fromEntries(archiveLayout.sections.map((s) => [s.directory, s.title])) }
  // Index navigation has its own parser: creating VitePress's singleton here
  // would bypass the site's code, math and archived-translation plugins.
  const markdown = new MarkdownIt()
  const linkFor = (file) => '/' + relative(repositoryRoot, file).split(sep).join('/')
    .replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
  const titleFor = (file) => escapeText(cleanTitle(readFileSync(file, 'utf8').match(/^#\s+(.+)$/m)?.[1] ?? basename(file, '.md').replaceAll('-', ' ')))
  const inside = (file, directory) => file === directory || file.startsWith(directory + sep)

  function indexLinks(file) {
    if (!existsSync(file)) return []
    const links = []
    let listDepth = 0
    for (const token of markdown.parse(readFileSync(file, 'utf8'), {})) {
      if (token.type === 'bullet_list_open') listDepth++
      if (token.type === 'bullet_list_close') listDepth--
      // Only navigation lists count. Breadcrumbs, tables and prose references
      // must not turn into a second copy of the archive tree.
      const children = token.children
      if (!listDepth || token.type !== 'inline' || children?.[0]?.type !== 'link_open') continue
      const href = children[0].attrGet('href')
      if (!href || /^(?:[a-z][\w+.-]*:|\/\/|#)/i.test(href)) continue
      const [path, hash] = href.split('#')
      const target = resolve(path.startsWith('/') ? repositoryRoot : dirname(file), decodeURIComponent(path.replace(/^\//, '').split('?')[0]))
      if (!target.endsWith('.md') || !existsSync(target) || !statSync(target).isFile()) continue
      if (!Object.keys(sectionLabels).some((section) => inside(target, join(repositoryRoot, section)))) continue
      if (target === file || (basename(target) === 'index.md' && inside(dirname(file), dirname(target)))) continue
      const end = children.findIndex((child) => child.type === 'link_close')
      const text = children.slice(1, end).map((child) => child.content).join('')
      links.push({ target, text: escapeText(cleanTitle(text)), hash: hash ? '#' + hash : '' })
    }
    return links
  }

  function directoryItem(directory, ancestors = new Set()) {
    if (ancestors.has(directory)) return undefined
    const visited = new Set([...ancestors, directory])
    const index = join(directory, 'index.md')
    const hasIndex = existsSync(index)
    const candidates = new Map()
    const entries = readdirSync(directory, { withFileTypes: true })
      .filter((entry) => !entry.name.startsWith('.'))
      .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))

    for (const entry of entries) {
      const path = join(directory, entry.name)
      if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
        candidates.set(path, { text: titleFor(path), link: linkFor(path) })
      } else if (entry.isDirectory()) {
        const item = directoryItem(path, visited)
        if (item) candidates.set(path, item)
      }
    }

    const items = []
    const included = new Set()
    for (const { target, text, hash } of indexLinks(index)) {
      const local = inside(target, directory)
      const key = local ? join(directory, relative(directory, target).split(sep)[0]) : target
      if (included.has(key)) continue
      let item = candidates.get(key)
      if (!local) {
        item = basename(target) === 'index.md'
          ? directoryItem(dirname(target), visited)
          : { text, link: linkFor(target) + hash }
      }
      if (!item) continue
      // A link to a directory's index names that group, while a link to a
      // deeper article only orders the group and never renames its parent.
      if (item.link === linkFor(target)) item = { ...item, text }
      included.add(key)
      items.push(item)
    }
    for (const [key, item] of candidates) {
      if (!included.has(key)) items.push(item)
    }

    if (!items.length && !hasIndex) return undefined
    if (!items.length && /本分类暂无归档内容。|共 0 个清单条目/.test(readFileSync(index, 'utf8'))) return undefined
    if (!hasIndex && items.length === 1) return items[0]

    const text = labels[basename(directory)] ?? (hasIndex ? titleFor(index) : escapeText(basename(directory).replaceAll('-', ' ')))
    return {
      text,
      ...(hasIndex ? { link: linkFor(index) } : {}),
      ...(items.length ? { collapsed: true, items } : {}),
    }
  }

  return [
    {
      text: '开始阅读',
      items: [
        { text: '知识地图', link: '/' },
        { text: '全部笔记目录', link: '/CATALOG' },
        { text: 'LLM 学习路线', link: '/Foundations/05_Model_Architecture_and_Reasoning/Learning-Paths/llm' },
      ],
    },
    ...Object.entries(sectionLabels).map(([directory, text]) => ({
      ...directoryItem(join(repositoryRoot, directory)),
      text,
    })),
  ]
}
