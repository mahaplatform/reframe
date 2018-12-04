'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDnd = require('react-dnd');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Row);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Row.__proto__ || Object.getPrototypeOf(Row)).call.apply(_ref, [this].concat(args))), _this), _this._handleRemove = _this._handleRemove.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDropTarget = _props.connectDropTarget,
          connectDragPreview = _props.connectDragPreview,
          connectDragSource = _props.connectDragSource,
          columns = _props.columns,
          index = _props.index,
          row = _props.row;


      return connectDropTarget(connectDragPreview(_react2.default.createElement(
        'div',
        { className: this._getClass() },
        connectDragSource(_react2.default.createElement(
          'div',
          { className: 'reframe-tablefield-handle' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-bars' })
        )),
        columns.map(function (column, i) {
          return _react2.default.createElement(
            'div',
            { className: 'reframe-tablefield-column', key: 'column_' + i },
            _react2.default.createElement('input', { type: 'text', defaultValue: row[column.key] })
          );
        }),
        _react2.default.createElement(
          'div',
          { className: 'reframe-tablefield-actions', onClick: this._handleRemove.bind(this, index) },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-remove' })
        )
      )));
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var isDragging = this.props.isDragging;

      var classes = ['reframe-tablefield-row'];
      if (isDragging) classes.push('dragging');
      return classes.join(' ');
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove(index) {
      this.props.onRemove(index);
    }
  }]);

  return Row;
}(_react2.default.Component);

Row.propTypes = {
  columns: _propTypes2.default.array,
  connectDropTarget: _propTypes2.default.func,
  connectDragPreview: _propTypes2.default.func,
  connectDragSource: _propTypes2.default.func,
  index: _propTypes2.default.number,
  isDragging: _propTypes2.default.bool,
  row: _propTypes2.default.object,
  onRemove: _propTypes2.default.func,
  onReorder: _propTypes2.default.func
};


var source = {
  beginDrag: function beginDrag(props) {
    return {
      index: props.index,
      onReorder: props.onReorder
    };
  },
  endDrag: function endDrag(props, monitor, component) {
    var source = monitor.getItem();
    var target = monitor.getDropResult();
    if (!target) return;
    source.onReorder(source.index, target.index);
  }
};

var target = {
  hover: function hover(props, monitor, component) {
    var dragIndex = monitor.getItem().index;
    var hoverIndex = props.index;
    if (dragIndex === hoverIndex) return;
    props.onReorder(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  },

  drop: function drop(props, monitor, component) {
    return {
      index: props.index
    };
  }
};

var sourceCollector = function sourceCollector(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
};

var targetCollector = function targetCollector(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
};

Row = (0, _reactDnd.DragSource)('ITEM', source, sourceCollector)(Row);
Row = (0, _reactDnd.DropTarget)('ITEM', target, targetCollector)(Row);

exports.default = Row;