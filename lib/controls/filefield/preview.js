"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preview = function Preview(_ref) {
  var file = _ref.file,
      preview = _ref.preview;
  return _react2.default.createElement(
    "div",
    { className: "reframe-filefield-preview" },
    file.asset ? _react2.default.createElement("img", { src: "/imagecache/fit=cover&w=300&h=300" + file.asset.path, title: file.asset.original_file_name }) : _react2.default.createElement("div", { className: "reframe-filefield-preview-image", style: { backgroundImage: 'url(\'' + preview + '\')' } })
  );
};

exports.default = Preview;