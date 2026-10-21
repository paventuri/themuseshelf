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
      { name: 'Yara roll-on perfume oil', note: 'The viral gourmand scent in a purse-size roller.', image: 'assets/products/B0D9J28R16.jpg', link: 'B0D9J28R16' },
      { name: 'Rose quartz roller set', note: 'A pretty depuffing roller and gua sha for her morning routine.', image: 'assets/products/B07WWC3T9Q.jpg', link: 'B07WWC3T9Q' },
      { name: 'Gold under-eye patches', note: 'Gold eye masks for a quick refresh before plans.', image: 'assets/products/B014E2D6BY.jpg', link: 'B014E2D6BY' },
      { name: 'Volcano mini tin candle', note: 'The cult Capri Blue scent in a small, giftable tin.', image: 'assets/products/B0B5M1Q93F.jpg', link: 'B0B5M1Q93F' },
      { name: 'Velvet scrunchies, 8 pc', note: 'Soft neutral scrunchies that are gentle on hair.', image: 'assets/products/B07H7YCDR4.jpg', link: 'B07H7YCDR4' },
      { name: 'Polka dot claw clips', note: 'Big acetate clips in a classic black and white print.', image: 'assets/products/B0G93DCPHC.jpg', link: 'B0G93DCPHC' },
      { name: 'Mulberry silk sleep mask', note: 'Smooth silk that feels luxe and blocks out the light.', image: 'assets/products/B07C7Y8QSW.jpg', link: 'B07C7Y8QSW' },
      { name: 'Manicure set, 30 piece', note: 'A compact nail kit in a neat travel case.', image: 'assets/products/B08T6KX273.jpg', link: 'B08T6KX273' },
      { name: 'Striped hair towel wrap', note: 'A cotton turban that dries hair gently after a shower.', image: 'assets/products/B0GH6S6Q18.jpg', link: 'B0GH6S6Q18' },
      { name: 'Gold huggie hoops', note: 'Everyday gold huggies in a set of sizes.', image: 'assets/products/B0974YDZSF.jpg', link: 'B0974YDZSF' },
      { name: 'Cloud fuzzy socks', note: 'Ultra-soft socks for slow, cozy mornings.', image: 'assets/products/B0DZC4NT9J.jpg', link: 'B0DZC4NT9J' },
      { name: 'Kate Spade scalloped ring dish', note: 'A pink scalloped dish with a gold bow for rings by the sink.', image: 'assets/products/B0F1W31ZP2.jpg', link: 'B0F1W31ZP2' },
      { name: 'Hand cream trio', note: 'Three pretty hand cream tins for her bag, desk and nightstand.', image: 'assets/products/B0CGT8F891.jpg', link: 'B0CGT8F891' }
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
      { name: 'Ribbed faux fur throw', note: 'A plush throw she\'ll keep on the sofa all winter.', image: 'assets/products/B0C1YZJJ5L.jpg', link: 'B0C1YZJJ5L' },
      { name: 'Mulberry silk pillowcase', note: 'Gentle on hair and skin, and it feels like a treat.', image: 'assets/products/B07VKRTKRM.jpg', link: 'B07VKRTKRM' },
      { name: 'Sherpa slippers', note: 'Cushioned, cozy slippers for slow mornings.', image: 'assets/products/B0BYNYWKC7.jpg', link: 'B0BYNYWKC7' },
      { name: 'Mug warmer', note: 'Keeps her coffee warm while she works or reads.', image: 'assets/products/B0BD98G8DB.jpg', link: 'B0BD98G8DB' },
      { name: 'Cashmere crew socks', note: 'Soft cashmere socks that feel indulgent.', image: 'assets/products/B0CN575572.jpg', link: 'B0CN575572' },
      { name: '4-piece pajama set', note: 'A soft button-down set plus a cami and shorts for lazy weekends.', image: 'assets/products/B0FKG2LXNP.jpg', link: 'B0FKG2LXNP' },
      { name: 'Initial ring dish', note: 'A personal touch: her gold initial on a little white dish.', image: 'assets/products/B0CX1RXZ6N.jpg', link: 'B0CX1RXZ6N' },
      { name: 'Sunrise alarm clock', note: 'Wakes her with a soft glow and calm sounds instead of a blaring alarm.', image: 'assets/products/B0DRW6TWXS.jpg', link: 'B0DRW6TWXS' },
      { name: 'Leather travel jewelry case', note: 'A compact case with a mirror for trips.', image: 'assets/products/B0F8ZT3D3F.jpg', link: 'B0F8ZT3D3F' },
      { name: 'Eucalyptus reed diffuser', note: 'A fresh, spa-like scent with no flame.', image: 'assets/products/B0DY7LWDW1.jpg', link: 'B0DY7LWDW1' },
      { name: 'Organic tea sampler box', note: 'Six organic teas in a bamboo presentation box.', image: 'assets/products/B0BFBN81S8.jpg', link: 'B0BFBN81S8' },
      { name: 'Wine glasses, set of 12', note: 'Classic stemmed glasses for holiday dinners.', image: 'assets/products/B0BQBMHW5T.jpg', link: 'B0BQBMHW5T' }
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

window.TMS = { AFFILIATE_TAG: AFFILIATE_TAG, amazon: amazon, CATEGORIES: CATEGORIES, POSTS: POSTS, SITE: SITE };
