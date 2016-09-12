'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objectToQueryString = objectToQueryString;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objectToQueryString(params) {
  return (0, _lodash2.default)(params).chain().mapValues(function (p) {
    return encodeURIComponent(p);
  }).toPairs().map(function (queryPair) {
    return queryPair.join('=');
  }).join('&').thru(function (queries) {
    return "?" + queries;
  }).value();
}