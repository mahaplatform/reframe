'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtered = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _reselect = require('reselect');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filtersSelector = function filtersSelector(state, props) {
  return props.filters;
};

var resultsSelector = function resultsSelector(state, props) {
  return state.results;
};

var filtered = exports.filtered = (0, _reselect.createSelector)(filtersSelector, resultsSelector, function (filters, results) {
  return Object.keys(results).reduce(function (filtered, key) {
    return (0, _extends4.default)({}, filtered, (0, _defineProperty3.default)({}, key, _getValue(filters, results, key)));
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