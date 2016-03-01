#!/usr/bin/env bash
export NODE_PATH=./src/
export NODE_ENV=development

trap 'kill %1' SIGINT
  ./node_modules/http-server/bin/http-server -p 8080 \
& watchify ./examples/index.js -v --debug -t [babelify] -o 'exorcist ./examples/examples.js.map > ./examples/examples.js' \
& sass --scss --compass --watch --sourcemap=auto src/reframe.scss:examples/reframe.css
