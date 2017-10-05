'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtered = exports.records = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = require('reselect');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var recordsSelector = function recordsSelector(state, props) {
  return state.records;
};

var sortSelector = function sortSelector(state, props) {
  return state.sort;
};

var filterSelector = function filterSelector(state, props) {
  return state.filter;
};

var filtersSelector = function filtersSelector(state, props) {
  return props.filters;
};

var qSelector = function qSelector(state, props) {
  return state.q;
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

var filtered = exports.filtered = (0, _reselect.createSelector)(filtersSelector, filterSelector, qSelector, function (filters, filter, q) {
  return Object.keys(filter).reduce(function (filtered, key) {
    return _extends({}, filtered, _defineProperty({}, key, _getValue(filters, filter, key)));
  }, { q: q });
});

var _getValue = function _getValue(filters, filter, key) {
  var field = _lodash2.default.find(filters, { name: key });
  if (!field) return null;
  var value = filter[key];
  if (field.type === 'daterange') return { $dr: value.key };
  if (_lodash2.default.isArray(value)) return { $in: value.map(function (item) {
      return item.key;
    }) };
  if (_lodash2.default.isPlainObject(value)) return { $eq: value.key };
  return { $eq: value };
};