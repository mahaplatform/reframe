'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _select = require('./select.js');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberSelect = function (_React$Component) {
  _inherits(NumberSelect, _React$Component);

  function NumberSelect() {
    _classCallCheck(this, NumberSelect);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NumberSelect).apply(this, arguments));
  }

  _createClass(NumberSelect, [{
    key: 'render',
    value: function render() {
      var options = [];
      var start = parseInt(this.props.start);
      var end = parseInt(this.props.end);
      if (start < end) {
        for (var i = start; i <= end; i++) {
          var value = this.props.zeroPad ? ('0' + parseInt(i)).slice(-2) : i;
          options.push({ key: value, value: value });
        }
      } else {
        for (var i = start; i >= end; i--) {
          var value = this.props.zeroPad ? ('0' + parseInt(i)).slice(-2) : i;
          options.push({ key: value, value: value });
        }
      }
      return _react2.default.createElement(_select2.default, _extends({}, this.props, { options: options, ref: 'control' }));
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.control.getValue();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.refs.control.setValue(value);
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.refs.control.clearField();
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return NumberSelect;
}(_react2.default.Component);

NumberSelect.propTypes = {
  code: _react2.default.PropTypes.string,
  start: _react2.default.PropTypes.number.isRequired,
  end: _react2.default.PropTypes.number.isRequired,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string
};
NumberSelect.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: ''
};
exports.default = NumberSelect;