import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { createMarkdownRenderer } from 'vitepress'

const root = fileURLToPath(new URL('../', import.meta.url))
const requireFromVitePress = createRequire(import.meta.resolve('vitepress'))
const { loadConfigFromFile } = requireFromVitePress('vite')
const { config } = await loadConfigFromFile({ command: 'build', mode: 'production' }, root + '.vitepress/config.mts')
const markdown = await createMarkdownRenderer(root, config.markdown)
const imports = JSON.parse(readFileSync(root + 'scripts/imported-translations.json', 'utf8'))

for (const article of imports) {
  const source = readFileSync(root + article.path + '/index.md', 'utf8')
  const template = markdown.render(source)
  const binding = template.match(/v-html="([^"]+)"/)[1]
  const expression = binding.replace(/&(?:#x[\da-f]+|#\d+|[a-z][\da-z]+);/gi,
    (entity) => markdown.utils.unescapeAll(entity))
  const output = JSON.parse(expression)
  const highlighted = output.match(/<pre class="shiki /g)?.length ?? 0
  const nativeMath = output.match(/<mjx-container\b/g)?.length ?? 0
  assert.equal(highlighted, article.counts.pre, `${article.path}: code bypassed the highlighter`)
  if (highlighted) {
    const colors = new Set([...output.matchAll(/--shiki-light:(#[\da-f]+)/gi)].map((match) => match[1]))
    assert.ok(colors.size >= 3, `${article.path}: syntax colors are missing`)
  }
  assert.equal(nativeMath, Object.values(article.rendered_math ?? {}).reduce((sum, count) => sum + count, 0), `${article.path}: missing native formulas`)
  assert.doesNotMatch(output, /data-mjx-error|<merror\b/, `${article.path}: invalid TeX`)
  assert.doesNotMatch(source, /<style scoped>/, `${article.path}: archived print styles must not override the web theme`)
  console.log(`PASS: ${article.path}; ${highlighted} highlighted blocks, ${nativeMath} native formulas.`)
}

const styles = readFileSync(root + '.vitepress/theme/imported-translations.css', 'utf8')
assert.match(styles, /font-size:\s*15px/, 'Readable code size must be retained')
assert.doesNotMatch(styles, /color:\s*inherit\s*!important/, 'Do not suppress syntax colors')
console.log('PASS: code typography and syntax colors.')
