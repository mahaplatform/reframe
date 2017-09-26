'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var open = exports.open = function open(message, options) {
  return {
    type: 'OPEN',
    message: message,
    options: options
  };
};

var close = exports.close = function close() {
  return {
    type: 'CLOSE'
  };
};

var clear = exports.clear = function clear() {
  return {
    type: 'CLEAR'
  };
};