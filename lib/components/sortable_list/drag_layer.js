'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableDragLayer = function (_React$Component) {
  _inherits(TableDragLayer, _React$Component);

  function TableDragLayer() {
    _classCallCheck(this, TableDragLayer);

    return _possibleConstructorReturn(this, (TableDragLayer.__proto__ || Object.getPrototypeOf(TableDragLayer)).apply(this, arguments));
  }

  _createClass(TableDragLayer, [{
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