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

var _reactDnd = require('react-dnd');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableDragLayer = function (_React$Component) {
  (0, _inherits3.default)(TableDragLayer, _React$Component);

  function TableDragLayer() {
    (0, _classCallCheck3.default)(this, TableDragLayer);
    return (0, _possibleConstructorReturn3.default)(this, (TableDragLayer.__proto__ || Object.getPrototypeOf(TableDragLayer)).apply(this, arguments));
  }

  (0, _createClass3.default)(TableDragLayer, [{
    key: 'render',
    value: function render() {
      var item = this.props.item;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-sortable-list-drag-layer', style: this._getItemStyles(this.props) },
        _react2.default.createElement(_item2.default, item)
      );
    }
  }, {
    key: '_getItemStyles',
    value: function _getItemStyles(props) {
      var initialOffset = props.initialOffset,
          currentOffset = props.currentOffset;

      if (!currentOffset) return { display: 'none' };
      var top = currentOffset.y - initialOffset.y;
      return {
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 100,
        width: '100%',
        left: 0,
        top: top + 'px'
      };
    }
  }]);
  return TableDragLayer;
}(_react2.default.Component);

var collect = function collect(monitor) {
  return {
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  };
};

exports.default = (0, _reactDnd.DragLayer)(collect)(TableDragLayer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVGFibGVEcmFnTGF5ZXIiLCJpdGVtIiwicHJvcHMiLCJfZ2V0SXRlbVN0eWxlcyIsImluaXRpYWxPZmZzZXQiLCJjdXJyZW50T2Zmc2V0IiwiZGlzcGxheSIsInRvcCIsInkiLCJwb3NpdGlvbiIsInBvaW50ZXJFdmVudHMiLCJ6SW5kZXgiLCJ3aWR0aCIsImxlZnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbGxlY3QiLCJtb25pdG9yIiwiZ2V0SXRlbSIsIml0ZW1UeXBlIiwiZ2V0SXRlbVR5cGUiLCJnZXRJbml0aWFsU291cmNlQ2xpZW50T2Zmc2V0IiwiZ2V0U291cmNlQ2xpZW50T2Zmc2V0IiwiaXNEcmFnZ2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7OzZCQUVLO0FBQUEsVUFDQ0MsSUFERCxHQUNVLEtBQUtDLEtBRGYsQ0FDQ0QsSUFERDs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsa0NBQWYsRUFBa0QsT0FBUSxLQUFLRSxjQUFMLENBQW9CLEtBQUtELEtBQXpCLENBQTFEO0FBQ0Usc0NBQUMsY0FBRCxFQUFXRCxJQUFYO0FBREYsT0FERjtBQUtEOzs7bUNBRWNDLEssRUFBTztBQUFBLFVBQ1pFLGFBRFksR0FDcUJGLEtBRHJCLENBQ1pFLGFBRFk7QUFBQSxVQUNHQyxhQURILEdBQ3FCSCxLQURyQixDQUNHRyxhQURIOztBQUVwQixVQUFHLENBQUNBLGFBQUosRUFBbUIsT0FBTyxFQUFFQyxTQUFTLE1BQVgsRUFBUDtBQUNuQixVQUFNQyxNQUFNRixjQUFjRyxDQUFkLEdBQWtCSixjQUFjSSxDQUE1QztBQUNBLGFBQU87QUFDTEMsa0JBQVUsVUFETDtBQUVMQyx1QkFBZSxNQUZWO0FBR0xDLGdCQUFRLEdBSEg7QUFJTEMsZUFBTyxNQUpGO0FBS0xDLGNBQU0sQ0FMRDtBQU1MTixhQUFRQSxHQUFSO0FBTkssT0FBUDtBQVFEOzs7RUF2QjBCTyxnQkFBTUMsUzs7QUEyQm5DLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxPQUFEO0FBQUEsU0FBYztBQUM1QmhCLFVBQU1nQixRQUFRQyxPQUFSLEVBRHNCO0FBRTVCQyxjQUFVRixRQUFRRyxXQUFSLEVBRmtCO0FBRzVCaEIsbUJBQWVhLFFBQVFJLDRCQUFSLEVBSGE7QUFJNUJoQixtQkFBZVksUUFBUUsscUJBQVIsRUFKYTtBQUs1QkMsZ0JBQVlOLFFBQVFNLFVBQVI7QUFMZ0IsR0FBZDtBQUFBLENBQWhCOztrQkFRZSx5QkFBVVAsT0FBVixFQUFtQmhCLGNBQW5CLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERyYWdMYXllciB9IGZyb20gJ3JlYWN0LWRuZCdcbmltcG9ydCBJdGVtIGZyb20gJy4vaXRlbSdcblxuY2xhc3MgVGFibGVEcmFnTGF5ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGl0ZW0gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNvcnRhYmxlLWxpc3QtZHJhZy1sYXllclwiIHN0eWxlPXsgdGhpcy5fZ2V0SXRlbVN0eWxlcyh0aGlzLnByb3BzKSB9PlxuICAgICAgICA8SXRlbSB7IC4uLml0ZW0gfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldEl0ZW1TdHlsZXMocHJvcHMpIHtcbiAgICBjb25zdCB7IGluaXRpYWxPZmZzZXQsIGN1cnJlbnRPZmZzZXQgfSA9IHByb3BzXG4gICAgaWYoIWN1cnJlbnRPZmZzZXQpIHJldHVybiB7IGRpc3BsYXk6ICdub25lJyB9XG4gICAgY29uc3QgdG9wID0gY3VycmVudE9mZnNldC55IC0gaW5pdGlhbE9mZnNldC55XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgekluZGV4OiAxMDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRvcDogYCR7dG9wfXB4YFxuICAgIH1cbiAgfVxuXG59XG5cbmNvbnN0IGNvbGxlY3QgPSAobW9uaXRvcikgPT4gKHtcbiAgaXRlbTogbW9uaXRvci5nZXRJdGVtKCksXG4gIGl0ZW1UeXBlOiBtb25pdG9yLmdldEl0ZW1UeXBlKCksXG4gIGluaXRpYWxPZmZzZXQ6IG1vbml0b3IuZ2V0SW5pdGlhbFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICBjdXJyZW50T2Zmc2V0OiBtb25pdG9yLmdldFNvdXJjZUNsaWVudE9mZnNldCgpLFxuICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgRHJhZ0xheWVyKGNvbGxlY3QpKFRhYmxlRHJhZ0xheWVyKVxuIl19