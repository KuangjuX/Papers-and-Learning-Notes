import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeGitHubMath, markdownPrefix } from './markdown.mjs';
import { buildPrompt, replyBody } from './core.mjs';

test('ReplaySSM bot regression: chat delimiters become isolated GitHub math', () => {
  const input = String.raw`你说得对：**\(S_0\) 与 \(S_1、S_2\) 一样大。**

两步后：
\[
S_2=\alpha_2\alpha_1S_0+\alpha_2v_1k_1^\top+v_2k_2^\top.
\]
这里省掉的是中间结果的写回。`;
  const output = normalizeGitHubMath(input);
  assert.ok(output.includes('**$`S_0`$ 与 $`S_1、S_2`$ 一样大。**'));
  assert.ok(output.includes('\n\n```math\nS_2=\\alpha_2'));
  assert.ok(output.includes('\n```\n\n\n这里省掉'));
  assert.ok(!output.includes('\\['));
  assert.equal(normalizeGitHubMath(output), output);
});

test('dollar math, aligned rows, subscripts and prose around display math', () => {
  const input = '状态 $S_t$。前文 $$\\begin{aligned}\nx &= y \\\\\nz &= w\n\\end{aligned}$$ 后文';
  const output = normalizeGitHubMath(input);
  assert.ok(output.startsWith('状态 $`S_t`$。前文 \n\n```math\n'));
  assert.ok(output.endsWith('\n```\n\n 后文'));
  assert.ok(output.includes('x &= y \\\\\n'));
  assert.equal(normalizeGitHubMath(output), output);
});

test('protect code fences, inline code, quotes, indentation, and existing math', () => {
  const examples = [
    '`\\(x\\)` and `` ` $x$ \\[y\\] ``',
    '```js\nconst price = "$20"; // \\(x\\)\n```\n',
    '~~~~text\n\\[x\\]\n~~~\n$y$\n~~~~\n',
    '````md\n```math\nx\n```\n\\(x\\)\n````\n',
    '> quoted \\(S_0\\)\n> \\[x\\]\n',
    '    \\(code\\)\n\t$code$\n',
    '```math\n\\begin{aligned}\na &= b \\\\\nc &= d\n\\end{aligned}\n```\n',
    '$`S_t`$ and $`\\alpha_t`$',
    String.raw`Prices $20 and $30; escaped \$x\$; literal \\(x\\).`,
    '```python\n# unclosed code block: \\(x\\)',
  ];
  for (const input of examples) assert.equal(normalizeGitHubMath(input), input);
  assert.equal(normalizeGitHubMath('```text\n\\(code\\)\n```\n\\(x\\)'), '```text\n\\(code\\)\n```\n$`x`$');
});

test('unmatched delimiters are preserved without guessing an equation', () => {
  for (const input of ['text \\(x', 'text \\[x', 'cost $20', '$$x', 'before \\[x\n\nnext paragraph']) {
    assert.equal(normalizeGitHubMath(input), input);
  }
});

test('indented aligned math and escaped dollar signs retain their LaTeX', () => {
  const input = String.raw`说明：
\[
    \begin{aligned}
    a &= b \\
    c &= d
    \end{aligned}
\]

金额 $\$4$。`;
  const output = normalizeGitHubMath(input);
  assert.ok(output.includes('```math\n\\begin{aligned}'));
  assert.ok(output.includes('    a &= b \\\\\n'));
  assert.ok(output.includes('金额 $`\\$4`$。'));
  assert.equal(normalizeGitHubMath(output), output);
});

test('publication normalizes every reply and truncates before a giant math block', () => {
  const job = { id: 1, url: 'https://github.com/owner/repo/issues/1#issuecomment-1' };
  const text = '解释 \\(S_0\\)。\n\n\\[\n' + 'x+'.repeat(30000) + 'y\n\\]';
  const body = replyBody(job, text);
  assert.ok(body.includes('解释 $`S_0`$。'));
  assert.ok(!body.includes('```math'));
  assert.ok(body.includes('已截断'));
  assert.ok(body.length < 55000);
  assert.ok(text.includes('\\(S_0\\)'));
  assert.equal(markdownPrefix('First\n\n```math\nx\n\n' + 'y'.repeat(30) + '\n```', 25), 'First');
});

test('ask, resumed ask and note prompts all specify GitHub math syntax', () => {
  for (const mode of [undefined, 'note']) {
    const prompt = buildPrompt({ title: 'Paper', html_url: 'https://example.org' }, [],
      { id: 1, url: 'https://example.org/comment', request: { mode, question: 'Explain' } }, { contextPath: '/tmp/context' });
    assert.ok(prompt.includes('行内公式使用 $`S_t`$'));
    assert.ok(prompt.includes('```math'));
  }
});
