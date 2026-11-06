# Batch 7 (E62-E71 gift guides, approved by Camilla 2026-11-06): assets + POSTS blocks at the top of content.js AND
# the (runtime-dead) POSTS copy in ds.js, identical blocks. Also reorders 3 live posts to match their new numbered
# variation pins (pins/b7/cfg/var_e14|e15|e47.json post_order) and swaps in the new collage as the post image;
# stocking-stuffers-for-her-under-25 drops B0F1W31ZP2 + B0CGT8F891 (now over the $25 title cap).
# Run: cd ~/CamillaAmazon && uv run --quiet --with pillow python site/tools/batch7/add_posts_b7.py
import json, os, re
from PIL import Image
ROOT = os.path.expanduser('~/CamillaAmazon'); SITE = ROOT + '/site'; AS = SITE + '/src/assets'
A = json.load(open(ROOT + '/pins/pins_batch7.json'))['edits']
by = {e['edit']: e for e in A}
ORDER = ['E69', 'E62', 'E64', 'E63', 'E68', 'E66', 'E65', 'E67', 'E70', 'E71']  # POSTS[0] = home hero
DATE = '2026-11-06'
CATS = {'home-finds', 'beauty-finds', 'boho-dupes', 'gift-guides', 'under-50', 'hosting-recipes'}
PRICE = re.compile(r'\$|dollar|under \d', re.I)

def rgb(im):
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        im = im.convert('RGBA'); bg = Image.new('RGB', im.size, (255, 255, 255)); bg.paste(im, mask=im.split()[-1]); return bg
    return im.convert('RGB')
def q(s): return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"
def save_pin(srcpath, slug):
    im = rgb(Image.open(srcpath))
    if im.size != (1000, 1500): im = im.resize((1000, 1500), Image.LANCZOS)
    dst = AS + '/pins/' + slug + '.jpg'; qq = 85
    while True:
        im.save(dst, 'JPEG', quality=qq, optimize=True, progressive=True)
        if os.path.getsize(dst) < 300 * 1024 or qq <= 60: break
        qq -= 5
    assert os.path.getsize(dst) < 300 * 1024, dst
    return os.path.getsize(dst) // 1024, qq

# ---------- 1. new posts ----------
src = open(SITE + '/src/js/content.js').read()
done = set(); blocks = []
for e in ORDER:
    E = by[e]; slug = E['slug']
    assert E['category'] in CATS, (e, E['category'])
    assert "slug: '%s'" % slug not in src, ('already in content.js', slug)
    assert '&' not in E['title'], (e, E['title'])
    for k in ('description', 'intro', 'imageAlt'): assert not PRICE.search(E[k]), (e, k, E[k])
    first = E['pins'][0]['out']; assert first.endswith('b7_%s_C.jpg' % e), (e, first)
    order = json.load(open(ROOT + '/pins/b7/out/b7_%s_C.order.json' % e))['badge_order']
    assert [os.path.basename(x)[:-4] for x in order] == [p['asin'] for p in E['products']], ('order != pin', e)
    kb, qq = save_pin(ROOT + '/' + first, slug)
    print('PIN', e, slug, kb, 'KB q', qq)
    lines = []
    for p in E['products']:
        a = p['asin']
        dst = AS + '/products/' + a + '.jpg'
        if a not in done and not os.path.exists(dst):
            pim = rgb(Image.open(ROOT + '/' + p['image'])); s = max(pim.size)
            sq = Image.new('RGB', (s, s), (255, 255, 255)); sq.paste(pim, ((s - pim.width) // 2, (s - pim.height) // 2))
            sq.resize((800, 800), Image.LANCZOS).save(dst, 'JPEG', quality=85, optimize=True, progressive=True)
        done.add(a)
        assert os.path.exists(dst), dst
        assert not PRICE.search(p['name'] + ' ' + p['note']), (e, a, p['name'], p['note'])
        lines.append("      { name: %s, note: %s, image: %s, link: %s }" % (q(p['name']), q(p['note']), q('assets/products/' + a + '.jpg'), q(a)))
    blocks.append("""  // ----------------------------------------------------------------
  {
    slug: %s,
    title: %s,
    category: %s,
    date: %s,
    description: %s,
    intro: %s,
    image: %s,
    imageAlt: %s,
    products: [
%s
    ]
  },
""" % (q(slug), q(E['title']), q(E['category']), q(DATE), q(E['description']), q(E['intro']),
       q('assets/pins/' + slug + '.jpg'), q(E['imageAlt']), ',\n'.join(lines)))
assert len(blocks) == len(ORDER) == 10
anchor = 'var POSTS = [\n'

# ---------- 2. reorder 3 live posts ----------
VAR = {'stocking-stuffers-for-her-under-25': 'var_e14', 'gifts-for-mom-under-50': 'var_e15',
       'christmas-gifts-for-women-that-look-expensive': 'var_e47'}
DROP = {'stocking-stuffers-for-her-under-25': {'B0F1W31ZP2', 'B0CGT8F891'}}
PROD = re.compile(r"^      \{ name: .*link: '([A-Z0-9]{10})' \}$")

def reorder(t, slug, post_order):
    s = t.index("slug: '%s'" % slug)
    a = t.rindex('  {\n', 0, s); b = t.index('\n  },\n', s)
    blk = t[a:b]
    p0 = blk.index('    products: [\n') + len('    products: [\n'); p1 = blk.index('\n    ]', p0)
    plines = blk[p0:p1].split(',\n')
    m = {}
    for ln in plines:
        mm = PROD.match(ln); assert mm, (slug, ln)
        m[mm.group(1)] = ln
    assert len(m) == len(plines), slug
    drop = DROP.get(slug, set())
    assert drop <= set(m), (slug, drop)
    assert set(post_order) == set(m) - drop, (slug, sorted(set(post_order) ^ (set(m) - drop)))
    new = ',\n'.join(m[x] for x in post_order)
    head = blk[:p0]
    for x in drop: assert x not in head, (slug, 'dropped ASIN referenced in header', x)
    nb = head + new + blk[p1:]
    got = re.findall(r"link: '([A-Z0-9]{10})' \}", nb)
    assert got == post_order, (slug, got)
    return t[:a] + nb + t[b:]

for f in ('content.js', 'ds.js'):
    t = open(SITE + '/src/js/' + f).read()
    assert t.count(anchor) == 1, f
    for e in ORDER: assert "slug: '%s'" % by[e]['slug'] not in t, (f, e)
    for slug, v in VAR.items():
        if "slug: '%s'" % slug not in t: print(f, 'no', slug); continue
        assert t.count("slug: '%s'" % slug) == 1, (f, slug)
        cfg = json.load(open(ROOT + '/pins/b7/cfg/%s.json' % v))
        assert cfg['slug'] == slug, (v, cfg['slug'])
        t = reorder(t, slug, cfg['post_order']); print(f, 'reordered', slug, len(cfg['post_order']))
    t = t.replace(anchor, anchor + ''.join(blocks), 1)
    open(SITE + '/src/js/' + f, 'w').write(t)

for slug, v in VAR.items():
    kb, qq = save_pin(ROOT + '/pins/b7/out/%s_C.jpg' % v, slug); print('PIN', v, slug, kb, 'KB q', qq)
print('posts added', len(blocks), 'unique products', len(done))
