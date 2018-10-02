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

var _reactDnd = require('react-dnd');

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
          label = _props.label,
          connectDropTarget = _props.connectDropTarget,
          connectDragPreview = _props.connectDragPreview,
          connectDragSource = _props.connectDragSource;

      return connectDropTarget(connectDragPreview(_react2.default.createElement(
        'div',
        { className: this._getClass() },
        _react2.default.createElement(
          'div',
          { className: 'reframe-sortable-list-label', onClick: this._handleToggle.bind(this) },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-' + this._getIcon() }),
          label
        ),
        connectDragSource(_react2.default.createElement(
          'div',
          { className: 'reframe-sortable-list-icon' },
          _react2.default.createElement('i', { className: 'fa fa-bars' })
        ))
      )));
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var checked = this.props.checked;

      var classes = ['reframe-sortable-list-item'];
      if (!checked) classes.push('disabled');
      return classes.join(' ');
    }
  }, {
    key: '_getIcon',
    value: function _getIcon() {
      return this.props.checked ? 'check-square' : 'square-o';
    }
  }, {
    key: '_handleToggle',
    value: function _handleToggle() {
      this.props.onToggle(this.props.index);
    }
  }]);
  return Item;
}(_react2.default.Component);

var source = {
  beginDrag: function beginDrag(props) {
    return {
      index: props.index,
      label: props.label,
      checked: props.checked
    };
  }
};

