#!/usr/bin/env bash
export NODE_PATH=../src/
export NODE_ENV=development
mkdir _cycle
git clone -b cycle git@github.com:thinktopography/reframe _cycle
cd _cycle
cp -f ../package.json ./package.json
../node_modules/babel-cli/bin/babel.js -d ./ ../src/
sass -Cq --scss --compass --sourcemap=none ../src/reframe.scss ./reframe.css

VER=`date +%s`

if (git tag | grep $VER); then
    echo "Error: release $VER already exists"; exit 1
fi

git add .
git commit -m "Cycle $VER"
git push
cd ../
rm -rf _cycle
