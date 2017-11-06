'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textfield = require('../textfield');

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoneyField = function (_React$Component) {
  _inherits(MoneyField, _React$Component);

  function MoneyField() {
    _classCallCheck(this, MoneyField);

    return _possibleConstructorReturn(this, (MoneyField.__proto__ || Object.getPrototypeOf(MoneyField)).apply(this, arguments));
  }

  _createClass(MoneyField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_textfield2.default, this._getTextField());
    }
  }, {
    key: '_getTextField',
    value: function _getTextField() {
      return _extends({}, this.props, {
        sanitize: function sanitize(value) {
          return value.replace(/[\$,]/g, '');
        },
        validate: function validate(value) {
          return value.match(/^\d*\.?\d{0,2}$/) !== null;
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