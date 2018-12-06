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

var Password = function (_React$Component) {
  _inherits(Password, _React$Component);

  function Password(props) {
    _classCallCheck(this, Password);

    var _this = _possibleConstructorReturn(this, (Password.__proto__ || Object.getPrototypeOf(Password)).call(this, props));

    _this.state = {
      value: _lodash2.default.toString(props.defaultValue)
    };
    return _this;
  }

  _createClass(Password, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reframe-password' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-password-input' },
          _react2.default.createElement('input', this._getInput())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-password-icon' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-check-circle' })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.defaultValue != this.props.defaultValue) {
        this.setValue(this.props.defaultValue);
      }
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
  maxLength: _propTypes2.default.number,
  prefix: _propTypes2.default.string,
  suffix: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
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
  prefix: null,
  suffix: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
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