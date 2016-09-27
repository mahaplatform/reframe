'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactColor = require('react-color');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorField = function (_React$Component) {
  _inherits(ColorField, _React$Component);

  function ColorField(props) {
    _classCallCheck(this, ColorField);

    var _this = _possibleConstructorReturn(this, (ColorField.__proto__ || Object.getPrototypeOf(ColorField)).call(this, props));

    _this.state = {
      open: false,
      value: props.defaultValue || '#FFFFFF'
    };
    return _this;
  }

  _createClass(ColorField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = {
        backgroundColor: this.state.value
      };
      return _react2.default.createElement(
        'div',
        { className: 'colorfield' },
        _react2.default.createElement(
          'div',
          { className: 'ui segment', onClick: this._handleToggle.bind(this) },
          _react2.default.createElement('div', { className: 'color', style: style })
        ),
        function () {
          if (_this2.state.open) {
            return _react2.default.createElement(
              'div',
              { className: 'picker' },
              _react2.default.createElement(_reactColor.SketchPicker, { color: _this2.state.value,
                onChangeComplete: _this2._handleChange.bind(_this2) })
            );
          }
        }()
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.defaultValue != this.props.defaultValue) {
        this._setValue(this.props.defaultValue);
      }
    }
  }, {
    key: '_handleToggle',
    value: function _handleToggle() {
      this.setState({ open: !this.state.open });
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(color) {
      this.setState({ open: false });
      this._setValue(color.hex);
      this.props.onChange(color.hex);
    }
  }, {
    key: '_setValue',
    value: function _setValue(value) {
      this.setState({ value: value });
    }
  }]);

  return ColorField;
}(_react2.default.Component);

ColorField.propTypes = {
  defaultValue: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};
ColorField.defaultProps = {
  defaultValue: '#FFFFFF',
  onChange: function onChange() {}
};
exports.default = ColorField;