'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Options = function (_React$Component) {
  (0, _inherits3.default)(Options, _React$Component);

  function Options() {
    (0, _classCallCheck3.default)(this, Options);
    return (0, _possibleConstructorReturn3.default)(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  (0, _createClass3.default)(Options, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          options = _props.options;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-search-results' },
        options.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { key: 'result_' + index, className: 'reframe-search-item', onClick: _this2._handleChoose.bind(_this2, option) },
            _react2.default.createElement(_format2.default, (0, _extends3.default)({}, option.record, { format: format, value: option.text }))
          );
        })
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      var classes = ['reframe-search-item-label'];
      if (!this.props.format) classes.push('padded');
      return classes.join(' ');
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(option) {
      this.props.onChoose(option.record);
    }
  }]);
  return Options;
}(_react2.default.Component);

Options.propTypes = {
  format: _propTypes2.default.any,
  options: _propTypes2.default.array,
  onChoose: _propTypes2.default.func
};
exports.default = Options;