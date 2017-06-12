'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props));

    _this.state = {
      value: props.defaultValue
    };
    return _this;
  }

  _createClass(Checkbox, [{
    key: 'render',
    value: function render() {
      var style = this.props.style;

      var classes = ['ui', 'checkbox'];
      if (style) {
        classes.push(style);
      }
      return _react2.default.createElement(
        'div',
        { className: 'control' },
        _react2.default.createElement(
          'div',
          { className: classes.join(' ') },
          _react2.default.createElement('i', { className: 'toggle ' + (this.state.value ? 'on' : 'off') + ' icon', onClick: this._handleChange.bind(this) })
        )
      );
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(value) {
      this.setValue(!this.state.value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
      this.props.onChange(value);
    }
  }]);

  return Checkbox;
}(_react2.default.Component);

Checkbox.propTypes = {
  disabled: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
};
Checkbox.defaultProps = {
  disabled: false,
  defaultValue: false,
  onChange: function onChange() {}
};
exports.default = Checkbox;