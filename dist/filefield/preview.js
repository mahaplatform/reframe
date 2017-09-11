'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bytes = require('bytes');

var _bytes2 = _interopRequireDefault(_bytes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preview = function Preview(_ref) {
  var file = _ref.file,
      preview = _ref.preview;
  return _react2.default.createElement(
    'div',
    { className: 'reframe-filefield-preview' },
    preview ? _react2.default.createElement('div', { className: 'reframe-filefield-preview-image', style: { backgroundImage: 'url(\'' + preview + '\')' } }) : _react2.default.createElement('img', { src: '/imagecache/fit=cover&w=300&h=300' + file.asset.path, title: file.asset.original_file_name }),
    _react2.default.createElement(
      'div',
      { className: 'reframe-filefield-preview-caption' },
      _react2.default.createElement(
        'p',
        null,
        file.fileName,
        ' (',
        (0, _bytes2.default)(file.fileSize, { decimalPlaces: 2, unitSeparator: ' ' }).toUpperCase(),
        ')'
      )
    )
  );
};

exports.default = Preview;