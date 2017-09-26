'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(ids) {
  return {
    type: 'SET',
    ids: ids
  };
};

var toggle = exports.toggle = function toggle(id) {
  return {
    type: 'TOGGLE',
    id: id
  };
};