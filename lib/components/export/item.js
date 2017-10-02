'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

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
          connectDragSource = _props.connectDragSource,
          connectDropTarget = _props.connectDropTarget,
          connectDragPreview = _props.connectDragPreview;

      return connectDropTarget(connectDragPreview(_react2.default.createElement(
        'div',
        { className: this._getClass(), onClick: this._handleToggle.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-export-label' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-' + this._getIcon() }),
          label
        ),
        connectDragSource(_react2.default.createElement(
          'div',
          { className: 'reframe-export-icon' },
          _react2.default.createElement('i', { className: 'fa fa-bars' })
        ))
      )));
    }

    // componentDidMount() {
    //   this.props.connectDragPreview(getEmptyImage(), {
    //     captureDraggingState: true
    //   })
    // }
    //
    // componentDidUpdate() {
    //   this.props.connectDragPreview(getEmptyImage(), {
    //     captureDraggingState: true
    //   })
    // }

  }, {
    key: '_getClass',
    value: function _getClass() {
      var _props2 = this.props,
          checked = _props2.checked,
          isDragging = _props2.isDragging,
          isDragLayer = _props2.isDragLayer;

      var classes = ['reframe-export-item'];
      if (!checked) classes.push('disabled');
      if (isDragging) classes.push('hidden');
      if (isDragLayer === true) classes.push('moving');
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
      var index = this.props.index;

      this.props.onToggle(index);
    }
  }]);

  return Item;
}(_react2.default.Component);

var rowSource = {
  beginDrag: function beginDrag(props) {
    return {
      index: props.index,
      label: props.label,
      checked: props.checked
    };
  }
};

var draggingIndex = null;

var rowTarget = {
  hover: function hover(props, monitor, component) {
    var fromIndex = draggingIndex || monitor.getItem().index;
    var toIndex = props.index;
    props.onMove(fromIndex, toIndex);
    draggingIndex = toIndex;
  },
  drop: function drop(props, monitor, component) {
    var fromIndex = draggingIndex || monitor.getItem().index;
    var toIndex = props.index;
    props.onMove(fromIndex, toIndex);
    draggingIndex = null;
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

Item = (0, _reactDnd.DragSource)('ITEM', rowSource, sourceCollector)(Item);
Item = (0, _reactDnd.DropTarget)('ITEM', rowTarget, targetCollector)(Item);

exports.default = Item;