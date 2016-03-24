#!/usr/bin/env bash
export NODE_PATH=../src/
export NODE_ENV=production
mkdir _release
cd _release
cp -f ../package.json ./package.json
../node_modules/babel-cli/bin/babel.js --debug -d ./ ../src/
sass -Cq --scss --compass --sourcemap=none ../src/reframe.scss ./reframe.css
cp ./reframe.css ./reframe.scss
