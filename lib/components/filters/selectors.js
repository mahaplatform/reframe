'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtered = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reselect = require('reselect');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var filtersSelector = function filtersSelector(state, props) {
  return props.filters;
};

var resultsSelector = function resultsSelector(state, props) {
  return state.results;
};

var filtered = exports.filtered = (0, _reselect.createSelector)(filtersSelector, resultsSelector, function (filters, results) {
  return Object.keys(results).reduce(function (filtered, key) {
    return _extends({}, filtered, _defineProperty({}, key, _getValue(filters, results, key)));
  }, {});
});

var _getValue = function _getValue(filters, results, key) {
  var field = _lodash2.default.find(filters, { name: key });
  if (!field) return null;
  var value = results[key];
  if (field.type === 'daterange') return { $dr: value.key };
  if (_lodash2.default.isArray(value)) return { $in: value.map(function (item) {
      return item.key;
    }) };
  if (_lodash2.default.isPlainObject(value)) return { $eq: value.key };
  return { $eq: value };
};