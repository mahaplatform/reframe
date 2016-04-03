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

var Textarea = function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea(props) {
    _classCallCheck(this, Textarea);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Textarea).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Textarea, [{
    key: 'render',
    value: function render() {
      if (this.props.html) {
        return _react2.default.createElement('textarea', {
          defaultValue: this.props.defaultValue,
          ref: 'control',
          onChange: this.handleChange.bind(this),
          name: this.props.code,
          rows: this.props.rows,
          placeholder: this.props.placeholder });
      } else {
        return _react2.default.createElement('textarea', {
          value: this.state.value,
          ref: 'control',
          onChange: this.handleChange.bind(this),
          name: this.props.code,
          rows: this.props.rows,
          placeholder: this.props.placeholder });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.html) {
        $(this.refs.control).redactor({
          changeCallback: this.handleChange.bind(this),
          minHeight: 300
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.props.html) {
        this.props.onChange(this.props.code, event);
      } else {
        this.setValue(event.target.value);
        this.props.onChange(this.props.code, event.target.value);
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      if (this.props.html) {
        return $(this.refs.control).redactor('code.get');
      } else {
        return this.refs.control.value || null;
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (this.props.html && value) {
        $(this.refs.control).redactor('code.set', value);
      } else {
        this.setState({ value: value });
      }
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      if (this.props.html) {
        $(this.refs.control).redactor('code.set', '');
      } else {
        this.setState({ value: '' });
      }
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Textarea;
}(_react2.default.Component);

Textarea.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  html: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string
};
Textarea.defaultProps = {
  code: null,
  disabled: false,
  html: false,
  defaultValue: '',
  rows: 4,
  placeholder: '',
  onChange: function onChange() {}
};
exports.default = Textarea;