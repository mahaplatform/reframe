'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactDom = require('react-dom');

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _cell = require('./cell');

var _cell2 = _interopRequireDefault(_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var index = _props.index;
      var row = _props.row;
      var columns = _props.columns;
      var connectDragSource = _props.connectDragSource;
      var connectDropTarget = _props.connectDropTarget;
      var connectDragPreview = _props.connectDragPreview;
      var onUpdateCell = _props.onUpdateCell;

      return connectDropTarget(connectDragPreview(_react2.default.createElement(
        'tr',
        null,
        connectDragSource(_react2.default.createElement(
          'td',
          { className: 'collapsing center aligned' },
          _react2.default.createElement('i', { className: 'icon sidebar' })
        )),
        columns.map(function (column, columnindex) {
          var value = _lodash2.default.get(row, column.code) || column.defaultValue;
          return _react2.default.createElement(_cell2.default, _extends({}, column, {
            key: 'column_' + columnindex,
            code: column.code,
            index: index,
            defaultValue: value,
            onUpdateCell: onUpdateCell }));
        }),
        _react2.default.createElement(
          'td',
          { className: 'collapsing center aligned', onClick: this.handleRemoveRow.bind(this, index) },
          _react2.default.createElement('i', { className: 'icon remove' })
        )
      )));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
        captureDraggingState: true
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.props.connectDragPreview((0, _reactDndHtml5Backend.getEmptyImage)(), {
        captureDraggingState: true
      });
    }
  }, {
    key: 'handleRemoveRow',
    value: function handleRemoveRow(index) {
      this.props.onRemoveRow(index);
    }
  }]);

  return Row;
}(_react2.default.Component);

Row.propTypes = {
  row: _react2.default.PropTypes.object.isRequired,
  columns: _react2.default.PropTypes.array.isRequired,
  index: _react2.default.PropTypes.number,
  onMoveRow: _react2.default.PropTypes.func,
  onRemoveRow: _react2.default.PropTypes.func,
  connectDragSource: _react2.default.PropTypes.func,
  connectDragPreview: _react2.default.PropTypes.func,
  onUpdateCell: _react2.default.PropTypes.func,
  isDragging: _react2.default.PropTypes.bool
};


var itemTypes = {
  ROW: 'row'
};

var rowSource = {
  beginDrag: function beginDrag(props) {
    return {
      index: props.index,
      columns: props.columns,
      row: props.row,
      width: null,
      parentTop: null,
      parentBottom: null
    };
  }
};

var rowTarget = {
  hover: function hover(props, monitor, component) {
    var item = monitor.getItem();
    var fromIndex = item.index;
    var toIndex = props.index;
    var element = (0, _reactDom.findDOMNode)(component);
    var hoverBoundingRect = element.getBoundingClientRect();
    var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    var clientOffset = monitor.getClientOffset();
    var hoverClientY = clientOffset.y - hoverBoundingRect.top;
    var parentNode = (0, _reactDom.findDOMNode)(component).parentNode;
    var width = element.offsetWidth;
    var height = hoverBoundingRect.bottom - hoverBoundingRect.top;
    var top = 0;
    var el = parentNode;
    while (el) {
      if (el.tagName == 'BODY') {
        var yScroll = el.scrollTop || document.documentElement.scrollTop;
        top += el.offsetTop - yScroll + el.clientTop;
      } else {
        top += el.offsetTop - el.scrollTop + el.clientTop;
      }
      el = el.offsetParent;
    }
    item.width = width + 2;
    item.parentTop = top - 1;
    item.parentBottom = top + parentNode.offsetHeight - height;
    if (fromIndex === toIndex) {
      return;
    } else if (fromIndex < toIndex && hoverClientY < hoverMiddleY) {
      return;
    } else if (fromIndex > toIndex && hoverClientY > hoverMiddleY) {
      return;
    }
    props.onMoveRow(fromIndex, toIndex);
    item.index = toIndex;
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

Row = (0, _reactDnd.DragSource)(itemTypes.ROW, rowSource, sourceCollector)(Row);
Row = (0, _reactDnd.DropTarget)(itemTypes.ROW, rowTarget, targetCollector)(Row);

exports.default = Row;