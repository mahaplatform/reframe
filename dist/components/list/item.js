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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function (_React$Component) {
  (0, _inherits3.default)(Item, _React$Component);

  function Item() {
    (0, _classCallCheck3.default)(this, Item);
    return (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  (0, _createClass3.default)(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alt = _props.alt,
          component = _props.component,
          content = _props.content,
          empty = _props.empty,
          extra = _props.extra,
          format = _props.format,
          handler = _props.handler,
          icon = _props.icon,
          label = _props.label,
          link = _props.link,
          tasks = _props.tasks,
          units = _props.units;

      if (this.props.if === false) return null;
      var item = _react2.default.createElement(
        'div',
        { className: this._getClass() },
        icon && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-icon' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-' + icon })
        ),
        component && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-component' },
          _lodash2.default.isFunction(component) ? _react2.default.createElement(component, content) : component
        ),
        !component && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-content' },
          label && _react2.default.createElement(
            'div',
            { className: 'reframe-list-item-content-label' },
            label
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-list-item-content-value' },
            content && _react2.default.createElement(_format2.default, (0, _extends3.default)({}, content, { format: format, value: content })),
            content && units && ' ' + units,
            !content && alt && _react2.default.createElement(
              'span',
              null,
              alt
            ),
            !content && empty && _react2.default.createElement(
              'span',
              { className: 'reframe-list-item-content-empty' },
              empty
            )
          )
        ),
        extra && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-extra' },
          _lodash2.default.isFunction(extra) ? _react2.default.createElement(extra, content) : extra
        ),
        (handler || link) && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-proceed' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-right' })
        ),
        tasks && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-proceed', onClick: this._handleTasks.bind(this) },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-ellipsis-v' })
        )
      );
      return _react2.default.createElement(
        'div',
        { onClick: this._handleClick.bind(this) },
        item
      );
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      var _props2 = this.props,
          link = _props2.link,
          handler = _props2.handler;

      if (link) this.context.router.push(link);
      if (handler) handler();
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var _props3 = this.props,
          className = _props3.className,
          handler = _props3.handler,
          link = _props3.link;

      var classes = ['reframe-list-item'];
      if (className) classes.push(className);
      if (link || handler) classes.push('reframe-list-item-link');
      return classes.join(' ');
    }
  }, {
    key: '_handleTasks',
    value: function _handleTasks() {
      var tasks = this.props.tasks;

      this.context.tasks.open(tasks);
    }
  }]);
  return Item;
}(_react2.default.Component);

