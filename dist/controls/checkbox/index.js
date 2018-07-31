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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'render',
    value: function render() {
      var tabIndex = this.props.tabIndex;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-checkbox', tabIndex: tabIndex },
        _react2.default.createElement('i', { className: 'fa fa-fw fa-' + this._getIcon(), onClick: this._handleChange.bind(this) })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onReady = _props.onReady;

      var value = defaultValue || false;
      this.setValue(value);
      if (onReady) onReady();
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var disabled = this.props.disabled;

      return disabled ? 'ui disabled checkbox' : 'ui checkbox';
    }
  }, {
    key: '_getIcon',
    value: function _getIcon() {
      return 'toggle-' + (this.state.value ? 'on' : 'off');
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(value) {
      var onClick = this.props.onClick;

      if (onClick) onClick();
      this.setValue(!this.state.value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var onChange = this.props.onChange;

      this.setState({ value: value });
      if (onChange) onChange(value);
    }
  }]);
  return Checkbox;
}(_react2.default.Component);

Checkbox.defaultProps = {
  defaultValue: false,
  disabled: false,
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange(value) {},
  onReady: function onReady() {}
};
exports.default = Checkbox;