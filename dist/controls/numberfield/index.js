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

var SPECIAL_KEYS = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Backspace'];

var REGEX = /^-?[0-9]*\.?[0-9]*$/;

var NumberField = function (_React$Component) {
  _inherits(NumberField, _React$Component);

  function NumberField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NumberField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NumberField.__proto__ || Object.getPrototypeOf(NumberField)).call.apply(_ref, [this].concat(args))), _this), _this.number = null, _this.state = {
      value: ''
    }, _this._handleChange = _this._handleChange.bind(_this), _this._handleKeyDown = _this._handleKeyDown.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NumberField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui field' },
        _react2.default.createElement('input', this._getInput())
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onReady = _props.onReady;

      if (defaultValue) this.setState(defaultValue);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.value !== prevState.value) {
        this.props.onChange(this.state);
      }
    }
  }, {
    key: '_getInput',
    value: function _getInput() {
      var _this2 = this;

      var value = this.state.value;

      return {
        className: 'ui input',
        type: 'text',
        placeholder: 'Number',
        value: value,
        ref: function ref(node) {
          return _this2.number = node;
        },
        onChange: this._handleChange,
        onKeyDown: this._handleKeyDown
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      this.setState({
        value: this.number.value
      });
    }
  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(e) {
      if (_lodash2.default.includes(SPECIAL_KEYS, e.key)) return;
      if (e.ctrlKey || e.metaKey) return;
      var value = this.number.value || '';
      var newvalue = value + e.key;
      if (newvalue.match(REGEX)) return;
      e.preventDefault();
    }
  }]);

  return NumberField;
}(_react2.default.Component);

NumberField.propTypes = {
  defaultValue: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
exports.default = NumberField;