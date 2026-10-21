# The Muse Shelf (themuseshelf.com)

Static site rebuilt from Camilla's Claude Design export. Source lives in `src/`, the build prerenders every route.

- Edit posts, categories and the Amazon tag in `src/js/content.js` (product images in `src/assets/products/`, pins in `src/assets/pins/`).
- Build: `cd tools && npm i` once, then `NODE_PATH=tools/node_modules node tools/build.js [--qa]` from this folder -> `dist/`.
- Deploy: `tools/deploy.sh` pushes `dist/` to the `gh-pages` branch (GitHub Pages, custom domain themuseshelf.com).
