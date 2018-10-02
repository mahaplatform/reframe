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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Text = function (_React$Component) {
  (0, _inherits3.default)(Text, _React$Component);

  function Text() {
    (0, _classCallCheck3.default)(this, Text);
    return (0, _possibleConstructorReturn3.default)(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  (0, _createClass3.default)(Text, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          format = _props.format;

      var value = _lodash2.default.toString(defaultValue);
      return _react2.default.createElement(
        'div',
        { className: 'reframe-text' },
        _react2.default.createElement(_format2.default, { format: format, value: value })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onReady();
    }
  }]);
  return Text;
}(_react2.default.Component);

Text.propTypes = {
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  format: _propTypes2.default.any,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
Text.defaultProps = {
  defaultValue: '',
  disabled: false,
  format: null,
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {}
};
exports.default = Text;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVGV4dCIsInByb3BzIiwiZGVmYXVsdFZhbHVlIiwiZm9ybWF0IiwidmFsdWUiLCJfIiwidG9TdHJpbmciLCJvblJlYWR5IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJkaXNhYmxlZCIsImJvb2wiLCJhbnkiLCJvbkJ1c3kiLCJmdW5jIiwib25DaGFuZ2UiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7NkJBb0JLO0FBQUEsbUJBQzBCLEtBQUtDLEtBRC9CO0FBQUEsVUFDQ0MsWUFERCxVQUNDQSxZQUREO0FBQUEsVUFDZUMsTUFEZixVQUNlQSxNQURmOztBQUVQLFVBQU1DLFFBQVFDLGlCQUFFQyxRQUFGLENBQVdKLFlBQVgsQ0FBZDtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxjQUFmO0FBQ0Usc0NBQUMsZ0JBQUQsSUFBUSxRQUFRQyxNQUFoQixFQUF3QixPQUFPQyxLQUEvQjtBQURGLE9BREY7QUFLRDs7O3dDQUVtQjtBQUNsQixXQUFLSCxLQUFMLENBQVdNLE9BQVg7QUFDRDs7O0VBaENnQkMsZ0JBQU1DLFM7O0FBQW5CVCxJLENBRUdVLFMsR0FBWTtBQUNqQlIsZ0JBQWNTLG9CQUFVQyxNQURQO0FBRWpCQyxZQUFVRixvQkFBVUcsSUFGSDtBQUdqQlgsVUFBUVEsb0JBQVVJLEdBSEQ7QUFJakJDLFVBQVFMLG9CQUFVTSxJQUpEO0FBS2pCQyxZQUFVUCxvQkFBVU0sSUFMSDtBQU1qQlYsV0FBU0ksb0JBQVVNO0FBTkYsQztBQUZmakIsSSxDQVdHbUIsWSxHQUFlO0FBQ3BCakIsZ0JBQWMsRUFETTtBQUVwQlcsWUFBVSxLQUZVO0FBR3BCVixVQUFRLElBSFk7QUFJcEJhLFVBQVEsa0JBQU0sQ0FBRSxDQUpJO0FBS3BCRSxZQUFVLG9CQUFNLENBQUUsQ0FMRTtBQU1wQlgsV0FBUyxtQkFBTSxDQUFFO0FBTkcsQztrQkF5QlRQLEkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBGb3JtYXQgZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBUZXh0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuYW55LFxuICAgIG9uQnVzeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIGZvcm1hdDogbnVsbCxcbiAgICBvbkJ1c3k6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblJlYWR5OiAoKSA9PiB7fVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBmb3JtYXQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB2YWx1ZSA9IF8udG9TdHJpbmcoZGVmYXVsdFZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtdGV4dFwiPlxuICAgICAgICA8Rm9ybWF0IGZvcm1hdD17Zm9ybWF0fSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uUmVhZHkoKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dFxuIl19