"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromFilterObject = undefined;

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fromFilterObject = exports.fromFilterObject = function fromFilterObject(filters) {
  Object.keys(filters).reduce(function (object, key) {
    return (0, _extends4.default)({}, object, (0, _defineProperty3.default)({}, key, _getValue(filters[key])));
  });
};