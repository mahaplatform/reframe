'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dpis = [1, 2];

var Preview = function Preview(_ref) {
  var file = _ref.file,
      preview = _ref.preview,
      transforms = _ref.transforms;
  return _react2.default.createElement(
    'div',
    { className: 'reframe-filefield-preview' },
    file.asset ? _react2.default.createElement('img', { src: '/imagecache/fit=cover&w=300&h=300' + file.asset.path, title: file.asset.original_file_name }) : _react2.default.createElement('div', { className: 'reframe-filefield-preview-image', style: { backgroundImage: 'url(\'' + preview + '\')' } }),
    file.asset && _react2.default.createElement(
      'div',
      { className: 'reframe-filefield-preview-cache' },
      transforms && transforms.map(function (transform, index) {
        return dpis.map(function (dpi, index2) {
          return _react2.default.createElement('img', { src: '/imagecache/' + _qs2.default.stringify(transform) + '&dpi=' + dpi + file.asset.path, key: 'image_' + index });
        });
      })
    )
  );
};

exports.default = Preview;