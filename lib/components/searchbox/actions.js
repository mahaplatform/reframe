'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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