Item.contextTypes = {
  router: _propTypes2.default.object,
  tasks: _propTypes2.default.object
};
exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSXRlbSIsInByb3BzIiwiYWx0IiwiY29tcG9uZW50IiwiY29udGVudCIsImVtcHR5IiwiZXh0cmEiLCJmb3JtYXQiLCJoYW5kbGVyIiwiaWNvbiIsImxhYmVsIiwibGluayIsInRhc2tzIiwidW5pdHMiLCJpZiIsIml0ZW0iLCJfZ2V0Q2xhc3MiLCJfIiwiaXNGdW5jdGlvbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIl9oYW5kbGVUYXNrcyIsImJpbmQiLCJfaGFuZGxlQ2xpY2siLCJjb250ZXh0Iiwicm91dGVyIiwicHVzaCIsImNsYXNzTmFtZSIsImNsYXNzZXMiLCJqb2luIiwib3BlbiIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7NkJBT0s7QUFBQSxtQkFDNkYsS0FBS0MsS0FEbEc7QUFBQSxVQUNDQyxHQURELFVBQ0NBLEdBREQ7QUFBQSxVQUNNQyxTQUROLFVBQ01BLFNBRE47QUFBQSxVQUNpQkMsT0FEakIsVUFDaUJBLE9BRGpCO0FBQUEsVUFDMEJDLEtBRDFCLFVBQzBCQSxLQUQxQjtBQUFBLFVBQ2lDQyxLQURqQyxVQUNpQ0EsS0FEakM7QUFBQSxVQUN3Q0MsTUFEeEMsVUFDd0NBLE1BRHhDO0FBQUEsVUFDZ0RDLE9BRGhELFVBQ2dEQSxPQURoRDtBQUFBLFVBQ3lEQyxJQUR6RCxVQUN5REEsSUFEekQ7QUFBQSxVQUMrREMsS0FEL0QsVUFDK0RBLEtBRC9EO0FBQUEsVUFDc0VDLElBRHRFLFVBQ3NFQSxJQUR0RTtBQUFBLFVBQzRFQyxLQUQ1RSxVQUM0RUEsS0FENUU7QUFBQSxVQUNtRkMsS0FEbkYsVUFDbUZBLEtBRG5GOztBQUVQLFVBQUcsS0FBS1osS0FBTCxDQUFXYSxFQUFYLEtBQWtCLEtBQXJC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QVVDO0FBRkcsQztrQkF3RVRsQyxJIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybWF0IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICByb3V0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdGFza3M6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFsdCwgY29tcG9uZW50LCBjb250ZW50LCBlbXB0eSwgZXh0cmEsIGZvcm1hdCwgaGFuZGxlciwgaWNvbiwgbGFiZWwsIGxpbmssIHRhc2tzLCB1bml0cyB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKHRoaXMucHJvcHMuaWYgPT09IGZhbHNlKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IGl0ZW0gPSAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMuX2dldENsYXNzKCkgfT5cbiAgICAgICAgeyBpY29uICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWxpc3QtaXRlbS1pY29uXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSBmYS1mdyBmYS0ke2ljb259YH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7IGNvbXBvbmVudCAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1saXN0LWl0ZW0tY29tcG9uZW50XCI+XG4gICAgICAgICAgICB7IF8uaXNGdW5jdGlvbihjb21wb25lbnQpID8gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIGNvbnRlbnQpIDogY29tcG9uZW50IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7ICFjb21wb25lbnQgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIHsgbGFiZWwgJiYgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWxpc3QtaXRlbS1jb250ZW50LWxhYmVsXCI+eyBsYWJlbCB9PC9kaXY+IH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1saXN0LWl0ZW0tY29udGVudC12YWx1ZVwiPlxuICAgICAgICAgICAgICB7IGNvbnRlbnQgJiYgPEZvcm1hdCB7IC4uLmNvbnRlbnQgfSBmb3JtYXQ9eyBmb3JtYXQgfSB2YWx1ZT17IGNvbnRlbnQgfSAvPiB9XG4gICAgICAgICAgICAgIHsgY29udGVudCAmJiB1bml0cyAmJiBgICR7dW5pdHN9YCB9XG4gICAgICAgICAgICAgIHsgIWNvbnRlbnQgJiYgYWx0ICYmIDxzcGFuPnsgYWx0fTwvc3Bhbj4gfVxuICAgICAgICAgICAgICB7ICFjb250ZW50ICYmIGVtcHR5ICYmIDxzcGFuIGNsYXNzTmFtZT1cInJlZnJhbWUtbGlzdC1pdGVtLWNvbnRlbnQtZW1wdHlcIj57IGVtcHR5IH08L3NwYW4+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyBleHRyYSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1saXN0LWl0ZW0tZXh0cmFcIj5cbiAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKGV4dHJhKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoZXh0cmEsIGNvbnRlbnQpIDogZXh0cmEgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsgKGhhbmRsZXIgfHwgbGluaykgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbGlzdC1pdGVtLXByb2NlZWRcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWNoZXZyb24tcmlnaHRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsgdGFza3MgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbGlzdC1pdGVtLXByb2NlZWRcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlVGFza3MuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtZWxsaXBzaXMtdlwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlQ2xpY2suYmluZCh0aGlzKSB9PnsgaXRlbSB9PC9kaXY+XG4gIH1cblxuICBfaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBsaW5rLCBoYW5kbGVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYobGluaykgdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKGxpbmspXG4gICAgaWYoaGFuZGxlcikgaGFuZGxlcigpXG4gIH1cblxuICBfZ2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGhhbmRsZXIsIGxpbmsgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjbGFzc2VzID0gWydyZWZyYW1lLWxpc3QtaXRlbSddXG4gICAgaWYoY2xhc3NOYW1lKSBjbGFzc2VzLnB1c2goY2xhc3NOYW1lKVxuICAgIGlmKGxpbmsgfHwgaGFuZGxlcikgY2xhc3Nlcy5wdXNoKCdyZWZyYW1lLWxpc3QtaXRlbS1saW5rJylcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJylcbiAgfVxuXG4gIF9oYW5kbGVUYXNrcygpIHtcbiAgICBjb25zdCB7IHRhc2tzIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5jb250ZXh0LnRhc2tzLm9wZW4odGFza3MpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtXG4iXX0=