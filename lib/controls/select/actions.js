'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(value) {
  return {
    type: 'SET',
    value: value
  };
};

var choose = exports.choose = function choose(value) {
  return {
    type: 'CHOOSE',
    value: value
  };
};