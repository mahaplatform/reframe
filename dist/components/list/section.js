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

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_React$Component) {
  (0, _inherits3.default)(Section, _React$Component);

  function Section() {
    (0, _classCallCheck3.default)(this, Section);
    return (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  (0, _createClass3.default)(Section, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          content = _props.content,
          empty = _props.empty,
          items = _props.items,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-list-section' },
        title && _react2.default.createElement(
          'div',
          { className: 'reframe-list-title' },
          title
        ),
        component && _lodash2.default.isFunction(component) ? _react2.default.createElement(component, content) : component,
        content && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-list-item-content' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-list-item-content-value' },
              content
            )
          )
        ),
        items && items.length > 0 && items.map(function (item, itemIndex) {
          return _react2.default.createElement(_item2.default, (0, _extends3.default)({ key: 'list_item_' + itemIndex }, item));
        }),
        empty && items && items.length === 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item' },
          _lodash2.default.isPlainObject(empty) ? _react2.default.createElement(_message2.default, empty) : _react2.default.createElement(
            'div',
            { className: 'reframe-list-item-content' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-list-item-content-value' },
              _lodash2.default.isFunction(empty) ? _react2.default.createElement(empty, this.props) : empty
            )
          )
        )
      );
    }
  }]);
  return Section;
}(_react2.default.Component);

exports.default = Section;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2VjdGlvbiIsInByb3BzIiwiY29tcG9uZW50IiwiY29udGVudCIsImVtcHR5IiwiaXRlbXMiLCJ0aXRsZSIsIl8iLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsIml0ZW1JbmRleCIsImlzUGxhaW5PYmplY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OzZCQUVLO0FBQUEsbUJBQzZDLEtBQUtDLEtBRGxEO0FBQUEsVUFDQ0MsU0FERCxVQUNDQSxTQUREO0FBQUEsVUFDWUMsT0FEWixVQUNZQSxPQURaO0FBQUEsVUFDcUJDLEtBRHJCLFVBQ3FCQSxLQURyQjtBQUFBLFVBQzRCQyxLQUQ1QixVQUM0QkEsS0FENUI7QUFBQSxVQUNtQ0MsS0FEbkMsVUFDbUNBLEtBRG5DOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxzQkFBZjtBQUNJQSxpQkFDQTtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQXNDQTtBQUF0QyxTQUZKO0FBSUlKLHFCQUNBSyxpQkFBRUMsVUFBRixDQUFhTixTQUFiLENBREEsR0FDMEJPLGdCQUFNQyxhQUFOLENBQW9CUixTQUFwQixFQUErQkMsT0FBL0IsQ0FEMUIsR0FDb0VELFNBTHhFO0FBT0lDLG1CQUNBO0FBQUE7QUFBQSxZQUFLLFdBQVUsbUJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDJCQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsaUNBQWY7QUFDSUE7QUFESjtBQURGO0FBREYsU0FSSjtBQWdCSUUsaUJBQVNBLE1BQU1NLE1BQU4sR0FBZSxDQUF4QixJQUNBTixNQUFNTyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxTQUFQO0FBQUEsaUJBQ1IsOEJBQUMsY0FBRCwyQkFBTSxvQkFBa0JBLFNBQXhCLElBQTBDRCxJQUExQyxFQURRO0FBQUEsU0FBVixDQWpCSjtBQXFCSVQsaUJBQVNDLEtBQVQsSUFBa0JBLE1BQU1NLE1BQU4sS0FBaUIsQ0FBbkMsSUFDQTtBQUFBO0FBQUEsWUFBSyxXQUFVLG1CQUFmO0FBQ0lKLDJCQUFFUSxhQUFGLENBQWdCWCxLQUFoQixJQUNBLDhCQUFDLGlCQUFELEVBQWNBLEtBQWQsQ0FEQSxHQUVBO0FBQUE7QUFBQSxjQUFLLFdBQVUsMkJBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxpQ0FBZjtBQUNJRywrQkFBRUMsVUFBRixDQUFhSixLQUFiLElBQXNCSyxnQkFBTUMsYUFBTixDQUFvQk4sS0FBcEIsRUFBMkIsS0FBS0gsS0FBaEMsQ0FBdEIsR0FBK0RHO0FBRG5FO0FBREY7QUFISjtBQXRCSixPQURGO0FBb0NEOzs7RUF4Q21CSyxnQkFBTU8sUzs7a0JBNENiaEIsTyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vbWVzc2FnZSdcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgU2VjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29tcG9uZW50LCBjb250ZW50LCBlbXB0eSwgaXRlbXMsIHRpdGxlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1saXN0LXNlY3Rpb25cIj5cbiAgICAgICAgeyB0aXRsZSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1saXN0LXRpdGxlXCI+eyB0aXRsZSB9PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyBjb21wb25lbnQgJiZcbiAgICAgICAgICBfLmlzRnVuY3Rpb24oY29tcG9uZW50KSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBjb250ZW50KSA6IGNvbXBvbmVudFxuICAgICAgICB9XG4gICAgICAgIHsgY29udGVudCAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1saXN0LWl0ZW1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1saXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbGlzdC1pdGVtLWNvbnRlbnQtdmFsdWVcIj5cbiAgICAgICAgICAgICAgICB7IGNvbnRlbnQgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsgaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaXRlbUluZGV4KSA9PiAoXG4gICAgICAgICAgICA8SXRlbSBrZXk9e2BsaXN0X2l0ZW1fJHtpdGVtSW5kZXh9YH0geyAuLi5pdGVtIH0gLz5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICAgIHsgZW1wdHkgJiYgaXRlbXMgJiYgaXRlbXMubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgeyBfLmlzUGxhaW5PYmplY3QoZW1wdHkpID9cbiAgICAgICAgICAgICAgPE1lc3NhZ2UgeyAuLi5lbXB0eSB9IC8+IDpcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWxpc3QtaXRlbS1jb250ZW50LXZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICB7IF8uaXNGdW5jdGlvbihlbXB0eSkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGVtcHR5LCB0aGlzLnByb3BzKSA6IGVtcHR5IH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25cbiJdfQ==