'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextField.__proto__ || Object.getPrototypeOf(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        this.props.prefix && _react2.default.createElement(
          'div',
          { className: 'ui label' },
          this.props.prefix
        ),
        _react2.default.createElement('input', this._getControl()),
        this.props.suffix && _react2.default.createElement(
          'div',
          { className: 'ui label' },
          this.props.suffix
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onReady = _props.onReady;

      if (defaultValue) this.setState({
        value: _lodash2.default.toString(defaultValue)
      });
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.defaultValue !== prevProps.defaultValue) {
        this.setValue(this.props.defaultValue);
      }
      if (this.state.value !== prevState.value) {
        this.props.onChange(this.state.value);
      }
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var _props2 = this.props,
          prefix = _props2.prefix,
          suffix = _props2.suffix;

      var classes = ['reframe-textfield', 'ui', 'fluid', 'input'];
      if (prefix) classes.push('left labeled');
      if (suffix) classes.push('right labeled');
      return classes.join(' ');
    }
  }, {
    key: '_getControl',
    value: function _getControl() {
      var _props3 = this.props,
          autoComplete = _props3.autoComplete,
          disabled = _props3.disabled,
          placeholder = _props3.placeholder,
          tabIndex = _props3.tabIndex,
          onBlur = _props3.onBlur,
          onFocus = _props3.onFocus,
          onKeyPress = _props3.onKeyPress,
          onKeyDown = _props3.onKeyDown;
      var value = this.state.value;

      return {
        tabIndex: tabIndex,
        type: 'text',
        disabled: disabled,
        value: value,
        autoComplete: autoComplete,
        placeholder: placeholder,
        onChange: this._handleChange.bind(this),
        onBlur: onBlur,
        onFocus: onFocus,
        onKeyPress: onKeyPress,
        onKeyUp: this._handleKeyUp.bind(this),
        onKeyDown: onKeyDown
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(event) {
      var sanitized = this.props.sanitize(event.target.value);
      if (!this.props.validate(sanitized)) return event.preventDefault();
      this.setValue(sanitized);
    }
  }, {
    key: '_handleKeyUp',
    value: function _handleKeyUp(event) {
      this.props.onKeyUp(this.state.value);
      if (event.which == 13) {
        event.preventDefault();
        this.props.onSubmit();
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (this.props.maxLength && value.length > this.props.maxLength) return;
      this.setState({ value: value });
    }
  }]);

  return TextField;
}(_react2.default.Component);

TextField.propTypes = {
  autoComplete: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  maxLength: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  prefix: _propTypes2.default.string,
  sanitize: _propTypes2.default.func,
  suffix: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  trim: _propTypes2.default.bool,
  validate: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func
};
TextField.defaultProps = {
  autoComplete: 'off',
  defaultValue: '',
  disabled: false,
  maxLength: null,
  placeholder: '',
  prefix: null,
  sanitize: function sanitize(value) {
    return value;
  },
  suffix: null,
  tabIndex: 0,
  trim: true,
  validate: function validate(value) {
    return true;
  },
  onBlur: function onBlur() {},
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  onKeyDown: function onKeyDown() {},
  onReady: function onReady() {},
  onSubmit: function onSubmit() {}
};
exports.default = TextField;