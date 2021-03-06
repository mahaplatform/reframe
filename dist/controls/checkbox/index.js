'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          tabIndex = _props.tabIndex;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-checkbox ' + (disabled ? 'toggle-disabled' : ''), tabIndex: tabIndex },
        _react2.default.createElement('i', { className: 'fa fa-fw fa-' + this._getIcon() + ' ' + (disabled ? 'disabled' : ''), onClick: this._handleChange.bind(this) })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady;

      var value = defaultValue || false;
      this.setValue(value);
      if (onReady) onReady();
    }
  }, {
    key: '_getIcon',
    value: function _getIcon() {
      return 'toggle-' + (this.state.value ? 'on' : 'off');
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(value) {
      var _props3 = this.props,
          disabled = _props3.disabled,
          onClick = _props3.onClick;

      if (!disabled) {
        if (onClick) onClick();
        this.setValue(!this.state.value);
      }
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