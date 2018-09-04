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

var _bytes = require('bytes');

var _bytes2 = _interopRequireDefault(_bytes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlainFileToken = function (_React$Component) {
  (0, _inherits3.default)(PlainFileToken, _React$Component);

  function PlainFileToken() {
    (0, _classCallCheck3.default)(this, PlainFileToken);
    return (0, _possibleConstructorReturn3.default)(this, (PlainFileToken.__proto__ || Object.getPrototypeOf(PlainFileToken)).apply(this, arguments));
  }

  (0, _createClass3.default)(PlainFileToken, [{
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