'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _drag_layer = require('./drag_layer');

var _drag_layer2 = _interopRequireDefault(_drag_layer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableField = function (_React$Component) {
  _inherits(TableField, _React$Component);

  function TableField() {
    _classCallCheck(this, TableField);

    return _possibleConstructorReturn(this, (TableField.__proto__ || Object.getPrototypeOf(TableField)).apply(this, arguments));
  }

  _createClass(TableField, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var onMoveRow = _props.onMoveRow;
      var onRemoveRow = _props.onRemoveRow;
      var onUpdateCell = _props.onUpdateCell;
      var _props$state = this.props.state;
      var columns = _props$state.columns;
      var value = _props$state.value;

      var colspan = columns.length + 2;
      return _react2.default.createElement(
        'div',
        { className: 'tablefield' },
        _react2.default.createElement(
          'table',
          { className: 'ui celled compact unstackable table' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { className: 'collapsing' },
                ' '
              ),
              columns.map(function (column, index) {
                return _react2.default.createElement(
                  'th',
                  { key: 'header_' + index },
                  column.header
                );
              }),
              _react2.default.createElement(
                'th',
                { className: 'collapsing' },
                ' '
              )
            )
          ),
          function () {
            if (value.length > 0) {
              return _react2.default.createElement(
                'tbody',
                null,
                value.map(function (row, index) {
                  return _react2.default.createElement(_row2.default, { key: 'row_' + index,
                    row: row,
                    columns: columns,
                    index: index,
                    onMoveRow: onMoveRow,
                    onRemoveRow: onRemoveRow,
                    onUpdateCell: onUpdateCell });
                })
              );
            } else {
              return _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'td',
                    { colSpan: colspan, className: 'center aligned' },
                    'There are not any rows'
                  )
                )
              );
            }
          }(),
          _react2.default.createElement(
            'tfoot',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { colSpan: colspan, className: 'center aligned', onClick: this._handleAddRow.bind(this) },
                _react2.default.createElement('i', { className: 'icon plus' }),
                ' Add a row'
              )
            )
          )
        ),
        _react2.default.createElement(_drag_layer2.default, null)
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleInitialize();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.defaultValue != this.props.defaultValue) {
        this._handleUpdateTable(this.props.defaultValue);
      }
      if (prevProps.state.value != this.props.state.value) {
        this._handleChange(this.props.state.value);
      }
    }
  }, {
    key: '_handleInitialize',
    value: function _handleInitialize() {
      var _props2 = this.props;
      var columns = _props2.columns;
      var value = _props2.value;
      var onInitialize = _props2.onInitialize;

      onInitialize(columns, value);
    }
  }, {
    key: '_handleAddRow',
    value: function _handleAddRow() {
      this.props.onAddRow();
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(value) {
      this.props.onChange(value);
    }
  }, {
    key: '_handleUpdateTable',
    value: function _handleUpdateTable(value) {
      this.props.onUpdateTable(value);
    }
  }]);

  return TableField;
}(_react2.default.Component);

TableField.propTypes = {
  state: _react2.default.PropTypes.shape({
    columns: _react2.default.PropTypes.array,
    value: _react2.default.PropTypes.object
  }),
  onInitialize: _react2.default.PropTypes.func,
  onAddRow: _react2.default.PropTypes.func,
  onMoveRow: _react2.default.PropTypes.func,
  onRemoveRow: _react2.default.PropTypes.func,
  onChange: _react2.default.PropTypes.func,
  onUpdateCell: _react2.default.PropTypes.func
};


var mapStateToProps = function mapStateToProps(state, props) {
  return { state: state };
};

var mapDispatchToProps = {
  onInitialize: actions.initialize,
  onUpdateTable: actions.updateTable,
  onAddRow: actions.addRow,
  onMoveRow: actions.moveRow,
  onRemoveRow: actions.removeRow,
  onUpdateCell: actions.updateCell
};

TableField = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TableField);
TableField = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(TableField);

exports.default = TableField;