'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      var _this2 = this;

      var input = _react2.default.createElement('input', { ref: 'control',
        type: 'text',
        value: this.state.value,
        autoComplete: this.props.autoComplete,
        placeholder: this.props.placeholder,
        onChange: this.handleChange.bind(this),
        onBlur: this.handleBlur.bind(this),
        onFocus: this.handleFocus.bind(this),
        onKeyPress: this.handleKeyPress.bind(this),
        onKeyUp: this.handleKeyUp.bind(this),
        onKeyDown: this.handleKeyDown.bind(this) });
      if (this.props.prefix || this.props.suffix) {
        return _react2.default.createElement(
          'div',
          { className: 'textfield' },
          _react2.default.createElement(
            'div',
            { className: 'ui left right labeled input' },
            function () {
              if (_this2.props.prefix) {
                return _react2.default.createElement(
                  'div',
                  { className: 'ui label' },
                  _this2.props.prefix
                );
              }
            }(),
            input,
            function () {
              if (_this2.props.suffix) {
                return _react2.default.createElement(
                  'div',
                  { className: 'ui label' },
                  _this2.props.suffix
                );
              }
            }()
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'textfield' },
          input
        );
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.defaultValue != this.props.defaultValue) {
        this.setValue(this.props.defaultValue);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setValue(event.target.value);
      this.props.onChange(event.target.value);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      this.props.onBlur(this.state.value);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      this.props.onFocus(this.state.value);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      this.props.onKeyPress(this.state.value);
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      this.props.onKeyUp(this.state.value);
    }
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
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
  autoComplete: _react2.default.PropTypes.string,
  maxLength: _react2.default.PropTypes.number,
  prefix: _react2.default.PropTypes.string,
  suffix: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  onFocus: _react2.default.PropTypes.func,
  onBlur: _react2.default.PropTypes.func,
  onKeyPress: _react2.default.PropTypes.func,
  onKeyUp: _react2.default.PropTypes.func,
  onKeyDown: _react2.default.PropTypes.func
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