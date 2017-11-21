'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bytes = require('bytes');

var _bytes2 = _interopRequireDefault(_bytes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PlainFileToken = function (_React$Component) {
  _inherits(PlainFileToken, _React$Component);

  function PlainFileToken() {
    _classCallCheck(this, PlainFileToken);

    return _possibleConstructorReturn(this, (PlainFileToken.__proto__ || Object.getPrototypeOf(PlainFileToken)).apply(this, arguments));
  }

  _createClass(PlainFileToken, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          file_name = _props.file_name,
          file_size = _props.file_size;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filefield-file-preview ' + this._getExt(file_name) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-file-preview-icon' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-' + this._getIcon(file_name) })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-file-preview-details' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filefield-file-preview-filename' },
            file_name
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filefield-file-preview-filesize' },
            (0, _bytes2.default)(file_size)
          )
        )
      );
    }
  }, {
    key: '_getExt',
    value: function _getExt(file_name) {
      return file_name.split('.').pop().substr(0, 3);
    }
  }, {
    key: '_getIcon',
    value: function _getIcon(file_name) {
      var ext = this._getExt(file_name);
      if (ext === 'pdf') return 'file-pdf-o';
      if (ext === 'xls') return 'file-excel-o';
      if (ext === 'doc') return 'file-word-o';
      if (ext === 'ppt') return 'file-powerpoint-o';
      return 'file-text-o';
    }
  }]);

  return PlainFileToken;
}(_react2.default.Component);

PlainFileToken.propTypes = {
  file_name: _propTypes2.default.string,
  file_size: _propTypes2.default.number
};
exports.default = PlainFileToken;