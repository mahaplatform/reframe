'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageFileToken = function (_React$Component) {
  (0, _inherits3.default)(ImageFileToken, _React$Component);

  function ImageFileToken() {
    (0, _classCallCheck3.default)(this, ImageFileToken);
    return (0, _possibleConstructorReturn3.default)(this, (ImageFileToken.__proto__ || Object.getPrototypeOf(ImageFileToken)).apply(this, arguments));
  }

  (0, _createClass3.default)(ImageFileToken, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          file = _props.file,
          preview = _props.preview;


      return _react2.default.createElement(
        'div',
        { className: 'reframe-filefield-preview-image' },
        preview && _react2.default.createElement('div', { className: 'reframe-filefield-preview-image-asset', style: { backgroundImage: 'url(\'' + preview + '\')' } }),
        !preview && file && _react2.default.createElement('img', { src: '/imagecache/fit=cover&w=300&h=300' + file.path, title: file.file_name })
      );
    }
  }]);
  return ImageFileToken;
}(_react2.default.Component);

ImageFileToken.propTypes = {
  file: _propTypes2.default.object,
  preview: _propTypes2.default.string
};
exports.default = ImageFileToken;