'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toggle = exports.toggle = function toggle(index) {
  return {
    type: 'TOGGLE',
    index: index
  };
};

var move = exports.move = function move(from, to) {
  return {
    type: 'MOVE',
    from: from,
    to: to
  };
};