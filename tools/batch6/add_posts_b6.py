# Add batch 6 edits (E47-E61, approved by Camilla 2026-10-31) as site posts: assets + POSTS blocks at the top of content.js AND the (runtime-dead) POSTS copy in ds.js, identical blocks.
# Run: cd ~/CamillaAmazon && uv run --quiet --with pillow python site/tools/batch6/add_posts_b6.py
import json, os, re
from PIL import Image
ROOT = os.path.expanduser('~/CamillaAmazon'); SITE = ROOT + '/site'; AS = SITE + '/src/assets'
A = [e for x in 'abcde' for e in json.load(open(ROOT + '/pins/pins_batch6%s.json' % x))['edits']]
by = {e['edit']: e for e in A}
# The site shows no prices: price ranges live only in titles, so rewrite pin copy that quotes them.
FIX = {
    ('E49', 'description'): 'Affordable gifts for your sister from Amazon: dainty initial necklaces, a jewelry box, gold claw clips, silk scrunchies, a quilted makeup bag and a trek tumbler.',
    ('E51', 'description'): 'Affordable cozy gifts from Amazon: oversized stoneware mugs, fuzzy socks, memory foam slippers, a vanilla candle, a matcha set, hot cocoa and soft throws.',
    ('E51', 'intro'): 'Cozy gifts are the ones people use the most: the mug they reach for every morning, the socks they live in all winter, the candle that makes the house smell like a bakery. Everything here is affordable and still looks thoughtful, so it works for friends, coworkers, neighbors and stockings.',
    ('E51', 'imageAlt'): 'Collage of affordable cozy gifts from Amazon: LANEIGE lip balm, a matcha set, fuzzy slippers, stoneware mugs, a hot chocolate gift set, fuzzy socks, a fleece throw, a coconut vanilla candle and a burnt orange chenille throw',
    ('E61', 'description'): 'Affordable Amazon home finds that look expensive: travertine coasters and match holders, gold candle holders, amber bud vases, a fluted glass vase and a gold knot sculpture.',
    ('E61', 'intro'): 'The fastest way to make a room look expensive is a handful of small pieces in real-looking materials: travertine, brass, amber glass and ribbed ceramic. Every find here is affordable and reads like a design store piece on a shelf, a coffee table or a bathroom counter.',
}
for (k, f), v in FIX.items(): by[k][f] = v
ORDER = ['E47', 'E54', 'E52', 'E56', 'E51', 'E58', 'E57', 'E48', 'E55', 'E53', 'E49', 'E50', 'E59', 'E61', 'E60']  # POSTS[0] = home hero
DATE = '2026-10-31'
CATS = {'home-finds', 'beauty-finds', 'boho-dupes', 'gift-guides', 'under-50', 'hosting-recipes'}

def rgb(im):
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        im = im.convert('RGBA'); bg = Image.new('RGB', im.size, (255, 255, 255)); bg.paste(im, mask=im.split()[-1]); return bg
    return im.convert('RGB')
def q(s): return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

done = set(); blocks = []
src = open(SITE + '/src/js/content.js').read()
for e in ORDER:
    E = by[e]; slug = E['slug']
    assert E['category'] in CATS, (e, E['category'])
    assert "slug: '%s'" % slug not in src, ('already in content.js', slug)
    for k in ('description', 'intro', 'imageAlt'): assert '$' not in E[k] and not re.search(r'dollar|under \d', E[k], re.I), (e, k)
    first = E['pins'][0]['out']; assert 'collage' in first, (e, first)
    im = rgb(Image.open(ROOT + '/' + first))
    if im.size != (1000, 1500): im = im.resize((1000, 1500), Image.LANCZOS)
    dst = AS + '/pins/' + slug + '.jpg'; qq = 85
    while True:
        im.save(dst, 'JPEG', quality=qq, optimize=True, progressive=True)
        if os.path.getsize(dst) < 300 * 1024 or qq <= 60: break
        qq -= 5
    print('PIN', e, slug, os.path.getsize(dst) // 1024, 'KB q', qq)
    lines = []
    for p in E['products']:
        a = p['asin']
        if a not in done:
            done.add(a)
            pim = rgb(Image.open(ROOT + '/' + p['image'])); s = max(pim.size)
            sq = Image.new('RGB', (s, s), (255, 255, 255)); sq.paste(pim, ((s - pim.width) // 2, (s - pim.height) // 2))
            sq.resize((800, 800), Image.LANCZOS).save(AS + '/products/' + a + '.jpg', 'JPEG', quality=85, optimize=True, progressive=True)
        assert '$' not in p['name'] + p['note']
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
anchor = 'var POSTS = [\n'
assert len(blocks) == len(ORDER) == 15
for f in ('content.js', 'ds.js'):
    t = open(SITE + '/src/js/' + f).read()
    assert t.count(anchor) == 1, f
    for e in ORDER: assert "slug: '%s'" % by[e]['slug'] not in t, (f, e)
    t = t.replace(anchor, anchor + ''.join(blocks), 1)
    open(SITE + '/src/js/' + f, 'w').write(t)
print('posts added', len(blocks), 'unique products', len(done))
