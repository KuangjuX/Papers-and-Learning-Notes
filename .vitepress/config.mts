import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitepress'
import { buildSidebars, sectionLabels } from './sidebar.mjs'
import redirects from './redirects'
import { installImportedTranslations } from './imported-translations.mjs'
import { installPaperImageSizes } from './paper-images.mjs'

const repositoryRoot = resolve(fileURLToPath(new URL('..', import.meta.url)))

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
      installPaperImageSizes(markdown, join(repositoryRoot, 'Papers/04_GPU_Compiler_and_Performance/CuTe-Layouts'))

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

    sidebar: buildSidebars(repositoryRoot),

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
