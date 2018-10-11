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