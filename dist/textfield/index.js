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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textfield = function (_React$Component) {
  _inherits(Textfield, _React$Component);

  function Textfield() {
    _classCallCheck(this, Textfield);

    return _possibleConstructorReturn(this, (Textfield.__proto__ || Object.getPrototypeOf(Textfield)).apply(this, arguments));
  }

  _createClass(Textfield, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({ ref: 'input' }, this._getConfig()));
    }
  }, {
    key: '_getConfig',
    value: function _getConfig() {
      return {
        autoComplete: this.props.autoComplete,
        placeholder: this.props.placeholder,
        type: "text",
        value: this.state.value,
        onChange: this._handleChange.bind(this),
        onBlur: this._handleBlur.bind(this),
        onFocus: this._handleFocus.bind(this),
        onKeyPress: this._handleKeyPress.bind(this),
        onKeyUp: this._handleKeyUp.bind(this),
        onKeyDown: this._handleKeyDown.bind(this)
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onSet(this.props.defaultValue);
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
  }]);

  return Textfield;
}(_react2.default.Component);

Textfield.propTypes = {
  autoComplete: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  maxLength: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  prefix: _propTypes2.default.string,
  suffix: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onBlur: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func
};
exports.default = Textfield;