import { readFileSync } from 'node:fs'
import { dirname, resolve, sep } from 'node:path'

// Reserve space before lazy PNGs load, so deep section links don't drift as
// hundreds of preceding formula crops enter the page.
export function installPaperImageSizes(markdown, directory) {
  const sizes = new Map()
  const image = markdown.renderer.rules.image
  markdown.renderer.rules.image = (tokens, index, options, env, self) => {
    const token = tokens[index]
    const src = token.attrGet('src')
    if (env.path?.startsWith(directory + sep) && /^\.\/?[^?#]+\.png$/.test(src ?? '')) {
      const path = resolve(dirname(env.path), decodeURIComponent(src))
      if (path.startsWith(directory + sep)) {
        if (!sizes.has(path)) {
          const png = readFileSync(path)
          if (png.subarray(0, 8).equals(Buffer.from('89504e470d0a1a0a', 'hex'))) {
            sizes.set(path, [png.readUInt32BE(16), png.readUInt32BE(20)])
          } else throw new Error(`Expected a PNG image: ${path}`)
        }
        const [width, height] = sizes.get(path)
        token.attrSet('width', String(width))
        token.attrSet('height', String(height))
      }
    }
    return image(tokens, index, options, env, self)
  }
}
