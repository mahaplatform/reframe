'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _passwordValidator = require('password-validator');

var _passwordValidator2 = _interopRequireDefault(_passwordValidator);

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

var Password = function (_React$Component) {
  _inherits(Password, _React$Component);

  function Password() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Password);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Password.__proto__ || Object.getPrototypeOf(Password)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      strong: false,
      value: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Password, [{
    key: 'render',
    value: function render() {
      var schema = this.props.schema;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-password' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-password-input' },
          _react2.default.createElement('input', this._getInput())
        ),
        schema.length > 0 && _react2.default.createElement(
          'div',
          { className: this._getClass() },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-check-circle' })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleConfigure();
      this.props.onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var value = this.state.value;
      var schema = this.props.schema;

      if (value !== prevState.value) {
        this._handleValidate();
      }
      if (!_lodash2.default.isEqual(schema, prevProps.schema)) {
        this._handleConfigure();
      }
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var strong = this.state.strong;

      var classes = ['reframe-password-icon'];
      if (strong) classes.push('strong');
      if (!strong) classes.push('weak');
      return classes.join(' ');
    }
  }, {
    key: '_getInput',
    value: function _getInput() {
      var value = this.state.value;
      var _props = this.props,
          autoComplete = _props.autoComplete,
          placeholder = _props.placeholder,
          tabIndex = _props.tabIndex,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onKeyPress = _props.onKeyPress,
          onKeyUp = _props.onKeyUp,
          onKeyDown = _props.onKeyDown;

      return {
        type: 'password',
        value: value,
        autoComplete: autoComplete,
        placeholder: placeholder,
        tabIndex: tabIndex,
        onChange: this._handleChange.bind(this),
        onBlur: onBlur,
        onFocus: onFocus,
        onKeyPress: onKeyPress,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(event) {
      this.setValue(event.target.value);
      this.props.onChange(event.target.value);
    }
  }, {
    key: '_handleConfigure',
    value: function _handleConfigure() {
      var _this2 = this;

      this.schema = new _passwordValidator2.default();
      this.props.schema.map(function (schema) {
        var rule = _lodash2.default.isString(schema) ? { rule: schema } : schema;
        if (rule.rule === 'oneOf') _this2.schema.oneOf(rule.value);
        if (rule.rule === 'notOneOf') _this2.schema.is().not().oneOf(rule.value);
        if (rule.rule === 'min') _this2.schema.is().min(rule.value);
        if (rule.rule === 'max') _this2.schema.is().max(rule.value);
        if (rule.rule === 'digits') _this2.schema.has().digits();
        if (rule.rule === 'letters') _this2.schema.has().letters();
        if (rule.rule === 'nospaces') _this2.schema.has().not().spaces();
        if (rule.rule === 'symbols') _this2.schema.has().symbols();
        if (rule.rule === 'uppercase') _this2.schema.has().uppercase();
        if (rule.rule === 'lowercase') _this2.schema.has().lowercase();
      });
      this._handleValidate();
    }
  }, {
    key: '_handleValidate',
    value: function _handleValidate() {
      var value = this.state.value;

      this.setState({
        strong: this.schema.validate(value)
      });
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (!(this.props.maxLength && value.length > this.props.maxLength)) {
        this.setState({ value: value });
      }
    }
  }]);

  return Password;
}(_react2.default.Component);

Password.propTypes = {
  autoComplete: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  schema: _propTypes2.default.array,
  tabIndex: _propTypes2.default.number,
  onBlur: _propTypes2.default.func,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
Password.defaultProps = {
  autoComplete: 'off',
  maxLength: null,
  disabled: false,
  placeholder: '',
  schema: [],
  tabIndex: 0,
  onBlur: function onBlur() {},
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  onKeyDown: function onKeyDown() {},
  onReady: function onReady() {}
};
exports.default = Password;