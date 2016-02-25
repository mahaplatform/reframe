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

var MonthSelect = function (_React$Component) {
  _inherits(MonthSelect, _React$Component);

  function MonthSelect(props) {
    _classCallCheck(this, MonthSelect);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MonthSelect).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(MonthSelect, [{
    key: 'render',
    value: function render() {
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var options = [];
      for (var i in months) {
        var m = ('0' + (parseInt(i) + 1)).slice(-2);
        var month = months[i];
        if (this.props.show == 'both') {
          var value = month + ' (' + m + ')';
        } else if (this.props.include == 'number') {
          var value = m;
        } else {
          var value = month;
        }
        options.push({ key: m, value: value });
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

  return MonthSelect;
}(_react2.default.Component);

MonthSelect.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string
};
MonthSelect.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: ''
};
exports.default = MonthSelect;