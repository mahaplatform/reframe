'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = function (_React$Component) {
  _inherits(Toggle, _React$Component);

  function Toggle() {
    _classCallCheck(this, Toggle);

    return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  _createClass(Toggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          format = _props.format,
          label = _props.label,
          value = _props.value;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-item', onClick: this._handleChange.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-title' },
          _react2.default.createElement(_format2.default, { format: format, value: label })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-icon' },
          value === true && _react2.default.createElement('i', { className: 'fa fa-check' })
        )
      );
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      var name = this.props.name;

      var value = this.props.value === true ? null : true;
      this.props.onChange(name, value);
    }
  }]);

  return Toggle;
}(_react2.default.Component);

Toggle.propTypes = {
  format: _propTypes2.default.any,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
};
exports.default = Toggle;