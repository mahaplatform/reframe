'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      var input = _react2.default.createElement('input', _extends({ ref: 'control' }, this._getControl()));
      if (!this.props.prefix && !this.props.suffix) {
        return _react2.default.createElement(
          'div',
          { className: 'textfield' },
          input
        );
      }
      var classes = ['ui', 'labeled', 'input'];
      if (this.props.prefix) classes.push('left');
      if (this.props.suffix) classes.push('right');
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
      var value = this.state.value;

      return {
        type: 'text',
        value: value,
        autoComplete: this.props.autoComplete,
        placeholder: this.props.placeholder,
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
      this.setValue(event.target.value);
      this.props.onChange(event.target.value);
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
  maxLength: _propTypes2.default.number,
  prefix: _propTypes2.default.string,
  suffix: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func
};
TextField.defaultProps = {
  autoComplete: 'off',
  maxLength: null,
  prefix: null,
  suffix: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  onKeyDown: function onKeyDown() {}
};
exports.default = TextField;