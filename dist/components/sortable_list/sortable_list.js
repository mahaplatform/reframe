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

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortableList = function (_React$Component) {
  (0, _inherits3.default)(SortableList, _React$Component);

  function SortableList() {
    (0, _classCallCheck3.default)(this, SortableList);
    return (0, _possibleConstructorReturn3.default)(this, (SortableList.__proto__ || Object.getPrototypeOf(SortableList)).apply(this, arguments));
  }

  (0, _createClass3.default)(SortableList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-sortable-list' },
        items.map(function (item, index) {
          return _react2.default.createElement(_item2.default, (0, _extends3.default)({ key: 'item_' + index }, _this2._getItem(item, index)));
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.defaultValue) this._handleSet();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          items = _props.items,
          onUpdate = _props.onUpdate;

      if (!_lodash2.default.isEqual(prevProps.items, items)) onUpdate(items);
      if (!_lodash2.default.isEqual(prevProps.defaultValue, defaultValue)) this._handleSet();
    }
  }, {
    key: '_getItem',
    value: function _getItem(item, index) {
      var _props2 = this.props,
          onMove = _props2.onMove,
          onToggle = _props2.onToggle;

      return {
        label: item.label,
        checked: item.checked,
        index: index,
        onMove: onMove.bind(this),
        onToggle: onToggle.bind(this)
      };
    }
  }, {
    key: '_handleSet',
    value: function _handleSet() {
      var _props3 = this.props,
          defaultValue = _props3.defaultValue,
          onSet = _props3.onSet;

      onSet(defaultValue.map(function (item) {
        return (0, _extends3.default)({}, item, {
          checked: item.checked !== false
        });
      }));
    }
  }]);
  return SortableList;
}(_react2.default.Component);

exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(SortableList);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU29ydGFibGVMaXN0IiwiaXRlbXMiLCJwcm9wcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIl9nZXRJdGVtIiwiZGVmYXVsdFZhbHVlIiwiX2hhbmRsZVNldCIsInByZXZQcm9wcyIsIm9uVXBkYXRlIiwiXyIsImlzRXF1YWwiLCJvbk1vdmUiLCJvblRvZ2dsZSIsImxhYmVsIiwiY2hlY2tlZCIsImJpbmQiLCJvblNldCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiSFRNTDVCYWNrZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxZOzs7Ozs7Ozs7OzZCQUVLO0FBQUE7O0FBQUEsVUFDQ0MsS0FERCxHQUNXLEtBQUtDLEtBRGhCLENBQ0NELEtBREQ7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHVCQUFmO0FBQ0lBLGNBQU1FLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxpQkFDViw4QkFBQyxjQUFELDJCQUFNLGVBQWFBLEtBQW5CLElBQWlDLE9BQUtDLFFBQUwsQ0FBY0YsSUFBZCxFQUFvQkMsS0FBcEIsQ0FBakMsRUFEVTtBQUFBLFNBQVY7QUFESixPQURGO0FBT0Q7Ozt3Q0FFbUI7QUFDbEIsVUFBRyxLQUFLSCxLQUFMLENBQVdLLFlBQWQsRUFBNEIsS0FBS0MsVUFBTDtBQUM3Qjs7O3VDQUVrQkMsUyxFQUFXO0FBQUEsbUJBQ2MsS0FBS1AsS0FEbkI7QUFBQSxVQUNwQkssWUFEb0IsVUFDcEJBLFlBRG9CO0FBQUEsVUFDTk4sS0FETSxVQUNOQSxLQURNO0FBQUEsVUFDQ1MsUUFERCxVQUNDQSxRQUREOztBQUU1QixVQUFHLENBQUNDLGlCQUFFQyxPQUFGLENBQVVILFVBQVVSLEtBQXBCLEVBQTJCQSxLQUEzQixDQUFKLEVBQXVDUyxTQUFTVCxLQUFUO0FBQ3ZDLFVBQUcsQ0FBQ1UsaUJBQUVDLE9BQUYsQ0FBVUgsVUFBVUYsWUFBcEIsRUFBa0NBLFlBQWxDLENBQUosRUFBcUQsS0FBS0MsVUFBTDtBQUN0RDs7OzZCQUVRSixJLEVBQU1DLEssRUFBTztBQUFBLG9CQUNTLEtBQUtILEtBRGQ7QUFBQSxVQUNaVyxNQURZLFdBQ1pBLE1BRFk7QUFBQSxVQUNKQyxRQURJLFdBQ0pBLFFBREk7O0FBRXBCLGFBQU87QUFDTEMsZUFBT1gsS0FBS1csS0FEUDtBQUVMQyxpQkFBU1osS0FBS1ksT0FGVDtBQUdMWCxvQkFISztBQUlMUSxnQkFBUUEsT0FBT0ksSUFBUCxDQUFZLElBQVosQ0FKSDtBQUtMSCxrQkFBVUEsU0FBU0csSUFBVCxDQUFjLElBQWQ7QUFMTCxPQUFQO0FBT0Q7OztpQ0FFWTtBQUFBLG9CQUNxQixLQUFLZixLQUQxQjtBQUFBLFVBQ0hLLFlBREcsV0FDSEEsWUFERztBQUFBLFVBQ1dXLEtBRFgsV0FDV0EsS0FEWDs7QUFFWEEsWUFBTVgsYUFBYUosR0FBYixDQUFpQjtBQUFBLDBDQUNsQkMsSUFEa0I7QUFFckJZLG1CQUFTWixLQUFLWSxPQUFMLEtBQWlCO0FBRkw7QUFBQSxPQUFqQixDQUFOO0FBSUQ7OztFQXhDd0JHLGdCQUFNQyxTOztrQkE0Q2xCLCtCQUFnQkMsOEJBQWhCLEVBQThCckIsWUFBOUIsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhUTUw1QmFja2VuZCBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgU29ydGFibGVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtc29ydGFibGUtbGlzdFwiPlxuICAgICAgICB7IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8SXRlbSBrZXk9e2BpdGVtXyR7aW5kZXh9YH0geyAuLi50aGlzLl9nZXRJdGVtKGl0ZW0sIGluZGV4KSB9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYodGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpIHRoaXMuX2hhbmRsZVNldCgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIGl0ZW1zLCBvblVwZGF0ZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKCFfLmlzRXF1YWwocHJldlByb3BzLml0ZW1zLCBpdGVtcykpIG9uVXBkYXRlKGl0ZW1zKVxuICAgIGlmKCFfLmlzRXF1YWwocHJldlByb3BzLmRlZmF1bHRWYWx1ZSwgZGVmYXVsdFZhbHVlKSkgdGhpcy5faGFuZGxlU2V0KClcbiAgfVxuXG4gIF9nZXRJdGVtKGl0ZW0sIGluZGV4KSB7XG4gICAgY29uc3QgeyBvbk1vdmUsIG9uVG9nZ2xlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgY2hlY2tlZDogaXRlbS5jaGVja2VkLFxuICAgICAgaW5kZXgsXG4gICAgICBvbk1vdmU6IG9uTW92ZS5iaW5kKHRoaXMpLFxuICAgICAgb25Ub2dnbGU6IG9uVG9nZ2xlLmJpbmQodGhpcylcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlU2V0KCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBvblNldCB9ID0gdGhpcy5wcm9wc1xuICAgIG9uU2V0KGRlZmF1bHRWYWx1ZS5tYXAoaXRlbSA9PiAoe1xuICAgICAgLi4uaXRlbSxcbiAgICAgIGNoZWNrZWQ6IGl0ZW0uY2hlY2tlZCAhPT0gZmFsc2VcbiAgICB9KSkpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnRHJvcENvbnRleHQoSFRNTDVCYWNrZW5kKShTb3J0YWJsZUxpc3QpXG4iXX0=