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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function (_React$Component) {
  (0, _inherits3.default)(Toggle, _React$Component);

  function Toggle() {
    (0, _classCallCheck3.default)(this, Toggle);
    return (0, _possibleConstructorReturn3.default)(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          format = _props.format,
          label = _props.label,
          name = _props.name,
          results = _props.results;

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
          results[name] && results[name] === true && _react2.default.createElement('i', { className: 'fa fa-check' })
        )
      );
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      var _props2 = this.props,
          name = _props2.name,
          results = _props2.results;

      var value = results[name] && results[name] === true ? null : true;
      this.props.onChange(name, value);
    }
  }]);
  return Toggle;
}(_react2.default.Component);

Toggle.propTypes = {
  format: _propTypes2.default.any,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  results: _propTypes2.default.object,
  onChange: _propTypes2.default.func
};
exports.default = Toggle;