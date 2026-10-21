# Add batch 3 gift guides (E21-E25) as site posts: assets + content.js POSTS blocks (newest first, top of list).
# Run: cd ~/CamillaAmazon && uv run --quiet --with pillow python site/tools/batch3/add_posts_b3.py
import json, os, re
from PIL import Image
ROOT = os.path.expanduser('~/CamillaAmazon'); SITE = ROOT + '/site'; AS = SITE + '/src/assets'
A = json.load(open(ROOT + '/pins/pins_batch3_gifts.json'))['edits']
by = {e['edit']: e for e in A}
# The site shows no prices: price ranges live only in titles, so rewrite pin copy that quotes them.
FIX = {
  ('E21', 'description'): 'Affordable hostess gifts that look expensive: a marble cheese board, gold cheese knives, a Le Creuset mini cocotte, linen napkins and a candle.',
  ('E21', 'imageAlt'): 'Collage of affordable hostess gifts from Amazon: marble cheese board, marble handle cheese knives, Le Creuset mini cocotte, linen cocktail napkins, glass honey pot and a Thymes candle tin',
  ('E24', 'description'): 'Affordable white elephant gifts people will actually steal: a candle warmer lamp, whiskey glass set, cocktail shaker kit, mug warmer and a milk frother.',
  ('E24', 'imageAlt'): 'Collage of affordable white elephant gifts from Amazon: candle warmer lamp, whiskey glass gift set, cocktail shaker set, mug warmers, milk frother, glass mugs and a travel jewelry box',
}
for (k, f), v in FIX.items(): by[k][f] = v
ORDER = ['E22', 'E21', 'E23', 'E25', 'E24']  # POSTS[0] = home hero: the most on-brand guide first
DATE = '2026-10-21'
CATS = {'home-finds', 'beauty-finds', 'boho-dupes', 'gift-guides', 'under-50'}

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
    for k in ('description', 'intro', 'imageAlt'): assert '$' not in E[k], (e, k)
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
assert src.count(anchor) == 1
src = src.replace(anchor, anchor + ''.join(blocks), 1)
open(SITE + '/src/js/content.js', 'w').write(src)
print('posts added', len(blocks), 'unique products', len(done))
