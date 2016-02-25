'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMoney = formatMoney;
exports.formatCurrency = formatCurrency;
exports.formatShortDate = formatShortDate;
exports.formatAbbreviatedDate = formatAbbreviatedDate;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatMoney(price) {
  return (0, _numeral2.default)(price).format('0,0.00');
}

function formatCurrency(price) {
  var symbol = arguments.length <= 1 || arguments[1] === undefined ? '$' : arguments[1];

  return '' + symbol + formatMoney(price);
}

function formatShortDate(date) {
  return (0, _moment2.default)(date).format('MM-D-YYYY');
}

function formatAbbreviatedDate(date) {
  return (0, _moment2.default)(date).format('MMM Do YYYY');
}