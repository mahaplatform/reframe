'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Buttons = function (_React$Component) {
  (0, _inherits3.default)(Buttons, _React$Component);

  function Buttons() {
    (0, _classCallCheck3.default)(this, Buttons);
    return (0, _possibleConstructorReturn3.default)(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  (0, _createClass3.default)(Buttons, [{
    key: 'render',
    value: function render() {
      var buttons = this.props.buttons;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-buttons' },
        buttons && buttons.map(function (button, index) {
          return _react2.default.createElement(_button2.default, (0, _extends3.default)({}, buttons[index], { key: 'button_' + index }));
        })
      );
    }
  }]);
  return Buttons;
}(_react2.default.Component);

Buttons.propTypes = {
  buttons: _propTypes2.default.array
};
exports.default = Buttons;