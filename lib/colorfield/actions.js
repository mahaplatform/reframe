'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(color) {
  return {
    type: 'SET',
    color: color
  };
};