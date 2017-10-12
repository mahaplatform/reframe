'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.records = undefined;

var _reselect = require('reselect');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var recordsSelector = function recordsSelector(state, props) {
  return state.records;
};

var sortSelector = function sortSelector(state, props) {
  return state.sort;
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