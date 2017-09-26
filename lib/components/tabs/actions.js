'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var choose = exports.choose = function choose(index) {
  return {
    type: 'CHOOSE',
    index: index
  };
};