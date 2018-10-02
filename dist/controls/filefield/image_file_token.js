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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSW1hZ2VGaWxlVG9rZW4iLCJwcm9wcyIsImZpbGUiLCJwcmV2aWV3IiwiYmFja2dyb3VuZEltYWdlIiwicGF0aCIsImZpbGVfbmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRU1BLGM7Ozs7Ozs7Ozs7NkJBT0s7QUFBQSxtQkFFbUIsS0FBS0MsS0FGeEI7QUFBQSxVQUVDQyxJQUZELFVBRUNBLElBRkQ7QUFBQSxVQUVPQyxPQUZQLFVBRU9BLE9BRlA7OztBQUlQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxpQ0FBZjtBQUNJQSxtQkFBVyx1Q0FBSyxXQUFVLHVDQUFmLEVBQXVELE9BQU8sRUFBRUMsaUJBQWlCLFdBQVNELE9BQVQsR0FBaUIsS0FBcEMsRUFBOUQsR0FEZjtBQUVJLFNBQUNBLE9BQUQsSUFBWUQsSUFBWixJQUFvQix1Q0FBSywyQ0FBeUNBLEtBQUtHLElBQW5ELEVBQTJELE9BQVFILEtBQUtJLFNBQXhFO0FBRnhCLE9BREY7QUFNRDs7O0VBakIwQkMsZ0JBQU1DLFM7O0FBQTdCUixjLENBRUdTLFMsR0FBWTtBQUNqQlAsUUFBTVEsb0JBQVVDLE1BREM7QUFFakJSLFdBQVNPLG9CQUFVRTtBQUZGLEM7a0JBbUJOWixjIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEltYWdlRmlsZVRva2VuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZpbGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcHJldmlldzogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBmaWxlLCBwcmV2aWV3IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbGVmaWVsZC1wcmV2aWV3LWltYWdlXCI+XG4gICAgICAgIHsgcHJldmlldyAmJiA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsZWZpZWxkLXByZXZpZXctaW1hZ2UtYXNzZXRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoXFwnJytwcmV2aWV3KydcXCcpJyB9fSAvPiB9XG4gICAgICAgIHsgIXByZXZpZXcgJiYgZmlsZSAmJiA8aW1nIHNyYz17YC9pbWFnZWNhY2hlL2ZpdD1jb3ZlciZ3PTMwMCZoPTMwMCR7ZmlsZS5wYXRofWB9IHRpdGxlPXsgZmlsZS5maWxlX25hbWUgfSAvPiB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbWFnZUZpbGVUb2tlblxuIl19