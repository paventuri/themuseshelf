# Batch 8 (E72-E86, 15 edits, approved by Camilla 2026-11-09 "approve all"; E74 A and E86 A kept as they are):
# assets + POSTS blocks at the top of content.js AND the (runtime-dead) POSTS copy in ds.js, identical blocks.
# Post image (hero) = the edit's collage (pins[0]: A collage for decor edits, numbered C collage for gift guides).
# Gift guides (C pins): product order on the post == badge order of out/b8_<E>_C.order.json (asserted).
# Run: cd ~/CamillaAmazon && uv run --quiet --with pillow python site/tools/batch8/add_posts_b8.py
import json, os, re
from PIL import Image
ROOT = os.path.expanduser('~/CamillaAmazon'); SITE = ROOT + '/site'; AS = SITE + '/src/assets'
A = [e for x in 'abcde' for e in json.load(open(ROOT + '/pins/pins_batch8%s.json' % x))['edits']]
by = {e['edit']: e for e in A}
assert sorted(by) == ['E%d' % i for i in range(72, 87)], sorted(by)
# POSTS[0] = home hero; Christmas decor and gift guides interleaved, evergreen (pantry, nightstand) last
ORDER = ['E72', 'E82', 'E73', 'E80', 'E75', 'E83', 'E74', 'E81', 'E76', 'E84', 'E77', 'E78', 'E79', 'E85', 'E86']
DATE = '2026-11-09'
CATS = {'home-finds', 'beauty-finds', 'boho-dupes', 'gift-guides', 'under-50', 'hosting-recipes'}
PRICE = re.compile(r'\$|dollar|under \d', re.I)
assert sorted(ORDER) == sorted(by) and len(ORDER) == 15

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

src = open(SITE + '/src/js/content.js').read()
done = set(); blocks = []
for e in ORDER:
    E = by[e]; slug = E['slug']
    assert E['category'] in CATS, (e, E['category'])
    assert "slug: '%s'" % slug not in src, ('already in content.js', slug)
    assert '&' not in E['title'], (e, E['title'])
    for k in ('description', 'intro', 'imageAlt'): assert not PRICE.search(E[k]), (e, k, E[k])
    first = E['pins'][0]['out']
    assert re.search(r'b8_%s_(A|C)\.jpg$' % e, first), (e, first)
    if first.endswith('_C.jpg'):
        order = json.load(open(ROOT + '/' + first[:-4] + '.order.json'))['badge_order']
        got = [p['asin'] for p in E['products']]; want = [os.path.basename(x)[:-4] for x in order]
        # the pin numbers only the first 9; later positions may be swapped (E84 #10 scrunchies: model inset on the box)
        assert got[:9] == want[:9] and len(got) == len(want), ('order != pin', e)
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
assert len(blocks) == 15
anchor = 'var POSTS = [\n'
for f in ('content.js', 'ds.js'):
    t = open(SITE + '/src/js/' + f).read()
    assert t.count(anchor) == 1, f
    for e in ORDER: assert "slug: '%s'" % by[e]['slug'] not in t, (f, e)
    t = t.replace(anchor, anchor + ''.join(blocks), 1)
    open(SITE + '/src/js/' + f, 'w').write(t)
print('posts added', len(blocks), 'unique products', len(done))
