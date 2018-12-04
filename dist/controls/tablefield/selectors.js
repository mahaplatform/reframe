'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = exports.isValid = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reselect = require('reselect');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var columns = function columns(state, props) {
  return props.columns;
};

var values = function values(state, props) {
  return state.values;
};

var isValid = exports.isValid = (0, _reselect.createSelector)(columns, values, function (columns, values) {
  return columns.reduce(function (valid, column) {
    return !valid ? false : !_lodash2.default.isNil(values[column.key]) && !_lodash2.default.isEmpty(values[column.key]);
  }, true);
});

var row = exports.row = (0, _reselect.createSelector)(columns, values, function (columns, values) {
  return columns.reduce(function (row, column) {
    return _extends({}, row, _defineProperty({}, column.key, values[column.key]));
  }, { code: _lodash2.default.random(100000000, 999999999).toString(36) });
});