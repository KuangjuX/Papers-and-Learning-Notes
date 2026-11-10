// GitHub uses different math delimiters from the chat renderer. Normalize only
// prose: code examples and quoted source material must retain their exact text.
export const GITHUB_MATH_INSTRUCTIONS = [
  '最终回复使用 GitHub Markdown 源码，不复制渲染后的 HTML 或 Unicode 公式。',
  '行内公式使用 $`S_t`$；独立公式使用 ```math 围栏，围栏前后空一行，内部不再套 $$。',
  '不要使用 \\(…\\) 或 \\[…\\]；多行等式在 math 块内用 aligned，中文解释放在公式外。',
  '公式尽量独立成段，不放入表格、引用或缩进列表；引用旧答复时优先链接原评论，不复制整段渲染后的公式。',
].join('\n');

function fenceAt(line) { return line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/); }
function closesFence(match, fence) {
  return match && match[1][0] === fence[0] && match[1].length >= fence.length && !match[2].trim();
}

function proseMath(text) {
  let result = '';
  for (let i = 0; i < text.length;) {
    const rest = text.slice(i);
    // Already-protected inline math and code spans (including multi-backticks).
    const protectedMath = rest.match(/^\$`[^`\n]+`\$/);
    if (protectedMath) { result += protectedMath[0]; i += protectedMath[0].length; continue; }
    if (text[i] === '`') {
      const ticks = rest.match(/^`+/)[0];
      const closing = new RegExp(`(?<!\x60)${ticks}(?!\x60)`, 'g');
      closing.lastIndex = i + ticks.length;
      const end = closing.exec(text);
      const length = end ? end.index + ticks.length - i : ticks.length;
      result += text.slice(i, i + length); i += length; continue;
    }
    const display = rest.match(/^(?:\\\[([\s\S]*?)\\\]|\$\$([\s\S]*?)\$\$)/);
    if (display) {
      const expression = (display[1] ?? display[2]).trim();
      // A paragraph boundary or code fence inside a formula is ambiguous.
      if (expression && !/\n\s*\n|`/.test(expression)) {
        result += `\n\n\`\`\`math\n${expression}\n\`\`\`\n\n`;
        i += display[0].length; continue;
      }
    }
    const inline = rest.match(/^\\\(([^\n]*?)\\\)/)
      ?? (text[i - 1] !== '$' ? rest.match(/^\$(?!\$)((?:\\[^\n]|[^$`\\\n])+)\$(?!\$)/) : null);
    if (inline && inline[1] && inline[1] === inline[1].trim() && !inline[1].includes('`')) {
      result += '$`' + inline[1] + '`$'; i += inline[0].length; continue;
    }
    // Preserve escaped delimiters (e.g. \\$ for currency and \\\\( in examples).
    if (text[i] === '\\' && i + 1 < text.length) {
      result += text.slice(i, i + 2); i += 2;
    } else { result += text[i++]; }
  }
  return result;
}

export function normalizeGitHubMath(text) {
  let result = '', prose = '', fence, displayEnd;
  const flush = () => { result += proseMath(prose); prose = ''; };
  for (const line of text.split(/(?<=\n)/)) {
    const match = fenceAt(line.trimEnd());
    if (displayEnd) {
      prose += line;
      if (line.trim() === displayEnd) displayEnd = undefined;
    } else if (fence) {
      result += line;
      if (closesFence(match, fence)) fence = undefined;
    } else if (match) {
      flush(); fence = match[1]; result += line;
    } else if (/^(?: {0,3}>| {4}|\t)/.test(line)) {
      flush(); result += line;
    } else {
      if (/^ {0,3}\\\[\s*$/.test(line)) displayEnd = '\\]';
      else if (/^ {0,3}\$\$\s*$/.test(line)) displayEnd = '$$';
      prose += line;
    }
  }
  flush();
  return result;
}

// Keep only whole paragraphs/fenced blocks when shortening a comment. Cutting a
// formula or fence in half would also swallow the publication footer.
export function markdownPrefix(text, limit) {
  let fence, offset = 0, boundary = 0;
  for (const line of text.split(/(?<=\n)/)) {
    offset += line.length;
    if (offset > limit) break;
    const match = fenceAt(line.trimEnd());
    if (fence) { if (closesFence(match, fence)) fence = undefined; }
    else if (match) fence = match[1];
    if (!fence && !line.trim()) boundary = offset;
  }
  return text.slice(0, boundary).trimEnd();
}
