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

var TextArea = function (_React$Component) {
  _inherits(TextArea, _React$Component);

  function TextArea() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextArea);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextArea, [{
    key: 'render',
    value: function render() {
      var value = this.state.value;
      var maxLength = this.props.maxLength;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-textarea' },
        maxLength && _react2.default.createElement(
          'div',
          { className: this._getMaxClass() },
          value.length,
          ' / ',
          maxLength
        ),
        _react2.default.createElement('textarea', this._getTextarea())
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
    key: '_getMaxClass',
    value: function _getMaxClass() {
      var value = this.state.value;
      var maxLength = this.props.maxLength;

      var classes = ['reframe-textarea-length'];
      if (value.length >= maxLength) classes.push('max');
      return classes.join(' ');
    }
  }, {
    key: '_getTextarea',
    value: function _getTextarea() {
      var _props2 = this.props,
          placeholder = _props2.placeholder,
          disabled = _props2.disabled,
          rows = _props2.rows,
          tabIndex = _props2.tabIndex;
      var value = this.state.value;

      return {
        placeholder: placeholder,
        disabled: disabled,
        value: value,
        rows: rows,
        tabIndex: tabIndex,
        onChange: this._handleChange.bind(this)
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(event) {
      this.setValue(event.target.value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (this.props.maxLength && value.length > this.props.maxLength) return;
      this.setState({ value: value });
    }
  }]);

  return TextArea;
}(_react2.default.Component);

TextArea.propTypes = {
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  maxLength: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  rows: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
TextArea.defaultProps = {
  defaultValue: '',
  disabled: false,
  maxLength: null,
  placeholder: '',
  rows: 5,
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {}
};
exports.default = TextArea;