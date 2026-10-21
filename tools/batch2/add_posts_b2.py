# Add batch 2A+2B edits (E11-E20) as site posts: assets + content.js POSTS blocks (newest first, top of list).
# Run: cd ~/CamillaAmazon && uv run --quiet --with pillow python site/tools/batch2/add_posts_b2.py
import json, os, re
from PIL import Image
ROOT = os.path.expanduser('~/CamillaAmazon'); SITE = ROOT + '/site'; AS = SITE + '/src/assets'
A = json.load(open(ROOT + '/pins/pins_batch2a.json'))['edits']; B = json.load(open(ROOT + '/pins/pins_batch2b.json'))
by = {e['edit']: e for e in A + B}
ORDER = ['E11', 'E12', 'E13', 'E20', 'E14', 'E15', 'E19', 'E16', 'E17', 'E18']
DATE = '2026-10-22'
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
