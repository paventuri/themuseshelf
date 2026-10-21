#!/bin/bash
# Publish dist/ to the gh-pages branch of paventuri/themuseshelf (GitHub Pages).
set -e
cd "$(dirname "$0")/.."
[ -f dist/index.html ] || { echo "run the build first"; exit 1; }
TMP=$(mktemp -d)
cp -R dist/. "$TMP"/
cd "$TMP"
git init -q -b gh-pages
git -c user.name="Paulo Venturi" -c user.email="paulo.venturi@gmail.com" add -A
git -c user.name="Paulo Venturi" -c user.email="paulo.venturi@gmail.com" commit -qm "Deploy $(date -u +%Y-%m-%dT%H:%MZ)"
git remote add origin git@github.com:paventuri/themuseshelf.git
git push -qf origin gh-pages
echo "deployed"
rm -rf "$TMP"
