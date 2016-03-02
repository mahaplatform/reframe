#!/usr/bin/env bash
export NODE_PATH=./src/
export NODE_ENV=development

trap 'kill %1' SIGINT
  ./node_modules/http-server/bin/http-server -p 8080 \
& ./node_modules/watchify/bin/cmd.js ./examples/index.js -v --debug -t [babelify] -o ./examples/examples.js \
& sass --scss --compass --watch --sourcemap=auto src/reframe.scss:examples/reframe.css
