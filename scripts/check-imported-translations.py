"""Verify complete translated articles and their built VitePress pages."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import hashlib
import json
import re

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / '.vitepress/dist'


def sha(data):
    return hashlib.sha256(data).hexdigest()


class Article(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.depth = 0
        self.counts = {}
        self.code = []
        self.in_code = False
        self.links = []
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'div':
            if 'translated-article' in attrs.get('class', '').split():
                self.depth = 1
            elif self.depth:
                self.depth += 1
        if not self.depth:
            return
        self.counts[tag] = self.counts.get(tag, 0) + 1
        if tag == 'pre':
            self.in_code = True
            self.code.append('')
        for attr in ['src', 'href', 'poster']:
            if attr in attrs:
                self.links.append(attrs[attr])

    def handle_endtag(self, tag):
        if tag == 'div' and self.depth:
            self.depth -= 1
        if tag == 'pre':
            self.in_code = False

    def handle_data(self, text):
        if self.in_code:
            self.code[-1] += text


for item in json.loads((ROOT / 'scripts/imported-translations.json').read_text()):
    directory = ROOT / item['path']
    source = (directory / 'index.md').read_text()
    body = re.search(r'<div class="translated-article" v-pre>\n(.*)\n</div>\n<!-- imported-translation:end -->', source, re.S).group(1)
    for old, new in reversed(list(item['replacements'].items())):
        body = body.replace(new, old)
    body = body.replace('<!-- original-title -->', item['original_heading'], 1)
    assert sha(body.encode()) == item['source_body_sha256'], f"Changed body: {item['path']}"
    assert sha((directory / 'article.pdf').read_bytes()) == item['pdf_sha256'], f"Changed PDF: {item['path']}"
    digest = hashlib.sha256()
    for label in item['asset_roots']:
        base = directory / label
        files = sorted(p for p in base.rglob('*') if p.is_file()) if base.is_dir() else [base]
        for file in files:
            relative = file.relative_to(base).as_posix() if base.is_dir() else ''
            digest.update((label + '/' + relative + '\0').encode())
            digest.update(hashlib.sha256(file.read_bytes()).digest())
    assert digest.hexdigest() == item['assets_sha256'], f"Changed media: {item['path']}"
    built_file = OUTPUT / item['path'] / 'index.html'
    built = built_file.read_text()
    article = Article(built)
    pdf_links = re.findall(r'href="([^"]+\.pdf)"', built)
    pdf_files = [OUTPUT / unquote(link).lstrip('/') if link.startswith('/') else built_file.parent / unquote(link) for link in pdf_links if not urlsplit(link).scheme]
    assert any(path.is_file() and sha(path.read_bytes()) == item['pdf_sha256'] for path in pdf_files), f"Missing built PDF: {item['path']}"
    for tag, count in item['counts'].items():
        if tag == 'img':
            count = item.get('rendered_images', count)
        assert article.counts.get(tag, 0) == count, f"Changed {tag} count: {item['path']}"
    math_count = sum(item.get('rendered_math', {}).values())
    assert article.counts.get('mjx-container', 0) == math_count, f"Missing native math: {item['path']}"
    assert 'data-mjx-error' not in built and '<merror' not in built, f"Invalid math: {item['path']}"
    assert sha(json.dumps(article.code, ensure_ascii=False).encode()) == item['code_sha256'], f"Changed code: {item['path']}"
    for link in article.links:
        url = urlsplit(link)
        if url.scheme or url.netloc or not url.path:
            continue
        target = OUTPUT / unquote(url.path).lstrip('/') if url.path.startswith('/') else built_file.parent / unquote(url.path)
        assert target.exists(), f"Missing built resource: {item['path']}: {link}"
    print(f"PASS: {item['path']}; complete source, PDF, media, and built code/image/table counts.")
