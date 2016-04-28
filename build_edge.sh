#!/usr/bin/env bash
export NODE_PATH=../src/
export NODE_ENV=production

if ! mkdir _edgerelease; then
  echo "The _edgerelease directory already exists. Please move or delete it to build a release."
  exit 1
fi

MASTER_MESSAGE=`git log -1 --pretty=%B`

git clone -b edge git@github.com:thinktopography/reframe _edgerelease
cd _edgerelease
find . -maxdepth 1 ! -name '.*' -type d -exec rm -rf {} +
cp -f ../package.json ./package.json
if (../node_modules/babel-cli/bin/babel.js -d ./ ../src/); then
  sass -Cq --scss --compass --sourcemap=none ../src/reframe.scss ./reframe.css
  cp ./reframe.css ./reframe.scss

  git add .
  git commit -m "Edge Release: $MASTER_MESSAGE"
  git push
else
  echo " "
  echo "There were errors compiling your code. Please fix these problems before publishing a release."; exit 1
fi

cd ../
rm -rf _edgerelease
