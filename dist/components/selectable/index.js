"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Selectable = function (_React$Component) {
  (0, _inherits3.default)(Selectable, _React$Component);

  function Selectable() {
    (0, _classCallCheck3.default)(this, Selectable);
    return (0, _possibleConstructorReturn3.default)(this, (Selectable.__proto__ || Object.getPrototypeOf(Selectable)).apply(this, arguments));
  }

  (0, _createClass3.default)(Selectable, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "reframe-selectable" },
        this.props.children
      );
    }
  }]);
  return Selectable;
}(_react2.default.Component);

exports.default = Selectable;