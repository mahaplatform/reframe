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

var _section = require('./section');

var _section2 = _interopRequireDefault(_section);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_React$Component) {
  (0, _inherits3.default)(List, _React$Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alert = _props.alert,
          empty = _props.empty,
          footer = _props.footer,
          header = _props.header,
          items = _props.items,
          sections = _props.sections;

      return _react2.default.createElement(
        'div',
        { className: this._getClasses() },
        header && _react2.default.createElement(
          'div',
          { className: 'reframe-list-header' },
          _lodash2.default.isFunction(header) ? _react2.default.createElement(header) : header
        ),
        alert && _react2.default.createElement(
          'div',
          { className: 'reframe-list-alert ' + alert.color },
          alert.message
        ),
        sections && sections.map(function (section, index) {
          return _react2.default.createElement(_section2.default, (0, _extends3.default)({}, section, { key: 'list_section_' + index }));
        }),
        items && _react2.default.createElement(_section2.default, { items: items, empty: empty }),
        footer && _react2.default.createElement(
          'div',
          { className: 'reframe-list-footer' },
          _lodash2.default.isFunction(footer) ? _react2.default.createElement(footer) : footer
        )
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      var className = this.props.className;

      var classes = ['reframe-list'];
      if (className) classes.push(className);
      return classes.join(' ');
    }
  }]);
  return List;
}(_react2.default.Component);

exports.default = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTGlzdCIsInByb3BzIiwiYWxlcnQiLCJlbXB0eSIsImZvb3RlciIsImhlYWRlciIsIml0ZW1zIiwic2VjdGlvbnMiLCJfZ2V0Q2xhc3NlcyIsIl8iLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiY29sb3IiLCJtZXNzYWdlIiwibWFwIiwic2VjdGlvbiIsImluZGV4IiwiY2xhc3NOYW1lIiwiY2xhc3NlcyIsInB1c2giLCJqb2luIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7NkJBRUs7QUFBQSxtQkFDbUQsS0FBS0MsS0FEeEQ7QUFBQSxVQUNDQyxLQURELFVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxLQURSLFVBQ1FBLEtBRFI7QUFBQSxVQUNlQyxNQURmLFVBQ2VBLE1BRGY7QUFBQSxVQUN1QkMsTUFEdkIsVUFDdUJBLE1BRHZCO0FBQUEsVUFDK0JDLEtBRC9CLFVBQytCQSxLQUQvQjtBQUFBLFVBQ3NDQyxRQUR0QyxVQUNzQ0EsUUFEdEM7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFZLEtBQUtDLFdBQUwsRUFBakI7QUFDSUgsa0JBQ0E7QUFBQTtBQUFBLFlBQUssV0FBVSxxQkFBZjtBQUNJSSwyQkFBRUMsVUFBRixDQUFhTCxNQUFiLElBQXVCTSxnQkFBTUMsYUFBTixDQUFvQlAsTUFBcEIsQ0FBdkIsR0FBcURBO0FBRHpELFNBRko7QUFNSUgsaUJBQ0E7QUFBQTtBQUFBLFlBQUssbUNBQWlDQSxNQUFNVyxLQUE1QztBQUNJWCxnQkFBTVk7QUFEVixTQVBKO0FBV0lQLG9CQUNBQSxTQUFTUSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWO0FBQUEsaUJBQ1gsOEJBQUMsaUJBQUQsNkJBQWNELE9BQWQsSUFBd0IsdUJBQXFCQyxLQUE3QyxJQURXO0FBQUEsU0FBYixDQVpKO0FBZ0JJWCxpQkFDQSw4QkFBQyxpQkFBRCxJQUFTLE9BQVFBLEtBQWpCLEVBQXlCLE9BQVFILEtBQWpDLEdBakJKO0FBbUJJQyxrQkFDQTtBQUFBO0FBQUEsWUFBSyxXQUFVLHFCQUFmO0FBQ0lLLDJCQUFFQyxVQUFGLENBQWFOLE1BQWIsSUFBdUJPLGdCQUFNQyxhQUFOLENBQW9CUixNQUFwQixDQUF2QixHQUFxREE7QUFEekQ7QUFwQkosT0FERjtBQTJCRDs7O2tDQUVhO0FBQUEsVUFDSmMsU0FESSxHQUNVLEtBQUtqQixLQURmLENBQ0ppQixTQURJOztBQUVaLFVBQU1DLFVBQVUsQ0FBQyxjQUFELENBQWhCO0FBQ0EsVUFBR0QsU0FBSCxFQUFjQyxRQUFRQyxJQUFSLENBQWFGLFNBQWI7QUFDZCxhQUFPQyxRQUFRRSxJQUFSLENBQWEsR0FBYixDQUFQO0FBQ0Q7OztFQXRDZ0JWLGdCQUFNVyxTOztrQkEwQ1Z0QixJIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VjdGlvbiBmcm9tICcuL3NlY3Rpb24nXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFsZXJ0LCBlbXB0eSwgZm9vdGVyLCBoZWFkZXIsIGl0ZW1zLCBzZWN0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMuX2dldENsYXNzZXMoKSB9PlxuICAgICAgICB7IGhlYWRlciAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1saXN0LWhlYWRlclwiPlxuICAgICAgICAgICAgeyBfLmlzRnVuY3Rpb24oaGVhZGVyKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoaGVhZGVyKSA6IGhlYWRlciB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyBhbGVydCAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVmcmFtZS1saXN0LWFsZXJ0ICR7YWxlcnQuY29sb3J9YH0+XG4gICAgICAgICAgICB7IGFsZXJ0Lm1lc3NhZ2UgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsgc2VjdGlvbnMgJiZcbiAgICAgICAgICBzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8U2VjdGlvbiB7IC4uLnNlY3Rpb24gfSBrZXk9e2BsaXN0X3NlY3Rpb25fJHtpbmRleH1gfSAvPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgICAgeyBpdGVtcyAmJlxuICAgICAgICAgIDxTZWN0aW9uIGl0ZW1zPXsgaXRlbXMgfSBlbXB0eT17IGVtcHR5IH0gLz5cbiAgICAgICAgfVxuICAgICAgICB7IGZvb3RlciAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1saXN0LWZvb3RlclwiPlxuICAgICAgICAgICAgeyBfLmlzRnVuY3Rpb24oZm9vdGVyKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoZm9vdGVyKSA6IGZvb3RlciB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBcbiAgX2dldENsYXNzZXMoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjbGFzc2VzID0gWydyZWZyYW1lLWxpc3QnXVxuICAgIGlmKGNsYXNzTmFtZSkgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSlcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJylcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RcbiJdfQ==