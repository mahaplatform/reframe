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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _controls = require('../../controls');

var Controls = _interopRequireWildcard(_controls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var standard = Object.keys(Controls).reduce(function (standard, name) {
  return (0, _extends4.default)({}, standard, (0, _defineProperty3.default)({}, name.toLowerCase(), Controls[name]));
}, {});

var Control = function (_React$Component) {
  (0, _inherits3.default)(Control, _React$Component);

  function Control() {
    (0, _classCallCheck3.default)(this, Control);
    return (0, _possibleConstructorReturn3.default)(this, (Control.__proto__ || Object.getPrototypeOf(Control)).apply(this, arguments));
  }

  (0, _createClass3.default)(Control, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reframe-control' },
        _react2.default.createElement(this._getElement(), this.props)
      );
    }
  }, {
    key: '_getElement',
    value: function _getElement() {
      var type = this.props.type;

      return _lodash2.default.isString(type) ? _lodash2.default.get(standard, type) : type;
    }
  }]);
  return Control;
}(_react2.default.Component);

Control.defaultProps = {
  type: 'textfield',
  options: []
};
exports.default = Control;