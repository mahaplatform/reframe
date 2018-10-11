'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var begin = exports.begin = function begin() {
  return {
    type: 'BEGIN'
  };
};

var end = exports.end = function end() {
  return {
    type: 'END'
  };
};

var type = exports.type = function type(q) {
  return {
    type: 'TYPE',
    q: q
  };
};

var abort = exports.abort = function abort() {
  return {
    type: 'ABORT'
  };
};