var target = {
  hover: function hover(props, monitor, component) {
    var dragIndex = monitor.getItem().index;
    var hoverIndex = props.index;
    if (dragIndex === hoverIndex) return;
    var hoverBoundingRect = (0, _reactDom.findDOMNode)(component).getBoundingClientRect();
    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    var clientOffset = monitor.getClientOffset();
    var hoverClientY = clientOffset.y - hoverBoundingRect.top;
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
    props.onMove(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  }
};

var sourceCollector = function sourceCollector(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
};

var targetCollector = function targetCollector(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

Item = (0, _reactDnd.DragSource)('ITEM', source, sourceCollector)(Item);
Item = (0, _reactDnd.DropTarget)('ITEM', target, targetCollector)(Item);

exports.default = Item;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSXRlbSIsInByb3BzIiwibGFiZWwiLCJjb25uZWN0RHJvcFRhcmdldCIsImNvbm5lY3REcmFnUHJldmlldyIsImNvbm5lY3REcmFnU291cmNlIiwiX2dldENsYXNzIiwiX2hhbmRsZVRvZ2dsZSIsImJpbmQiLCJfZ2V0SWNvbiIsImNoZWNrZWQiLCJjbGFzc2VzIiwicHVzaCIsImpvaW4iLCJvblRvZ2dsZSIsImluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJzb3VyY2UiLCJiZWdpbkRyYWciLCJ0YXJnZXQiLCJob3ZlciIsIm1vbml0b3IiLCJjb21wb25lbnQiLCJkcmFnSW5kZXgiLCJnZXRJdGVtIiwiaG92ZXJJbmRleCIsImhvdmVyQm91bmRpbmdSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaG92ZXJNaWRkbGVZIiwiYm90dG9tIiwidG9wIiwiY2xpZW50T2Zmc2V0IiwiZ2V0Q2xpZW50T2Zmc2V0IiwiaG92ZXJDbGllbnRZIiwieSIsIm9uTW92ZSIsInNvdXJjZUNvbGxlY3RvciIsImNvbm5lY3QiLCJkcmFnU291cmNlIiwiZHJhZ1ByZXZpZXciLCJpc0RyYWdnaW5nIiwidGFyZ2V0Q29sbGVjdG9yIiwiZHJvcFRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs2QkFFSztBQUFBLG1CQUNxRSxLQUFLQyxLQUQxRTtBQUFBLFVBQ0NDLEtBREQsVUFDQ0EsS0FERDtBQUFBLFVBQ1FDLGlCQURSLFVBQ1FBLGlCQURSO0FBQUEsVUFDMkJDLGtCQUQzQixVQUMyQkEsa0JBRDNCO0FBQUEsVUFDK0NDLGlCQUQvQyxVQUMrQ0EsaUJBRC9DOztBQUVQLGFBQU9GLGtCQUFrQkMsbUJBQ3ZCO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBS0UsU0FBTCxFQUFqQjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsNkJBQWYsRUFBNkMsU0FBVSxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUF2RDtBQUNFLCtDQUFHLDRCQUEwQixLQUFLQyxRQUFMLEVBQTdCLEdBREY7QUFFSVA7QUFGSixTQURGO0FBS0lHLDBCQUNBO0FBQUE7QUFBQSxZQUFLLFdBQVUsNEJBQWY7QUFDRSwrQ0FBRyxXQUFVLFlBQWI7QUFERixTQURBO0FBTEosT0FEdUIsQ0FBbEIsQ0FBUDtBQWFEOzs7Z0NBRVc7QUFBQSxVQUNGSyxPQURFLEdBQ1UsS0FBS1QsS0FEZixDQUNGUyxPQURFOztBQUVWLFVBQU1DLFVBQVUsQ0FBQyw0QkFBRCxDQUFoQjtBQUNBLFVBQUcsQ0FBQ0QsT0FBSixFQUFhQyxRQUFRQyxJQUFSLENBQWEsVUFBYjtBQUNiLGFBQU9ELFFBQVFFLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLWixLQUFMLENBQVdTLE9BQVgsR0FBcUIsY0FBckIsR0FBc0MsVUFBN0M7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS1QsS0FBTCxDQUFXYSxRQUFYLENBQW9CLEtBQUtiLEtBQUwsQ0FBV2MsS0FBL0I7QUFDRDs7O0VBaENnQkMsZ0JBQU1DLFM7O0FBb0N6QixJQUFNQyxTQUFTO0FBQ2JDLGFBQVcsbUJBQUNsQixLQUFEO0FBQUEsV0FBWTtBQUNyQmMsYUFBT2QsTUFBTWMsS0FEUTtBQUVyQmIsYUFBT0QsTUFBTUMsS0FGUTtBQUdyQlEsZUFBU1QsTUFBTVM7QUFITSxLQUFaO0FBQUE7QUFERSxDQUFmOztBQVFBLElBQU1VLFNBQVM7QUFDYkMsT0FEYSxpQkFDUHBCLEtBRE8sRUFDQXFCLE9BREEsRUFDU0MsU0FEVCxFQUNvQjtBQUMvQixRQUFNQyxZQUFZRixRQUFRRyxPQUFSLEdBQWtCVixLQUFwQztBQUNBLFFBQU1XLGFBQWF6QixNQUFNYyxLQUF6QjtBQUNBLFFBQUlTLGNBQWNFLFVBQWxCLEVBQThCO0FBQzlCLFFBQU1DLG9CQUFvQiwyQkFBWUosU0FBWixFQUF1QksscUJBQXZCLEVBQTFCO0FBQ0EsUUFBTUMsZUFBZSxDQUFDRixrQkFBa0JHLE1BQWxCLEdBQTJCSCxrQkFBa0JJLEdBQTlDLElBQXFELENBQTFFO0FBQ0EsUUFBTUMsZUFBZVYsUUFBUVcsZUFBUixFQUFyQjtBQUNBLFFBQU1DLGVBQWVGLGFBQWFHLENBQWIsR0FBaUJSLGtCQUFrQkksR0FBeEQ7QUFDQSxRQUFJUCxZQUFZRSxVQUFaLElBQTBCUSxlQUFlTCxZQUE3QyxFQUEyRDtBQUMzRCxRQUFJTCxZQUFZRSxVQUFaLElBQTBCUSxlQUFlTCxZQUE3QyxFQUEyRDtBQUMzRDVCLFVBQU1tQyxNQUFOLENBQWFaLFNBQWIsRUFBd0JFLFVBQXhCO0FBQ0FKLFlBQVFHLE9BQVIsR0FBa0JWLEtBQWxCLEdBQTBCVyxVQUExQjtBQUNEO0FBYlksQ0FBZjs7QUFnQkEsSUFBTVcsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxPQUFELEVBQVVoQixPQUFWO0FBQUEsU0FBdUI7QUFDN0NqQix1QkFBbUJpQyxRQUFRQyxVQUFSLEVBRDBCO0FBRTdDbkMsd0JBQW9Ca0MsUUFBUUUsV0FBUixFQUZ5QjtBQUc3Q0MsZ0JBQVluQixRQUFRbUIsVUFBUjtBQUhpQyxHQUF2QjtBQUFBLENBQXhCOztBQU1BLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ0osT0FBRDtBQUFBLFNBQWM7QUFDcENuQyx1QkFBbUJtQyxRQUFRSyxVQUFSO0FBRGlCLEdBQWQ7QUFBQSxDQUF4Qjs7QUFJQTNDLE9BQU8sMEJBQVcsTUFBWCxFQUFtQmtCLE1BQW5CLEVBQTJCbUIsZUFBM0IsRUFBNENyQyxJQUE1QyxDQUFQO0FBQ0FBLE9BQU8sMEJBQVcsTUFBWCxFQUFtQm9CLE1BQW5CLEVBQTJCc0IsZUFBM0IsRUFBNEMxQyxJQUE1QyxDQUFQOztrQkFFZUEsSSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHJhZ1NvdXJjZSwgRHJvcFRhcmdldCB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgY29ubmVjdERyb3BUYXJnZXQsIGNvbm5lY3REcmFnUHJldmlldywgY29ubmVjdERyYWdTb3VyY2UgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gY29ubmVjdERyb3BUYXJnZXQoY29ubmVjdERyYWdQcmV2aWV3KFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyB0aGlzLl9nZXRDbGFzcygpIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zb3J0YWJsZS1saXN0LWxhYmVsXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZVRvZ2dsZS5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmEgZmEtZncgZmEtJHt0aGlzLl9nZXRJY29uKCl9YH0gLz5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgY29ubmVjdERyYWdTb3VyY2UoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNvcnRhYmxlLWxpc3QtaWNvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgfVxuICAgICAgPC9kaXY+XG4gICAgKSlcbiAgfVxuXG4gIF9nZXRDbGFzcygpIHtcbiAgICBjb25zdCB7IGNoZWNrZWQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjbGFzc2VzID0gWydyZWZyYW1lLXNvcnRhYmxlLWxpc3QtaXRlbSddXG4gICAgaWYoIWNoZWNrZWQpIGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldEljb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hlY2tlZCA/ICdjaGVjay1zcXVhcmUnIDogJ3NxdWFyZS1vJ1xuICB9XG5cbiAgX2hhbmRsZVRvZ2dsZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uVG9nZ2xlKHRoaXMucHJvcHMuaW5kZXgpXG4gIH1cblxufVxuXG5jb25zdCBzb3VyY2UgPSB7XG4gIGJlZ2luRHJhZzogKHByb3BzKSA9PiAoe1xuICAgIGluZGV4OiBwcm9wcy5pbmRleCxcbiAgICBsYWJlbDogcHJvcHMubGFiZWwsXG4gICAgY2hlY2tlZDogcHJvcHMuY2hlY2tlZFxuICB9KVxufVxuXG5jb25zdCB0YXJnZXQgPSB7XG4gIGhvdmVyKHByb3BzLCBtb25pdG9yLCBjb21wb25lbnQpIHtcbiAgICBjb25zdCBkcmFnSW5kZXggPSBtb25pdG9yLmdldEl0ZW0oKS5pbmRleFxuICAgIGNvbnN0IGhvdmVySW5kZXggPSBwcm9wcy5pbmRleFxuICAgIGlmIChkcmFnSW5kZXggPT09IGhvdmVySW5kZXgpIHJldHVyblxuICAgIGNvbnN0IGhvdmVyQm91bmRpbmdSZWN0ID0gZmluZERPTU5vZGUoY29tcG9uZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgIGNvbnN0IGhvdmVyTWlkZGxlWSA9IChob3ZlckJvdW5kaW5nUmVjdC5ib3R0b20gLSBob3ZlckJvdW5kaW5nUmVjdC50b3ApIC8gMlxuICAgIGNvbnN0IGNsaWVudE9mZnNldCA9IG1vbml0b3IuZ2V0Q2xpZW50T2Zmc2V0KClcbiAgICBjb25zdCBob3ZlckNsaWVudFkgPSBjbGllbnRPZmZzZXQueSAtIGhvdmVyQm91bmRpbmdSZWN0LnRvcFxuICAgIGlmIChkcmFnSW5kZXggPCBob3ZlckluZGV4ICYmIGhvdmVyQ2xpZW50WSA8IGhvdmVyTWlkZGxlWSkgcmV0dXJuXG4gICAgaWYgKGRyYWdJbmRleCA+IGhvdmVySW5kZXggJiYgaG92ZXJDbGllbnRZID4gaG92ZXJNaWRkbGVZKSByZXR1cm5cbiAgICBwcm9wcy5vbk1vdmUoZHJhZ0luZGV4LCBob3ZlckluZGV4KVxuICAgIG1vbml0b3IuZ2V0SXRlbSgpLmluZGV4ID0gaG92ZXJJbmRleFxuICB9XG59XG5cbmNvbnN0IHNvdXJjZUNvbGxlY3RvciA9IChjb25uZWN0LCBtb25pdG9yKSA9PiAoe1xuICBjb25uZWN0RHJhZ1NvdXJjZTogY29ubmVjdC5kcmFnU291cmNlKCksXG4gIGNvbm5lY3REcmFnUHJldmlldzogY29ubmVjdC5kcmFnUHJldmlldygpLFxuICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxufSlcblxuY29uc3QgdGFyZ2V0Q29sbGVjdG9yID0gKGNvbm5lY3QpID0+ICh7XG4gIGNvbm5lY3REcm9wVGFyZ2V0OiBjb25uZWN0LmRyb3BUYXJnZXQoKVxufSlcblxuSXRlbSA9IERyYWdTb3VyY2UoJ0lURU0nLCBzb3VyY2UsIHNvdXJjZUNvbGxlY3RvcikoSXRlbSlcbkl0ZW0gPSBEcm9wVGFyZ2V0KCdJVEVNJywgdGFyZ2V0LCB0YXJnZXRDb2xsZWN0b3IpKEl0ZW0pXG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1cbiJdfQ==