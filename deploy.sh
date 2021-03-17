#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -b gh-pages
git remote add origin http://github.com/marodi-mykhailo/store-vue.git
git add -A
git commit -m 'deploy'
git push -f origin gh-pages

cd -
