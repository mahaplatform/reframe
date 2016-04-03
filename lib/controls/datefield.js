'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Datefield = function (_React$Component) {
  _inherits(Datefield, _React$Component);

  function Datefield(props) {
    _classCallCheck(this, Datefield);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Datefield).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Datefield, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { defaultValue: this.props.defaultValue, ref: 'control', autoComplete: 'off', type: 'text', name: this.props.code, id: this.props.code, placeholder: this.props.placeholder });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      $(this.refs.control).datepicker({ dateFormat: 'yy-mm-dd' });
      if (this.props.defaultValue) {
        _lodash2.default.defer(function () {
          return $(_this2.refs.control).datepicker('setDate', _this2.props.defaultValue);
        });
      }
      $(this.refs.control).change(this.props.onChange);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.control.value || null;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var _this3 = this;

      _lodash2.default.defer(function () {
        return $(_this3.refs.control).datepicker('setDate', value || _this3.props.defaultValue);
      });
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      $(this.refs.control).change(_lodash2.default.noop);
      $(this.refs.control).datepicker('setDate', null);
      $(this.refs.control).change(this.props.onChange);
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Datefield;
}(_react2.default.Component);

Datefield.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string
};
Datefield.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  onChange: function onChange() {}
};
exports.default = Datefield;