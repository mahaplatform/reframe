"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValueToken = function ValueToken(_ref) {
  var value = _ref.value;
  return _react2.default.createElement(
    "div",
    { className: "reframe-value-token" },
    value
  );
};

exports.default = ValueToken;