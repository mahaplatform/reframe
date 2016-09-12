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

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'div',
          { className: 'ui checkbox', ref: 'checkbox_ui' },
          _react2.default.createElement('input', {
            ref: 'control',
            className: 'hidden',
            name: this.props.code,
            id: this.props.code,
            type: 'checkbox' }),
          _react2.default.createElement(
            'label',
            { htmlFor: this.props.code },
            this.props.label
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.control).checkbox();
      if (this.props.defaultValue === true || this.props.defaultValue === 1 || this.props.defaultChecked === true || this.props.defaultChecked === 1) {
        $(this.refs.checkbox_ui).checkbox('set checked');
      } else {
        $(this.refs.checkbox_ui).checkbox('set unchecked');
      }
      $(this.refs.checkbox_ui).checkbox('setting', 'onChange', this.handleChange.bind(this));
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.props.onChange(this.props.code, this.getValue());
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.control.checked ? 1 : 0;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      $(this.refs.checkbox_ui).checkbox('setting', 'onChange', _lodash2.default.noop);
      if (value === 1 || value === true) {
        $(this.refs.checkbox_ui).checkbox('set checked');
      } else {
        $(this.refs.checkbox_ui).checkbox('set unchecked');
      }
      $(this.refs.checkbox_ui).checkbox('setting', 'onChange', this.handleChange.bind(this));
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      $(this.refs.checkbox_ui).checkbox('setting', 'onChange', _lodash2.default.noop);
      $(this.refs.checkbox_ui).checkbox('set unchecked');
      $(this.refs.checkbox_ui).checkbox('setting', 'onChange', this.handleChange.bind(this));
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

Checkbox.defaultProps = {
  onChange: function onChange() {}
};
exports.default = Checkbox;