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

var _textfield = require('../textfield');

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MoneyField = function (_React$Component) {
  (0, _inherits3.default)(MoneyField, _React$Component);

  function MoneyField() {
    (0, _classCallCheck3.default)(this, MoneyField);
    return (0, _possibleConstructorReturn3.default)(this, (MoneyField.__proto__ || Object.getPrototypeOf(MoneyField)).apply(this, arguments));
  }

  (0, _createClass3.default)(MoneyField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_textfield2.default, this._getTextField());
    }
  }, {
    key: '_getTextField',
    value: function _getTextField() {
      return (0, _extends3.default)({}, this.props, {
        sanitize: function sanitize(value) {
          return value.replace(/[\$,]/g, '');
        },
        validate: function validate(value) {
          return value.match(/^-?\d*\.?\d{0,2}$/) !== null;
        }
      });
    }
  }]);
  return MoneyField;
}(_react2.default.Component);

MoneyField.propTypes = {
  maxLength: _propTypes2.default.number,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func
};
MoneyField.defaultProps = {
  tabIndex: 0
};
exports.default = MoneyField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTW9uZXlGaWVsZCIsIl9nZXRUZXh0RmllbGQiLCJwcm9wcyIsInNhbml0aXplIiwidmFsdWUiLCJyZXBsYWNlIiwidmFsaWRhdGUiLCJtYXRjaCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwibWF4TGVuZ3RoIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiZGlzYWJsZWQiLCJib29sIiwicGxhY2Vob2xkZXIiLCJzdHJpbmciLCJkZWZhdWx0VmFsdWUiLCJ0YWJJbmRleCIsIm9uQnVzeSIsImZ1bmMiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvblJlYWR5Iiwib25LZXlQcmVzcyIsIm9uS2V5VXAiLCJvbktleURvd24iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsVTs7Ozs7Ozs7Ozs2QkFzQks7QUFDUCxhQUFPLDhCQUFDLG1CQUFELEVBQWdCLEtBQUtDLGFBQUwsRUFBaEIsQ0FBUDtBQUNEOzs7b0NBRWU7QUFDZCx3Q0FDSyxLQUFLQyxLQURWO0FBRUVDLGtCQUFVLGtCQUFDQyxLQUFEO0FBQUEsaUJBQVdBLE1BQU1DLE9BQU4sQ0FBYyxRQUFkLEVBQXVCLEVBQXZCLENBQVg7QUFBQSxTQUZaO0FBR0VDLGtCQUFVLGtCQUFDRixLQUFEO0FBQUEsaUJBQVdBLE1BQU1HLEtBQU4sQ0FBWSxtQkFBWixNQUFxQyxJQUFoRDtBQUFBO0FBSFo7QUFLRDs7O0VBaENzQkMsZ0JBQU1DLFM7O0FBQXpCVCxVLENBRUdVLFMsR0FBWTtBQUNqQkMsYUFBV0Msb0JBQVVDLE1BREo7QUFFakJDLFlBQVVGLG9CQUFVRyxJQUZIO0FBR2pCQyxlQUFhSixvQkFBVUssTUFITjtBQUlqQkMsZ0JBQWNOLG9CQUFVSyxNQUpQO0FBS2pCRSxZQUFVUCxvQkFBVUMsTUFMSDtBQU1qQk8sVUFBUVIsb0JBQVVTLElBTkQ7QUFPakJDLFlBQVVWLG9CQUFVUyxJQVBIO0FBUWpCRSxXQUFTWCxvQkFBVVMsSUFSRjtBQVNqQkcsVUFBUVosb0JBQVVTLElBVEQ7QUFVakJJLFdBQVNiLG9CQUFVUyxJQVZGO0FBV2pCSyxjQUFZZCxvQkFBVVMsSUFYTDtBQVlqQk0sV0FBU2Ysb0JBQVVTLElBWkY7QUFhakJPLGFBQVdoQixvQkFBVVM7QUFiSixDO0FBRmZyQixVLENBa0JHNkIsWSxHQUFlO0FBQ3BCVixZQUFVO0FBRFUsQztrQkFrQlRuQixVIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJy4uL3RleHRmaWVsZCdcblxuY2xhc3MgTW9uZXlGaWVsZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtYXhMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkJ1c3k6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5UHJlc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5VXA6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGFiSW5kZXg6IDBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPFRleHRGaWVsZCB7IC4uLnRoaXMuX2dldFRleHRGaWVsZCgpIH0gLz5cbiAgfVxuXG4gIF9nZXRUZXh0RmllbGQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICBzYW5pdGl6ZTogKHZhbHVlKSA9PiB2YWx1ZS5yZXBsYWNlKC9bXFwkLF0vZywnJyksXG4gICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB2YWx1ZS5tYXRjaCgvXi0/XFxkKlxcLj9cXGR7MCwyfSQvKSAhPT0gbnVsbFxuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vbmV5RmllbGRcbiJdfQ==