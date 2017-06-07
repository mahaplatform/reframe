'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateField = function (_React$Component) {
  _inherits(DateField, _React$Component);

  function DateField(props) {
    _classCallCheck(this, DateField);

    var _this = _possibleConstructorReturn(this, (DateField.__proto__ || Object.getPrototypeOf(DateField)).call(this, props));

    _this.state = {
      value: props.defaultValue ? (0, _moment2.default)(props.defaultValue).format('YYYY-MM-DD') : null
    };
    return _this;
  }

  _createClass(DateField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'datefield' },
        _react2.default.createElement(
          'div',
          { className: 'ui right labeled input' },
          _react2.default.createElement('input', { ref: 'control',
            type: 'text',
            value: this.state.value,
            autoComplete: this.props.autoComplete,
            placeholder: this.props.placeholder,
            onChange: this._handleChange.bind(this),
            onBlur: this._handleBlur.bind(this),
            onFocus: this._handleFocus.bind(this),
            onKeyPress: this._handleKeyPress.bind(this),
            onKeyUp: this._handleKeyUp.bind(this),
            onKeyDown: this._handleKeyDown.bind(this) }),
          _react2.default.createElement(
            'div',
            { className: 'ui label' },
            _react2.default.createElement('i', { className: 'calendar icon' })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onChange(this.state.value);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.defaultValue != this.props.defaultValue) {
        this.setValue(this.props.defaultValue);
      }
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

  return DateField;
}(_react2.default.Component);

DateField.propTypes = {
  autoComplete: _react2.default.PropTypes.string,
  maxLength: _react2.default.PropTypes.number,
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
DateField.defaultProps = {
  autoComplete: 'off',
  maxLength: null,
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
exports.default = DateField;