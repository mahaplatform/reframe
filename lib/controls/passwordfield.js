'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Passwordfield = function (_React$Component) {
  _inherits(Passwordfield, _React$Component);

  function Passwordfield(props) {
    _classCallCheck(this, Passwordfield);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Passwordfield).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Passwordfield, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { value: this.state.value, ref: 'control', onChange: this.handleChange.bind(this), type: 'password', name: this.props.code, id: this.props.code, placeholder: this.props.placeholder });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setValue(event.target.value);
      this.props.onChange(this.props.code, event.target.value);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.control.value || null;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.setState({ value: null });
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Passwordfield;
}(_react2.default.Component);

Passwordfield.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string
};
Passwordfield.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  onChange: function onChange() {}
};
exports.default = Passwordfield;