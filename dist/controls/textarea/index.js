'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextArea = function (_React$Component) {
  (0, _inherits3.default)(TextArea, _React$Component);

  function TextArea(props) {
    (0, _classCallCheck3.default)(this, TextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this.state = {
      value: props.defaultValue ? _lodash2.default.toString(props.defaultValue) : null
    };
    return _this;
  }

  (0, _createClass3.default)(TextArea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'textarea' },
        _react2.default.createElement('textarea', this._getTextarea())
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
    key: '_getTextarea',
    value: function _getTextarea() {
      var _props = this.props,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          rows = _props.rows,
          tabIndex = _props.tabIndex;
      var value = this.state.value;

      return {
        placeholder: placeholder,
        disabled: disabled,
        defaultValue: value,
        rows: rows,
        tabIndex: tabIndex,
        onChange: this._handleChange.bind(this)
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
      if (this.props.maxLength && value.length <= this.props.maxLength) {
        this.setState({ value: value });
      }
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