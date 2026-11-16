# Nov 15 2026 extra edits (Camilla "sim todos"): vintage-christmas-tree-decorations + christmas-fireplace-decor-ideas.
# Inserted right below the BF hub (POSTS[0] stays the BF-HUB block) in content.js, and at the top of the dead ds.js copy.
# Run: cd ~/CamillaAmazon && uv run --quiet --with pillow python site/tools/x15/add_posts_x15.py
import json, os, re
from PIL import Image
ROOT = os.path.expanduser('~/CamillaAmazon'); SITE = ROOT + '/site'; AS = SITE + '/src/assets'
X = ROOT + '/pins/xmas_nov15/'
ORDER = ['vintage-christmas-tree-decorations', 'christmas-fireplace-decor-ideas']
DATE = '2026-11-15'
PRICE = re.compile(r'\$|(?<!silver )dollar|under \d|% off|\bdeal|\bsale\b', re.I)  # "silver dollar eucalyptus" is a plant

def rgb(im):
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        im = im.convert('RGBA'); bg = Image.new('RGB', im.size, (255, 255, 255)); bg.paste(im, mask=im.split()[-1]); return bg
    return im.convert('RGB')
def q(s): return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

blocks = []; done = set()
for slug in ORDER:
    E = json.load(open(X + slug + '/copy.json'))
    assert E['slug'] == slug and E['category'] == 'home-finds'
    assert '&' not in E['title'] and len(E['title']) <= 60, E['title']
    for k in ('description', 'intro', 'imageAlt'): assert not PRICE.search(E[k]), (slug, k)
    im = rgb(Image.open(X + slug + '/pin_A.jpg'))
    assert im.size == (1000, 1500)
    dst = AS + '/pins/' + slug + '.jpg'; qq = 85
    while True:
        im.save(dst, 'JPEG', quality=qq, optimize=True, progressive=True)
        if os.path.getsize(dst) < 300 * 1024 or qq <= 60: break
        qq -= 5
    print('PIN', slug, os.path.getsize(dst) // 1024, 'KB')
    lines = []
    for p in E['products']:
        a = p['asin']; d = AS + '/products/' + a + '.jpg'
        if a not in done and not os.path.exists(d):
            pim = rgb(Image.open(ROOT + '/' + p['image'])); s = max(pim.size)
            sq = Image.new('RGB', (s, s), (255, 255, 255)); sq.paste(pim, ((s - pim.width) // 2, (s - pim.height) // 2))
            sq.resize((800, 800), Image.LANCZOS).save(d, 'JPEG', quality=85, optimize=True, progressive=True)
        done.add(a)
        assert not PRICE.search(p['name'] + ' ' + p['note']), (slug, a)
        lines.append("      { name: %s, note: %s, image: %s, link: %s }" % (q(p['name']), q(p['note']), q('assets/products/' + a + '.jpg'), q(a)))
    seo = ("    seoTitle: %s,\n" % q(E['seoTitle'])) if E.get('seoTitle') else ''
    blocks.append("""  // ----------------------------------------------------------------
  {
    slug: %s,
    title: %s,
%s    category: %s,
    date: %s,
    description: %s,
    intro: %s,
    image: %s,
    imageAlt: %s,
    products: [
%s
    ]
  },
""" % (q(slug), q(E['title']), seo, q(E['category']), q(DATE), q(E['description']), q(E['intro']),
       q('assets/pins/' + slug + '.jpg'), q(E['imageAlt']), ',\n'.join(lines)))
body = ''.join(blocks)
for f, anchor in (('content.js', '  // BF-HUB-END\n'), ('ds.js', 'var POSTS = [\n')):
    t = open(SITE + '/src/js/' + f).read()
    assert t.count(anchor) == 1, f
    for s in ORDER: assert "slug: '%s'" % s not in t, (f, s)
    t = t.replace(anchor, anchor + body, 1)
    open(SITE + '/src/js/' + f, 'w').write(t)
print('posts added', len(blocks), 'products', len(done))
