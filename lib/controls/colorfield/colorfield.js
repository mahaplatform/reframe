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

var ColorField = function (_React$Component) {
  _inherits(ColorField, _React$Component);

  function ColorField() {
    _classCallCheck(this, ColorField);

    return _possibleConstructorReturn(this, (ColorField.__proto__ || Object.getPrototypeOf(ColorField)).apply(this, arguments));
  }

  _createClass(ColorField, [{
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
            color.name === _this2.props.color && _react2.default.createElement('i', { className: 'check icon' })
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