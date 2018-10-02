'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Format = function (_React$Component) {
  (0, _inherits3.default)(Format, _React$Component);

  function Format() {
    (0, _classCallCheck3.default)(this, Format);
    return (0, _possibleConstructorReturn3.default)(this, (Format.__proto__ || Object.getPrototypeOf(Format)).apply(this, arguments));
  }

  (0, _createClass3.default)(Format, [{
    key: 'render',
    value: function render() {
      var format = this.props.format;

      if (_lodash2.default.isString(format)) {
        var _format$match = format.match(/([^|]*)\|?(.*)/),
            _format$match2 = (0, _slicedToArray3.default)(_format$match, 3),
            style = _format$match2[1],
            details = _format$match2[2];

        if (style === 'status') {
          return Status(this.props);
        } else if (style === 'currency') {
          return Currency(this.props);
        } else if (style === 'number') {
          var template = details || '0';
          return Number(this.props, template);
        } else if (style === 'date') {
          var _template = details || 'MM/DD/YY';
          return Date(this.props, _template);
        } else if (style === 'datetime') {
          var _template2 = details || 'MM/DD/YY @ hh:mm A';
          return Date(this.props, _template2);
        } else if (style === 'time') {
          var _template3 = details || 'hh:mm A';
          return Date(this.props, _template3);
        } else if (style === 'check_times') {
          return Check(this.props, true);
        } else if (style === 'yes_no') {
          return YesNo(this.props, true);
        } else if (style === 'check') {
          return Check(this.props, false);
        } else if (style === 'capitalize') {
          return Capitalize(this.props);
        } else if (style === 'email') {
          return Email(this.props);
        } else if (style === 'link') {
          return Link(this.props);
        } else if (style === 'raw') {
          return Raw(this.props);
        } else if (style === 'element') {
          return Element(this.props);
        } else if (this.props.value === '') {
          return Empty(this.props);
        } else {
          return Default(this.props);
        }
      } else if (_lodash2.default.isFunction(format)) {
        return format(this.props);
      } else {
        return Default(this.props);
      }
    }
  }]);
  return Format;
}(_react2.default.Component);

Format.propTypes = {
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.string]),
  value: _propTypes2.default.any
};


var Default = function Default(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.value
  );
};

var Element = function Element(props) {
  return _react2.default.createElement(props.value, null);
};

var Raw = function Raw(props) {
  return _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: props.value } });
};

var Empty = function Empty() {
  return _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: '&nbsp;' } });
};

var Status = function Status(props) {
  return props.value ? _react2.default.createElement(
    'span',
    { className: props.value.toLowerCase() },
    props.value.toUpperCase()
  ) : _react2.default.createElement('span', null);
};

var Check = function Check(props, times) {
  if (props.value === true) return _react2.default.createElement('i', { className: 'icon green check' });
  if (times && props.value === false) return _react2.default.createElement('i', { className: 'icon red remove' });
  return _react2.default.createElement('span', null);
};

var YesNo = function YesNo(props) {
  if (props.value === false) return _react2.default.createElement(
    'span',
    { className: 'no' },
    'NO'
  );
  if (props.value === true) return _react2.default.createElement(
    'span',
    { className: 'yes' },
    'YES'
  );
  return null;
};

var Currency = function Currency(props) {
  return _react2.default.createElement(
    'span',
    null,
    (0, _numeral2.default)(props.value).format('$0,0.00')
  );
};

var Number = function Number(props, format) {
  return _react2.default.createElement(
    'span',
    null,
    (0, _numeral2.default)(props.value).format(format)
  );
};

var Date = function Date(props, format) {

  var _parseDate = function _parseDate(value) {
    var dateStr = value.toString();
    if (dateStr.match(/^\d{4}-\d{2}-\d{2} \d{2}\:\d{2}\:\d{2}$/)) {
      return (0, _moment2.default)(value, 'YYYY-MM-DD hh:mm:ss');
    } else if (dateStr.toString().match(/^\d{2}\:\d{2}\:\d{2}$/)) {
      return (0, _moment2.default)(value, 'hh:mm:ss');
    } else {
      return (0, _moment2.default)(value);
    }
  };

  return _react2.default.createElement(
    'span',
    null,
    props.value ? _parseDate(props.value).format(format) : ''
  );
};

