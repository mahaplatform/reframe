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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loader = function (_React$Component) {
  (0, _inherits3.default)(Loader, _React$Component);

  function Loader() {
    (0, _classCallCheck3.default)(this, Loader);
    return (0, _possibleConstructorReturn3.default)(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loader, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-loader' },
        _react2.default.createElement(
          'div',
          { className: 'ui active inverted dimmer' },
          _react2.default.createElement(
            'div',
            { className: 'ui large text loader' },
            label
          )
        )
      );
    }
  }]);
  return Loader;
}(_react2.default.Component);

Loader.propTypes = {
  label: _propTypes2.default.string
};
Loader.defaultProps = {
  label: 'Loading'
};
exports.default = Loader;