"""One-time: turn the Claude Design bundle (site_src/bundle.html) into an editable static source tree in site/src.

- fonts -> src/fonts/*.woff2, images -> src/assets/<original path>, DS bundle -> src/js/ds.js,
  content -> src/js/content.js (only if missing, so edits are never overwritten),
  each text/babel screen -> src/jsx/<Name>.jsx (hash routing rewritten to real paths),
  page shell -> src/shell.html (scripts point at local files; React production builds).
"""
import base64, gzip, json, os, re, shutil, sys, zlib

ROOT = os.path.expanduser("~/CamillaAmazon")
BUNDLE = f"{ROOT}/site_src/bundle.html"
SRC = f"{ROOT}/site/src"

s = open(BUNDLE, encoding="utf-8").read()
man = json.loads(re.search(r'<script type="__bundler/manifest">(.*?)</script>', s, re.S).group(1))
tpl = json.loads(re.search(r'<script type="__bundler/template">(.*?)</script>', s, re.S).group(1))
ext = json.loads(re.search(r'<script type="__bundler/ext_resources">(.*?)</script>', s, re.S).group(1))
rid = {e["uuid"]: e["id"] for e in ext}


def data(u):
    e = man[u]
    b = base64.b64decode(e["data"])
    if e.get("compressed"):
        for f in (gzip.decompress, zlib.decompress, lambda x: zlib.decompress(x, -15)):
            try:
                return f(b)
            except Exception:
                pass
    return b


asset_map = json.loads(re.search(r"window\.__ASSET_MAP=(\{.*?\});", tpl).group(1))
by_rid = {v: k for k, v in asset_map.items()}
for d in ("fonts", "js", "jsx", "assets/pins", "assets/products"):
    os.makedirs(f"{SRC}/{d}", exist_ok=True)

# images referenced through the asset map
for u, e in man.items():
    if u in rid and rid[u] in by_rid:
        p = f"{SRC}/{by_rid[rid[u]]}"
        os.makedirs(os.path.dirname(p), exist_ok=True)
        open(p, "wb").write(data(u))

# fonts
for i, u in enumerate(re.findall(r'url\("([0-9a-f-]{36})"\)', tpl)):
    open(f"{SRC}/fonts/{u[:8]}.woff2", "wb").write(data(u))
    tpl = tpl.replace(f'url("{u}")', f'url("/fonts/{u[:8]}.woff2")')

# favicon
fav = re.search(r'<link rel="icon" type="image/png" href="([0-9a-f-]{36})">', tpl).group(1)
open(f"{SRC}/assets/favicon.png", "wb").write(data(fav))
tpl = tpl.replace(fav, "/assets/favicon.png")

# scripts: drop react dev, react-dom dev, babel standalone; keep DS + content as local files
srcs = re.findall(r'<script src="([0-9a-f-]{36})"[^>]*></script>', tpl)
ds_u, content_u = None, None
for u in srcs:
    head = data(u)[:200].decode("utf-8", "ignore")
    if "@ds-bundle" in head:
        ds_u = u
    elif "SITE CONTENT" in head:
        content_u = u
open(f"{SRC}/js/ds.js", "wb").write(data(ds_u))
if not os.path.exists(f"{SRC}/js/content.js"):
    open(f"{SRC}/js/content.js", "wb").write(data(content_u))

screens = re.findall(r'<script type="text/babel" data-file="(\w+)">(.*?)</script>', tpl, re.S)
order = []
for name, code in screens:
    code = code.replace("('../../' + p)", "('/' + p)")
    code = code.replace("'#/' + ", "'/' + ").replace('"#/"', '"/"').replace("href=\"#/\"", "href=\"/\"")
    code = re.sub(r'href="#/([a-z0-9-]+)"', r'href="/\1"', code)
    code = re.sub(r"href: '#/([a-z0-9-]*)'", r"href: '/\1'", code)
    if name == "App":
        code = code.replace("const read = () => location.hash.replace(/^#\\/?/, '').split('?')[0];",
                            "const read = () => location.pathname.replace(/^\\/+|\\/+$/g, '').replace(/\\/index\\.html$/, '');")
        code = code.replace("const nav = (it) => { location.hash = '/' + it.href.replace(/^\\//, ''); };",
                            "const nav = (it) => { location.href = '/' + it.href.replace(/^[#/]+/, ''); };")
    open(f"{SRC}/jsx/{name}.jsx", "w").write(code)
    order.append(name)

# page shell: strip all scripts from the template body, then add our own
shell = re.sub(r"<script\b[^>]*>.*?</script>\s*", "", tpl, flags=re.S)
tags = "\n".join(
    ['<script>window.asset=function(p){return "/"+String(p).replace(/^\\/+/,"");};</script>',
     '<script src="/js/react.production.min.js"></script>',
     '<script src="/js/react-dom.production.min.js"></script>',
     '<script>(function(){var c=ReactDOM.createRoot;ReactDOM.createRoot=function(el,o){if(el&&el.id==="root"){return{render:function(){},unmount:function(){}};}return c.call(this,el,o);};})();</script>',
     '<script src="/js/ds.js"></script>',
     '<script src="/js/content.js"></script>'] +
    [f'<script src="/js/{n}.js"></script>' for n in order])
shell = shell.replace("</body>", "<!--PRERENDER-->\n" + tags + "\n</body>")
open(f"{SRC}/shell.html", "w").write(shell)
json.dump(order, open(f"{SRC}/jsx/order.json", "w"))
print("ok", order, "images", len(by_rid), "ds", len(data(ds_u)))
