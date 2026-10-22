import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type DefaultTheme } from 'vitepress'
import redirects from './redirects'
import { installImportedTranslations } from './imported-translations.mjs'

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))

const archiveLayout = JSON.parse(readFileSync(join(repositoryRoot, 'scripts/archive-layout.json'), 'utf8')) as {
  sections: Array<{ directory: string; title: string; description: string }>
}
const sectionLabels: Record<string, string> = {
  Papers: '论文',
  Projects: '项目',
  Foundations: '基础',
}

const directoryLabels: Record<string, string> = {
  ...Object.fromEntries(archiveLayout.sections.map((section) => [section.directory, section.title])),
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

function cleanTitle(value: string) {
  return value
    .replace(/\s+#+\s*$/, '')
    .replace(/[`*_]/g, '')
    .trim()
}

function titleForMarkdown(file: string) {
  const source = readFileSync(file, 'utf8')
  const heading = source.match(/^#\s+(.+)$/m)?.[1]

  if (heading) return cleanTitle(heading)

  return basename(file, '.md')
    .replaceAll('-', ' ')
    .replaceAll('_', ' ')
}

function noteLink(file: string) {
  const pathFromRoot = relative(repositoryRoot, file)
    .split('\\')
    .join('/')
    .replace(/\.md$/, '')

  return `/${pathFromRoot}`
}

function pagePriority(fileName: string) {
  if (fileName === 'learning-path.md') return 0
  if (fileName === 'index.md') return 1
  return 10
}

function directoryItems(
  absoluteDirectory: string,
): DefaultTheme.SidebarItem[] {
  const entries = readdirSync(absoluteDirectory, { withFileTypes: true })
    .filter((entry) => !entry.name.startsWith('.'))

  const pages = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.md'))
    .sort((a, b) => {
      const priority = pagePriority(a.name) - pagePriority(b.name)
      return priority || a.name.localeCompare(b.name, 'zh-CN')
    })
    .map((entry) => {
      const file = join(absoluteDirectory, entry.name)
      return { text: titleForMarkdown(file), link: noteLink(file) }
    })

  const groups = entries
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))
    .map((entry) => {
      const directory = join(absoluteDirectory, entry.name)
      const items = directoryItems(directory)

      if (!items.length) return undefined
      const indexFile = join(directory, 'index.md')
      if (/^0[1-7]_/.test(entry.name) && existsSync(indexFile)) {
        const source = readFileSync(indexFile, 'utf8')
        if (source.includes('本分类暂无归档内容。') || source.includes('共 0 个清单条目')) return undefined
      }

      return {
        text: directoryLabels[entry.name] ?? entry.name.replaceAll('-', ' '),
        collapsed: true,
        items,
      } satisfies DefaultTheme.SidebarItem
    })
    .filter((item): item is DefaultTheme.SidebarItem => Boolean(item))

  return [...pages, ...groups]
}

function buildSidebar(): DefaultTheme.SidebarItem[] {
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
      text,
      collapsed: true,
      link: `/${directory}/`,
      items: directoryItems(join(repositoryRoot, directory)),
    })),
  ]
}

export default defineConfig({
  lang: 'zh-CN',
  title: 'KuangjuX’s Notes',
  titleTemplate: ':title · KuangjuX’s Notes',
  description: '原理、论文、源码、课程与实验的技术笔记库',
  base: '/',
  lastUpdated: true,
  srcExclude: ['skills/**', 'tmp/**', 'node_modules/**'],
  ignoreDeadLinks: false,

  buildEnd(site) {
    for (const [oldPath, newPath] of Object.entries(redirects)) {
      const output = join(site.outDir, oldPath.replace(/\.md$/, '.html'))
      // Case-only aliases already resolve on a case-insensitive filesystem.
      // Do not overwrite the canonical page with a redirect to itself.
      const canonicalOutput = join(site.outDir, newPath.replace(/\.md$/, '.html'))
      if (existsSync(output) && existsSync(canonicalOutput)) {
        const outputFile = statSync(output)
        const canonicalFile = statSync(canonicalOutput)
        if (outputFile.dev === canonicalFile.dev && outputFile.ino === canonicalFile.ino) continue
      }
      mkdirSync(dirname(output), { recursive: true })
      if (!oldPath.endsWith('.md')) {
        copyFileSync(join(repositoryRoot, newPath), output)
        continue
      }
      const destination = site.site.base + newPath.replace(/\.md$/, '.html')
      writeFileSync(output, `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>笔记新地址</title><link rel="canonical" href="${destination}"><meta http-equiv="refresh" content="0;url=${destination}"><script>location.replace(${JSON.stringify(destination)} + location.search + location.hash)</script><a href="${destination}">阅读笔记</a></html>`)
    }

    // Static imported HTML keeps its original relative image and media URLs.
    const imports = JSON.parse(readFileSync(join(repositoryRoot, 'scripts/imported-translations.json'), 'utf8')) as Array<{ path: string }>
    for (const article of imports) {
      const directory = join(repositoryRoot, article.path)
      const pdfOutput = join(site.outDir, article.path, 'article.pdf')
      mkdirSync(dirname(pdfOutput), { recursive: true })
      copyFileSync(join(directory, 'article.pdf'), pdfOutput)
      const source = readFileSync(join(directory, 'index.md'), 'utf8')
      for (const match of source.matchAll(/<(?:a|img|source|video)\b[^>]*?\b(?:href|src)="([^"]+)"/g)) {
        const url = match[1]
        if (/^(?:[a-z][\w+.-]*:|\/\/|#|\/)/i.test(url)) continue
        const input = resolve(directory, decodeURIComponent(url.split(/[?#]/)[0]))
        if (!existsSync(input) || !statSync(input).isFile()) continue
        const output = join(site.outDir, relative(repositoryRoot, input))
        mkdirSync(dirname(output), { recursive: true })
        copyFileSync(input, output)
      }
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'author', content: 'KuangjuX' }],
  ],

  markdown: {
    math: true,
    lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-dark' },
    image: {
      lazyLoading: true,
    },
    config(markdown) {
      const imports = JSON.parse(readFileSync(join(repositoryRoot, 'scripts/imported-translations.json'), 'utf8'))
      const formulas = Object.assign({}, ...imports.map((article: { formulas?: Record<string, string> }) => article.formulas ?? {}))
      installImportedTranslations(markdown, formulas)

      const defaultFence = markdown.renderer.rules.fence

      if (!defaultFence) return

      markdown.renderer.rules.fence = (tokens, index, options, env, self) => {
        const token = tokens[index]
        const language = token.info.trim().split(/\s+/)[0]

        if (language !== 'mermaid') {
          return defaultFence(tokens, index, options, env, self)
        }

        const encodedSource = encodeURIComponent(token.content.trim())
        return `<MermaidDiagram code="${encodedSource}" />\n`
      }
    },
  },

  themeConfig: {
    siteTitle: 'KuangjuX’s Notes',
    nav: [
      { text: '首页', link: '/' },
      ...Object.entries(sectionLabels).map(([directory, text]) => ({ text, link: `/${directory}/` })),
      { text: '全部目录', link: '/CATALOG' },
      { text: '学习路线', link: '/Foundations/05_Model_Architecture_and_Reasoning/Learning-Paths/llm' },
    ],

    sidebar: buildSidebar(),

    outline: {
      level: [2, 3],
      label: '本页目录',
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索笔记',
            buttonAriaLabel: '搜索笔记',
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          },
        },
      },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KuangjuX/Papers-and-Learning-Notes' },
    ],

    editLink: {
      pattern:
        'https://github.com/KuangjuX/Papers-and-Learning-Notes/edit/main/:path',
      text: '在 GitHub 上编辑此页',
    },

    lastUpdated: {
      text: '最后更新',
      formatOptions: {
        dateStyle: 'long',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    langMenuLabel: '语言',

    footer: {
      message: '记录原理、连接知识、积累实践。',
      copyright: 'Copyright © KuangjuX',
    },
  },
})
