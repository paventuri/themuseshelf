# Add the champion-pin variations (pins/hf, approved by Camilla 2026-11-01) as 5 site posts: assets + POSTS blocks in
# content.js AND the (runtime-dead) ds.js copy, inserted right after the batch-6 group (before
# christmas-entryway-table-decor) so the holiday posts keep the home hero + "Latest edits".
# Run: cd ~/CamillaAmazon && uv run --quiet --with pillow python site/tools/hf/add_posts_hf.py
import json, os, re
from PIL import Image
ROOT = os.path.expanduser('~/CamillaAmazon'); SITE = ROOT + '/site'; AS = SITE + '/src/assets'
E = json.load(open(ROOT + '/pins/hf/copy.json'))
DATE = '2026-11-01'
BEFORE = "    slug: 'christmas-entryway-table-decor',"

def rgb(im):
    if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
        im = im.convert('RGBA'); bg = Image.new('RGB', im.size, (255, 255, 255)); bg.paste(im, mask=im.split()[-1]); return bg
    return im.convert('RGB')
def q(s): return "'" + s.replace('\\', '\\\\').replace("'", "\\'") + "'"

blocks = []
for e in E:
    slug = e['slug']
    for k in ('description', 'intro', 'imageAlt', 'title'):
        assert '$' not in e[k] and not re.search(r'dollar|under \d', e[k], re.I), (slug, k)
    im = rgb(Image.open(ROOT + '/' + e['out']))
    assert im.size == (1000, 1500)
    dst = AS + '/pins/' + slug + '.jpg'; qq = 85
    while True:
        im.save(dst, 'JPEG', quality=qq, optimize=True, progressive=True)
        if os.path.getsize(dst) < 300 * 1024 or qq <= 60: break
        qq -= 5
    print('PIN', slug, os.path.getsize(dst) // 1024, 'KB q', qq)
    lines = []
    for p in e['products']:
        a = p['asin']; dstp = AS + '/products/' + a + '.jpg'
        if not os.path.exists(dstp):
            pim = rgb(Image.open(ROOT + '/pool/hi/' + a + '.jpg')); s = max(pim.size)
            sq = Image.new('RGB', (s, s), (255, 255, 255)); sq.paste(pim, ((s - pim.width) // 2, (s - pim.height) // 2))
            sq.resize((800, 800), Image.LANCZOS).save(dstp, 'JPEG', quality=85, optimize=True, progressive=True)
            print('  new product image', a)
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
""" % (q(slug), q(e['title']), q(e['category']), q(DATE), q(e['description']), q(e['intro']),
       q('assets/pins/' + slug + '.jpg'), q(e['imageAlt']), ',\n'.join(lines)))
assert len(blocks) == 5
for f in ('content.js', 'ds.js'):
    t = open(SITE + '/src/js/' + f).read()
    for e in E: assert "slug: '%s'" % e['slug'] not in t, (f, e['slug'])
    i = t.index(BEFORE); j = t.rindex('  // ----', 0, i)
    assert t.count(BEFORE) == 1 and t[j:i].count('\n') == 2, (f, repr(t[j:i]))
    t = t[:j] + ''.join(blocks) + t[j:]
    open(SITE + '/src/js/' + f, 'w').write(t)
print('posts added', len(blocks))
