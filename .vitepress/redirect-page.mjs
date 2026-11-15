export function resolveRedirect(source, redirects) {
  const seen = new Set();
  const steps = [];
  let target = source;
  while (Object.hasOwn(redirects, target)) {
    if (seen.has(target)) throw new Error(`Redirect cycle: ${source}`);
    seen.add(target);
    const entry = redirects[target];
    if (typeof entry === 'string') target = entry;
    else { steps.push(entry); target = entry.target; }
  }
  return { target, steps };
}

export function redirectPage(destination, steps = []) {
  const defaultHash = steps.reduce((hash, step) => hash ? (Object.hasOwn(step.anchors ?? {}, hash) ? step.anchors[hash] : hash) : (step.fragment ?? ''), '');
  const href = destination + (defaultHash ? '#' + encodeURIComponent(defaultHash) : '');
  const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  const json = value => JSON.stringify(value).replaceAll('<', '\\u003c');
  return `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>笔记新地址</title><link rel="canonical" href="${escape(href)}"><meta http-equiv="refresh" content="0;url=${escape(href)}"><script>let hash=location.hash.slice(1);try{hash=decodeURIComponent(hash)}catch{};for(const step of ${json(steps)})hash=hash?(Object.hasOwn(step.anchors??{},hash)?step.anchors[hash]:hash):(step.fragment??'');location.replace(${json(destination)}+location.search+(hash?'#'+encodeURIComponent(hash):''))</script><a href="${escape(href)}">阅读笔记</a></html>`;
}
