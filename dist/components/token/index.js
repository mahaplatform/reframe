"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Token = function Token(_ref) {
  var value = _ref.value;
  return _react2.default.createElement(
    "div",
    { className: "token" },
    value
  );
};

exports.default = Token;