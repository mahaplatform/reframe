#!/usr/bin/env bash
mkdir _release
cd _release
#git clone -b release git@github.com:thinktopography/reframe
cp -f ../package.json ./package.json
babel -d ./ ../src/
sass -Cq --scss --compass --sourcemap=none ../src/reframe.scss ./reframe.css
VER=`cat package.json | sed -n 's/.*"version": "\(.*\)".*/\1/p'`

echo $VER

#git add .
#git commit -m "Release $VER" -e
