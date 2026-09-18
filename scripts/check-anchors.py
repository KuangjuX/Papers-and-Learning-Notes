"""Check local fragment links in the built site, including navigation."""

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import posixpath


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = set()
        self.links = []
        self.feed(text)

    def handle_starttag(self, tag, attributes):
        attributes = dict(attributes)
        if "id" in attributes:
            self.ids.add(attributes["id"])
        if tag == "a" and "href" in attributes:
            self.links.append(attributes["href"])


root = Path(__file__).resolve().parents[1] / ".vitepress/dist"
if not (root / "index.html").is_file():
    raise SystemExit("Build the site before checking anchors.")

pages = {
    path.relative_to(root).as_posix(): Page(path.read_text())
    for path in root.rglob("*.html")
}
errors = set()
checked = 0
for source, page in pages.items():
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc or not url.fragment:
            continue
        if not url.path:
            target = source
        elif url.path.startswith("/Papers-and-Learning-Notes/"):
            target = unquote(url.path[len("/Papers-and-Learning-Notes/"):])
        elif url.path.startswith("/"):
            continue
        else:
            target = posixpath.normpath(
                posixpath.join(posixpath.dirname(source), unquote(url.path))
            )
        if target.endswith("/"):
            target += "index.html"
        if target not in pages and not target.endswith(".html"):
            target += ".html"
        # File/image links are checked separately by check-links.mjs.
        if target not in pages:
            continue
        checked += 1
        if unquote(url.fragment) not in pages[target].ids:
            errors.add((source, link))

for source, link in sorted(errors):
    print(f"{source}: {link}")
if errors:
    raise SystemExit(f"Missing {len(errors)} local anchors.")
print(f"Anchor check passed: {checked} local fragment links.")
