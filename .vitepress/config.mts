import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type DefaultTheme } from 'vitepress'
import redirects from './redirects'

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))

const sectionLabels: Record<string, string> = {
  "notes/llm": "大模型与深度学习",
  "notes/gpu": "GPU 与高性能计算",
  "notes/compiler": "编译器",
  "notes/systems": "系统",
  "notes/architecture": "计算机体系结构",
  "notes/programming": "编程语言",
  "notes/math": "数学基础",
  "notes/agents": "Agent 系统",
  "notes/tools": "工具与环境",
  "courses": "课程笔记",
  "projects": "项目实践"
}

const directoryLabels: Record<string, string> = {
  'deepseek-dsa': 'DeepSeek Sparse Attention',
  'deepseek-v4': 'DeepSeek V4',
  'event-tensor': 'Event Tensor',
  hida: 'HIDA',
  honeycomb: 'Honeycomb',
  indexcache: 'IndexCache / IndexShare',
  'knowledge-distillation': '知识蒸馏',
  megamoe: 'MegaMoE',
  'minimax-msa': 'MiniMax Sparse Attention',
  nephele: 'Nephele',
  pithtrain: 'PithTrain',
  skvm: 'SkVM',
  'tiramisu-cgo': 'TIRAMISU',
  duvisor: 'DuVisor',
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
        { text: '论文索引', link: '/reading/' },
        { text: 'LLM 学习路线', link: '/reading/learning-paths/llm' },
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
      mkdirSync(dirname(output), { recursive: true })
      if (!oldPath.endsWith('.md')) {
        copyFileSync(join(repositoryRoot, newPath), output)
        continue
      }
      const destination = site.site.base + newPath.replace(/\.md$/, '.html')
      writeFileSync(output, `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>笔记新地址</title><link rel="canonical" href="${destination}"><meta http-equiv="refresh" content="0;url=${destination}"><script>location.replace(${JSON.stringify(destination)} + location.search + location.hash)</script><a href="${destination}">阅读笔记</a></html>`)
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['meta', { name: 'author', content: 'KuangjuX' }],
  ],

  markdown: {
    math: true,
    lineNumbers: true,
    image: {
      lazyLoading: true,
    },
    config(markdown) {
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
      { text: '主题', items: Object.entries(sectionLabels)
          .filter(([path]) => path.startsWith('notes/'))
          .map(([path, text]) => ({ text, link: `/${path}/` })) },
      { text: '课程', link: '/courses/' },
      { text: '项目', link: '/projects/' },
      { text: '论文索引', link: '/reading/' },
      { text: '学习路线', link: '/reading/learning-paths/llm' },
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
