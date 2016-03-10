#!/usr/bin/env bash
export NODE_PATH=../src/
export NODE_ENV=production
mkdir _release
git clone -b release git@github.com:thinktopography/reframe _release
cd _release
cp -f ../package.json ./package.json
if (../node_modules/babel-cli/bin/babel.js -d ./ ../src/); then
  sass -Cq --scss --compass --sourcemap=none ../src/reframe.scss ./reframe.css
  cp ./reframe.css ./reframe.scss

  VER=`cat package.json | sed -n 's/.*"version": "\(.*\)".*/\1/p'`

  if (git tag | grep $VER); then
      echo "Error: release $VER already exists"; exit 1
  fi

  git add .
  git commit -m "Release $VER" -e
  git tag "$VER"
  git push
else
  echo " "
  echo "There were errors compiling your code. Please fix these problems before publishing a release."; exit 1
fi

cd ../
rm -rf _release
