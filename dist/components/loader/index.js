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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTG9hZGVyIiwibGFiZWwiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7NkJBVUs7QUFBQSxVQUNDQyxLQURELEdBQ1csS0FBS0MsS0FEaEIsQ0FDQ0QsS0FERDs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZ0JBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLDJCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUF3Q0E7QUFBeEM7QUFERjtBQURGLE9BREY7QUFPRDs7O0VBbkJrQkUsZ0JBQU1DLFM7O0FBQXJCSixNLENBRUdLLFMsR0FBWTtBQUNqQkosU0FBT0ssb0JBQVVDO0FBREEsQztBQUZmUCxNLENBTUdRLFksR0FBZTtBQUNwQlAsU0FBTztBQURhLEM7a0JBaUJURCxNIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZ1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsYWJlbDogJ0xvYWRpbmcnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbG9hZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgYWN0aXZlIGludmVydGVkIGRpbW1lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgbGFyZ2UgdGV4dCBsb2FkZXJcIj57IGxhYmVsIH08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXJcbiJdfQ==