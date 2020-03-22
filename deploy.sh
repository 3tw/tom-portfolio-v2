#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
git init
git add -A
git commit -m 'deploy'

# change branch name 
git branch -m gh-pages

# add remote repo
git remote add origin https://github.com/3tw/TomPortfolio_Vue

#git push -f git@github.com:<3tw>/<portfolio>.git master:gh-pages
git push -f origin gh-pages

cd -