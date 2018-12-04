'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(rows) {
  return {
    type: 'SET',
    rows: rows
  };
};

var add = exports.add = function add(row) {
  return {
    type: 'ADD',
    row: row
  };
};

var remove = exports.remove = function remove(index) {
  return {
    type: 'REMOVE',
    index: index
  };
};

var reorder = exports.reorder = function reorder(from, to) {
  return {
    type: 'REORDER',
    from: from,
    to: to
  };
};

var update = exports.update = function update(key, value) {
  return {
    type: 'UPDATE',
    key: key,
    value: value
  };
};