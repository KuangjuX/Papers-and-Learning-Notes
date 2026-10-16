// Keep the archived HTML intact while using the site's code and math renderers.
const decodeEntities = (value, markdown) => value.replace(/&(?:#x[\da-f]+|#\d+|[a-z][\da-z]+);/gi,
  (entity) => markdown.utils.unescapeAll(entity))

const escapeAttribute = (value) => value.replace(/[&<>"']/g,
  (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])

function codeLanguage(html, code) {
  const declared = html.match(/(?:language-|data-lang=")(\w[\w+-]*)/)?.[1]
  if (declared) return { cuda: 'cpp', cxx: 'cpp' }[declared] ?? declared
  if (/#include|__global__|__device__|threadIdx|blockIdx|constexpr|asm\s*volatile/.test(code)) return 'cpp'
  if (/\bdef\s+\w+\(|import torch|torch\.|\bfor\s+.+\s+in\s+range/.test(code)) return 'python'
  if (/^\s*(?:nvcc|ncu|python3?|pip3?|git)\s/m.test(code)) return 'bash'
  return 'text'
}

export function installImportedTranslations(markdown, formulas) {
  markdown.block.ruler.before('html_block', 'imported_translation', (state, startLine, endLine, silent) => {
    const opening = state.src.slice(state.bMarks[startLine], state.eMarks[startLine]).trim()
    if (opening !== '<!-- imported-translation:start -->') return false
    let closing = startLine + 1
    while (closing < endLine && state.src.slice(state.bMarks[closing], state.eMarks[closing]).trim() !== '<!-- imported-translation:end -->') closing++
    if (closing === endLine) throw new Error('Unclosed imported translation block')
    if (silent) return true
    const token = state.push('imported_translation', '', 0)
    token.map = [startLine, closing + 1]
    token.content = state.getLines(startLine, closing + 1, 0, true)
    state.line = closing + 1
    return true
  })

  markdown.renderer.rules.imported_translation = (tokens, index, options, env, self) => {
    const source = tokens[index]
    let html = source.content.replace(/<pre\b[^>]*>([\s\S]*?)<\/pre>/g, (original, inner) => {
      const code = decodeEntities(inner.replace(/<[^>]*>/g, ''), markdown)
      const token = new source.constructor('fence', 'code', 0)
      token.info = codeLanguage(inner, code)
      token.content = code
      token.map = [0, code.split('\n').length]
      const rendered = markdown.renderer.rules.fence([token], 0, options, env, self)
      // Shiki omits the final line breaks; keep the archived code text exact.
      return rendered.replace('</code></pre>', `${code.match(/\n*$/)[0]}</code></pre>`)
    })

    html = html.replace(/<img\b[^>]*>/g, (image) => {
      const path = image.match(/\bsrc="([^"]+)"/)?.[1]
      const tex = path && formulas[path.split('/').pop()]
      if (!tex) return /(?:latex|blkeqn)-/.test(path ?? '')
        ? `<span class="translation-math-figure">${image}</span>` : image
      const display = /\bclass="[^"]*\bblkeqn\b/.test(image)
      const rule = markdown.renderer.rules[display ? 'math_block' : 'math_inline']
      const rendered = rule([{ content: tex }], 0, options, env, self)
      return `<span class="translation-math${display ? ' translation-math--display' : ''}" data-tex="${escapeAttribute(tex)}">${rendered}</span>`
    })
    // Browsers repair legacy HTML nesting differently from Vue's compiler.
    // v-html keeps this static, locally authored article out of child hydration.
    const body = html.match(/<div class="translated-article" v-pre>\n([\s\S]*)\n<\/div>\n<!-- imported-translation:end -->/)[1]
    return `<div class="translated-article" v-html="${escapeAttribute(JSON.stringify(body))}"></div>\n`
  }
}
