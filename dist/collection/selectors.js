'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.records = undefined;

var _reselect = require('reselect');

var recordsSelector = function recordsSelector(state) {
  return state.records;
};

var sortSelector = function sortSelector(state) {
  return state.params.sort;
};

var records = exports.records = (0, _reselect.createSelector)(recordsSelector, sortSelector, function (records, sort) {
  if (!records) return null;
  return records.sort(function (a, b) {
    var aValue = a[sort.key];
    var bValue = b[sort.key];
    if (sort.order === 'asc' && aValue < bValue) return -1;
    if (sort.order === 'asc' && aValue > bValue) return 1;
    if (sort.order === 'desc' && aValue > bValue) return -1;
    if (sort.order === 'desc' && aValue < bValue) return 1;
    return 0;
  });
});