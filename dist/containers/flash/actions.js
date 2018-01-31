'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(style, message) {
  return {
    type: 'SET',
    style: style,
    message: message
  };
};

var clear = exports.clear = function clear() {
  return {
    type: 'CLEAR'
  };
};