var Capitalize = function Capitalize(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.value.toUpperCase()
  );
};

var Email = function Email(props) {
  return _react2.default.createElement(
    'a',
    { href: 'mailto:' + props.value },
    props.value
  );
};

var Link = function Link(props) {
  return _react2.default.createElement(
    'a',
    { href: props.value, target: '_blank' },
    props.value
  );
};

exports.default = Format;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRm9ybWF0IiwiZm9ybWF0IiwicHJvcHMiLCJfIiwiaXNTdHJpbmciLCJtYXRjaCIsInN0eWxlIiwiZGV0YWlscyIsIlN0YXR1cyIsIkN1cnJlbmN5IiwidGVtcGxhdGUiLCJOdW1iZXIiLCJEYXRlIiwiQ2hlY2siLCJZZXNObyIsIkNhcGl0YWxpemUiLCJFbWFpbCIsIkxpbmsiLCJSYXciLCJFbGVtZW50IiwidmFsdWUiLCJFbXB0eSIsIkRlZmF1bHQiLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJlbGVtZW50IiwiZnVuYyIsInN0cmluZyIsImFueSIsIl9faHRtbCIsInRvTG93ZXJDYXNlIiwidG9VcHBlckNhc2UiLCJ0aW1lcyIsIl9wYXJzZURhdGUiLCJkYXRlU3RyIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7NkJBV0s7QUFBQSxVQUNDQyxNQURELEdBQ1ksS0FBS0MsS0FEakIsQ0FDQ0QsTUFERDs7QUFFUCxVQUFHRSxpQkFBRUMsUUFBRixDQUFXSCxNQUFYLENBQUgsRUFBdUI7QUFBQSw0QkFDSUEsT0FBT0ksS0FBUCxDQUFhLGdCQUFiLENBREo7QUFBQTtBQUFBLFlBQ2JDLEtBRGE7QUFBQSxZQUNQQyxPQURPOztBQUVyQixZQUFHRCxVQUFVLFFBQWIsRUFBdUI7QUFDckIsaUJBQU9FLE9BQU8sS0FBS04sS0FBWixDQUFQO0FBQ0QsU0FGRCxNQUVPLElBQUdJLFVBQVUsVUFBYixFQUF5QjtBQUM5QixpQkFBT0csU0FBUyxLQUFLUCxLQUFkLENBQVA7QUFDRCxTQUZNLE1BRUEsSUFBR0ksVUFBVSxRQUFiLEVBQXVCO0FBQzVCLGNBQU1JLFdBQVdILFdBQVcsR0FBNUI7QUFDQSxp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UEEsSUFBTyxDQUFDZixLQUFELEVBQVc7QUFDdEIsU0FBTztBQUFBO0FBQUEsTUFBRyxNQUFPQSxNQUFNa0IsS0FBaEIsRUFBd0IsUUFBTyxRQUEvQjtBQUEwQ2xCLFVBQU1rQjtBQUFoRCxHQUFQO0FBQ0QsQ0FGRDs7a0JBSWVwQixNIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnXG5cbmNsYXNzIEZvcm1hdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0IH0gPSB0aGlzLnByb3BzXG4gICAgaWYoXy5pc1N0cmluZyhmb3JtYXQpKSB7XG4gICAgICBjb25zdCBbLHN0eWxlLGRldGFpbHNdID0gZm9ybWF0Lm1hdGNoKC8oW158XSopXFx8PyguKikvKVxuICAgICAgaWYoc3R5bGUgPT09ICdzdGF0dXMnKSB7XG4gICAgICAgIHJldHVybiBTdGF0dXModGhpcy5wcm9wcylcbiAgICAgIH0gZWxzZSBpZihzdHlsZSA9PT0gJ2N1cnJlbmN5Jykge1xuICAgICAgICByZXR1cm4gQ3VycmVuY3kodGhpcy5wcm9wcylcbiAgICAgIH0gZWxzZSBpZihzdHlsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkZXRhaWxzIHx8ICcwJ1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMucHJvcHMsIHRlbXBsYXRlKVxuICAgICAgfSBlbHNlIGlmKHN0eWxlID09PSAnZGF0ZScpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkZXRhaWxzIHx8ICdNTS9ERC9ZWSdcbiAgICAgICAgcmV0dXJuIERhdGUodGhpcy5wcm9wcywgdGVtcGxhdGUpXG4gICAgICB9IGVsc2UgaWYoc3R5bGUgPT09ICdkYXRldGltZScpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkZXRhaWxzIHx8ICdNTS9ERC9ZWSBAIGhoOm1tIEEnXG4gICAgICAgIHJldHVybiBEYXRlKHRoaXMucHJvcHMsIHRlbXBsYXRlKVxuICAgICAgfSBlbHNlIGlmKHN0eWxlID09PSAndGltZScpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkZXRhaWxzIHx8ICdoaDptbSBBJ1xuICAgICAgICByZXR1cm4gRGF0ZSh0aGlzLnByb3BzLCB0ZW1wbGF0ZSlcbiAgICAgIH0gZWxzZSBpZihzdHlsZSA9PT0gJ2NoZWNrX3RpbWVzJykge1xuICAgICAgICByZXR1cm4gQ2hlY2sodGhpcy5wcm9wcywgdHJ1ZSlcbiAgICAgIH0gZWxzZSBpZihzdHlsZSA9PT0gJ3llc19ubycpIHtcbiAgICAgICAgcmV0dXJuIFllc05vKHRoaXMucHJvcHMsIHRydWUpXG4gICAgICB9IGVsc2UgaWYoc3R5bGUgPT09ICdjaGVjaycpIHtcbiAgICAgICAgcmV0dXJuIENoZWNrKHRoaXMucHJvcHMsIGZhbHNlKVxuICAgICAgfSBlbHNlIGlmKHN0eWxlID09PSAnY2FwaXRhbGl6ZScpIHtcbiAgICAgICAgcmV0dXJuIENhcGl0YWxpemUodGhpcy5wcm9wcylcbiAgICAgIH0gZWxzZSBpZihzdHlsZSA9PT0gJ2VtYWlsJykge1xuICAgICAgICByZXR1cm4gRW1haWwodGhpcy5wcm9wcylcbiAgICAgIH0gZWxzZSBpZihzdHlsZSA9PT0gJ2xpbmsnKSB7XG4gICAgICAgIHJldHVybiBMaW5rKHRoaXMucHJvcHMpXG4gICAgICB9IGVsc2UgaWYoc3R5bGUgPT09ICdyYXcnKSB7XG4gICAgICAgIHJldHVybiBSYXcodGhpcy5wcm9wcylcbiAgICAgIH0gZWxzZSBpZihzdHlsZSA9PT0gJ2VsZW1lbnQnKSB7XG4gICAgICAgIHJldHVybiBFbGVtZW50KHRoaXMucHJvcHMpXG4gICAgICB9IGVsc2UgaWYodGhpcy5wcm9wcy52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIEVtcHR5KHRoaXMucHJvcHMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gRGVmYXVsdCh0aGlzLnByb3BzKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZihfLmlzRnVuY3Rpb24oZm9ybWF0KSkge1xuICAgICAgcmV0dXJuIGZvcm1hdCh0aGlzLnByb3BzKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRGVmYXVsdCh0aGlzLnByb3BzKVxuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IERlZmF1bHQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxzcGFuPnsgcHJvcHMudmFsdWUgfTwvc3Bhbj5cbn1cblxuY29uc3QgRWxlbWVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPHByb3BzLnZhbHVlIC8+XG59XG5cbmNvbnN0IFJhdyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy52YWx1ZSB9fT48L3NwYW4+XG59XG5cbmNvbnN0IEVtcHR5ID0gKCkgPT4ge1xuICByZXR1cm4gPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiAnJm5ic3A7JyB9fT48L3NwYW4+XG59XG5cbmNvbnN0IFN0YXR1cyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gcHJvcHMudmFsdWUgPyA8c3BhbiBjbGFzc05hbWU9eyBwcm9wcy52YWx1ZS50b0xvd2VyQ2FzZSgpIH0+eyBwcm9wcy52YWx1ZS50b1VwcGVyQ2FzZSgpIH08L3NwYW4+IDogPHNwYW4gLz5cbn1cblxuY29uc3QgQ2hlY2sgPSAocHJvcHMsIHRpbWVzKSA9PiB7XG4gIGlmKHByb3BzLnZhbHVlID09PSB0cnVlKSByZXR1cm4gPGkgY2xhc3NOYW1lPVwiaWNvbiBncmVlbiBjaGVja1wiIC8+XG4gIGlmKHRpbWVzICYmIHByb3BzLnZhbHVlID09PSBmYWxzZSkgcmV0dXJuIDxpIGNsYXNzTmFtZT1cImljb24gcmVkIHJlbW92ZVwiIC8+XG4gIHJldHVybiA8c3BhbiAvPlxufVxuXG5jb25zdCBZZXNObyA9IChwcm9wcykgPT4ge1xuICBpZihwcm9wcy52YWx1ZSA9PT0gZmFsc2UpIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJub1wiPk5PPC9zcGFuPlxuICBpZihwcm9wcy52YWx1ZSA9PT0gdHJ1ZSkgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInllc1wiPllFUzwvc3Bhbj5cbiAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgQ3VycmVuY3kgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIDxzcGFuPnsgbnVtZXJhbChwcm9wcy52YWx1ZSkuZm9ybWF0KCckMCwwLjAwJykgfTwvc3Bhbj5cbn1cblxuY29uc3QgTnVtYmVyID0gKHByb3BzLCBmb3JtYXQpID0+IHtcbiAgcmV0dXJuIDxzcGFuPnsgbnVtZXJhbChwcm9wcy52YWx1ZSkuZm9ybWF0KGZvcm1hdCkgfTwvc3Bhbj5cbn1cblxuY29uc3QgRGF0ZSA9IChwcm9wcywgZm9ybWF0KSA9PiB7XG5cbiAgY29uc3QgX3BhcnNlRGF0ZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGRhdGVTdHIgPSB2YWx1ZS50b1N0cmluZygpXG4gICAgaWYoZGF0ZVN0ci5tYXRjaCgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9IFxcZHsyfVxcOlxcZHsyfVxcOlxcZHsyfSQvKSkge1xuICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSwgJ1lZWVktTU0tREQgaGg6bW06c3MnKVxuICAgIH0gZWxzZSBpZihkYXRlU3RyLnRvU3RyaW5nKCkubWF0Y2goL15cXGR7Mn1cXDpcXGR7Mn1cXDpcXGR7Mn0kLykpIHtcbiAgICAgIHJldHVybiBtb21lbnQodmFsdWUsICdoaDptbTpzcycpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBtb21lbnQodmFsdWUpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDxzcGFuPnsgcHJvcHMudmFsdWUgPyBfcGFyc2VEYXRlKHByb3BzLnZhbHVlKS5mb3JtYXQoZm9ybWF0KSA6ICcnIH08L3NwYW4+XG5cbn1cblxuY29uc3QgQ2FwaXRhbGl6ZSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPHNwYW4+eyBwcm9wcy52YWx1ZS50b1VwcGVyQ2FzZSgpIH08L3NwYW4+XG59XG5cbmNvbnN0IEVtYWlsID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiA8YSBocmVmPXsgYG1haWx0bzokeyBwcm9wcy52YWx1ZSB9YCB9PnsgcHJvcHMudmFsdWUgfTwvYT5cbn1cblxuY29uc3QgTGluayA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPGEgaHJlZj17IHByb3BzLnZhbHVlIH0gdGFyZ2V0PVwiX2JsYW5rXCI+eyBwcm9wcy52YWx1ZSB9PC9hPlxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtYXRcbiJdfQ==