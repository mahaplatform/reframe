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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textfield = require('../textfield');

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoneyField = function (_React$Component) {
  (0, _inherits3.default)(MoneyField, _React$Component);

  function MoneyField() {
    (0, _classCallCheck3.default)(this, MoneyField);
    return (0, _possibleConstructorReturn3.default)(this, (MoneyField.__proto__ || Object.getPrototypeOf(MoneyField)).apply(this, arguments));
  }

  (0, _createClass3.default)(MoneyField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_textfield2.default, this._getTextField());
    }
  }, {
    key: '_getTextField',
    value: function _getTextField() {
      return (0, _extends3.default)({}, this.props, {
        sanitize: function sanitize(value) {
          return value.replace(/[\$,]/g, '');
        },
        validate: function validate(value) {
          return value.match(/^-?\d*\.?\d{0,2}$/) !== null;
        }
      });
    }
  }]);
  return MoneyField;
}(_react2.default.Component);

MoneyField.propTypes = {
  maxLength: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func
};
MoneyField.defaultProps = {
  tabIndex: 0
};
exports.default = MoneyField;