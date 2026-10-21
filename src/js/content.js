/* =====================================================================
   THE MUSE SHELF — SITE CONTENT
   This is the only file you edit to add or change posts.
   ---------------------------------------------------------------------
   1. Your Amazon Associates tag. Change it once here and every product
      link on the site updates.
   ===================================================================== */
var AFFILIATE_TAG = 'themuseshel01-20';

/* Builds the full Amazon link. Use: amazon('B0GYQT74HH') */
function amazon(asinOrUrl) {
  var url = asinOrUrl.indexOf('http') === 0 ? asinOrUrl : 'https://www.amazon.com/dp/' + asinOrUrl;
  if (!AFFILIATE_TAG) return url;
  return url + (url.indexOf('?') === -1 ? '?' : '&') + 'tag=' + AFFILIATE_TAG;
}

/* 2. Categories (nav order). slug = the URL, e.g. themuseshelf.com/home-finds */
var CATEGORIES = [
  { slug: 'home-finds', name: 'Home Finds', intro: 'Neutral, organic-modern pieces that look like they came from a design shop.', image: 'assets/products/05-beige-ceramic-vase-set.png' },
  { slug: 'beauty-finds', name: 'Beauty Finds', intro: 'Clean-girl essentials and vanity pieces worth the counter space.', image: 'assets/products/B0DWG23MQG.jpg' },
  { slug: 'boho-dupes', name: 'Boho & Dupes', intro: 'The Anthropologie look, found on Amazon for a lot less.', image: 'assets/products/10-wood-bead-garland.png' },
  { slug: 'gift-guides', name: 'Gift Guides', intro: 'Thoughtful, good-looking gifts for everyone on your list.', image: 'assets/products/09-marble-coasters-brass-inlay.png' },
  { slug: 'under-50', name: 'Under $50', intro: 'Every find in these edits comes in under fifty dollars.', image: 'assets/products/13-romano-travertine-tray.png' }
];

/* 3. Posts. Newest first. To add a post, copy the block between the
      ---- lines, paste it at the top of the list and fill it in.
      - slug: the URL. Lead with the search phrase, lowercase, hyphens.
      - category: one of the slugs above.
      - image: the Pinterest pin (1000 x 1500 JPG, under 300 KB).
      - products: name, note (one sentence), image (square, on white), link (ASIN or full Amazon URL).
      Never add prices. Put a price range only in the title ("Under $50"). */
var POSTS = [
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

window.TMS = { AFFILIATE_TAG: AFFILIATE_TAG, amazon: amazon, CATEGORIES: CATEGORIES, POSTS: POSTS, SITE: SITE };
