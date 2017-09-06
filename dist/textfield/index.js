'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = function (_React$Component) {
  _inherits(TextField, _React$Component);

  function TextField(props) {
    _classCallCheck(this, TextField);

    var _this = _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.state = {
      value: _lodash2.default.toString(props.defaultValue)
    };
    return _this;
  }

  _createClass(TextField, [{
    key: 'render',
    value: function render() {
      var input = _react2.default.createElement('input', this._getControl());
      if (!this.props.prefix && !this.props.suffix) {
        return _react2.default.createElement(
          'div',
          { className: 'textfield' },
          input
        );
      }
      var classes = ['ui', 'input'];
      if (this.props.prefix) classes.push('left labeled');
      if (this.props.suffix) classes.push('right labeled');
      return _react2.default.createElement(
        'div',
        { className: 'textfield' },
        _react2.default.createElement(
          'div',
          { className: classes.join(' ') },
          this.props.prefix && _react2.default.createElement(
            'div',
            { className: 'ui label' },
            this.props.prefix
          ),
          input,
          this.props.suffix && _react2.default.createElement(
            'div',
            { className: 'ui label' },
            this.props.suffix
          )
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.defaultValue != this.props.defaultValue) {
        this.setValue(this.props.defaultValue);
      }
    }
  }, {
    key: '_getControl',
    value: function _getControl() {
      var _props = this.props,
          autoComplete = _props.autoComplete,
          disabled = _props.disabled,
          placeholder = _props.placeholder;
      var value = this.state.value;

      return {
        type: 'text',
        disabled: disabled,
        value: value,
        autoComplete: autoComplete,
        placeholder: placeholder,
        onChange: this._handleChange.bind(this),
        onBlur: this._handleBlur.bind(this),
        onFocus: this._handleFocus.bind(this),
        onKeyPress: this._handleKeyPress.bind(this),
        onKeyUp: this._handleKeyUp.bind(this),
        onKeyDown: this._handleKeyDown.bind(this)
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(event) {
      var trimmed = this.props.trim ? event.target.value.trim() : event.target.value;
      var sanitized = this.props.sanitize(trimmed);
      if (!this.props.validate(sanitized)) {
        event.preventDefault();
        return false;
      }
      this.setValue(sanitized);
      this.props.onChange(sanitized);
    }
  }, {
    key: '_handleBlur',
    value: function _handleBlur(event) {
      this.props.onBlur(this.state.value);
    }
  }, {
    key: '_handleFocus',
    value: function _handleFocus(event) {
      this.props.onFocus(this.state.value);
    }
  }, {
    key: '_handleKeyPress',
    value: function _handleKeyPress(event) {
      this.props.onKeyPress(this.state.value);
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
    key: '_handleKeyDown',
    value: function _handleKeyDown(event) {
      this.props.onKeyDown(this.state.value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (!(this.props.maxLength && value.length > this.props.maxLength)) {
        this.setState({ value: value });
      }
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
  trim: _propTypes2.default.bool,
  validate: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
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
  trim: true,
  validate: function validate(value) {
    return true;
  },
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  onKeyDown: function onKeyDown() {},
  onSubmit: function onSubmit() {}
};
exports.default = TextField;