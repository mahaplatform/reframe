"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function Loader() {
  return _react2.default.createElement(
    "div",
    { className: "reframe-loader" },
    _react2.default.createElement(
      "div",
      { className: "ui active inverted dimmer" },
      _react2.default.createElement(
        "div",
        { className: "ui large text loader" },
        "Loading"
      )
    )
  );
};

exports.default = Loader;