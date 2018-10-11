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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function (_React$Component) {
  (0, _inherits3.default)(Text, _React$Component);

  function Text() {
    (0, _classCallCheck3.default)(this, Text);
    return (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  (0, _createClass3.default)(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          format = _props.format;

      var value = _lodash2.default.toString(defaultValue);
      return _react2.default.createElement(
        'div',
        { className: 'reframe-text' },
        _react2.default.createElement(_format2.default, { format: format, value: value })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onReady();
    }
  }]);
  return Text;
}(_react2.default.Component);

Text.propTypes = {
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  format: _propTypes2.default.any,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
Text.defaultProps = {
  defaultValue: '',
  disabled: false,
  format: null,
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {}
};
exports.default = Text;