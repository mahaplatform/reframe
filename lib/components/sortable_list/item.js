'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDnd = require('react-dnd');

var _reactDom = require('react-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
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