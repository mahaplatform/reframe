'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var open = exports.open = function open(component) {
  return {
    type: 'OPEN',
    component: component
  };
};

var close = exports.close = function close() {
  return {
    type: 'CLOSE'
  };
};