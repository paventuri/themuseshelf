/* =====================================================================
   THE MUSE SHELF — SITE CONTENT
   This is the only file you edit to add or change posts.
   ---------------------------------------------------------------------
   1. Your Amazon Associates tag. Change it once here and every product
      link on the site updates.
   ===================================================================== */
var AFFILIATE_TAG = 'musesite-20';

/* Channel tags: visitors keep the tag of the channel that brought them (utm_source), for the whole visit. */
var CHANNEL_TAGS = { pinterest: 'musepin-20', instagram: 'museig-20', tiktok: 'musetok-20' };
function channelTag() {
  try {
    var q = new URLSearchParams(location.search).get('utm_source');
    if (q) sessionStorage.setItem('tms_src', q.toLowerCase());
    var s = sessionStorage.getItem('tms_src');
    return (s && CHANNEL_TAGS[s]) || AFFILIATE_TAG;
  } catch (e) { return AFFILIATE_TAG; }
}

/* Builds the full Amazon link. Use: amazon('B0GYQT74HH') */
function amazon(asinOrUrl) {
  var url = asinOrUrl.indexOf('http') === 0 ? asinOrUrl : 'https://www.amazon.com/dp/' + asinOrUrl;
  var tag = channelTag();
  if (!tag) return url;
  return url + (url.indexOf('?') === -1 ? '?' : '&') + 'tag=' + tag;
}

/* 2. Categories (nav order). slug = the URL, e.g. themuseshelf.com/home-finds */
var CATEGORIES = [
  { slug: 'home-finds', name: 'Home Finds', intro: 'Neutral, organic-modern pieces that look like they came from a design shop.', image: 'assets/products/05-beige-ceramic-vase-set.png' },
  { slug: 'boho-dupes', name: 'Boho & Dupes', intro: 'The Anthropologie look, found on Amazon for a lot less.', image: 'assets/products/10-wood-bead-garland.png' },
  { slug: 'gift-guides', name: 'Gift Guides', intro: 'Thoughtful, good-looking gifts for everyone on your list.', image: 'assets/products/09-marble-coasters-brass-inlay.png' },
  { slug: 'under-50', name: 'Under $50', intro: 'Every find in these edits comes in under fifty dollars.', image: 'assets/products/13-romano-travertine-tray.png' },
  { slug: 'hosting-recipes', name: 'Hosting & Recipes', intro: 'Easy recipes and hosting ideas, made and served with the pieces we already love.', image: 'assets/products/B08M5YNHGK.jpg' },
  { slug: 'beauty-finds', name: 'Beauty Finds', intro: 'Clean-girl essentials and vanity pieces worth the counter space.', image: 'assets/products/B08NTNQMZ5.jpg' }
];

/* 3. Posts. Newest first. To add a post, copy the block between the
      ---- lines, paste it at the top of the list and fill it in.
      - slug: the URL. Lead with the search phrase, lowercase, hyphens.
      - category: one of the slugs above.
      - image: the Pinterest pin (1000 x 1500 JPG, under 300 KB).
      - products: name, note (one sentence), image (square, on white), link (ASIN or full Amazon URL).
      Never add prices. Put a price range only in the title ("Under $50"). */
var POSTS = [
  // BF-HUB-START (growth/bf/update_hub.py writes this block; edit hub_config.json instead)
  {
    "slug": "amazon-black-friday-home-deals",
    "guide": true,
    "title": "Amazon Black Friday 2026: Home Deals That Look Expensive",
    "category": "home-finds",
    "date": "2026-11-11",
    "updated": "2026-11-11",
    "description": "Amazon Black Friday 2026 home deals that look expensive: neutral decor, Christmas pieces, gifts for her and hosting finds on sale today. Updated daily.",
    "intro": "Amazon's Black Friday Week runs November 19 to 30, and early deals are already live. We checked every piece we have featured for its look and kept only the ones on sale today: neutral home decor, Christmas pieces, gifts for her and hosting finds. The list updates every morning, so come back as new deals drop.",
    "image": "assets/pins/amazon-black-friday-home-deals.jpg",
    "imageAlt": "Black Friday home deals that look expensive: a collage of neutral Amazon decor on linen, with a beige ceramic vase set, a round wood side table, water hyacinth baskets, a sage waffle knit throw and more pieces on sale.",
    "related": [
      "stocking-stuffers-for-her-under-25",
      "gifts-for-mom-under-50",
      "christmas-gifts-for-women-that-look-expensive"
    ],
    "products": [
      {
        "name": "Beige ceramic vase set of 3",
        "note": "Three matte, sandy shapes that style themselves on a shelf or console.",
        "image": "assets/products/05-beige-ceramic-vase-set.png",
        "link": "B09ZL23DWT"
      },
      {
        "name": "Round wood side table",
        "note": "A small three-leg table that fits next to any sofa or chair.",
        "image": "assets/products/B09FJ9KWXF.jpg",
        "link": "B09FJ9KWXF"
      },
      {
        "name": "Water hyacinth baskets, 2 pack",
        "note": "Woven baskets for rolled towels and extra toilet paper on open shelves.",
        "image": "assets/products/B07SQ1X4FG.jpg",
        "link": "B07SQ1X4FG"
      },
      {
        "name": "Sage green waffle knit throw",
        "note": "A chunky sage waffle knit throw to keep folded over the arm of a reading chair.",
        "image": "assets/products/B0G1MK23CM.jpg",
        "link": "B0G1MK23CM"
      },
      {
        "name": "Mid century wood plant stand",
        "note": "A slim stand with a white top that lifts a plant beside the bed.",
        "image": "assets/products/B08TQWWS9X.jpg",
        "link": "B08TQWWS9X"
      },
      {
        "name": "Lawrence Frames gold branch picture frame, 5x7",
        "note": "A gold twig-style frame that turns a favorite family photo into a keepsake gift.",
        "image": "assets/products/B071GZRVCP.jpg",
        "link": "B071GZRVCP"
      },
      {
        "name": "Faux olive tree, 5 ft",
        "note": "Soft, muted leaves on a slim trunk that fill an empty corner with zero upkeep.",
        "image": "assets/products/02-faux-olive-tree.png",
        "link": "B0D5HK2KHW"
      },
      {
        "name": "DUMOS wicker laundry basket with lid, 90L",
        "note": "A tall woven hamper with a lid and a removable liner.",
        "image": "assets/products/B0HKSD1P5Z.jpg",
        "link": "B0HKSD1P5Z"
      },
      {
        "name": "Champagne gold ornaments, 36 pc",
        "note": "A mixed set of finishes in soft gold and champagne.",
        "image": "assets/products/B094V6SBF4.jpg",
        "link": "B094V6SBF4"
      },
      {
        "name": "Lulu Home gold deer figurines, set of 3",
        "note": "A faceted antique gold deer family that looks like a vintage store find.",
        "image": "assets/products/B0D5LYJ1BK.jpg",
        "link": "B0D5LYJ1BK"
      },
      {
        "name": "Red berry garland with pinecones, 7 ft",
        "note": "A bright red berry and holly leaf garland to weave through greenery for a pop of color.",
        "image": "assets/products/B07XY335K6.jpg",
        "link": "B07XY335K6"
      },
      {
        "name": "Homemory window candles with timer, 6 pack",
        "note": "Battery window candles with a remote, timer and dimmer for renters.",
        "image": "assets/products/B0C45BPJFC.jpg",
        "link": "B0C45BPJFC"
      },
      {
        "name": "DecorbyHannah 20 inch Norfolk pine wreath",
        "note": "A lit Norfolk pine wreath with a natural, airy shape.",
        "image": "assets/products/B0DXVFT9DF.jpg",
        "link": "B0DXVFT9DF"
      },
      {
        "name": "White ceramic Christmas tree, pre-lit",
        "note": "A vintage-style glazed ceramic tree in soft white with tiny glowing bulbs.",
        "image": "assets/products/B0CKNJNGCJ.jpg",
        "link": "B0CKNJNGCJ"
      },
      {
        "name": "Gold glitter star topper, 8 inch",
        "note": "A dimensional gold glitter star topper in a classic shape.",
        "image": "assets/products/B0F2FDGZ71.jpg",
        "link": "B0F2FDGZ71"
      },
      {
        "name": "WEMADE pre-lit Christmas garland, 15.4 ft",
        "note": "A long battery lit garland to frame a window or doorway without outlets.",
        "image": "assets/products/B0FMF2W44J.jpg",
        "link": "B0FMF2W44J"
      },
      {
        "name": "Pre-lit Christmas garland, 9 ft",
        "note": "A full battery-operated garland with ornaments and berries for open shelves or a range hood.",
        "image": "assets/products/B08HXMBP62.jpg",
        "link": "B08HXMBP62"
      },
      {
        "name": "Gold reindeer napkin rings, set of 8",
        "note": "Leaping gold reindeer that add a festive touch to every place setting.",
        "image": "assets/products/B08HXWSG9P.jpg",
        "link": "B08HXWSG9P"
      },
      {
        "name": "Warm white fairy lights, 12 pack",
        "note": "Battery strands to weave through the garland, the wreath and glass jars, with no cords to hide.",
        "image": "assets/products/B07WG18RLT.jpg",
        "link": "B07WG18RLT"
      },
      {
        "name": "Amazon Collection gold filigree hoop earrings",
        "note": "Lacy oval hoops with an heirloom feel.",
        "image": "assets/products/B00S5VKNJY.jpg",
        "link": "B00S5VKNJY"
      },
      {
        "name": "Pink Silk Pillowcase Standard Size with Hidden Zipper",
        "note": "Silk in blush pink with a hidden zipper, a pillowcase with a soft, glossy finish she will notice nightly.",
        "image": "assets/products/B0D1VPCT7T.jpg",
        "link": "B0D1VPCT7T"
      },
      {
        "name": "Spa Luxetique vanilla bath gift set, 8 pieces",
        "note": "A ready-to-give vanilla spa set for a slow night in.",
        "image": "assets/products/B0FJF5X4MJ.jpg",
        "link": "B0FJF5X4MJ"
      },
      {
        "name": "HASENSE ribbed stackable mugs, set of 4, with holder",
        "note": "Ribbed stackable mugs on a slim metal stand, a pretty coffee station gift for her kitchen.",
        "image": "assets/products/B0DLB8F5W7.jpg",
        "link": "B0DLB8F5W7"
      },
      {
        "name": "BAGSMART Travel Toiletry Bag",
        "note": "Sage green puffy toiletry bag with quilted channels and top handles, the cushy travel piece that looks designer.",
        "image": "assets/products/B0F5311BCF.jpg",
        "link": "B0F5311BCF"
      },
      {
        "name": "M MOOHAM small gold hoop earrings",
        "note": "Classic small gold hoops that pass for fine jewelry, an easy stocking stuffer she will wear.",
        "image": "assets/products/B08NVNNT86.jpg",
        "link": "B08NVNNT86"
      },
      {
        "name": "White porcelain mugs, set of 6",
        "note": "Clean white mugs for coffee, tea or cocoa.",
        "image": "assets/products/B0F8N74F65.jpg",
        "link": "B0F8N74F65"
      },
      {
        "name": "Spa bow headbands",
        "note": "Soft headbands that keep hair back during skincare.",
        "image": "assets/products/B0C1WVGJ5L.jpg",
        "link": "B0C1WVGJ5L"
      },
      {
        "name": "Crystal heart ring holder",
        "note": "Cut glass with a ring cone that sparkles on the vanity.",
        "image": "assets/products/B0DCZ4V4Z1.jpg",
        "link": "B0DCZ4V4Z1"
      },
      {
        "name": "Small Bathroom Vanity Tray for Countertop Makeup Perfume Jewelry",
        "note": "Set a candle and bud vase on this matte black vanity tray for a hotel-bathroom moment.",
        "image": "assets/products/B0CW1Q2MW6.jpg",
        "link": "B0CW1Q2MW6"
      },
      {
        "name": "Round white marble cheese board",
        "note": "A solid marble board that serves cheese tonight and styles the counter tomorrow.",
        "image": "assets/products/B01DPLTJWK.jpg",
        "link": "B01DPLTJWK"
      },
      {
        "name": "DOWAN oval serving platters, set of 3",
        "note": "Nesting white platters in three sizes for the turkey, sides and dessert.",
        "image": "assets/products/B07T7MYF4D.jpg",
        "link": "B07T7MYF4D"
      },
      {
        "name": "LE TAUCI gravy boat with saucer",
        "note": "A white ceramic gravy boat with its own saucer to catch drips.",
        "image": "assets/products/B0B3JBPQ2W.jpg",
        "link": "B0B3JBPQ2W"
      },
      {
        "name": "Juvale gold leaf placemats, 10 pack",
        "note": "Cut-out gold leaf placemats for a glamorous table.",
        "image": "assets/products/B0824DRNS8.jpg",
        "link": "B0824DRNS8"
      },
      {
        "name": "KitchenAid Albany kitchen towels, 4 pack",
        "note": "Paprika red and white towels in a crisp stripe that suit the season and beyond.",
        "image": "assets/products/B09BK667XG.jpg",
        "link": "B09BK667XG"
      },
      {
        "name": "Carrara marble cutting board",
        "note": "Real white marble that doubles as a serving board.",
        "image": "assets/products/B0FVWP57KW.jpg",
        "link": "B0FVWP57KW"
      },
      {
        "name": "Ribbed ceramic utensil holders, set of 2",
        "note": "Warm white ribbed crocks for spoons and whisks by the stove.",
        "image": "assets/products/B0CJ2H9J31.jpg",
        "link": "B0CJ2H9J31"
      },
      {
        "name": "Cheese knives with wooden handles, 6 pieces",
        "note": "Mini cheese knives with warm wood handles for every board.",
        "image": "assets/products/B0C8MYF17X.jpg",
        "link": "B0C8MYF17X"
      }
    ],
    "sections": [
      {
        "h": "When is Amazon Black Friday 2026?",
        "body": [
          "Amazon's Black Friday Week starts on **November 19, 2026** and runs through **November 30**, with Cyber Monday deals on the last day. Black Friday itself is November 27. Early Black Friday deals are live now, and new deals drop every day of the event."
        ]
      },
      {
        "h": "How this list works",
        "body": [
          "Every piece below was already picked for one of our edits because it looks more expensive than it is. Each morning we check which of them Amazon has on sale, and only deals with at least 4.3 stars and 100 reviews make the list. When a deal ends, the piece comes off the page."
        ]
      },
      {
        "h": "Home decor deals that look expensive",
        "body": [
          "Vases, throws, baskets and warm wood pieces from our home edits, on sale today."
        ],
        "picks": [
          "B09ZL23DWT",
          "B09FJ9KWXF",
          "B07SQ1X4FG",
          "B0G1MK23CM",
          "B08TQWWS9X",
          "B071GZRVCP",
          "B0D5HK2KHW",
          "B0HKSD1P5Z"
        ]
      },
      {
        "h": "Christmas decor deals",
        "body": [
          "Garlands, ornaments and mantel pieces, so you can decorate for less this year."
        ],
        "picks": [
          "B094V6SBF4",
          "B0D5LYJ1BK",
          "B07XY335K6",
          "B0C45BPJFC",
          "B0DXVFT9DF",
          "B0CKNJNGCJ",
          "B0F2FDGZ71",
          "B0FMF2W44J",
          "B08HXMBP62",
          "B08HXWSG9P",
          "B07WG18RLT"
        ]
      },
      {
        "h": "Gift deals for her",
        "body": [
          "Cozy, pretty gifts from our gift guides that are on sale right now. Buy now, wrap later."
        ],
        "picks": [
          "B00S5VKNJY",
          "B0D1VPCT7T",
          "B0FJF5X4MJ",
          "B0DLB8F5W7",
          "B0F5311BCF",
          "B08NVNNT86",
          "B0F8N74F65",
          "B0C1WVGJ5L",
          "B0DCZ4V4Z1",
          "B0CW1Q2MW6"
        ]
      },
      {
        "h": "Hosting and kitchen deals",
        "body": [
          "Serveware and kitchen pieces that make holiday hosting look effortless."
        ],
        "picks": [
          "B01DPLTJWK",
          "B07T7MYF4D",
          "B0B3JBPQ2W",
          "B0824DRNS8",
          "B09BK667XG",
          "B0FVWP57KW",
          "B0CJ2H9J31",
          "B0C8MYF17X"
        ]
      }
    ],
    "faq": [
      {
        "q": "When does Amazon Black Friday 2026 start?",
        "a": "Amazon's Black Friday Week starts November 19, 2026 and runs through November 30, which is also Cyber Monday. Black Friday is November 27."
      },
      {
        "q": "How do you choose these deals?",
        "a": "Every piece here has already been featured in one of our edits for its look. Each morning we check which of them are on sale on Amazon and keep only well-reviewed ones (4.3 stars and 100 reviews or more)."
      },
      {
        "q": "Why don't you show prices?",
        "a": "Prices and discounts on Amazon change during the day, so we link straight to each product page, where Amazon shows the current price and deal."
      }
    ],
    "note": "Deals were live when we checked on November 11, 2026. Prices and availability change fast on Amazon; the product page always shows the current price."
  },
  // BF-HUB-END
  // ----------------------------------------------------------------
  {
    slug: 'christmas-dining-room-decor-ideas',
    title: 'Christmas Dining Room Decor Ideas That Look Expensive',
    category: 'home-finds',
    date: '2026-11-09',
    description: 'Christmas dining room decor ideas from Amazon: gold chargers, Spode tree napkins, stoneware, gold flatware and a glowing garland runner.',
    intro: 'A classic Christmas table does not need a catalog budget. These Amazon finds give you the traditional holiday look, with gold chargers, cream stoneware, heritage napkins and evergreen, so your dining room feels ready for guests.',
    image: 'assets/pins/christmas-dining-room-decor-ideas.jpg',
    imageAlt: 'Collage of Christmas dining room decor on linen: Spode Christmas tree napkins, gold reef chargers, gold flatware, wood place card holders, pine garland, candle ring wreaths, burgundy napkins, cream holiday plates, stoneware plates, plaid napkins and cedar branches.',
    products: [
      { name: 'Gold reef charger plates, set of 6', note: 'Sunburst glass chargers that make any plate look like a formal setting.', image: 'assets/products/B07SVCRRPM.jpg', link: 'B07SVCRRPM' },
      { name: 'AmorArc speckled stoneware dinner plates, set of 6', note: 'Reactive-glaze stoneware with a raw rim, the artisan look of a pricier set.', image: 'assets/products/B0BMFRGF9J.jpg', link: 'B0BMFRGF9J' },
      { name: 'Spode Christmas Tree cloth napkins, set of 4', note: 'The classic Christmas tree pattern that defines a traditional holiday table.', image: 'assets/products/B0044YEVBC.jpg', link: 'B0044YEVBC' },
      { name: 'Aisoso gold flatware set, 20 pieces', note: 'Mirror-polished gold cutlery that adds warmth next to ivory and green.', image: 'assets/products/B08CGPFF2F.jpg', link: 'B08CGPFF2F' },
      { name: 'Valery Madelyn frosted pine garland with lights', note: 'Lay it flat down the table as a glowing champagne-toned runner.', image: 'assets/products/B0D1C3QLYF.jpg', link: 'B0D1C3QLYF' },
      { name: 'Ruvanti linen-blend napkins in burgundy, set of 12', note: 'Deep burgundy linen reads rich against cream plates and gold.', image: 'assets/products/B0DDCGNHN1.jpg', link: 'B0DDCGNHN1' },
      { name: 'Cream holiday dinner plates with gold scroll rims', note: 'Embossed rims with a delicate pattern for a heirloom feel.', image: 'assets/products/B0D8J2R7DS.jpg', link: 'B0D8J2R7DS' },
      { name: 'Pine candle ring wreaths with berries, set of 6', note: 'Slip one around a pillar or taper at each place for a lush centerpiece.', image: 'assets/products/B0FGCNFZR5.jpg', link: 'B0FGCNFZR5' },
      { name: 'Artificial cedar branches, 12 stems', note: 'Lifelike cedar to tuck along the table or fill a low vase.', image: 'assets/products/B0FFHJ44SM.jpg', link: 'B0FFHJ44SM' },
      { name: 'Cotton Craft harvest plaid cloth napkins, 12 pack', note: 'Red and green plaid for a cozy, classic country-house table.', image: 'assets/products/B0DX7DGSWL.jpg', link: 'B0DX7DGSWL' },
      { name: 'WOHENI rustic wood place card holders, 20 pack', note: 'Natural log slices that make simple kraft name cards look styled.', image: 'assets/products/B07SWXGGQQ.jpg', link: 'B07SWXGGQQ' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gifts-for-girlfriend-that-look-expensive',
    title: 'Gifts for Girlfriend That Look Expensive (Amazon)',
    category: 'gift-guides',
    date: '2026-11-09',
    description: 'Luxe gifts for your girlfriend from Amazon that look expensive: satin pajamas, a velvet jewelry box, a leather bag, cashmere, pearls and a mercury candle.',
    intro: 'The best gifts for a girlfriend feel indulgent: soft satin, real leather, velvet and a little gold. These Amazon finds look like they came from a boutique, and every one is something she will actually use. Start with one hero piece and add a small extra.',
    image: 'assets/pins/gifts-for-girlfriend-that-look-expensive.jpg',
    imageAlt: 'Numbered collage of luxe gifts for her: sage satin pajama set, emerald velvet jewelry box, tan leather hobo bag, mercury jar candle, grey cashmere scarf, blush satin pillowcases, pearl huggie earrings, leather vanity case and velvet travel jewelry case.',
    products: [
      { name: 'Women\'s satin pajama set, 5 pieces, sage', note: 'A liquid satin set with shorts, pants and a headband that looks boutique-bought.', image: 'assets/products/B0DK187KRX.jpg', link: 'B0DK187KRX' },
      { name: 'Emerald velvet jewelry box with drawers', note: 'A rich green velvet box with a drawer and earring rows, very jewelry-store.', image: 'assets/products/B08TVSWV2J.jpg', link: 'B08TVSWV2J' },
      { name: 'Kattee genuine leather hobo shoulder bag', note: 'Soft tan leather with gold hardware and a crossbody strap, an everyday luxe bag.', image: 'assets/products/B0GHY2P4KJ.jpg', link: 'B0GHY2P4KJ' },
      { name: 'Capri Blue Holiday mercury jar candle', note: 'A frosted mercury glass jar that looks beautiful on a vanity long after it burns.', image: 'assets/products/B0C2JN5MK6.jpg', link: 'B0C2JN5MK6' },
      { name: '100% cashmere scarf, grey', note: 'A lightweight pure cashmere wrap in soft grey she will wear all winter.', image: 'assets/products/B0B87RC56K.jpg', link: 'B0B87RC56K' },
      { name: 'BEDELITE blush satin pillowcases, set of 2', note: 'A blush satin set that feels like a silk-pillow upgrade for hair and skin.', image: 'assets/products/B08R9NGTJJ.jpg', link: 'B08R9NGTJJ' },
      { name: 'OwMell gold pearl huggie earrings', note: 'Chunky gold hoops with a big glossy pearl that read like fine jewelry.', image: 'assets/products/B087WTKJ9V.jpg', link: 'B087WTKJ9V' },
      { name: 'Leather two-tier vanity makeup case', note: 'A structured brown case with gold zippers that looks like designer luggage.', image: 'assets/products/B0G7FJ79HN.jpg', link: 'B0G7FJ79HN' },
      { name: 'Emerald velvet travel jewelry case', note: 'A small velvet case with a mirror and ring rolls for trips and weekends away.', image: 'assets/products/B0CRL5TWV5.jpg', link: 'B0CRL5TWV5' },
      { name: 'PAVOI 14K gold plated teardrop necklace', note: 'A dainty gold drop pendant she can wear every single day.', image: 'assets/products/B0CQKPYKV4.jpg', link: 'B0CQKPYKV4' },
      { name: 'PAVOI freshwater pearl stud earrings', note: 'Classic gold-set pearl studs, the gift that always looks expensive.', image: 'assets/products/B01KZPKESM.jpg', link: 'B01KZPKESM' },
      { name: 'Cream winter scarf with tassels', note: 'A soft cream fringed scarf with a cashmere-like hand.', image: 'assets/products/B0F4KDC9C4.jpg', link: 'B0F4KDC9C4' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'old-money-christmas-decor',
    title: 'Old Money Christmas Decor Ideas From Amazon',
    category: 'home-finds',
    date: '2026-11-09',
    description: 'Old money Christmas decor from Amazon: boxwood wreaths, brass bells, velvet bows, gold frames, pheasant feathers and jewel-tone ornaments.',
    intro: 'Old money Christmas is quiet, collected and a little worn in. Think preserved boxwood, antique brass bells, burgundy velvet and gilded frames. These Amazon finds bring that traditional look home without the antique shop prices.',
    image: 'assets/pins/old-money-christmas-decor.jpg',
    imageAlt: 'Collage of old money Christmas decor on linen: gold bells on jute rope, ornate gold frame, rustic gold cow bells, burgundy velvet ribbon, preserved boxwood wreath, burgundy and green glass ornaments, mercury glass finials, plum sherpa throw, mini boxwood wreaths and pheasant feathers.',
    products: [
      { name: 'Preserved boxwood wreath, 16 inch', note: 'Real preserved boxwood, the quiet green that old money homes use all season.', image: 'assets/products/B07S49J9P5.jpg', link: 'B07S49J9P5' },
      { name: 'Amazon Basics reversible sherpa throw in plum', note: 'A velvety plum throw that brings in the jewel tone of a traditional den.', image: 'assets/products/B0DNQ7K8S1.jpg', link: 'B0DNQ7K8S1' },
      { name: 'Vintage rustic gold cow bells, set of 3', note: 'Aged brass-look bells with jute loops for a mantel or console.', image: 'assets/products/B0D8GY3G8R.jpg', link: 'B0D8GY3G8R' },
      { name: 'Valery Madelyn burgundy and green glass ornaments, 10 count', note: 'Harlequin and poinsettia patterns in classic burgundy, green and gold.', image: 'assets/products/B07C1MVD19.jpg', link: 'B07C1MVD19' },
      { name: 'eletecpro ornate antique gold frame, 5x7', note: 'A baroque gold frame that makes any print look like a collected piece.', image: 'assets/products/B0D9D3CDSH.jpg', link: 'B0D9D3CDSH' },
      { name: 'Ballinger pheasant and peacock feathers, 15 pieces', note: 'Feathers in a brass vase give a hunting-lodge, heritage feel.', image: 'assets/products/B0F9V6DRRS.jpg', link: 'B0F9V6DRRS' },
      { name: 'KI Store champagne mercury glass finial ornaments, 4 pcs', note: 'Long ribbed finials with an antique mercury glass finish.', image: 'assets/products/B0B4S57CH9.jpg', link: 'B0B4S57CH9' },
      { name: 'Burgundy velvet ribbon, 10 yards', note: 'Tie velvet bows on wreaths, garlands and chair backs.', image: 'assets/products/B0FH4ZK5PG.jpg', link: 'B0FH4ZK5PG' },
      { name: 'Mini preserved boxwood wreaths, 6 inch, set of 3', note: 'Small boxwood wreaths to hang on cabinet knobs, windows or chairs.', image: 'assets/products/B081X6Y3SP.jpg', link: 'B081X6Y3SP' },
      { name: 'Vintage gold Christmas bells on jute rope', note: 'A cluster of antique-gold bells to hang from a door handle or newel post.', image: 'assets/products/B098P8FRV2.jpg', link: 'B098P8FRV2' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'coworker-gifts-under-25',
    title: 'Coworker Gifts Under $25 That Look Thoughtful',
    category: 'gift-guides',
    date: '2026-11-09',
    description: 'Coworker gifts that look thoughtful: a leather journal, speckled mug, olive planter, cozy socks, gold desk pieces, tumbler and hand cream.',
    intro: 'Coworker gifts are tricky: personal enough to feel thoughtful, simple enough for anyone. These Amazon finds look like they came from a design store, from a leather journal to gold desk pieces and cozy socks.',
    image: 'assets/pins/coworker-gifts-under-25.jpg',
    imageAlt: 'Numbered collage of coworker gifts on linen: leather journal, speckled heart mug, olive planter, fuzzy socks, gold wire pen holders, navy tumbler, gold mesh desk organizer, rose hand cream and shagreen journals, with a Shop all 11 finds button.',
    products: [
      { name: 'Leather journal with deckle edge paper and vintage key', note: 'A handmade-look leather journal that feels like a real keepsake.', image: 'assets/products/B09VDR7CHK.jpg', link: 'B09VDR7CHK' },
      { name: 'Unboxme speckled heart coffee mug', note: 'A speckled stoneware mug with a tiny gold heart, sweet without being cutesy.', image: 'assets/products/B0DXHLLVXZ.jpg', link: 'B0DXHLLVXZ' },
      { name: 'D\'vine Dev olive ceramic planter with saucer', note: 'A glossy olive pot that makes a desk plant look intentional.', image: 'assets/products/B0DWZ81W7H.jpg', link: 'B0DWZ81W7H' },
      { name: 'Fuzzy slipper socks in earth tones, 5 pairs', note: 'Cozy socks in brown and cream that anyone can use.', image: 'assets/products/B0FHK19JZK.jpg', link: 'B0FHK19JZK' },
      { name: 'Gold wire pen holders, 2 pack', note: 'Open gold wire cups that tidy a desk and look like a design store find.', image: 'assets/products/B0DJKRJQPW.jpg', link: 'B0DJKRJQPW' },
      { name: 'Insulated travel coffee tumbler in navy, 20 oz', note: 'Keeps coffee hot through the morning meeting.', image: 'assets/products/B0GCGY5Y5Y.jpg', link: 'B0GCGY5Y5Y' },
      { name: 'BLU MONACO gold mesh desk organizer with drawer', note: 'A champagne-gold caddy that turns a cluttered desk calm.', image: 'assets/products/B082SFB5MP.jpg', link: 'B082SFB5MP' },
      { name: 'Mario Badescu rose hand cream', note: 'A non-greasy rose hand cream for dry office air.', image: 'assets/products/B07XZVLLTM.jpg', link: 'B07XZVLLTM' },
      { name: 'Amazon Basics shagreen hardcover journal, 2 pack', note: 'Pebbled-texture notebooks that look far more expensive than they are.', image: 'assets/products/B07YLTKWBY.jpg', link: 'B07YLTKWBY' },
      { name: 'Green striped ceramic espresso cup', note: 'A hand-painted stripe cup for the coworker who takes an afternoon espresso.', image: 'assets/products/B0FR1FDNSV.jpg', link: 'B0FR1FDNSV' },
      { name: 'U Brands gold wire letter sorter', note: 'A gold mail sorter that keeps folders and notes upright.', image: 'assets/products/B07XF8W67M.jpg', link: 'B07XF8W67M' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'pink-christmas-decor-ideas',
    title: 'Pink Christmas Decor Ideas That Look Expensive',
    category: 'home-finds',
    date: '2026-11-09',
    description: 'Blush pink Christmas decor that still looks expensive: mercury glass, a blush tree, magnolia wreath, velvet ribbon and gold accents from Amazon.',
    intro: 'Pink Christmas looks elegant when you keep it soft: blush instead of bright, with cream, champagne gold and real glass. These finds build that look on a tree, a mantel or a console.',
    image: 'assets/pins/pink-christmas-decor-ideas.jpg',
    imageAlt: 'Collage of blush pink Christmas decor on a linen background: pink taper candles, a pink and gold nutcracker, a pale pink tabletop tree, a blush magnolia wreath, mercury glass ornaments and finials, vintage pink glass ornaments, velvet ribbon with gold edges, a pink and gold garland and blush pampas grass.',
    products: [
      { name: 'Blush pink magnolia wreath with lights, 22 inch', note: 'Blush magnolias, gold leaves and warm lights on a full evergreen base.', image: 'assets/products/B0FJXY9Q96.jpg', link: 'B0FJXY9Q96' },
      { name: 'Pale pink tabletop Christmas tree, 3 ft', note: 'A slim blush tree that fits a corner, a console or a bedroom.', image: 'assets/products/B0983FW6R2.jpg', link: 'B0983FW6R2' },
      { name: 'KI Store pink mercury glass ornaments, set of 8', note: 'Rose-gold mercury glass balls and finials with an antique shimmer.', image: 'assets/products/B093381FPR.jpg', link: 'B093381FPR' },
      { name: 'KI Store pink mercury glass finials, set of 4', note: 'Long glass drops that make a small tree look collected and luxe.', image: 'assets/products/B093387WLM.jpg', link: 'B093387WLM' },
      { name: 'Pink and gold lighted Christmas garland, 6 ft', note: 'Blush poinsettias, gold leaves and timer lights for a mantel or sideboard.', image: 'assets/products/B0FJXZBNCN.jpg', link: 'B0FJXZBNCN' },
      { name: 'Pink and gold wooden nutcracker, 12 inch', note: 'A blush, white and gold nutcracker that reads festive, not childish.', image: 'assets/products/B0CGHYZNHG.jpg', link: 'B0CGHYZNHG' },
      { name: 'Zomiboo vintage pink glass ornaments, set of 12', note: 'Real glass in soft shell pinks, the vintage look for a blush tree.', image: 'assets/products/B0FKT7DKD9.jpg', link: 'B0FKT7DKD9' },
      { name: 'Blush pink and cream pampas grass stems', note: 'Soft blush and cream plumes that keep a pink scheme airy.', image: 'assets/products/B0CQJJVMMG.jpg', link: 'B0CQJJVMMG' },
      { name: 'Pink and champagne gold velvet wired ribbon', note: 'Velvet ribbon with gold edges for bows, garlands and gifts.', image: 'assets/products/B0D947BRPF.jpg', link: 'B0D947BRPF' },
      { name: 'Light pink taper candles, 12 inch', note: 'Tall blush tapers that look elegant in brass candlesticks.', image: 'assets/products/B0C15J68LL.jpg', link: 'B0C15J68LL' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gold-jewelry-gifts-that-look-expensive',
    title: 'Gold Jewelry Gifts That Look Expensive',
    category: 'gift-guides',
    date: '2026-11-09',
    description: 'Gold jewelry gifts that look like fine jewelry: hoops, chunky drops, a tennis bracelet, croissant ring, cuff, stackable rings and pearls from Amazon.',
    intro: 'Gold jewelry is the gift that always looks more expensive than it is, if you pick the right shapes. Chunky drops, polished hoops, a tennis bracelet and a croissant ring read like fine jewelry. Every piece here is a gift she will actually wear.',
    image: 'assets/pins/gold-jewelry-gifts-that-look-expensive.jpg',
    imageAlt: 'Numbered collage of gold jewelry gifts on a linen background: chunky drop earrings, croissant ring, tennis bracelet, pearl set in a velvet box, hoops, hammered cuff, paperclip bracelet, filigree hoops and stackable rings',
    products: [
      { name: 'Besteel chunky gold teardrop and dome hoop earrings set', note: 'Bold drops and domes that read like a designer statement pair.', image: 'assets/products/B0D47LDXF7.jpg', link: 'B0D47LDXF7' },
      { name: 'FAMARINE gold croissant dome ring', note: 'A twisted croissant ring that looks like fine jewelry.', image: 'assets/products/B0C4T8PPVB.jpg', link: 'B0C4T8PPVB' },
      { name: 'PAVOI 14K gold-plated tennis bracelet', note: 'A classic line of sparkling stones for an everyday luxe touch.', image: 'assets/products/B08C5H5YR7.jpg', link: 'B08C5H5YR7' },
      { name: 'LETURE pearl necklace and bracelet set in a velvet gift box', note: 'Gift-ready pearls that arrive in a cream velvet box.', image: 'assets/products/B0D2QJGKS8.jpg', link: 'B0D2QJGKS8' },
      { name: 'PAVOI 14K gold-plated hoop earrings', note: 'Lightweight polished hoops she will wear every day.', image: 'assets/products/B07QW1ZX3Z.jpg', link: 'B07QW1ZX3Z' },
      { name: 'Chunky hammered gold cuff bracelet', note: 'A molten-texture cuff that looks like a gallery piece.', image: 'assets/products/B0CFGGR1P6.jpg', link: 'B0CFGGR1P6' },
      { name: 'Amazon Essentials gold paperclip chain bracelet', note: 'The paperclip link that pairs with everything.', image: 'assets/products/B0BHDS6GQP.jpg', link: 'B0BHDS6GQP' },
      { name: 'Amazon Collection gold filigree hoop earrings', note: 'Lacy oval hoops with an heirloom feel.', image: 'assets/products/B00S5VKNJY.jpg', link: 'B00S5VKNJY' },
      { name: 'Poxtex gold stackable band rings, set of 3', note: 'Three polished bands in graduated widths to stack or wear alone.', image: 'assets/products/B0GQ3ZG2BZ.jpg', link: 'B0GQ3ZG2BZ' },
      { name: 'Ana Luisa gold huggie hoop earrings', note: 'Chunky huggies from a fine-jewelry-style brand.', image: 'assets/products/B0CGTLXN8L.jpg', link: 'B0CGTLXN8L' },
      { name: 'Kendra Scott dainty gold pendant necklace', note: 'A fine gold chain with a soft white stone pendant.', image: 'assets/products/B0BSD6J8N3.jpg', link: 'B0BSD6J8N3' },
      { name: 'PAVOI dainty pearl station necklace', note: 'A fine gold chain dotted with tiny pearl drops.', image: 'assets/products/B08VFY8J69.jpg', link: 'B08VFY8J69' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-window-decor-ideas',
    title: 'Christmas Window Decor Ideas That Look Expensive',
    category: 'home-finds',
    date: '2026-11-09',
    description: 'Christmas window decor that looks custom: window candles, boxwood and berry wreaths, pine garland swags and paper star lanterns from Amazon.',
    intro: 'A dressed window is the easiest way to make a house look festive from the street and cozy from inside. These are the wreaths, candles, garlands and star lanterns that give windows that classic, expensive look without a designer.',
    image: 'assets/pins/christmas-window-decor-ideas.jpg',
    imageAlt: 'Collage of Christmas window decor on a linen background: red velvet bow, paper star lanterns, mini pine wreaths with bells, red berry wreath, bronze suction hook, boxwood wreath, pre-lit garland, kraft star lanterns, Norfolk pine garland, flickering window candles and a poinsettia swag.',
    products: [
      { name: 'Flickering window candles with gold bases, set of 6', note: 'Battery candles with a dusk-to-dawn sensor, so every window glows on its own each evening.', image: 'assets/products/B0FFG4XZDZ.jpg', link: 'B0FFG4XZDZ' },
      { name: 'Lvydec mini boxwood wreath, 10 inch', note: 'A small, full boxwood wreath sized for a single window pane.', image: 'assets/products/B082PX8F8L.jpg', link: 'B082PX8F8L' },
      { name: 'Red berry wreath, 20 inch', note: 'Dense deep-red berries read classic and rich against white window frames.', image: 'assets/products/B0CF5JKQTP.jpg', link: 'B0CF5JKQTP' },
      { name: 'Real-touch Norfolk pine garland', note: 'Soft, droopy needles that drape over a sill or window seat like fresh pine.', image: 'assets/products/B0FRF6FBJ2.jpg', link: 'B0FRF6FBJ2' },
      { name: 'Paper star lanterns, set of 5', note: 'Cream, tan, wine and deep green folded stars to hang in a row of panes.', image: 'assets/products/B0HF4D2XLP.jpg', link: 'B0HF4D2XLP' },
      { name: 'Red velvet wreath bow with gold edge', note: 'A big wired velvet bow that makes any plain wreath look custom.', image: 'assets/products/B09B7VWWFB.jpg', link: 'B09B7VWWFB' },
      { name: 'SHACOS poinsettia Christmas swag, 30 inch', note: 'Poinsettias, pine cones and gold accents in one long piece for a sill.', image: 'assets/products/B0C8HHMT72.jpg', link: 'B0C8HHMT72' },
      { name: 'Sggvecsy mini pine wreaths with bells, set of 6', note: 'Small Norfolk pine wreaths with brass bells for divided window panes.', image: 'assets/products/B0HDLDTXVC.jpg', link: 'B0HDLDTXVC' },
      { name: 'SUNBEAUTY kraft paper star lantern, 12 inch', note: 'A warm kraft-brown star that looks Scandinavian in a window.', image: 'assets/products/B0B9GSHM3R.jpg', link: 'B0B9GSHM3R' },
      { name: 'Pre-lit Christmas garland, 9 ft', note: 'A full garland with warm LED lights to frame a window or bay.', image: 'assets/products/B099F23DXW.jpg', link: 'B099F23DXW' },
      { name: 'Antique gold suction cup wreath hooks, 4 pack', note: 'Hang wreaths straight on the glass, no nails in the frame.', image: 'assets/products/B0180PBKLE.jpg', link: 'B0180PBKLE' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'neighbor-gifts-under-15',
    title: 'Neighbor Gifts Under $15 That Look Thoughtful',
    category: 'gift-guides',
    date: '2026-11-09',
    description: 'Small Christmas gifts for neighbors that look thoughtful: a snowflake mug, chinoiserie towel, marble coasters, ring dishes and mini wreaths.',
    intro: 'Neighbor gifts should be small, useful and pretty enough to feel chosen. These are easy to buy in multiples and look like boutique finds once you add twine and a sprig of holly.',
    image: 'assets/pins/neighbor-gifts-under-15.jpg',
    imageAlt: 'Numbered collage of neighbor gift ideas on a linen background: snowflake mug, chinoiserie topiary hand towel, blue and white dipping bowls, marble coasters with gold holder, green leaf trinket dish, mini grapevine wreaths, red striped kitchen towels, acacia coasters and lotus ring dishes, with a Shop All 11 Finds button.',
    products: [
      { name: 'Karma winter white snowflake mug', note: 'A stoneware mug with a hand-drawn snowflake, ready for cocoa.', image: 'assets/products/B0C7S97WJ3.jpg', link: 'B0C7S97WJ3' },
      { name: 'Chinoiserie topiary kitchen hand towel', note: 'A blue-and-white ginger jar topiary print that feels like a boutique find.', image: 'assets/products/B0DF71LTW2.jpg', link: 'B0DF71LTW2' },
      { name: 'Blue and white ceramic dipping bowls, 6 pack', note: 'Small patterned bowls for dips, rings or salt by the stove.', image: 'assets/products/B0BKNYWZ73.jpg', link: 'B0BKNYWZ73' },
      { name: 'White marble-look ceramic coasters with gold holder', note: 'Absorbent stone coasters that look like a pricier marble set.', image: 'assets/products/B0DG2KQCVS.jpg', link: 'B0DG2KQCVS' },
      { name: 'Green reactive-glaze leaf trinket dish', note: 'A glossy leaf dish for rings or keys with a handmade feel.', image: 'assets/products/B0D3DZQRBL.jpg', link: 'B0D3DZQRBL' },
      { name: 'Mini grapevine wreaths, 3 inch, 16 pieces', note: 'Tie one to each cookie tin or gift bag as a natural topper.', image: 'assets/products/B07Z7JPL9Y.jpg', link: 'B07Z7JPL9Y' },
      { name: 'KitchenAid Albany kitchen towels, red and white, 4 pack', note: 'Classic red stripes that look festive in any kitchen.', image: 'assets/products/B088ZKRQXR.jpg', link: 'B088ZKRQXR' },
      { name: 'Acacia wood coasters with holder, 4 pack', note: 'Warm wood coasters in an iron caddy that look store-bought pricey.', image: 'assets/products/B0CHP3Z38G.jpg', link: 'B0CHP3Z38G' },
      { name: 'Lotus leaf ceramic ring dishes, 2 pack', note: 'Scalloped celadon and cream dishes with gold rims, easy to split between two neighbors.', image: 'assets/products/B0C6PZ12J5.jpg', link: 'B0C6PZ12J5' },
      { name: 'BBTO artificial holly berry picks, 100 pieces', note: 'Tuck a sprig into twine on any small gift for a finished look.', image: 'assets/products/B07YKNMPGH.jpg', link: 'B07YKNMPGH' },
      { name: 'Ceramic shell ring dish', note: 'A pearly white shell dish for jewelry by the sink.', image: 'assets/products/B0CHW6W31Z.jpg', link: 'B0CHW6W31Z' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'scandinavian-christmas-decor',
    title: 'Scandinavian Christmas Decor: Calm Nordic Amazon Finds',
    category: 'home-finds',
    date: '2026-11-09',
    description: 'Scandinavian Christmas decor from Amazon: white knit stockings, wood bead garland, a gold advent ring, Dala horses and Nordic knit ornaments.',
    intro: 'A Nordic Christmas is about restraint: white, pale wood, a little red and candlelight. These Amazon finds give you the calm Scandinavian look without hunting through design shops. Mix two or three on a mantel or table and let the space breathe.',
    image: 'assets/pins/scandinavian-christmas-decor.jpg',
    imageAlt: 'Collage of Scandinavian Christmas decor: white cable knit stockings, gold advent candle ring, wood bead garland, red Nordic knit ornaments, Dala horses, wooden trees and white velvet ornaments on linen.',
    products: [
      { name: 'White cable knit Christmas stockings, set of 2', note: 'Chunky ivory cable knit that reads hand-knit and Nordic on any mantel.', image: 'assets/products/B0B878SB6P.jpg', link: 'B0B878SB6P' },
      { name: 'Gold advent candle ring for taper candles', note: 'A slim brushed gold ring that turns four plain tapers into a Swedish advent centerpiece.', image: 'assets/products/B0FHWT7QN3.jpg', link: 'B0FHWT7QN3' },
      { name: 'Meplait natural wood bead garland with tassels', note: 'Pale wood beads and jute tassels for a soft, natural swag.', image: 'assets/products/B09V7HZPY6.jpg', link: 'B09V7HZPY6' },
      { name: 'WEWILL red Nordic knit ball ornaments, 10 pack', note: 'Fair Isle knit balls that bring the classic red and white Scandi pattern.', image: 'assets/products/B06ZYG4XD2.jpg', link: 'B06ZYG4XD2' },
      { name: 'Ceramic Dala horse salt and pepper shakers', note: 'The iconic Swedish folk horse, small enough for a shelf or the holiday table.', image: 'assets/products/B009ZXC7L8.jpg', link: 'B009ZXC7L8' },
      { name: 'Painted wooden Christmas tree trio, 11 inch', note: 'Flat wood trees in white, green and red with gold stars, simple and folk-inspired.', image: 'assets/products/B0F93FPKK3.jpg', link: 'B0F93FPKK3' },
      { name: 'White velvet Christmas ball ornaments, 12 pack', note: 'Matte white velvet balls that look soft and quiet in a wooden bowl or on the tree.', image: 'assets/products/B0FLXD6XBX.jpg', link: 'B0FLXD6XBX' },
      { name: 'Traditional evergreen advent wreath candle holder', note: 'A full advent wreath with pinecones and gold candle cups, ready for four candles.', image: 'assets/products/B0178AXZJW.jpg', link: 'B0178AXZJW' },
      { name: 'Natural wood Christmas ornament shapes, 45 pieces', note: 'Stars, snowflakes and reindeer in plain wood, left natural or painted white.', image: 'assets/products/B0DGPPZTLK.jpg', link: 'B0DGPPZTLK' },
      { name: 'Cream flocked Christmas ornaments, 28 pieces', note: 'Mixed shapes in soft cream flocking for a calm, tone-on-tone tree or bowl.', image: 'assets/products/B0D7VMTLMQ.jpg', link: 'B0D7VMTLMQ' },
      { name: 'Cranberry red wooden bead garland', note: 'A deep cranberry garland that adds the one pop of red a Nordic room needs.', image: 'assets/products/B08B8WV6PW.jpg', link: 'B08B8WV6PW' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'last-minute-christmas-gifts-for-her',
    title: 'Last Minute Christmas Gifts for Her That Feel Thoughtful',
    category: 'gift-guides',
    date: '2026-11-09',
    description: 'Last minute Christmas gifts for her from Amazon that still feel thoughtful: cashmere-feel socks, a travel jewelry case, a glass tumbler and a cozy wrap.',
    intro: 'Running late on gifts doesn\'t mean settling. These Amazon finds feel chosen, not grabbed: soft socks, a cozy wrap, a travel jewelry case and a few small luxuries she will use every day. Pair one with a candle or her favorite coffee and the gift feels complete.',
    image: 'assets/pins/last-minute-christmas-gifts-for-her.jpg',
    imageAlt: 'Numbered collage of last minute Christmas gifts for her: cashmere-feel socks, green travel jewelry case, glass tumbler, green wearable wrap, red wine glasses, sage manicure set, Tyler candle gift set, cream cosmetic bag and grey cozy socks.',
    products: [
      { name: 'MELUSA cashmere-feel crew socks, 3 pairs', note: 'Soft ribbed socks in cream, oatmeal and heather grey that feel like a little luxury.', image: 'assets/products/B0CCK55PGG.jpg', link: 'B0CCK55PGG' },
      { name: 'Dark green travel jewelry case', note: 'A small faux-leather case with blush velvet slots for rings, earrings and necklaces.', image: 'assets/products/B0BVB6ZJQF.jpg', link: 'B0BVB6ZJQF' },
      { name: 'Tronco 16 oz glass tumbler with bamboo lid and straw', note: 'Her iced coffee, upgraded: clear glass with a soft silicone sleeve and a bamboo lid.', image: 'assets/products/B09QW7PFY2.jpg', link: 'B09QW7PFY2' },
      { name: 'Forest green wearable blanket wrap with pockets', note: 'A chunky knit-look wrap she can throw on over pajamas all winter.', image: 'assets/products/B0DJ8RLDQ3.jpg', link: 'B0DJ8RLDQ3' },
      { name: 'Amazon Basics stemmed red wine glasses, set of 4', note: 'Big classic bowls that make a weeknight glass of wine feel like a dinner party.', image: 'assets/products/B0F2J7WNGW.jpg', link: 'B0F2J7WNGW' },
      { name: 'Sage green 7-piece manicure set in a zip case', note: 'Stainless steel tools in a slim faux-leather case that looks spa-bought.', image: 'assets/products/B0C7H683T1.jpg', link: 'B0C7H683T1' },
      { name: 'Tyler Candle Glamorous gift set', note: 'The cult-favorite Glamorous scent in gold-printed packaging that looks boutique-bought.', image: 'assets/products/B07WVZ7PXZ.jpg', link: 'B07WVZ7PXZ' },
      { name: 'Cream double-layer cosmetic bag', note: 'A structured bag with two zip layers that keeps her makeup neat at home or away.', image: 'assets/products/B0CC8VGKPW.jpg', link: 'B0CC8VGKPW' },
      { name: 'Barefoot Dreams cozy knit socks, heather grey', note: 'The famously soft Barefoot Dreams knit in a pair of fluffy socks.', image: 'assets/products/B0D5P7Y2Q5.jpg', link: 'B0D5P7Y2Q5' },
      { name: 'Satin scrunchies, 8 pack', note: 'A stack of neutral satin scrunchies, blonde to black, that feel like silk on her hair.', image: 'assets/products/B0FWQRD374.jpg', link: 'B0FWQRD374' },
      { name: 'Spa Luxetique vanilla bath gift set, 8 pieces', note: 'A ready-to-give vanilla spa set for a slow night in.', image: 'assets/products/B0FJF5X4MJ.jpg', link: 'B0FJF5X4MJ' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'vintage-christmas-decor-ideas',
    title: 'Vintage Christmas Decor Ideas for a Collected Home',
    category: 'home-finds',
    date: '2026-11-09',
    description: 'Vintage Christmas decor ideas from Amazon: a ceramic tree, bottle brush trees, mercury glass, brass bells, a village church and an old-world Santa.',
    intro: 'The vintage Christmas look feels collected over years, not bought in one trip. These Amazon finds bring the ceramic tree, mercury glass, brass and village pieces that make a home feel warm and nostalgic. Group them on a sideboard or chest and keep the rest of the room simple.',
    image: 'assets/pins/vintage-christmas-decor-ideas.jpg',
    imageAlt: 'Collage of vintage Christmas decor: green ceramic Christmas tree, brass hurricane lanterns, gold deer, old-world Santa, holly deer pillow, porcelain village church, bottle brush trees, brass bell, mercury glass finials and glass cloches.',
    products: [
      { name: 'Joiedomi 15 inch prelit ceramic Christmas tree', note: 'The nostalgic glazed ceramic tree with little colored bulbs, like the ones grandma had.', image: 'assets/products/B07JHF1WPK.jpg', link: 'B07JHF1WPK' },
      { name: 'Brass hurricane candle holders, set of 2', note: 'Glass hurricanes with aged brass frames and ring handles for a warm candle glow.', image: 'assets/products/B0FMD975F8.jpg', link: 'B0FMD975F8' },
      { name: 'Lulu Home gold deer figurines, set of 3', note: 'A faceted antique gold deer family that looks like a vintage store find.', image: 'assets/products/B0D5LYJ1BK.jpg', link: 'B0D5LYJ1BK' },
      { name: 'RAZ Imports glittered vintage Santa figure, white', note: 'An old-world belsnickel Santa in cream glitter that looks collected, not new.', image: 'assets/products/B0798S1CJP.jpg', link: 'B0798S1CJP' },
      { name: 'Vintage holly deer Christmas pillow cover', note: 'A forest green velvet-look cover with twin fawns and holly, like a vintage tapestry.', image: 'assets/products/B0FM3S5T2P.jpg', link: 'B0FM3S5T2P' },
      { name: 'Lemax Little River Church lighted village house', note: 'A porcelain village church with warm glowing windows for a collected vignette.', image: 'assets/products/B004JY709M.jpg', link: 'B004JY709M' },
      { name: 'RAZ Imports mini decorated bottle brush trees, set of 3', note: 'Frosted bottle brush trees with tiny glass baubles, a true vintage classic.', image: 'assets/products/B07HSTKVCH.jpg', link: 'B07HSTKVCH' },
      { name: 'Antique brass dinner bell', note: 'An engraved brass bell that adds a little old-world shine to a shelf or tray.', image: 'assets/products/B09YQYZHLS.jpg', link: 'B09YQYZHLS' },
      { name: 'Silver mercury glass finial ornaments, 12 pieces', note: 'Ribbed mercury glass drops that look heirloom in a footed bowl.', image: 'assets/products/B0CRB3H71R.jpg', link: 'B0CRB3H71R' },
      { name: 'Glass cloche domes with wooden bases, 2 pack', note: 'Bell jars to show off a tiny tree, a village house or a few ornaments.', image: 'assets/products/B0DQPKS4LK.jpg', link: 'B0DQPKS4LK' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'anthropologie-christmas-dupes',
    title: 'Anthropologie Christmas Dupes: The Look for Less',
    category: 'boho-dupes',
    date: '2026-11-09',
    description: 'Get the Anthropologie Christmas look for less: jewel-tone glass ornaments, mushroom baubles, wavy tapers, a jadeite cake stand and bead garland from Amazon.',
    intro: 'Anthropologie holiday decor is all about collected color: glass mushrooms, jewel-tone baubles, sculptural tapers and a little whimsy. These Amazon finds give you the same curated look for less, without tipping into kitsch. Mix two or three on a sideboard and it already feels styled.',
    image: 'assets/pins/anthropologie-christmas-dupes.jpg',
    imageAlt: 'Collage of Amazon Christmas decor in jewel tones: ribbed glass ornaments, jadeite cake stand, glass mushroom ornaments, gradient and bubble taper candles, embroidered tree skirt and wood bead garland',
    products: [
      { name: 'IndianShelf vintage ribbed glass ball ornaments, set of 12', note: 'Jewel-tone ribbed glass balls that look like a collected heirloom set.', image: 'assets/products/B0BXGTPSYY.jpg', link: 'B0BXGTPSYY' },
      { name: 'Martha Stewart Highbrook jadeite glass cake stand, 11 inch', note: 'The mint-green milk glass pedestal that makes any holiday display feel curated.', image: 'assets/products/B0BRF6Y2PM.jpg', link: 'B0BRF6Y2PM' },
      { name: 'Old World Christmas lucky mushroom glass ornament', note: 'A hand-blown red-and-white mushroom with real vintage charm.', image: 'assets/products/B01N9XDMAD.jpg', link: 'B01N9XDMAD' },
      { name: 'Neutral gradient taper candles', note: 'Blush-to-cocoa tapers that give a table that colorful candle-shop look.', image: 'assets/products/B0FV7YK5CB.jpg', link: 'B0FV7YK5CB' },
      { name: 'Lillian Vernon glass acorn and mushroom ornaments, set of 12', note: 'Woodland glass ornaments in red and gold for a whimsical tree.', image: 'assets/products/B0D2PCCQVZ.jpg', link: 'B0D2PCCQVZ' },
      { name: 'Grelucgo embroidered holly tree skirt, 36 inch', note: 'An ivory tree skirt with embroidered holly sprigs and a red trim.', image: 'assets/products/B0774LFLP8.jpg', link: 'B0774LFLP8' },
      { name: 'Meplait wood bead garland with jute tassels', note: 'Red, green and white beads with tassels for mantels, trays and trees.', image: 'assets/products/B0CHRQNJRT.jpg', link: 'B0CHRQNJRT' },
      { name: 'Old World Christmas morel mushroom glass ornament', note: 'A textured glass morel that reads like a boutique find.', image: 'assets/products/B015FYT88A.jpg', link: 'B015FYT88A' },
      { name: 'MAITREYA ivory bubble taper candles', note: 'Sculptural bubble tapers that add a playful designer touch.', image: 'assets/products/B0DGX66TYX.jpg', link: 'B0DGX66TYX' },
      { name: 'Lillian Vernon gold glass pinecone ornaments', note: 'Glittered gold glass pinecones that warm up any tree.', image: 'assets/products/B09TG6CRKG.jpg', link: 'B09TG6CRKG' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-party-decor-ideas',
    title: 'Christmas Party Decor Ideas That Look Expensive',
    category: 'hosting-recipes',
    date: '2026-11-09',
    description: 'Christmas party decor ideas that look expensive: ribbed coupes, a tiered dessert stand, marble boards, gold stirrers and a cocktail bar set from Amazon.',
    intro: 'Hosting a Christmas party at home looks expensive when the serving pieces do the work. Ribbed coupes, a tiered dessert stand, marble boards and a few gold accents turn a sideboard into a party bar. These Amazon finds cover the drinks, the food and the table.',
    image: 'assets/pins/christmas-party-decor-ideas.jpg',
    imageAlt: 'Collage of Amazon Christmas party pieces: ribbed coupe glasses, white tiered dessert stand, marble and acacia board, olive scalloped napkins, stainless cocktail bar set on a bamboo stand, gold swizzle sticks, marble lazy susan, velvet wine bags, gold spoons and tiered porcelain trays',
    products: [
      { name: 'Ribbed coupe cocktail glasses, set of 4', note: 'Fluted coupes that make champagne and cocktails feel like a hotel bar.', image: 'assets/products/B0F48HS3LR.jpg', link: 'B0F48HS3LR' },
      { name: 'Sweejar 3-tier ceramic dessert stand', note: 'White scalloped tiers with a gold handle for cookies and petit fours.', image: 'assets/products/B07DQGWY3G.jpg', link: 'B07DQGWY3G' },
      { name: 'Coloch marble and acacia wood serving board', note: 'A marble-and-wood board that dresses up a simple cheese spread.', image: 'assets/products/B0C23X6FD1.jpg', link: 'B0C23X6FD1' },
      { name: 'Olive-green scalloped cocktail napkins, 100 pack', note: 'Scalloped edges in muted olive that look custom-made.', image: 'assets/products/B0CZRDR4YK.jpg', link: 'B0CZRDR4YK' },
      { name: 'Amazon Basics stainless steel cocktail bar set with bamboo stand', note: 'A 10-piece shaker set on a curved bamboo stand that makes a home bar look professional.', image: 'assets/products/B09KH729NX.jpg', link: 'B09KH729NX' },
      { name: 'Mudder gold ball-top swizzle sticks', note: 'Gold stirrers that make a self-serve cocktail station look styled.', image: 'assets/products/B0G2Y6C233.jpg', link: 'B0G2Y6C233' },
      { name: 'Marble lazy susan turntable, 12 inch', note: 'A spinning marble tray for appetizers in the middle of the table.', image: 'assets/products/B099WVNWBS.jpg', link: 'B099WVNWBS' },
      { name: 'Mandala Crafts maroon velvet wine bags', note: 'Velvet drawstring bags for hostess gifts and bottles on the bar.', image: 'assets/products/B0DBMVCB4C.jpg', link: 'B0DBMVCB4C' },
      { name: 'Gold coffee spoons, set of 6', note: 'Slim gold spoons for desserts, espresso and dips.', image: 'assets/products/B071K1CF33.jpg', link: 'B071K1CF33' },
      { name: 'MALACASA 3-tier porcelain serving trays', note: 'Stacked white platters on a gold stand for a tall buffet moment.', image: 'assets/products/B0DS59Q4LS.jpg', link: 'B0DS59Q4LS' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'pantry-organization-that-looks-expensive',
    title: 'Pantry Organization That Looks Expensive: Amazon Finds',
    category: 'home-finds',
    date: '2026-11-09',
    description: 'Pantry organization ideas that look expensive: glass jars with bamboo lids, seagrass baskets, a bamboo bread box, olive oil bottles and a wood lazy susan.',
    intro: 'A January pantry reset is the easiest way to make a kitchen feel calm and expensive. Decant into glass, corral the rest in woven baskets and bring the pretty pieces out on the counter. These Amazon finds do all three without a custom pantry.',
    image: 'assets/pins/pantry-organization-that-looks-expensive.jpg',
    imageAlt: 'Collage of pantry organization finds: bamboo bread box, glass jars with bamboo lids, seagrass baskets, glass spice jars, green oil dispenser bottles, bamboo stacking bins, acacia lazy susan, wicker baskets, ceramic egg holder and black wire baskets.',
    products: [
      { name: 'BAMBANG bamboo bread box with clear panels', note: 'A farmhouse bread box with a clear ribbed front that keeps loaves fresh and on display.', image: 'assets/products/B0D4TKNG4H.jpg', link: 'B0D4TKNG4H' },
      { name: 'Glass storage jars with bamboo lids, 2 pack', note: 'Airtight glass canisters for coffee, pasta or snacks that look like a boutique pantry.', image: 'assets/products/B0DFTYFT1L.jpg', link: 'B0DFTYFT1L' },
      { name: 'StorageWorks seagrass pantry baskets, 2 pack', note: 'Woven seagrass baskets that hide snack clutter and warm up open shelves.', image: 'assets/products/B086947XVS.jpg', link: 'B086947XVS' },
      { name: 'Kamenstein 12-piece glass spice jar set', note: 'Matching glass spice jars with black lids for a clean, uniform spice shelf.', image: 'assets/products/B07KX8KDP1.jpg', link: 'B07KX8KDP1' },
      { name: 'Green glass olive oil dispenser bottles, 2 pack', note: 'Olive green glass with gold pour spouts that look like a chef\'s countertop.', image: 'assets/products/B0DYLK19ZC.jpg', link: 'B0DYLK19ZC' },
      { name: 'Bamboo stackable pantry storage bins, 2 piece', note: 'Open-front bamboo bins for cans, potatoes or onions that stack neatly.', image: 'assets/products/B07WT6GQGC.jpg', link: 'B07WT6GQGC' },
      { name: 'Rickby acacia wood lazy susan with marble-look glass plate', note: 'A 12 inch turntable that keeps oils and spices easy to reach and pretty to see.', image: 'assets/products/B07XCXD2S9.jpg', link: 'B07XCXD2S9' },
      { name: 'GRANNY SAYS espresso wicker storage baskets', note: 'Dark woven baskets with handles for produce, snacks or linens.', image: 'assets/products/B093WVY2BN.jpg', link: 'B093WVY2BN' },
      { name: 'White ceramic egg holder tray', note: 'A scalloped white egg tray that turns plain eggs into counter decor.', image: 'assets/products/B07TH51BJ6.jpg', link: 'B07TH51BJ6' },
      { name: 'LeleCAT black wire baskets with wooden handles, 2 pack', note: 'Black wire baskets with wood handles for a modern farmhouse pantry.', image: 'assets/products/B0CHBM5NL8.jpg', link: 'B0CHBM5NL8' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'nightstand-decor-ideas',
    title: 'Nightstand Decor Ideas That Look Expensive (Amazon)',
    category: 'home-finds',
    date: '2026-11-09',
    description: 'Nightstand decor ideas from Amazon that look expensive: a rustic ceramic vase, a travertine tray, a gold floating frame, a flower ring dish and small plants.',
    intro: 'A styled nightstand is the smallest change that makes a bedroom feel finished. Start with a tray for the everyday things, add one sculptural piece and something green, then stop. These Amazon finds give you a calm, layered bedside without the clutter.',
    image: 'assets/pins/nightstand-decor-ideas.jpg',
    imageAlt: 'Collage of nightstand decor: rustic cream ceramic vase, travertine tray, beige ceramic plant pots, gold floating frames, flower ring dish, decorative books, mango wood coasters, mini faux plants, bamboo tray and a cream self-watering planter.',
    products: [
      { name: 'Briful rustic ceramic pottery vase, cream white', note: 'A weathered stoneware jar vase that looks like a found antique.', image: 'assets/products/B0D4V3WCQP.jpg', link: 'B0D4V3WCQP' },
      { name: 'Natural travertine marble tray, 10 x 5 inch', note: 'A real stone tray to corral rings, perfume and lip balm by the bed.', image: 'assets/products/B0DR1FVJM8.jpg', link: 'B0DR1FVJM8' },
      { name: 'LE TAUCI reactive glaze plant pots, set of 3, beige', note: 'Speckled beige pots with saucers for a small snake plant or pothos.', image: 'assets/products/B08F7TP4TN.jpg', link: 'B08F7TP4TN' },
      { name: 'Gold floating picture frames, 2 pack', note: 'Slim gold frames for a photo or a pressed leaf, very gallery-shop.', image: 'assets/products/B0D91VPTMZ.jpg', link: 'B0D91VPTMZ' },
      { name: 'White ceramic flower ring dish', note: 'A tiny flower-shaped dish for the rings and earrings she takes off at night.', image: 'assets/products/B0FF3B6RM7.jpg', link: 'B0FF3B6RM7' },
      { name: 'Decorative books with storage, set of 3, brown and cream', note: 'Faux books that stack under a vase and hide small things inside.', image: 'assets/products/B0FD4YRF5D.jpg', link: 'B0FD4YRF5D' },
      { name: 'SAMHITA mango wood coasters with iron holder, set of 4', note: 'Dark wood coasters in a black stand that protect the nightstand in style.', image: 'assets/products/B0BRCL3D38.jpg', link: 'B0BRCL3D38' },
      { name: 'Der Rose mini faux plants, 3 pack', note: 'Tiny sage green faux plants that add life with zero care.', image: 'assets/products/B07VKJKFN2.jpg', link: 'B07VKJKFN2' },
      { name: 'Bamboo vanity tray, 11.8 inch', note: 'A slim pale bamboo tray that brings order to a busy nightstand.', image: 'assets/products/B0BPL5MJSP.jpg', link: 'B0BPL5MJSP' },
      { name: 'Self-watering ceramic plant pot, cream and beige', note: 'A cream wave-textured planter that keeps a small plant watered for you.', image: 'assets/products/B0G39LHY4X.jpg', link: 'B0G39LHY4X' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'luxury-gifts-for-her-under-100',
    title: 'Luxury Gifts for Her Under $100',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Luxury gifts for her from Amazon: Armani My Way, a Kendra Scott necklace, a Mikasa crystal vase, a silk pillowcase, gold hoops and a carved marble tray.',
    intro: 'Some gifts should feel like a splurge, even when they are not. These Amazon picks bring real designer names, Gucci, Armani and Kendra Scott, plus crystal, marble and silk that look like they came from a department store counter. Wrap one in tissue and she will feel spoiled.',
    image: 'assets/pins/luxury-gifts-for-her-under-100.jpg',
    imageAlt: 'Collage of luxury gifts for her from Amazon: Armani My Way perfume, a Mikasa crystal vase, a black leather tote, a Kendra Scott pendant, a carved marble tray, a glass top jewelry box, 14K gold hoops, a silk pillowcase and a marble tray',
    products: [
      { name: 'Armani Beauty My Way Eau de Parfum', note: 'Armani My Way eau de parfum in a blush-tinted bottle with a deep blue cap, a true vanity showpiece.', image: 'assets/products/B08DHW4CT9.jpg', link: 'B08DHW4CT9' },
      { name: 'Mikasa Baron Crystal Vase', note: 'Mikasa crystal vase with crisp angled edges that makes grocery-store tulips look florist-arranged.', image: 'assets/products/B0BM53G1L6.jpg', link: 'B0BM53G1L6' },
      { name: 'HOXIS oversized vegan leather tote, black', note: 'Oversized black faux leather tote with soft slouchy folds, the minimalist designer look for workdays and weekends.', image: 'assets/products/B09QSVL5LS.jpg', link: 'B09QSVL5LS' },
      { name: 'Kendra Scott Elisa Pendant Necklace for Women', note: 'The Kendra Scott Elisa pendant in gold with a soft pink stone, a dainty signature piece she will wear daily.', image: 'assets/products/B00RYURH8M.jpg', link: 'B00RYURH8M' },
      { name: 'Creative Co-Op Minimalist Round Carved Marble Tray or Charcuterie', note: 'Round carved white marble tray from Creative Co-Op, simple enough for a coffee table or cheese night.', image: 'assets/products/B084LLCN3S.jpg', link: 'B084LLCN3S' },
      { name: 'VLANDO three-drawer jewelry box, glass top', note: 'Taupe three-drawer jewelry box with a glass top and gold pulls, like a boutique case for her pieces.', image: 'assets/products/B0FCYDP63T.jpg', link: 'B0FCYDP63T' },
      { name: 'Gold Earrings for Women 14K Gold Hoop Earrings for Women', note: 'Braided gold hoops with a twisted rope texture that catch the light and look straight from a jewelry counter.', image: 'assets/products/B0D1XLXXH6.jpg', link: 'B0D1XLXXH6' },
      { name: '100% Natural Pure Silk Pillowcase for Hair and Skin', note: 'Pure white silk pillowcase with a soft sheen, the bedtime luxury that makes her whole bed look styled.', image: 'assets/products/B06WP3LRT1.jpg', link: 'B06WP3LRT1' },
      { name: 'African Natural Marble Decorative Tray', note: 'Natural white marble tray in a soft oval shape, cool and weighty under her perfume and rings.', image: 'assets/products/B0CLNYRH68.jpg', link: 'B0CLNYRH68' },
      { name: 'Gucci Bamboo by Gucci for Women 2.5 oz Eau de Parfum Spray', note: 'Gucci Bamboo eau de parfum in a faceted bottle with a sculpted silver cap, made to sit out on display.', image: 'assets/products/B00ZCIHYRM.jpg', link: 'B00ZCIHYRM' },
      { name: 'Ivation Wine Gift Set', note: 'Electric wine opener with an aerator, stopper and foil cutter on a sleek black stand for her bar cart.', image: 'assets/products/B07JJS258Y.jpg', link: 'B07JJS258Y' },
      { name: 'Hot Tools Pro Artist Black Gold Detachable One Step Volumizer and', note: 'Hot Tools Black Gold one-step volumizer dries and styles at once for a salon blowout at home.', image: 'assets/products/B089J5JWPN.jpg', link: 'B089J5JWPN' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gifts-for-best-friend-under-50',
    title: 'Gifts for Your Best Friend Under $50',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Gifts for your best friend from Amazon: a gold tennis bracelet, teardrop earrings, latte mugs, a marble tray, a travel jewelry case and a BruMate tumbler.',
    intro: 'The best friend gift should feel like an inside joke you both get: pretty, useful and very her. These Amazon finds cover the little luxuries she would never buy herself, from a gold tennis bracelet to silk pillowcases and the tumbler she will carry everywhere.',
    image: 'assets/pins/gifts-for-best-friend-under-50.jpg',
    imageAlt: 'Collage of best friend gifts from Amazon: a gold tennis bracelet, ceramic latte mugs, a makeup bag, gold teardrop earrings, a tumbler, a black marble tray, a lotus ring tray, a pink travel jewelry case and claw clips',
    products: [
      { name: 'PAVOI adjustable tennis bracelet, 14K gold plated', note: 'This 14K gold plated tennis bracelet adjusts with a slider and sparkles like a fine jewelry piece.', image: 'assets/products/B082TRCLRN.jpg', link: 'B082TRCLRN' },
      { name: 'MORA Ceramic Large Latte Mug Set of 4', note: 'Four speckled ceramic latte mugs with raw clay bases, the handmade look for slow weekend coffee.', image: 'assets/products/B09H9ZPGXP.jpg', link: 'B09H9ZPGXP' },
      { name: 'EACHY Travel Makeup Bag for Women', note: 'Cognac leather-look makeup bag that opens wide with neat dividers inside, like a designer train case for trips.', image: 'assets/products/B0BRR6Q2ZD.jpg', link: 'B0BRR6Q2ZD' },
      { name: 'PAVOI chunky gold teardrop earrings', note: 'Chunky gold drops that look like a designer pair, the kind of earrings she will wear daily.', image: 'assets/products/B0C8BHH9JG.jpg', link: 'B0C8BHH9JG' },
      { name: 'BrüMate Era 20 oz Tumbler with Handle and Straw', note: 'Her new daily carry: a soft blue BrüMate Era with a sturdy handle, a straw and a leakproof lid.', image: 'assets/products/B0FXJ1NMBT.jpg', link: 'B0FXJ1NMBT' },
      { name: 'Real natural black marble tray', note: 'A heavy natural marble tray that makes perfume, candles or keys look like a boutique display.', image: 'assets/products/B0DL5KJ6LS.jpg', link: 'B0DL5KJ6LS' },
      { name: 'Lotus Leaf Shape Decorative Ring Tray', note: 'Shaped like a lotus leaf, this pale green ceramic dish with a golden edge keeps her rings in one spot.', image: 'assets/products/B0BVLY1T2C.jpg', link: 'B0BVLY1T2C' },
      { name: 'Small travel jewelry case, pink', note: 'A tiny blush jewelry case with ring rolls and compartments, the gift she will pack on every trip.', image: 'assets/products/B0C32J6L9F.jpg', link: 'B0C32J6L9F' },
      { name: 'Large Hair Claw Clips for Women Girls', note: 'Eight matte claw clips in creamy neutrals, from oat to espresso, that pass for designer ones.', image: 'assets/products/B0F439VB36.jpg', link: 'B0F439VB36' },
      { name: 'DKBslik Silk Pillow Cases 2 Pack Standard Size with Hidden Zipper', note: 'Beige silk pillowcases with hidden zippers, smooth on her hair overnight with a glossy, high-end sheen.', image: 'assets/products/B0C6R8DCSD.jpg', link: 'B0C6R8DCSD' },
      { name: 'Stemless Wine Glasses Set of 2', note: 'A boxed pair of thin stemless wine glasses, made for long wine nights on her couch with you.', image: 'assets/products/B0D7Z83KYC.jpg', link: 'B0D7Z83KYC' },
      { name: 'Bedsure GentleSoft White Throw Blanket for Couch', note: 'Plush creamy white fleece with soft ribbing, this throw looks like a boutique blanket draped over her sofa.', image: 'assets/products/B0BPLB81LX.jpg', link: 'B0BPLB81LX' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gifts-for-wife-that-look-expensive',
    title: 'Gifts for Your Wife That Look Expensive',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Gifts for your wife that look expensive, from Amazon: a pure cashmere scarf, a cognac leather tote, a leather jewelry case, gold huggies and onyx coasters.',
    intro: 'The best gift for your wife is an upgrade she would never splurge on herself. Think pure cashmere, real onyx stone, a leather travel jewelry case and a heated eye mask for the nights she needs a reset. Each one looks like it came from a boutique, not a last-minute cart.',
    image: 'assets/pins/gifts-for-wife-that-look-expensive.jpg',
    imageAlt: 'Collage of gifts for your wife from Amazon: a cashmere scarf, a brushed gold tray, a cognac leather tote, a bow jewelry tray, a ceramic diffuser, a leather jewelry case, gold huggie hoops, marble coasters and a gold mirror tray',
    products: [
      { name: 'Pure 100% Cashmere Scarf with Fringed Edges', note: 'Pure cashmere in soft blush pink with fringed edges, the scarf she will wrap on every cold morning.', image: 'assets/products/B0CC1YGJRK.jpg', link: 'B0CC1YGJRK' },
      { name: 'FREELOVE brushed gold round tray', note: 'Brushed gold round tray that turns perfume bottles or a bud vase into a styled little vignette.', image: 'assets/products/B09FHPF82P.jpg', link: 'B09FHPF82P' },
      { name: 'Kattee leather tote bag, cognac', note: 'A structured cognac leather tote that reads boutique, roomy enough for her laptop and everyday things.', image: 'assets/products/B07MT5VRTF.jpg', link: 'B07MT5VRTF' },
      { name: 'Bow Jewelry Tray', note: 'White tray with gold bow handles and a gilded edge that feels straight out of a Paris boutique.', image: 'assets/products/B08Q2Y9GQS.jpg', link: 'B08Q2Y9GQS' },
      { name: 'InnoGear 300ml Ceramic Essential Oil Diffuser', note: 'Part diffuser, part sculpture: matte ceramic on a wood-tone base that looks lovely by her bed.', image: 'assets/products/B0DKFK1J9V.jpg', link: 'B0DKFK1J9V' },
      { name: 'Genuine Leather Travel Jewelry Organizer Case with Mirror for Women', note: 'Blush pink genuine leather jewelry case with a mirror inside, so her rings and pearls travel neatly.', image: 'assets/products/B0F8ZQFYKG.jpg', link: 'B0F8ZQFYKG' },
      { name: 'PAVOI gold huggie hoop earrings set', note: 'A set of gold huggies she can stack or wear alone, polished enough for every day.', image: 'assets/products/B0B1494KHN.jpg', link: 'B0B1494KHN' },
      { name: 'Radicaln Round Marble Coasters Set of 6 with Holder', note: 'Six round white onyx coasters with warm caramel veining, stacked in a matching stone holder.', image: 'assets/products/B0FT7MCLPR.jpg', link: 'B0FT7MCLPR' },
      { name: 'Hipiwe gold mirror glass vanity tray', note: 'Octagonal gold-framed mirror tray that makes her perfume bottles look like a department store display.', image: 'assets/products/B07T4GDPPW.jpg', link: 'B07T4GDPPW' },
      { name: 'Anydance Cordless Heated Eye Mask', note: 'Cordless heated eye mask with four warmth levels and a timer, made for quiet breaks after long days.', image: 'assets/products/B0HDRSS5K8.jpg', link: 'B0HDRSS5K8' },
      { name: 'Scented Candles Gift Set', note: 'Eight Warm Woods soy candles in glass jars with black lids, boxed like a candle shop sampler of cozy scents.', image: 'assets/products/B0H6WWXSTY.jpg', link: 'B0H6WWXSTY' },
      { name: 'Tyler Diva Scented Candle', note: 'Tyler Diva candle in a big glass jar under a playful leopard print lid, a fun touch on her dresser.', image: 'assets/products/B0016R858U.jpg', link: 'B0016R858U' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'secret-santa-gifts-under-20',
    title: 'Secret Santa Gifts Under $20 That Look Expensive',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Secret Santa gifts from Amazon that look expensive: an initial ring dish, a gold mirror tray, marble coasters, espresso cups, fuzzy socks and a cloud dish.',
    intro: 'Secret Santa is the art of spending little and looking generous. These small Amazon finds feel boutique, from a monogram ring dish to gold bookmarks, satin scrunchies and a beeswax candle set, and they work for coworkers, friends and the in-law you barely know.',
    image: 'assets/pins/secret-santa-gifts-under-20.jpg',
    imageAlt: 'Collage of Secret Santa gifts from Amazon: an initial ring dish, white espresso cups, claw clips, an antique gold mirror tray, fuzzy socks, a ceramic mug, marble-look coasters, gold bookmarks and a sage cloud trinket dish',
    products: [
      { name: 'ProCase initial ring dish, gold rim', note: 'White ceramic ring dish with her gold initial and a gold rim, personal without a custom order.', image: 'assets/products/B0D1X2NTF6.jpg', link: 'B0D1X2NTF6' },
      { name: '2.5 oz / 75 ml Pure White Ceramic Espresso Cups', note: 'Small white ceramic espresso cups, a set of two that makes her morning shot feel like a café in Milan.', image: 'assets/products/B0D2CQF6X6.jpg', link: 'B0D2CQF6X6' },
      { name: '4.3 Inch Hair Claw Clips Large No Slip Big Matte Jaw Butterfly Clip', note: 'Sculptural loop claw clips in matte black, grey, blush and cream that hold a twist without slipping.', image: 'assets/products/B0922YRCMW.jpg', link: 'B0922YRCMW' },
      { name: 'Antique gold oval mirror tray', note: 'An ornate gold mirror tray that makes a few perfume bottles look like a vintage vanity.', image: 'assets/products/B07DCRFJT1.jpg', link: 'B07DCRFJT1' },
      { name: 'EBMORE fuzzy cozy socks', note: 'Fuzzy marled socks in grey, charcoal and oatmeal tones, the cozy kind she will live in until spring.', image: 'assets/products/B0FH6B999S.jpg', link: 'B0FH6B999S' },
      { name: '11 oz Ceramic Coffee Mug', note: 'Wide cream ceramic mug with rust leaf motifs that reads like a hand-painted pottery find.', image: 'assets/products/B0D9BKKP61.jpg', link: 'B0D9BKKP61' },
      { name: 'White marble-look ceramic coasters, set of 6 with gold holder', note: 'Absorbent marble-look coasters in a gold stand, a small gift that dresses up any coffee table.', image: 'assets/products/B091PYL8BV.jpg', link: 'B091PYL8BV' },
      { name: '4 Pack Metal Bookmarks with Chain', note: 'Four gold metal bookmarks on dainty chains, cut like flowers and leaves, almost jewelry for her books.', image: 'assets/products/B08NP5HZTB.jpg', link: 'B08NP5HZTB' },
      { name: 'Ceramic cloud trinket dish, sage', note: 'A soft sage cloud dish for rings and keys, the little ceramic piece every nightstand needs.', image: 'assets/products/B0G6L248K9.jpg', link: 'B0G6L248K9' },
      { name: 'Pink Silk Pillowcase Standard Size with Hidden Zipper', note: 'Silk in blush pink with a hidden zipper, a pillowcase with a soft, glossy finish she will notice nightly.', image: 'assets/products/B0D1VPCT7T.jpg', link: 'B0D1VPCT7T' },
      { name: 'LETINE Tealight Candle Holder 12-Pack Clear Glass Votive Holders Bulk', note: 'Twelve clear glass votive holders that turn plain tealights into a warm, candlelit table.', image: 'assets/products/B088F9JMDQ.jpg', link: 'B088F9JMDQ' },
      { name: 'Mario Badescu Moisturizing Lip Balm for Dry Cracked Lips', note: 'Mario Badescu rose lip balm in a clean white tube, a small spa-brand treat for her bag.', image: 'assets/products/B07QX69FNJ.jpg', link: 'B07QX69FNJ' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'stocking-stuffers-under-10',
    title: 'Stocking Stuffers for Women Under $10',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Stocking stuffers for women from Amazon: satin scrunchies, small gold hoops, a shell trinket dish, a lighted compact, fuzzy socks and an e.l.f. lip mask.',
    intro: 'The best stockings are full of tiny luxuries she will use every day. These Amazon finds feel like a beauty counter haul: satin scrunchies, a glass nail file, a hydrating lip mask, eye patches and a lighted compact mirror. Mix five or six and the stocking looks overflowing.',
    image: 'assets/pins/stocking-stuffers-under-10.jpg',
    imageAlt: 'Collage of stocking stuffers from Amazon: satin scrunchies, small gold hoops, a shell trinket dish, a green travel jewelry box, fuzzy socks, a lighted compact mirror, a gold oval tray, bamboo hand cream and an e.l.f. lip mask',
    products: [
      { name: 'Satin Scrunchies for Women', note: 'Satin scrunchies in a stack of neutrals from blonde to black, gentle on hair and pretty on a wrist.', image: 'assets/products/B0FWQRD374.jpg', link: 'B0FWQRD374' },
      { name: 'M MOOHAM small gold hoop earrings', note: 'Classic small gold hoops that pass for fine jewelry, an easy stocking stuffer she will wear.', image: 'assets/products/B08NVNNT86.jpg', link: 'B08NVNNT86' },
      { name: 'NBEADS ceramic shell trinket dish', note: 'Glazed aqua inside, this white ceramic conch shell dish is a breezy coastal touch for her earrings.', image: 'assets/products/B0C74DRMY7.jpg', link: 'B0C74DRMY7' },
      { name: 'Travel jewelry box with mirror, green', note: 'A tiny emerald jewelry case with a mirror inside, perfect for rings and studs on trips.', image: 'assets/products/B097T1W2KQ.jpg', link: 'B097T1W2KQ' },
      { name: 'Chalier fuzzy socks, 7 pairs', note: 'Seven pairs of cable-knit fuzzy socks in soft pastels, one for every day of the holiday week.', image: 'assets/products/B07YJH97VC.jpg', link: 'B07YJH97VC' },
      { name: 'Compact Mirror with Light', note: 'Slim blush compact mirror with LED lights and 3x zoom, for lipstick checks in dim restaurants.', image: 'assets/products/B0CP22Y6HF.jpg', link: 'B0CP22Y6HF' },
      { name: 'Gold oval trinket tray', note: 'A polished gold oval tray for rings, perfume or lipstick that makes any vanity look styled.', image: 'assets/products/B098NLRZ9F.jpg', link: 'B098NLRZ9F' },
      { name: 'HARUHARU Black Bamboo Hand & Nail Cream', note: 'HARUHARU black bamboo hand cream in a sleek apothecary-style tube, a K-beauty pick for her nightstand.', image: 'assets/products/B0BT4SVTJQ.jpg', link: 'B0BT4SVTJQ' },
      { name: 'e.l.f. SKIN Holy Hydration! Lip Mask', note: 'The e.l.f. Holy Hydration lip mask in a sky blue jar with a tiny spatula, for soft lips by morning.', image: 'assets/products/B0B5MGPXPN.jpg', link: 'B0B5MGPXPN' },
      { name: 'Bona Fide Beauty Czech Glass Nail File (Clear color) with Silver', note: 'Czech glass nail file in a silver hard case that smooths edges gently and looks lovely in a vanity drawer.', image: 'assets/products/B09X6595VN.jpg', link: 'B09X6595VN' },
      { name: 'Kitsch Mini Hair Clips for Women', note: 'Sixteen Kitsch mini claw clips in black and tortoise, the tiny detail that makes a half-up style look polished.', image: 'assets/products/B09GYPGLZZ.jpg', link: 'B09GYPGLZZ' },
      { name: 'Small Bathroom Vanity Tray for Countertop Makeup Perfume Jewelry', note: 'Set a candle and bud vase on this matte black vanity tray for a hotel-bathroom moment.', image: 'assets/products/B0CW1Q2MW6.jpg', link: 'B0CW1Q2MW6' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gifts-for-aunt',
    title: 'Gifts for Your Aunt She Will Love',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Gifts for your aunt from Amazon: a blush tassel throw, a cream jewelry box, a marble tray, a plaid scarf, an aroma stone and ribbed stackable mugs.',
    intro: 'Aunts are the fun ones, so their gifts should feel a little indulgent. These Amazon finds lean classic and pretty: a mini designer perfume set, gold hoops, a cream jewelry box and crystal glasses for her next dinner party. Each one says you know her taste.',
    image: 'assets/pins/gifts-for-aunt.jpg',
    imageAlt: 'Collage of gifts for your aunt from Amazon: a blush throw with tassels, an apricot jewelry box, a Calacatta Viola marble tray, a camel plaid scarf, a ceramic bird aroma stone, a cream initial makeup bag, ribbed mugs, a white enamel frame and marble coasters',
    products: [
      { name: 'BATTILO HOME Blush Throw Blanket with Tassels', note: 'Raised diamond knit and long tassels give this blush throw a soft, boho look for her reading chair.', image: 'assets/products/B07XKTR3H1.jpg', link: 'B07XKTR3H1' },
      { name: 'Voova two-layer jewelry box, apricot', note: 'Soft apricot jewelry box with two layers, ring rolls and necklace hooks, so nothing tangles again.', image: 'assets/products/B0B3RFQRYN.jpg', link: 'B0B3RFQRYN' },
      { name: 'Calacatta Viola marble oval tray', note: 'Real viola marble with deep plum veining, a tray that looks straight out of a design store.', image: 'assets/products/B0C17MK3QP.jpg', link: 'B0C17MK3QP' },
      { name: 'Plum Feathers cashmere-feel plaid scarf, camel', note: 'Camel plaid scarf with fringe and a cashmere-soft feel, the classic heritage check she will wear all winter.', image: 'assets/products/B011P4C7U0.jpg', link: 'B011P4C7U0' },
      { name: 'Ceramic bird aroma stone diffuser, made in Japan', note: 'A matte white ceramic bird that holds a few drops of oil, no cord and no noise.', image: 'assets/products/B0849Z1C9B.jpg', link: 'B0849Z1C9B' },
      { name: 'Initial vegan leather makeup bag, cream', note: 'A cream initial pouch with a gold charm, personal without any custom order or wait.', image: 'assets/products/B0FZBLHL85.jpg', link: 'B0FZBLHL85' },
      { name: 'HASENSE ribbed stackable mugs, set of 4, with holder', note: 'Ribbed stackable mugs on a slim metal stand, a pretty coffee station gift for her kitchen.', image: 'assets/products/B0DLB8F5W7.jpg', link: 'B0DLB8F5W7' },
      { name: 'Laura Ashley 4x6 White Enamel Picture Frame', note: 'Laura Ashley 4x6 frame in white enamel with a thin gold edge, made for that favorite family photo.', image: 'assets/products/B0844MMSM8.jpg', link: 'B0844MMSM8' },
      { name: 'GoCraft white marble coasters with gold edges, set of 6', note: 'Handcrafted white marble coasters rimmed in gold, a hostess gift that looks far pricier than it is.', image: 'assets/products/B071L64LMW.jpg', link: 'B071L64LMW' },
      { name: 'Crystal Wine Glasses Set of 6', note: 'Six tall crystal wine glasses with slim stems that make a Tuesday pour feel like a dinner party.', image: 'assets/products/B09MY479ZT.jpg', link: 'B09MY479ZT' },
      { name: 'PAVOI chunky gold hoop earrings', note: 'Chunky polished gold hoops from PAVOI, lightweight enough for all day, that read designer with any sweater.', image: 'assets/products/B089NZ31C6.jpg', link: 'B089NZ31C6' },
      { name: 'Michael Kors Mini Perfume Collection for Women', note: 'Michael Kors mini perfume set of five, so she can try each signature scent and keep one in her purse.', image: 'assets/products/B0DK5M4NCX.jpg', link: 'B0DK5M4NCX' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'teacher-gifts-under-25',
    title: 'Teacher Gifts Under $25 They Will Actually Use',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Teacher gifts from Amazon they will actually use: a leather journal, Aveda hand cream, a pretty mug, a plaid scarf, a valet tray and leather bookmarks.',
    intro: 'Teachers get a mountain of mugs and candles every December, so the best gifts are the ones that make the school day nicer. These Amazon finds stay useful long after the holidays: rich hand cream, a real leather journal, gold pens and a desk tray that keeps the chaos in check.',
    image: 'assets/pins/teacher-gifts-under-25.jpg',
    imageAlt: 'Collage of teacher gifts from Amazon: a leather journal, a blue and gold ceramic mug, a beaded ceramic pot, a beige plaid scarf, Aveda hand cream, a brown leather valet tray, leather heart bookmarks, a glazed pottery mug and a ceramic jewelry dish',
    products: [
      { name: 'CooLeathor Leather Journal Writing Notebook', note: 'Rich brown genuine leather journal with a wrap tie and kraft pages, like a find from an old stationery shop.', image: 'assets/products/B07FS3SPCV.jpg', link: 'B07FS3SPCV' },
      { name: 'Sweet Water Decor Blue Fan Ceramic Mug with Gold Handle', note: 'Pale blue fan-print bone china mug with a gold handle, a pretty break from novelty teacher mugs.', image: 'assets/products/B0FXNTL4LY.jpg', link: 'B0FXNTL4LY' },
      { name: 'D\'vine Dev beaded ceramic pot with saucer, smoked white', note: 'A beaded white planter with its own saucer, ready for a desk plant that brightens the classroom.', image: 'assets/products/B082KFZZDJ.jpg', link: 'B082KFZZDJ' },
      { name: 'Calvin and Olivia plaid scarf, beige', note: 'A soft neutral plaid scarf for recess duty and cold mornings, an easy gift that feels thoughtful.', image: 'assets/products/B0FRZLCLKP.jpg', link: 'B0FRZLCLKP' },
      { name: 'Aveda Hand Relief Moisturizing Creme', note: 'Aveda Hand Relief creme with andiroba oil, a salon-brand treat for hands that wash and write all day.', image: 'assets/products/B0016JA0JA.jpg', link: 'B0016JA0JA' },
      { name: 'PU leather valet tray, brown', note: 'A snap-corner leather tray that keeps keys, clips and pens tidy on a busy desk.', image: 'assets/products/B09BQ3LFPC.jpg', link: 'B09BQ3LFPC' },
      { name: '6Pcs Leather Heart Bookmarks', note: 'Six stitched leather heart bookmarks that slip over a page corner, in sage, blush, cognac and more.', image: 'assets/products/B09Y5DJW1B.jpg', link: 'B09Y5DJW1B' },
      { name: 'Handmade-look glazed pottery coffee mug, 16.5 oz', note: 'A big reactive-glaze mug that looks studio made, for the morning coffee before first bell.', image: 'assets/products/B0919VNX9T.jpg', link: 'B0919VNX9T' },
      { name: 'Ceramic Jewelry Dish', note: 'Wavy ceramic dish in a pale celadon glaze that looks like studio pottery, sized for rings by the sink.', image: 'assets/products/B0BL7BNMG5.jpg', link: 'B0BL7BNMG5' },
      { name: 'Janmini 9pcs Fancy Ballpoint Pens Glitter Journaling', note: 'Nine gold ballpoint pens topped with crystals, crowns, hearts and pearls that make grading more glamorous.', image: 'assets/products/B0BQRFZWGD.jpg', link: 'B0BQRFZWGD' },
      { name: '11"x14" Clear Acrylic Serving Tray with Golden Handles', note: 'Clear acrylic with gold bar handles, this tray corrals her desk clutter and looks like a design-shop piece.', image: 'assets/products/B0BPRQBLJK.jpg', link: 'B0BPRQBLJK' },
      { name: 'Ello Ava 18oz Glass Tumbler with Straw and Lid for Iced Coffee', note: 'Ribbed glass Ello tumbler with a blush lid and straw, pretty enough for her iced coffee between classes.', image: 'assets/products/B0GL9WS77D.jpg', link: 'B0GL9WS77D' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gifts-for-coffee-lovers',
    title: 'Gifts for Coffee Lovers That Look Expensive',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Gifts for coffee lovers from Amazon: a Bodum French press, a gooseneck kettle, a manual grinder, a pour over set, an Airscape canister and glaze mugs.',
    intro: 'Every coffee lover has a morning ritual, and the right gift turns it into a little coffee bar moment. These Amazon finds look like they came from a specialty cafe: a glass pour over, a copper-tone Airscape canister, a manual burr grinder and reactive glaze mugs.',
    image: 'assets/pins/gifts-for-coffee-lovers.jpg',
    imageAlt: 'Collage of gifts for coffee lovers from Amazon: a Bodum French press, ceramic coffee mugs, a manual coffee grinder, a gooseneck kettle, a marble-look tray, a glass pour over, an Airscape canister, double wall espresso glasses and coffee spoons',
    products: [
      { name: 'Bodum 12oz Chambord French Press Coffee Maker', note: 'Bodum\'s classic Chambord French press in polished steel and glass, the café icon that looks great left out.', image: 'assets/products/B00005LM0R.jpg', link: 'B00005LM0R' },
      { name: 'HASENSE Ceramic Coffee Mugs Set of 4', note: 'Four reactive-glaze mugs in cream, rust and sage, each drip a little different, like small-batch pottery.', image: 'assets/products/B0H4QTL5M9.jpg', link: 'B0H4QTL5M9' },
      { name: 'KINGrinder P0 Lightweight Manual Coffee Grinder', note: 'Steel burrs inside a matte black body with a wooden knob, so she grinds fresh beans for every cup.', image: 'assets/products/B0CMPT7J26.jpg', link: 'B0CMPT7J26' },
      { name: 'Coffee Gator Gooseneck Kettle with Thermometer', note: 'Brushed steel gooseneck kettle with a built-in thermometer for slow, barista-style pours at home.', image: 'assets/products/B01E2O21NS.jpg', link: 'B01E2O21NS' },
      { name: 'WV 17.8 * 11.8" White PU Leather Marble Finish Decorative Tray', note: 'Marble-look white tray with brushed gold handles that turns her coffee station into a styled little bar.', image: 'assets/products/B07K1WRRRL.jpg', link: 'B07K1WRRRL' },
      { name: 'Pour Over Coffee Maker', note: 'Petal-shaped glass pour-over with a walnut collar and matching carafe, a slow ritual that looks beautiful on the counter.', image: 'assets/products/B0FMYFXVMR.jpg', link: 'B0FMYFXVMR' },
      { name: 'Planetary Design Airscape Stainless Steel Coffee Canister', note: 'Copper-tone Airscape canister with an inner lid that pushes air out, keeping her beans fresh longer.', image: 'assets/products/B09NP55LSG.jpg', link: 'B09NP55LSG' },
      { name: 'JoyJolt Stoiva Double Wall Insulated Espresso Glass Cups', note: 'Stackable double-wall espresso glasses that make each shot look suspended in air, just like a coffee bar.', image: 'assets/products/B07ZQT24RQ.jpg', link: 'B07ZQT24RQ' },
      { name: 'Coffee Spoons', note: 'Walnut wood coffee scoop with a short handle, the kind of detail you see in specialty coffee shops.', image: 'assets/products/B08MDBWG8L.jpg', link: 'B08MDBWG8L' },
      { name: 'Maestri House LunaFro Lite Rechargeable Milk Frother', note: 'Slim black rechargeable milk frother that whips foam for café-style lattes without a bulky machine.', image: 'assets/products/B0CKP3CYFB.jpg', link: 'B0CKP3CYFB' },
      { name: '15 oz/450 ml Glass Storage Canister with with Airtight Lid', note: 'Clear glass canister with a wood lid and tiny wooden spoon, made for beans on a styled open shelf.', image: 'assets/products/B08S3JYFCW.jpg', link: 'B08S3JYFCW' },
      { name: 'HouseGem Large Candle Warmer Plate', note: 'White warming plate with a rose gold ring that keeps her mug warm through a long morning at her desk.', image: 'assets/products/B0D9N7HW86.jpg', link: 'B0D9N7HW86' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'book-lover-gifts',
    title: 'Gifts for Book Lovers That Look Expensive',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Gifts for book lovers from Amazon: marble bookends, gold bookmarks, a reading pillow, a bamboo book stand, a daisy book sleeve and a cozy throw.',
    intro: 'Book lovers want two things: more reading time and a prettier place to do it. These Amazon finds build the dream reading nook, from Calacatta marble bookends and gold bookmarks to a reading pillow, a tea sampler and a throw for the couch. Add her next read and you are done.',
    image: 'assets/pins/book-lover-gifts.jpg',
    imageAlt: 'Collage of gifts for book lovers from Amazon: marble bookends, a rust fleece throw, a bamboo book stand, gold tassel bookmarks, a reading pillow, an embroidered daisy book sleeve, latte mugs, a brass ruler bookmark and a thumb page holder',
    products: [
      { name: 'Marble Bookends for Heavy Books', note: 'Calacatta marble bookends with gold veining in a sharp wedge shape, sturdy enough for her favorite hardcovers.', image: 'assets/products/B0GC61RS44.jpg', link: 'B0GC61RS44' },
      { name: 'Rust fleece throw blanket', note: 'A plush rust throw for the reading chair, warm color that makes any nook feel cozy.', image: 'assets/products/B0DPLYNHK5.jpg', link: 'B0DPLYNHK5' },
      { name: 'Bamboo Book Stand for Reading', note: 'Warm bamboo book stand with page clips that holds cookbooks or novels open hands-free.', image: 'assets/products/B07459P7BF.jpg', link: 'B07459P7BF' },
      { name: '4 Pack Metal Bookmarks with Tassel', note: 'Gold filigree bookmarks shaped like ginkgo, clover, maple and lotus, with silky tassels peeking out of her book.', image: 'assets/products/B08NPLPWP1.jpg', link: 'B08NPLPWP1' },
      { name: 'Ivory 18.5" Bed Wedge  Reading  Pillows with Arms For Sitting', note: 'Ivory reading pillow with arms in a textured waffle weave, the cozy backrest for reading in bed.', image: 'assets/products/B0CD7W649C.jpg', link: 'B0CD7W649C' },
      { name: 'LParkin embroidered daisy book sleeve', note: 'An embroidered daisy sleeve with a zipper that protects her current read inside any tote.', image: 'assets/products/B0C2GKMKZQ.jpg', link: 'B0C2GKMKZQ' },
      { name: 'Bosmarlin wide latte mugs, set of 2, willow green', note: 'Two wide stoneware latte mugs for tea or coffee during a long reading afternoon.', image: 'assets/products/B0993M36SM.jpg', link: 'B0993M36SM' },
      { name: 'Ergonflow Gold Brass Ruler', note: 'Two gold brass rulers that mark her page like bookmarks, with the charm of a vintage desk tool.', image: 'assets/products/B079679Y51.jpg', link: 'B079679Y51' },
      { name: 'Book Page Holder for Thumb', note: 'Two-tone wooden thumb page holder, smooth and sculptural, that keeps paperbacks open one-handed.', image: 'assets/products/B084H3TMFW.jpg', link: 'B084H3TMFW' },
      { name: 'Snuggle Sac Leopard Throw Blanket for Couch Bed Sofa 50x60 inches', note: 'Buttery plush throw in beige leopard, reversible, with the designer-blanket look for long reading nights.', image: 'assets/products/B0CQX74QC3.jpg', link: 'B0CQX74QC3' },
      { name: 'Spiral Notebook Journal 8.5” x 11”', note: 'Olive spiral journal with gold corners and an elastic band, made for her book quotes and reading notes.', image: 'assets/products/B0CQ7CSY6Z.jpg', link: 'B0CQ7CSY6Z' },
      { name: 'Tea Forte Single Steeps Tea Sampler', note: 'Tea Forte Single Steeps sampler of 28 loose leaf pouches in a gift-ready box, a new tea for every chapter.', image: 'assets/products/B01F23O5FA.jpg', link: 'B01F23O5FA' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gifts-for-women-in-their-30s',
    title: 'Gifts for Women in Their 30s',
    category: 'gift-guides',
    date: '2026-11-06',
    description: 'Gifts for women in their 30s from Amazon: Stolzle wine glasses, a toiletry bag, a crossbody bag, bubble candles, a marble tray and an initial makeup bag.',
    intro: 'Your 30s are about better versions of the things you use every day: real crystal wine glasses, a toiletry bag that fits everything and a sleep mask that actually works. These Amazon finds are grown-up, pretty and useful, the gifts she will reach for long after the party.',
    image: 'assets/pins/gifts-for-women-in-their-30s.jpg',
    imageAlt: 'Collage of gifts for women in their 30s from Amazon: crystal wine glasses, a toiletry bag, an initial ceramic tray, a crossbody bag, bubble cube candles, a gold jewelry stand, a marble vanity tray, a linen scented candle and an initial makeup bag',
    products: [
      { name: 'Stölzle Lausitz Red Wine Glasses Power Set of 4', note: 'Four Stölzle Lausitz red wine glasses with tall, angular bowls that make any bottle feel like a restaurant pour.', image: 'assets/products/B07T1DFK1G.jpg', link: 'B07T1DFK1G' },
      { name: 'BAGSMART Travel Toiletry Bag', note: 'Sage green puffy toiletry bag with quilted channels and top handles, the cushy travel piece that looks designer.', image: 'assets/products/B0F5311BCF.jpg', link: 'B0F5311BCF' },
      { name: 'COLLECTIVE HOME initial ceramic jewelry tray', note: 'Her gold initial on a white ceramic tray with a gilded rim, a personal spot for rings on her nightstand.', image: 'assets/products/B09RPL6MKZ.jpg', link: 'B09RPL6MKZ' },
      { name: 'CLUCI Crossbody Bags for Women Men', note: 'Cream sling bag with cognac trim and a patterned strap, hands-free but polished for errands or travel.', image: 'assets/products/B0C5LC519H.jpg', link: 'B0C5LC519H' },
      { name: 'Bubble cube candles, set of 2, white and pink', note: 'The sculptural bubble candles from every styled shelf, in soft white and blush soy wax.', image: 'assets/products/B09GJQV3XT.jpg', link: 'B09GJQV3XT' },
      { name: 'Amazon Basics four-tier jewelry stand, gold', note: 'Gold four-tier jewelry stand on a white base that keeps her necklaces untangled and on display.', image: 'assets/products/B082B466Y2.jpg', link: 'B082B466Y2' },
      { name: 'Calacatta marble vanity tray', note: 'A natural Calacatta marble tray that turns perfume and skincare into a styled vanity moment.', image: 'assets/products/B0DJ6ZS66H.jpg', link: 'B0DJ6ZS66H' },
      { name: 'LA JOLIE MUSE Linen Cotton Clean Scented Candles for Home', note: 'La Jolie Muse Linen Cotton candle in an embossed smoky glass jar, like vintage glassware on her shelf.', image: 'assets/products/B0BVQNJJC1.jpg', link: 'B0BVQNJJC1' },
      { name: 'Initial Makeup Bag Personalized Gift for Women Teen Girls', note: 'Cream makeup bag with a gold initial and zipper charm, the monogram look she can carry every day.', image: 'assets/products/B0F26C8H9W.jpg', link: 'B0F26C8H9W' },
      { name: 'Oster Cordless Electric Wine Bottle Opener', note: 'Silver Oster cordless wine opener on a rechargeable base, for easy corks at every dinner party.', image: 'assets/products/B003YFI0O6.jpg', link: 'B003YFI0O6' },
      { name: '4-Tier Clear Makeup Organizer Bathroom Storage', note: 'Clear four-tier makeup organizer with gold posts and drawers, like a beauty counter on her vanity.', image: 'assets/products/B0FHQFBTN8.jpg', link: 'B0FHQFBTN8' },
      { name: 'nodpod Patented Gentle Pressure Sleep Mask', note: 'The nodpod weighted sleep mask in soft sage, gentle pressure for winding down, packed in a gift-ready tube.', image: 'assets/products/B0B1RWJ4QJ.jpg', link: 'B0B1RWJ4QJ' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-gifts-for-women-that-look-expensive',
    title: 'Christmas Gifts for Women That Look Expensive',
    category: 'gift-guides',
    date: '2026-10-31',
    description: 'Christmas gifts for women from Amazon that look expensive: a designer fragrance, silk pillowcases, leather jewelry cases, a marble tray and luxe candles.',
    intro: 'The best gifts look like they came from a boutique, wrapped in tissue. These Amazon finds do exactly that: soft silk, real leather, marble and glass candles that feel like a splurge the moment she opens them. Mix one hero piece with a small extra and she will think you spent far more than you did.',
    image: 'assets/pins/christmas-gifts-for-women-that-look-expensive.jpg',
    imageAlt: 'Collage of Christmas gifts for women that look expensive from Amazon: an Armani perfume, a Capri Blue Volcano candle, beige silk pillowcases, a brown leather makeup bag, leather jewelry cases, a pink glass candle, a herringbone cotton blanket, a black marble tray and a ceramic ring dish',
    products: [
      { name: 'Capri Blue Volcano glimmer jar candle', note: 'The cult-favorite Volcano scent in a gold-flecked glass jar that looks like a boutique splurge.', image: 'assets/products/B0B5LYW5L4.jpg', link: 'B0B5LYW5L4' },
      { name: 'Armani Acqua di Gioia eau de parfum', note: 'A fresh, citrusy designer fragrance in a sculpted glass bottle she will keep on her vanity.', image: 'assets/products/B003MUTDUI.jpg', link: 'B003MUTDUI' },
      { name: 'Berliner Bags full grain leather makeup bag, brown', note: 'A vintage-style full grain leather pouch that only gets better with every trip.', image: 'assets/products/B0DGTZP4H8.jpg', link: 'B0DGTZP4H8' },
      { name: 'Lolalet travel jewelry roll pouch, cream', note: 'A soft cream pouch with fold-out pockets that keeps rings and earrings tangle-free on the go.', image: 'assets/products/B0GGZMM8W3.jpg', link: 'B0GGZMM8W3' },
      { name: 'LA JOLIE MUSE Santal Rose scented candle', note: 'A pink pressed-glass candle with a sandalwood rose scent that reads like a designer gift.', image: 'assets/products/B0BVQBQBPQ.jpg', link: 'B0BVQBQBPQ' },
      { name: 'Leather travel jewelry case with mirror, sage', note: 'A compact zip case with a built-in mirror and ring rolls, pretty enough to leave out.', image: 'assets/products/B0F8ZCMFXG.jpg', link: 'B0F8ZCMFXG' },
      { name: 'BEUNAIZER ceramic petal ring dish', note: 'A small glazed petal-shaped dish for rings and earrings by the sink or the bed.', image: 'assets/products/B0BQRJ8599.jpg', link: 'B0BQRJ8599' },
      { name: 'Hatori jewelry box, taupe', note: 'A velvet-lined taupe jewelry box with ring rolls and a lift-up lid for necklaces.', image: 'assets/products/B0D3LX9ZYQ.jpg', link: 'B0D3LX9ZYQ' },
      { name: 'Black marble vanity tray', note: 'A polished black marble tray that turns perfume and jewelry into a styled vanity moment.', image: 'assets/products/B0FQS3MJ15.jpg', link: 'B0FQS3MJ15' },
      { name: 'Gabire mulberry silk pillowcases, set of 2, beige', note: 'Real mulberry silk on both sides, kind to hair and skin and instantly luxe on the bed.', image: 'assets/products/B0GKFVM433.jpg', link: 'B0GKFVM433' },
      { name: 'Threadmill herringbone cotton blanket, tusk white', note: 'An all-cotton herringbone blanket with the soft, breathable feel of a luxury hotel bed.', image: 'assets/products/B08P8KQQSW.jpg', link: 'B08P8KQQSW' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-coffee-table-decor',
    title: 'Christmas Coffee Table Decor Ideas',
    category: 'home-finds',
    date: '2026-10-31',
    description: 'Christmas coffee table decor from Amazon: a round wood tray, brass cloche lanterns, a fluted wood bowl, mercury glass votives, pine stems and a mini lit tree.',
    intro: 'The coffee table is the center of every holiday movie night, so it deserves more than a candle. Build it in layers: a tray to ground everything, something tall like a lantern or pine stems, a bowl of moss balls or pinecones and a little glow from mercury glass votives. These Amazon finds keep it warm and festive without clutter.',
    image: 'assets/pins/christmas-coffee-table-decor.jpg',
    imageAlt: 'Collage of Christmas coffee table decor from Amazon: brass candle lanterns with glass domes, a gold lantern, round wood trays, a fluted wood bowl, moss and rattan balls, gold mercury glass votives, a mini lit tree, bottle brush trees, Norfolk pine stems and snow-tipped pinecones',
    products: [
      { name: 'Brass candle lanterns with glass domes, set of 2', note: 'Two glass cloches on brass bases that turn a pillar candle into a centerpiece.', image: 'assets/products/B0F7R3NH3S.jpg', link: 'B0F7R3NH3S' },
      { name: 'Round acacia wood tray, 13.8 inch', note: 'A warm wood tray that grounds candles, a bowl and greenery in one tidy spot.', image: 'assets/products/B0CT957L7R.jpg', link: 'B0CT957L7R' },
      { name: 'Kimona fluted wood bowl, 10 inch', note: 'A carved wood bowl with a white fluted base, perfect filled with moss balls or pinecones.', image: 'assets/products/B0D5GZRF6N.jpg', link: 'B0D5GZRF6N' },
      { name: 'Moss and rattan decorative balls, 18 pack', note: 'A mix of moss, lichen and twig balls that fills a wood bowl with natural texture.', image: 'assets/products/B0C4F7Y47S.jpg', link: 'B0C4F7Y47S' },
      { name: 'Gold metal candle lantern, 16 inch', note: 'A tall arched gold lantern that adds height and a warm glow to the table.', image: 'assets/products/B0H7QVKS73.jpg', link: 'B0H7QVKS73' },
      { name: 'Gold mercury glass votive holders, set of 12', note: 'Speckled gold glass votives that throw warm, flickering light at night.', image: 'assets/products/B07F58TVHZ.jpg', link: 'B07F58TVHZ' },
      { name: '2 ft pre-lit tabletop Christmas tree', note: 'A small lit tree in a burlap base, sized for a coffee table or side table.', image: 'assets/products/B0HBX4GSW1.jpg', link: 'B0HBX4GSW1' },
      { name: 'Decorative moss balls, 18 pack', note: 'Soft green moss balls in two sizes to pile into a bowl or tray.', image: 'assets/products/B08YD9632D.jpg', link: 'B08YD9632D' },
      { name: 'Yahpetes snow-tipped pine cones, 6 pack', note: 'Natural pinecones with frosted tips to scatter around the candles.', image: 'assets/products/B07JFD5RB4.jpg', link: 'B07JFD5RB4' },
      { name: 'Faux Norfolk pine stems, 36 inch, 4 pack', note: 'Lifelike Norfolk pine branches to drop into a vase for height.', image: 'assets/products/B0D76TB8M9.jpg', link: 'B0D76TB8M9' },
      { name: 'Hanobe round beaded wood tray, dark brown', note: 'A distressed dark wood tray with a beaded rim that looks like an antique find.', image: 'assets/products/B0CWNC6143.jpg', link: 'B0CWNC6143' },
      { name: 'Winlyn frosted bottle brush trees, 3 pack', note: 'Three tiny snowy trees with mini baubles for a playful, vintage touch.', image: 'assets/products/B07YSM4C37.jpg', link: 'B07YSM4C37' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'pottery-barn-stocking-dupes',
    title: 'Pottery Barn Stocking Dupes on Amazon',
    category: 'boho-dupes',
    date: '2026-10-31',
    description: 'Pottery Barn stocking dupes on Amazon: cable knit and faux fur stockings, quilted velvet stockings, an embroidered monogram stocking and brass stocking holders.',
    intro: 'Pottery Barn stockings are beautiful, and a full set adds up fast. These Amazon stockings copy the details that make them look designer: chunky cable knits, faux fur cuffs, quilted velvet and embroidered monograms. Add a row of brass stocking holders and the mantel looks like the catalog for a fraction of the cost.',
    image: 'assets/pins/pottery-barn-stocking-dupes.jpg',
    imageAlt: 'Collage of Pottery Barn stocking dupes from Amazon: velvet stockings in green, burgundy, red and pink, cable knit stockings with faux fur and monogram cuffs, buffalo plaid and faux fur stockings, and brass and bronze stocking holders',
    products: [
      { name: 'Ivory cable knit stocking with faux fur cuff', note: 'A chunky ivory cable knit stocking with a gray faux fur cuff and pom poms, very catalog.', image: 'assets/products/B0CGZQK47B.jpg', link: 'B0CGZQK47B' },
      { name: 'Green quilted velvet stocking', note: 'A deep green quilted velvet stocking with a plush white cuff for a rich, classic mantel.', image: 'assets/products/B0DC4CPJS8.jpg', link: 'B0DC4CPJS8' },
      { name: 'Pink quilted velvet stocking', note: 'The same quilted velvet stocking in soft pink for a playful, feminine take on the look.', image: 'assets/products/B0DC4F1N2M.jpg', link: 'B0DC4F1N2M' },
      { name: 'Red velvet stocking with gold trim', note: 'A large red velvet stocking with gold piping and a tassel that reads high end.', image: 'assets/products/B0H29ZWMNX.jpg', link: 'B0H29ZWMNX' },
      { name: 'Gireshome burgundy and green velvet stockings, set of 2', note: 'Two vintage-style velvet stockings in burgundy and green with gold trim and tassels.', image: 'assets/products/B076F9WYWX.jpg', link: 'B076F9WYWX' },
      { name: 'AOGU beige faux fur stockings, set of 3', note: 'Shaggy beige faux fur stockings for a soft, neutral mantel with real texture.', image: 'assets/products/B0F5HB7P8B.jpg', link: 'B0F5HB7P8B' },
      { name: 'ELEGANTPARK monogram knit stocking', note: 'A cream cable knit stocking with an embroidered red initial, the classic personalized look.', image: 'assets/products/B0H6HRZ6YG.jpg', link: 'B0H6HRZ6YG' },
      { name: 'Khaki and ivory cable knit stockings, set of 4', note: 'A set of chunky cable knit stockings in ivory and khaki for a matching family mantel.', image: 'assets/products/B08L8C6BGP.jpg', link: 'B08L8C6BGP' },
      { name: 'Nanou green cable knit stocking with ivory cuff', note: 'A forest green cable knit stocking with a fold-over ivory cuff, cozy and traditional.', image: 'assets/products/B0BDDLX37D.jpg', link: 'B0BDDLX37D' },
      { name: 'Kurt Adler buffalo plaid stocking with faux fur cuff', note: 'A red and black buffalo check stocking with a faux fur cuff for a lodge-style mantel.', image: 'assets/products/B01MTC1APB.jpg', link: 'B01MTC1APB' },
      { name: 'Palonu brass stocking holders', note: 'Sleek brushed brass stocking holders that hang flat over the mantel edge.', image: 'assets/products/B0DJ734L5G.jpg', link: 'B0DJ734L5G' },
      { name: 'Haute Decor MantleClip stocking holders, 4 pack', note: 'Low-profile bronze clips that hold stockings securely without nails or heavy weights.', image: 'assets/products/B001P6D5SC.jpg', link: 'B001P6D5SC' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'plaid-christmas-decor-ideas',
    title: 'Plaid Christmas Decor Ideas',
    category: 'home-finds',
    date: '2026-10-31',
    description: 'Plaid Christmas decor from Amazon: Black Watch and crimson tartan ribbon, sherpa plaid throws, burgundy velvet ornaments, tartan bows, Spode napkins and a berry wreath.',
    intro: 'Plaid is the classic Christmas look that never feels dated: think a lodge, a cozy library and a tree wrapped in tartan ribbon. Pick one or two plaids and repeat them, Black Watch green and navy with crimson, then soften them with sherpa throws, burgundy velvet ornaments and greenery. These Amazon finds make the look easy.',
    image: 'assets/pins/plaid-christmas-decor-ideas.jpg',
    imageAlt: 'Collage of plaid Christmas decor from Amazon: Black Watch and crimson tartan wired ribbons, a red plaid sherpa throw, a green tartan sherpa throw, a berry wreath with a buffalo plaid bow, burgundy velvet ornaments, tartan bows, plaid and Spode Christmas Tree napkins, a green check throw and red, green and gold ball ornaments',
    products: [
      { name: 'Black Watch tartan wired ribbon, 4 inch', note: 'Wide wired ribbon in navy and green Black Watch tartan that holds its shape on the tree, garland or wreath.', image: 'assets/products/B0GZVXMSQZ.jpg', link: 'B0GZVXMSQZ' },
      { name: 'Eddie Bauer red plaid sherpa throw', note: 'A soft red and cream plaid throw with a cozy sherpa back to drape over the sofa all season.', image: 'assets/products/B00NA83RYU.jpg', link: 'B00NA83RYU' },
      { name: 'Burgundy velvet ornaments, 46 pieces', note: 'Flocked burgundy velvet balls and drops in mixed sizes, a rich match for any tartan.', image: 'assets/products/B0F6NG3K9Q.jpg', link: 'B0F6NG3K9Q' },
      { name: 'Berry wreath with buffalo plaid bow, 20 inch', note: 'A frosted pine wreath with red berries, pinecones, gold balls and a buffalo plaid bow for the front door.', image: 'assets/products/B0DDC7VDL5.jpg', link: 'B0DDC7VDL5' },
      { name: 'Jetec tartan Christmas bows, 12 pieces', note: 'Red tartan bows in two sizes to clip onto the tree, the garland or gift boxes.', image: 'assets/products/B0CD2FWD2D.jpg', link: 'B0CD2FWD2D' },
      { name: 'Eddie Bauer green tartan sherpa throw', note: 'A dark green tartan throw with a black sherpa back that looks straight out of a mountain lodge.', image: 'assets/products/B07TZL35QZ.jpg', link: 'B07TZL35QZ' },
      { name: 'DII green plaid cloth napkins, set of 6', note: 'Dark green plaid cotton napkins that bring the tartan look to the Christmas table.', image: 'assets/products/B00J3H5YP2.jpg', link: 'B00J3H5YP2' },
      { name: 'Crimson navy plaid wired ribbon, 4 inch', note: 'A classic crimson and navy tartan ribbon with a gold edge for big bows and tree swags.', image: 'assets/products/B0H32D7GDV.jpg', link: 'B0H32D7GDV' },
      { name: 'Arus Highlands green check throw', note: 'A soft sage green check throw with fringe that layers well with bolder plaids.', image: 'assets/products/B0786KN1TY.jpg', link: 'B0786KN1TY' },
      { name: 'Spode Christmas Tree cloth napkins, set of 4', note: 'The iconic Spode Christmas Tree print with a plaid border for a heritage holiday table.', image: 'assets/products/B09GW65Y7N.jpg', link: 'B09GW65Y7N' },
      { name: 'Valery Madelyn classic ball ornaments, 30 pieces', note: 'Red, green and gold ball ornaments with painted patterns, a classic match for a tartan tree.', image: 'assets/products/B01M16NLS5.jpg', link: 'B01M16NLS5' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'cozy-gifts-under-25',
    title: 'Cozy Gifts Under $25',
    category: 'gift-guides',
    date: '2026-10-31',
    description: 'Affordable cozy gifts from Amazon: oversized stoneware mugs, fuzzy socks, memory foam slippers, a vanilla candle, a matcha set, hot cocoa and soft throws.',
    intro: 'Cozy gifts are the ones people use the most: the mug they reach for every morning, the socks they live in all winter, the candle that makes the house smell like a bakery. Everything here is affordable and still looks thoughtful, so it works for friends, coworkers, neighbors and stockings.',
    image: 'assets/pins/cozy-gifts-under-25.jpg',
    imageAlt: 'Collage of affordable cozy gifts from Amazon: LANEIGE lip balm, a matcha set, fuzzy slippers, stoneware mugs, a hot chocolate gift set, fuzzy socks, a fleece throw, a coconut vanilla candle and a burnt orange chenille throw',
    products: [
      { name: 'Bosmarlin large stoneware mugs, set of 2', note: 'Oversized stoneware mugs in a sandy drip glaze, made for slow mornings and big lattes.', image: 'assets/products/B08HVLJBF6.jpg', link: 'B08HVLJBF6' },
      { name: 'lifein burnt orange chenille throw', note: 'A chunky ribbed chenille throw with fringe in a warm burnt orange that looks great on any sofa.', image: 'assets/products/B095VYB71Y.jpg', link: 'B095VYB71Y' },
      { name: 'Coconut vanilla soy candle', note: 'A coconut vanilla soy candle in an amber jar that makes the house smell like a bakery.', image: 'assets/products/B0F4DN7XCR.jpg', link: 'B0F4DN7XCR' },
      { name: 'EverFoams fuzzy memory foam slippers', note: 'Curly faux shearling slippers with a memory foam footbed and a grippy sole for padding around the house.', image: 'assets/products/B0BYNGK5PZ.jpg', link: 'B0BYNGK5PZ' },
      { name: 'JBER matcha whisk set', note: 'A complete matcha kit with a bamboo whisk, ceramic bowl and scoop for a calm morning ritual.', image: 'assets/products/B0FM7WBJB4.jpg', link: 'B0FM7WBJB4' },
      { name: 'LANEIGE Lip Glowy Balm', note: 'A cult-favorite tinted lip balm that keeps lips soft and glossy all winter.', image: 'assets/products/B07DY2QRF6.jpg', link: 'B07DY2QRF6' },
      { name: 'Fuzzy plush slipper socks, multipack', note: 'Super soft fuzzy socks in neutral shades, an easy stocking stuffer she will wear all season.', image: 'assets/products/B07XLB1L75.jpg', link: 'B07XLB1L75' },
      { name: 'Hot chocolate gift set with mini flavors', note: 'A gift box of hot cocoa mixes in fun flavors like gingerbread and salted caramel.', image: 'assets/products/B09D3VB4SX.jpg', link: 'B09D3VB4SX' },
      { name: 'Exclusivo Mezcla ivory checkered fleece throw', note: 'A plush ivory fleece throw with a raised checkered texture for cozy nights on the couch.', image: 'assets/products/B0D25Z18JG.jpg', link: 'B0D25Z18JG' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-bathroom-decor-ideas',
    title: 'Christmas Bathroom Decor Ideas',
    category: 'home-finds',
    date: '2026-10-31',
    description: 'Christmas bathroom decor from Amazon: holiday hand soap, a Christmas candle, Christmas tree hand towels, a berry wreath, pine stems, amber soap dispensers and a mini tree.',
    intro: 'The bathroom is the one room every holiday guest sees, so a few festive touches go a long way. Swap in Christmas hand towels and a holiday hand soap, add a small wreath or pine stems in a vase and set a candle on a tray. These Amazon finds make a guest bathroom feel ready for the holidays in ten minutes.',
    image: 'assets/pins/christmas-bathroom-decor-ideas.jpg',
    imageAlt: 'Collage of Christmas bathroom decor from Amazon: a holiday foaming hand soap, a Christmas candle, green Christmas tree hand towels, a cream towel set with a red border, a small berry wreath, Norfolk pine stems in a vase, amber glass soap dispensers, a gold rail vanity tray, a wood candle tray, a ceramic Christmas tree, a mini tree and a woven toilet paper basket',
    products: [
      { name: 'Michel Design Works Holiday Garland foaming hand soap', note: 'A festive shea butter foaming soap in a bottle pretty enough to leave out for guests.', image: 'assets/products/B0FJH795XR.jpg', link: 'B0FJH795XR' },
      { name: 'Sweet Water Decor Christmas candle', note: 'A holiday candle scented like fresh cut trees, orange and cloves, in a clear jar with a gold lid.', image: 'assets/products/B0774Y6S6W.jpg', link: 'B0774Y6S6W' },
      { name: 'Madison Park Serene cotton towel set, 6 pieces', note: 'Cream jacquard towels with an embroidered red border that feel festive without a single Santa.', image: 'assets/products/B075SY8W8Y.jpg', link: 'B075SY8W8Y' },
      { name: 'Jacquotha green Christmas tree hand towels, 2 pack', note: 'Green and white checkered tree hand towels, the easiest swap for a holiday guest bathroom.', image: 'assets/products/B0FRMS81QC.jpg', link: 'B0FRMS81QC' },
      { name: 'SHACOS small red berry wreath, 14 inch', note: 'A small pine and red berry wreath sized for a bathroom mirror, door or window.', image: 'assets/products/B0C8H9H1RS.jpg', link: 'B0C8H9H1RS' },
      { name: 'Real touch Norfolk pine stems, 16 pieces', note: 'Lifelike Norfolk pine stems to fill a small vase on the vanity.', image: 'assets/products/B0FJSL388G.jpg', link: 'B0FJSL388G' },
      { name: 'Amber glass soap dispenser set', note: 'Two amber glass pump bottles with a matching tray for a boutique hotel look at the sink.', image: 'assets/products/B0C3RS77WJ.jpg', link: 'B0C3RS77WJ' },
      { name: 'Gold rail bathroom vanity tray', note: 'A vanity tray with a gold rail to corral soap, a cotton jar and a bud vase on the counter.', image: 'assets/products/B0F4QD5P8J.jpg', link: 'B0F4QD5P8J' },
      { name: 'Romadedi wooden candle tray', note: 'A long carved wood tray to style candles, pinecones and berries on the counter or tank.', image: 'assets/products/B0B399RNBV.jpg', link: 'B0B399RNBV' },
      { name: 'Best Choice Products ceramic Christmas tree, 15 inch', note: 'A prelit hand-painted ceramic tree with multicolor bulbs, the vintage piece everyone loves.', image: 'assets/products/B01N0I95PO.jpg', link: 'B01N0I95PO' },
      { name: 'efluky water hyacinth toilet paper basket', note: 'A lidded water hyacinth basket that hides spare rolls and adds warm texture.', image: 'assets/products/B0DN646WQ2.jpg', link: 'B0DN646WQ2' },
      { name: 'Mini tabletop Christmas tree, 3 ft', note: 'A slim 3 ft tree on a stand that fits a bathroom corner or counter.', image: 'assets/products/B0C1SHZB2L.jpg', link: 'B0C1SHZB2L' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-garland-ideas',
    title: 'Christmas Garland Ideas That Look Expensive',
    category: 'home-finds',
    date: '2026-10-31',
    description: 'Christmas garland ideas from Amazon: real-touch cedar and spruce garlands, flocked prelit garland, berry and pinecone garlands, gold bead garland, magnolia leaves and garland ties.',
    intro: 'A full, layered garland is what makes a mantel or staircase look designer. Start with one good base garland, real-touch cedar or a prelit spruce, then layer in a berry or pinecone garland, a few magnolia leaves and a velvet ribbon. Garland ties keep it neat on a banister. These Amazon finds cover every layer.',
    image: 'assets/pins/christmas-garland-ideas.jpg',
    imageAlt: 'Collage of Christmas garland ideas from Amazon: a real touch cedar garland, prelit pine and spruce garlands with berries, a red berry garland, a long needle pine garland, a pinecone garland, gold and natural wood bead garlands, gold twist ties, taupe velvet ribbon and magnolia leaves',
    products: [
      { name: 'WBHome real touch cypress cedar garland', note: 'A soft, airy cedar garland with tiny pinecones that drapes naturally over a mantel or banister.', image: 'assets/products/B0CG1H4CKR.jpg', link: 'B0CG1H4CKR' },
      { name: 'National Tree Company Wintry Pine prelit garland, 9 ft', note: 'A full prelit pine garland with frosted tips, red berries and pinecones, ready to plug in.', image: 'assets/products/B00EJ2E1HI.jpg', link: 'B00EJ2E1HI' },
      { name: 'National Tree Company Crestwood Spruce prelit garland, 9 ft', note: 'A thick prelit spruce garland with pinecones and red berries, the lush base layer for a mantel.', image: 'assets/products/B00EJ2DFZ2.jpg', link: 'B00EJ2DFZ2' },
      { name: 'Long needle pine garland with berries, 6 ft', note: 'Long pine needles, red berries and pinecones for a loose, natural layer over a base garland.', image: 'assets/products/B08HS7Z8NW.jpg', link: 'B08HS7Z8NW' },
      { name: 'Red berry garland with pinecones, 7 ft', note: 'A bright red berry and holly leaf garland to weave through greenery for a pop of color.', image: 'assets/products/B07XY335K6.jpg', link: 'B07XY335K6' },
      { name: 'Supla natural pinecone garland, 55 inch', note: 'Dried natural pinecones on a twig strand for a rustic, woodland layer.', image: 'assets/products/B07H9R7WKV.jpg', link: 'B07H9R7WKV' },
      { name: 'WILLBOND gold wood bead garland, 16 ft', note: 'A long strand of gold wooden beads to swag across a mantel garland or the tree.', image: 'assets/products/B08JJ2D7XH.jpg', link: 'B08JJ2D7XH' },
      { name: 'Meplait wood bead garland with tassels', note: 'Natural and coffee-tone wood beads with jute tassels for a soft farmhouse accent.', image: 'assets/products/B0CC4FV83J.jpg', link: 'B0CC4FV83J' },
      { name: 'Haute Decor gold garland twist ties, 6 pack', note: 'Gold rope ties that hold garland on a staircase banister without wire or damage.', image: 'assets/products/B002DZTG0A.jpg', link: 'B002DZTG0A' },
      { name: 'Taupe thin velvet ribbon, 3/8 inch', note: 'A thin taupe velvet ribbon to tie into small bows or let trail from the garland.', image: 'assets/products/B0FFH14JGX.jpg', link: 'B0FFH14JGX' },
      { name: 'Green magnolia leaves, 40 pieces', note: 'Glossy faux magnolia leaves to tuck into a garland for that designer Southern look.', image: 'assets/products/B09NKVVZ3S.jpg', link: 'B09NKVVZ3S' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-gifts-for-grandma',
    title: 'Christmas Gifts for Grandma Under $50',
    category: 'gift-guides',
    date: '2026-10-31',
    description: 'Thoughtful Christmas gifts for grandma from Amazon: a linen photo album, a tea sampler, cozy slippers, a mug warmer, a soft throw and French hand cream.',
    intro: 'Grandmas already have everything except more time with you, so the best gifts are the ones that make her everyday rituals feel special: tea in a real pot, a warm mug, a soft throw for the couch and an album ready for this year\'s photos. Every gift here is something she will reach for all winter.',
    image: 'assets/pins/christmas-gifts-for-grandma.jpg',
    imageAlt: 'Collage of Christmas gifts for grandma from Amazon: a Tea Forte tea sampler, a linen photo album, fuzzy slippers, a glass teapot, a blue mug warmer, a cream throw blanket, stackable cappuccino cups, a black travel jewelry case and a French hand cream tin',
    products: [
      { name: 'Tea Forte herbal tea sampler, 20 pyramid infusers', note: 'A gift-boxed tea sampler with pyramid infusers, ready to wrap exactly as it comes.', image: 'assets/products/B01693D6E8.jpg', link: 'B01693D6E8' },
      { name: 'Linen photo album for 500 4x6 photos', note: 'A linen-covered album with a gold floral stamp, ready for this year\'s family photos.', image: 'assets/products/B0D78XY39C.jpg', link: 'B0D78XY39C' },
      { name: 'Fuzzy memory foam slippers, chestnut', note: 'Plush faux-fur-lined slippers with memory foam soles for warm feet all winter.', image: 'assets/products/B09JVQ84VG.jpg', link: 'B09JVQ84VG' },
      { name: 'Hario ChaCha Kyusu Maru glass teapot, 700 ml', note: 'A heatproof glass teapot with a built-in strainer for loose-leaf tea for two.', image: 'assets/products/B0007WTBQ0.jpg', link: 'B0007WTBQ0' },
      { name: 'VOBAGA mug warmer with auto shut-off, blue', note: 'Keeps her coffee or tea warm on the side table, with three heat settings and an auto shut-off.', image: 'assets/products/B08L91QVDR.jpg', link: 'B08L91QVDR' },
      { name: 'Textured fleece throw blanket, beige', note: 'A fluffy textured throw in soft cream for her favorite reading chair.', image: 'assets/products/B0DPLYQZBG.jpg', link: 'B0DPLYQZBG' },
      { name: 'Sweese stackable porcelain cappuccino cups with stand', note: 'White porcelain cups and saucers that stack on a metal stand, a little cafe corner for her counter.', image: 'assets/products/B07QYKJQ1V.jpg', link: 'B07QYKJQ1V' },
      { name: 'Hatori travel jewelry case, black', note: 'A small zip jewelry case with ring rows and earring holders for weekends with the grandkids.', image: 'assets/products/B0948V24D4.jpg', link: 'B0948V24D4' },
      { name: 'La Chatelaine French hand cream trio tin', note: 'Three French hand creams in a pretty floral tin, a classic gift for dry winter hands.', image: 'assets/products/B017LJYG66.jpg', link: 'B017LJYG66' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'brown-and-gold-christmas-tree-ideas',
    title: 'Brown and Gold Christmas Tree Ideas',
    category: 'home-finds',
    date: '2026-10-31',
    description: 'Brown and gold Christmas tree ideas from Amazon: brown velvet ornaments and ribbon, copper mercury glass balls, champagne gold baubles, glitter berry picks and a burlap skirt.',
    intro: 'Brown and gold is the warmest way to do a neutral tree: chocolate velvet, copper glass and champagne gold glow under white lights like a hotel lobby. Start with ribbon and velvet balls, add gold and copper glass for shine, then fill gaps with glitter berry picks and frosted pinecones. These Amazon finds make the whole look come together.',
    image: 'assets/pins/brown-and-gold-christmas-tree-ideas.jpg',
    imageAlt: 'Collage of brown and gold Christmas tree decor from Amazon: brown velvet ornaments, brown and copper glass balls, copper mercury glass ornaments, champagne gold baubles, brown velvet and plaid ribbon, gold and brown glitter berry picks, snowy pinecones and a burlap tree skirt',
    products: [
      { name: 'Brown velvet Christmas ornaments, 38 pack', note: 'Flocked chocolate velvet balls in mixed sizes that look rich and soft on the tree.', image: 'assets/products/B0FJSFYJ7P.jpg', link: 'B0FJSFYJ7P' },
      { name: 'Serene Spaces copper mercury glass ornaments, set of 6', note: 'Large copper glass balls with an antique mercury finish.', image: 'assets/products/B08FGC32BY.jpg', link: 'B08FGC32BY' },
      { name: 'Brown velvet ribbon, 10 yards', note: 'Chocolate velvet ribbon for small bows tied right onto the branches.', image: 'assets/products/B0FH4YD17P.jpg', link: 'B0FH4YD17P' },
      { name: 'Zomiboo brown glass ornaments, 12 pack', note: 'Glossy brown glass in round, teardrop and onion shapes.', image: 'assets/products/B0D7KX3SYD.jpg', link: 'B0D7KX3SYD' },
      { name: 'JORNOY champagne gold ball ornaments, 47 pack', note: 'A mix of shiny, matte and glitter champagne gold balls to fill out the tree.', image: 'assets/products/B0GXV4DRTG.jpg', link: 'B0GXV4DRTG' },
      { name: 'DIYASY gold glitter berry picks, 20 pack', note: 'Gold glitter berry stems to tuck between ornaments for extra sparkle.', image: 'assets/products/B08CVR519Y.jpg', link: 'B08CVR519Y' },
      { name: 'Serene Spaces mini copper mercury glass ornaments, set of 12', note: 'Small antique-style copper glass shapes that glow under warm white lights.', image: 'assets/products/B07VRKG68P.jpg', link: 'B07VRKG68P' },
      { name: 'Sea Team flocked velvet ball ornaments, 25 pack', note: 'Velvet balls in brown, beige and cream for a soft neutral layer.', image: 'assets/products/B0CYWZPBMH.jpg', link: 'B0CYWZPBMH' },
      { name: 'Morex natural plaid ribbon, 22 yards', note: 'A beige check ribbon that adds a classic, tailored note to the tree.', image: 'assets/products/B00F5XW37A.jpg', link: 'B00F5XW37A' },
      { name: 'Burlap tree skirt with ruffled border, 47 inch', note: 'A natural linen-burlap skirt with a ruffle that finishes the tree in soft tan.', image: 'assets/products/B0BC7DBSFJ.jpg', link: 'B0BC7DBSFJ' },
      { name: 'Snow-tipped pine cone ornaments, 24 pack', note: 'Natural pinecones with frosted tips and strings, ready to hang.', image: 'assets/products/B08HQCHLKR.jpg', link: 'B08HQCHLKR' },
      { name: 'DIYASY brown glitter berry picks, 20 pack', note: 'Chocolate glitter berry stems that echo the velvet balls.', image: 'assets/products/B0C5QGP2YL.jpg', link: 'B0C5QGP2YL' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gift-wrapping-ideas-that-look-expensive',
    title: 'Gift Wrapping Ideas That Look Expensive',
    category: 'gift-guides',
    date: '2026-10-31',
    description: 'Gift wrapping ideas that look expensive: kraft paper, ivory chiffon and velvet ribbon, dried orange slices, brass jingle bells, pine sprigs and gift boxes.',
    intro: 'Wrapping is the first thing anyone sees under the tree, and the boutique look comes down to a few simple supplies. Start with plain kraft or ivory paper, add a ribbon with texture, then finish with one natural touch: a dried orange slice, a pine sprig or a little brass bell. These Amazon finds make every gift look professionally wrapped.',
    image: 'assets/pins/gift-wrapping-ideas-that-look-expensive.jpg',
    imageAlt: 'Collage of gift wrapping supplies from Amazon: ivory embossed wrapping paper, ivory chiffon and white satin ribbon, dusty blue velvet ribbon, a kraft paper roll, jute twine with kraft tags, dried orange slices with cinnamon sticks, brass jingle bells, faux pine sprigs and white and black gift boxes',
    products: [
      { name: 'Zoyzoygo ivory gold embossed wrapping paper with ribbon', note: 'Ivory paper with a soft gold texture plus matching chiffon ribbon, so every box looks wrapped by a boutique.', image: 'assets/products/B0H4FGVQ62.jpg', link: 'B0H4FGVQ62' },
      { name: 'Ribbli ivory fringe chiffon ribbon, 3 rolls', note: 'Frayed-edge chiffon ribbon that ties into soft, floppy bows like a florist\'s.', image: 'assets/products/B0CX1J7S2W.jpg', link: 'B0CX1J7S2W' },
      { name: 'Ribbli dusty blue velvet ribbon, 25 yards', note: 'A slim velvet ribbon in soft dusty blue that looks lovely on kraft or white paper.', image: 'assets/products/B0D72V264J.jpg', link: 'B0D72V264J' },
      { name: 'Dried orange slice and cinnamon stick kit', note: 'Dried orange slices and cinnamon sticks to tuck under a bow for a natural, fragrant topper.', image: 'assets/products/B0B6678Y8D.jpg', link: 'B0B6678Y8D' },
      { name: 'VGOODALL vintage bronze jingle bells, 50 count', note: 'Small antique-brass bells to thread onto twine or ribbon for a vintage finish.', image: 'assets/products/B0C3H77RJ6.jpg', link: 'B0C3H77RJ6' },
      { name: 'SALLYFASHION kraft gift tags with string, 100 pack', note: 'Scalloped kraft tags with the string included, ready for hand-written names.', image: 'assets/products/B01767EKXC.jpg', link: 'B01767EKXC' },
      { name: 'White gift box with lid', note: 'A sturdy white box with a fold-over lid that makes even a small gift feel luxe.', image: 'assets/products/B09KLY7Z1V.jpg', link: 'B09KLY7Z1V' },
      { name: 'Black gift boxes with lids, 5 pack', note: 'Matte black boxes with fold-over lids for a sleek, high-contrast gift stack.', image: 'assets/products/B0BDLHWX7N.jpg', link: 'B0BDLHWX7N' },
      { name: 'Brown kraft paper roll, 100 ft', note: 'A big roll of plain kraft paper, the base of every designer-looking wrap.', image: 'assets/products/B07KKP6D3Z.jpg', link: 'B07KKP6D3Z' },
      { name: 'Hananona artificial pine stems, 50 pack', note: 'Short faux pine sprigs to slip under a ribbon for a fresh, wintry touch.', image: 'assets/products/B0C624QLG5.jpg', link: 'B0C624QLG5' },
      { name: 'Natural jute twine with kraft gift tags', note: '300 feet of jute twine plus 100 kraft tags for a simple, rustic wrap.', image: 'assets/products/B01LZBECKU.jpg', link: 'B01LZBECKU' },
      { name: 'Ribbli white double-faced satin ribbon, 1 inch', note: 'A glossy white satin ribbon that ties crisp bows on kraft paper or black boxes.', image: 'assets/products/B091GPVGYX.jpg', link: 'B091GPVGYX' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gifts-for-sister-under-50',
    title: 'Gifts for Your Sister Under $50',
    category: 'gift-guides',
    date: '2026-10-31',
    description: 'Affordable gifts for your sister from Amazon: dainty initial necklaces, a jewelry box, gold claw clips, silk scrunchies, a quilted makeup bag and a trek tumbler.',
    intro: 'Shopping for a sister is easy and impossible at the same time: you know her taste, so the bar is high. These Amazon finds hit the sweet spot of pretty and useful, from a dainty initial necklace to a quilted makeup bag and the tumbler she will carry everywhere. Pair two small ones for a stocking she will actually love.',
    image: 'assets/pins/gifts-for-sister-under-50.jpg',
    imageAlt: 'Collage of gifts for your sister from Amazon: gold initial necklaces, a blush jewelry box, gold claw clips, an initial claw clip, satin scrunchies, a blue floral quilted makeup bag, makeup brushes, satin sleep masks, a travel jewelry organizer and a cream tumbler',
    products: [
      { name: 'kate spade initial pendant necklace, gold', note: 'A dainty gold disc necklace with her initial, from a designer name she will recognize.', image: 'assets/products/B08BHN1JWS.jpg', link: 'B08BHN1JWS' },
      { name: 'SONGMICS two-tier jewelry box, blush', note: 'A blush two-tier box with a lift-out tray for rings, earrings and a watch.', image: 'assets/products/B0D12L74P8.jpg', link: 'B0D12L74P8' },
      { name: 'LUKACY gold metal claw clips, 6 pack', note: 'Six gold metal claw clips in different shapes, packed in a pink gift box.', image: 'assets/products/B091N923Y9.jpg', link: 'B091N923Y9' },
      { name: 'PAVOI gold initial disc necklace', note: 'A bold gold initial disc on a sturdy chain, the easiest personalized gift.', image: 'assets/products/B07MB963TG.jpg', link: 'B07MB963TG' },
      { name: 'Simple Modern Trek 40 oz tumbler, cream', note: 'The handle tumbler she will carry everywhere, in a soft neutral cream.', image: 'assets/products/B0BHBP1X1B.jpg', link: 'B0BHBP1X1B' },
      { name: 'Quilted floral makeup bag, blue', note: 'A roomy quilted cotton makeup bag in a blue floral print, the cottagecore favorite.', image: 'assets/products/B0CL3BT4GL.jpg', link: 'B0CL3BT4GL' },
      { name: 'Laura Geller full face brush set, 5 pieces', note: 'Five black and gold brushes for foundation, powder and eyes, a vanity upgrade she will use daily.', image: 'assets/products/B0FJPS25NB.jpg', link: 'B0FJPS25NB' },
      { name: 'Satin sleep masks, 4 pack, blush', note: 'Silky blush eye masks, one for her and three to share with the girls.', image: 'assets/products/B0G12TQWGX.jpg', link: 'B0G12TQWGX' },
      { name: 'Satin scrunchies, 12 pack', note: 'Twelve silky scrunchies in jewel and neutral tones that are gentle on her hair.', image: 'assets/products/B0B28BQB64.jpg', link: 'B0B28BQB64' },
      { name: 'NISHEL travel jewelry organizer, blush', note: 'A padded travel case with necklace loops and ring rolls so nothing tangles in her suitcase.', image: 'assets/products/B09PNBY3W7.jpg', link: 'B09PNBY3W7' },
      { name: 'Initial acrylic claw clip, cream', note: 'A cream marble-look claw clip with her gold initial, boxed and ready to give.', image: 'assets/products/B0DXYYVWSR.jpg', link: 'B0DXYYVWSR' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gifts-for-mother-in-law-that-look-expensive',
    title: 'Gifts for Your Mother-in-Law That Look Expensive',
    category: 'gift-guides',
    date: '2026-10-31',
    description: 'Elegant gifts for your mother-in-law from Amazon: a NEST candle, an olive wood board, a crystal vase, a leather tray, a brass dish and a gold branch frame.',
    intro: 'A mother-in-law gift has to look thoughtful and polished without trying too hard. These pieces lean classic and hostess-ready: crystal, olive wood, brass and a candle from a brand she will recognize. Each one looks like it came from a home boutique and works in any style of house.',
    image: 'assets/pins/gifts-for-mother-in-law-that-look-expensive.jpg',
    imageAlt: 'Collage of elegant gifts for a mother-in-law from Amazon: a NEST candle, a crystal vase, a gold branch picture frame, glass cylinder vases, a knit throw, a brass clawfoot dish, a ceramic bowl, a marble towel tray, a leather serving tray, an olive wood board and a carved wood bowl',
    products: [
      { name: 'NEST New York Himalayan Salt and Rosewater candle', note: 'A blush NEST candle in a gift-ready box, the kind of brand name she will recognize on her coffee table.', image: 'assets/products/B09TRTKHKQ.jpg', link: 'B09TRTKHKQ' },
      { name: 'Thirteen Chefs olive wood cheese board', note: 'A live-edge olive wood board with rich swirled grain for cheese, bread and holiday appetizers.', image: 'assets/products/B01LXNECKQ.jpg', link: 'B01LXNECKQ' },
      { name: 'Mikasa Blossom crystal vase, 12 inch', note: 'A tall sculpted crystal vase that makes a grocery store bouquet look like it came from a florist.', image: 'assets/products/B000S0K1S8.jpg', link: 'B000S0K1S8' },
      { name: 'Beige leather serving tray with gold handles', note: 'A cream faux leather tray with brushed gold handles for serving drinks or styling an ottoman.', image: 'assets/products/B0BBM6S1SR.jpg', link: 'B0BBM6S1SR' },
      { name: 'Lawrence Frames gold branch picture frame, 5x7', note: 'A gold twig-style frame that turns a favorite family photo into a keepsake gift.', image: 'assets/products/B071GZRVCP.jpg', link: 'B071GZRVCP' },
      { name: 'Solid brass clawfoot pedestal dish', note: 'A small antique-look brass dish on claw feet for rings, a candle or wrapped chocolates.', image: 'assets/products/B0CVRV7NGY.jpg', link: 'B0CVRV7NGY' },
      { name: 'Reactive glaze ceramic decorative bowl', note: 'An organic-edge ceramic bowl with a speckled reactive glaze that looks handmade.', image: 'assets/products/B0FLD6SRLX.jpg', link: 'B0FLD6SRLX' },
      { name: 'Ivory knit throw blanket', note: 'A soft, airy ivory knit throw that arrives looking like a boutique gift tied with ribbon.', image: 'assets/products/B08TBH8HXL.jpg', link: 'B08TBH8HXL' },
      { name: 'White marble guest towel tray with gold handles', note: 'A white marble tray with gold handles that dresses up the guest bathroom with paper hand towels.', image: 'assets/products/B0BB85FD2K.jpg', link: 'B0BB85FD2K' },
      { name: 'Bloomingville hand-carved whitewashed wood bowl', note: 'A chunky hand-carved paulownia wood bowl with a soft whitewashed finish for the dining table.', image: 'assets/products/B07NC7YXTX.jpg', link: 'B07NC7YXTX' },
      { name: 'Homjoy glass cylinder vases, set of 4', note: 'Four clear cylinder vases in graduated heights for single stems, floating candles or a table runway.', image: 'assets/products/B0CQYQGK5C.jpg', link: 'B0CQYQGK5C' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'hot-chocolate-bar-ideas',
    title: 'Hot Chocolate Bar Ideas',
    category: 'hosting-recipes',
    date: '2026-10-31',
    description: 'Hot chocolate bar ideas from Amazon: Spode Christmas Tree mugs, a crystal biscuit barrel, glass canisters, a three-tier server, syrup dispensers, a milk frother and wood risers.',
    intro: 'A hot chocolate bar turns any December evening into a party. Set mugs out on wood risers, fill clear canisters with marshmallows, peppermints and cookies, add syrups in glass bottles and keep a frother ready for foam. These Amazon finds make the station look styled for guests and still work for a cozy night in.',
    image: 'assets/pins/hot-chocolate-bar-ideas.jpg',
    imageAlt: 'Collage of hot chocolate bar ideas from Amazon: a cut glass biscuit barrel, glass jars with wood lids, Christmas tree mugs with coasters, wood risers, glass syrup dispensers with gold pumps, a milk frother, a three-tier serving tray, double wall glass mugs, sage ribbed mugs and wooden spoons',
    products: [
      { name: 'Pimpernel Christmas Tree mugs and coasters, set of 4', note: 'Classic Christmas tree mugs with matching coasters that make every cup of cocoa feel festive.', image: 'assets/products/B0056W5WZ0.jpg', link: 'B0056W5WZ0' },
      { name: 'Godinger Dublin cut glass biscuit barrel', note: 'A lidded cut glass jar that shows off marshmallows, peppermints or cookies.', image: 'assets/products/B000RGVI80.jpg', link: 'B000RGVI80' },
      { name: 'Three-tier porcelain serving tray with gold stand', note: 'Three white porcelain platters on a collapsible gold stand for cookies, candy canes and toppings.', image: 'assets/products/B0BNJ14STJ.jpg', link: 'B0BNJ14STJ' },
      { name: 'Labina glass jar with wood lid', note: 'An airtight glass canister with a wood lid for cocoa mix or mini marshmallows.', image: 'assets/products/B0BK3H4W2B.jpg', link: 'B0BK3H4W2B' },
      { name: 'Glass syrup dispensers with gold pumps, set of 4', note: 'Four labeled glass bottles with gold pumps for caramel, vanilla and hazelnut syrups.', image: 'assets/products/B0BZ4FHFV4.jpg', link: 'B0BZ4FHFV4' },
      { name: 'Maestri House LunaFro rechargeable milk frother', note: 'A rechargeable handheld frother with its own stand that whips milk into cafe-style foam.', image: 'assets/products/B0BN7KWRP1.jpg', link: 'B0BN7KWRP1' },
      { name: 'Rustic wood display risers, 2 sets', note: 'Tiered wood risers that lift mugs, jars and treats to different heights.', image: 'assets/products/B0F5B3LPSZ.jpg', link: 'B0F5B3LPSZ' },
      { name: 'CNGLASS double wall glass mugs, 8.5 oz', note: 'Double wall glass mugs that keep cocoa warm and show off every layer of cream.', image: 'assets/products/B0H8NS9PQ8.jpg', link: 'B0H8NS9PQ8' },
      { name: 'Small wooden spoons, 6 pack', note: 'Little wood spoons for stirring cocoa and scooping toppings.', image: 'assets/products/B07N394W2N.jpg', link: 'B07N394W2N' },
      { name: 'famiware ribbed ceramic mugs, set of 4', note: 'Sage green ribbed mugs that look like handmade pottery on a holiday tray.', image: 'assets/products/B0F2MW8HDP.jpg', link: 'B0F2MW8HDP' },
      { name: 'GIRAFFYCO large glass storage jars, 2 pack', note: 'Big glass jars with wood lids for cookies, cocoa bombs or extra marshmallows.', image: 'assets/products/B0FH6JHBPD.jpg', link: 'B0FH6JHBPD' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'amazon-home-finds-under-30',
    title: 'Amazon Home Finds Under $30 That Look Expensive',
    category: 'under-50',
    date: '2026-10-31',
    description: 'Affordable Amazon home finds that look expensive: travertine coasters and match holders, gold candle holders, amber bud vases, a fluted glass vase and a gold knot sculpture.',
    intro: 'The fastest way to make a room look expensive is a handful of small pieces in real-looking materials: travertine, brass, amber glass and ribbed ceramic. Every find here is affordable and reads like a design store piece on a shelf, a coffee table or a bathroom counter.',
    image: 'assets/pins/amazon-home-finds-under-30.jpg',
    imageAlt: 'Collage of affordable Amazon home finds that look expensive: a white ribbed vase, an amber glass loop vase, a fluted glass vase, gold taper candle holders, faux olive branches, amber bud vases, a faux olive plant, a gold knot sculpture, travertine match holders and travertine coasters',
    products: [
      { name: 'Travertine coasters, set of 4', note: 'Beige travertine coasters that add natural stone to a coffee table.', image: 'assets/products/B0FWJMZLGQ.jpg', link: 'B0FWJMZLGQ' },
      { name: 'Travertine match holders with striker, set of 2', note: 'Two handmade travertine match jars with a striker strip to keep next to a candle.', image: 'assets/products/B0DFLL3LX3.jpg', link: 'B0DFLL3LX3' },
      { name: 'NIKKY HOME vintage gold taper candle holders, set of 2', note: 'Ornate gold chamberstick holders with a handle and drip tray for an antique look.', image: 'assets/products/B0DYCVC5K8.jpg', link: 'B0DYCVC5K8' },
      { name: 'Amber glass bud vases, set of 5', note: 'Five small vintage-style bud vases in amber and blush glass for a shelf or table.', image: 'assets/products/B0HGRL2SVH.jpg', link: 'B0HGRL2SVH' },
      { name: 'Ribbed glass vase', note: 'A fluted clear vase that looks like a design store piece with just a few stems.', image: 'assets/products/B0BL3HHP2D.jpg', link: 'B0BL3HHP2D' },
      { name: 'Gold knot sculpture', note: 'A gold tabletop knot that adds a sculptural touch to a stack of books.', image: 'assets/products/B0DCP5PF76.jpg', link: 'B0DCP5PF76' },
      { name: 'Faux olive branches, 6 pack', note: 'Realistic olive stems that fill a vase with greenery all year.', image: 'assets/products/B0D6QZCJW8.jpg', link: 'B0D6QZCJW8' },
      { name: 'GUKJOB white ribbed ceramic vase', note: 'A small ribbed white vase for pampas, olive stems or a single branch.', image: 'assets/products/B0C6JHS1JL.jpg', link: 'B0C6JHS1JL' },
      { name: 'Joeyan amber glass loop vase', note: 'A handmade amber glass bud vase with a sculptural loop shape.', image: 'assets/products/B0D7Q1L1BB.jpg', link: 'B0D7Q1L1BB' },
      { name: 'AlphaAcc faux olive plant in white pot, 13 inch', note: 'A small faux olive tree in a ribbed white pot for a desk or shelf.', image: 'assets/products/B0H9CT3LZ9.jpg', link: 'B0H9CT3LZ9' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'cozy-reading-nook-ideas',
    title: 'Cozy Reading Nook Ideas',
    category: 'home-finds',
    date: '2026-10-31',
    description: 'Cozy reading nook ideas from Amazon: a brass plug-in wall sconce, a waffle knit throw, a knit pouf, a turned wood drink table, brass bookends and a water hyacinth basket.',
    intro: 'A reading nook needs only four things: soft light, something warm to wrap up in, a surface for your mug and a place for the next book. A plug-in sconce means no electrician, a knit pouf doubles as a footrest and a basket keeps throws close. These Amazon finds turn any corner into the coziest spot in the house this winter.',
    image: 'assets/pins/cozy-reading-nook-ideas.jpg',
    imageAlt: 'Collage of cozy reading nook ideas from Amazon: a turned wood drink table, brass plug-in wall sconces, a cream knit pouf, a tall woven basket, a bamboo book stand, Tree of Life brass bookends, a sage waffle knit throw, scalloped baskets, chess bookends and a walnut page holder',
    products: [
      { name: 'TRLIFE plug-in wall sconce, brushed brass', note: 'A swing-arm brass sconce that plugs in, so a reading light needs no electrician.', image: 'assets/products/B0BPHGXD82.jpg', link: 'B0BPHGXD82' },
      { name: 'Sage green waffle knit throw', note: 'A chunky sage waffle knit throw to keep folded over the arm of a reading chair.', image: 'assets/products/B0G1MK23CM.jpg', link: 'B0G1MK23CM' },
      { name: 'Casafield cotton knit pouf, natural', note: 'A round knit pouf that works as a footrest or an extra seat.', image: 'assets/products/B0CXTJ51FM.jpg', link: 'B0CXTJ51FM' },
      { name: 'Round wood drink table', note: 'A slim turned wood side table with just enough room for a mug and a book.', image: 'assets/products/B0FMHZPNMH.jpg', link: 'B0FMHZPNMH' },
      { name: 'Tall water hyacinth basket with handles', note: 'A tall woven basket that keeps throws and pillows close to the chair.', image: 'assets/products/B00Q7XUUC2.jpg', link: 'B00Q7XUUC2' },
      { name: 'Tree of Life bookends, antique brass', note: 'Heavy antique brass bookends with a carved tree that look like a vintage find.', image: 'assets/products/B0BXJCYZZR.jpg', link: 'B0BXJCYZZR' },
      { name: 'Handmade walnut book page holder', note: 'A small walnut page holder that keeps a paperback open while you sip your tea.', image: 'assets/products/B07PGW7C8R.jpg', link: 'B07PGW7C8R' },
      { name: 'TRLIFE plug-in wall sconces with fabric shades, set of 2', note: 'A pair of brass swing-arm sconces with soft shades to frame a chair or a window seat.', image: 'assets/products/B0BGLDF1KQ.jpg', link: 'B0BGLDF1KQ' },
      { name: 'Chess piece bookends, black', note: 'Matte black rook and knight bookends that give a shelf a library feel.', image: 'assets/products/B07PF8QW8F.jpg', link: 'B07PF8QW8F' },
      { name: 'Scalloped water hyacinth baskets, set of 2', note: 'Two scalloped woven baskets for paperbacks, reading glasses and tea.', image: 'assets/products/B0DWJLPNJN.jpg', link: 'B0DWJLPNJN' },
      { name: 'wishacc bamboo book stand, XL', note: 'An adjustable bamboo stand that holds a heavy book or a tablet at reading angle.', image: 'assets/products/B0897TDWH9.jpg', link: 'B0897TDWH9' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'amazon-stone-decor-that-looks-expensive',
    title: 'Amazon Home Finds That Look Expensive: The Stone Edit',
    category: 'home-finds',
    date: '2026-11-01',
    description: 'Twelve Amazon home finds in travertine, marble and cream ceramic that look like they came from a design store.',
    intro: 'Stone reads expensive in any room. These twelve Amazon pieces bring travertine, marble and soft cream ceramic to a console, a shelf or a kitchen counter.',
    image: 'assets/pins/amazon-stone-decor-that-looks-expensive.jpg',
    imageAlt: 'Collage of neutral Amazon stone decor: alabaster table lamp, travertine coasters and bookends, marble mortar and pestle, cream ceramic vases, ribbed pitcher, marble tray and travertine bowls on a linen background.',
    products: [
      { name: 'Alabaster and gold table lamp', note: 'Real alabaster glows when it is lit, with brass accents and a crisp white shade.', image: 'assets/products/B07GY3WZT6.jpg', link: 'B07GY3WZT6' },
      { name: 'Faux olive branches, 6 pack', note: 'Realistic olive stems that fill a vase with greenery all year.', image: 'assets/products/B0D6QZCJW8.jpg', link: 'B0D6QZCJW8' },
      { name: 'Travertine bookends', note: 'Weighty natural stone that holds books and doubles as shelf decor.', image: 'assets/products/B0D9VBQ2JH.jpg', link: 'B0D9VBQ2JH' },
      { name: 'Arched travertine coasters', note: 'Real stone with a soft arch shape, pretty enough to leave out on the table.', image: 'assets/products/B0B5KYMDJP.jpg', link: 'B0B5KYMDJP' },
      { name: 'Travertine key bowl', note: 'Natural stone makes a catchall for keys feel quietly luxe.', image: 'assets/products/B0D3TG15CY.jpg', link: 'B0D3TG15CY' },
      { name: 'Rustic cream ceramic vase', note: 'A wide, textured vase that looks like an antique find.', image: 'assets/products/B0D4V62XSN.jpg', link: 'B0D4V62XSN' },
      { name: 'White ceramic donut vases, set of 2', note: 'Hollow matte vases that look sculptural with or without stems.', image: 'assets/products/B0C2YLN3H4.jpg', link: 'B0C2YLN3H4' },
      { name: 'Carrara oval marble tray', note: 'A white and gray marble tray that corrals syrups, sugar and spoons.', image: 'assets/products/B0FSZZPD3L.jpg', link: 'B0FSZZPD3L' },
      { name: 'Travertine match holders with striker, set of 2', note: 'Two handmade travertine match jars with a striker strip to keep next to a candle.', image: 'assets/products/B0DFLL3LX3.jpg', link: 'B0DFLL3LX3' },
      { name: 'White marble mortar and pestle', note: 'A heavy marble set that looks like a design piece on the counter.', image: 'assets/products/B0000VLP7Q.jpg', link: 'B0000VLP7Q' },
      { name: 'Marble bowl on acacia pedestal', note: 'A marble and wood fruit bowl that looks like a designer piece.', image: 'assets/products/B0DJTLLX4B.jpg', link: 'B0DJTLLX4B' },
      { name: 'Ribbed ceramic pitcher', note: 'The distressed ribbed finish looks great with or without stems in it.', image: 'assets/products/B00JZMUI9W.jpg', link: 'B00JZMUI9W' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'amazon-wood-decor-that-looks-expensive',
    title: 'Amazon Home Finds That Look Expensive: The Warm Wood Edit',
    category: 'home-finds',
    date: '2026-11-01',
    description: 'Twelve Amazon home finds in warm wood, woven texture and linen that make a neutral room feel collected and high-end.',
    intro: 'Warm wood is the quickest way to make a neutral room feel rich. These twelve Amazon finds mix carved wood, woven baskets and soft linen with a few white ceramic pieces.',
    image: 'assets/pins/amazon-wood-decor-that-looks-expensive.jpg',
    imageAlt: 'Collage of warm Amazon home decor: faux olive tree, wood pillar candle holders, acacia salad bowl, pleated mini lamp, water hyacinth basket, pedestal bowl, fluted wood bowl, wood chain link decor, marble and wood bookends and a linen throw on a linen background.',
    products: [
      { name: 'Faux olive tree, 5 ft', note: 'A lifelike olive tree in a white pot that softens a bedroom corner instantly.', image: 'assets/products/B0H458P862.jpg', link: 'B0H458P862' },
      { name: 'Olive green mini lamp with pleated shade', note: 'A tiny glazed lamp with a scalloped shade for a warm side-table glow.', image: 'assets/products/B0DPL93Z47.jpg', link: 'B0DPL93Z47' },
      { name: 'Wood pillar candle holders, set of 3', note: 'Turned wood at three heights for an easy, layered mantel.', image: 'assets/products/B0BWTP1H5K.jpg', link: 'B0BWTP1H5K' },
      { name: 'Wood dough bowl', note: 'A long rustic bowl for a bench or console, styled or left empty.', image: 'assets/products/B0BS6L33SF.jpg', link: 'B0BS6L33SF' },
      { name: 'Whitewashed wood pedestal bowl', note: 'A footed bowl with a soft limewash finish for a table or console.', image: 'assets/products/B0C2F3BHP2.jpg', link: 'B0C2F3BHP2' },
      { name: 'Wood chain link decor', note: 'A carved wooden link that styles a shelf or coffee table stack.', image: 'assets/products/B0D5CGQ52M.jpg', link: 'B0D5CGQ52M' },
      { name: 'Scalloped water hyacinth basket', note: 'A woven basket with a scalloped lid, made for blankets.', image: 'assets/products/B0G4SXD85S.jpg', link: 'B0G4SXD85S' },
      { name: 'D\'vine Dev textured white ceramic vase', note: 'A tall matte vase for a few olive or eucalyptus stems.', image: 'assets/products/B0CHYGZZN8.jpg', link: 'B0CHYGZZN8' },
      { name: 'Kimona fluted wood bowl, 10 inch', note: 'A carved wood bowl with a white fluted base, perfect filled with moss balls or pinecones.', image: 'assets/products/B0D5GZRF6N.jpg', link: 'B0D5GZRF6N' },
      { name: 'Marble bookends with wood inlay', note: 'White marble wedges with a warm wood stripe for a stack of books.', image: 'assets/products/B09BCNBNMH.jpg', link: 'B09BCNBNMH' },
      { name: 'Acacia wave bowl with servers', note: 'A large sculpted acacia bowl for salads, bread or fruit.', image: 'assets/products/B00MWENGGM.jpg', link: 'B00MWENGGM' },
      { name: 'Natural linen throw blanket', note: 'Washed linen in a flax color for a relaxed, collected look.', image: 'assets/products/B0G3PFD2FS.jpg', link: 'B0G3PFD2FS' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'amazon-brass-glass-decor-that-looks-expensive',
    title: 'Amazon Home Finds That Look Expensive: The Brass and Glass Edit',
    seoTitle: 'Amazon Brass and Glass Decor That Looks Expensive',
    category: 'home-finds',
    date: '2026-11-01',
    description: 'Twelve Amazon home finds in antique brass, gold and clear glass that add a little glow to a neutral home.',
    intro: 'A touch of brass and glass makes a neutral room look styled. These twelve Amazon finds bring a warm metallic glow without tipping into flashy.',
    image: 'assets/pins/amazon-brass-glass-decor-that-looks-expensive.jpg',
    imageAlt: 'Collage of Amazon brass and glass decor: ribbed glass vase, faux eucalyptus in a glass vase, brass wall sconce, glass apothecary jars, brass candle holders, gold knot sculpture, glass cloche lanterns, amber bud vases, beaded glass cake stand, brass bookends and travertine coasters on a linen background.',
    products: [
      { name: 'TRLIFE plug-in wall sconce, brushed brass', note: 'A swing-arm brass sconce that plugs in, so a reading light needs no electrician.', image: 'assets/products/B0BPHGXD82.jpg', link: 'B0BPHGXD82' },
      { name: 'Faux eucalyptus in a glass vase', note: 'A ready-made arrangement with faux water, sized for a nightstand.', image: 'assets/products/B0DS7T4JJZ.jpg', link: 'B0DS7T4JJZ' },
      { name: 'NIKKY HOME vintage gold taper candle holders, set of 2', note: 'Ornate gold chamberstick holders with a handle and drip tray for an antique look.', image: 'assets/products/B0DYCVC5K8.jpg', link: 'B0DYCVC5K8' },
      { name: 'Amber glass bud vases, set of 5', note: 'Five small vintage-style bud vases in amber and blush glass for a shelf or table.', image: 'assets/products/B0HGRL2SVH.jpg', link: 'B0HGRL2SVH' },
      { name: 'Gold knot sculpture', note: 'A gold tabletop knot that adds a sculptural touch to a stack of books.', image: 'assets/products/B0DCP5PF76.jpg', link: 'B0DCP5PF76' },
      { name: 'Ribbed glass vase', note: 'A fluted clear vase that looks like a design store piece with just a few stems.', image: 'assets/products/B0BL3HHP2D.jpg', link: 'B0BL3HHP2D' },
      { name: 'Brass candle lanterns with glass domes, set of 2', note: 'Two glass cloches on brass bases that turn a pillar candle into a centerpiece.', image: 'assets/products/B0F7R3NH3S.jpg', link: 'B0F7R3NH3S' },
      { name: 'Travertine coasters, set of 4', note: 'Beige travertine coasters that add natural stone to a coffee table.', image: 'assets/products/B0FWJMZLGQ.jpg', link: 'B0FWJMZLGQ' },
      { name: 'Real marble tray', note: 'Solid white marble that turns mail, keys and a candle into a styled vignette.', image: 'assets/products/B0D4F55946.jpg', link: 'B0D4F55946' },
      { name: 'Tree of Life bookends, antique brass', note: 'Heavy antique brass bookends with a carved tree that look like a vintage find.', image: 'assets/products/B0BXJCYZZR.jpg', link: 'B0BXJCYZZR' },
      { name: 'Beaded glass cake stand', note: 'A beaded edge that gives it a vintage, special-occasion look.', image: 'assets/products/B0CT69Y2VV.jpg', link: 'B0CT69Y2VV' },
      { name: 'Glass apothecary jars, set of 3', note: 'Classic glass canisters for cotton rounds and swabs, display-worthy.', image: 'assets/products/B07NRJ3R17.jpg', link: 'B07NRJ3R17' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'cozy-amazon-home-finds-that-look-expensive',
    title: 'Amazon Home Finds That Look Expensive: The Cozy Edit',
    category: 'home-finds',
    date: '2026-11-01',
    description: 'Twelve cozy Amazon home finds, from chunky knits to woven baskets and candlelight, in soft neutrals that look high-end.',
    intro: 'Cozy can still look expensive. These twelve Amazon finds layer chunky knits, boucle, woven texture and candlelight in soft cream and oat tones.',
    image: 'assets/pins/cozy-amazon-home-finds-that-look-expensive.jpg',
    imageAlt: 'Collage of cozy neutral Amazon decor: faux fiddle leaf fig, round wood side table, white pitcher vase, water hyacinth basket, brass cloche lanterns, whitewashed candle holders, knit pouf, boucle pillows, glass candle, marble bookends, chunky knit throw and travertine dish on a linen background.',
    products: [
      { name: 'Faux fiddle leaf fig tree, 5 ft', note: 'Big sculptural leaves for a statement corner, no watering needed.', image: 'assets/products/B0FNCPWZ7B.jpg', link: 'B0FNCPWZ7B' },
      { name: 'Chunky hand-knit throw blanket', note: 'Oversized knit loops in oatmeal that make the sofa look styled and feel cozy.', image: 'assets/products/B0BWHXH13L.jpg', link: 'B0BWHXH13L' },
      { name: 'Tall water hyacinth basket with handles', note: 'A tall woven basket that keeps throws and pillows close to the chair.', image: 'assets/products/B00Q7XUUC2.jpg', link: 'B00Q7XUUC2' },
      { name: 'Round wood side table', note: 'A small three-leg table that fits next to any sofa or chair.', image: 'assets/products/B09FJ9KWXF.jpg', link: 'B09FJ9KWXF' },
      { name: 'Whitewashed wood candle holders, set of 3', note: 'Turned pillar holders with a soft, worn finish.', image: 'assets/products/B0CJJBDP2Y.jpg', link: 'B0CJJBDP2Y' },
      { name: 'Hotel-inspired scented candle', note: 'A cut-glass jar that brings a hotel lobby scent home.', image: 'assets/products/B0CW5WZHLZ.jpg', link: 'B0CW5WZHLZ' },
      { name: 'Casafield cotton knit pouf, natural', note: 'A round knit pouf that works as a footrest or an extra seat.', image: 'assets/products/B0CXTJ51FM.jpg', link: 'B0CXTJ51FM' },
      { name: 'Scalloped travertine trinket dish', note: 'A small stone dish with a wavy edge for rings and earrings.', image: 'assets/products/B0DWWYKC5S.jpg', link: 'B0DWWYKC5S' },
      { name: 'White ceramic pitcher vase', note: 'A farmhouse-style jug for fresh or dried branches.', image: 'assets/products/B0D41FL76W.jpg', link: 'B0D41FL76W' },
      { name: 'Marble bookends, set of 2', note: 'Heavy stone wedges that hold a stack of books like a designer shelf.', image: 'assets/products/B0FDLJ6Z9N.jpg', link: 'B0FDLJ6Z9N' },
      { name: 'Brass and glass candle cloches, set of 2', note: 'Glass domes on brass bases that make a pillar candle look boutique.', image: 'assets/products/B0CP82JRKW.jpg', link: 'B0CP82JRKW' },
      { name: 'Ivory boucle pillow covers', note: 'Nubby boucle texture that makes a bed look styled.', image: 'assets/products/B0BNVY2JSY.jpg', link: 'B0BNVY2JSY' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'amazon-kitchen-finds-that-look-expensive',
    title: 'Amazon Home Finds That Look Expensive: The Kitchen Edit',
    category: 'home-finds',
    date: '2026-11-01',
    description: 'Twelve Amazon kitchen finds in cream ceramic, marble and glass that make a counter look like a magazine shoot.',
    intro: 'The kitchen counter is where cheap decor shows first. These twelve Amazon finds in cream ceramic, marble and glass keep it calm, useful and high-end.',
    image: 'assets/pins/amazon-kitchen-finds-that-look-expensive.jpg',
    imageAlt: 'Collage of neutral Amazon kitchen finds: ceramic olive oil bottle, ribbed ceramic vase, butter crock, ceramic canisters, sage utensil crock, glass cake dome, ceramic berry baskets, faux eucalyptus, marble cutting board, scalloped bowl, white cake stand and footed stoneware bowl on a linen background.',
    products: [
      { name: 'Glass cake stand with dome', note: 'A footed glass stand and cloche for cakes, pastries or a cheese course.', image: 'assets/products/B01FSID5C8.jpg', link: 'B01FSID5C8' },
      { name: 'Ceramic canisters with bamboo lids', note: 'Matte two-tone canisters for coffee, sugar and flour.', image: 'assets/products/B0FKB9YCT5.jpg', link: 'B0FKB9YCT5' },
      { name: 'Carrara marble cutting board', note: 'Real white marble that doubles as a serving board.', image: 'assets/products/B0FVWP57KW.jpg', link: 'B0FVWP57KW' },
      { name: 'Ceramic olive oil bottle', note: 'A matte white pour bottle that looks nicer than the store bottle.', image: 'assets/products/B0DP622TWP.jpg', link: 'B0DP622TWP' },
      { name: 'Ribbed ceramic utensil crock', note: 'A sage ribbed crock that keeps spoons and spatulas in reach.', image: 'assets/products/B0CC173TN8.jpg', link: 'B0CC173TN8' },
      { name: 'Butter Bell French butter crock', note: 'The original French butter keeper that keeps butter soft and spreadable.', image: 'assets/products/B000H47H0A.jpg', link: 'B000H47H0A' },
      { name: 'Ceramic berry baskets', note: 'Stoneware colanders for rinsing and serving fresh fruit.', image: 'assets/products/B0B7JGCCLP.jpg', link: 'B0B7JGCCLP' },
      { name: 'GUKJOB white ribbed ceramic vase', note: 'A small ribbed white vase for pampas, olive stems or a single branch.', image: 'assets/products/B0C6JHS1JL.jpg', link: 'B0C6JHS1JL' },
      { name: 'Fluted decorative bowl', note: 'A scalloped, sculptural bowl that works as a centerpiece on its own.', image: 'assets/products/B0D3HH27MW.jpg', link: 'B0D3HH27MW' },
      { name: 'Porcelain cake stand', note: 'A clean white pedestal for cakes, pastries or a fruit display.', image: 'assets/products/B07X5S3S1T.jpg', link: 'B07X5S3S1T' },
      { name: 'Faux eucalyptus stems, 27 inch', note: 'Long stems to fill a floor vase or a tall jug beside the bed.', image: 'assets/products/B0FNJY25DS.jpg', link: 'B0FNJY25DS' },
      { name: 'White reactive glaze stoneware bowl', note: 'A handmade-looking footed bowl for an entry table or console.', image: 'assets/products/B09B4KP49X.jpg', link: 'B09B4KP49X' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-entryway-table-decor',
    title: 'Christmas Entryway Table Decor That Looks Expensive',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Christmas entryway table decor from Amazon that looks expensive: gold glass trees, a ceramic tree, gold lanterns, pine stems and a wood tray.',
    intro: 'An entryway table sets the tone the second guests walk in, so it is the easiest place to make Christmas feel designed. Start with one tall arrangement of pine, add a cluster of glowing glass or ceramic trees, a tray to ground the small pieces and candlelight at two or three heights. These Amazon finds keep to gold, evergreen and warm wood, so the console looks collected instead of cluttered.',
    image: 'assets/pins/christmas-entryway-table-decor.jpg',
    imageAlt: 'Collage of Christmas entryway table decor from Amazon: gold mercury glass trees, a hand painted ceramic Christmas tree, gold taper candle holders, gold lanterns, Norfolk pine branches, a lit spruce wreath and a round wooden tray',
    products: [
      { name: 'Glasseam gold mercury glass trees, set of 5', note: 'Five glowing gold glass cone trees in graduated heights, the centerpiece of a holiday console.', image: 'assets/products/B0FMR97RL1.jpg', link: 'B0FMR97RL1' },
      { name: 'Casafield hand painted ceramic Christmas tree, green', note: 'A 15 inch pre-lit glazed ceramic tree with tiny bulbs, the nostalgic touch every entryway needs.', image: 'assets/products/B092XQ2LYP.jpg', link: 'B092XQ2LYP' },
      { name: 'Casafield hand painted ceramic Christmas tree, white', note: 'The same vintage ceramic tree in soft white for an all-neutral entry table.', image: 'assets/products/B09VCNHP15.jpg', link: 'B09VCNHP15' },
      { name: 'Gold taper candle holders, set of 3', note: 'Slim gold candlesticks in three heights that make a console look styled in seconds.', image: 'assets/products/B0CCTTFT3B.jpg', link: 'B0CCTTFT3B' },
      { name: 'Real touch Norfolk pine branches, 16 pieces', note: 'Soft, lifelike pine stems to fill a tall vase with fresh-cut-looking greenery.', image: 'assets/products/B0D7386KRZ.jpg', link: 'B0D7386KRZ' },
      { name: 'Homemory gold metal lanterns with flameless candles, set of 2', note: 'Open gold frame lanterns with LED pillars to flank the console or sit on the floor.', image: 'assets/products/B0D9NKPVDN.jpg', link: 'B0D9NKPVDN' },
      { name: 'National Tree Company pre-lit Crestwood spruce wreath, 24 inch', note: 'A full lit wreath to hang above the entry table or lean against the wall.', image: 'assets/products/B00LKRMNWK.jpg', link: 'B00LKRMNWK' },
      { name: 'Hatway round wooden tray', note: 'A dark round wood tray that corrals a pillar candle, pinecones and keys.', image: 'assets/products/B0CDKP86TV.jpg', link: 'B0CDKP86TV' },
      { name: 'Norfolk pine branches, 36 inch, 8 pieces', note: 'Extra long pine branches for a dramatic arrangement in a floor or console vase.', image: 'assets/products/B0D76VHVM1.jpg', link: 'B0D76VHVM1' },
      { name: 'Mercury glass tower trees, set of 3', note: 'Speckled glass trees that catch the light from a nearby lamp or candle.', image: 'assets/products/B0CD1DRT7V.jpg', link: 'B0CD1DRT7V' },
      { name: 'Mini pine candle ring wreaths, 4 pieces', note: 'Small pine rings to set around pillar candles or the base of a vase.', image: 'assets/products/B0FGCNQCBP.jpg', link: 'B0FGCNQCBP' },
      { name: 'RAMIRABI natural wood bead garland', note: 'A light wood bead garland to drape across a tray or a stack of books.', image: 'assets/products/B08Y8D23MW.jpg', link: 'B08Y8D23MW' },
      { name: 'Hatway wooden pillar candle holders', note: 'Turned wood holders that bring warmth to a gold and green console.', image: 'assets/products/B0CDL7JGSS.jpg', link: 'B0CDL7JGSS' },
      { name: 'Potted Norfolk pine tree, 2 ft', note: 'A small unlit potted pine that reads like a real tree on the end of the console.', image: 'assets/products/B0FBFB8VR1.jpg', link: 'B0FBFB8VR1' },
      { name: 'Winlyn snowy cedar picks with red berries, 6 pieces', note: 'Frosted cedar picks with berries to tuck into a vase, wreath or tray.', image: 'assets/products/B0BB29B487.jpg', link: 'B0BB29B487' },
      { name: 'Glasseam green glass Christmas trees, set of 5', note: 'Deep green glass trees for a richer, jewel-toned entry table.', image: 'assets/products/B0FMR9JQYC.jpg', link: 'B0FMR9JQYC' },
      { name: 'LZNPA droopy pine branches, 12 pieces', note: 'Soft, naturally drooping pine stems that look freshly cut in a vase.', image: 'assets/products/B0D9PWHJ3P.jpg', link: 'B0D9PWHJ3P' },
      { name: 'Rustic wooden serving tray, small', note: 'A small rustic wood tray to group candles, keys and a little tree.', image: 'assets/products/B0D6VLGZ2R.jpg', link: 'B0D6VLGZ2R' },
      { name: 'Cedar wreaths for the front door, set of 2', note: 'Two loose 24 inch cedar wreaths, one for the door and one above the console.', image: 'assets/products/B0H87D7P68.jpg', link: 'B0H87D7P68' },
      { name: 'Boao beige wooden bead garland, 10 ft', note: 'A long beige bead garland to swag along the edge of the entry table.', image: 'assets/products/B097K7VJJ5.jpg', link: 'B097K7VJJ5' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'the-muse-shelf-gift-edit',
    title: 'The Muse Shelf Gift Edit',
    category: 'gift-guides',
    date: '2026-10-28',
    shopOnly: true,
    description: 'The Muse Shelf Gift Edit: eight gifts from our own shop, from faux fur slippers and a gold glass jewelry box to marble orbs and a brass candlestick.',
    intro: 'This edit comes from our own shop. Eight gifts we would be glad to give or get: small, good-looking pieces for the dresser, the vanity and the coffee table, plus a few things to wear. Every one ships from the US.',
    image: 'assets/pins/the-muse-shelf-gift-edit.jpg',
    imageAlt: 'The Muse Shelf Gift Edit: faux fur slippers, a gold glass jewelry box, a brass taper candlestick, beige marble orbs, gold zircon hoop earrings, a ribbed bud vase, a gold linked ring necklace and a scalloped marble trinket tray',
    products: [],
    shopPicks: [
      { handle: 'weeboo-thick-bottom-fur-trim-snow-slippers', note: 'Soft faux fur cuffs on a thick, grippy sole: the pair she will actually wear every morning.' },
      { handle: 'gold-glass-two-section-jewelry-box-10-in', note: 'Ribbed glass with a thin gold frame, two sections for everyday pieces, and pretty enough to leave out on the dresser.' },
      { handle: 'antiqued-brass-taper-candlestick-10-in', note: 'An antiqued brass taper holder that makes one candle look like a styled moment: easy to give, easy to love.' },
      { handle: 'scalloped-marble-trinket-tray-6-in', note: 'A small handmade white marble tray with a scalloped edge, for rings and earrings on the vanity.' },
      { handle: 'stainless-steel-inlaid-zircon-c-hoop-earrings', note: 'Gold C-hoops lined with tiny zircon stones: dressy enough for dinner, easy enough for every day.' },
      { handle: 'linked-ring-pendant-chain-necklace', note: 'Two interlocked gold rings on a fine chain, an easy gift for a sister, a best friend or a mom.' },
      { handle: 'beige-marble-decorative-orbs-set-of-2', note: 'A pair of polished beige marble orbs for a coffee table or bookshelf: a quiet gift for someone who loves her home.' },
      { handle: 'sand-ribbed-ceramic-bud-vase-6-in', note: 'A small ribbed bud vase in warm sand, made for a single stem or a dried branch on a nightstand.' }
    ],
    shopMore: { label: 'See all gifts in the shop', href: 'https://shop.themuseshelf.com/collections/gifts?utm_source=site&utm_medium=post&utm_campaign=gift-edit' }
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-front-porch-decor-ideas',
    title: 'Christmas Front Porch Decor Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Christmas front porch decor ideas from Amazon: a snowy plaid bow wreath, black lanterns, lit urn fillers, slim flocked trees and velvet bows.',
    intro: 'A Christmas porch that looks expensive is built in pairs and layers: a full wreath on the door, matching planters or slim trees on both sides, lanterns on the steps and one bold accent like oversized velvet bows. These Amazon finds keep to black, evergreen, frost and deep red, so the porch looks classic and welcoming from the street.',
    image: 'assets/pins/christmas-front-porch-decor-ideas.jpg',
    imageAlt: 'Collage of Christmas front porch decor from Amazon: a pre-lit snowy wreath with a buffalo plaid bow, black candle lanterns, a lit frosted urn filler, a slim flocked tree, red velvet bows, pine stems and a pine tree door mat',
    products: [
      { name: 'DECSPAS pre-lit snowy flocked wreath, 24 inch', note: 'A frosted, lit wreath with a buffalo plaid bow that stands out on a dark front door.', image: 'assets/products/B0CBJSML3R.jpg', link: 'B0CBJSML3R' },
      { name: 'Vintage black candle lanterns with LED pillars, 2 pack', note: 'Classic black lanterns with a diamond pattern to glow on the steps every night.', image: 'assets/products/B019SKYJ2C.jpg', link: 'B019SKYJ2C' },
      { name: 'National Tree Company pre-lit frosted berry urn filler, 18 inch', note: 'A lit urn filler with pinecones and berries that turns any planter into a porch tree.', image: 'assets/products/B01IMYIV1K.jpg', link: 'B01IMYIV1K' },
      { name: 'Large red velvet Christmas bows, 2 pack', note: 'Big 12 by 18 inch velvet bows for planters, lanterns or porch posts.', image: 'assets/products/B0D5LC2SZZ.jpg', link: 'B0D5LC2SZZ' },
      { name: 'Sggvecsy red berry Christmas wreath, 22 inch', note: 'A full pine wreath with red berries and pinecones for a classic front door.', image: 'assets/products/B0DDBSNG4R.jpg', link: 'B0DDBSNG4R' },
      { name: 'National Tree Company pre-lit flocked Forestree, 3 ft', note: 'A slim frosted lit tree that fits a planter on either side of the door.', image: 'assets/products/B00MVAE2M4.jpg', link: 'B00MVAE2M4' },
      { name: 'Real touch Norfolk pine stems, 16 pieces', note: 'Soft pine stems to fill porch planters and window boxes.', image: 'assets/products/B0DFTCJF2T.jpg', link: 'B0DFTCJF2T' },
      { name: 'PANDICORN Christmas tree pillow covers, set of 2', note: 'Cream pillow covers with small green trees for a porch bench or swing.', image: 'assets/products/B0FJ1P9S2G.jpg', link: 'B0FJ1P9S2G' },
      { name: 'Pine tree Christmas door mat', note: 'A festive pine and snowflake welcome mat to layer over a plain coir mat.', image: 'assets/products/B0FJLGP8L7.jpg', link: 'B0FJLGP8L7' },
      { name: 'Front porch lanterns with LED candles, 2 pack', note: 'A pair of outdoor lanterns to frame the door or line the steps.', image: 'assets/products/B0CCD6S246.jpg', link: 'B0CCD6S246' },
      { name: 'Pine cone red berry picks, 10 pack', note: 'Berry and pinecone picks to tuck into wreaths, garland and planters.', image: 'assets/products/B08DKZVPJX.jpg', link: 'B08DKZVPJX' },
      { name: 'MEETYAMOR pre-lit mini Christmas trees, set of 2', note: 'Two 2 ft lit trees for a matching pair at the door.', image: 'assets/products/B0CBJWPZRZ.jpg', link: 'B0CBJWPZRZ' },
      { name: 'Norfolk pine Christmas wreath, 24 inch', note: 'A soft, natural Norfolk pine wreath for a quiet, elegant door.', image: 'assets/products/B0H7BB9F1B.jpg', link: 'B0H7BB9F1B' },
      { name: 'Lighted Christmas urn filler, 24 inch', note: 'A tall warm-white lit filler that fills a large porch urn.', image: 'assets/products/B0H4Y2VPQM.jpg', link: 'B0H4Y2VPQM' },
      { name: 'Bdor black metal Christmas lanterns with timer, set of 2', note: 'Tall black lanterns dressed with berries and pinecones, with remote and timer.', image: 'assets/products/B0CF5981VN.jpg', link: 'B0CF5981VN' },
      { name: 'Pine Christmas wreath with red balls, 24 inch', note: 'A classic red and green wreath with ornaments and berries for the front door.', image: 'assets/products/B0FKBT525F.jpg', link: 'B0FKBT525F' },
      { name: 'Frosted pre-lit urn fillers, set of 2', note: 'A matching pair of frosted lit fillers for planters on both sides of the door.', image: 'assets/products/B0CD83TC7M.jpg', link: 'B0CD83TC7M' },
      { name: 'Hongsome giant red velvet bows, 2 pack', note: 'Oversized 12 by 24 inch velvet bows for the door, railing or lamp posts.', image: 'assets/products/B0FNMPYPM7.jpg', link: 'B0FNMPYPM7' },
      { name: 'Pine cypress branches, 10 pack', note: 'Mixed pine and cypress stems for full, layered porch planters.', image: 'assets/products/B0GWLRQ97K.jpg', link: 'B0GWLRQ97K' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'red-and-gold-christmas-tree-ideas',
    title: 'Red and Gold Christmas Tree Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Red and gold Christmas tree ideas from Amazon: a velvet topper bow, gold sequin balls, red glass ornaments, berry picks and gold leaf sprays.',
    intro: 'A red and gold Christmas tree looks expensive when it is layered like a florist would do it: one big velvet bow on top, ribbon wound loosely down the branches, glass ornaments in two or three sizes and gold sprays and red berries tucked in between. These Amazon finds keep the palette tight, deep red, antique gold and a little red and white, so the tree feels classic and rich instead of busy.',
    image: 'assets/pins/red-and-gold-christmas-tree-ideas.jpg',
    imageAlt: 'Collage of red and gold Christmas tree decor from Amazon: a red velvet topper bow, gold sequin balls, red and gold glass ornaments, red velvet ribbon, burgundy berry stems, gold glitter leaf sprays and gold star toppers',
    products: [
      { name: 'Red velvet tree topper bow with gold edge', note: 'An oversized red velvet bow with thin gold edging and long tails that cascade down the tree.', image: 'assets/products/B0D3DT5NQZ.jpg', link: 'B0D3DT5NQZ' },
      { name: 'Valery Madelyn red and gold glass ornaments, 10 count', note: 'Hand-decorated glass balls, drops and finials in red and antique gold for a classic heirloom look.', image: 'assets/products/B072V5N9LD.jpg', link: 'B072V5N9LD' },
      { name: 'Vickerman 4 inch gold sequin balls, 6 pack', note: 'Large sequin balls that catch the tree lights and fill gaps with warm gold sparkle.', image: 'assets/products/B016YNKL14.jpg', link: 'B016YNKL14' },
      { name: 'Wired red velvet ribbon, 30 yards', note: 'Plush red velvet ribbon with wired edges that holds its shape in loose loops down the tree.', image: 'assets/products/B0888BQ14B.jpg', link: 'B0888BQ14B' },
      { name: 'Burgundy berry stems, 12 pack', note: 'Deep burgundy berry branches to tuck between the ornaments for a fuller, designer tree.', image: 'assets/products/B08J799DXL.jpg', link: 'B08J799DXL' },
      { name: 'Kurt Adler shiny red glass balls, 4 pack', note: 'Classic glossy red glass ornaments in a generous size for the front of the tree.', image: 'assets/products/B003X0H4AI.jpg', link: 'B003X0H4AI' },
      { name: 'Gold glitter bay leaf sprays, 6 pack', note: 'Long gold leaf sprays that add height and shimmer between the branches.', image: 'assets/products/B0B1DM9MNP.jpg', link: 'B0B1DM9MNP' },
      { name: 'Gold glitter star tree topper', note: 'A simple gold glitter star that finishes a red and gold tree without stealing the show.', image: 'assets/products/B07QB4HD5R.jpg', link: 'B07QB4HD5R' },
      { name: 'Gold pearl-trimmed glitter balls', note: 'Soft gold glitter ornaments wrapped in pearl strands for a richer texture.', image: 'assets/products/B0C96MR42V.jpg', link: 'B0C96MR42V' },
      { name: 'Red berry picks, 24 pack', note: 'Slim red berry stems that add little pops of red all over the tree.', image: 'assets/products/B0B6YT44B7.jpg', link: 'B0B6YT44B7' },
      { name: 'Gold glitter leaf spray picks, 20 pack', note: 'Short gold leaf picks for filling small gaps with sparkle.', image: 'assets/products/B08KSDN32Q.jpg', link: 'B08KSDN32Q' },
      { name: 'Valery Madelyn red and white ornaments, 16 count', note: 'Shatterproof red and white balls with swirls and snowflakes for a candy-cane red and white tree.', image: 'assets/products/B087P4PJRT.jpg', link: 'B087P4PJRT' },
      { name: 'Red and gold shatterproof balls, 30 pack', note: 'A mix of solid and patterned red and gold balls to build the base layer of the tree.', image: 'assets/products/B0B9SBMKZJ.jpg', link: 'B0B9SBMKZJ' },
      { name: 'Hand-painted red and white ornaments, 16 pack', note: 'Shatterproof balls and drops painted in red and white patterns, safe for homes with kids or pets.', image: 'assets/products/B0CYKNSV1R.jpg', link: 'B0CYKNSV1R' },
      { name: 'Red berry stems, 60 pack', note: 'A big pack of glossy red berry stems to tuck in everywhere for a full, lush look.', image: 'assets/products/B0FG34T6S6.jpg', link: 'B0FG34T6S6' },
      { name: 'Champagne gold picks and sprays, 50 pack', note: 'Mixed champagne gold sprays that soften the red with a warm metallic glow.', image: 'assets/products/B0FC5ZDV41.jpg', link: 'B0FC5ZDV41' },
      { name: 'Gold glitter fern sprays, 6 pack', note: 'Long gold fern fronds that fan out from the branches like a florist-styled tree.', image: 'assets/products/B0B1DLL4GG.jpg', link: 'B0B1DLL4GG' },
      { name: 'Gold glitter star topper, 8 inch', note: 'A dimensional gold glitter star topper in a classic shape.', image: 'assets/products/B0F2FDGZ71.jpg', link: 'B0F2FDGZ71' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'nostalgic-christmas-tree-decor',
    title: 'Nostalgic Christmas Tree Decor',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Nostalgic Christmas tree decor from Amazon: a vintage ceramic tree, glass reflector ornaments, bird clips, C9 bulbs, tinsel and mercury glass.',
    intro: 'A nostalgic Christmas tree feels collected over years, not bought in one trip. Start with warm, big-bulb light, add glass reflector ornaments and a few mercury glass pieces, then finish with clip-on glass birds and a soft swag of tinsel. A glowing ceramic tree on a side table ties the room together. Keep the mix warm and edited so it reads vintage, not kitschy.',
    image: 'assets/pins/nostalgic-christmas-tree-decor.jpg',
    imageAlt: 'Collage of nostalgic Christmas tree decor from Amazon: a green vintage ceramic Christmas tree, glass reflector ornaments, an ivory and gold angel topper, mercury glass ornaments, C9 bulbs, glass bird clip ornaments, tinsel and bubble lights',
    products: [
      { name: 'Sunlit vintage-style ceramic Christmas tree, cordless', note: 'A glazed green ceramic tree with tiny multicolor bulbs, just like the one grandma had.', image: 'assets/products/B07H3SW23P.jpg', link: 'B07H3SW23P' },
      { name: 'Kurt Adler glass reflector ornaments, 5 pack', note: 'Jewel-tone glass balls with indented reflector centers, a true vintage tree classic.', image: 'assets/products/B00S80FJDW.jpg', link: 'B00S80FJDW' },
      { name: 'Gold mercury glass ornaments, teardrops and balls', note: 'Antiqued gold mercury glass in mixed shapes that looks like flea market finds.', image: 'assets/products/B0FDKGKF9S.jpg', link: 'B0FDKGKF9S' },
      { name: 'Kurt Adler lighted gold and ivory angel treetop', note: 'A softly lit ivory and gold angel topper with a lace skirt and old-fashioned charm.', image: 'assets/products/B007NDCFQO.jpg', link: 'B007NDCFQO' },
      { name: 'Old World Christmas glass owl ornament', note: 'A hand-painted blown glass owl on a clip that perches right on a branch.', image: 'assets/products/B001VD30PW.jpg', link: 'B001VD30PW' },
      { name: 'C9 ceramic Christmas bulbs, 25 pack', note: 'Big opaque multicolor C9 bulbs for that warm, retro glow.', image: 'assets/products/B004Q6JFBY.jpg', link: 'B004Q6JFBY' },
      { name: 'Creative Co-Op mercury glass ornament garland', note: 'A long garland of small taupe and cream mercury glass beads to drape across the branches.', image: 'assets/products/B01N5V8D8R.jpg', link: 'B01N5V8D8R' },
      { name: 'Valery Madelyn vintage-style glass ornaments, 10 count', note: 'Red, green and gold glass ornaments with old-fashioned patterns and finials.', image: 'assets/products/B0F2T3SMLZ.jpg', link: 'B0F2T3SMLZ' },
      { name: 'Silver tinsel garland', note: 'Soft silver tinsel on a spool for loose, nostalgic swags.', image: 'assets/products/B01L661XU2.jpg', link: 'B01L661XU2' },
      { name: 'Old World Christmas glass chickadee clip ornament', note: 'A blown glass chickadee on a gold clip that sits on the branches like a real bird.', image: 'assets/products/B002VSB6MK.jpg', link: 'B002VSB6MK' },
      { name: 'Kurt Adler lighted 8-point star treetop', note: 'A lit star topper in stained-glass colors with a true vintage feel.', image: 'assets/products/B00CAJFG4Y.jpg', link: 'B00CAJFG4Y' },
      { name: 'Antiqued silver glass ornaments, 12 pack', note: 'Small antiqued silver glass balls and drops that look like old mercury glass.', image: 'assets/products/B09XZQMSSH.jpg', link: 'B09XZQMSSH' },
      { name: 'Old World Christmas red cardinal clip ornament', note: 'A blown glass cardinal with a feather tail, a classic bird clip for the tree.', image: 'assets/products/B001AKDFQK.jpg', link: 'B001AKDFQK' },
      { name: 'Christmas bubble lights, 9 bulbs', note: 'Traditional bubble lights that glow and bubble like the trees of the 50s and 60s.', image: 'assets/products/B07W727Q21.jpg', link: 'B07W727Q21' },
      { name: 'Casafield seafoam ceramic Christmas tree', note: 'A hand-painted seafoam ceramic tree with snowy tips and tiny lights.', image: 'assets/products/B0CZ4LQY5W.jpg', link: 'B0CZ4LQY5W' },
      { name: 'National Tree Company champagne gold tinsel tree, 4 ft', note: 'A pre-lit champagne tinsel tree with mid-century charm for a corner or entry.', image: 'assets/products/B00MVAIGYY.jpg', link: 'B00MVAIGYY' },
      { name: 'White and silver mercury glass ornaments, 12 pack', note: 'Vintage-style mercury glass balls in white and antique silver.', image: 'assets/products/B08TRHGWDX.jpg', link: 'B08TRHGWDX' },
      { name: 'Gold glass drop ornaments', note: 'Ornate gold glass drops and finials with an heirloom look.', image: 'assets/products/B09WCWDR56.jpg', link: 'B09WCWDR56' },
      { name: 'Old World Christmas glass bluebird clip ornament', note: 'A soft blue blown glass bird on a clip for a collected, nostalgic tree.', image: 'assets/products/B006O5L2RA.jpg', link: 'B006O5L2RA' },
      { name: 'Kurt Adler Early Years glass oval ornaments', note: 'Elongated reflector ovals in muted jewel tones, a faithful vintage reproduction.', image: 'assets/products/B0032COAH2.jpg', link: 'B0032COAH2' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-tree-topper-ideas',
    title: 'Christmas Tree Topper Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Christmas tree topper ideas that look expensive, from Amazon: oversized ribbon bows, gold and capiz stars, lighted angels and glitter sprays.',
    intro: 'The topper is the first thing anyone sees on a Christmas tree, so it is the easiest place to make the whole tree look expensive. Go big: an oversized ribbon bow with long streamers, a lit star with real texture or a soft ivory angel. Then frame it with a few glitter sprays and berry picks so the top looks full and florist-styled instead of bare.',
    image: 'assets/pins/christmas-tree-topper-ideas.jpg',
    imageAlt: 'Collage of Christmas tree toppers from Amazon: a champagne gold ribbon topper bow, velvet plaid bow, gold leaf star, capiz Bethlehem star, rattan star, ivory and gold angels, a silver snowflake and champagne glitter sprays',
    products: [
      { name: 'Champagne gold swirl tree topper bow', note: 'An oversized champagne gold bow with four long streamers that flow down the tree.', image: 'assets/products/B09533TQY2.jpg', link: 'B09533TQY2' },
      { name: 'Kurt Adler gold leaf star treetop', note: 'A gold star cut with a leaf pattern that looks like an antique piece.', image: 'assets/products/B009TXR93A.jpg', link: 'B009TXR93A' },
      { name: 'Kurt Adler lighted ivory and gold angel treetop', note: 'A softly lit angel in an ivory and gold gown with feathered wings.', image: 'assets/products/B00CAJFKYA.jpg', link: 'B00CAJFKYA' },
      { name: 'Kurt Adler lighted capiz Bethlehem star treetop', note: 'A lit capiz shell Bethlehem star that glows warm and pearly.', image: 'assets/products/B07R11M12Z.jpg', link: 'B07R11M12Z' },
      { name: 'Brown velvet and plaid tree topper bow', note: 'A layered bow of brown velvet and green plaid ribbon with long tails, very Ralph Lauren.', image: 'assets/products/B0GV2ZPGFG.jpg', link: 'B0GV2ZPGFG' },
      { name: 'Kurt Adler lighted gold rattan star treetop', note: 'A woven rattan star with warm lights for a natural, organic tree.', image: 'assets/products/B002TGWLA0.jpg', link: 'B002TGWLA0' },
      { name: 'Kurt Adler lighted gold angel treetop', note: 'A golden angel in a sheer gown with clear lights for a glowing finish.', image: 'assets/products/B084TPJRH7.jpg', link: 'B084TPJRH7' },
      { name: 'Large burlap tree topper bow', note: 'A big neutral burlap and linen-look bow for a farmhouse or neutral tree.', image: 'assets/products/B09MJJ8G31.jpg', link: 'B09MJJ8G31' },
      { name: 'Silver glitter snowflake tree topper', note: 'A sparkling silver snowflake topper for a wintry white and silver tree.', image: 'assets/products/B07QD2PV2Y.jpg', link: 'B07QD2PV2Y' },
      { name: 'Red plaid tree topper bow', note: 'A classic red tartan bow with long tails for a cozy plaid tree.', image: 'assets/products/B0DDC5V9NQ.jpg', link: 'B0DDC5V9NQ' },
      { name: 'Silver glitter swirl star tree topper', note: 'An open swirl star in silver glitter that lets the lights shine through.', image: 'assets/products/B07QDPDQRJ.jpg', link: 'B07QDPDQRJ' },
      { name: 'Sea Team champagne glitter cypress picks, 24 pack', note: 'Champagne glitter twigs to fan out around the topper like a florist spray.', image: 'assets/products/B0B5TMM5XW.jpg', link: 'B0B5TMM5XW' },
      { name: 'Sea Team champagne glitter berry picks, 24 pack', note: 'Champagne berry stems that frame the topper with soft sparkle.', image: 'assets/products/B08D69PHQT.jpg', link: 'B08D69PHQT' },
      { name: 'Gold and green picks with pinecones, 6 pack', note: 'Evergreen picks with gold balls and pinecones to fill in under the topper.', image: 'assets/products/B09BFK2XV7.jpg', link: 'B09BFK2XV7' },
      { name: 'Champagne snowflake tree topper bow', note: 'A champagne bow with snowflake ribbon and long streamers for a soft gold tree.', image: 'assets/products/B0B968N4WD.jpg', link: 'B0B968N4WD' },
      { name: 'Kurt Adler lighted ivory angel treetop', note: 'An ivory and gold angel with lit skirt and ribbon details.', image: 'assets/products/B002TGYK18.jpg', link: 'B002TGYK18' },
      { name: 'Kurt Adler lighted natural rattan star treetop', note: 'A natural rattan star with warm lights, simple and organic.', image: 'assets/products/B004B9RKI6.jpg', link: 'B004B9RKI6' },
      { name: 'Kurt Adler Early Years glass finial treetop', note: 'A three-tier blown glass finial topper with vintage stripes.', image: 'assets/products/B01MRHL8LI.jpg', link: 'B01MRHL8LI' },
      { name: 'Kurt Adler lighted crystal snowflake treetop', note: 'A lit acrylic crystal snowflake that sparkles like ice.', image: 'assets/products/B01N6T7OI4.jpg', link: 'B01N6T7OI4' },
      { name: 'Red snowflake tree topper bow', note: 'A full red mesh bow with snowflake ribbon and long streamers.', image: 'assets/products/B09Q5WTLLF.jpg', link: 'B09Q5WTLLF' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'small-apartment-christmas-decor',
    title: 'Small Apartment Christmas Decor Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Small apartment Christmas decor from Amazon: slim pencil trees, tabletop trees, window candles, mini wreaths and no-nail hooks for renters.',
    intro: 'Decorating a small apartment for Christmas is about going up instead of out: a slim pencil tree in a woven collar, a tabletop tree on the sideboard, window candles, lit garland and mini wreaths on knobs. Clear adhesive hooks hold it all without nails, so renters can decorate fully and leave the walls untouched in January.',
    image: 'assets/pins/small-apartment-christmas-decor.jpg',
    imageAlt: 'Collage of small apartment Christmas decor from Amazon: a pre-lit slim pencil Christmas tree, a snowy tabletop tree, a mini lit fir tree, window candles, mini eucalyptus wreaths, a woven tree collar and white Christmas village houses',
    products: [
      { name: 'HOMCOM pre-lit noble fir pencil tree, 6 ft', note: 'A slim lit pencil tree that gives a full-height tree look in a small corner.', image: 'assets/products/B0CG1QK5NN.jpg', link: 'B0CG1QK5NN' },
      { name: 'DECSPAS pre-lit snowy mini tree, 3 ft', note: 'A frosted tabletop tree with pinecones and berries in a burlap base.', image: 'assets/products/B0H2M5MHS4.jpg', link: 'B0H2M5MHS4' },
      { name: 'National Tree Company pre-lit mini fir tree, 24 inch', note: 'A lit 2 ft tree for a console, desk or kitchen counter.', image: 'assets/products/B013LSNBBW.jpg', link: 'B013LSNBBW' },
      { name: 'Homemory window candles with remote, 6 pack', note: 'Flameless window candles with suction cups for a classic glow in every window.', image: 'assets/products/B0C45GRDJ3.jpg', link: 'B0C45GRDJ3' },
      { name: 'LSKYTOP mini eucalyptus wreaths, 6 pack', note: 'Small faux eucalyptus wreaths to hang on cabinet knobs, windows or chairs.', image: 'assets/products/B0BQXHD59K.jpg', link: 'B0BQXHD59K' },
      { name: 'Woven paper rope tree collar, 26 inch', note: 'A natural woven collar that hides the stand and makes a slim tree look finished.', image: 'assets/products/B0DFVNSXXC.jpg', link: 'B0DFVNSXXC' },
      { name: 'Ovootok Christmas village houses with lights, 9 pieces', note: 'White wood houses with glowing windows and sisal trees for a shelf or sideboard.', image: 'assets/products/B0CFXG4TXR.jpg', link: 'B0CFXG4TXR' },
      { name: 'Norfolk pine garland with lights, 6 ft', note: 'A short lit garland sized for a small mantel, shelf or doorway.', image: 'assets/products/B0H4GK82V2.jpg', link: 'B0H4GK82V2' },
      { name: 'Cast iron snowflake stocking holders, 4 pack', note: 'Heavy stocking holders that hang stockings from a shelf when there is no fireplace.', image: 'assets/products/B08KVZ5L8Z.jpg', link: 'B08KVZ5L8Z' },
      { name: 'Realistic mini PE Christmas tree, 3 ft', note: 'A small, realistic tree for a side table or entry corner.', image: 'assets/products/B0FB3JYHNZ.jpg', link: 'B0FB3JYHNZ' },
      { name: 'Lyrow mini candle ring wreaths, 6 pack', note: 'Small berry wreaths for candles, cabinet doors or napkin rings.', image: 'assets/products/B0CFY35CXL.jpg', link: 'B0CFY35CXL' },
      { name: 'HOMCOM artificial pencil Christmas tree, 6 ft', note: 'A narrow unlit pencil tree that fits between furniture.', image: 'assets/products/B07HH2YM81.jpg', link: 'B07HH2YM81' },
      { name: 'Homemory window candles with timer, 6 pack', note: 'Battery window candles with a remote, timer and dimmer for renters.', image: 'assets/products/B0C45BPJFC.jpg', link: 'B0C45BPJFC' },
      { name: 'Clear adhesive wall hooks, 15 pack', note: 'No-nail clear hooks for wreaths, garland and lights that come off clean.', image: 'assets/products/B0DSSRMM2N.jpg', link: 'B0DSSRMM2N' },
      { name: 'WEMADE pre-lit Christmas garland, 15.4 ft', note: 'A long battery lit garland to frame a window or doorway without outlets.', image: 'assets/products/B0FMF2W44J.jpg', link: 'B0FMF2W44J' },
      { name: 'Woven paper rope tree collar, 28 inch', note: 'A slightly wider woven collar for a fuller small tree.', image: 'assets/products/B0DFVN1Q34.jpg', link: 'B0DFVN1Q34' },
      { name: 'National Tree Company Kincaid spruce mini tree, 3 ft', note: 'A classic little spruce for a tabletop or a small corner.', image: 'assets/products/B074D6KZM7.jpg', link: 'B074D6KZM7' },
      { name: 'National Tree Company Kingswood fir slim tree, 6.5 ft', note: 'A slim full-height fir that fits a narrow apartment corner.', image: 'assets/products/B00F424DHK.jpg', link: 'B00F424DHK' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-bedroom-decor-ideas',
    title: 'Christmas Bedroom Decor Ideas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Christmas bedroom decor ideas from Amazon: plaid flannel sheets, chunky knit throws, green velvet pillows, a snowy mini tree and a fir candle.',
    intro: 'A cozy Christmas bedroom doesn\'t need a tree in every corner. Start with the bed: plaid flannel sheets, a chunky knit throw and two deep green velvet pillows. Add one small lit tree on the nightstand, a wreath above the headboard and a fir candle, then keep the rest calm in cream, olive and pale oak so the room still feels like a retreat.',
    image: 'assets/pins/christmas-bedroom-decor-ideas.jpg',
    imageAlt: 'Collage of Christmas bedroom decor from Amazon: olive and beige plaid flannel sheets, cream chunky knit and faux fur throws, dark green velvet pillows, pine cone pillow covers, a snowy mini tree, a white ceramic tree, pre-lit wreaths and a Frasier Fir candle',
    products: [
      { name: 'Chunky knit chenille throw blanket', note: 'A hand-knit cream throw with big, soft loops to drape across the foot of the bed.', image: 'assets/products/B0CC24HCBB.jpg', link: 'B0CC24HCBB' },
      { name: 'Ruvanti olive plaid flannel sheet set', note: 'Brushed cotton flannel in an olive and cream plaid that feels like a cabin hotel.', image: 'assets/products/B08XPRBHSP.jpg', link: 'B08XPRBHSP' },
      { name: 'Thymes Frasier Fir candle', note: 'The classic fir and cedarwood candle that makes a bedroom smell like a fresh-cut tree.', image: 'assets/products/B00YPP2LBM.jpg', link: 'B00YPP2LBM' },
      { name: 'Jeneoo dark green velvet pillow covers, set of 2', note: 'Deep forest green velvet that adds Christmas color without a single ornament.', image: 'assets/products/B0B9NXRWV3.jpg', link: 'B0B9NXRWV3' },
      { name: 'DECSPAS 2 ft snowy pre-lit mini tree', note: 'A flocked tabletop tree in a burlap base, sized for a nightstand or dresser.', image: 'assets/products/B09D7HR565.jpg', link: 'B09D7HR565' },
      { name: 'Pine cone pillow covers, set of 2', note: 'Cream covers printed with pine cones and needles for a quiet woodland touch.', image: 'assets/products/B0FHPGTKJ5.jpg', link: 'B0FHPGTKJ5' },
      { name: 'White ceramic Christmas tree night light', note: 'A vintage-style glazed ceramic tree that plugs in and glows all night.', image: 'assets/products/B08ZT1BMV8.jpg', link: 'B08ZT1BMV8' },
      { name: 'National Tree Company 30 inch pre-lit spruce wreath', note: 'A full, lit spruce wreath to hang above the headboard or on the bedroom door.', image: 'assets/products/B074D8DTLV.jpg', link: 'B074D8DTLV' },
      { name: 'Ruvanti beige and grey plaid flannel sheets', note: 'A softer neutral plaid in cotton flannel for a calm winter bed.', image: 'assets/products/B0C8F6WQN4.jpg', link: 'B0C8F6WQN4' },
      { name: 'Bedsure faux fur sherpa throw', note: 'A fluffy cream faux fur throw for a reading chair or the end of the bed.', image: 'assets/products/B07W9C99JH.jpg', link: 'B07W9C99JH' },
      { name: 'Cream cotton knit throw blanket', note: 'A machine-washable cotton knit in cream that layers over any duvet.', image: 'assets/products/B08F48LR45.jpg', link: 'B08F48LR45' },
      { name: 'Beautex buffalo plaid sherpa throw', note: 'Red and black buffalo check with a sherpa back for classic cabin warmth.', image: 'assets/products/B08CV9SPPT.jpg', link: 'B08CV9SPPT' },
      { name: 'Deconovo faux linen pillow covers', note: 'Plain white linen-look covers that calm down a bed full of plaid and velvet.', image: 'assets/products/B01N5BWFAX.jpg', link: 'B01N5BWFAX' },
      { name: 'DecorbyHannah 20 inch Norfolk pine wreath', note: 'A lit Norfolk pine wreath with a natural, airy shape.', image: 'assets/products/B0DXVFT9DF.jpg', link: 'B0DXVFT9DF' },
      { name: 'Lonava red plaid flannel sheet set', note: 'Red and white plaid in heavy cotton flannel for a classic Christmas bed.', image: 'assets/products/B0FRS2Y5QF.jpg', link: 'B0FRS2Y5QF' },
      { name: 'Battilo cream chunky knit throw', note: 'A chunky ivory knit throw with a cozy, handmade look.', image: 'assets/products/B0G197KMWR.jpg', link: 'B0G197KMWR' },
      { name: 'RainRoad dark green velvet pillow covers, set of 2', note: 'Soft dark green velvet covers that pair with plaid sheets and cream throws.', image: 'assets/products/B07TZZ9KQN.jpg', link: 'B07TZZ9KQN' },
      { name: 'DII red buffalo check throw with tassels', note: 'A red and white check throw with tassels for a farmhouse Christmas bed.', image: 'assets/products/B07MHRHQ7Z.jpg', link: 'B07MHRHQ7Z' },
      { name: 'National Tree Company 24 inch flocked pine wreath', note: 'A frosted, pre-lit pine wreath with red berries that reads snowy and soft.', image: 'assets/products/B00EJ2DAX4.jpg', link: 'B00EJ2DAX4' },
      { name: '3 ft pre-lit Christmas tree with timer', note: 'A small lit tree with a timer, sized for a bedroom corner.', image: 'assets/products/B0FLPD67K9.jpg', link: 'B0FLPD67K9' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'advent-calendar-ideas',
    title: 'Advent Calendar Ideas for Grown Ups',
    category: 'gift-guides',
    date: '2026-10-26',
    description: 'Advent calendar ideas for grown ups from Amazon: wooden calendars to refill, linen and burlap bags to fill, a tea calendar and a gold advent ring.',
    intro: 'The prettiest advent calendars are the ones you keep: a wooden house or tree with 24 drawers, or a set of numbered bags you fill yourself with tea, chocolate, notes or small beauty treats. They sell out before December 1, so pick yours now and fill it over a weekend. For a ready-made option, a loose leaf tea calendar is a calm, grown-up gift.',
    image: 'assets/pins/advent-calendar-ideas.jpg',
    imageAlt: 'Collage of advent calendars from Amazon: a white wooden house advent calendar with lights, a natural wood tree advent calendar with drawers, wooden village calendars, red linen and burlap drawstring advent bags, kraft mini envelopes, a loose leaf tea advent calendar and gold advent candle rings',
    products: [
      { name: 'White wooden advent calendar house with lights', note: 'A white wooden house with 24 numbered drawers and a glowing window, refillable every year.', image: 'assets/products/B07XT92VVG.jpg', link: 'B07XT92VVG' },
      { name: 'Woodpeckers wooden tree advent calendar', note: 'A natural wood Christmas tree with 24 empty drawers to fill, paint or leave raw.', image: 'assets/products/B07JH27YDD.jpg', link: 'B07JH27YDD' },
      { name: 'VAHDAM loose leaf tea advent calendar', note: '24 loose leaf teas in small caddies, a grown-up calendar for tea lovers.', image: 'assets/products/B08FXWK7LT.jpg', link: 'B08FXWK7LT' },
      { name: 'LIHAO red linen advent bags with wooden numbers', note: '24 linen drawstring pouches with wooden number tags, ready to fill and hang.', image: 'assets/products/B08FD2NPWS.jpg', link: 'B08FD2NPWS' },
      { name: 'Clever Creations wooden village advent calendar', note: 'A natural wood reindeer village with LED lights and drawers to fill.', image: 'assets/products/B072MP1CFZ.jpg', link: 'B072MP1CFZ' },
      { name: 'Naler red burlap advent bags', note: '24 red drawstring bags with wooden ornaments and number tags for a DIY calendar.', image: 'assets/products/B08D62B2V4.jpg', link: 'B08D62B2V4' },
      { name: 'White forest wooden advent house', note: 'A double-gabled white house with a lit forest scene and 24 drawers.', image: 'assets/products/B07PV9CQG9.jpg', link: 'B07PV9CQG9' },
      { name: 'Gold advent candle ring for tapers', note: 'A slim gold ring that holds four taper candles, one lit for each Sunday of Advent.', image: 'assets/products/B0DCG4QLNL.jpg', link: 'B0DCG4QLNL' },
      { name: 'Mini kraft envelopes, 100 pack', note: 'Tiny kraft envelopes for notes, date ideas or gift cards: a simple paper advent calendar.', image: 'assets/products/B0791LT1RS.jpg', link: 'B0791LT1RS' },
      { name: 'HOMCOM light-up wooden advent calendar', note: 'A natural wood village calendar that lights up, with drawers for small treats.', image: 'assets/products/B09GM3S19Y.jpg', link: 'B09GM3S19Y' },
      { name: 'Gold advent wreath candle holder', note: 'A gold metal ring for five candles to layer with greenery on a table.', image: 'assets/products/B0H6GNYH5P.jpg', link: 'B0H6GNYH5P' },
      { name: 'Wooden sleigh Christmas countdown blocks', note: 'A rustic wood sleigh with number blocks that counts down the days to Christmas.', image: 'assets/products/B0B7QR2X2K.jpg', link: 'B0B7QR2X2K' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gift-basket-ideas-for-her',
    title: 'Gift Basket Ideas for Her',
    category: 'gift-guides',
    date: '2026-10-26',
    description: 'Gift basket ideas for her from Amazon: a scalloped woven basket, amber jar candles, cozy socks, mugs, hand cream and a faux fur throw.',
    intro: 'The best gift baskets feel like a cozy night in: start with a pretty woven basket, then add a candle, a good mug, soft socks, a hand cream and one small keepsake like a ring dish. Keep the palette calm and natural so the whole basket looks boutique-made, and finish with a fluffy throw if the basket is big enough.',
    image: 'assets/pins/gift-basket-ideas-for-her.jpg',
    imageAlt: 'Collage of gift basket ideas for her from Amazon: a scalloped woven basket, amber jar candles, cream chenille socks, white porcelain mugs, shea hand cream, a gray faux fur throw, a lavender spa set, ceramic ring dishes and silk scrunchies',
    products: [
      { name: 'Paper rope scalloped baskets, set of 2', note: 'Woven baskets with a scalloped rim, the prettiest base for a gift basket.', image: 'assets/products/B0FMXMHD9W.jpg', link: 'B0FMXMHD9W' },
      { name: 'Amber jar soy candles, 8 pack', note: 'Scented soy candles in amber glass jars that look like a boutique set.', image: 'assets/products/B0GF7WPNCJ.jpg', link: 'B0GF7WPNCJ' },
      { name: 'UGG cozy chenille socks, cream', note: 'Plush cream chenille socks from UGG, a small luxury she will wear all winter.', image: 'assets/products/B06XRMZNTD.jpg', link: 'B06XRMZNTD' },
      { name: 'vancasso white porcelain mugs', note: 'Simple white porcelain mugs that look clean and minimal in any basket.', image: 'assets/products/B0F8MPHXPX.jpg', link: 'B0F8MPHXPX' },
      { name: 'L\'Occitane shea butter hand cream', note: 'The cult shea hand cream in a travel tube, a classic basket filler.', image: 'assets/products/B0G3XTHKJF.jpg', link: 'B0G3XTHKJF' },
      { name: 'Bedsure gray faux fur throw', note: 'A fluffy gray faux fur throw to roll up and tuck into a big basket.', image: 'assets/products/B07X3BX7WM.jpg', link: 'B07X3BX7WM' },
      { name: 'White mandala ceramic ring dish', note: 'A white ceramic ring holder with a lace-like rim for her nightstand.', image: 'assets/products/B096X3YK3T.jpg', link: 'B096X3YK3T' },
      { name: 'Lavender spa gift set', note: 'A calm lavender self-care set with bath and body favorites.', image: 'assets/products/B09SY4TJN3.jpg', link: 'B09SY4TJN3' },
      { name: 'Fuzzy slipper socks in fall neutrals', note: 'Fluffy socks in cream, tan and brown, an easy cozy add-in.', image: 'assets/products/B0DJQQYS7K.jpg', link: 'B0DJQQYS7K' },
      { name: 'Happyiren cotton rope basket', note: 'A soft white rope basket that doubles as storage after the gift.', image: 'assets/products/B0CN8N224C.jpg', link: 'B0CN8N224C' },
      { name: 'Ceramic flower jewelry dish', note: 'A small petal-shaped dish for rings and earrings.', image: 'assets/products/B09XXDJH8T.jpg', link: 'B09XXDJH8T' },
      { name: 'Rurality medium wicker gift basket', note: 'A classic willow basket with handles, ready to fill.', image: 'assets/products/B08XBKNZMB.jpg', link: 'B08XBKNZMB' },
      { name: 'Morandi color ceramic mugs, set of 6', note: 'Two-tone mugs in muted pastels with a raw clay base.', image: 'assets/products/B0BJ8ZSGGL.jpg', link: 'B0BJ8ZSGGL' },
      { name: 'Tea Forte Kati infuser cup', note: 'A lidded ceramic tea cup with a built-in infuser for loose tea lovers.', image: 'assets/products/B008DVSATQ.jpg', link: 'B008DVSATQ' },
      { name: 'Mulberry silk scrunchies, 5 pack', note: 'Silk scrunchies in soft jewel tones that are gentle on hair.', image: 'assets/products/B0DQBPH86M.jpg', link: 'B0DQBPH86M' },
      { name: 'Rurality small wicker gift basket', note: 'A smaller willow basket for a sweet, simple gift.', image: 'assets/products/B00LI0FLQY.jpg', link: 'B00LI0FLQY' },
      { name: 'DOWAN embossed stoneware mugs, set of 6', note: 'Textured white mugs with an embossed pattern that look handmade.', image: 'assets/products/B0CR65F13V.jpg', link: 'B0CR65F13V' },
      { name: 'Fluffy plush slipper socks', note: 'Soft, chunky slipper socks in pretty neutral and pastel shades.', image: 'assets/products/B08GHNRG5Q.jpg', link: 'B08GHNRG5Q' },
      { name: 'Gold rim initial trinket dish', note: 'A white dish with a gold rim and initial, a personal little extra.', image: 'assets/products/B09RP5BRPS.jpg', link: 'B09RP5BRPS' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'new-years-eve-party-decor',
    title: 'New Year\'s Eve Party Decor That Looks Expensive',
    category: 'hosting-recipes',
    date: '2026-10-26',
    description: 'New Year\'s Eve party decor from Amazon that looks expensive: crystal coupes, a ribbed glass ice bucket, disco balls, gold candles and napkins.',
    intro: 'A New Year\'s Eve party at home looks expensive when you keep it to three materials: clear crystal, gold and mirror. Set out coupes and a champagne bucket on ice, cluster gold taper candles at different heights, add one big disco ball to catch the candlelight, and finish with gold or black cocktail napkins. It all works for a dinner for six or a full house.',
    image: 'assets/pins/new-years-eve-party-decor.jpg',
    imageAlt: 'Collage of New Year\'s Eve party decor from Amazon: crystal and ribbed coupe glasses, a mirror disco ball, a ribbed glass ice bucket, a hammered champagne bucket, gold taper and hurricane candle holders, gold napkins, a gold cocktail shaker, gold chargers and gold spray centerpieces',
    products: [
      { name: 'FAWLES crystal coupe glasses, set of 6', note: 'Short-stem crystal coupes for the midnight toast and cocktails all night.', image: 'assets/products/B08Y8R3T64.jpg', link: 'B08Y8R3T64' },
      { name: 'Ribbed crystal coupe glasses, set of 6', note: 'Vintage-style ribbed coupes that look like a hotel bar.', image: 'assets/products/B0DFQ5952K.jpg', link: 'B0DFQ5952K' },
      { name: 'Alytimes 8 inch mirror disco ball', note: 'A classic silver mirror ball to set on the bar or hang above the table.', image: 'assets/products/B07K79R8M4.jpg', link: 'B07K79R8M4' },
      { name: 'Youdepot 4 inch disco balls, 2 pack', note: 'Small mirror balls to cluster on a tray or along the mantel.', image: 'assets/products/B0FG865RW8.jpg', link: 'B0FG865RW8' },
      { name: 'Le\'raze ribbed glass ice bucket with tongs', note: 'A ribbed glass bucket with a wood lid and gold tongs for chilled champagne.', image: 'assets/products/B0CLMFB2FN.jpg', link: 'B0CLMFB2FN' },
      { name: 'Chef Craft hammered champagne bucket', note: 'A hammered stainless bucket that holds a bottle on ice.', image: 'assets/products/B073JBVBT5.jpg', link: 'B073JBVBT5' },
      { name: 'Brass gold taper candle holders, set of 6', note: 'Slim gold candlesticks in staggered heights for candlelight at midnight.', image: 'assets/products/B0F5Q2BJ9X.jpg', link: 'B0F5Q2BJ9X' },
      { name: 'Hewory gold hurricane candle holders, set of 6', note: 'Glass hurricane sleeves on gold bases for a glowing party table.', image: 'assets/products/B0DCVRR4NN.jpg', link: 'B0DCVRR4NN' },
      { name: 'White and gold dot cocktail napkins, 100 pack', note: 'White napkins with gold foil dots for the bar and dessert table.', image: 'assets/products/B07GKJ5QHV.jpg', link: 'B07GKJ5QHV' },
      { name: 'Gold linen-feel cocktail napkins', note: 'Linen-like gold napkins that look like cloth, not paper.', image: 'assets/products/B07X1PJ9H7.jpg', link: 'B07X1PJ9H7' },
      { name: 'Beistle gold metallic spray centerpieces, 2 pack', note: 'Gold firework-style sprays to tuck into a vase for a New Year burst.', image: 'assets/products/B09W7TT3RN.jpg', link: 'B09W7TT3RN' },
      { name: 'Gold cocktail shaker set', note: 'A gold shaker, jigger and bar spoon for a midnight martini.', image: 'assets/products/B0CJCN9XK2.jpg', link: 'B0CJCN9XK2' },
      { name: 'Riedel Spey crystal whisky tumblers, set of 2', note: 'Heavy crystal tumblers for an old fashioned at the countdown.', image: 'assets/products/B07CNR317D.jpg', link: 'B07CNR317D' },
      { name: 'LIYH gold charger plates, set of 8', note: 'Gold chargers with a scalloped rim that dress up a NYE dinner.', image: 'assets/products/B0FGCQK58N.jpg', link: 'B0FGCQK58N' },
      { name: 'Juvale gold leaf placemats, 10 pack', note: 'Cut-out gold leaf placemats for a glamorous table.', image: 'assets/products/B0824DRNS8.jpg', link: 'B0824DRNS8' },
      { name: 'Stainless steel champagne bucket with scoop', note: 'A polished bucket with handles and an ice scoop for the bar cart.', image: 'assets/products/B0CK874GWN.jpg', link: 'B0CK874GWN' },
      { name: 'MTLEE mini disco ball ornaments, 20 pack', note: 'Mirror balls in mixed sizes to scatter on the table or hang in a cluster.', image: 'assets/products/B09MW87J57.jpg', link: 'B09MW87J57' },
      { name: 'Black and gold cocktail napkins, 100 pack', note: 'Black napkins with gold foil dots for a moody NYE bar.', image: 'assets/products/B0B25DXMLK.jpg', link: 'B0B25DXMLK' },
      { name: 'NUPTIO gold pillar candle holders', note: 'Turned gold pillar holders for ivory candles on the buffet.', image: 'assets/products/B07G6YZPPH.jpg', link: 'B07G6YZPPH' },
      { name: 'Gold 23 piece bartender kit with stand', note: 'A full gold bar set with shaker, strainers and tools on a display stand.', image: 'assets/products/B0B99DZ55F.jpg', link: 'B0B99DZ55F' },
      { name: 'OGGI double wall wine chiller', note: 'An insulated steel sleeve that keeps a champagne bottle cold without ice.', image: 'assets/products/B001HLW2P2.jpg', link: 'B001HLW2P2' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'friendsgiving-table-ideas',
    title: 'Friendsgiving Table Ideas',
    category: 'hosting-recipes',
    date: '2026-10-26',
    description: 'Friendsgiving table ideas from Amazon: an acacia salad bowl, ceramic pumpkins, a marble cheese board, linen napkins and stemless glasses.',
    intro: 'A Friendsgiving table that looks hosted, not thrown together, needs only a few good pieces: one big wooden salad bowl, white platters for the turkey and sides, a marble board for cheese, stemless glasses that survive a crowd and soft linen napkins. A white ceramic pumpkin in the middle and a touch of marble or crystal finish the look in a calm fall palette.',
    image: 'assets/pins/friendsgiving-table-ideas.jpg',
    imageAlt: 'Collage of Friendsgiving table finds from Amazon: a white ceramic pumpkin, an acacia salad bowl with servers, white oval platters, a marble cheese board, stemless wine glasses, flax linen napkins, a cake stand, cheese knives and a crystal butter dish',
    products: [
      { name: 'Pearhead white ceramic pumpkin with gold stem', note: 'A glossy white pumpkin with a gold stem, an easy centerpiece that lasts all fall.', image: 'assets/products/B0B99NR7M2.jpg', link: 'B0B99NR7M2' },
      { name: 'AIDEA acacia wood salad bowl with servers', note: 'A large, warm-toned acacia bowl with matching servers for the big Friendsgiving salad.', image: 'assets/products/B076HN9Z8Z.jpg', link: 'B076HN9Z8Z' },
      { name: 'DOWAN oval serving platters, set of 3', note: 'Nesting white platters in three sizes for the turkey, sides and dessert.', image: 'assets/products/B07T7MYF4D.jpg', link: 'B07T7MYF4D' },
      { name: 'White marble cheese board', note: 'A real marble slab that turns a simple cheese plate into a styled board.', image: 'assets/products/B08JKCRXX7.jpg', link: 'B08JKCRXX7' },
      { name: 'FAWLES stemless wine glasses, set of 12', note: 'A dozen sturdy stemless glasses, enough for the whole table.', image: 'assets/products/B08Y88SZ52.jpg', link: 'B08Y88SZ52' },
      { name: 'Lightnpro flax linen napkins, set of 12', note: 'Hemstitched flax napkins in a soft oat tone that look relaxed and expensive.', image: 'assets/products/B0797PK1RN.jpg', link: 'B0797PK1RN' },
      { name: 'Radicaln marble salt cellar with lid', note: 'A swirled onyx marble salt cellar that adds a warm amber note to the table.', image: 'assets/products/B0C2YWSP5W.jpg', link: 'B0C2YWSP5W' },
      { name: 'Martha Stewart white pedestal cake stand', note: 'A classic stoneware pedestal for pies, cakes or a cheese display.', image: 'assets/products/B0BRF4XH16.jpg', link: 'B0BRF4XH16' },
      { name: 'BOSKA mini Copenhagen cheese knives, set of 4', note: 'Sleek stainless cheese knives that look designer on any board.', image: 'assets/products/B06WWQXHMS.jpg', link: 'B06WWQXHMS' },
      { name: 'White pumpkins with gold lines, 10 pieces', note: 'Small white pumpkins with gold ribs to scatter down the table.', image: 'assets/products/B09VP7RHVR.jpg', link: 'B09VP7RHVR' },
      { name: 'Samhita acacia wood serving board', note: 'A paddle board for bread, cheese or charcuterie with a warm wood grain.', image: 'assets/products/B09H4GQ187.jpg', link: 'B09H4GQ187' },
      { name: 'LE TAUCI gravy boat with saucer', note: 'A white ceramic gravy boat with its own saucer to catch drips.', image: 'assets/products/B0B3JBPQ2W.jpg', link: 'B0B3JBPQ2W' },
      { name: 'Crystal covered butter dish', note: 'A cut-glass butter dish that brings a vintage sparkle to the table.', image: 'assets/products/B0CQJT88SM.jpg', link: 'B0CQJT88SM' },
      { name: 'Stolzle Lausitz crystal stemless tumblers, set of 4', note: 'Thin crystal tumblers that feel like a restaurant pour.', image: 'assets/products/B07WTX7155.jpg', link: 'B07WTX7155' },
      { name: 'DELLING rectangular porcelain platters, set of 3', note: 'Clean white rectangular platters for a buffet-style spread.', image: 'assets/products/B088QZ56RS.jpg', link: 'B088QZ56RS' },
      { name: 'Gibson Home scalloped acacia salad bowl set', note: 'A scalloped wooden bowl with servers, a softer take on the classic salad bowl.', image: 'assets/products/B0FJHJGLZC.jpg', link: 'B0FJHJGLZC' },
      { name: 'SweetNeedle linen napkins', note: 'Handmade hemstitched linen napkins in a natural flax color.', image: 'assets/products/B075F218V7.jpg', link: 'B075F218V7' },
      { name: 'Stemless wine glasses, set of 4', note: 'Modern stemless glasses with a smooth rim for red or white.', image: 'assets/products/B0F82SRVMG.jpg', link: 'B0F82SRVMG' },
      { name: 'White porcelain cake stand, 10 inch', note: 'A simple white pedestal that lifts pies and desserts to eye level.', image: 'assets/products/B0D9JF3RP3.jpg', link: 'B0D9JF3RP3' },
      { name: 'Cheese knives with wooden handles, 6 pieces', note: 'Mini cheese knives with warm wood handles for every board.', image: 'assets/products/B0C8MYF17X.jpg', link: 'B0C8MYF17X' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'winter-decor-ideas-after-christmas',
    title: 'Winter Decor Ideas After Christmas',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Winter decor ideas after Christmas from Amazon: frosted pine, white birch logs, pinecones, faux fur throws, lanterns and candle holders.',
    intro: 'When the tree comes down, the house can still feel cozy. Swap ornaments for nature: frosted pine stems in a white vase, white birch logs by the fireplace, a bowl of pinecones, wooden lanterns and candlelight. Layer an ivory faux fur throw and fluffy pillows, and the January living room looks calm, wintry and expensive, with nothing that says Christmas.',
    image: 'assets/pins/winter-decor-ideas-after-christmas.jpg',
    imageAlt: 'Collage of winter decor after Christmas from Amazon: frosted white pine branches, an ivory faux fur throw, white birch logs, whitewashed pillar candle holders, wooden lanterns, pinecones, faux fur pillows, white berry stems, glass cloches and magnolia stems',
    products: [
      { name: 'Hananona frosted white pine branches, 50 pieces', note: 'Snowy white pine stems to fill a vase or tuck into a bowl for January.', image: 'assets/products/B0H4YBT5K8.jpg', link: 'B0H4YBT5K8' },
      { name: 'Marbled ivory faux fur throw, XL', note: 'A big ivory and taupe faux fur throw that makes any sofa look like a ski lodge.', image: 'assets/products/B07BDPJ3YN.jpg', link: 'B07BDPJ3YN' },
      { name: 'Wilson white birch logs, set of 12', note: 'Real white birch logs to stack in a fireplace, basket or by the hearth.', image: 'assets/products/B07MDHN5NB.jpg', link: 'B07MDHN5NB' },
      { name: 'Rustic white wooden pillar candle holders, set of 3', note: 'Whitewashed turned wood holders in three heights for pillar candles.', image: 'assets/products/B097QPND5Z.jpg', link: 'B097QPND5Z' },
      { name: 'Bdor wooden candle lanterns, set of 2', note: 'Warm wood lanterns with metal tops for a candlelit winter entry or hearth.', image: 'assets/products/B0BTVSJB6Q.jpg', link: 'B0BTVSJB6Q' },
      { name: 'Natural pinecones, 24 pack', note: 'Real pinecones to pile in a bowl or dough bowl all winter long.', image: 'assets/products/B077PNQTY3.jpg', link: 'B077PNQTY3' },
      { name: 'Cheer Collection shaggy faux fur pillows, set of 2', note: 'Plush frosted faux fur pillows for a soft winter sofa.', image: 'assets/products/B08232Y41Y.jpg', link: 'B08232Y41Y' },
      { name: 'White berry stems, 40 pieces', note: 'Snowy white berry sprays for a vase that feels wintry, not festive.', image: 'assets/products/B0D78FG59T.jpg', link: 'B0D78FG59T' },
      { name: 'ZEERSHEE glass cloche domes with wood base, set of 2', note: 'Bell jars to display pinecones, moss or a candle on a winter shelf.', image: 'assets/products/B0D8KMVM1J.jpg', link: 'B0D8KMVM1J' },
      { name: 'Real touch white magnolia stems', note: 'Creamy white magnolia blooms with glossy leaves for a quiet winter vase.', image: 'assets/products/B0C4Z3ZJKK.jpg', link: 'B0C4Z3ZJKK' },
      { name: 'White ceramic vase with twine', note: 'A simple white vase with a twine tie for winter stems.', image: 'assets/products/B09ZBBMLTH.jpg', link: 'B09ZBBMLTH' },
      { name: 'Snow frosted pine picks, 30 pieces', note: 'Flocked pine picks to tuck into lanterns, bowls and garland.', image: 'assets/products/B0DF2DJTK2.jpg', link: 'B0DF2DJTK2' },
      { name: 'Madison Park Zuri faux fur throw, snow leopard', note: 'A soft gray and ivory faux fur throw with a subtle snowy pattern.', image: 'assets/products/B07T2Y1QHF.jpg', link: 'B07T2Y1QHF' },
      { name: 'Large birch fireplace logs, set of 5', note: 'Chunky birch logs that fill an empty firebox with a clean, wintry look.', image: 'assets/products/B00XK0RGAO.jpg', link: 'B00XK0RGAO' },
      { name: 'Frosted pine spray branches, 10 pack', note: 'Full frosted pine sprays that look like fresh snowy cuttings.', image: 'assets/products/B0FF4NJ1K3.jpg', link: 'B0FF4NJ1K3' },
      { name: 'Large natural pinecones, 50 pieces', note: 'A mix of pinecone sizes for bowl fillers and winter vignettes.', image: 'assets/products/B0B2KNXL59.jpg', link: 'B0B2KNXL59' },
      { name: 'White wood pillar candle holders', note: 'Distressed white wood candlesticks for pillars in three heights.', image: 'assets/products/B0CHVHLGV8.jpg', link: 'B0CHVHLGV8' },
      { name: 'Abbott small bell glass cloche', note: 'A small clear bell jar to frame a pinecone or a tiny winter scene.', image: 'assets/products/B085JWXQ1T.jpg', link: 'B085JWXQ1T' },
      { name: 'White berry stems, 30 pack', note: 'Short white berry picks to add a snowy touch to vases and lanterns.', image: 'assets/products/B0HD6XDRGC.jpg', link: 'B0HD6XDRGC' },
      { name: 'Large birch logs, 6 pack', note: 'Unfinished birch logs for a stacked basket or fireplace display.', image: 'assets/products/B07PLPH3LT.jpg', link: 'B07PLPH3LT' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'coffee-bar-ideas',
    title: 'Coffee Bar Ideas That Look Expensive',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Coffee bar ideas that look expensive, all from Amazon: glass canisters, a bamboo mug tree, gold pump syrup bottles, trays and ribbed glass mugs.',
    intro: 'A coffee bar that looks expensive is mostly about editing: one tray to define the station, glass jars so the beans become decor, matching mugs on a mug tree and a couple of syrup bottles with gold pumps. Keep the palette to glass, wood, marble and cream ceramic and the corner reads like a boutique cafe, not countertop clutter.',
    image: 'assets/pins/coffee-bar-ideas.jpg',
    imageAlt: 'Collage of coffee bar ideas from Amazon: a glass coffee bean jar with an acacia lid, a bamboo mug tree, glass syrup bottles with gold pumps, ribbed glass mugs, a marble tray, a gooseneck kettle and white ceramic mugs',
    products: [
      { name: 'Glass coffee bean jar with acacia lid and scoop', note: 'A clear jar with a wood lid that turns coffee beans into decor.', image: 'assets/products/B0GBTGZ64M.jpg', link: 'B0GBTGZ64M' },
      { name: 'Bamboo mug tree, 6 hooks', note: 'A warm bamboo mug tree with an octagon base that keeps favorite mugs on display.', image: 'assets/products/B09PV4WWQ1.jpg', link: 'B09PV4WWQ1' },
      { name: 'Glass syrup bottles with gold pumps, set of 2', note: 'Two glass syrup bottles with gold pumps that look like a cafe bar at home.', image: 'assets/products/B0BZ4BYWGT.jpg', link: 'B0BZ4BYWGT' },
      { name: 'Ribbed glass coffee mugs, 6 pack', note: 'Fluted glass mugs that show off every latte layer.', image: 'assets/products/B0BQ6R8DCD.jpg', link: 'B0BQ6R8DCD' },
      { name: 'Carrara oval marble tray', note: 'A white and gray marble tray that corrals syrups, sugar and spoons.', image: 'assets/products/B0FSZZPD3L.jpg', link: 'B0FSZZPD3L' },
      { name: 'AirScape glass coffee canister', note: 'A borosilicate glass canister with a plunger lid that pushes out air to keep beans fresh.', image: 'assets/products/B086VZCGHW.jpg', link: 'B086VZCGHW' },
      { name: 'MALACASA khaki white ceramic mugs, set of 4', note: 'Cream mugs with a raw clay base for a warm, handmade look.', image: 'assets/products/B0FWJFVJJZ.jpg', link: 'B0FWJFVJJZ' },
      { name: 'Acacia wood serving tray with handles, 17 inch', note: 'A long acacia tray that turns a corner of the counter into a coffee station.', image: 'assets/products/B0CWH72PCF.jpg', link: 'B0CWH72PCF' },
      { name: 'OXO glass sugar dispenser', note: 'A simple glass pourer for sugar that looks clean on an open counter.', image: 'assets/products/B072MNDRQB.jpg', link: 'B072MNDRQB' },
      { name: 'Beech wood coffee scoops, 4 pack', note: 'Small wooden scoops for coffee, sugar and cocoa canisters.', image: 'assets/products/B0BY8YXPHG.jpg', link: 'B0BY8YXPHG' },
      { name: 'MALACASA porcelain espresso cups with stand', note: 'Four stackable white espresso cups and saucers on a slim metal stand.', image: 'assets/products/B0H8T2WDVP.jpg', link: 'B0H8T2WDVP' },
      { name: 'Bodum Melior gooseneck electric kettle', note: 'A brushed steel gooseneck kettle with a cork handle for slow pour-over mornings.', image: 'assets/products/B07P15ZL3V.jpg', link: 'B07P15ZL3V' },
      { name: 'DeeCoo matte white ribbed mugs, set of 4', note: 'Matte white mugs with soft ribbing that look like boutique ceramics.', image: 'assets/products/B0FCD2W9VW.jpg', link: 'B0FCD2W9VW' },
      { name: 'Kirecoo stainless steel coffee canister', note: 'An airtight steel canister with a date tracker and a built-in scoop.', image: 'assets/products/B0G429DFHT.jpg', link: 'B0G429DFHT' },
      { name: 'Bamboo coffee mug tree', note: 'A slim bamboo stand that hangs six mugs in a small footprint.', image: 'assets/products/B0DQWGJ5PT.jpg', link: 'B0DQWGJ5PT' },
      { name: 'GMISUN square glass syrup bottles with pumps', note: 'Square glass bottles with black pumps for vanilla, caramel or maple syrup.', image: 'assets/products/B0C1ZFBZ3T.jpg', link: 'B0C1ZFBZ3T' },
      { name: 'Luxspire marble-look tray, small', note: 'A small white marble-look tray that keeps a coffee corner tidy.', image: 'assets/products/B07JHBP66L.jpg', link: 'B07JHBP66L' },
      { name: 'LUXU glass coffee mugs, set of 4', note: 'Wide clear mugs for iced coffee and lattes.', image: 'assets/products/B07WQWHKJ1.jpg', link: 'B07WQWHKJ1' },
      { name: 'Hario ceramic coffee filter stand', note: 'A white ceramic holder that keeps paper filters neat and in reach.', image: 'assets/products/B00B7XJTP6.jpg', link: 'B00B7XJTP6' },
      { name: 'Amazon Basics glazed stoneware mugs, set of 4', note: 'Cream stoneware mugs with a soft glaze and a generous handle.', image: 'assets/products/B0F4314KP1.jpg', link: 'B0F4314KP1' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'laundry-room-organization-that-looks-expensive',
    title: 'Laundry Room Organization That Looks Expensive',
    category: 'home-finds',
    date: '2026-10-26',
    description: 'Laundry room organization that looks expensive: glass jars, woven baskets, a wood drying rack, a lint bin and wood hangers, all from Amazon.',
    intro: 'A laundry room looks expensive when the bottles disappear. Decant powder and pods into big glass jars, hide supplies in lidded woven baskets, give lint and dryer sheets their own white tins and keep a wood drying rack out in the open. Natural textures and glass make even a small laundry closet feel calm and finished.',
    image: 'assets/pins/laundry-room-organization-that-looks-expensive.jpg',
    imageAlt: 'Collage of laundry room organization from Amazon: a wooden drying rack, a lidded wicker laundry hamper, glass jars with lids, scalloped wicker baskets, a white lint bin, seagrass baskets, floating shelves and wooden hangers',
    products: [
      { name: 'HOME IT wooden clothes drying rack', note: 'A natural wood folding rack that looks good left open in the room.', image: 'assets/products/B0117PHGP8.jpg', link: 'B0117PHGP8' },
      { name: 'DUMOS wicker laundry basket with lid, 90L', note: 'A tall woven hamper with a lid and a removable liner.', image: 'assets/products/B0HKSD1P5Z.jpg', link: 'B0HKSD1P5Z' },
      { name: 'Masthome 1 gallon glass jar with lid', note: 'A big apothecary-style jar for laundry powder, pods or scent boosters.', image: 'assets/products/B0D1G76B8T.jpg', link: 'B0D1G76B8T' },
      { name: 'Embossed magnetic lint bin, white', note: 'A small white bin that sticks to the side of the dryer for lint and pocket finds.', image: 'assets/products/B0CMYKKYN9.jpg', link: 'B0CMYKKYN9' },
      { name: 'DOKOT seagrass basket with handles', note: 'A soft belly basket for towels, rags or socks waiting for a match.', image: 'assets/products/B01MRN3VLG.jpg', link: 'B01MRN3VLG' },
      { name: 'ForPro clear apothecary jar, 60 oz', note: 'A clear canister with a lid for cotton balls, dryer balls or clothespins.', image: 'assets/products/B0BYBCFH8J.jpg', link: 'B0BYBCFH8J' },
      { name: 'Scalloped wicker storage baskets with lids, set of 2', note: 'Two lidded woven boxes with a scalloped edge that hide supplies on a shelf.', image: 'assets/products/B0DNJ33YDL.jpg', link: 'B0DNJ33YDL' },
      { name: 'DOLLFIO rustic floating shelves', note: 'Wood shelves on black brackets for jars and baskets above the machines.', image: 'assets/products/B0CD1X9B1J.jpg', link: 'B0CD1X9B1J' },
      { name: 'Modern farmhouse dryer sheet holder, white', note: 'A white metal box with a lid that keeps dryer sheets out of sight.', image: 'assets/products/B0BFFT48HN.jpg', link: 'B0BFFT48HN' },
      { name: 'Mini wooden clothespins, 100 pack', note: 'Tiny wood clips for labels, socks and a styled jar on the shelf.', image: 'assets/products/B01FVZSVHC.jpg', link: 'B01FVZSVHC' },
      { name: 'Handwoven water hyacinth basket', note: 'A chunky woven basket with handles for clean towels or a lint-free folding spot.', image: 'assets/products/B0DN6WTTLK.jpg', link: 'B0DN6WTTLK' },
      { name: '1 gallon glass jar with white lid', note: 'A wide-mouth glass jar for pods or powder with a clean white lid.', image: 'assets/products/B0GJFW2CP9.jpg', link: 'B0GJFW2CP9' },
      { name: 'CHICVITA woven rope basket with leather handles', note: 'A soft rope basket with leather handles for hand-wash items or towels.', image: 'assets/products/B08G4XVJKZ.jpg', link: 'B08G4XVJKZ' },
      { name: 'Amber Home natural wooden hangers, 30 pack', note: 'Matching wood hangers that make a hanging rod look like a boutique.', image: 'assets/products/B08FMDLLYR.jpg', link: 'B08FMDLLYR' },
      { name: 'Wicker storage basket with lid', note: 'A lidded seagrass box for detergent pods, stain sticks or spare buttons.', image: 'assets/products/B0CZCTPG54.jpg', link: 'B0CZCTPG54' },
      { name: 'Amazon Basics foldable clothes drying rack', note: 'A white folding rack that dries a full load and stores flat.', image: 'assets/products/B00H7P1GPO.jpg', link: 'B00H7P1GPO' },
      { name: 'Modern farmhouse lint bin, white', note: 'A white wall-mount lint bin with a simple script label.', image: 'assets/products/B0BFFR47C1.jpg', link: 'B0BFFR47C1' },
      { name: 'Calindiana farmhouse laundry pods container', note: 'A white metal tin with a wood handle that keeps pods away from little hands.', image: 'assets/products/B09VF6BYLH.jpg', link: 'B09VF6BYLH' },
      { name: 'Natural rattan storage baskets, set of 3', note: 'Three stackable rattan trays for sorting supplies on a shelf.', image: 'assets/products/B089K29BKG.jpg', link: 'B089K29BKG' },
      { name: 'Whitmor canvas clothespin bag', note: 'A hanging canvas bag that keeps clothespins handy.', image: 'assets/products/B000I6739C.jpg', link: 'B000I6739C' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'winter-skincare-must-haves',
    title: 'Winter Skincare Must Haves for Dry Skin',
    category: 'beauty-finds',
    date: '2026-10-26',
    description: 'Winter skincare must haves for dry skin from Amazon: a lip sleeping mask, rich ceramide creams, a face mist, hand salve, cuticle oil and a satin pillowcase.',
    intro: 'Dry winter skin needs a routine that layers: mist or serum on damp skin, a rich ceramide cream on top, an overnight lip mask and a hand salve by the bed. A satin pillowcase and a soft spa headband make the night routine feel like a ritual. These picks keep the shelf calm, with simple white, cream and glass packaging.',
    image: 'assets/pins/winter-skincare-must-haves.jpg',
    imageAlt: 'Collage of winter skincare must haves from Amazon: an ivory satin pillowcase, Kiehl\'s Ultra Facial Cream, LANEIGE Lip Sleeping Mask, Avene thermal water, a tinted lip oil, ceramide moisturizers, hyaluronic acid serum, cuticle oil and a spa headband',
    products: [
      { name: 'Kitsch satin pillowcase, ivory', note: 'A smooth satin pillowcase that is gentler on dry skin and hair overnight.', image: 'assets/products/B07XFQVN57.jpg', link: 'B07XFQVN57' },
      { name: 'Kiehl\'s Ultra Facial Cream', note: 'A rich daily cream with squalane and glycerin for skin that feels tight in winter.', image: 'assets/products/B004JVSGWU.jpg', link: 'B004JVSGWU' },
      { name: 'LANEIGE Lip Sleeping Mask, vanilla', note: 'The cult overnight lip mask that wakes up chapped lips soft.', image: 'assets/products/B072BHZ41J.jpg', link: 'B072BHZ41J' },
      { name: 'Avene Thermal Spring Water', note: 'A soothing face mist to spray before cream when indoor heat dries skin out.', image: 'assets/products/B002D48QUC.jpg', link: 'B002D48QUC' },
      { name: 'Summer Fridays Dream Lip Oil', note: 'A sheer tinted lip oil that keeps lips glossy and hydrated through cold days.', image: 'assets/products/B0CVQT4SDR.jpg', link: 'B0CVQT4SDR' },
      { name: 'ANUA 3 Ceramide Panthenol Moisture Barrier Cream', note: 'A ceramide and panthenol cream for a winter skin barrier that needs help.', image: 'assets/products/B0DCBPWGBS.jpg', link: 'B0DCBPWGBS' },
      { name: 'The Ordinary Natural Moisturizing Factors + PhytoCeramides', note: 'A rich, simple moisturizer for dry, flaky winter skin.', image: 'assets/products/B0D49KQLNY.jpg', link: 'B0D49KQLNY' },
      { name: 'The Ordinary Hyaluronic Acid 2% + B5', note: 'A hydrating serum to layer under cream on damp skin.', image: 'assets/products/B01MYEZPC8.jpg', link: 'B01MYEZPC8' },
      { name: 'ella+mila nail and cuticle oil', note: 'A fragrance-free tsubaki and argan oil for dry winter cuticles.', image: 'assets/products/B0G5MCWG85.jpg', link: 'B0G5MCWG85' },
      { name: 'WSYUB spa headband and wristband set', note: 'A soft beige terry headband with wristbands for a mess-free night routine.', image: 'assets/products/B0DFTRWZPM.jpg', link: 'B0DFTRWZPM' },
      { name: 'Mario Badescu Lip Mask', note: 'An overnight lip treatment with a thick, balmy texture.', image: 'assets/products/B0B7VSL515.jpg', link: 'B0B7VSL515' },
      { name: 'Kiehl\'s Ultimate Strength Hand Salve', note: 'A rich hand cream for cracked knuckles in cold weather.', image: 'assets/products/B00EKT4MCY.jpg', link: 'B00EKT4MCY' },
      { name: 'The INKEY List Bio-Active Ceramide Moisturizer', note: 'A plumping ceramide cream that keeps skin comfortable all day.', image: 'assets/products/B0CNTKZN7F.jpg', link: 'B0CNTKZN7F' },
      { name: 'COSRX 7X Ceramide Moisturizer', note: 'A barrier repair cream with seven ceramides for dry, sensitive skin.', image: 'assets/products/B0DYNQ393Y.jpg', link: 'B0DYNQ393Y' },
      { name: 'La Roche-Posay Toleriane Double Repair Moisturizer', note: 'A fragrance-free daily moisturizer with ceramides and niacinamide.', image: 'assets/products/B01N9SPQHQ.jpg', link: 'B01N9SPQHQ' },
      { name: 'Mario Badescu moisturizing lip balm', note: 'A simple tube balm for chapped lips on the go.', image: 'assets/products/B07GDL1VS2.jpg', link: 'B07GDL1VS2' },
      { name: 'DKBslik silky pillowcases, 2 pack', note: 'Two smooth white pillowcases with hidden zippers for less friction overnight.', image: 'assets/products/B0BVWLXFZL.jpg', link: 'B0BVWLXFZL' },
      { name: 'Cuccio Naturale revitalizing cuticle oil', note: 'A golden cuticle oil that softens dry winter nails.', image: 'assets/products/B00F644LTQ.jpg', link: 'B00F644LTQ' },
      { name: 'Dr.Althea 345 Relief Cream', note: 'A calming Korean cream for red, irritated winter skin.', image: 'assets/products/B0G643D8ZG.jpg', link: 'B0G643D8ZG' }
    ]
  },
  // ---------------------------------------------------------------- STYLING GUIDE
  {
    "slug": "how-to-style-a-coffee-table",
    "guide": true,
    "title": "How to Style a Coffee Table 3 Ways, Like a Designer",
    "category": "home-finds",
    "date": "2026-10-23",
    "updated": "2026-10-23",
    "description": "A simple 5-step designer formula for coffee table decor, plus one table styled 3 ways for everyday, fall and Christmas with Amazon finds that look expensive.",
    "intro": "A styled coffee table looks expensive because it follows a formula, not because every piece costs a lot. Here is the one designers use: a tray to anchor, books for height, one tall organic piece, one low sculptural piece and candles for glow. We styled the same table three ways, everyday, fall and Christmas, by keeping the base and swapping only two or three seasonal finds. Books are plain hardcovers you already own; everything else is linked below.",
    "image": "assets/pins/how-to-style-a-coffee-table.jpg",
    "imageAlt": "How to style a coffee table like a designer: a white oak coffee table in front of a cream linen sofa, styled with an acacia wood tray holding a white wave candle holder with ivory tapers and a wood chain link, a rustic cream vase of olive branches, a fluted bowl on two linen books and travertine coasters.",
    "related": [
      "cozy-living-room-decor-from-amazon",
      "cozy-fall-decor-from-amazon",
      "neutral-christmas-decor-from-amazon"
    ],
    "products": [
      {
        "name": "Acacia wood serving tray",
        "note": "Step 1, the anchor: warm grain and cutout handles corral the small pieces.",
        "image": "assets/products/B08M68WY4F.jpg",
        "link": "B08M68WY4F"
      },
      {
        "name": "Rustic cream ceramic vase",
        "note": "Step 3: a wide, chalky vase that looks like an antique find and holds every season's stems.",
        "image": "assets/products/B0D4V62XSN.jpg",
        "link": "B0D4V62XSN"
      },
      {
        "name": "Faux olive branches",
        "note": "The everyday stems: airy and gray-green, they give the table its tallest point.",
        "image": "assets/products/B07R21HCMT.jpg",
        "link": "B07R21HCMT"
      },
      {
        "name": "Fluted decorative bowl",
        "note": "Step 4: a scalloped, sculptural bowl that looks best left empty on a stack of books.",
        "image": "assets/products/B0D3HH27MW.jpg",
        "link": "B0D3HH27MW"
      },
      {
        "name": "Wood chain link decor",
        "note": "The everyday object on the tray: a carved wood link that adds a soft curve.",
        "image": "assets/products/B0D5CGQ52M.jpg",
        "link": "B0D5CGQ52M"
      },
      {
        "name": "Marble wave taper candle holder",
        "note": "Step 5: a sculptural wave that holds two tapers like a gallery piece.",
        "image": "assets/products/B0DLKKJYMB.jpg",
        "link": "B0DLKKJYMB"
      },
      {
        "name": "Ivory taper candles",
        "note": "Plain ivory tapers for the wave holder; light them for fall and the holidays.",
        "image": "assets/products/B0FFW8WPNJ.jpg",
        "link": "B0FFW8WPNJ"
      },
      {
        "name": "Travertine coasters, set of 4",
        "note": "Natural stone texture in the corner of the table, and useful too.",
        "image": "assets/products/B09L42TT2L.jpg",
        "link": "B09L42TT2L"
      },
      {
        "name": "Cream faux pumpkins, set of 7",
        "note": "Fall swap: three on the tray in place of the wood link, one tiny one beside it.",
        "image": "assets/products/B0C6GGX5QV.jpg",
        "link": "B0C6GGX5QV"
      },
      {
        "name": "Natural dried wheat bundles",
        "note": "Fall swap: golden wheat in the same vase instead of the olive branches.",
        "image": "assets/products/B0CYLYT469.jpg",
        "link": "B0CYLYT469"
      },
      {
        "name": "Cotton cable knit throw blanket",
        "note": "Fall swap: an ivory knit draped over the sofa arm warms up the whole scene.",
        "image": "assets/products/B07TFDLKSX.jpg",
        "link": "B07TFDLKSX"
      },
      {
        "name": "Faux pine stems",
        "note": "Holiday swap: soft pine sprigs in the vase instead of the olive branches.",
        "image": "assets/products/B07HSZWKGP.jpg",
        "link": "B07HSZWKGP"
      },
      {
        "name": "Mini bottle brush trees",
        "note": "Holiday swap: three cream trees in three heights on the tray.",
        "image": "assets/products/B081H3GQWV.jpg",
        "link": "B081H3GQWV"
      },
      {
        "name": "Wood bead garland",
        "note": "Holiday swap: one loose loop across the tray, trailing over the table edge.",
        "image": "assets/products/B08JHWSCRW.jpg",
        "link": "B08JHWSCRW"
      },
      {
        "name": "Brass bells, set of 3",
        "note": "Holiday swap: three sizes grouped in front of the books for a warm metal note.",
        "image": "assets/products/B0B7M6H1BD.jpg",
        "link": "B0B7M6H1BD"
      }
    ],
    "sections": [
      {
        "h": "Step 1: Anchor with a tray",
        "body": [
          "Start in the middle of the table with a wood tray. It gathers the small pieces into one group, so the table reads calm instead of cluttered, and you can lift everything off in one move."
        ],
        "image": {
          "src": "assets/styling/how-to-style-a-coffee-table-step1.jpg",
          "w": 1200,
          "h": 800,
          "alt": "Close-up of the acacia wood tray on the oak coffee table, holding a white wave candle holder with two ivory tapers, with a wood chain link and travertine coasters beside it"
        }
      },
      {
        "h": "Step 2: Stack books for height",
        "body": [
          "Two or three plain hardcover books (linen or cream covers, spines turned in) create a second level. Set a bowl or small object on top so your eye moves up and down the table."
        ],
        "image": {
          "src": "assets/styling/how-to-style-a-coffee-table-step2.jpg",
          "w": 1200,
          "h": 800,
          "alt": "Close-up of two linen-covered hardcover books stacked on the coffee table with an empty fluted bowl on top and travertine coasters beside them"
        }
      },
      {
        "h": "Step 3: Add one tall organic piece",
        "body": [
          "One wide vase with loose branches gives the table its tallest point. Keep it to one side and let the stems lean a little: real-looking faux branches last all year."
        ],
        "image": {
          "src": "assets/styling/how-to-style-a-coffee-table-step3.jpg",
          "w": 1200,
          "h": 800,
          "alt": "Close-up of a rustic cream ceramic vase with loose faux olive branches at one end of the coffee table"
        }
      },
      {
        "h": "Step 4: Set a low sculptural piece",
        "body": [
          "A fluted bowl or a carved wood link adds shape without blocking the view across the sofa. Leave the bowl empty: the ribs are the decoration."
        ],
        "image": {
          "src": "assets/styling/how-to-style-a-coffee-table-step4.jpg",
          "w": 1200,
          "h": 800,
          "alt": "Close-up of the fluted bowl on a stack of books with a carved wood chain link and travertine coasters on the tabletop"
        }
      },
      {
        "h": "Step 5: Add candles and texture",
        "body": [
          "Taper candles in a stone holder add height and glow, and travertine coasters bring a natural, tactile finish. Then check the rules: vary heights, group in odd numbers, mix wood, stone and ceramic."
        ],
        "image": {
          "src": "assets/styling/how-to-style-a-coffee-table-step5.jpg",
          "w": 1200,
          "h": 800,
          "alt": "Close-up of a white wave taper candle holder with two ivory tapers on the wood tray, with travertine coasters at the front of the table"
        }
      },
      {
        "h": "Way 1: Everyday",
        "body": [
          "Here is the same table three ways. Keep the tray, vase, fluted bowl, candle holder and tapers all year, and swap only two or three seasonal pieces.",
          "The base look: olive branches in the vase, the wood chain link on the tray, unlit ivory tapers, the fluted bowl on two books and travertine coasters in the corner."
        ],
        "list": [
          "**The everyday pieces:** faux olive branches, wood chain link decor, travertine coasters."
        ],
        "image": {
          "src": "assets/styling/how-to-style-a-coffee-table-everyday.jpg",
          "w": 1200,
          "h": 1324,
          "alt": "A white oak coffee table in front of a cream linen sofa, styled with an acacia wood tray holding a white wave candle holder with ivory tapers and a wood chain link, a rustic cream vase of olive branches, a fluted bowl on two linen books and travertine coasters."
        }
      },
      {
        "h": "Way 2: Fall",
        "body": [
          "Keep the tray, vase, bowl and candles. Swap the olive branches for dried wheat, put three cream pumpkins on the tray in place of the wood link, light the tapers and drape a knit throw over the sofa arm."
        ],
        "list": [
          "**Swap in:** natural dried wheat bundles, cream faux pumpkins, cotton cable knit throw blanket."
        ],
        "image": {
          "src": "assets/styling/how-to-style-a-coffee-table-fall.jpg",
          "w": 1200,
          "h": 1324,
          "alt": "The same coffee table styled for fall with dried wheat in the cream vase, cream pumpkins on the wood tray, lit ivory tapers and a cable knit throw on the sofa arm."
        }
      },
      {
        "h": "Way 3: Holiday",
        "body": [
          "Same base again. Pine stems go in the vase, three bottle brush trees take the tray, a wood bead garland loops across the front and brass bells sit in front of the books."
        ],
        "list": [
          "**Swap in:** faux pine stems, mini bottle brush trees, wood bead garland, brass bells."
        ],
        "image": {
          "src": "assets/styling/how-to-style-a-coffee-table-holiday.jpg",
          "w": 1200,
          "h": 1324,
          "alt": "The same coffee table styled for Christmas with pine stems in the cream vase, cream bottle brush trees on the wood tray, a wood bead garland, brass bells and lit ivory tapers."
        }
      },
      {
        "h": "What we used",
        "body": [
          "The base set first, then the fall and holiday swaps. The books are plain hardcovers you already own, so they are not linked."
        ],
        "picks": [
          "B08M68WY4F",
          "B0D4V62XSN",
          "B07R21HCMT",
          "B0D3HH27MW",
          "B0D5CGQ52M",
          "B0DLKKJYMB",
          "B0FFW8WPNJ",
          "B09L42TT2L"
        ]
      },
      {
        "h": "The fall swaps",
        "picks": [
          "B0CYLYT469",
          "B0C6GGX5QV",
          "B07TFDLKSX"
        ]
      },
      {
        "h": "The holiday swaps",
        "picks": [
          "B07HSZWKGP",
          "B081H3GQWV",
          "B08JHWSCRW",
          "B0B7M6H1BD"
        ]
      }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-mantle-decor-that-looks-expensive',
    title: 'Christmas Mantle Decor That Looks Expensive',
    category: 'home-finds',
    date: '2026-10-23',
    description: 'Christmas mantle decor that looks expensive, all from Amazon: faux cedar garland, knit stockings, brass candlesticks, a ceramic tree and bells.',
    intro: 'A Christmas mantle that looks designer comes down to a few layers: a loose, natural garland, matching knit stockings, candlelight at different heights and one or two vintage accents. These Amazon finds stay in a calm palette of cedar green, ivory, brass and mercury glass, so the fireplace feels cozy and collected instead of busy.',
    image: 'assets/pins/christmas-mantle-decor-that-looks-expensive.jpg',
    imageAlt: 'Collage of Christmas mantle decor from Amazon: faux cedar garland, khaki and ivory knit stockings, brass candlesticks with ivory tapers, a white ceramic Christmas tree, a cedar wreath, gold bells and mercury glass votives',
    products: [
      { name: 'Creative Co-Op faux cedar garland', note: 'A long, loose cedar garland with a natural drape that looks like fresh-cut greenery on the mantle.', image: 'assets/products/B08VW3SNX2.jpg', link: 'B08VW3SNX2' },
      { name: 'Real touch cypress cedar garland, set of 2', note: 'Two soft cypress and cedar strands with tiny pine cones for a full, layered mantle.', image: 'assets/products/B0F67H679V.jpg', link: 'B0F67H679V' },
      { name: 'National Tree Company pre-lit spruce garland', note: 'A full 9 ft spruce garland with lights built in for an easy glow.', image: 'assets/products/B00LKRMWEY.jpg', link: 'B00LKRMWEY' },
      { name: 'Khaki and ivory knit stockings, 6 pack', note: 'Cable knit stockings in two soft neutrals that look custom on any fireplace.', image: 'assets/products/B08L8RNZS5.jpg', link: 'B08L8RNZS5' },
      { name: 'Ivory white knit stockings, 4 pack', note: 'Chunky cream cable knit stockings for an all-white, cozy mantle.', image: 'assets/products/B07HY831LY.jpg', link: 'B07HY831LY' },
      { name: 'Gold stocking holders, set of 2', note: 'Heavy brick-style gold holders that sit flat on the mantle and hold full stockings.', image: 'assets/products/B0FD2S6FR7.jpg', link: 'B0FD2S6FR7' },
      { name: 'MantleClip gold stocking holders, 4 pack', note: 'Slim gold clips that grip the mantle edge with no weight on top.', image: 'assets/products/B001CEEEN2.jpg', link: 'B001CEEEN2' },
      { name: 'Brass taper candlestick holders', note: 'Slim brass candlesticks in staggered heights for that collected, candlelit look.', image: 'assets/products/B0H8BHCRLJ.jpg', link: 'B0H8BHCRLJ' },
      { name: 'Ivory taper candles, 20 pack', note: 'Tall dripless ivory tapers that make brass candlesticks look styled.', image: 'assets/products/B0FNVNRDF1.jpg', link: 'B0FNVNRDF1' },
      { name: 'White ceramic Christmas tree, pre-lit', note: 'A vintage-style glazed ceramic tree in soft white with tiny glowing bulbs.', image: 'assets/products/B0CKNJNGCJ.jpg', link: 'B0CKNJNGCJ' },
      { name: 'Frosted sisal bottle brush trees, 30 pieces', note: 'Mini frosted trees in green and gold to cluster at the ends of the mantle.', image: 'assets/products/B07SZNJCSB.jpg', link: 'B07SZNJCSB' },
      { name: 'Faux cedar wreath, 24 inch', note: 'A lush cedar wreath to hang above the mantle or lean against the wall.', image: 'assets/products/B0H7BLLRY6.jpg', link: 'B0H7BLLRY6' },
      { name: 'Kate Aspen gold ribbed votive holders', note: 'Ribbed gold glass votives that throw a warm flicker across the mantle.', image: 'assets/products/B0CBSL1N1R.jpg', link: 'B0CBSL1N1R' },
      { name: 'Antique silver mercury glass vase', note: 'A speckled silver cylinder that holds a few cedar sprigs or a pillar candle.', image: 'assets/products/B0145OJARU.jpg', link: 'B0145OJARU' },
      { name: 'Deco 79 gold cow bells, set of 3', note: 'Three gold bells on jute rope that add an old-world note to garland ends.', image: 'assets/products/B008J7JS3G.jpg', link: 'B008J7JS3G' },
      { name: 'Handmade rustic hanging bells', note: 'Aged gold bells on a knotted rope, the trending vintage mantle accent.', image: 'assets/products/B0CBBHNNC9.jpg', link: 'B0CBBHNNC9' },
      { name: 'Wooden taper candlestick holders', note: 'Turned wood candlesticks that warm up a neutral mantle.', image: 'assets/products/B0CRV78K3T.jpg', link: 'B0CRV78K3T' },
      { name: 'Rustic wooden pillar candle holders, set of 3', note: 'Three heights of turned wood holders for pillar candles.', image: 'assets/products/B0CPHY6H6L.jpg', link: 'B0CPHY6H6L' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-table-decor-ideas',
    title: 'Christmas Table Decor Ideas',
    category: 'hosting-recipes',
    date: '2026-10-23',
    description: 'Christmas table decor ideas from Amazon: gold taper holders, brass hurricanes, a dough bowl centerpiece, gold chargers, linen napkins and pears.',
    intro: 'A beautiful Christmas table starts in the middle: a garland of eucalyptus, candlelight at three heights and a few gilded pears or a dough bowl centerpiece. Gold chargers, natural linen napkins and small details like napkin rings and place cards finish each setting, so the table looks hosted, not bought.',
    image: 'assets/pins/christmas-table-decor-ideas.jpg',
    imageAlt: 'Collage of Christmas table decor from Amazon: eucalyptus garland, gold taper candle holders, brass hurricane candle holders, gold charger plates, gold faux pears, linen napkins, a wooden dough bowl and gold napkin rings',
    products: [
      { name: 'French gold taper candle holders, set of 6', note: 'Tall slim gold holders in three heights, the base of every candlelit table.', image: 'assets/products/B09NTHDNVZ.jpg', link: 'B09NTHDNVZ' },
      { name: 'Brass hurricane candle holders, set of 2', note: 'Glass domes on brass bases that keep pillar candles glowing all night.', image: 'assets/products/B0F6BSYPQZ.jpg', link: 'B0F6BSYPQZ' },
      { name: 'Dark acacia wood dough bowl', note: 'A hand-finished dough bowl for a centerpiece of greenery, pears or candles.', image: 'assets/products/B0CHN53HDF.jpg', link: 'B0CHN53HDF' },
      { name: 'Mie Creations wooden dough bowl', note: 'A long rustic bowl for an easy centerpiece filled with balls, fruit or greenery.', image: 'assets/products/B0B8NZB5S3.jpg', link: 'B0B8NZB5S3' },
      { name: 'Gold beaded charger plates, set of 6', note: 'Classic gold chargers with a beaded rim that make plain white plates look formal.', image: 'assets/products/B09BQGSL57.jpg', link: 'B09BQGSL57' },
      { name: 'Gold reef charger plates, set of 12', note: 'Textured gold chargers with a coral-like edge for a dramatic place setting.', image: 'assets/products/B0CJ975C9R.jpg', link: 'B0CJ975C9R' },
      { name: 'Ruvanti natural linen napkins, set of 12', note: 'Soft linen-blend napkins in a natural oat tone that look relaxed and expensive.', image: 'assets/products/B0DDCFN2PT.jpg', link: 'B0DDCFN2PT' },
      { name: 'Natural cotton linen dinner napkins, set of 12', note: 'Generous oat-toned napkins with hemstitched edges for a hotel-style table.', image: 'assets/products/B07DMQXDFY.jpg', link: 'B07DMQXDFY' },
      { name: 'Hammered gold napkin rings, set of 12', note: 'Simple hammered rings that pair with linen napkins.', image: 'assets/products/B09J5814CD.jpg', link: 'B09J5814CD' },
      { name: 'Gold reindeer napkin rings, set of 8', note: 'Leaping gold reindeer that add a festive touch to every place setting.', image: 'assets/products/B08HXWSG9P.jpg', link: 'B08HXWSG9P' },
      { name: 'Gold mercury glass votive holders', note: 'Speckled gold votives to scatter down the table for a warm glow.', image: 'assets/products/B08BJ6XJMS.jpg', link: 'B08BJ6XJMS' },
      { name: 'Gold faux pears, set of 6', note: 'Gilded pears to tuck into garland or a dough bowl for a classic holiday table.', image: 'assets/products/B09B1YQQ33.jpg', link: 'B09B1YQQ33' },
      { name: 'Faux brown pears, set of 6', note: 'Realistic russet pears for a natural, old-world centerpiece.', image: 'assets/products/B0CNXFM6PL.jpg', link: 'B0CNXFM6PL' },
      { name: 'Realistic faux figs, 8 pieces', note: 'Deep plum figs that bring rich color to a neutral table.', image: 'assets/products/B0D2TJWQC3.jpg', link: 'B0D2TJWQC3' },
      { name: 'Gold place card holders', note: 'Small gold ring holders for place cards, menus or table numbers.', image: 'assets/products/B0BMQ2J4D4.jpg', link: 'B0BMQ2J4D4' },
      { name: 'Winlyn faux silver dollar eucalyptus garland', note: 'A full eucalyptus garland to run down the center of the table.', image: 'assets/products/B083L7P3CK.jpg', link: 'B083L7P3CK' },
      { name: 'Seeded eucalyptus garland, 5.5 ft', note: 'A lighter, airy eucalyptus vine for layering with candles.', image: 'assets/products/B07MB3BTMG.jpg', link: 'B07MB3BTMG' },
      { name: 'Gold candle snuffer', note: 'A long-handled gold snuffer that ends the night without smoke on the linens.', image: 'assets/products/B0GR4VHJP5.jpg', link: 'B0GR4VHJP5' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'greenery-bedroom-ideas',
    title: 'Greenery Bedroom Ideas That Look Expensive',
    category: 'home-finds',
    date: '2026-10-23',
    description: 'Greenery bedroom ideas from Amazon: a faux olive tree, eucalyptus stems, trailing pothos, seagrass planters and sage green bedding that looks expensive.',
    intro: 'Greenery is the quickest way to make a bedroom feel calm and expensive. Start with one tall statement plant in a corner, like a faux olive tree or fiddle leaf fig, then repeat the green in small doses: eucalyptus on the nightstand, a trailing vine on a shelf and sage green in the bedding and pillows. Keep the rest soft and natural with white ceramic, seagrass, linen and pale oak so the room reads organic and modern, never cluttered. Every piece here is faux or low-maintenance, so it stays green all year.',
    image: 'assets/pins/greenery-bedroom-ideas.jpg',
    imageAlt: 'Collage of greenery bedroom ideas from Amazon: faux olive tree, faux fiddle leaf fig, eucalyptus stems in a glass vase, hanging pothos, seagrass basket, fluted planter, sage green sheets, sage stripe pillow covers and a sage throw',
    products: [
      { name: 'Faux olive tree, 5 ft', note: 'A lifelike olive tree in a white pot that softens a bedroom corner instantly.', image: 'assets/products/B0H458P862.jpg', link: 'B0H458P862' },
      { name: 'Faux fiddle leaf fig tree, 5 ft', note: 'Big sculptural leaves for a statement corner, no watering needed.', image: 'assets/products/B0FNCPWZ7B.jpg', link: 'B0FNCPWZ7B' },
      { name: 'Faux eucalyptus stems, 27 inch', note: 'Long stems to fill a floor vase or a tall jug beside the bed.', image: 'assets/products/B0FNJY25DS.jpg', link: 'B0FNJY25DS' },
      { name: 'Faux eucalyptus in a glass vase', note: 'A ready-made arrangement with faux water, sized for a nightstand.', image: 'assets/products/B0DS7T4JJZ.jpg', link: 'B0DS7T4JJZ' },
      { name: 'Hanging faux eucalyptus ivy in white pot', note: 'A trailing vine for a shelf or the top of a dresser.', image: 'assets/products/B0CXLZ6MS7.jpg', link: 'B0CXLZ6MS7' },
      { name: 'Retrograde faux pothos, 32 inch', note: 'Long silk pothos vines that look real draped from a high shelf.', image: 'assets/products/B0BN2H3PC2.jpg', link: 'B0BN2H3PC2' },
      { name: 'Mid century wood plant stand', note: 'A slim stand with a white top that lifts a plant beside the bed.', image: 'assets/products/B08TQWWS9X.jpg', link: 'B08TQWWS9X' },
      { name: 'Amazon Basics fluted ceramic planter', note: 'A ribbed white planter that looks like a boutique piece.', image: 'assets/products/B0BGGJYM3T.jpg', link: 'B0BGGJYM3T' },
      { name: 'D\'vine Dev terracotta pots, set of 3', note: 'Classic terracotta with saucers for small plants on a windowsill.', image: 'assets/products/B081RBYWX5.jpg', link: 'B081RBYWX5' },
      { name: 'Woven seagrass belly basket', note: 'A natural belly basket that hides a plain pot or holds a spare throw.', image: 'assets/products/B091V4NPPH.jpg', link: 'B091V4NPPH' },
      { name: 'Joeyan embossed glass bud vases, set of 3', note: 'Vintage-style green and amber bud vases for single stems.', image: 'assets/products/B0995X7DKZ.jpg', link: 'B0995X7DKZ' },
      { name: 'D\'vine Dev textured white ceramic vase', note: 'A tall matte vase for a few olive or eucalyptus stems.', image: 'assets/products/B0CHYGZZN8.jpg', link: 'B0CHYGZZN8' },
      { name: 'Sage green sateen sheet set, queen', note: 'Egyptian cotton sateen sheets in a soft sage that sets the calm tone.', image: 'assets/products/B075LYHCV4.jpg', link: 'B075LYHCV4' },
      { name: 'Sage stripe linen pillow covers, set of 2', note: 'Farmhouse stripe covers in sage and cream that pull the greenery in.', image: 'assets/products/B0F5QC3RLT.jpg', link: 'B0F5QC3RLT' },
      { name: 'Bedsure sage checkered throw blanket', note: 'A soft checkered fleece throw in sage for the foot of the bed.', image: 'assets/products/B0BPLFGJ3B.jpg', link: 'B0BPLFGJ3B' },
      { name: 'Small faux eucalyptus in cement pots, set of 2', note: 'Little potted eucalyptus for a nightstand or dresser.', image: 'assets/products/B0F8Q4KKZG.jpg', link: 'B0F8Q4KKZG' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'ralph-lauren-christmas-tree-look-for-less',
    title: 'Ralph Lauren Christmas Tree Look for Less',
    category: 'boho-dupes',
    date: '2026-10-23',
    description: 'Get the Ralph Lauren Christmas tree look for less with Amazon finds: tartan ribbon, red velvet bows, antiqued gold ornaments and a gold star.',
    intro: 'The classic Ralph Lauren Christmas tree is all tartan, red velvet, antique gold and a little lodge-style warmth. You can get the same rich, traditional look with these Amazon finds: wired plaid ribbon, oversized velvet bows, heirloom-style glass ornaments, berry picks, brass bells and a glittering gold star.',
    image: 'assets/pins/ralph-lauren-christmas-tree-look-for-less.jpg',
    imageAlt: 'Collage of Ralph Lauren Christmas tree look for less finds from Amazon: tartan wired ribbon, red velvet bows, antiqued gold and red glass ornaments, mercury glass ornaments, a nutcracker ornament, berry picks, pinecones, brass bells, plaid stockings and a gold star topper',
    products: [
      { name: 'Red and green tartan wired ribbon', note: 'A classic red, green and gold tartan with wired edges that holds big loops and cascades down the tree.', image: 'assets/products/B07HZ83M7N.jpg', link: 'B07HZ83M7N' },
      { name: 'Red velvet wired ribbon, 50 yards', note: 'Rich red velvet ribbon with wired edges for bows, garland tails and wrapping.', image: 'assets/products/B09LTJGYFB.jpg', link: 'B09LTJGYFB' },
      { name: 'Large red velvet bows with gold edge, set of 6', note: 'Oversized velvet bows with long tails and a thin gold trim, the signature of a classic tree.', image: 'assets/products/B08L8V2H19.jpg', link: 'B08L8V2H19' },
      { name: 'Antiqued gold glass ornaments', note: 'A mix of ribbed, swirled and pinecone shapes in a soft antique gold that looks heirloom.', image: 'assets/products/B09Y1KK376.jpg', link: 'B09Y1KK376' },
      { name: 'Gold and champagne glass ornament set', note: 'Glass balls and teardrops in gold, champagne and cream for an easy layered look.', image: 'assets/products/B0D7L2DG2H.jpg', link: 'B0D7L2DG2H' },
      { name: 'Champagne mercury glass ornaments, set of 8', note: 'Hand-finished mercury glass with a warm aged glow, the kind you find in a design shop.', image: 'assets/products/B09337KL6W.jpg', link: 'B09337KL6W' },
      { name: 'Antiqued red glass ornaments', note: 'Deep red glass ornaments in vintage shapes that pair with the gold set.', image: 'assets/products/B09Y18DQLG.jpg', link: 'B09Y18DQLG' },
      { name: 'Natural hanging pinecones', note: 'Real pinecones with strings that add a woodsy, lodge-style texture to the branches.', image: 'assets/products/B075Q98P4D.jpg', link: 'B075Q98P4D' },
      { name: 'Red berry picks with holly leaves', note: 'Glossy red berry clusters with green leaves to tuck between ornaments.', image: 'assets/products/B076P755NG.jpg', link: 'B076P755NG' },
      { name: 'Burgundy berry twig stems, 12 pack', note: 'Tall burgundy berry sprays that fill gaps and add a natural, collected look.', image: 'assets/products/B07JZ51G1Y.jpg', link: 'B07JZ51G1Y' },
      { name: 'Enamel nutcracker ornament', note: 'A metal nutcracker ornament in red, green and gold with sparkling crystal details.', image: 'assets/products/B0FKB91B13.jpg', link: 'B0FKB91B13' },
      { name: 'Gold glitter Bethlehem star topper', note: 'An 8 inch open-work star in gold glitter for a classic finish at the top.', image: 'assets/products/B0871NS3Y1.jpg', link: 'B0871NS3Y1' },
      { name: 'Red and black buffalo plaid stockings, 4 pack', note: 'Plaid stockings with plush cuffs for a cozy cabin mantel.', image: 'assets/products/B081536S28.jpg', link: 'B081536S28' },
      { name: 'Tartan plaid pillow covers, set of 2', note: 'Red, cream and green tartan covers that bring the same plaid to the sofa or a leather chair.', image: 'assets/products/B07K2DVZJ4.jpg', link: 'B07K2DVZJ4' },
      { name: 'Solid brass bells, set of 10', note: 'Small antique-finish brass bells to hang on the tree or tie onto gifts.', image: 'assets/products/B0BZ8348MS.jpg', link: 'B0BZ8348MS' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'christmas-kitchen-decor-that-looks-expensive',
    title: 'Christmas Kitchen Decor That Looks Expensive, Plus Bathroom Ideas',
    category: 'home-finds',
    date: '2026-10-23',
    description: 'Christmas kitchen decor that looks expensive, plus Christmas bathroom decor ideas: holiday tea towels, toile mugs, a Lenox jar and fir candles.',
    intro: 'The kitchen and the bathroom are the rooms guests actually use, so a few festive swaps go a long way. These Amazon finds keep it classic: plaid and holly tea towels, toile mugs, a Lenox candy jar, a Le Creuset crock and a lit garland for the kitchen, then pine tree hand towels, a fir candle and a mini tree for the bathroom.',
    image: 'assets/pins/christmas-kitchen-decor-that-looks-expensive.jpg',
    imageAlt: 'Collage of Christmas kitchen decor from Amazon: Lenox Holiday ornament candy jar, plaid and holly tea towels, toile winter mugs, Le Creuset utensil crock, glass cookie jar, round marble board, pre-lit garland and mini bottle brush trees',
    products: [
      { name: 'Plaid holiday tea towels, set of 3', note: 'Red tartan, green gingham and buffalo check towels with little cabin patches.', image: 'assets/products/B01C5JFF62.jpg', link: 'B01C5JFF62' },
      { name: 'Holly print tea towels, set of 2', note: 'Cotton tea towels with a soft holly and winterberry print.', image: 'assets/products/B07CZDKZYK.jpg', link: 'B07CZDKZYK' },
      { name: 'KitchenAid Albany kitchen towels, 4 pack', note: 'Paprika red and white towels in a crisp stripe that suit the season and beyond.', image: 'assets/products/B09BK667XG.jpg', link: 'B09BK667XG' },
      { name: 'Clear glass soap dispenser', note: 'A simple glass bottle with a brushed steel pump that looks cleaner than a store bottle.', image: 'assets/products/B07ZPQ9H8H.jpg', link: 'B07ZPQ9H8H' },
      { name: 'Toile winter wonderland mugs, set of 4', note: 'Red and white toile mugs with snowy village scenes and a scalloped rim.', image: 'assets/products/B07WP3LYJJ.jpg', link: 'B07WP3LYJJ' },
      { name: 'Winter white tree mug', note: 'A stoneware mug with a sketched Christmas tree in soft gray.', image: 'assets/products/B0C7RPNCQ6.jpg', link: 'B0C7RPNCQ6' },
      { name: 'Lenox Holiday ornament candy jar', note: 'A cream porcelain ornament-shaped jar with the classic holly band and gold trim.', image: 'assets/products/B088GH7T8P.jpg', link: 'B088GH7T8P' },
      { name: 'Glass cookie jar with lid, 1 gallon', note: 'A wide glass jar that turns holiday cookies into counter decor.', image: 'assets/products/B07CMNZB6H.jpg', link: 'B07CMNZB6H' },
      { name: 'Mini bottle brush trees, 24 pack', note: 'Frosted green mini trees on wood bases to line a windowsill or shelf.', image: 'assets/products/B07K7F2DDR.jpg', link: 'B07K7F2DDR' },
      { name: 'Pre-lit Christmas garland, 9 ft', note: 'A full battery-operated garland with ornaments and berries for open shelves or a range hood.', image: 'assets/products/B08HXMBP62.jpg', link: 'B08HXMBP62' },
      { name: 'Round white marble board', note: 'An 11 inch marble board for cookies, cheese or styling under a candle.', image: 'assets/products/B01DPLTJVG.jpg', link: 'B01DPLTJVG' },
      { name: 'Le Creuset white utensil crock', note: 'The glossy stoneware crock that makes wooden spoons look styled.', image: 'assets/products/B0FH75GNZ7.jpg', link: 'B0FH75GNZ7' },
      { name: 'Ribbed ceramic utensil holders, set of 2', note: 'Warm white ribbed crocks for spoons and whisks by the stove.', image: 'assets/products/B0CJ2H9J31.jpg', link: 'B0CJ2H9J31' },
      { name: 'White porcelain 3 tier serving tray', note: 'A tiered porcelain stand for cookies, coffee bar treats or holiday baking.', image: 'assets/products/B0D2V4XM3D.jpg', link: 'B0D2V4XM3D' },
      { name: 'Pine tree hand towels, 2 pack', note: 'Cream cotton towels with embroidered pines and raised snowflakes.', image: 'assets/products/B0FGJYR8R8.jpg', link: 'B0FGJYR8R8' },
      { name: 'Red checkered tree hand towels, 2 pack', note: 'Red and white jacquard towels with a checkerboard of little trees.', image: 'assets/products/B0FRMPF4CK.jpg', link: 'B0FRMPF4CK' },
      { name: 'Thymes Frasier Fir votive candle', note: 'The cult fir scent in a pine-printed glass that smells like a fresh-cut tree.', image: 'assets/products/B00YPP2UGI.jpg', link: 'B00YPP2UGI' },
      { name: 'Mini pre-lit Christmas tree, 2 ft', note: 'A small lit tabletop tree with berries and pinecones in a burlap base.', image: 'assets/products/B09D7B748X.jpg', link: 'B09D7B748X' },
      { name: 'Matte black ceramic soap dispenser', note: 'A sleek soft-touch dispenser that looks hotel-like next to the sink.', image: 'assets/products/B09TL711FR.jpg', link: 'B09TL711FR' },
      { name: 'Snowy bottle brush trees, set of 10', note: 'Four inch frosted trees for a vanity tray or the back of the toilet.', image: 'assets/products/B0B5W95PTR.jpg', link: 'B0B5W95PTR' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'simmer-pot-gift-ideas',
    title: 'Simmer Pot Gift Ideas: DIY Christmas Gift Jars',
    category: 'gift-guides',
    date: '2026-10-23',
    description: 'Simmer pot gift ideas from Amazon: dried orange slices, cinnamon sticks, cloves and cranberries in pretty glass jars, plus tags, twine and a mini pot.',
    intro: 'Simmer pot jars are the easiest homemade Christmas gift: they smell like the holidays, look beautiful on the counter and cost very little to make. Layer only dry, shelf-stable ingredients in a clean glass jar: dried orange slices, cinnamon sticks, star anise, whole cloves, a few bay leaves and dried cranberries (fresh fruit and herbs spoil in a jar). Close the lid, tie on a kraft tag with jute twine and write the directions: add the mix to 3 to 4 cups of water in a small saucepan, bring it to a gentle simmer on low, and top up the water as it reduces. Never leave a simmer pot unattended. Everything you need to make them, from the jars to the little enamel pot, is below.',
    image: 'assets/pins/simmer-pot-gift-ideas.jpg',
    imageAlt: 'Collage of simmer pot gift jar supplies from Amazon: glass jar with acacia wood lid, dried orange slices, Saigon cinnamon sticks, whole cloves, dried cranberries, cork lid mini jars, kraft tags, jute twine and a white enamel milk pot',
    products: [
      { name: 'Dried orange slices, 30 count', note: 'Whole dried orange wheels, the star of every simmer pot jar and pretty on a garland too.', image: 'assets/products/B09J3NYVD1.jpg', link: 'B09J3NYVD1' },
      { name: 'Dried blood orange slices', note: 'Deep ruby citrus slices that make a layered gift jar look festive.', image: 'assets/products/B0CYCMG4W3.jpg', link: 'B0CYCMG4W3' },
      { name: 'Slofoodgroup Saigon cinnamon sticks', note: 'Long, fragrant Vietnamese cinnamon quills for that warm holiday scent.', image: 'assets/products/B084L5DWY7.jpg', link: 'B084L5DWY7' },
      { name: 'Organic whole cloves', note: 'Hand-selected Sri Lankan cloves; a spoonful adds the classic spiced note.', image: 'assets/products/B08MCCM9GF.jpg', link: 'B08MCCM9GF' },
      { name: 'Dried cranberries, resealable bag', note: 'A handful of ruby cranberries adds color between the orange layers.', image: 'assets/products/B0GV13439M.jpg', link: 'B0GV13439M' },
      { name: 'Mini glass jars with cork lids, 12 pack', note: 'Small cork-top jars sized for one simmer pot mix each.', image: 'assets/products/B07QCN67QM.jpg', link: 'B07QCN67QM' },
      { name: 'Glass jar with acacia wood lid', note: 'A tall clear canister with a warm acacia lid for a generous, gift-ready mix.', image: 'assets/products/B0H2SBP39Q.jpg', link: 'B0H2SBP39Q' },
      { name: 'Scalloped round kraft tags with twine', note: 'Blank scalloped tags for writing the simmer directions by hand.', image: 'assets/products/B0116VGHMG.jpg', link: 'B0116VGHMG' },
      { name: 'Christmas tree kraft gift tags', note: 'Tree-shaped kraft tags with string, a sweet festive finish for each jar.', image: 'assets/products/B09JFXKV4N.jpg', link: 'B09JFXKV4N' },
      { name: 'Natural jute twine, 656 feet', note: 'Rustic twine to tie tags and cinnamon bundles around every lid.', image: 'assets/products/B00WHXQIJA.jpg', link: 'B00WHXQIJA' },
      { name: 'White enamel milk pot with wood handle', note: 'A small enamel saucepan made for simmering on the stove, and a lovely gift add-on.', image: 'assets/products/B076P9GB84.jpg', link: 'B076P9GB84' },
      { name: 'Clear glass simmer pot with lid', note: 'A stovetop glass pot that lets you watch the oranges and spices simmer.', image: 'assets/products/B09JP1VHD1.jpg', link: 'B09JP1VHD1' },
      { name: 'Cotton canvas drawstring bags, 50 pack', note: 'Natural cotton pouches for packing the dry mix in a bag instead of a jar.', image: 'assets/products/B07G4C9S7G.jpg', link: 'B07G4C9S7G' },
      { name: 'Kraft gift boxes with ribbon, 6 pack', note: 'Foldable kraft boxes with a brown satin ribbon for a jar plus a mini pot.', image: 'assets/products/B0FDB1G5VW.jpg', link: 'B0FDB1G5VW' },
      { name: 'Small kraft gift boxes with twine, 10 pack', note: 'Little 4 inch boxes that fit a small jar and a tag.', image: 'assets/products/B0DNKLBXVT.jpg', link: 'B0DNKLBXVT' }
    ]
  },
  // ---------------------------------------------------------------- RECIPE (draft)
  {
    "slug": "butter-board-with-honey-and-flaky-salt",
    "guide": true,
    "title": "Butter Board with Honey, Lemon and Flaky Salt",
    "seoTitle": "Butter Board Recipe: Small, Easy and Holiday-Ready",
    "category": "hosting-recipes",
    "date": "2026-10-23",
    "updated": "2026-10-23",
    "description": "A small butter board on marble: soft butter, honey, lemon zest, herbs and flaky salt. A 10-minute holiday appetizer, plus a Butter Bell trick for soft butter.",
    "intro": "A butter board is the lowest-effort appetizer that still looks like a styled table: soft butter, a few toppings and warm bread. We make ours small, on an 8-inch marble board, and keep a Butter Bell on the counter so there's always soft butter ready.",
    "image": "assets/pins/butter-board-with-honey-and-flaky-salt.jpg",
    "imageAlt": "Small butter board on a round white marble board: soft butter swoops with honey, lemon zest, pistachios, thyme and chili flakes, a gold spreader with a marble handle, an ivory Butter Bell crock, a glass honey pot and sliced baguette on a linen napkin",
    "related": [
      "baked-brie-with-honey-and-figs",
      "hostess-gifts-under-30",
      "housewarming-gifts-that-look-expensive"
    ],
    "products": [
      {
        "name": "Round white marble board, 8 inch",
        "note": "Just big enough for one stick of butter with an inch of marble showing around it, which is what makes it look deliberate.",
        "image": "assets/products/B01DPLTJWK.jpg",
        "link": "B01DPLTJWK"
      },
      {
        "name": "Butter Bell crock, ivory matte",
        "note": "Keeps about a stick of butter soft on the counter, sealed by a little cold water in the base, so the board takes ten minutes, not an hour.",
        "image": "assets/products/B000H47H0A.jpg",
        "link": "B000H47H0A"
      },
      {
        "name": "Marble handle cheese knife set of 6",
        "note": "Gold blades and white marble handles. The small spreader is the butter knife.",
        "image": "assets/products/B091F3XX21.jpg",
        "link": "B091F3XX21"
      },
      {
        "name": "Kilner glass honey pot with dipper",
        "note": "For extra honey at the table. The ribbed glass catches the light.",
        "image": "assets/products/B00TYL2VB2.jpg",
        "link": "B00TYL2VB2"
      },
      {
        "name": "White linen cocktail napkins, set of 12",
        "note": "Hemstitched 6-inch linen squares: under the bread, then in every guest's hand.",
        "image": "assets/products/B00RA53R9O.jpg",
        "link": "B00RA53R9O"
      }
    ],
    "sections": [
      {
        "h": "Why a small board",
        "body": [
          "A big butter board looks great for five minutes and then turns into a smeared mess. An 8-inch round holds one stick, which is about right for 4 to 6 people with bread, and it looks deliberate instead of leftover: swoops of butter, a few toppings and a lot of white marble showing."
        ]
      },
      {
        "h": "How to style it",
        "body": [
          "Think of it as a still life you can eat."
        ],
        "list": [
          "**Leave a border.** Keep the butter an inch in from the edge so the marble frames it.",
          "**Top in layers, not piles:** honey first, then zest, then herbs, then salt last so it stays crunchy.",
          "**Bread on the side,** on a linen napkin or in a basket, not on the board.",
          "**Put the Butter Bell next to it** with plain butter for refills. It also tells guests the butter is meant to be shared."
        ],
        "image": {
          "src": "assets/recipes/butter-board-with-honey-and-flaky-salt-overhead.jpg",
          "w": 1000,
          "h": 1250,
          "alt": "Overhead view of a butter board on a round white marble board with honey, lemon zest, pistachios, thyme and chili flakes, toasted baguette slices on a linen napkin, a glass honey pot and an ivory butter crock",
          "caption": "Butter in loose swoops, bread on the side, the Butter Bell ready for refills."
        }
      }
    ],
    "recipe": {
      "name": "Butter Board with Honey, Lemon and Flaky Salt",
      "summary": "One stick of soft butter on an 8-inch marble board, topped with honey, lemon zest, pistachios and herbs. Serves 4 to 6 with warm bread.",
      "yield": "4 to 6 servings",
      "yieldLabel": "4 to 6",
      "prepMin": 10,
      "cookMin": 0,
      "totalMin": 10,
      "category": "Appetizer",
      "cuisine": "American",
      "keywords": "butter board, butter board recipe, holiday appetizer, easy appetizer, butter board ideas",
      "images": [
        "assets/recipes/butter-board-with-honey-and-flaky-salt-hero.jpg",
        "assets/recipes/butter-board-with-honey-and-flaky-salt-overhead.jpg"
      ],
      "ingredients": [
        "1/2 cup (1 stick) good salted butter, softened",
        "1 tablespoon honey (or hot honey)",
        "Finely grated zest of 1/2 lemon",
        "1 tablespoon shelled pistachios, toasted and chopped",
        "1 teaspoon fresh thyme leaves or finely chopped chives",
        "Pinch of crushed red pepper flakes",
        "1/2 teaspoon flaky sea salt",
        "Warm baguette or crusty bread, sliced, for serving"
      ],
      "equipment": [
        "8-inch round marble board",
        "Small offset spatula or the back of a spoon",
        "Butter Bell crock (optional, for soft butter on demand)"
      ],
      "steps": [
        "Soften the butter until it spreads easily: 30 to 60 minutes on the counter, or use butter that's been living in a Butter Bell.",
        "Spoon the butter onto the board and spread it in loose swoops with the back of a spoon, leaving about an inch of marble showing around the edge.",
        "Drizzle with the honey, then zest the lemon right over the top.",
        "Scatter the pistachios, herbs and red pepper flakes. Finish with the flaky salt.",
        "Serve right away with warm bread and a small spreader, with the Butter Bell alongside for refills."
      ],
      "stepNames": [
        "Soften the butter",
        "Spread the butter on the board",
        "Add the honey and lemon zest",
        "Add the toppings and flaky salt",
        "Serve with warm bread"
      ],
      "notes": [
        "**Butter Bell.** The crock holds about one stick (125 g). Pour 1/3 cup of cold water into the base, pack the bell-shaped lid firmly with softened butter and set it back in the base. Butter Bell says to change the water every 2 to 3 days.",
        "**Protect the marble.** Marble is porous: butter can leave dark spots and lemon juice can etch it. Zest only (no juice on the board), and wash the board with warm soapy water as soon as the party's over, or line it with a round of parchment.",
        "**Make ahead.** Toast the nuts up to 3 days ahead. Spread and top the butter no more than an hour before guests arrive.",
        "**Leftovers.** Plan for it to be eaten within about 2 hours. Throw away butter that's been on the board (bread has been through it); don't scrape it back into the crock."
      ],
      "used": [
        "B01DPLTJWK",
        "B000H47H0A",
        "B091F3XX21",
        "B00TYL2VB2",
        "B00RA53R9O"
      ]
    },
    "faq": [
      {
        "q": "Is a butter board sanitary?",
        "a": "It is if guests use the spreader instead of swiping bread through the butter. Set out sliced bread and a small knife, keep the board small so it's finished in one sitting, and don't save what's left."
      },
      {
        "q": "Salted or unsalted butter?",
        "a": "Salted, or unsalted plus a little extra flaky salt. A cultured, European-style butter tastes best here."
      },
      {
        "q": "How far ahead can I make it?",
        "a": "Up to an hour. Any longer and the toppings sink into the butter and the zest dries out."
      }
    ],
    "note": "The Muse Shelf is not affiliated with Butter Bell or Kilner."
  },
  // ---------------------------------------------------------------- RECIPE (draft)
  {
    "slug": "infused-olive-oil-hostess-gift",
    "guide": true,
    "title": "Rosemary Chili Olive Oil: A Homemade Hostess Gift (Made Safely)",
    "seoTitle": "Homemade Infused Olive Oil Gift (Safe Method)",
    "category": "hosting-recipes",
    "date": "2026-10-23",
    "updated": "2026-10-23",
    "description": "Rosemary chili olive oil as a hostess gift: dried aromatics, a marble mortar, a ceramic bottle and the food-safety rules most recipes skip.",
    "intro": "A bottle of homemade rosemary chili oil is a lovely hostess gift, as long as it's made safely. The CDC says homemade oils made with garlic or herbs belong in the fridge and should be thrown away after 4 days, so we make a small batch, tag it clearly, and offer a longer-lasting kit version too.",
    "image": "assets/pins/infused-olive-oil-hostess-gift.jpg",
    "imageAlt": "Cream speckled ceramic olive oil bottle with a steel pour spout, a white linen napkin tied at the neck with twine, a dried rosemary sprig and a blank kraft tag, next to a small marble mortar of crushed dried herbs and a dish of olive oil with bread",
    "related": [
      "hostess-gifts-under-30",
      "kitchen-counter-decor-that-looks-expensive",
      "housewarming-gifts-that-look-expensive"
    ],
    "products": [
      {
        "name": "Cream ceramic olive oil bottle, 20 oz",
        "note": "Opaque glazed ceramic keeps light off the oil, and the drip-free steel spout keeps the counter clean. Holds up to 2 1/2 cups.",
        "image": "assets/products/B0DZFHMT3W.jpg",
        "link": "B0DZFHMT3W"
      },
      {
        "name": "White marble mortar and pestle, 4 inch",
        "note": "A small 4-inch bowl with an unpolished inside that grips: right for cracking a tablespoon or two of dried herbs and spices.",
        "image": "assets/products/B0000VLP7Q.jpg",
        "link": "B0000VLP7Q"
      },
      {
        "name": "White linen cocktail napkins, set of 12",
        "note": "Wrap one around the bottle neck and tie it with twine: instant gift wrap.",
        "image": "assets/products/B00RA53R9O.jpg",
        "link": "B00RA53R9O"
      }
    ],
    "sections": [
      {
        "h": "Read this first: the safety part",
        "body": [
          "Homemade herb and garlic oils are a known botulism risk. The [CDC](https://www.cdc.gov/botulism/prevention/index.html) lists chopped garlic in oil among the sources of botulism, and its advice is simple: refrigerate homemade oils made with garlic or herbs and throw them away after 4 days.",
          "Warming the oil for a few minutes doesn't change that rule, and neither does using dried herbs. So we treat this as a fresh gift: a small batch, the fridge, and a use-by date on the tag."
        ],
        "list": [
          "**Dried aromatics only.** No fresh garlic, fresh herbs or fresh chiles in the bottle.",
          "**Strain them out** before bottling.",
          "**Refrigerate and use within 4 days.** Write it on the tag.",
          "**Want a gift that keeps?** Give the kit: plain olive oil in the bottle plus a little jar of the dried blend to stir into a dish of oil at the table."
        ]
      },
      {
        "h": "How to wrap it",
        "body": [
          "Cream ceramic bottle, a linen cocktail napkin wrapped around the neck and tied with kitchen twine, a sprig of dried rosemary tucked into the knot on the outside, and a plain tag: \"Rosemary chili oil. Keep refrigerated. Use by (date).\" It looks like a shop gift, and the tag does the safety talk for you.",
          "For the kit, fill the bottle with plain extra-virgin olive oil and tie on a small jar of the crushed dried blend with its own tag: \"Stir 1/2 teaspoon into a dish of oil, add flaky salt, dip bread.\""
        ],
        "image": {
          "src": "assets/recipes/infused-olive-oil-hostess-gift-overhead.jpg",
          "w": 1000,
          "h": 1250,
          "alt": "Overhead view of an olive oil gift kit: cream ceramic oil bottle wrapped with a linen napkin and twine, a cork-stoppered jar of dried herb and chili blend, a blank kraft tag, a marble mortar with the crushed blend and a dish of olive oil with bread",
          "caption": "The kit version: plain oil in the bottle, the dried blend in a jar, bread for dipping."
        }
      }
    ],
    "recipe": {
      "name": "Rosemary Chili Olive Oil",
      "summary": "A small batch of rosemary chili oil made with dried aromatics, strained and kept in the fridge. Use it within 4 days, or give the kit version.",
      "yieldTitle": "Makes",
      "yield": "About 1 cup",
      "yieldLabel": "1 cup",
      "prepMin": 10,
      "cookMin": 5,
      "totalMin": 45,
      "category": "Condiment",
      "cuisine": "Mediterranean",
      "keywords": "infused olive oil, rosemary chili oil, homemade hostess gift, diy food gift, flavored olive oil",
      "images": [
        "assets/recipes/infused-olive-oil-hostess-gift-hero.jpg",
        "assets/recipes/infused-olive-oil-hostess-gift-overhead.jpg"
      ],
      "ingredients": [
        "1 cup extra-virgin olive oil",
        "2 teaspoons dried rosemary",
        "1 teaspoon crushed red pepper flakes",
        "1 teaspoon black peppercorns",
        "1/2 teaspoon fennel seeds (optional)"
      ],
      "equipment": [
        "Small marble mortar and pestle",
        "Small saucepan",
        "Fine-mesh strainer and a coffee filter",
        "Small funnel",
        "20-ounce ceramic oil bottle, washed and completely dry"
      ],
      "steps": [
        "Wash the bottle and pourer the day before and let them dry completely.",
        "Lightly crush the rosemary, pepper flakes, peppercorns and fennel in the mortar, just enough to crack them and release the smell. A 4-inch mortar takes this amount in one go.",
        "Warm the oil and the crushed aromatics in a small saucepan over low heat for about 5 minutes, until tiny bubbles form around the herbs. Don't let it smoke or sizzle.",
        "Take it off the heat and let it steep for 30 minutes, until cool.",
        "Strain through a fine-mesh strainer lined with a coffee filter, then funnel into the bottle. Cap it, tag it with a use-by date 4 days out and refrigerate."
      ],
      "stepNames": [
        "Clean and dry the bottle",
        "Crush the aromatics",
        "Warm the oil with the aromatics",
        "Steep until cool",
        "Strain, bottle and refrigerate"
      ],
      "notes": [
        "**Storage.** Keep it in the fridge and use it within 4 days ([CDC guidance](https://www.cdc.gov/botulism/prevention/index.html) for homemade oils made with garlic or herbs). Olive oil turns cloudy and thick when cold; 20 minutes on the counter brings it back.",
        "**Why only 1 cup?** It has to be used within 4 days, so a small batch is the right size. The 20-ounce bottle holds up to 2 1/2 cups, plenty for the kit version.",
        "**The kit version (keeps longer).** Fill the bottle with plain extra-virgin olive oil. Crush a double batch of the dried blend in the mortar and pack it in a small airtight jar with a tag: \"Stir 1/2 teaspoon into a dish of oil, add flaky salt, dip bread.\" Unopened store-bought olive oil keeps to its best-by date in a cool, dark cupboard.",
        "**Never** add fresh garlic, fresh herbs or fresh chiles to oil you keep at room temperature, and don't top up the bottle with more aromatics later.",
        "**Hand-wash the bottle** and let it air-dry completely before refilling."
      ],
      "used": [
        "B0DZFHMT3W",
        "B0000VLP7Q",
        "B00RA53R9O"
      ]
    },
    "faq": [
      {
        "q": "Can I leave a rosemary sprig in the bottle? It looks so pretty.",
        "a": "Only if the oil lives in the fridge and is used within 4 days, the same rule as the rest of the batch. For a gift, tuck the sprig into the twine on the outside instead."
      },
      {
        "q": "Can I use fresh garlic?",
        "a": "Only in oil you'll use right away or keep in the fridge for up to 4 days. Never store garlic in oil at room temperature."
      },
      {
        "q": "How long does the kit last?",
        "a": "Sealed olive oil keeps until its best-by date in a cool, dark cupboard. The dried blend keeps its flavor for several months in an airtight jar."
      }
    ],
    "note": "Food-safety guidance from the CDC (Botulism Prevention). The Muse Shelf is not affiliated with vancasso or Fox Run."
  },
  // ---------------------------------------------------------------- RECIPE (draft)
  {
    "slug": "homemade-herb-salt",
    "guide": true,
    "title": "Homemade Herb Salt with Rosemary, Thyme and Lemon",
    "seoTitle": "Homemade Herb Salt Recipe (Rosemary, Thyme, Lemon)",
    "category": "hosting-recipes",
    "date": "2026-10-23",
    "updated": "2026-10-23",
    "description": "Homemade herb salt with rosemary, thyme, sage and lemon zest, pounded in a marble mortar and kept in a marble salt cellar. Ten minutes, plus drying time.",
    "intro": "Herb salt is the easiest way to make a weeknight dinner taste like a restaurant one, and a marble salt cellar by the stove makes it the prettiest thing on the counter. Pound fresh herbs into coarse salt, let it dry, and it keeps for up to 2 months.",
    "image": "assets/pins/homemade-herb-salt.jpg",
    "imageAlt": "White marble salt cellar filled with coarse green herb salt, its lid beside it, a small marble mortar and pestle with pounded herbs and salt, fresh rosemary, thyme and sage, half a lemon and a linen napkin on an oak board",
    "related": [
      "kitchen-counter-decor-that-looks-expensive",
      "hostess-gifts-under-30",
      "infused-olive-oil-hostess-gift"
    ],
    "products": [
      {
        "name": "Marble salt cellar with lid, 3 inch",
        "note": "3 inches across and 3 inches tall with a lid: a small, solid marble cellar for herb salt by the stove.",
        "image": "assets/products/B0BH8XG2Y3.jpg",
        "link": "B0BH8XG2Y3"
      },
      {
        "name": "White marble mortar and pestle, 4 inch",
        "note": "Its unpolished inside grips herbs and salt, and it's heavy enough not to slide while you pound.",
        "image": "assets/products/B0000VLP7Q.jpg",
        "link": "B0000VLP7Q"
      },
      {
        "name": "White linen cocktail napkins, set of 12",
        "note": "Tie one around a jar of herb salt for a hostess gift.",
        "image": "assets/products/B00RA53R9O.jpg",
        "link": "B00RA53R9O"
      }
    ],
    "sections": [
      {
        "h": "Why make it by hand",
        "body": [
          "The mortar bruises the herbs into the salt so their oils tint it pale green and flavor every grain. A food processor is faster, but a 4-inch mortar is the right size for a small batch, and a small batch is about what a 3-inch salt cellar holds."
        ]
      },
      {
        "h": "Where to use it",
        "list": [
          "On roast chicken, potatoes and vegetables before they go in the oven.",
          "Pinched over sliced tomatoes, avocado toast or fried eggs.",
          "On the rim of a Bloody Mary.",
          "As a hostess gift: a small jar with a linen napkin tied around the lid."
        ],
        "image": {
          "src": "assets/recipes/homemade-herb-salt-overhead.jpg",
          "w": 1000,
          "h": 1250,
          "alt": "Overhead view of herb salt being made: green herb salt drying on a parchment-lined tray, a marble mortar with herbs pounded into coarse salt, a marble salt cellar filled with herb salt, a bowl of kosher salt, lemon zest and fresh herbs",
          "caption": "Pound, mix, spread out to dry, then fill the cellar."
        }
      }
    ],
    "recipe": {
      "name": "Homemade Herb Salt",
      "summary": "Fresh rosemary, thyme and sage pounded into coarse salt with lemon zest, then air-dried for 1 to 2 days. Enough to fill a 3-inch salt cellar, with a little left for a jar.",
      "yieldTitle": "Makes",
      "yield": "About 1/2 cup",
      "yieldLabel": "1/2 cup",
      "prepMin": 10,
      "cookMin": 0,
      "totalMin": 10,
      "category": "Condiment",
      "cuisine": "Italian",
      "keywords": "herb salt, homemade herb salt, rosemary salt, Tuscan herb salt, diy food gift",
      "images": [
        "assets/recipes/homemade-herb-salt-hero.jpg",
        "assets/recipes/homemade-herb-salt-overhead.jpg"
      ],
      "ingredients": [
        "1/2 cup coarse kosher salt or coarse sea salt",
        "2 tablespoons fresh rosemary leaves",
        "1 tablespoon fresh thyme leaves",
        "4 fresh sage leaves",
        "Finely grated zest of 1 lemon",
        "1/4 teaspoon freshly ground black pepper"
      ],
      "equipment": [
        "4-inch marble mortar and pestle",
        "Small mixing bowl",
        "Rimmed baking sheet and parchment",
        "Marble salt cellar and a small airtight jar"
      ],
      "steps": [
        "Chop the rosemary, thyme and sage roughly with a knife.",
        "Put half the herbs in the mortar with 1 tablespoon of the salt and pound until the salt turns green and the herbs are fine. Tip into a small bowl and repeat with the rest of the herbs and another tablespoon of salt (a 4-inch mortar works best in two small batches).",
        "Stir the rest of the salt, the lemon zest and the pepper into the bowl.",
        "Spread the salt thinly on a parchment-lined baking sheet and let it air-dry for 1 to 2 days, stirring now and then, until completely dry. In a hurry? Dry it in the oven at its lowest setting, stirring every 10 minutes, until it feels dry to the touch.",
        "Break up any clumps with the pestle. Fill the salt cellar and keep the rest in an airtight jar."
      ],
      "stepNames": [
        "Chop the herbs",
        "Pound the herbs with salt",
        "Stir in the zest and pepper",
        "Dry the herb salt",
        "Break up clumps and store"
      ],
      "notes": [
        "**Storage.** Keep the dried salt airtight at room temperature and use it within about 2 months (the window Bon Appetit gives for its fresh-herb salt). The color fades before the flavor does.",
        "**The cellar isn't airtight.** It holds about 3 1/2 ounces, so keep a small amount in it and refill from the jar, so humidity doesn't clump the whole batch.",
        "**Dried-herb shortcut.** Make it with dried rosemary, thyme or oregano instead: no drying needed, and Bon Appetit's dried-herb version keeps for about 6 months.",
        "**Marble care.** Wipe the mortar right away: herb oils can stain marble and lemon can etch it."
      ],
      "used": [
        "B0BH8XG2Y3",
        "B0000VLP7Q",
        "B00RA53R9O"
      ]
    },
    "faq": [
      {
        "q": "Why does it need to dry?",
        "a": "Fresh herbs and zest add moisture. Drying keeps the salt from clumping and helps it hold its color and flavor."
      },
      {
        "q": "Which salt works best?",
        "a": "Coarse kosher or flaky sea salt. Fine table salt turns pasty."
      },
      {
        "q": "Can I add garlic?",
        "a": "Use 1/2 teaspoon garlic powder, not fresh garlic, so the salt stays dry."
      }
    ],
    "note": "Adapted from Bon Appetit's herb salts. The Muse Shelf is not affiliated with Marblous Krafts or Fox Run."
  },
  // ---------------------------------------------------------------- RECIPE (draft)
  {
    "slug": "baked-brie-with-honey-and-figs",
    "guide": true,
    "title": "Baked Brie with Honey and Figs",
    "seoTitle": "Baked Brie with Honey and Figs (Mini Cocotte Recipe)",
    "category": "hosting-recipes",
    "date": "2026-10-21",
    "updated": "2026-10-21",
    "description": "Baked brie with honey and figs, made in a Le Creuset mini cocotte: a 20-minute holiday appetizer that looks catered. Recipe, make-ahead tips and styling.",
    "intro": "A small brie baked in a mini cocotte is the easiest appetizer we know that still looks styled. The dish keeps the cheese molten and in one neat pool, so it holds up on the table instead of sliding across a board. Twenty minutes, start to finish.",
    "image": "assets/pins/baked-brie-with-honey-and-figs.jpg",
    "imageAlt": "Baked brie with honey, fresh figs, walnuts and thyme in a pale blue-green Le Creuset mini cocotte on a round white marble board, with crackers, toasted baguette, a glass honey pot and a white linen cocktail napkin",
    "related": [
      "hostess-gifts-under-30",
      "thanksgiving-table-decor-from-amazon",
      "kitchen-counter-decor-that-looks-expensive"
    ],
    "products": [
      {
        "name": "Le Creuset stoneware mini cocotte, 8 oz",
        "note": "Holds a mini brie with a little room to spare and goes straight from the oven to the table. Stoneware holds heat, so the cheese stays soft longer. Shown in Sea Salt.",
        "image": "assets/products/B08M5YNHGK.jpg",
        "link": "B08M5YNHGK"
      },
      {
        "name": "Round white marble board, 8 inch",
        "note": "Just big enough for the cocotte and a handful of crackers. Real marble with soft gray veining, and it stays put under a hot dish.",
        "image": "assets/products/B01DPLTJWK.jpg",
        "link": "B01DPLTJWK"
      },
      {
        "name": "Kilner glass honey pot with dipper",
        "note": "Put it on the table so guests can add more honey as they go. The ribbed glass looks lovely catching the light.",
        "image": "assets/products/B00TYL2VB2.jpg",
        "link": "B00TYL2VB2"
      },
      {
        "name": "Marble handle cheese knife set of 6",
        "note": "Gold spreaders and cutters with white marble handles. The small spreader is the one for baked brie.",
        "image": "assets/products/B091F3XX21.jpg",
        "link": "B091F3XX21"
      },
      {
        "name": "White linen cocktail napkins, set of 12",
        "note": "Hemstitched 6-inch linen squares. Honey happens, and these wash well.",
        "image": "assets/products/B00RA53R9O.jpg",
        "link": "B00RA53R9O"
      }
    ],
    "sections": [
      {
        "h": "Why bake it in a mini cocotte",
        "body": [
          "Baked brie is at its best in the first few minutes out of the oven, and at its worst after it has slumped across a sheet pan. Baking a small wheel in the dish you serve it in solves both problems. Stoneware holds heat, so the cheese stays scoopable longer, and the walls keep it in one neat, glossy pool.",
          "Size matters here. The Le Creuset mini cocotte holds 8 ounces and measures 5 1/2 inches across including the handles, so the bowl itself is only about 3 1/2 inches wide. That's right for a mini brie (4 to 4 1/2 ounces, about 125 grams), not a standard 8-ounce wheel. If you only find larger wheels, cut a wedge and trim it to fit."
        ]
      },
      {
        "h": "How to style the board",
        "body": [
          "Treat it like a still life: one hero, a few supporting pieces and some empty space."
        ],
        "list": [
          "**Set the cocotte slightly off center** on a small round marble board and tuck crackers and toasted baguette into the gap on one side. A crowded board reads busy. A half-empty one reads intentional.",
          "**Keep the palette quiet.** The cocotte's pale sea-salt glaze, the gray veining in the marble and white linen do the calm part; figs and honey bring the only warm notes.",
          "**Put the honey on the table,** not just on the cheese. A glass honey pot with a dipper lets guests add more and catches the light.",
          "**One small knife, handle out,** and a stack of cocktail napkins nearby. Then step away from the board."
        ],
        "image": {
          "src": "assets/recipes/baked-brie-with-honey-and-figs-overhead.jpg",
          "w": 1000,
          "h": 1250,
          "alt": "Overhead view of baked brie with figs and honey in a pale blue-green mini cocotte on a white marble board, surrounded by crackers, toasted baguette slices, a glass honey pot, gold cheese knives and a linen napkin",
          "caption": "Crackers on one side, baguette on the other, honey within reach."
        }
      }
    ],
    "recipe": {
      "name": "Baked Brie with Honey and Figs",
      "summary": "One mini brie, baked in a mini cocotte and topped with figs, walnuts and thyme. Make one for every 2 to 4 guests.",
      "yield": "2 to 4 servings",
      "yieldLabel": "2 to 4",
      "prepMin": 5,
      "cookMin": 15,
      "totalMin": 20,
      "category": "Appetizer",
      "cuisine": "American",
      "keywords": "baked brie, baked brie with honey, baked brie with figs, mini cocotte recipe, holiday appetizer, easy party appetizer",
      "images": [
        "assets/recipes/baked-brie-with-honey-and-figs-hero.jpg",
        "assets/recipes/baked-brie-with-honey-and-figs-overhead.jpg"
      ],
      "ingredients": [
        "1 mini brie, 4 to 4 1/2 ounces (about 125 g), cold from the fridge",
        "1 1/2 tablespoons honey, divided, plus more for serving",
        "2 fresh figs, quartered (or 3 dried figs, sliced)",
        "1 tablespoon walnuts or pecans, toasted and chopped",
        "2 or 3 small sprigs fresh thyme",
        "Flaky sea salt and freshly ground black pepper",
        "Crackers and toasted baguette slices, for serving"
      ],
      "equipment": [
        "8-ounce stoneware mini cocotte",
        "Small baking sheet"
      ],
      "steps": [
        "Heat the oven to 350°F. Unwrap the brie and set it in the mini cocotte. It should sit flat with a little room around the edge; if it's snug, trim the side.",
        "With a small sharp knife, score a shallow crosshatch into the top rind, cutting just through the rind. Drizzle with 1 teaspoon of the honey.",
        "Set the cocotte, lid off, on a small baking sheet and bake for 12 to 15 minutes, until the edges bubble and the center feels very soft when you press it gently with a spoon.",
        "Let it rest for 3 minutes. Top with the figs and nuts, drizzle with the rest of the honey, then add thyme leaves, a pinch of flaky salt and a little pepper.",
        "Set the cocotte on a marble board with crackers and baguette slices around it and the honey pot alongside. Serve right away, and warn guests that the dish is hot."
      ],
      "stepNames": [
        "Heat the oven and prep the brie",
        "Score the rind and drizzle with honey",
        "Bake until soft",
        "Rest and add the toppings",
        "Serve hot"
      ],
      "notes": [
        "**Size check.** The 8-ounce mini cocotte is about 3 1/2 inches across inside. A mini brie fits; a standard 8-ounce wheel (about 4 1/2 inches) doesn't. For a bigger wheel, bake it on a parchment-lined sheet pan or in a small baking dish just wider than the cheese, at 350°F, until the center is very soft (about 10 minutes on a sheet pan, 15 to 20 in a dish).",
        "**Make ahead.** Up to 1 day ahead, score the brie, set it in the cocotte, cover with the lid and refrigerate. Let the dish sit on the counter while the oven heats, then bake as written, adding 2 to 3 minutes. Toast the nuts and the baguette slices up to 2 days ahead and keep them airtight.",
        "**For a crowd.** Bake one cocotte for every 2 to 4 guests, all on the same sheet pan. The timing doesn't change.",
        "**Keeping it warm.** It stays scoopable for about 15 minutes. To rewarm, return the cocotte to a 350°F oven for 3 to 5 minutes.",
        "**Food safety.** Don't leave it out for more than 2 hours. Cover leftovers with the lid, refrigerate and eat within 3 to 4 days."
      ],
      "used": [
        "B08M5YNHGK",
        "B01DPLTJWK",
        "B00TYL2VB2",
        "B091F3XX21",
        "B00RA53R9O"
      ]
    },
    "faq": [
      {
        "q": "Can I use a regular 8-ounce brie?",
        "a": "Not in this dish. An 8-ounce wheel is about 4 1/2 inches across and won't fit the 8-ounce mini cocotte. Bake it on a parchment-lined sheet pan (about 10 minutes at 350°F) or in a small baking dish just wider than the cheese (15 to 20 minutes), then add the same toppings."
      },
      {
        "q": "Do you eat the rind?",
        "a": "Yes, the rind is edible. Scoring it just makes the cheese easier to scoop. If you want a fully open top, put the brie in the freezer for 20 to 30 minutes first and slice the top rind off; it comes away cleanly when the cheese is very cold."
      },
      {
        "q": "What can I use instead of fresh figs?",
        "a": "Fresh figs are easiest to find in late summer and fall. Around the holidays, use 3 or 4 dried figs, sliced, or spread a spoonful of fig jam over the brie before it bakes. Thin pear slices are good too."
      }
    ],
    "note": "The Muse Shelf is not affiliated with Le Creuset or Kilner."
  },
  // ---------------------------------------------------------------- GUIDE (draft)
  {
    "slug": "pottery-barn-christmas-dupes",
    "guide": true,
    "title": "Pottery Barn Christmas Dupes That Look Like the Catalog",
    "seoTitle": "Pottery Barn Christmas Dupes on Amazon (Neutral, Not Cheap)",
    "category": "home-finds",
    "date": "2026-10-21",
    "updated": "2026-10-21",
    "description": "Pottery Barn Christmas dupes on Amazon: velvet stockings, faux cedar garland, mercury glass, brass bells and the styling that makes them look like the catalog.",
    "intro": "The Pottery Barn Christmas look isn't about one product. It's a formula: layered greenery, velvet, warm brass and a lot of candlelight. Here's how to build it with Amazon pieces, and the styling that makes them look like the catalog instead of a box of decorations.",
    "image": "assets/pins/pottery-barn-christmas-dupes.jpg",
    "imageAlt": "Collage of Pottery Barn Christmas dupes from Amazon: cream cable knit and green velvet stockings, cedar garland, pre-lit pine wreath, mercury glass trees and votives, brass bells, brass taper holders, ivory tapers, champagne ornaments and a capiz star topper on a linen background",
    "related": [
      "neutral-christmas-decor-from-amazon",
      "amazon-christmas-tree-decor-that-looks-expensive",
      "thanksgiving-table-decor-from-amazon"
    ],
    "products": [
      {
        "name": "Real-touch cedar garland, 9 ft",
        "note": "Soft, drooping cedar tips that look freshly cut. Buy two for a standard mantel and twist them together.",
        "image": "assets/products/B0F3CJ8DRZ.jpg",
        "link": "B0F3CJ8DRZ"
      },
      {
        "name": "Faux pine stems",
        "note": "Tuck them into thin spots in the garland or the wreath, or put a handful in a vase on the console.",
        "image": "assets/products/B07HSZWKGP.jpg",
        "link": "B07HSZWKGP"
      },
      {
        "name": "Green velvet stocking, 20 in",
        "note": "Deep green velvet with a gold trim: the classic catalog stocking.",
        "image": "assets/products/B08JKK534W.jpg",
        "link": "B08JKK534W"
      },
      {
        "name": "Cream cable knit stocking",
        "note": "Chunky ivory knit to alternate with the velvet ones.",
        "image": "assets/products/B0D8VK8GG9.jpg",
        "link": "B0D8VK8GG9"
      },
      {
        "name": "MantleClip stocking holders, 4 pack",
        "note": "They clip onto mantels up to 3 inches thick and hold full stockings without screws or heavy bases.",
        "image": "assets/products/B001CEEEN2.jpg",
        "link": "B001CEEEN2"
      },
      {
        "name": "Champagne ball ornaments, 30 pc",
        "note": "Shiny, matte and glitter finishes in one color family, so the tree looks planned.",
        "image": "assets/products/B07QXYN1H6.jpg",
        "link": "B07QXYN1H6"
      },
      {
        "name": "Dark green velvet ribbon, 1 in",
        "note": "Ten yards covers ribbon tails on a 7-foot tree. Cut the ends on an angle so they lie flat.",
        "image": "assets/products/B0FH4Z8PHN.jpg",
        "link": "B0FH4Z8PHN"
      },
      {
        "name": "Capiz star tree topper",
        "note": "Lights up with a soft, pearly glow that looks far warmer than glitter.",
        "image": "assets/products/B003DA5I0Q.jpg",
        "link": "B003DA5I0Q"
      },
      {
        "name": "Warm white fairy lights, 12 pack",
        "note": "Battery strands to weave through the garland, the wreath and glass jars, with no cords to hide.",
        "image": "assets/products/B07WG18RLT.jpg",
        "link": "B07WG18RLT"
      },
      {
        "name": "Ribbed gold mercury votives, set of 6",
        "note": "Vintage ribbed glass that throws a warm, flickering pattern. Group them in threes.",
        "image": "assets/products/B0CBSL1N1R.jpg",
        "link": "B0CBSL1N1R"
      },
      {
        "name": "Antique brass taper holders, set of 3",
        "note": "Three heights of aged brass for the table or the mantel.",
        "image": "assets/products/B0BV9XJF8Q.jpg",
        "link": "B0BV9XJF8Q"
      },
      {
        "name": "Ivory taper candles, 10 in",
        "note": "Unscented and dripless, so they won't compete with dinner.",
        "image": "assets/products/B0FQ34ZLQL.jpg",
        "link": "B0FQ34ZLQL"
      },
      {
        "name": "Mercury glass trees, set of 5",
        "note": "Silvery champagne glass trees that add height to a console without clutter.",
        "image": "assets/products/B0FMRB6MK4.jpg",
        "link": "B0FMRB6MK4"
      },
      {
        "name": "Brass bells, set of 3",
        "note": "Rustic bells to hang from the front door handle or the end of a garland.",
        "image": "assets/products/B0B7M6H1BD.jpg",
        "link": "B0B7M6H1BD"
      },
      {
        "name": "Pre-lit pine wreath, 24 in",
        "note": "Full, realistic and already lit. The right size for a standard front door.",
        "image": "assets/products/B08DP4XHMX.jpg",
        "link": "B08DP4XHMX"
      }
    ],
    "sections": [
      {
        "h": "The Pottery Barn Christmas formula",
        "body": [
          "Put a few catalog pages side by side and the same choices repeat. Once you see them, you can shop for the look instead of the label."
        ],
        "list": [
          "**Greenery that looks real:** cedar and pine with soft, drooping tips, layered thick.",
          "**One rich texture plus one cozy one:** velvet with cream cable knit, or velvet with a simple plaid.",
          "**Warm metals:** aged brass and mercury glass. Never bright silver tinsel.",
          "**A small palette:** deep green, cream and gold, with red as a single accent at most.",
          "**Warm white light everywhere:** fairy lights inside the greenery, candles on every surface."
        ],
        "after": [
          "Everything below fits that formula. If you only buy three things, make them the garland, the stockings and the votives."
        ]
      },
      {
        "h": "Stockings and the mantel",
        "body": [
          "The mantel is where this look lives or dies, and the secret is fullness. One thin garland draped across a mantel always looks store-bought. Two garlands twisted together, with loose stems tucked in, look like the real thing."
        ],
        "list": [
          "Lay the first garland along the mantel and let the ends hang 12 to 18 inches down each side.",
          "Twist the second one loosely over it so the tips point in different directions.",
          "Fluff every branch, bending the tips down and out. It takes about 20 minutes and makes the biggest difference of anything on this page.",
          "Fill thin spots with loose pine stems, then weave fairy lights deep inside the greenery, not on top of it."
        ],
        "picks": [
          "B0F3CJ8DRZ",
          "B07HSZWKGP",
          "B08JKK534W",
          "B0D8VK8GG9",
          "B001CEEEN2"
        ],
        "after": [
          "For stockings, mix instead of match: velvet and cream knit alternating looks collected over the years. Space them evenly with a hand's width between each. For an all-white version of this mantel, see our [neutral Christmas decor from Amazon](/neutral-christmas-decor-from-amazon/)."
        ]
      },
      {
        "h": "The tree",
        "body": [
          "Catalog trees use a tight palette, usually champagne, cream and gold with one deeper accent. Ribbon does more for a tree than any number of extra ornaments."
        ],
        "list": [
          "Pick two ornament finishes in one color family, like shiny and matte champagne, and add one textured accent.",
          "Skip tinsel. Cut velvet ribbon into 12 to 18 inch tails and tuck them vertically into the branches, or tie small bows about a foot apart.",
          "Choose a topper with a glow. A capiz or brass star looks warmer than a glittery plastic one.",
          "Light from the inside: push each strand toward the trunk so the tree glows instead of looking wrapped."
        ],
        "picks": [
          "B07QXYN1H6",
          "B0FH4Z8PHN",
          "B003DA5I0Q",
          "B07WG18RLT"
        ],
        "after": [
          "More ideas in our [Christmas tree decor that looks expensive](/amazon-christmas-tree-decor-that-looks-expensive/) edit."
        ]
      },
      {
        "h": "The table and the entry",
        "body": [
          "Candlelight is the cheapest way to make a room look like a photo shoot. Group mercury glass votives in odd numbers down the table, add brass taper holders at different heights, and use unscented ivory tapers so the food is what everyone smells.",
          "Mercury glass trees on a console or sideboard add height without taking up space, and a few brass bells on the front door handle are an old-fashioned touch guests always notice.",
          "For the door, a 22 to 24 inch wreath suits a standard 36-inch front door. Go bigger only on a double door or a very tall entry, and hang it with the center a little above eye level."
        ],
        "picks": [
          "B0CBSL1N1R",
          "B0BV9XJF8Q",
          "B0FQ34ZLQL",
          "B0FMRB6MK4",
          "B0B7M6H1BD",
          "B08DP4XHMX"
        ],
        "after": [
          "Hosting before December? Our [Thanksgiving table decor](/thanksgiving-table-decor-from-amazon/) edit uses the same candles-and-greenery idea for November."
        ]
      },
      {
        "h": "Buy now or wait?",
        "body": [
          "Buy the things that sell out first now. Realistic garlands, velvet stockings and anything in deep green velvet tend to disappear by early December, and restocks often arrive after the holiday. Candles, ornaments and fairy lights are easy to find until the last shipping week.",
          "Check the delivery date on each listing before you check out. Garlands and wreaths sometimes ship from far away and take longer than two days, so order them by mid-November if you want the mantel done by December 1.",
          "Shopping for someone else too? Our [gift guides](/gift-guides/) are organized by person and budget."
        ]
      }
    ],
    "faq": [
      {
        "q": "Are these Pottery Barn products?",
        "a": "No. These are Amazon pieces chosen because they create a similar look. The Muse Shelf isn't affiliated with Pottery Barn."
      },
      {
        "q": "How do I make a cheap garland look full?",
        "a": "Use two garlands per mantel, twist them together, fluff every tip and tuck in loose stems. Fairy lights woven deep inside hide the wire core."
      },
      {
        "q": "What colors are in the Pottery Barn Christmas look?",
        "a": "Deep green, cream and warm gold or brass, with natural textures like wood and knit. Red shows up as a single accent, such as a velvet ribbon or berries, not as the main color."
      }
    ],
    "note": "The Muse Shelf is not affiliated with Pottery Barn. Brand names are used only to describe a style."
  },
  // ---------------------------------------------------------------- GUIDE (draft)
  {
    "slug": "anthropologie-mirror-dupes",
    "guide": true,
    "title": "Anthropologie Mirror Dupes That Actually Look Real",
    "seoTitle": "Anthropologie Mirror Dupes That Actually Look Real (2026)",
    "category": "boho-dupes",
    "date": "2026-10-21",
    "updated": "2026-10-21",
    "description": "The best Anthropologie mirror dupes on Amazon, judged by a designer: Primrose-style arched gold mirrors, sizes that read luxe, and the details that look cheap.",
    "intro": "The arched gold mirror with a carved crest is one of the most copied pieces in home decor, and most copies give themselves away. Here is what makes the original look expensive, which Amazon versions get close, and how to hang or lean one so it looks custom.",
    "image": "assets/pins/anthropologie-mirror-dupes.jpg",
    "imageAlt": "Collage of Anthropologie mirror dupes from Amazon: two tall arched gold floor mirrors with carved crests, an arched crest wall mirror, three ornate oval gold mirrors and two small vintage tabletop mirrors on a linen background",
    "related": [
      "anthropologie-dupes-on-amazon",
      "amazon-entryway-decor-that-looks-expensive",
      "boho-bedroom-amazon-finds"
    ],
    "products": [
      {
        "name": "Baroque floor mirror, 22 x 65 in",
        "note": "The tallest, slimmest arch here, with a carved crown and a brushed gold frame. Tall enough to lean in a room with standard 8-foot ceilings.",
        "image": "assets/products/B0D6VP1KM6.jpg",
        "link": "B0D6VP1KM6"
      },
      {
        "name": "Crowned arch floor mirror, 18 x 53 in",
        "note": "Narrower and shorter, so it suits a bedroom corner or a hallway. Hang it a few inches off the floor if you want it to read taller.",
        "image": "assets/products/B0D1C4PXDS.jpg",
        "link": "B0D1C4PXDS"
      },
      {
        "name": "Arched crest wall mirror",
        "note": "The closest Primrose-style crest in a wall size, about 18 x 28 inches. Made for the space over a console or a small dresser.",
        "image": "assets/products/B0BXNFG999.jpg",
        "link": "B0BXNFG999"
      },
      {
        "name": "Oval scroll mirror, about 20 x 15 in",
        "note": "A carved resin frame with real depth in the scrollwork. Hang it over a powder room sink or in the middle of a gallery wall.",
        "image": "assets/products/B0DPQJFC3M.jpg",
        "link": "B0DPQJFC3M"
      },
      {
        "name": "Antique gold oval scroll mirror",
        "note": "Open, lacy scrollwork that feels like a French flea-market find. The more romantic choice for a vanity wall.",
        "image": "assets/products/B0GZN6V7Q6.jpg",
        "link": "B0GZN6V7Q6"
      },
      {
        "name": "Queen Anne oval gold leaf mirror",
        "note": "A wood frame finished in gold leaf with a beveled glass edge. Quieter and more traditional than the carved styles, and it reads like an antique.",
        "image": "assets/products/B004SKOTF0.jpg",
        "link": "B004SKOTF0"
      },
      {
        "name": "Small vintage gold mirror, 11 x 9.5 in",
        "note": "Hangs or stands. Prop it on a bookshelf or a bathroom shelf for a small antique moment.",
        "image": "assets/products/B0DNQFNM2L.jpg",
        "link": "B0DNQFNM2L"
      },
      {
        "name": "Small arched tabletop mirror",
        "note": "A crowned vanity mirror on a stand for a dressing table. The frame is lightweight plastic: you are buying the look, not an heirloom.",
        "image": "assets/products/B0DMSNCG9B.jpg",
        "link": "B0DMSNCG9B"
      },
      {
        "name": "Gold leaf gilding wax",
        "note": "A fingertip of wax worked into the carving warms up gold that looks too bright and hides small scuffs.",
        "image": "assets/products/B00081HYDC.jpg",
        "link": "B00081HYDC"
      },
      {
        "name": "Gold leafing pen",
        "note": "For quick touch-ups on frame edges after shipping or a move.",
        "image": "assets/products/B003ZTNENS.jpg",
        "link": "B003ZTNENS"
      },
      {
        "name": "French cleat hanger, 100 lb",
        "note": "Holds a heavy mirror flat against the wall and perfectly level. Far more secure than a wire on a nail.",
        "image": "assets/products/B005PUC4KE.jpg",
        "link": "B005PUC4KE"
      },
      {
        "name": "Anti-tip furniture straps",
        "note": "Tether a leaning floor mirror to the wall. Invisible from the front, and worth it in any home with kids or pets.",
        "image": "assets/products/B086ZS4D3D.jpg",
        "link": "B086ZS4D3D"
      }
    ],
    "sections": [
      {
        "h": "What makes the Primrose mirror look expensive",
        "body": [
          "Before you shop, it helps to know exactly what you're looking at. The Anthropologie Gleaming Primrose mirror works because of four details, and every dupe on this page is judged against them."
        ],
        "list": [
          "**The crest.** A carved, scrolling crown sits on top of the arch and breaks the outline. Flat, stamped crests look like stickers; you want depth you can see from across the room.",
          "**The finish.** Antiqued gold with darker recesses, not a flat yellow metallic. Brushed or aged gold reads like old brass. Shiny gold reads like plastic.",
          "**The frame.** Slim, but with some depth. A frame that's too thin looks flimsy, and one that's too chunky looks like a hotel lobby.",
          "**The proportion.** A tall, narrow arch, close to three times taller than it is wide on the floor version. Wider, squatter arches look like a different (and cheaper) mirror."
        ],
        "after": [
          "Glass matters too. Look for reviews that mention a clear, undistorted reflection. Wavy glass is the fastest way to spot a cheap mirror in person."
        ]
      },
      {
        "h": "The best Primrose-style floor mirrors",
        "body": [
          "These two come closest to the full-length look. Both have the crowned arch; the difference is height and how much space you have."
        ],
        "picks": [
          "B0D6VP1KM6",
          "B0D1C4PXDS"
        ],
        "after": [
          "If you only buy one piece from this guide, make it the floor mirror. It's the first thing people notice when they walk into the room, and the money you save can go toward a good rug or framed art."
        ]
      },
      {
        "h": "Wall and vanity versions for smaller spaces",
        "body": [
          "Not every wall has room for a full-length arch. In an entry, a powder room or over a dresser, these give you the same carved-gold feeling at a smaller scale. Pick one shape per room: an arch and an oval side by side compete with each other."
        ],
        "picks": [
          "B0BXNFG999",
          "B0DPQJFC3M",
          "B0GZN6V7Q6",
          "B004SKOTF0",
          "B0DNQFNM2L",
          "B0DMSNCG9B"
        ]
      },
      {
        "h": "Sizes that read luxe",
        "body": [
          "Scale is where most dupes go wrong, and it usually isn't the mirror's fault. These are the rules designers use when placing a mirror in a client's home."
        ],
        "table": {
          "head": [
            "Where it goes",
            "Size that looks right",
            "Look for"
          ],
          "rows": [
            [
              "Leaning on the floor",
              "60 to 65 in tall or more with 8 ft ceilings",
              "Baroque floor mirror"
            ],
            [
              "Over a dresser or console",
              "About two-thirds of the furniture width",
              "Arched crest wall mirror"
            ],
            [
              "Over a bathroom sink",
              "The width of the sink area, not the whole counter",
              "Oval scroll mirror"
            ],
            [
              "Shelf, desk or dressing table",
              "Under 12 in",
              "Small vintage or tabletop mirror"
            ]
          ]
        },
        "list": [
          "Hang a mirror over furniture so its bottom edge sits 6 to 10 inches above the surface. Higher than that and it floats.",
          "Over a vanity, keep the top of the crest below the light fixture so the two don't collide.",
          "A small mirror alone on a big wall looks lost. Give it company: a sconce on each side, or art in the same frame color."
        ]
      },
      {
        "h": "How to make a dupe look like the real thing",
        "body": [
          "A few small fixes make an affordable mirror look like it came from an antique shop."
        ],
        "list": [
          "**Warm up the gold.** If the finish looks too bright, rub a little gilding wax into the crest with a soft cloth and buff it off. It settles into the carving and adds the depth the photos promised.",
          "**Hide shipping chips.** A leafing pen covers small scuffs on the frame edge in seconds.",
          "**Hang it like it weighs more than it does.** A French cleat keeps a wall mirror flat and level, which is what makes a mirror look installed instead of hung on a nail.",
          "**Anchor a leaning mirror.** Any floor mirror in a home with kids, pets or a busy hallway should be strapped to the wall. Nobody sees the strap.",
          "**Style the floor around it, not in front of it.** A small stool, a basket or a potted olive tree to one side is plenty."
        ],
        "picks": [
          "B00081HYDC",
          "B003ZTNENS",
          "B005PUC4KE",
          "B086ZS4D3D"
        ],
        "after": [
          "For the rest of the look, see our [Anthropologie dupes on Amazon](/anthropologie-dupes-on-amazon/) edit, and for a mirror-over-console setup, our [entryway decor that looks expensive](/amazon-entryway-decor-that-looks-expensive/). An oval scroll mirror also works beautifully in a [boho bedroom](/boho-bedroom-amazon-finds/)."
        ]
      },
      {
        "h": "Amazon vs. Hobby Lobby vs. Target dupes",
        "body": [
          "People ask where to buy a Primrose dupe, and the honest answer depends on what matters most to you.",
          "Hobby Lobby is the better choice if you want to see the gold in person before you buy, and a big floor mirror is easier to carry out of a store than to send back by mail. Target leans toward simpler arched mirrors with thin frames and no crest: a cleaner, more modern take, but not really the Primrose look. Amazon has the widest range of crested baroque styles and sizes, and customer photos are the best way to judge the color of the gold before it arrives.",
          "Wherever you shop, check three things: the frame material (metal and resin hold carving detail better than thin plastic), the weight (heavier usually means real glass) and at least one customer photo taken in daylight."
        ]
      }
    ],
    "faq": [
      {
        "q": "Is the Anthropologie Primrose mirror worth it?",
        "a": "If it's going in a forever spot and you love it, it's a beautiful piece. If you rent, move often or are decorating a guest room, a well-chosen dupe gives you most of the effect, and nobody can tell from across the room."
      },
      {
        "q": "How heavy is a floor mirror, and how do I keep it from tipping?",
        "a": "A full-length glass mirror can easily weigh 20 pounds or more. Lean it at a slight angle on a non-slip pad and strap the top to a stud with an anti-tip strap. If you hang it instead, use a French cleat rated well above the mirror's weight."
      },
      {
        "q": "Glass or acrylic?",
        "a": "Glass. Acrylic mirrors are lighter and won't shatter, which is useful in a kid's room, but they flex slightly and give a soft, wavy reflection. If a listing doesn't say glass, check the Q&A or the reviews before buying."
      }
    ],
    "note": "The Muse Shelf is not affiliated with Anthropologie, Hobby Lobby or Target. Brand names are used only to describe a style."
  },
  // ----------------------------------------------------------------
  {
    slug: 'housewarming-gifts-that-look-expensive',
    title: 'Housewarming Gifts That Look Expensive',
    category: 'gift-guides',
    date: '2026-10-21',
    description: 'Housewarming gifts that look expensive from Amazon: a travertine tray, reed diffuser, marble bookends, glass cake stand, butter crock and candle.',
    intro: 'The best housewarming gifts are pieces a new homeowner would pick for themselves. These Amazon finds in travertine, marble, acacia and glass look like they came from a design shop and suit almost any home.',
    image: 'assets/pins/housewarming-gifts-that-look-expensive.jpg',
    imageAlt: 'Collage of housewarming gifts from Amazon: Archipelago reed diffuser, travertine tray, marble bookends, glass cake stand, acacia bowl, white ceramic vases and a Thymes Noir candle',
    products: [
      { name: 'Glass cake stand with dome', note: 'A footed glass stand and cloche for cakes, pastries or a cheese course.', image: 'assets/products/B01FSID5C8.jpg', link: 'B01FSID5C8' },
      { name: 'Butter Bell French butter crock', note: 'The original French butter keeper that keeps butter soft and spreadable.', image: 'assets/products/B000H47H0A.jpg', link: 'B000H47H0A' },
      { name: 'White marble mortar and pestle', note: 'A heavy marble set that looks like a design piece on the counter.', image: 'assets/products/B0000VLP7Q.jpg', link: 'B0000VLP7Q' },
      { name: 'Archipelago Botanico de Havana diffuser', note: 'An amber glass reed diffuser with a warm, smoky tobacco and vanilla scent.', image: 'assets/products/B003GYMGPE.jpg', link: 'B003GYMGPE' },
      { name: 'Thymes Noir Woods candle', note: 'A black marbled three-wick candle with evergreen and amber notes.', image: 'assets/products/B0DN2PRLZS.jpg', link: 'B0DN2PRLZS' },
      { name: 'Real travertine tray', note: 'Natural stone that turns soap, perfume or keys into a styled moment.', image: 'assets/products/B0D4F49TZV.jpg', link: 'B0D4F49TZV' },
      { name: 'Marble bookends, set of 2', note: 'Heavy stone wedges that hold a stack of books like a designer shelf.', image: 'assets/products/B0FDLJ6Z9N.jpg', link: 'B0FDLJ6Z9N' },
      { name: 'Black wood salt and pepper mills', note: 'A tall matching pair with adjustable ceramic grinders.', image: 'assets/products/B07Y1Z2CTJ.jpg', link: 'B07Y1Z2CTJ' },
      { name: 'Acacia wave bowl with servers', note: 'A large sculpted acacia bowl for salads, bread or fruit.', image: 'assets/products/B00MWENGGM.jpg', link: 'B00MWENGGM' },
      { name: 'Whitewashed wood pedestal bowl', note: 'A footed bowl with a soft limewash finish for a table or console.', image: 'assets/products/B0C2F3BHP2.jpg', link: 'B0C2F3BHP2' },
      { name: 'White ceramic donut vases, set of 2', note: 'Hollow matte vases that look sculptural with or without stems.', image: 'assets/products/B0C2YLN3H4.jpg', link: 'B0C2YLN3H4' },
      { name: 'White ceramic pitcher vase', note: 'A farmhouse-style jug for fresh or dried branches.', image: 'assets/products/B0D41FL76W.jpg', link: 'B0D41FL76W' },
      { name: 'Reactive glaze ceramic bowl', note: 'A deep blue-gray glazed bowl for fruit or a coffee table.', image: 'assets/products/B0F7KWKZ6S.jpg', link: 'B0F7KWKZ6S' },
      { name: 'Fortessa hobnail glass cake stand', note: 'A vintage-style beaded glass stand in a soft blush tone.', image: 'assets/products/B09RJMXZ53.jpg', link: 'B09RJMXZ53' },
      { name: 'Wood chain link decor', note: 'A carved wooden link that styles a shelf or coffee table stack.', image: 'assets/products/B0D5CGQ52M.jpg', link: 'B0D5CGQ52M' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'hostess-gifts-under-30',
    title: 'Hostess Gifts Under $30',
    category: 'gift-guides',
    date: '2026-10-21',
    description: 'Affordable hostess gifts that look expensive: a marble cheese board, gold cheese knives, a Le Creuset mini cocotte, linen napkins and a candle.',
    intro: 'A hostess gift should feel thoughtful, look beautiful on the counter and still get used after the party. These Amazon finds lean on marble, olive wood, linen and glass, so a small thank-you looks like it came from a boutique.',
    image: 'assets/pins/hostess-gifts-under-30.jpg',
    imageAlt: 'Collage of affordable hostess gifts from Amazon: marble cheese board, marble handle cheese knives, Le Creuset mini cocotte, linen cocktail napkins, glass honey pot and a Thymes candle tin',
    products: [
      { name: 'White linen cocktail napkins, set of 12', note: 'Hemstitched linen squares that make any drink tray feel like a boutique hotel bar.', image: 'assets/products/B00RA53R9O.jpg', link: 'B00RA53R9O' },
      { name: 'Kilner glass honey pot with dipper', note: 'A classic beehive jar with a wooden dipper, sweet with a jar of local honey inside.', image: 'assets/products/B00TYL2VB2.jpg', link: 'B00TYL2VB2' },
      { name: 'Round white marble cheese board', note: 'A solid marble board that serves cheese tonight and styles the counter tomorrow.', image: 'assets/products/B01DPLTJWK.jpg', link: 'B01DPLTJWK' },
      { name: 'Gold cheese knife set of 5', note: 'Gold-finish knives for soft and hard cheeses that dress up any board.', image: 'assets/products/B0BDZHVRWS.jpg', link: 'B0BDZHVRWS' },
      { name: 'Marble handle cheese knife set', note: 'Six gold spreaders and cutters with white marble handles.', image: 'assets/products/B091F3XX21.jpg', link: 'B091F3XX21' },
      { name: 'Marble salt cellar with lid', note: 'A small white stone salt box that lives beautifully by the stove.', image: 'assets/products/B0BH8XG2Y3.jpg', link: 'B0BH8XG2Y3' },
      { name: 'Le Creuset stoneware mini cocotte', note: 'A tiny lidded cocotte in Sea Salt for salt, butter or a sweet treat.', image: 'assets/products/B08M5YNHGK.jpg', link: 'B08M5YNHGK' },
      { name: 'Cream ceramic olive oil bottle', note: 'A glazed pour bottle that looks far better on the counter than plastic.', image: 'assets/products/B0DZFHMT3W.jpg', link: 'B0DZFHMT3W' },
      { name: 'Crystal wine bottle stopper', note: 'A sparkling faceted topper to tie onto a bottle of wine.', image: 'assets/products/B07XW71D9S.jpg', link: 'B07XW71D9S' },
      { name: 'Travertine coasters, set of 4', note: 'Natural stone coasters with cork backs and a quietly luxe look.', image: 'assets/products/B09L42TT2L.jpg', link: 'B09L42TT2L' },
      { name: 'Olive wood heart board', note: 'A hand-finished olive wood board with gorgeous grain, sweet for a hostess.', image: 'assets/products/B004IOT97Y.jpg', link: 'B004IOT97Y' },
      { name: 'Walnut cutting board with handle', note: 'A dark edge-grain walnut board that doubles as a serving paddle.', image: 'assets/products/B093WK1ZMZ.jpg', link: 'B093WK1ZMZ' },
      { name: 'Stonewashed linen kitchen towels', note: 'Soft flax linen tea towels in a calm natural tone.', image: 'assets/products/B08ZRZRSBY.jpg', link: 'B08ZRZRSBY' },
      { name: 'White ceramic butter dish', note: 'A simple covered butter dish that makes the table look finished.', image: 'assets/products/B075RJ5B2V.jpg', link: 'B075RJ5B2V' },
      { name: 'Smoky glass bubble candle dish', note: 'A smoky glass dish with a bubble rim that glows when the candle is lit.', image: 'assets/products/B0FDXY4XS3.jpg', link: 'B0FDXY4XS3' },
      { name: 'Thymes holiday candle tin', note: 'A lidded travel tin with a crisp fir scent that smells like the holidays.', image: 'assets/products/B07PZF7X3K.jpg', link: 'B07PZF7X3K' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'self-care-gift-ideas-for-her',
    title: 'Self-Care Gift Ideas for Her',
    category: 'gift-guides',
    date: '2026-10-21',
    description: 'Self-care gift ideas for her from Amazon: a teak bathtub tray, silk sleep mask, French hand cream trio, rose quartz roller and body butter.',
    intro: 'A self-care gift says take a night off. These Amazon picks turn an ordinary evening into a spa night at home, with a teak bath tray, silky sleep essentials, rich body care and a few cooling skincare tools.',
    image: 'assets/pins/self-care-gift-ideas-for-her.jpg',
    imageAlt: 'Collage of self-care gifts for her from Amazon: teak bathtub tray, silk sleep mask, La Chatelaine hand cream trio, rose quartz roller set, body butter, lavender mist and a spa headband',
    products: [
      { name: 'Silk sleep mask', note: 'A soft, light-blocking silk mask with an adjustable strap.', image: 'assets/products/B07J41LJJZ.jpg', link: 'B07J41LJJZ' },
      { name: 'Rose quartz roller and gua sha set', note: 'A pretty facial massage duo that feels like a spa treatment.', image: 'assets/products/B07PHZS8MV.jpg', link: 'B07PHZS8MV' },
      { name: 'Facial ice globes', note: 'Cooling stainless steel globes that depuff and soothe after a long day.', image: 'assets/products/B0F3869KZH.jpg', link: 'B0F3869KZH' },
      { name: 'La Chatelaine hand cream trio tin', note: 'Three French hand creams in a gift-ready floral tin.', image: 'assets/products/B07YBJK1HQ.jpg', link: 'B07YBJK1HQ' },
      { name: 'Inis body butter', note: 'A rich, sea-scented body butter in a clean white jar.', image: 'assets/products/B06XN5QLZS.jpg', link: 'B06XN5QLZS' },
      { name: 'L\'Occitane almond hair and body mist', note: 'A light almond scent to mist on after a bath.', image: 'assets/products/B0FH7JFSGP.jpg', link: 'B0FH7JFSGP' },
      { name: 'Aura Cacia lavender mist', note: 'A relaxing lavender spray for pillows, linens or a calm room.', image: 'assets/products/B001E722V8.jpg', link: 'B001E722V8' },
      { name: 'Teak bathtub tray', note: 'An expandable teak caddy that holds a book, candle and glass in the bath.', image: 'assets/products/B08K7BBWF4.jpg', link: 'B08K7BBWF4' },
      { name: 'Conair spa headband', note: 'A soft pink puffy headband for skincare and face washing.', image: 'assets/products/B0CJH1RY42.jpg', link: 'B0CJH1RY42' },
      { name: 'VOLO Hero hair towel', note: 'A super absorbent hair towel that cuts drying time.', image: 'assets/products/B0B6H3B69Y.jpg', link: 'B0B6H3B69Y' },
      { name: 'Khaki cotton hand towels, 3 pack', note: 'Soft textured towels in a warm, spa-like neutral.', image: 'assets/products/B0C5Q9T6SF.jpg', link: 'B0C5Q9T6SF' },
      { name: 'Lavender spa gift basket', note: 'A ready-to-give basket of lavender bath and body treats.', image: 'assets/products/B0D9LXZMF1.jpg', link: 'B0D9LXZMF1' },
      { name: 'Natural spa gift box', note: 'A kraft gift box of candles, bath salts and little self-care extras.', image: 'assets/products/B0DZHGRRDV.jpg', link: 'B0DZHGRRDV' },
      { name: 'Olay Enrich body oil', note: 'A lightweight oil-serum that leaves skin glowing.', image: 'assets/products/B0H5KTSHN5.jpg', link: 'B0H5KTSHN5' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'cozy-gifts-for-the-homebody',
    title: 'Cozy Gifts for the Homebody',
    category: 'gift-guides',
    date: '2026-10-21',
    description: 'Cozy gifts for the homebody from Amazon: a faux fur sherpa throw, fluffy slippers, fuzzy socks, a reading pillow, a bed tray and stoneware mugs.',
    intro: 'For the friend who would rather stay in, the best gift is anything that makes home feel softer. These Amazon finds cover the whole night in: plush throws, slippers, fuzzy socks, a reading pillow, a bed tray and a good mug.',
    image: 'assets/pins/cozy-gifts-for-the-homebody.jpg',
    imageAlt: 'Collage of cozy gifts for the homebody from Amazon: faux fur sherpa throw, knit throws, fluffy slippers, fuzzy socks, reading pillow, acacia bed tray, stoneware mugs and a sunrise alarm clock',
    products: [
      { name: 'Faux fur sherpa throw blanket', note: 'A plush beige throw that makes any sofa feel like a cozy cabin.', image: 'assets/products/B0CF173VLZ.jpg', link: 'B0CF173VLZ' },
      { name: 'Beige knit throw blanket', note: 'A soft diamond-knit throw with fringe for an easy neutral look.', image: 'assets/products/B01JEAKSN0.jpg', link: 'B01JEAKSN0' },
      { name: 'YnM chunky cotton knit throw', note: 'A thick cable knit throw that looks handmade.', image: 'assets/products/B0D3WRPQHX.jpg', link: 'B0D3WRPQHX' },
      { name: 'Herringbone cotton throw', note: 'A light stone-colored throw with fringe for layering.', image: 'assets/products/B08S1C8GHZ.jpg', link: 'B08S1C8GHZ' },
      { name: 'Fluffy cross-strap slippers', note: 'Cloud-soft open-toe slippers in creamy white.', image: 'assets/products/B0GVJC2N9C.jpg', link: 'B0GVJC2N9C' },
      { name: 'Skechers cozy clog slippers', note: 'Suede-look clogs lined with faux fur for errands and lazy mornings.', image: 'assets/products/B0BX274M7P.jpg', link: 'B0BX274M7P' },
      { name: 'EverFoams memory foam slippers', note: 'Plush gray slippers with a cushioned memory foam sole.', image: 'assets/products/B0CB839PW8.jpg', link: 'B0CB839PW8' },
      { name: 'UGG fuzzy socks', note: 'Fluffy pink socks that feel like a treat on cold floors.', image: 'assets/products/B073S693BG.jpg', link: 'B073S693BG' },
      { name: 'Wool blend crew socks, 3 pack', note: 'Warm neutral socks for boots or curling up at home.', image: 'assets/products/B0DDQ4FBDX.jpg', link: 'B0DDQ4FBDX' },
      { name: 'Sango stoneware mugs, set of 4', note: 'Speckled reactive-glaze mugs in warm earthy tones.', image: 'assets/products/B097NHLL8R.jpg', link: 'B097NHLL8R' },
      { name: 'Handmade pottery coffee mug', note: 'A large glazed mug with an artisan look.', image: 'assets/products/B091975P73.jpg', link: 'B091975P73' },
      { name: 'White porcelain mugs, set of 6', note: 'Clean white mugs for coffee, tea or cocoa.', image: 'assets/products/B0F8N74F65.jpg', link: 'B0F8N74F65' },
      { name: 'Acacia bed tray with folding legs', note: 'A warm wood tray for breakfast in bed or a book and coffee.', image: 'assets/products/B09WMNMJL4.jpg', link: 'B09WMNMJL4' },
      { name: 'Reading pillow with arms', note: 'A plush backrest pillow for reading or watching movies in bed.', image: 'assets/products/B0CXY131X1.jpg', link: 'B0CXY131X1' },
      { name: 'Sunrise alarm clock with sound machine', note: 'Wakes her gently with light and soothing sounds.', image: 'assets/products/B0BGS2YL86.jpg', link: 'B0BGS2YL86' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'white-elephant-gifts-under-25',
    title: 'White Elephant Gifts Under $25',
    category: 'gift-guides',
    date: '2026-10-21',
    description: 'Affordable white elephant gifts people will actually steal: a candle warmer lamp, whiskey glass set, cocktail shaker kit, mug warmer and a milk frother.',
    intro: 'The best white elephant gifts are the ones people steal. These Amazon finds are useful, giftable and look more expensive than the price limit, from a candle warmer lamp to a whiskey glass set and a rechargeable frother.',
    image: 'assets/pins/white-elephant-gifts-under-25.jpg',
    imageAlt: 'Collage of affordable white elephant gifts from Amazon: candle warmer lamp, whiskey glass gift set, cocktail shaker set, mug warmers, milk frother, glass mugs and a travel jewelry box',
    products: [
      { name: 'Tovolo sphere ice molds, set of 2', note: 'Big round ice balls that make any drink look like a cocktail bar.', image: 'assets/products/B007ACTN54.jpg', link: 'B007ACTN54' },
      { name: 'Whiskey glass gift set with chilling stones', note: 'Two glasses, stones and slate coasters in a wooden gift box.', image: 'assets/products/B08F7L8S2R.jpg', link: 'B08F7L8S2R' },
      { name: 'Cocktail shaker set with bamboo stand', note: 'A 12-piece bar kit that looks great on a counter or bar cart.', image: 'assets/products/B0839HYQQ5.jpg', link: 'B0839HYQQ5' },
      { name: 'Maestri House rechargeable milk frother', note: 'A sleek frother with a stand for cafe-style lattes at home.', image: 'assets/products/B0BN7M8CH4.jpg', link: 'B0BN7M8CH4' },
      { name: 'White smart mug warmer', note: 'Keeps coffee warm at the desk and turns off when the mug is lifted.', image: 'assets/products/B07XLL45CH.jpg', link: 'B07XLL45CH' },
      { name: 'Retro coffee mug warmer', note: 'A wood-look warmer with a vintage dial for coffee or tea.', image: 'assets/products/B0DHRS7Y89.jpg', link: 'B0DHRS7Y89' },
      { name: 'Flameless LED tea lights, 24 pack', note: 'Flickering battery candles for a warm glow without the flame.', image: 'assets/products/B06XCTP65H.jpg', link: 'B06XCTP65H' },
      { name: 'Solid oak picture frame', note: 'A simple oak frame with a mat for a favorite photo.', image: 'assets/products/B0DPVB1BFH.jpg', link: 'B0DPVB1BFH' },
      { name: 'Double wall glass coffee mugs, set of 4', note: 'Insulated glass mugs that make a latte look beautiful.', image: 'assets/products/B0DYTBDPGX.jpg', link: 'B0DYTBDPGX' },
      { name: 'LED compact mirror', note: 'A slim lighted pocket mirror with magnification for touch-ups.', image: 'assets/products/B08FMNXX68.jpg', link: 'B08FMNXX68' },
      { name: 'Travel jewelry box', note: 'A small black case that keeps rings and earrings organized on trips.', image: 'assets/products/B08C36CYNW.jpg', link: 'B08C36CYNW' },
      { name: 'BAGSMART travel jewelry organizer', note: 'A soft pink roll-style case with spots for every piece.', image: 'assets/products/B0DF833LRH.jpg', link: 'B0DF833LRH' },
      { name: 'Candle warmer lamp', note: 'A dimmable gold lamp that melts candle wax from the top, no flame needed.', image: 'assets/products/B0CCYCBRSK.jpg', link: 'B0CCYCBRSK' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'neutral-christmas-decor-from-amazon',
    title: 'Neutral Christmas Decor From Amazon That Looks Expensive',
    category: 'home-finds',
    date: '2026-10-22',
    description: 'Neutral Christmas decor from Amazon that looks expensive: frosted garland, a white ceramic tree, gold candle holders, wood beads and soft knits.',
    intro: 'This is our quiet take on the holidays: whites, creams, warm wood and a little gold, with nothing loud or plastic-looking. Layer a frosted garland, a glowing ceramic tree and candlelight, and the whole room feels collected rather than store-bought.',
    image: 'assets/pins/neutral-christmas-decor-from-amazon.jpg',
    imageAlt: 'Collage of neutral Christmas decor from Amazon: flocked tree, cream knit stocking, ceramic tree, gold hurricane candle holders, wreath and wood bead garland on a linen background',
    products: [
      { name: 'Wood bead garland', note: 'Natural wood beads that add warmth to a tree, mantel or tray.', image: 'assets/products/B08JHWSCRW.jpg', link: 'B08JHWSCRW' },
      { name: 'White ceramic tabletop tree', note: 'A lit vintage-style ceramic tree that glows softly on a console.', image: 'assets/products/B07JMF111G.jpg', link: 'B07JMF111G' },
      { name: 'Cream knit stocking', note: 'A chunky cream knit with a pom-pom cuff that looks boutique.', image: 'assets/products/B07M8DZXQB.jpg', link: 'B07M8DZXQB' },
      { name: 'Flocked pencil tree, 4.5 ft', note: 'A slim snowy tree that fits a small corner or entryway.', image: 'assets/products/B08HJFQ3JC.jpg', link: 'B08HJFQ3JC' },
      { name: 'Norfolk pine wreath', note: 'Full, realistic greenery that looks fresh on a door or mirror.', image: 'assets/products/B0FD2VRLNV.jpg', link: 'B0FD2VRLNV' },
      { name: 'Brass bells, set of 3', note: 'Rustic brass bells to hang from a door handle or garland.', image: 'assets/products/B0B7M6H1BD.jpg', link: 'B0B7M6H1BD' },
      { name: 'Gold hurricane candle holders', note: 'Three heights of gold and glass for a glowing mantel.', image: 'assets/products/B0DCVS9ND8.jpg', link: 'B0DCVS9ND8' },
      { name: 'Faux pine stems', note: 'Loose pine sprigs to tuck into vases, trays and garlands.', image: 'assets/products/B07HSZWKGP.jpg', link: 'B07HSZWKGP' },
      { name: 'Frosted pine garland', note: 'A snow-dusted garland that drapes beautifully along a console.', image: 'assets/products/B07F7NJ3L6.jpg', link: 'B07F7NJ3L6' },
      { name: 'Gold jingle bell garland', note: 'A delicate strand of gold bells with a vintage feel.', image: 'assets/products/B08VWCJ3BN.jpg', link: 'B08VWCJ3BN' },
      { name: 'Tree print pillow covers', note: 'Warm brown covers with a simple tree print for the sofa.', image: 'assets/products/B0CMXGQC96.jpg', link: 'B0CMXGQC96' },
      { name: 'Mini bottle brush trees', note: 'Tiny cream trees for a village scene, tray or shelf.', image: 'assets/products/B081H3GQWV.jpg', link: 'B081H3GQWV' },
      { name: 'Champagne glitter trees, set of 3', note: 'Three soft gold trees that add sparkle without the clutter.', image: 'assets/products/B07GNV8ZXG.jpg', link: 'B07GNV8ZXG' },
      { name: 'Natural pine cone set', note: 'Bowl fillers that bring woodsy texture to a table or tray.', image: 'assets/products/B091YZ1L87.jpg', link: 'B091YZ1L87' },
      { name: 'Gold ornament display tree', note: 'A sculptural metal tree that shows off favorite ornaments.', image: 'assets/products/B081YGVKCR.jpg', link: 'B081YGVKCR' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'amazon-christmas-tree-decor-that-looks-expensive',
    title: 'Amazon Christmas Tree Decor That Looks Expensive',
    category: 'home-finds',
    date: '2026-10-22',
    description: 'Amazon Christmas tree decor that looks expensive: champagne ornaments, a capiz star topper, pearl garland, velvet ribbon and gold picks.',
    intro: 'A designer-looking tree comes down to a tight palette and a few layers: ribbon, a garland, picks and one statement topper. We kept everything in ivory, champagne and soft gold, with a touch of sage velvet for depth.',
    image: 'assets/pins/amazon-christmas-tree-decor-that-looks-expensive.jpg',
    imageAlt: 'Collage of neutral Christmas tree decor from Amazon: champagne ball ornaments, capiz star tree topper, pearl garland, velvet ribbon, gold picks and snowflake ornaments',
    products: [
      { name: 'Pearl bead garland', note: 'Ivory pearl strands that loop around the branches like jewelry.', image: 'assets/products/B0CXFBQC29.jpg', link: 'B0CXFBQC29' },
      { name: 'Champagne ball ornaments, 30 pc', note: 'Clear, white and champagne shatterproof balls in one set.', image: 'assets/products/B07QXYN1H6.jpg', link: 'B07QXYN1H6' },
      { name: 'Capiz star tree topper', note: 'A lit capiz shell star that glows like a vintage heirloom.', image: 'assets/products/B003DA5I0Q.jpg', link: 'B003DA5I0Q' },
      { name: 'Wood bead tassel ornaments', note: 'Jute tassels with wood beads for a soft, natural touch.', image: 'assets/products/B09N7LHB4N.jpg', link: 'B09N7LHB4N' },
      { name: 'Gold glitter tree picks', note: 'Sprays of gold to tuck into the branches for fullness.', image: 'assets/products/B08D69ZFZ6.jpg', link: 'B08D69ZFZ6' },
      { name: 'Sage and gold velvet ribbon', note: 'Wired velvet ribbon that cascades down the tree.', image: 'assets/products/B0D945V3Y3.jpg', link: 'B0D945V3Y3' },
      { name: 'White ball ornaments', note: 'Matte and shiny white balls for a snowy, cohesive look.', image: 'assets/products/B0BZLGMF21.jpg', link: 'B0BZLGMF21' },
      { name: 'Small brass bells, 20 pc', note: 'Rustic gold bells that add a warm, vintage sparkle.', image: 'assets/products/B0BD8LDP6Y.jpg', link: 'B0BD8LDP6Y' },
      { name: 'Gold snowflake ornaments', note: 'Lightweight glitter snowflakes that fill gaps between ornaments.', image: 'assets/products/B07WHH5ZVV.jpg', link: 'B07WHH5ZVV' },
      { name: 'Champagne topper bow', note: 'A full champagne bow with long streamers for the top of the tree.', image: 'assets/products/B09Q5V95P1.jpg', link: 'B09Q5V95P1' },
      { name: 'Clear glass snowflake ornaments', note: 'Real glass snowflakes that catch the tree lights.', image: 'assets/products/B088D18MTP.jpg', link: 'B088D18MTP' },
      { name: 'Cream pinecone ribbon', note: 'A cream wired ribbon with glitter pinecones for the branches.', image: 'assets/products/B08NCWZ19V.jpg', link: 'B08NCWZ19V' },
      { name: 'Champagne gold ornaments, 36 pc', note: 'A mixed set of finishes in soft gold and champagne.', image: 'assets/products/B094V6SBF4.jpg', link: 'B094V6SBF4' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'thanksgiving-table-decor-from-amazon',
    title: 'Thanksgiving Table Decor From Amazon',
    category: 'home-finds',
    date: '2026-10-22',
    description: 'Thanksgiving table decor from Amazon: brass candlesticks, a eucalyptus garland runner, velvet pumpkins, linen napkins and gold flatware.',
    intro: 'A Thanksgiving table that feels warm and grown-up needs candlelight, one green runner and a few textures that catch the light. These affordable pieces set the table in minutes and come back out every holiday after.',
    image: 'assets/pins/thanksgiving-table-decor-from-amazon.jpg',
    imageAlt: 'Collage of Thanksgiving table decor from Amazon: brass candlesticks, eucalyptus garland, gold placemats, gold flatware, velvet pumpkins, white dinnerware and amber votives',
    products: [
      { name: 'White linen napkins, set of 12', note: 'Flax linen with a hemstitched edge that looks heirloom.', image: 'assets/products/B07DMQ3H4M.jpg', link: 'B07DMQ3H4M' },
      { name: 'Velvet pumpkins, set of 6', note: 'Plush jewel-tone pumpkins to scatter down the table.', image: 'assets/products/B08BLGZSSN.jpg', link: 'B08BLGZSSN' },
      { name: 'White pumpkins, set of 2', note: 'Large white faux pumpkins for a clean, modern centerpiece.', image: 'assets/products/B08HCFR6GY.jpg', link: 'B08HCFR6GY' },
      { name: 'Brass candlesticks, set of 6', note: 'Vintage-style brass in three heights for a candlelit table.', image: 'assets/products/B0FQJWNW15.jpg', link: 'B0FQJWNW15' },
      { name: 'White dinnerware set for 4', note: 'Simple white plates and bowls that let the table decor shine.', image: 'assets/products/B0FNR6QG8S.jpg', link: 'B0FNR6QG8S' },
      { name: 'Gold wire napkin rings', note: 'Twisted gold rings that dress up a plain napkin.', image: 'assets/products/B0BYRR7P2B.jpg', link: 'B0BYRR7P2B' },
      { name: 'Faux eucalyptus garland', note: 'A lush faux eucalyptus runner for the center of the table.', image: 'assets/products/B08R8XYJJR.jpg', link: 'B08R8XYJJR' },
      { name: 'Gold leaf placemats', note: 'Metallic round chargers that add a warm glow under each plate.', image: 'assets/products/B09M9YKLQR.jpg', link: 'B09M9YKLQR' },
      { name: 'Ivory taper candles', note: 'Unscented tapers that won\'t compete with the food.', image: 'assets/products/B0FFW8WPNJ.jpg', link: 'B0FFW8WPNJ' },
      { name: 'Amber glass votives, set of 6', note: 'Vintage amber glass for soft, golden candlelight.', image: 'assets/products/B0BJGXKD9H.jpg', link: 'B0BJGXKD9H' },
      { name: 'Gold flatware set for 4', note: 'Polished gold cutlery that makes the table feel special.', image: 'assets/products/B0BVM17YLR.jpg', link: 'B0BVM17YLR' },
      { name: 'Round acacia serving board', note: 'A big wood board for appetizers, cheese or bread.', image: 'assets/products/B0CJGRP2F1.jpg', link: 'B0CJGRP2F1' },
      { name: 'Dried wheat stalks', note: 'Natural wheat bundles for bud vases or tucked into napkins.', image: 'assets/products/B097T6Y38V.jpg', link: 'B097T6Y38V' },
      { name: 'Ceramic pumpkin bowls, set of 2', note: 'Lidded pumpkin bowls for soup, sides or dessert.', image: 'assets/products/B0B6SW982X.jpg', link: 'B0B6SW982X' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'cozy-fall-decor-from-amazon',
    title: 'Cozy Fall Decor From Amazon',
    category: 'home-finds',
    date: '2026-10-22',
    description: 'Cozy fall decor from Amazon in soft neutrals: cream and velvet pumpkins, a pampas wreath, dried wheat, fall candles, knit throws and a pumpkin mug.',
    intro: 'Fall decor does not have to be bright orange. These Amazon finds keep the season soft and neutral with cream pumpkins, plush velvet and knit textures, dried wheat and candlelight.',
    image: 'assets/pins/cozy-fall-decor-from-amazon.jpg',
    imageAlt: 'Collage of neutral fall decor from Amazon: cream faux pumpkins, pampas grass wreath, velvet pumpkins, dried wheat, fall candles, knit throws and a pumpkin mug',
    products: [
      { name: 'Cream faux pumpkins, set of 7', note: 'Speckled heirloom-style pumpkins in soft cream tones.', image: 'assets/products/B0C6GGX5QV.jpg', link: 'B0C6GGX5QV' },
      { name: 'Champagne velvet pumpkins, set of 8', note: 'Plush velvet pumpkins with real-looking stems.', image: 'assets/products/B09CYS9BFB.jpg', link: 'B09CYS9BFB' },
      { name: 'Small velvet pumpkins, set of 3', note: 'Jewel-tone velvet in mustard, rust and olive for a cozy shelf.', image: 'assets/products/B07C3TVC38.jpg', link: 'B07C3TVC38' },
      { name: 'White and gold stripe pumpkins, set of 2', note: 'Glossy white pumpkins with gold ribs that feel elegant.', image: 'assets/products/B0H336XDLD.jpg', link: 'B0H336XDLD' },
      { name: 'Classic white resin pumpkin', note: 'A crisp white pumpkin that suits a neutral mantel.', image: 'assets/products/B07CHVVC1S.jpg', link: 'B07CHVVC1S' },
      { name: 'Faux sherpa pumpkins, set of 3', note: 'Fuzzy plush pumpkins in cream and caramel.', image: 'assets/products/B0C33RBFL4.jpg', link: 'B0C33RBFL4' },
      { name: 'Ivory knit pumpkins, set of 3', note: 'Sweater-knit pumpkins for a cozy coffee table.', image: 'assets/products/B0FDNNB7FX.jpg', link: 'B0FDNNB7FX' },
      { name: 'Fall faux eucalyptus stems', note: 'Rust-toned silver dollar stems for a tall vase.', image: 'assets/products/B0BWTD2RR4.jpg', link: 'B0BWTD2RR4' },
      { name: 'Natural dried wheat bundles', note: 'Real dried wheat for a jug, wreath or table runner.', image: 'assets/products/B0CYLYT469.jpg', link: 'B0CYLYT469' },
      { name: 'Faux pampas grass wreath', note: 'A fluffy neutral wreath that works from fall through winter.', image: 'assets/products/B0D4MFL8YL.jpg', link: 'B0D4MFL8YL' },
      { name: 'Autumn leaf and wheat wreath', note: 'Golden leaves and pampas for a warm front door.', image: 'assets/products/B0D5CHB3S1.jpg', link: 'B0D5CHB3S1' },
      { name: 'Chenille knit throw blanket', note: 'A soft cream throw with fringe to drape over a chair.', image: 'assets/products/B095WHFT8S.jpg', link: 'B095WHFT8S' },
      { name: 'Cotton cable knit throw blanket', note: 'A light ivory knit that layers over the sofa all season.', image: 'assets/products/B07TFDLKSX.jpg', link: 'B07TFDLKSX' },
      { name: 'Cream pumpkin coffee mug', note: 'A pumpkin-shaped stoneware mug for slow fall mornings.', image: 'assets/products/B0D67BL5JB.jpg', link: 'B0D67BL5JB' },
      { name: 'Fall scented soy candles, set of 6', note: 'Amber jars in pumpkin chai, cinnamon and apple cider scents.', image: 'assets/products/B0H6PGZKD5.jpg', link: 'B0H6PGZKD5' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'stocking-stuffers-for-her-under-25',
    title: 'Stocking Stuffers for Her Under $25',
    category: 'gift-guides',
    date: '2026-10-22',
    description: 'Affordable stocking stuffers for her: lip oil, a silk sleep mask, rose quartz roller, velvet scrunchies, claw clips, gold huggies and cozy socks.',
    intro: 'The best stocking stuffers are the little luxuries she would never buy for herself. These pretty, useful picks cover beauty, hair, jewelry and cozy, so you can fill a whole stocking without it feeling like filler.',
    image: 'assets/pins/stocking-stuffers-for-her-under-25.jpg',
    imageAlt: 'Collage of stocking stuffers for her from Amazon: hair towel, roll-on perfume, eye patches, rose quartz roller, gold huggie hoops, velvet scrunchies, claw clips and a silk sleep mask',
    products: [
      { name: 'Tinted lip balm, 4 pack', note: 'Sheer, natural tints she can keep in every bag.', image: 'assets/products/B09Q59XHMZ.jpg', link: 'B09Q59XHMZ' },
      { name: 'Hydrating lip oil', note: 'A glossy, hydrating lip oil in a soft pink.', image: 'assets/products/B0CLTKPY2N.jpg', link: 'B0CLTKPY2N' },
      { name: 'Striped hair towel wrap', note: 'A cotton turban that dries hair gently after a shower.', image: 'assets/products/B0GH6S6Q18.jpg', link: 'B0GH6S6Q18' },
      { name: 'Velvet scrunchies, 8 pc', note: 'Soft neutral scrunchies that are gentle on hair.', image: 'assets/products/B07H7YCDR4.jpg', link: 'B07H7YCDR4' },
      { name: 'Polka dot claw clips', note: 'Big acetate clips in a classic black and white print.', image: 'assets/products/B0G93DCPHC.jpg', link: 'B0G93DCPHC' },
      { name: 'Mulberry silk sleep mask', note: 'Smooth silk that feels luxe and blocks out the light.', image: 'assets/products/B07C7Y8QSW.jpg', link: 'B07C7Y8QSW' },
      { name: 'Gold huggie hoops', note: 'Everyday gold huggies in a set of sizes.', image: 'assets/products/B0974YDZSF.jpg', link: 'B0974YDZSF' },
      { name: 'Manicure set, 30 piece', note: 'A compact nail kit in a neat travel case.', image: 'assets/products/B08T6KX273.jpg', link: 'B08T6KX273' },
      { name: 'Cloud fuzzy socks', note: 'Ultra-soft socks for slow, cozy mornings.', image: 'assets/products/B0DZC4NT9J.jpg', link: 'B0DZC4NT9J' },
      { name: 'Yara roll-on perfume oil', note: 'The viral gourmand scent in a purse-size roller.', image: 'assets/products/B0D9J28R16.jpg', link: 'B0D9J28R16' },
      { name: 'Rose quartz roller set', note: 'A pretty depuffing roller and gua sha for her morning routine.', image: 'assets/products/B07WWC3T9Q.jpg', link: 'B07WWC3T9Q' },
      { name: 'Gold under-eye patches', note: 'Gold eye masks for a quick refresh before plans.', image: 'assets/products/B014E2D6BY.jpg', link: 'B014E2D6BY' },
      { name: 'Volcano mini tin candle', note: 'The cult Capri Blue scent in a small, giftable tin.', image: 'assets/products/B0B5M1Q93F.jpg', link: 'B0B5M1Q93F' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gifts-for-mom-under-50',
    title: 'Gifts for Mom Under $50',
    category: 'gift-guides',
    date: '2026-10-22',
    description: 'Affordable gifts for mom: a cream jewelry box, faux fur throw, silk pillowcase, sherpa slippers, mug warmer, a marble candle holder and a sunrise alarm clock.',
    intro: 'Moms rarely treat themselves, so we picked gifts that make her everyday a little softer: cozy layers, small home comforts and a few beauty upgrades. Every one looks thoughtful and well made, not last-minute.',
    image: 'assets/pins/gifts-for-mom-under-50.jpg',
    imageAlt: 'Collage of gifts for mom from Amazon: jewelry box, faux fur throw, pajama set, sunrise alarm clock, marble candle holder, reed diffuser, sherpa slippers, tea sampler, cashmere socks, mug warmer and silk pillowcase',
    products: [
      { name: 'Cream jewelry box', note: 'A cream jewelry box with room for rings, necklaces and watches.', image: 'assets/products/B0CLCH13T7.jpg', link: 'B0CLCH13T7' },
      { name: 'Marble wave taper candle holder', note: 'A sculptural white marble wave that holds two tapers like a gallery piece.', image: 'assets/products/B0DLKKJYMB.jpg', link: 'B0DLKKJYMB' },
      { name: 'Sherpa slippers', note: 'Cushioned, cozy slippers for slow mornings.', image: 'assets/products/B0BYNYWKC7.jpg', link: 'B0BYNYWKC7' },
      { name: 'Cashmere crew socks', note: 'Soft cashmere socks that feel indulgent.', image: 'assets/products/B0CN575572.jpg', link: 'B0CN575572' },
      { name: '4-piece pajama set', note: 'A soft button-down set plus a cami and shorts for lazy weekends.', image: 'assets/products/B0FKG2LXNP.jpg', link: 'B0FKG2LXNP' },
      { name: 'Initial ring dish', note: 'A personal touch: her gold initial on a little white dish.', image: 'assets/products/B0CX1RXZ6N.jpg', link: 'B0CX1RXZ6N' },
      { name: 'Leather travel jewelry case', note: 'A compact case with a mirror for trips.', image: 'assets/products/B0F8ZT3D3F.jpg', link: 'B0F8ZT3D3F' },
      { name: 'Organic tea sampler box', note: 'Six organic teas in a bamboo presentation box.', image: 'assets/products/B0BFBN81S8.jpg', link: 'B0BFBN81S8' },
      { name: 'Wine glasses, set of 12', note: 'Classic stemmed glasses for holiday dinners.', image: 'assets/products/B0BQBMHW5T.jpg', link: 'B0BQBMHW5T' },
      { name: 'Ribbed faux fur throw', note: 'A plush throw she\'ll keep on the sofa all winter.', image: 'assets/products/B0C1YZJJ5L.jpg', link: 'B0C1YZJJ5L' },
      { name: 'Mulberry silk pillowcase', note: 'Gentle on hair and skin, and it feels like a treat.', image: 'assets/products/B07VKRTKRM.jpg', link: 'B07VKRTKRM' },
      { name: 'Sunrise alarm clock', note: 'Wakes her with a soft glow and calm sounds instead of a blaring alarm.', image: 'assets/products/B0DRW6TWXS.jpg', link: 'B0DRW6TWXS' },
      { name: 'Eucalyptus reed diffuser', note: 'A fresh, spa-like scent with no flame.', image: 'assets/products/B0DY7LWDW1.jpg', link: 'B0DY7LWDW1' },
      { name: 'Mug warmer', note: 'Keeps her coffee warm while she works or reads.', image: 'assets/products/B0BD98G8DB.jpg', link: 'B0BD98G8DB' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'beauty-gifts-under-50-from-amazon',
    title: 'Beauty Gifts Under $50 From Amazon',
    category: 'gift-guides',
    date: '2026-10-22',
    description: 'Affordable beauty gifts from Amazon: mini perfume sets, Laneige lip mask, silk pillowcase and scrunchies, a hair dryer brush and cult lip picks.',
    intro: 'The best beauty gifts feel like a treat she would not buy herself. These Amazon picks include cult lip care, mini designer fragrances, silk hair savers and salon-style hair tools, all easy to wrap.',
    image: 'assets/pins/beauty-gifts-under-50-from-amazon.jpg',
    imageAlt: 'Collage of affordable beauty gifts from Amazon: Chloé mini perfume set, Laneige lip mask, silk pillowcase, silk scrunchies, Revlon hair dryer brush and lip products',
    products: [
      { name: 'Chloé mini perfume gift set', note: 'Four mini Chloé fragrances in a gift-ready box.', image: 'assets/products/B0BXXDNQMX.jpg', link: 'B0BXXDNQMX' },
      { name: 'Versace Bright Crystal mini perfume', note: 'A sparkling mini bottle that fits in a stocking or clutch.', image: 'assets/products/B000Z6EXK2.jpg', link: 'B000Z6EXK2' },
      { name: 'Laneige Lip Sleeping Mask', note: 'The cult overnight lip mask that wakes up soft, smooth lips.', image: 'assets/products/B07XXPHQZK.jpg', link: 'B07XXPHQZK' },
      { name: 'Summer Fridays Dream Lip Oil', note: 'A tinted lip oil with a glossy, non-sticky finish.', image: 'assets/products/B0DWG18QR9.jpg', link: 'B0DWG18QR9' },
      { name: 'Clinique Black Honey Almost Lipstick', note: 'The famous sheer berry balm that suits almost everyone.', image: 'assets/products/B0032RMX3U.jpg', link: 'B0032RMX3U' },
      { name: 'Tower 28 ShineOn Lip Jelly', note: 'A juicy, non-sticky gloss in a cute squeeze tube.', image: 'assets/products/B09YGBHPYJ.jpg', link: 'B09YGBHPYJ' },
      { name: 'Laneige Glaze Craze Lip Serum', note: 'A tinted plumping lip serum gift set with a playful charm.', image: 'assets/products/B0G15RKM65.jpg', link: 'B0G15RKM65' },
      { name: 'Revlon One-Step hair dryer brush', note: 'The best-selling volumizer for a salon blowout at home.', image: 'assets/products/B01HZ5K8UE.jpg', link: 'B01HZ5K8UE' },
      { name: '5-in-1 curling wand set', note: 'Interchangeable barrels, a flat iron and a thermal brush in one kit.', image: 'assets/products/B0D4YM4K8N.jpg', link: 'B0D4YM4K8N' },
      { name: 'Mulberry silk scrunchies, 3 pack', note: 'Gentle silk ties in cream, taupe and chocolate.', image: 'assets/products/B0DFLY968Q.jpg', link: 'B0DFLY968Q' },
      { name: 'Mulberry silk pillowcase', note: 'A pure silk pillowcase that is kind to hair and skin.', image: 'assets/products/B00KDL108M.jpg', link: 'B00KDL108M' },
      { name: 'Stainless steel gua sha', note: 'A cooling heart-shaped tool for a depuffing face massage.', image: 'assets/products/B092QMJXMH.jpg', link: 'B092QMJXMH' },
      { name: 'Surratt Relevee lash curler', note: 'A cult lash curler that makeup artists love.', image: 'assets/products/B00L4OS2LU.jpg', link: 'B00L4OS2LU' },
      { name: 'Quilted cotton makeup bags, set of 3', note: 'Cream quilted pouches that look far pricier than they are.', image: 'assets/products/B0C4NMJS1C.jpg', link: 'B0C4NMJS1C' },
      { name: 'Small travel jewelry box', note: 'A pastel case with ring rolls and a mirror for trips.', image: 'assets/products/B014T5TNYK.jpg', link: 'B014T5TNYK' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'amazon-entryway-decor-that-looks-expensive',
    title: 'Amazon Entryway Decor That Looks Expensive',
    category: 'home-finds',
    date: '2026-10-22',
    description: 'Amazon entryway decor that looks expensive: a gold ginkgo mirror, alabaster lamp, rattan bench, marble tray and brass hooks for a designer entry.',
    intro: 'The entry is the first thing anyone sees, so it should feel calm and collected. These Amazon finds lean on real stone, warm brass and natural textures to give a small entryway the look of a designer space.',
    image: 'assets/pins/amazon-entryway-decor-that-looks-expensive.jpg',
    imageAlt: 'Collage of entryway decor from Amazon: gold ginkgo leaf mirror, alabaster table lamp, rattan shoe bench, marble tray, travertine bowl and brass hooks on a linen background',
    products: [
      { name: 'Gold ginkgo leaf round mirror', note: 'A sculptural ring of gold ginkgo leaves that looks like a designer statement piece.', image: 'assets/products/B082YJ234Z.jpg', link: 'B082YJ234Z' },
      { name: 'Alabaster and gold table lamp', note: 'Real alabaster glows when it is lit, with brass accents and a crisp white shade.', image: 'assets/products/B07GY3WZT6.jpg', link: 'B07GY3WZT6' },
      { name: 'Rattan cane shoe storage bench', note: 'Cane doors and oak tones hide shoes and double as a styled entry console.', image: 'assets/products/B0F9Y3R476.jpg', link: 'B0F9Y3R476' },
      { name: 'Woven cotton rope baskets, set of 5', note: 'Soft neutral baskets that slide under a bench for shoes, scarves and dog leashes.', image: 'assets/products/B0FP5B3PWX.jpg', link: 'B0FP5B3PWX' },
      { name: 'Travertine key bowl', note: 'Natural stone makes a catchall for keys feel quietly luxe.', image: 'assets/products/B0D3TG15CY.jpg', link: 'B0D3TG15CY' },
      { name: 'White reactive glaze stoneware bowl', note: 'A handmade-looking footed bowl for an entry table or console.', image: 'assets/products/B09B4KP49X.jpg', link: 'B09B4KP49X' },
      { name: 'Real marble tray', note: 'Solid white marble that turns mail, keys and a candle into a styled vignette.', image: 'assets/products/B0D4F55946.jpg', link: 'B0D4F55946' },
      { name: 'Vintage brass coat hooks, set of 3', note: 'Classic solid hooks that look like old-house hardware.', image: 'assets/products/B074SLZLPQ.jpg', link: 'B074SLZLPQ' },
      { name: 'Rustic cream ceramic vase', note: 'A wide, textured vase that looks like an antique find.', image: 'assets/products/B0D4V62XSN.jpg', link: 'B0D4V62XSN' },
      { name: 'Faux olive branches, 39 in', note: 'Tall, airy stems that give a console instant height.', image: 'assets/products/B09P8CNBJ3.jpg', link: 'B09P8CNBJ3' },
      { name: 'Wood dough bowl', note: 'A long rustic bowl for a bench or console, styled or left empty.', image: 'assets/products/B0BS6L33SF.jpg', link: 'B0BS6L33SF' },
      { name: 'Brass and glass candle cloches, set of 2', note: 'Glass domes on brass bases that make a pillar candle look boutique.', image: 'assets/products/B0CP82JRKW.jpg', link: 'B0CP82JRKW' },
      { name: 'Marble bookends with wood inlay', note: 'White marble wedges with a warm wood stripe for a stack of books.', image: 'assets/products/B09BCNBNMH.jpg', link: 'B09BCNBNMH' },
      { name: 'White wood knot decor', note: 'A sculptural knot that adds a soft, modern touch to a small stack of books.', image: 'assets/products/B0BBH5ZDP4.jpg', link: 'B0BBH5ZDP4' },
      { name: 'Small round woven basket', note: 'A shallow wicker catchall for keys and sunglasses by the door.', image: 'assets/products/B0B67MGRGV.jpg', link: 'B0B67MGRGV' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'cozy-living-room-decor-from-amazon',
    title: 'Cozy Living Room Decor From Amazon',
    category: 'home-finds',
    date: '2026-10-22',
    description: 'Cozy living room decor from Amazon: chunky knit throws, linen pillow covers, warm lamps, candles, woven baskets and a faux olive tree.',
    intro: 'A cozy living room is all about texture and soft light. These Amazon finds layer chunky knits, washed linen, woven baskets and candlelight so the space feels warm, calm and lived in.',
    image: 'assets/pins/cozy-living-room-decor-from-amazon.jpg',
    imageAlt: 'Collage of cozy living room decor from Amazon: chunky knit throw, linen pillow covers, olive green mini lamp, scented candles, woven baskets and a faux olive tree',
    products: [
      { name: 'Chunky hand-knit throw blanket', note: 'Oversized knit loops in oatmeal that make the sofa look styled and feel cozy.', image: 'assets/products/B0BWHXH13L.jpg', link: 'B0BWHXH13L' },
      { name: 'Tan knit throw blanket', note: 'A soft taupe knit that suits a neutral living room.', image: 'assets/products/B09BBJN2W6.jpg', link: 'B09BBJN2W6' },
      { name: 'Natural linen throw blanket', note: 'Washed linen in a flax color for a relaxed, collected look.', image: 'assets/products/B0G3PFD2FS.jpg', link: 'B0G3PFD2FS' },
      { name: 'Linen pillow covers, set of 4', note: 'Textured taupe linen covers that refresh a sofa for less.', image: 'assets/products/B0C36BLX54.jpg', link: 'B0C36BLX54' },
      { name: 'Cotton linen lumbar pillow cover', note: 'A small earthy lumbar cover to layer in front of square pillows.', image: 'assets/products/B09XHXMZTQ.jpg', link: 'B09XHXMZTQ' },
      { name: 'Olive green mini lamp with pleated shade', note: 'A tiny glazed lamp with a scalloped shade for a warm side-table glow.', image: 'assets/products/B0DPL93Z47.jpg', link: 'B0DPL93Z47' },
      { name: 'La Jolie Muse jasmine candle', note: 'A glass apothecary-style jar that looks lovely on a coffee table.', image: 'assets/products/B01D1HEP0E.jpg', link: 'B01D1HEP0E' },
      { name: 'Diptyque Baies candle', note: 'The iconic designer candle with a berry and rose scent.', image: 'assets/products/B00429KMH6.jpg', link: 'B00429KMH6' },
      { name: 'Hotel-inspired scented candle', note: 'A cut-glass jar that brings a hotel lobby scent home.', image: 'assets/products/B0CW5WZHLZ.jpg', link: 'B0CW5WZHLZ' },
      { name: 'Faux olive tree, 6 ft', note: 'A tall olive tree in a cream planter that fills a bare corner.', image: 'assets/products/B0F3CQCVW3.jpg', link: 'B0F3CQCVW3' },
      { name: 'Scalloped water hyacinth basket', note: 'A woven basket with a scalloped lid, made for blankets.', image: 'assets/products/B0G4SXD85S.jpg', link: 'B0G4SXD85S' },
      { name: 'Seagrass belly basket with handles', note: 'A classic woven basket for a plant or extra throws.', image: 'assets/products/B01N0GK04I.jpg', link: 'B01N0GK04I' },
      { name: 'Round wood side table', note: 'A small three-leg table that fits next to any sofa or chair.', image: 'assets/products/B09FJ9KWXF.jpg', link: 'B09FJ9KWXF' },
      { name: 'Whitewashed wood candle holders, set of 3', note: 'Turned pillar holders with a soft, worn finish.', image: 'assets/products/B0CJJBDP2Y.jpg', link: 'B0CJJBDP2Y' },
      { name: 'Woven water hyacinth boat basket', note: 'A large handled basket that holds a stack of throws by the sofa.', image: 'assets/products/B0C8BQGTC3.jpg', link: 'B0C8BQGTC3' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'amazon-closet-organization-that-looks-luxe',
    title: 'Amazon Closet Organization That Looks Luxe',
    category: 'home-finds',
    date: '2026-10-22',
    description: 'Amazon closet organization that looks luxe: velvet hangers, lidded fabric bins, clear shoe boxes, acrylic purse organizers and velvet jewelry trays.',
    intro: 'A closet feels expensive when everything matches. These Amazon organizers in ivory, beige and clear acrylic give shoes, bags and jewelry a home and make even a small closet look like a boutique.',
    image: 'assets/pins/amazon-closet-organization-that-looks-luxe.jpg',
    imageAlt: 'Collage of closet organization finds from Amazon: ivory velvet hangers, cream lidded fabric bins, clear shoe display box, acrylic purse organizer and velvet jewelry trays',
    products: [
      { name: 'Ivory velvet hangers, 30 pack', note: 'Slim, matching velvet hangers that make any closet look like a boutique.', image: 'assets/products/B01M7S9C6N.jpg', link: 'B01M7S9C6N' },
      { name: 'Blush velvet hangers with rose gold hooks', note: 'Soft pink velvet with rose gold hooks for a feminine closet.', image: 'assets/products/B09GS49T8B.jpg', link: 'B09GS49T8B' },
      { name: 'Lidded fabric bins with leather handles', note: 'Cream bins with faux leather pulls that look custom on a shelf.', image: 'assets/products/B0CCCZSD8P.jpg', link: 'B0CCCZSD8P' },
      { name: 'Cream fabric storage bins with lids, 6 pack', note: 'Matching lidded boxes that hide sweaters and bags.', image: 'assets/products/B0FKH9LY3F.jpg', link: 'B0FKH9LY3F' },
      { name: 'Clear magnetic shoe boxes, 6 pack', note: 'Stackable drop-front boxes that keep shoes dust-free and on display.', image: 'assets/products/B0F8HMZC46.jpg', link: 'B0F8HMZC46' },
      { name: 'White expandable shoe shelf', note: 'A two-tier shelf that adjusts to the width of a closet floor.', image: 'assets/products/B0CRKTXMZM.jpg', link: 'B0CRKTXMZM' },
      { name: 'Clear stackable storage bin', note: 'A lidded clear bin for accessories, belts or folded tees.', image: 'assets/products/B092RKX1CW.jpg', link: 'B092RKX1CW' },
      { name: 'Acrylic purse organizer, 2 pack', note: 'Clear slots that line up handbags like a store display.', image: 'assets/products/B0DZ27V2YD.jpg', link: 'B0DZ27V2YD' },
      { name: 'Beige velvet stackable jewelry trays', note: 'Soft velvet compartments for bracelets, watches and rings.', image: 'assets/products/B0B41Z7TV8.jpg', link: 'B0B41Z7TV8' },
      { name: 'Velvet earring tray with lid', note: 'A 48-grid beige velvet case for studs and small earrings.', image: 'assets/products/B0FQC82NFT.jpg', link: 'B0FQC82NFT' },
      { name: 'Fabric drawer organizers, 12 pack', note: 'Cream dividers that keep socks and lingerie folded in place.', image: 'assets/products/B0BC966PMQ.jpg', link: 'B0BC966PMQ' },
      { name: 'Velvet jewelry drawer trays, set of 9', note: 'Mix-and-match trays that turn a dresser drawer into a jewelry box.', image: 'assets/products/B0B5GMBDY2.jpg', link: 'B0B5GMBDY2' },
      { name: 'Beige linen storage bins with lids, 3 pack', note: 'Collapsible linen boxes with a calm, textured look.', image: 'assets/products/B09N3QFYHD.jpg', link: 'B09N3QFYHD' },
      { name: 'Clear acrylic shoe display box', note: 'A tall magnetic-door case that shows off boots like a boutique.', image: 'assets/products/B0GF29N4Q7.jpg', link: 'B0GF29N4Q7' },
      { name: 'Ivory velvet hangers with tie bar, 50 pack', note: 'No-bump hangers with a bar for scarves and trousers.', image: 'assets/products/B0CWS3SSFN.jpg', link: 'B0CWS3SSFN' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'kitchen-counter-decor-that-looks-expensive',
    title: 'Kitchen Counter Decor That Looks Expensive: Marble and Ceramic Finds',
    category: 'home-finds',
    date: '2026-10-21',
    description: 'Kitchen counter decor that looks expensive: a marble tray, Carrara cutting board, ceramic canisters, a marble paper towel holder and oil bottles.',
    intro: 'Fifteen Amazon pieces that keep the kitchen counter useful and good-looking at the same time. White marble, matte ceramic, porcelain and warm wood, styled within reach of the stove.',
    image: 'assets/pins/kitchen-counter-decor-that-looks-expensive.jpg',
    imageAlt: 'Collage of Amazon kitchen counter decor on a linen background: ceramic canisters with bamboo lids, marble cutting board, marble bowl on an acacia pedestal, marble paper towel holder, ceramic oil bottle, ribbed utensil crock, salt cellar, wood risers, marble tray, porcelain and beaded glass cake stands, butter dish, pepper mill, green glass oil bottles and ceramic berry baskets.',
    products: [
      { name: 'Ceramic canisters with bamboo lids', note: 'Matte two-tone canisters for coffee, sugar and flour.', image: 'assets/products/B0FKB9YCT5.jpg', link: 'B0FKB9YCT5' },
      { name: 'Carrara marble cutting board', note: 'Real white marble that doubles as a serving board.', image: 'assets/products/B0FVWP57KW.jpg', link: 'B0FVWP57KW' },
      { name: 'Marble bowl on acacia pedestal', note: 'A marble and wood fruit bowl that looks like a designer piece.', image: 'assets/products/B0DJTLLX4B.jpg', link: 'B0DJTLLX4B' },
      { name: 'Marble paper towel holder', note: 'A stone base and gold rod that dress up an everyday essential.', image: 'assets/products/B0DNMRV5KZ.jpg', link: 'B0DNMRV5KZ' },
      { name: 'Ceramic olive oil bottle', note: 'A matte white pour bottle that looks nicer than the store bottle.', image: 'assets/products/B0DP622TWP.jpg', link: 'B0DP622TWP' },
      { name: 'Ribbed ceramic utensil crock', note: 'A sage ribbed crock that keeps spoons and spatulas in reach.', image: 'assets/products/B0CC173TN8.jpg', link: 'B0CC173TN8' },
      { name: 'Ceramic salt cellar', note: 'A lidded salt pot that keeps a pinch close to the stove.', image: 'assets/products/B0FPMHS59L.jpg', link: 'B0FPMHS59L' },
      { name: 'Wood display risers', note: 'Two tiered risers for styling canisters, plants or a coffee bar.', image: 'assets/products/B08WX81FWG.jpg', link: 'B08WX81FWG' },
      { name: 'White marble tray', note: 'A large marble tray that corrals oils and salt by the stove.', image: 'assets/products/B0CZYP6N4C.jpg', link: 'B0CZYP6N4C' },
      { name: 'Porcelain cake stand', note: 'A clean white pedestal for cakes, pastries or a fruit display.', image: 'assets/products/B07X5S3S1T.jpg', link: 'B07X5S3S1T' },
      { name: 'Beaded glass cake stand', note: 'A beaded edge that gives it a vintage, special-occasion look.', image: 'assets/products/B0CT69Y2VV.jpg', link: 'B0CT69Y2VV' },
      { name: 'Porcelain butter dish', note: 'A lidded white butter dish that keeps butter soft on the counter.', image: 'assets/products/B07SDD12D2.jpg', link: 'B07SDD12D2' },
      { name: 'Wooden pepper mill', note: 'A classic wood grinder with an adjustable coarseness setting.', image: 'assets/products/B0CZ7G5RGF.jpg', link: 'B0CZ7G5RGF' },
      { name: 'Green glass oil bottles, 2 pack', note: 'Olive green glass with pour spouts and labels for oil and vinegar.', image: 'assets/products/B0DYL9S29W.jpg', link: 'B0DYL9S29W' },
      { name: 'Ceramic berry baskets', note: 'Stoneware colanders for rinsing and serving fresh fruit.', image: 'assets/products/B0B7JGCCLP.jpg', link: 'B0B7JGCCLP' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'boho-bedroom-amazon-finds',
    title: 'Boho Bedroom Amazon Finds: Rattan, Macrame and Woven Decor',
    category: 'boho-dupes',
    date: '2026-10-21',
    description: 'Boho bedroom Amazon finds: a rattan cane nightstand, beaded wall mirror, macrame wall hanging, woven wall baskets, pampas grass and fringe throws.',
    intro: 'Fifteen Amazon finds for a warm, easy boho bedroom. Rattan, cane, macrame, seagrass and soft fringe knits layer into a room that feels collected rather than bought.',
    image: 'assets/pins/boho-bedroom-amazon-finds.jpg',
    imageAlt: 'Collage of boho Amazon bedroom decor on a linen background: rattan beaded mirror, macrame wall hanging, pampas grass, fringe and knit throws, beaded terracotta pot, macrame plant hangers, rattan cane nightstand, macrame and jute baskets, pom pom pillow, mud cloth pillow cover, woven wall baskets, wood daisy wall decor and wood candle holders.',
    products: [
      { name: 'Rattan beaded wall mirror', note: 'A round boho mirror with a wood-bead frame, perfect above a dresser.', image: 'assets/products/B09ST999ML.jpg', link: 'B09ST999ML' },
      { name: 'Macrame wall hanging', note: 'Handwoven ivory macrame that softens a blank wall above the bed.', image: 'assets/products/B074DSNYKR.jpg', link: 'B074DSNYKR' },
      { name: 'Dried pampas grass bouquet', note: 'Fluffy natural stems in a mix of neutral tones.', image: 'assets/products/B09VT4KQXM.jpg', link: 'B09VT4KQXM' },
      { name: 'Basketweave fringe throw', note: 'A cotton throw with tassels that layers easily over a duvet.', image: 'assets/products/B09QLJ65LF.jpg', link: 'B09QLJ65LF' },
      { name: 'Tan knit throw blanket', note: 'A warm taupe knit with fringe for a cozy bed.', image: 'assets/products/B09BBJ7PVP.jpg', link: 'B09BBJ7PVP' },
      { name: 'Beaded terracotta pot', note: 'Classic terracotta with a beaded texture and its own saucer.', image: 'assets/products/B08LNXYMN1.jpg', link: 'B08LNXYMN1' },
      { name: 'Macrame plant hangers, 3 pack', note: 'Hang trailing plants by the window for an easy boho corner.', image: 'assets/products/B088822MP6.jpg', link: 'B088822MP6' },
      { name: 'Rattan cane nightstand', note: 'Mid-century legs and a cane drawer front at a friendly size.', image: 'assets/products/B0C98FRKCX.jpg', link: 'B0C98FRKCX' },
      { name: 'Macrame storage baskets', note: 'Pretty woven bins for books, chargers or extra blankets.', image: 'assets/products/B083LG33T8.jpg', link: 'B083LG33T8' },
      { name: 'Jute rope basket', note: 'A sturdy two-tone basket for throws or a laundry hamper.', image: 'assets/products/B09ST6YNQ5.jpg', link: 'B09ST6YNQ5' },
      { name: 'Round pom pom pillow', note: 'A crocheted round pillow with pom pom trim for a playful layer.', image: 'assets/products/B095C16NQW.jpg', link: 'B095C16NQW' },
      { name: 'Mud cloth pillow cover', note: 'A graphic black and cream print that grounds a neutral bed.', image: 'assets/products/B0754M5RY4.jpg', link: 'B0754M5RY4' },
      { name: 'Woven wall baskets, set of 7', note: 'Seagrass wall baskets that make an easy gallery wall.', image: 'assets/products/B0CZ8KRWF8.jpg', link: 'B0CZ8KRWF8' },
      { name: 'Wood daisy wall decor', note: 'Three cane-style flower shapes that add a sweet touch.', image: 'assets/products/B0BWW5LGMW.jpg', link: 'B0BWW5LGMW' },
      { name: 'Wood pillar candle holders', note: 'Dark turned wood in three heights for a warm glow.', image: 'assets/products/B0CJJD9B9D.jpg', link: 'B0CJJD9B9D' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'gift-ideas-for-her-under-50',
    title: 'Gift Ideas for Her Under $50: Cozy and Pretty Amazon Gifts',
    category: 'gift-guides',
    date: '2026-10-21',
    description: 'Affordable gift ideas for her from Amazon: cloud socks, fluffy slippers, a puffy tote, a travel jewelry case, French hand cream and a velvet makeup bag.',
    intro: 'Thirteen affordable gifts for women who love cozy, pretty things. Plush socks, quilted bags, white porcelain and gift-ready beauty, easy picks for birthdays or the holidays.',
    image: 'assets/pins/gift-ideas-for-her-under-50.jpg',
    imageAlt: 'Collage of affordable Amazon gift ideas for her on a linen background: cloud socks, faux fur slippers, puffy tote, essential oil diffuser, cream duffel bag, travel jewelry case, white porcelain mugs, gold picture frame, hand cream trio, pink flower dish, gooseneck kettle, lip mask and a velvet makeup bag.',
    products: [
      { name: 'Cozy cloud socks', note: 'Fuzzy, plush socks that make an easy little gift.', image: 'assets/products/B09319MZJN.jpg', link: 'B09319MZJN' },
      { name: 'Faux fur cross-band slippers', note: 'Fluffy open-toe slippers that feel like a treat.', image: 'assets/products/B099WJDM7R.jpg', link: 'B099WJDM7R' },
      { name: 'BAGSMART puffy tote bag', note: 'A quilted weekender that works for the gym, travel or a carry-on.', image: 'assets/products/B0CSYNW3X3.jpg', link: 'B0CSYNW3X3' },
      { name: 'Essential oil diffuser', note: 'A wood-grain diffuser with a remote and soft light.', image: 'assets/products/B09D74N5FH.jpg', link: 'B09D74N5FH' },
      { name: 'Cream travel duffel bag', note: 'Comes with a shoe compartment and a matching pouch.', image: 'assets/products/B09W2G325H.jpg', link: 'B09W2G325H' },
      { name: 'Travel jewelry case', note: 'A slim cream case with a mirror and room for rings and earrings.', image: 'assets/products/B0D2QM43FT.jpg', link: 'B0D2QM43FT' },
      { name: 'Sweese porcelain mugs, set of 6', note: 'Classic white mugs that look nice on an open shelf.', image: 'assets/products/B073WTW5FM.jpg', link: 'B073WTW5FM' },
      { name: 'Gold branch picture frame', note: 'A delicate gold frame that makes any photo feel special.', image: 'assets/products/B071GZRVBW.jpg', link: 'B071GZRVBW' },
      { name: 'La Chatelaine hand cream trio', note: 'French hand creams in a gift-ready floral tin.', image: 'assets/products/B017LJYASU.jpg', link: 'B017LJYASU' },
      { name: 'Pink flower jewelry dish', note: 'A glazed petal dish for rings by the sink.', image: 'assets/products/B0BD5WRC85.jpg', link: 'B0BD5WRC85' },
      { name: 'Bodum gooseneck kettle', note: 'Precise pours for coffee or tea, with a cork handle.', image: 'assets/products/B07G2MBM6L.jpg', link: 'B07G2MBM6L' },
      { name: 'Abib collagen lip mask', note: 'A glossy, cushiony lip mask for soft lips overnight.', image: 'assets/products/B0DSP88HJ7.jpg', link: 'B0DSP88HJ7' },
      { name: 'Charlotte Tilbury velvet makeup bag', note: 'A quilted velvet bag that feels like a luxury gift.', image: 'assets/products/B0FGF7FSWL.jpg', link: 'B0FGF7FSWL' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'cozy-bedroom-finds-under-50',
    title: 'Cozy Bedroom Finds Under $50: Throws, Pillows and Sleep Essentials',
    category: 'under-50',
    date: '2026-10-21',
    description: 'Affordable cozy bedroom finds from Amazon: a buttery knit throw, boucle pillow covers, a waffle blanket, sunrise alarm clock, silk sleep mask and bed tray.',
    intro: 'Thirteen small, affordable upgrades for a cozier bedroom. Soft knits, nubby boucle, waffle cotton and warm light for slow mornings and better nights.',
    image: 'assets/pins/cozy-bedroom-finds-under-50.jpg',
    imageAlt: 'Collage of affordable cozy Amazon bedroom finds on a linen background: ivory knit throw, boucle pillow covers, fringe throw, faux eucalyptus, bamboo bed tray, sunrise alarm clock, faux fur pillow covers, night light, waffle blanket, sound machine, silk sleep mask, faux plant and a black jar candle.',
    products: [
      { name: 'Buttery ivory knit throw', note: 'Super soft and reversible, the throw you reach for every night.', image: 'assets/products/B0CN2K5S7K.jpg', link: 'B0CN2K5S7K' },
      { name: 'Ivory boucle pillow covers', note: 'Nubby boucle texture that makes a bed look styled.', image: 'assets/products/B0BNVY2JSY.jpg', link: 'B0BNVY2JSY' },
      { name: 'Diamond weave fringe throw', note: 'A cotton throw with tassels in a warm stone color.', image: 'assets/products/B079ZQ2216.jpg', link: 'B079ZQ2216' },
      { name: 'Faux eucalyptus in ceramic vase', note: 'Low-maintenance greenery that softens a nightstand.', image: 'assets/products/B0FHWGRQB2.jpg', link: 'B0FHWGRQB2' },
      { name: 'Bamboo bed tray desk', note: 'Fold-out legs and a tilting top for breakfast or a slow morning in bed.', image: 'assets/products/B0149SD6T0.jpg', link: 'B0149SD6T0' },
      { name: 'Sunrise alarm clock', note: 'Wakes you with gradual light instead of a jarring alarm.', image: 'assets/products/B0BZW7WY5M.jpg', link: 'B0BZW7WY5M' },
      { name: 'Faux fur pillow covers', note: 'Plush cream faux fur that adds instant coziness.', image: 'assets/products/B0C7W73H9G.jpg', link: 'B0C7W73H9G' },
      { name: 'Rechargeable motion night light', note: 'A soft warm glow for late-night trips, no outlet needed.', image: 'assets/products/B08M69ZLQ4.jpg', link: 'B08M69ZLQ4' },
      { name: 'Cotton waffle blanket', note: 'Breathable waffle-weave cotton that layers well in any season.', image: 'assets/products/B07D3M814L.jpg', link: 'B07D3M814L' },
      { name: 'White noise sound machine', note: 'Soothing sounds and a gentle night light for better sleep.', image: 'assets/products/B087CPCVK9.jpg', link: 'B087CPCVK9' },
      { name: 'Mulberry silk sleep mask', note: 'Smooth silk that blocks light and feels gentle on skin.', image: 'assets/products/B074TBYWGS.jpg', link: 'B074TBYWGS' },
      { name: 'Faux plant in woven pot', note: 'A small potted plant that adds a bit of green to a shelf.', image: 'assets/products/B08Z2XRXH8.jpg', link: 'B08Z2XRXH8' },
      { name: 'Lulu Candles jasmine oud candle', note: 'A warm, layered scent in a sleek black jar.', image: 'assets/products/B07J5S5Z9D.jpg', link: 'B07J5S5Z9D' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'vanity-organization-finds-that-look-luxe',
    title: 'Vanity Organization Finds That Look Luxe: Amazon Makeup Storage',
    category: 'beauty-finds',
    date: '2026-10-21',
    description: 'Vanity organization finds that look luxe: a gold mirrored tray, fluted acrylic holders, a marble brush cup, crystal trays and clear acrylic risers.',
    intro: 'Fifteen Amazon pieces that turn a crowded vanity into something that looks boutique. Marble, cut crystal, fluted acrylic and gold accents keep skincare and makeup in order and on display.',
    image: 'assets/pins/vanity-organization-finds-that-look-luxe.jpg',
    imageAlt: 'Collage of Amazon vanity organizers on a linen background: LED travel mirror, gold mirrored tray, marble-look makeup organizer, marble brush cup, clear and green fluted acrylic holders, acrylic swab jar, flower and crystal ring dishes, travel jewelry cases, acrylic riser, lipstick organizer, crystal tray and white oval ceramic tray.',
    products: [
      { name: 'LED travel makeup mirror', note: 'Bright, adjustable light in a slim folding mirror.', image: 'assets/products/B0895WCP3Z.jpg', link: 'B0895WCP3Z' },
      { name: 'Gold mirrored vanity tray', note: 'A glass and gold tray that makes perfume bottles look displayed.', image: 'assets/products/B08L1539X2.jpg', link: 'B08L1539X2' },
      { name: 'Marble-look makeup organizer', note: 'Four compartments for brushes and pencils with a marble finish.', image: 'assets/products/B07T5JJ3NH.jpg', link: 'B07T5JJ3NH' },
      { name: 'Marble brush holder cup', note: 'Real stone that keeps brushes upright and looks polished.', image: 'assets/products/B098QDZQD8.jpg', link: 'B098QDZQD8' },
      { name: 'Fluted acrylic cotton pad holder', note: 'Ribbed clear acrylic with a gold knob, for swabs and rounds.', image: 'assets/products/B0CB671N4G.jpg', link: 'B0CB671N4G' },
      { name: 'Green fluted cotton swab holder', note: 'Tinted ribbed acrylic with a gold knob, a pretty pop of color.', image: 'assets/products/B0CWTV3PW6.jpg', link: 'B0CWTV3PW6' },
      { name: 'Acrylic swab jar with wood lid', note: 'A simple clear jar with a warm wood lid for cotton swabs.', image: 'assets/products/B0C2HB4YQV.jpg', link: 'B0C2HB4YQV' },
      { name: 'Pink flower ring dish', note: 'A petal-shaped ceramic dish for rings and earrings.', image: 'assets/products/B0GCGLK3QD.jpg', link: 'B0GCGLK3QD' },
      { name: 'Crystal heart ring holder', note: 'Cut glass with a ring cone that sparkles on the vanity.', image: 'assets/products/B0DCZ4V4Z1.jpg', link: 'B0DCZ4V4Z1' },
      { name: 'Round travel jewelry case', note: 'A compact zip case that keeps necklaces untangled.', image: 'assets/products/B08XWTKLGS.jpg', link: 'B08XWTKLGS' },
      { name: 'Clear acrylic display riser', note: 'Three tiers that show off perfumes and skincare at a glance.', image: 'assets/products/B0C7BXC5BS.jpg', link: 'B0C7BXC5BS' },
      { name: 'Acrylic lipstick organizer', note: 'Clear slots that keep lipsticks upright and easy to find.', image: 'assets/products/B01187Z8KU.jpg', link: 'B01187Z8KU' },
      { name: 'Mini jewelry box', note: 'A small cream case with soft compartments for everyday pieces.', image: 'assets/products/B09MFLRNLG.jpg', link: 'B09MFLRNLG' },
      { name: 'Godinger crystal vanity tray', note: 'Cut-crystal pattern that feels vintage and elevated.', image: 'assets/products/B000XR4CZE.jpg', link: 'B000XR4CZE' },
      { name: 'White oval ceramic vanity tray', note: 'A clean oval tray with a gold rim for perfume and jewelry.', image: 'assets/products/B0CYBS65XM.jpg', link: 'B0CYBS65XM' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'clean-girl-amazon-must-haves',
    title: 'Clean Girl Amazon Must Haves: Lip Oils, Claw Clips and Skincare',
    category: 'beauty-finds',
    date: '2026-10-21',
    description: 'Clean girl Amazon must haves: lip oils, the Laneige lip balm, cream blush, claw clips, an ice roller, daily SPF and a silk sleep mask for an easy routine.',
    intro: 'Fifteen Amazon beauty favorites for the effortless, no-makeup makeup look. Glossy lips, a cream flush, sleek hair and skin that looks rested, without a long routine.',
    image: 'assets/pins/clean-girl-amazon-must-haves.jpg',
    imageAlt: 'Collage of clean girl Amazon beauty products on a linen background: Laneige lip balm, Burt\'s Bees and Summer Fridays lip oils, claw clips, cream blush stick, spa headbands, puffy makeup bags, gold compact mirror, ice roller, eyelash curler, paddle brush, silk sleep mask, SPF fluid, Cicaplast balm and a glowy lip tint.',
    products: [
      { name: 'Laneige lip treatment balm', note: 'A cult-favorite balm that keeps lips soft and glossy all day.', image: 'assets/products/B0D84WSNQK.jpg', link: 'B0D84WSNQK' },
      { name: 'Burt\'s Bees lip oil', note: 'A clear, non-sticky lip oil with jojoba for that natural glossy look.', image: 'assets/products/B0FS86VZQT.jpg', link: 'B0FS86VZQT' },
      { name: 'Summer Fridays Dream Lip Oil', note: 'A sheer tint with a juicy shine that feels light.', image: 'assets/products/B0DWG23MQG.jpg', link: 'B0DWG23MQG' },
      { name: 'Large claw clips, 2 pack', note: 'Glossy claw clips for the easy slicked-back twist.', image: 'assets/products/B0D2D17T7C.jpg', link: 'B0D2D17T7C' },
      { name: 'Cream blush stick', note: 'Swipe and blend with fingers for a fresh, flushed look.', image: 'assets/products/B0DGTQPBKQ.jpg', link: 'B0DGTQPBKQ' },
      { name: 'Spa bow headbands', note: 'Soft headbands that keep hair back during skincare.', image: 'assets/products/B0C1WVGJ5L.jpg', link: 'B0C1WVGJ5L' },
      { name: 'Puffy makeup bag set', note: 'A quilted three-piece set in camel that packs neatly.', image: 'assets/products/B0GCDXB5GZ.jpg', link: 'B0GCDXB5GZ' },
      { name: 'Gold compact mirror', note: 'A slim magnifying compact that looks chic in any purse.', image: 'assets/products/B08NTNQMZ5.jpg', link: 'B08NTNQMZ5' },
      { name: 'Ice roller', note: 'A quick morning de-puff that feels great straight from the freezer.', image: 'assets/products/B0CJHR7FH2.jpg', link: 'B0CJHR7FH2' },
      { name: 'e.l.f. eyelash curler', note: 'A simple curler that opens up the eyes for a no-makeup look.', image: 'assets/products/B004J2K5NC.jpg', link: 'B004J2K5NC' },
      { name: 'Moroccanoil paddle brush', note: 'A wide paddle brush that smooths hair for a sleek blowout.', image: 'assets/products/B003C1CWWI.jpg', link: 'B003C1CWWI' },
      { name: 'Mulberry silk sleep mask', note: 'Pure silk that is gentle on skin and lashes overnight.', image: 'assets/products/B074TBYWGS.jpg', link: 'B074TBYWGS' },
      { name: 'BYOMA SPF 50 face fluid', note: 'An ultralight sunscreen with no white cast, easy to wear daily.', image: 'assets/products/B0DR9WDR2G.jpg', link: 'B0DR9WDR2G' },
      { name: 'La Roche-Posay Cicaplast Balm B5', note: 'A soothing barrier balm for dry patches and irritated skin.', image: 'assets/products/B0060OUV5Y.jpg', link: 'B0060OUV5Y' },
      { name: 'Peripera glowy lip tint', note: 'A watery tint with a fresh glow finish that builds easily.', image: 'assets/products/B0GFHD3PVX.jpg', link: 'B0GFHD3PVX' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'neutral-bathroom-finds-that-look-high-end',
    title: 'Neutral Bathroom Finds That Look High-End: Amazon Bathroom Decor',
    category: 'home-finds',
    date: '2026-10-21',
    description: 'Neutral bathroom finds that look high-end: a marble tissue box cover, teak shower mat, Turkish hand towels, glass apothecary jars and woven baskets.',
    intro: 'Fifteen Amazon finds that give an everyday bathroom a calm, spa-like feel. Marble, teak, Turkish cotton and woven water hyacinth in soft creams and warm woods.',
    image: 'assets/pins/neutral-bathroom-finds-that-look-high-end.jpg',
    imageAlt: 'Collage of neutral Amazon bathroom decor on a linen background: marble-look accessory set, white ceramic vanity tray, white and striped Turkish towels, teak shower mat, ceramic toothbrush holders, glass apothecary jars, faux plants, rattan and marble tissue box covers, woven baskets, waffle towels and cotton bath mats.',
    products: [
      { name: 'Marble-look bathroom accessory set', note: 'A matching pump, cup, holder and dish in soft beige marble tones.', image: 'assets/products/B09785PR79.jpg', link: 'B09785PR79' },
      { name: 'White ceramic vanity tray', note: 'A clean, slim tray that keeps soap and lotion tidy by the sink.', image: 'assets/products/B0B3X1DGHJ.jpg', link: 'B0B3X1DGHJ' },
      { name: 'Turkish cotton hand towels, 6 pack', note: 'Plush white towels with that crisp hotel look.', image: 'assets/products/B0103XVVME.jpg', link: 'B0103XVVME' },
      { name: 'Striped Turkish hand towels', note: 'Tasseled peshtemal towels that add a relaxed spa feel.', image: 'assets/products/B08RHQRDN7.jpg', link: 'B08RHQRDN7' },
      { name: 'Teak shower mat', note: 'Warm wood underfoot, like a spa, and it dries quickly.', image: 'assets/products/B095BVCWFF.jpg', link: 'B095BVCWFF' },
      { name: 'Speckled ceramic toothbrush holder', note: 'A ribbed, speckled cup that looks more boutique than bathroom basic.', image: 'assets/products/B0G2PPVSN3.jpg', link: 'B0G2PPVSN3' },
      { name: 'Stoneware toothbrush holder', note: 'A reactive glaze that adds earthy texture to the counter.', image: 'assets/products/B0FB3HK1WS.jpg', link: 'B0FB3HK1WS' },
      { name: 'Glass apothecary jars, set of 3', note: 'Classic glass canisters for cotton rounds and swabs, display-worthy.', image: 'assets/products/B07NRJ3R17.jpg', link: 'B07NRJ3R17' },
      { name: 'Faux plant in ceramic pot', note: 'Easy greenery that survives a dark bathroom.', image: 'assets/products/B0G3PDKGCZ.jpg', link: 'B0G3PDKGCZ' },
      { name: 'Faux eucalyptus in ceramic vase', note: 'Soft green stems that freshen up the back of the vanity.', image: 'assets/products/B0FHWGRQB2.jpg', link: 'B0FHWGRQB2' },
      { name: 'Rattan tissue box cover', note: 'Hand-woven rattan that hides the cardboard box with natural texture.', image: 'assets/products/B08CZGNJPH.jpg', link: 'B08CZGNJPH' },
      { name: 'Water hyacinth baskets, 2 pack', note: 'Woven baskets for rolled towels and extra toilet paper on open shelves.', image: 'assets/products/B07SQ1X4FG.jpg', link: 'B07SQ1X4FG' },
      { name: 'Marble tissue box cover', note: 'A solid marble cube that feels hotel-bathroom polished.', image: 'assets/products/B0F7ND1SK1.jpg', link: 'B0F7ND1SK1' },
      { name: 'Waffle weave hand towels', note: 'Light, quick-drying waffle texture with a relaxed, linen-like look.', image: 'assets/products/B00I15YQU6.jpg', link: 'B00I15YQU6' },
      { name: 'Cotton bath mats, 2 pack', note: 'Thick ringspun cotton in a soft cream that feels like a hotel mat.', image: 'assets/products/B0C37JTMGH.jpg', link: 'B0C37JTMGH' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'organic-modern-decor-under-50',
    title: 'Organic Modern Decor Under $50: Travertine, Wood and Neutral Finds',
    category: 'under-50',
    date: '2026-10-21',
    description: 'Affordable organic modern decor from Amazon: travertine coasters and bookends, faux olive branches, a fluted bowl, turned wood candle holders and more.',
    intro: 'Thirteen organic modern pieces that look far more expensive than they are. Real travertine, turned wood, matte ceramic and soft cotton, the natural textures that make a room look considered.',
    image: 'assets/pins/organic-modern-decor-under-50.jpg',
    imageAlt: 'Collage of affordable organic modern Amazon decor on a linen background: faux olive branches, ribbed ceramic pitcher, fluted bowl, arched travertine coasters, travertine bookends, wood candle holders, fringe throw, carved wood knot, acacia tray, footed ceramic bowl, travertine trinket dish and vanity tray.',
    products: [
      { name: 'Faux olive branches', note: 'Realistic olive stems that bring an airy, Mediterranean touch to any vase.', image: 'assets/products/B07R21HCMT.jpg', link: 'B07R21HCMT' },
      { name: 'Ribbed ceramic pitcher', note: 'The distressed ribbed finish looks great with or without stems in it.', image: 'assets/products/B00JZMUI9W.jpg', link: 'B00JZMUI9W' },
      { name: 'Fluted decorative bowl', note: 'A scalloped, sculptural bowl that works as a centerpiece on its own.', image: 'assets/products/B0D3HH27MW.jpg', link: 'B0D3HH27MW' },
      { name: 'Arched travertine coasters', note: 'Real stone with a soft arch shape, pretty enough to leave out on the table.', image: 'assets/products/B0B5KYMDJP.jpg', link: 'B0B5KYMDJP' },
      { name: 'Travertine bookends', note: 'Weighty natural stone that holds books and doubles as shelf decor.', image: 'assets/products/B0D9VBQ2JH.jpg', link: 'B0D9VBQ2JH' },
      { name: 'Wood pillar candle holders, set of 3', note: 'Turned wood at three heights for an easy, layered mantel.', image: 'assets/products/B0BWTP1H5K.jpg', link: 'B0BWTP1H5K' },
      { name: 'Fringe cotton throw blanket', note: 'A basketweave texture in soft stone, light enough for year-round use.', image: 'assets/products/B09QLJ65LF.jpg', link: 'B09QLJ65LF' },
      { name: 'Carved wood knot decor', note: 'A simple sculptural accent for a coffee table stack or bookshelf.', image: 'assets/products/B0B9JVD63W.jpg', link: 'B0B9JVD63W' },
      { name: 'Acacia wood serving tray', note: 'Warm wood grain and cutout handles for serving or corralling decor.', image: 'assets/products/B08M68WY4F.jpg', link: 'B08M68WY4F' },
      { name: 'Footed ceramic bowl', note: 'A matte cream bowl on little feet that lifts fruit or decor nicely.', image: 'assets/products/B0C5XD61KL.jpg', link: 'B0C5XD61KL' },
      { name: 'Scalloped travertine trinket dish', note: 'A small stone dish with a wavy edge for rings and earrings.', image: 'assets/products/B0DWWYKC5S.jpg', link: 'B0DWWYKC5S' },
      { name: 'Wood taper candle holders', note: 'Rustic turned wood that softens a dining table or windowsill.', image: 'assets/products/B0CDH66N4L.jpg', link: 'B0CDH66N4L' },
      { name: 'Travertine vanity tray', note: 'Natural stone tray that instantly makes a candle and vase look styled.', image: 'assets/products/B0C4KQF1V8.jpg', link: 'B0C4KQF1V8' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'anthropologie-dupes-on-amazon',
    title: 'Anthropologie Dupes on Amazon: Boho Home Decor for Less',
    category: 'boho-dupes',
    date: '2026-10-21',
    description: 'Anthropologie dupes on Amazon: a beaded rattan mirror, block print pillows, a mother of pearl tray, a ginger jar vase and glowing glass candle holders.',
    intro: 'Fifteen pieces with that collected, boutique look, all found on Amazon. Rattan and wood beads, block print cotton, glazed ceramic and amber glass, mixed the way a well-traveled room is.',
    image: 'assets/pins/anthropologie-dupes-on-amazon.jpg',
    imageAlt: 'Collage of boho Amazon home decor on a linen background: rattan beaded mirror, tufted and block print pillow covers, floral throw, seagrass basket, amber and green candle holders, mushroom ring dish, blue and white ginger jar, pink bud vase, brass candle holders, mother of pearl tray, rope basket and pink knit throw.',
    products: [
      { name: 'Rattan beaded wall mirror', note: 'The wood-bead border gives a plain wall that handmade, collected feel.', image: 'assets/products/B09ST999ML.jpg', link: 'B09ST999ML' },
      { name: 'Tufted geometric pillow cover', note: 'Chunky tufted shapes in warm colors add texture and play to a neutral sofa.', image: 'assets/products/B08D9G93KS.jpg', link: 'B08D9G93KS' },
      { name: 'Blue block print pillow cover', note: 'A soft floral block print that looks straight out of a boutique catalog.', image: 'assets/products/B0DC4J4QHR.jpg', link: 'B0DC4J4QHR' },
      { name: 'Floral boho throw blanket', note: 'Painterly florals and a golden border make it a pretty layer at the foot of the bed.', image: 'assets/products/B0F9WSBG6B.jpg', link: 'B0F9WSBG6B' },
      { name: 'Seagrass belly basket', note: 'Works as a plant cover, blanket holder or laundry basket, and looks good doing all three.', image: 'assets/products/B07GWNB3NP.jpg', link: 'B07GWNB3NP' },
      { name: 'Amber bubble glass candle holder', note: 'The scalloped amber glass glows warm once a tealight is lit.', image: 'assets/products/B0G56GY5WM.jpg', link: 'B0G56GY5WM' },
      { name: 'Green ceramic chamberstick', note: 'A glazed, old-world candle holder that looks thrifted in the best way.', image: 'assets/products/B0H3YVG28L.jpg', link: 'B0H3YVG28L' },
      { name: 'Mushroom ring dish', note: 'A whimsical little catch-all for rings by the sink or on the nightstand.', image: 'assets/products/B0CF4XTF45.jpg', link: 'B0CF4XTF45' },
      { name: 'Blue and white ginger jar vase', note: 'Classic chinoiserie that pairs with almost any style, with or without flowers.', image: 'assets/products/B0B2K4NG5C.jpg', link: 'B0B2K4NG5C' },
      { name: 'Pink bubble bud vase', note: 'Holds a single stem and adds a pop of color to a shelf or desk.', image: 'assets/products/B0C585F32Z.jpg', link: 'B0C585F32Z' },
      { name: 'Brass pillar candle holders', note: 'Turned brass with a vintage shape for a warm, collected tablescape.', image: 'assets/products/B0FRLN4SK2.jpg', link: 'B0FRLN4SK2' },
      { name: 'Rattan tray with mother of pearl inlay', note: 'The green shell mosaic makes it a statement on an ottoman or console.', image: 'assets/products/B0F2H1CW35.jpg', link: 'B0F2H1CW35' },
      { name: 'Cotton rope basket with lid', note: 'Soft cream rope that hides remotes, cords or skincare without looking like storage.', image: 'assets/products/B092YYW8FQ.jpg', link: 'B092YYW8FQ' },
      { name: 'Pink knit throw blanket', note: 'A soft blush knit with fringe that brightens up a neutral room.', image: 'assets/products/B08DBGT8VB.jpg', link: 'B08DBGT8VB' },
      { name: 'Wavy ceramic taper candle holder', note: 'A sculptural, twisting shape that reads like a designer piece.', image: 'assets/products/B0BSWJYZ3J.jpg', link: 'B0BSWJYZ3J' }
    ]
  },
  // ----------------------------------------------------------------
  {
    slug: 'amazon-home-finds-that-look-expensive',
    title: 'Amazon Home Finds That Look Expensive',
    category: 'home-finds',
    date: '2026-10-20',
    description: 'Thirteen Amazon home decor finds in stone, ceramic, linen and warm wood that look high-end on a shelf, console or coffee table.',
    intro: 'Thirteen pieces that read high-end on a shelf, a console or a coffee table, all from Amazon. Think stone, ceramic, linen and warm wood.',
    image: 'assets/pins/pin01_home_expensive.jpg',
    imageAlt: 'Collage of neutral Amazon home decor: ribbed ceramic lamp, faux olive tree, wood bead garland, beige vases, travertine trays and pot, white ribbed vases, marble coasters, green marble bookends and ceramic bowls on a linen background.',
    products: [
      { name: 'Ribbed ceramic table lamp', note: 'A hand-textured base and a linen drum shade, the kind of lamp you would expect from a design store.', image: 'assets/products/01-ribbed-ceramic-table-lamp.png', link: 'B0GYQT74HH' },
      { name: 'Faux olive tree, 5 ft', note: 'Soft, muted leaves on a slim trunk that fill an empty corner with zero upkeep.', image: 'assets/products/02-faux-olive-tree.png', link: 'B0D5HK2KHW' },
      { name: 'Fluted porcelain taper candle holder', note: 'Glossy white fluting that looks custom on a dining table or mantel.', image: 'assets/products/03-fluted-porcelain-taper-candle-holder.png', link: 'B07DHR9N4C' },
      { name: 'Travertine vanity tray', note: 'A warm stone look with soft rounded corners, made for perfume, rings and a candle.', image: 'assets/products/04-travertine-vanity-tray.png', link: 'B0D9PTYJH6' },
      { name: 'Beige ceramic vase set of 3', note: 'Three matte, sandy shapes that style themselves on a shelf or console.', image: 'assets/products/05-beige-ceramic-vase-set.png', link: 'B09ZL23DWT' },
      { name: 'Free-form glazed ceramic bowl', note: 'An organic, wavy rim with a fine gold edge. Pretty empty, prettier with lemons.', image: 'assets/products/06-free-form-glazed-ceramic-bowl.png', link: 'B07TD4C7JL' },
      { name: 'Ribbed glossy ceramic vase', note: 'Clean vertical ribs in bright white that suit every stem, dried or fresh.', image: 'assets/products/07-ribbed-glossy-ceramic-vase.png', link: 'B0G2LSQKTG' },
      { name: 'Travertine-texture plant pot', note: 'The banded look of travertine for your favorite plant, without the price of stone.', image: 'assets/products/08-travertine-texture-plant-pot.png', link: 'B0DK51RRQ6' },
      { name: 'Marble coasters with brass inlay, set of 6', note: 'White marble with a single brass line. Jewelry for the coffee table.', image: 'assets/products/09-marble-coasters-brass-inlay.png', link: 'B07MLSYKSC' },
      { name: 'Wood bead garland', note: 'Natural beads with jute tassels to drape over a stack of books or a tray.', image: 'assets/products/10-wood-bead-garland.png', link: 'B07ZVKBJJX' },
      { name: 'Marble bookends', note: 'Deep green veined marble that anchors a shelf and adds weight to a neutral room.', image: 'assets/products/11-marble-bookends.png', link: 'B0D9V9M7NP' },
      { name: 'Large handcrafted ceramic bowl', note: 'A footed bowl with hand-drawn stripes. The piece guests ask about.', image: 'assets/products/12-large-handcrafted-ceramic-bowl.png', link: 'B0GDXCLRPW' },
      { name: 'Romano travertine tray', note: 'A scalloped edge in a soft travertine finish, for the bathroom counter or the entry.', image: 'assets/products/13-romano-travertine-tray.png', link: 'B0DWX56K18' }
    ]
  }
  // ----------------------------------------------------------------
];

var SITE = {
  name: 'The Muse Shelf',
  url: 'https://themuseshelf.com',
  tagline: 'Home & beauty finds that look expensive, for less.',
  email: 'hello.themuseshelf@gmail.com'
};

/* 5. Newsletter signup (home page + end of every post), provider = Kit (free plan).
   Form "Site signup - Designer Tricks guide" (id 10078821): single opt-in (auto-confirm); the welcome
   email's button downloads the PDF guide. The form posts urlencoded email_address and reads Kit's
   JSON reply (CORS ok); status 'quarantined' = Kit's bot check, the visitor is sent to its page.
   NEWSLETTER_ON = false hides every newsletter block. */
var NEWSLETTER_ON = true;
var NEWSLETTER = {
  endpoint: 'https://app.kit.com/forms/10078821/subscriptions',
  emailField: 'email_address',
  extraFields: {},
  title: 'Make your home look expensive (without spending like it)',
  text: 'Get our free guide, 10 Designer Tricks to Make Your Home Look Expensive, plus The Weekly Edit: one short email every Sunday.',
  button: 'Send me the guide',
  note: 'Free. One email a week. Unsubscribe anytime.',
  success: "You're in! Your free guide is on its way to your inbox (peek in Promotions, just in case)."
};
/* IG_SHOP:BEGIN */
/* Instagram grid for /shop/ (link in bio). Generated by tools/ig_shop_sync.py from the IG calendars:
   do not edit by hand. A tile shows once its scheduled time (at) has passed. */
var IG_POSTS = [
 {
  "at": "2026-11-22T19:00:00-06:00",
  "slug": "book-lover-gifts",
  "image": "assets/ig/2026-11-16-week4_8.jpg",
  "alt": "These marble bookends look like they're from a design store. They're from Amazon.",
  "reel": true
 },
 {
  "at": "2026-11-21T12:00:00-06:00",
  "slug": "amazon-black-friday-home-deals",
  "image": "assets/ig/2026-11-16-week4_7.jpg",
  "alt": "Finish her Christmas list during Black Friday.",
  "reel": false
 },
 {
  "at": "2026-11-20T19:00:00-06:00",
  "slug": "kitchen-counter-decor-that-looks-expensive",
  "image": "assets/ig/2026-11-16-week4_6.jpg",
  "alt": "Wait, this marble fruit bowl looks like it's from a design store. It's from Amazon.",
  "reel": true
 },
 {
  "at": "2026-11-19T19:00:00-06:00",
  "slug": "anthropologie-dupes-on-amazon",
  "image": "assets/ig/2026-11-16-week4_5.jpg",
  "alt": "Your blank wall is missing this.",
  "reel": true
 },
 {
  "at": "2026-11-18T19:00:00-06:00",
  "slug": "luxury-gifts-for-her-under-100",
  "image": "assets/ig/2026-11-16-week4_4.jpg",
  "alt": "This jewelry box looks like it's from a design store. It's from Amazon.",
  "reel": true
 },
 {
  "at": "2026-11-18T12:00:00-06:00",
  "slug": "amazon-black-friday-home-deals",
  "image": "assets/ig/2026-11-16-week4_3.jpg",
  "alt": "The 8 home pieces we're watching for Black Friday.",
  "reel": false
 },
 {
  "at": "2026-11-17T19:00:00-06:00",
  "slug": "amazon-entryway-decor-that-looks-expensive",
  "image": "assets/ig/2026-11-16-week4_2.jpg",
  "alt": "This alabaster lamp looks like it's from a design store. It's from Amazon.",
  "reel": true
 },
 {
  "at": "2026-11-16T19:00:00-06:00",
  "slug": "friendsgiving-table-ideas",
  "image": "assets/ig/2026-11-16-week4_1.jpg",
  "alt": "Your Friendsgiving dessert table, done with one cake stand.",
  "reel": true
 },
 {
  "at": "2026-11-15T19:00:00-06:00",
  "slug": "amazon-home-finds-under-30",
  "image": "assets/ig/2026-11-09-week3_8.jpg",
  "alt": "This ribbed glass vase looks like it's from a design store.",
  "reel": true
 },
 {
  "at": "2026-11-13T19:00:00-06:00",
  "slug": "gifts-for-mother-in-law-that-look-expensive",
  "image": "assets/ig/2026-11-09-week3_7.jpg",
  "alt": "This faux leather tray looks like it's from a design store.",
  "reel": true
 },
 {
  "at": "2026-11-13T12:00:00-06:00",
  "slug": "ralph-lauren-christmas-tree-look-for-less",
  "image": "assets/ig/2026-11-09-week3_6.jpg",
  "alt": "The Ralph Lauren Christmas look, found on Amazon.",
  "reel": false
 },
 {
  "at": "2026-11-12T19:00:00-06:00",
  "slug": "christmas-gifts-for-women-that-look-expensive",
  "image": "assets/ig/2026-11-09-week3_5.jpg",
  "alt": "The gift that looks expensive: a real marble vanity tray.",
  "reel": true
 },
 {
  "at": "2026-11-11T19:00:00-06:00",
  "slug": "cozy-reading-nook-ideas",
  "image": "assets/ig/2026-11-09-week3_4.jpg",
  "alt": "This brass sconce looks like it's from a design store. It's from Amazon.",
  "reel": true
 },
 {
  "at": "2026-11-10T19:00:00-06:00",
  "slug": "hot-chocolate-bar-ideas",
  "image": "assets/ig/2026-11-09-week3_3.jpg",
  "alt": "A hot cocoa bar that looks catered ☕️",
  "reel": true
 },
 {
  "at": "2026-11-10T12:00:00-06:00",
  "slug": "pottery-barn-stocking-dupes",
  "image": "assets/ig/2026-11-09-week3_2.jpg",
  "alt": "Pottery Barn stockings or Amazon? Can you tell?",
  "reel": false
 },
 {
  "at": "2026-11-09T19:00:00-06:00",
  "slug": "christmas-coffee-table-decor",
  "image": "assets/ig/2026-11-09-week3_1.jpg",
  "alt": "These brass lanterns look like they're from a design store.",
  "reel": true
 },
 {
  "at": "2026-11-08T19:00:00-06:00",
  "slug": "cozy-gifts-for-the-homebody",
  "image": "assets/ig/2026-11-02-week2_14.jpg",
  "alt": "The coziest gift for the homebody in your life 🤍",
  "reel": true
 },
 {
  "at": "2026-11-06T19:00:00-06:00",
  "slug": "hostess-gifts-under-30",
  "image": "assets/ig/2026-11-02-week2_10.jpg",
  "alt": "This looks way more expensive than it is.",
  "reel": true
 },
 {
  "at": "2026-11-05T19:00:00-06:00",
  "slug": "greenery-bedroom-ideas",
  "image": "assets/ig/2026-11-02-week2_8.jpg",
  "alt": "This olive tree never needs a drop of water 🌿",
  "reel": true
 },
 {
  "at": "2026-11-05T12:00:00-06:00",
  "slug": "gift-basket-ideas-for-her",
  "image": "assets/ig/2026-11-02-week2_7.jpg",
  "alt": "The cozy gift basket she'll actually use.",
  "reel": false
 },
 {
  "at": "2026-11-04T19:00:00-06:00",
  "slug": "christmas-kitchen-decor-that-looks-expensive",
  "image": "assets/ig/2026-11-02-week2_6.jpg",
  "alt": "These mugs look way more expensive than they are.",
  "reel": true
 },
 {
  "at": "2026-11-03T19:00:00-06:00",
  "slug": "christmas-mantle-decor-that-looks-expensive",
  "image": "assets/ig/2026-11-02-week2_4.jpg",
  "alt": "These brass candlesticks make a mantel look expensive.",
  "reel": true
 },
 {
  "at": "2026-11-02T19:00:00-06:00",
  "slug": "christmas-table-decor-ideas",
  "image": "assets/ig/2026-11-02-week2_2.jpg",
  "alt": "This dough bowl looks way more expensive than it is.",
  "reel": true
 },
 {
  "at": "2026-11-02T12:00:00-06:00",
  "slug": "friendsgiving-table-ideas",
  "image": "assets/ig/2026-11-02-week2_1.jpg",
  "alt": "A Friendsgiving table that looks catered (it isn't).",
  "reel": false
 },
 {
  "at": "2026-10-28T19:00:00-05:00",
  "slug": "boho-bedroom-amazon-finds",
  "image": "assets/ig/2026-10-21-week1_5.jpg",
  "alt": "The boho bedroom you'll never want to leave.",
  "reel": true
 },
 {
  "at": "2026-10-28T15:00:00-05:00",
  "slug": "neutral-christmas-decor-from-amazon",
  "image": "assets/ig/2026-10-21-week1_17.jpg",
  "alt": "This ceramic tree looks like a vintage find. It's from Amazon.",
  "reel": true
 },
 {
  "at": "2026-10-27T15:00:00-05:00",
  "slug": "clean-girl-amazon-must-haves",
  "image": "assets/ig/2026-10-21-week1_12.jpg",
  "alt": "Clean girl essentials that make mornings feel easy.",
  "reel": true
 },
 {
  "at": "2026-10-27T12:00:00-05:00",
  "slug": "gift-ideas-for-her-under-50",
  "image": "assets/ig/2026-10-21-week1_11.jpg",
  "alt": "Gifts that feel luxe, all under $50.",
  "reel": false
 },
 {
  "at": "2026-10-26T19:00:00-05:00",
  "slug": "amazon-home-finds-that-look-expensive",
  "image": "assets/ig/2026-10-21-week1_10.jpg",
  "alt": "A living room that feels like a long exhale.",
  "reel": true
 },
 {
  "at": "2026-10-26T12:00:00-05:00",
  "slug": "kitchen-counter-decor-that-looks-expensive",
  "image": "assets/ig/2026-10-21-week1_9.jpg",
  "alt": "Kitchen counters that look like a magazine shoot.",
  "reel": false
 },
 {
  "at": "2026-10-25T19:00:00-05:00",
  "slug": "amazon-home-finds-that-look-expensive",
  "image": "assets/ig/2026-10-21-week1_16.jpg",
  "alt": "This lamp looks like it's from a design store. It's from Amazon.",
  "reel": true
 },
 {
  "at": "2026-10-25T12:00:00-05:00",
  "slug": "cozy-bedroom-finds-under-50",
  "image": "assets/ig/2026-10-21-week1_8.jpg",
  "alt": "Make your bedroom feel like a slow Sunday morning, all under $50.",
  "reel": false
 },
 {
  "at": "2026-10-24T19:00:00-05:00",
  "slug": "vanity-organization-finds-that-look-luxe",
  "image": "assets/ig/2026-10-21-week1_7.jpg",
  "alt": "A vanity that feels like a little luxury every morning.",
  "reel": true
 },
 {
  "at": "2026-10-24T12:00:00-05:00",
  "slug": "anthropologie-dupes-on-amazon",
  "image": "assets/ig/2026-10-21-week1_6.jpg",
  "alt": "The Anthropologie look, without the Anthropologie price.",
  "reel": false
 },
 {
  "at": "2026-10-23T19:00:00-05:00",
  "slug": "amazon-home-finds-that-look-expensive",
  "image": "assets/ig/2026-10-21-week1_15.jpg",
  "alt": "This tray looks like it's from a design store. It's from Amazon.",
  "reel": true
 },
 {
  "at": "2026-10-23T12:00:00-05:00",
  "slug": "organic-modern-decor-under-50",
  "image": "assets/ig/2026-10-21-week1_4.jpg",
  "alt": "A calm, collected home for under $50 a piece.",
  "reel": false
 },
 {
  "at": "2026-10-22T19:00:00-05:00",
  "slug": "amazon-home-finds-that-look-expensive",
  "image": "assets/ig/2026-10-21-week1_14.jpg",
  "alt": "Rooms that look expensive. All from Amazon.",
  "reel": true
 },
 {
  "at": "2026-10-22T15:00:00-05:00",
  "slug": "neutral-bathroom-finds-that-look-high-end",
  "image": "assets/ig/2026-10-21-week1_3.jpg",
  "alt": "Your bathroom, but make it boutique hotel.",
  "reel": true
 },
 {
  "at": "2026-10-22T12:00:00-05:00",
  "slug": "clean-girl-amazon-must-haves",
  "image": "assets/ig/2026-10-21-week1_2.jpg",
  "alt": "That effortless, just-woke-up-glowing feeling.",
  "reel": false
 },
 {
  "at": "2026-10-21T10:38:00-05:00",
  "slug": "amazon-home-finds-that-look-expensive",
  "image": "assets/ig/2026-10-21-week1_1.jpg",
  "alt": "Amazon finds that look straight out of a design shop.",
  "reel": false
 }
];
/* IG_SHOP:END */


/* 4. Our shop (shop.themuseshelf.com, Shopify dropship store). These are OUR products at OUR prices, so the
      "From our shop" blocks may show prices. They never replace the Amazon picks, links, tags or disclosure.
      SHOP_IN_POSTS: post slug -> 2-4 shop handles shown under that post's Amazon list. */
var SHOP_URL = 'https://shop.themuseshelf.com';
var SHOP_ITEMS = {
  'linked-ring-pendant-chain-necklace': { name: 'Linked ring pendant necklace, gold', price: '$19', image: 'assets/shop/linked-ring-pendant-chain-necklace.jpg' },
  'stainless-steel-inlaid-zircon-c-hoop-earrings': { name: 'Zircon C-hoop earrings, gold', price: '$19', image: 'assets/shop/stainless-steel-inlaid-zircon-c-hoop-earrings.jpg' },
  'weeboo-thick-bottom-fur-trim-snow-slippers': { name: 'Faux fur trim snow slippers', price: '$42', image: 'assets/shop/weeboo-thick-bottom-fur-trim-snow-slippers.jpg' },
  'scalloped-marble-trinket-tray-6-in': { name: 'Scalloped marble trinket tray, 6 in', price: '$94', image: 'assets/shop/scalloped-marble-trinket-tray-6-in.jpg' },
  'gold-glass-two-section-jewelry-box-10-in': { name: 'Gold glass two-section jewelry box', price: '$69', image: 'assets/shop/gold-glass-two-section-jewelry-box-10-in.jpg' },
  'beige-marble-decorative-orbs-set-of-2': { name: 'Beige marble decorative orbs, set of 2', price: '$69', image: 'assets/shop/beige-marble-decorative-orbs-set-of-2.jpg' },
  'beige-ribbed-cotton-pillows-with-fringe-set-of-2': { name: 'Ribbed cotton fringe pillows, set of 2', price: '$79', image: 'assets/shop/beige-ribbed-cotton-pillows-with-fringe-set-of-2.jpg' },
  'gold-arch-wall-mirror-35-in': { name: 'Gold arch wall mirror, 35 in', price: '$89', image: 'assets/shop/gold-arch-wall-mirror-35-in.jpg' },
  'antiqued-brass-taper-candlestick-10-in': { name: 'Antiqued brass taper candlestick', price: '$69', image: 'assets/shop/antiqued-brass-taper-candlestick-10-in.jpg' },
  'white-marble-round-bowl-7-in': { name: 'White marble round bowl, 7 in', price: '$86', image: 'assets/shop/white-marble-round-bowl-7-in.jpg' },
  'cream-ceramic-pedestal-bowl-12-in': { name: 'Cream ceramic pedestal bowl, 12 in', price: '$84', image: 'assets/shop/cream-ceramic-pedestal-bowl-12-in.jpg' },
  'cream-ceramic-table-vase-10-in': { name: 'Cream ceramic table vase, 10 in', price: '$49', image: 'assets/shop/cream-ceramic-table-vase-10-in.jpg' },
  'sand-ribbed-ceramic-bud-vase-6-in': { name: 'Sand ribbed ceramic bud vase', price: '$49', image: 'assets/shop/sand-ribbed-ceramic-bud-vase-6-in.jpg' },
  'cream-ceramic-beehive-table-lamp-17-in': { name: 'Cream ceramic beehive table lamp', price: '$79', image: 'assets/shop/cream-ceramic-beehive-table-lamp-17-in.jpg' },
  'trinket-dish-moonburn-creations': { name: 'Handmade ceramic trinket dish', price: '$16', image: 'assets/shop/trinket-dish-moonburn-creations.jpg' },
  'amber-santal-soy-blend-candle-sweet-amber-creamy-sandalwood-vanilla-orchid': { name: 'Amber Santal soy candle', price: '$19', image: 'assets/shop/amber-santal-soy-blend-candle-sweet-amber-creamy-sandalwood-vanilla-orchid.jpg' }
};
var SHOP_IN_POSTS = {
  'christmas-entryway-table-decor': ['gold-arch-wall-mirror-35-in', 'antiqued-brass-taper-candlestick-10-in', 'cream-ceramic-table-vase-10-in', 'cream-ceramic-beehive-table-lamp-17-in'],
  'how-to-style-a-coffee-table': ['beige-marble-decorative-orbs-set-of-2', 'cream-ceramic-pedestal-bowl-12-in', 'sand-ribbed-ceramic-bud-vase-6-in', 'antiqued-brass-taper-candlestick-10-in'],
  'christmas-mantle-decor-that-looks-expensive': ['gold-arch-wall-mirror-35-in', 'antiqued-brass-taper-candlestick-10-in', 'cream-ceramic-table-vase-10-in', 'beige-marble-decorative-orbs-set-of-2'],
  'christmas-table-decor-ideas': ['antiqued-brass-taper-candlestick-10-in', 'cream-ceramic-pedestal-bowl-12-in', 'white-marble-round-bowl-7-in', 'cream-ceramic-table-vase-10-in'],
  'greenery-bedroom-ideas': ['beige-ribbed-cotton-pillows-with-fringe-set-of-2', 'cream-ceramic-beehive-table-lamp-17-in', 'sand-ribbed-ceramic-bud-vase-6-in', 'cream-ceramic-table-vase-10-in'],
  'neutral-bathroom-finds-that-look-high-end': ['scalloped-marble-trinket-tray-6-in', 'white-marble-round-bowl-7-in', 'sand-ribbed-ceramic-bud-vase-6-in'],
  'vanity-organization-finds-that-look-luxe': ['gold-glass-two-section-jewelry-box-10-in', 'scalloped-marble-trinket-tray-6-in', 'sand-ribbed-ceramic-bud-vase-6-in'],
  'gift-ideas-for-her-under-50': ['linked-ring-pendant-chain-necklace', 'stainless-steel-inlaid-zircon-c-hoop-earrings', 'weeboo-thick-bottom-fur-trim-snow-slippers', 'sand-ribbed-ceramic-bud-vase-6-in'],
  'housewarming-gifts-that-look-expensive': ['beige-marble-decorative-orbs-set-of-2', 'cream-ceramic-table-vase-10-in', 'antiqued-brass-taper-candlestick-10-in', 'white-marble-round-bowl-7-in'],
  'anthropologie-mirror-dupes': ['gold-arch-wall-mirror-35-in', 'antiqued-brass-taper-candlestick-10-in', 'cream-ceramic-table-vase-10-in']
};
function shopLink(handle, campaign) {
  return SHOP_URL + '/products/' + handle + '?utm_source=site&utm_medium=post&utm_campaign=' + encodeURIComponent(campaign);
}
var SHOP = { url: SHOP_URL, nav: SHOP_URL + '/?utm_source=site&utm_medium=nav', items: SHOP_ITEMS, posts: SHOP_IN_POSTS, link: shopLink };

window.TMS = { IG_POSTS: IG_POSTS, NEWSLETTER_ON: NEWSLETTER_ON, NEWSLETTER: NEWSLETTER, AFFILIATE_TAG: AFFILIATE_TAG, amazon: amazon, CATEGORIES: CATEGORIES, POSTS: POSTS, SITE: SITE, SHOP: SHOP };
