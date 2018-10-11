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

var ColorField = function (_React$Component) {
  (0, _inherits3.default)(ColorField, _React$Component);

  function ColorField() {
    (0, _classCallCheck3.default)(this, ColorField);
    return (0, _possibleConstructorReturn3.default)(this, (ColorField.__proto__ || Object.getPrototypeOf(ColorField)).apply(this, arguments));
  }

  (0, _createClass3.default)(ColorField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          colors = _props.colors,
          tabIndex = _props.tabIndex;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-colorfield', tabIndex: tabIndex },
        colors.map(function (color, index) {
          return _react2.default.createElement(
            'div',
            { key: 'color_' + index, className: 'reframe-color', style: { backgroundColor: color.value }, onClick: _this2._handleSet.bind(_this2, color.name) },
            color.name === _this2.props.color && _react2.default.createElement('i', { className: 'fa fa-fw fa-check' })
          );
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady,
          onSet = _props2.onSet;

      if (defaultValue) onSet(defaultValue);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          color = _props3.color,
          onChange = _props3.onChange;

      if (prevProps.color !== color) onChange(color);
    }
  }, {
    key: '_handleSet',
    value: function _handleSet(color) {
      this.props.onSet(color);
    }
  }]);
  return ColorField;
}(_react2.default.Component);

ColorField.defaultProps = {
  colors: [{ name: 'red', value: '#DB2828' }, { name: 'orange', value: '#F2711C' }, { name: 'yellow', value: '#FBBD08' }, { name: 'olive', value: '#B5CC18' }, { name: 'green', value: '#21BA45' }, { name: 'teal', value: '#00B5AD' }, { name: 'blue', value: '#2185D0' }, { name: 'violet', value: '#6435C9' }, { name: 'purple', value: '#A333C8' }, { name: 'pink', value: '#E03997' }],
  defaultValue: null,
  disabled: false,
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange(value) {},
  onReady: function onReady() {},
  onSet: function onSet(value) {}
};
exports.default = ColorField;