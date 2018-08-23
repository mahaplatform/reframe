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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hidden = function (_React$Component) {
  (0, _inherits3.default)(Hidden, _React$Component);

  function Hidden() {
    (0, _classCallCheck3.default)(this, Hidden);
    return (0, _possibleConstructorReturn3.default)(this, (Hidden.__proto__ || Object.getPrototypeOf(Hidden)).apply(this, arguments));
  }

  (0, _createClass3.default)(Hidden, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onReady();
    }
  }]);
  return Hidden;
}(_react2.default.Component);

Hidden.propTypes = {
  onReady: _propTypes2.default.func
};
exports.default = Hidden;