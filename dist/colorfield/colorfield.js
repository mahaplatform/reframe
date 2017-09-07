'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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

      var colors = [{ name: 'red', value: '#DB2828' }, { name: 'orange', value: '#F2711C' }, { name: 'yellow', value: '#FBBD08' }, { name: 'olive', value: '#B5CC18' }, { name: 'green', value: '#21BA45' }, { name: 'teal', value: '#00B5AD' }, { name: 'blue', value: '#2185D0' }, { name: 'violet', value: '#6435C9' }, { name: 'purple', value: '#A333C8' }, { name: 'pink', value: '#E03997' }];
      return _react2.default.createElement(
        'div',
        { className: 'reframe-colorfield' },
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
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onReady = _props.onReady,
          onSet = _props.onSet;

      if (defaultValue) onSet(defaultValue);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          color = _props2.color,
          onChange = _props2.onChange;

      if (prevProps.color !== color) {
        onChange(color);
      }
    }
  }, {
    key: '_handleSet',
    value: function _handleSet(color) {
      this.props.onSet(color);
    }
  }]);

  return ColorField;
}(_react2.default.Component);

ColorField.propTypes = {
  color: _propTypes2.default.string,
  colors: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSet: _propTypes2.default.func
};
ColorField.defaultProps = {
  defaultValue: null,
  disabled: false,
  onChange: function onChange() {},
  onReady: function onReady() {},
  onSet: function onSet() {}
};
exports.default = ColorField;