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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function (_React$Component) {
  (0, _inherits3.default)(Table, _React$Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this._handleResize = _lodash2.default.debounce(_this._resizeColumns, 100), _this.state = {
      widths: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Table, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          link = _props.link,
          records = _props.records,
          recordTasks = _props.recordTasks,
          selectable = _props.selectable,
          selected = _props.selected,
          selectAll = _props.selectAll,
          sort = _props.sort;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-table' },
        _react2.default.createElement(
          'table',
          { className: 'reframe-table-pinned' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              selectable && _react2.default.createElement(
                'td',
                { className: 'reframe-table-check-cell mobile', onClick: this._handleSelectAll.bind(this) },
                selectAll ? _react2.default.createElement('i', { className: 'fa fa-fw fa-check-circle' }) : _react2.default.createElement('i', { className: 'fa fa-fw fa-circle-o' })
              ),
              columns.filter(function (column) {
                return column.visible !== false;
              }).map(function (column, columnIndex) {
                return _react2.default.createElement(
                  'td',
                  { key: 'header-' + columnIndex, className: _this2._getHeaderClass(column), style: _this2._getHeadStyle(columnIndex + (selectable ? 1 : 0)), onClick: _this2._handleSort.bind(_this2, column) },
                  column.label,
                  sort && (column.key === sort.key || column.sort === sort.key) && (sort.order === 'asc' ? _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-up' }) : _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-down' }))
                );
              }),
              (link || recordTasks) && _react2.default.createElement('td', { className: 'reframe-table-head-cell mobile collapsing next', style: this._getHeadStyle() })
            )
          )
        ),
        _react2.default.createElement(
          'table',
          { className: 'reframe-table-data' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              { ref: function ref(node) {
                  return _this2.head = node;
                } },
              selectable && _react2.default.createElement(
                'td',
                { className: 'reframe-table-check-cell mobile', onClick: this._handleSelectAll.bind(this) },
                selectAll ? _react2.default.createElement('i', { className: 'fa fa-fw fa-check-circle' }) : _react2.default.createElement('i', { className: 'fa fa-fw fa-circle-o' })
              ),
              columns.filter(function (column) {
                return column.visible !== false;
              }).map(function (column, columnIndex) {
                return _react2.default.createElement(
                  'td',
                  { key: 'header-' + columnIndex, className: _this2._getHeaderClass(column), style: _this2._getHeadStyle(columnIndex + (selectable ? 1 : 0)), onClick: _this2._handleSort.bind(_this2, column) },
                  column.label,
                  sort && (column.key === sort.key || column.sort === sort.key) && (sort.order === 'asc' ? _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-up' }) : _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-down' }))
                );
              }),
              (link || recordTasks) && _react2.default.createElement('td', { className: 'reframe-table-head-cell mobile collapsing next', style: this._getHeadStyle() })
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            records.map(function (record, rowIndex) {
              return _react2.default.createElement(
                'tr',
                { key: 'record_' + rowIndex, className: _this2._getBodyRowClass(record) },
                selectable && _react2.default.createElement(
                  'td',
                  { key: 'cell_' + rowIndex + '_select', className: 'reframe-table-check-cell mobile', onClick: _this2._handleSelect.bind(_this2, record.id) },
                  _lodash2.default.includes(selected, record.id) ? _react2.default.createElement('i', { className: 'fa fa-fw fa-check-circle' }) : _react2.default.createElement('i', { className: 'fa fa-fw fa-circle-o' })
                ),
                columns.filter(function (column) {
                  return column.visible !== false;
                }).map(function (column, columnIndex) {
                  return _react2.default.createElement(
                    'td',
                    { key: 'cell_' + rowIndex + '_' + columnIndex, className: _this2._getBodyClass(column), onClick: _this2._handleClick.bind(_this2, record, rowIndex) },
                    _react2.default.createElement(_format2.default, (0, _extends3.default)({}, record, { format: column.format, value: _lodash2.default.get(record, column.key) }))
                  );
                }),
                recordTasks && _react2.default.createElement(
                  'td',
                  { className: 'icon mobile collapsing centered', onClick: _this2._handleTasks.bind(_this2, record.id) },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-ellipsis-v' })
                ),
                link && _react2.default.createElement(
                  'td',
                  { className: 'reframe-table-body-cell icon mobile collapsing centered' },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-right' })
                )
              );
            })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      setTimeout(function () {
        return _this3._resizeColumns();
      }, 250);
      window.addEventListener('resize', this._handleResize.bind(this));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var columns = this.props.columns;

      if (!_lodash2.default.isEqual(prevProps.columns, columns)) this._resizeColumns();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._handleResize.bind(this));
    }
  }, {
    key: '_getHeaderClass',
    value: function _getHeaderClass(column) {
      var classes = ['padded'];
      if (column.primary === true) classes.push('mobile');
      if (column.format === 'check' || column.collapsing === true) classes.push('collapsing');
      return classes.join(' ');
    }
  }, {
    key: '_getBodyClass',
    value: function _getBodyClass(column) {
      var classes = [];
      if (column.primary === true) classes.push('mobile');
      if (column.format === 'check' || column.collapsing === true) classes.push('collapsing');
      if (column.format === 'check' || column.centered === true) classes.push('centered');
      if (column.format === 'currency') classes.push('right');
      if (!_lodash2.default.isFunction(column.format) && !_lodash2.default.isElement(column.format)) classes.push('padded');
      return classes.join(' ');
    }
  }, {
    key: '_getBodyRowClass',
    value: function _getBodyRowClass(record) {
      var _props2 = this.props,
          link = _props2.link,
          modal = _props2.modal,
          handler = _props2.handler,
          rowClass = _props2.rowClass;

      var classes = [];
      if (link || modal || handler) classes.push('reframe-table-link');
      if (rowClass && _lodash2.default.isString(rowClass)) classes.push(rowClass);
      if (rowClass && _lodash2.default.isFunction(rowClass)) classes.push(rowClass(record));
      return classes.join(' ');
    }
  }, {
    key: '_getHeadStyle',
    value: function _getHeadStyle(index) {
      var widths = this.state.widths;

      var width = typeof index !== 'undefined' ? widths[index] : widths[widths.length - 1];
      return width ? { width: width + 'px' } : {};
    }
  }, {
    key: '_resizeColumns',
    value: function _resizeColumns() {
      if (!this.head) return;
      var headerCells = Array.from(this.head.childNodes);
      var widths = headerCells.map(function (cell, index) {
        return cell.offsetWidth;
      });
      this.setState({ widths: widths });
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(record, index) {
      var _props3 = this.props,
          link = _props3.link,
          modal = _props3.modal,
          handler = _props3.handler;

      if (link) return this._handleLink(record, index);
      if (modal) return this._handleModal(record, index);
      if (handler) return this._handleHandler(record, index);
    }
  }, {
    key: '_handleSelect',
    value: function _handleSelect(id) {
      this.props.onSelect(id);
    }
  }, {
    key: '_handleSelectAll',
    value: function _handleSelectAll() {
      this.props.onSelectAll();
    }
  }, {
    key: '_handleLink',
    value: function _handleLink(record, index) {
      var link = this.props.link;

      var path = link(record);
      this.context.router.push(path);
    }
  }, {
    key: '_handleModal',
    value: function _handleModal(record, index) {
      var _this4 = this;

      this.context.model.open(function () {
        return _react2.default.createElement(_this4.props.modal, { record: record, index: index });
      });
    }
  }, {
    key: '_handleHandler',
    value: function _handleHandler(record, index) {
      this.props.handler(record, index);
    }
  }, {
    key: '_handleSort',
    value: function _handleSort(column) {
      var key = column.sort || column.key;
      this.props.onSort(key);
    }
  }, {
    key: '_handleTasks',
    value: function _handleTasks(id) {
      var recordTasks = this.props.recordTasks;

      var tasks = recordTasks.map(function (task) {
        return (0, _extends3.default)({}, task, {
          handler: task.handler ? function () {
            return task.handler(id);
          } : null,
          modal: task.modal ? function () {
            return _react2.default.createElement(task.modal, { id: id });
          } : null,
          request: task.request ? task.request(id) : null
        });
      });
      this.context.tasks.open(tasks);
    }
  }]);
  return Table;
}(_react2.default.Component);

Table.contextTypes = {
  modal: _propTypes2.default.object,
  router: _propTypes2.default.object,
  tasks: _propTypes2.default.object
};
Table.propTypes = {
  columns: _propTypes2.default.array,
  handler: _propTypes2.default.func,
  link: _propTypes2.default.func,
  modal: _propTypes2.default.any,
  records: _propTypes2.default.array,
  recordTasks: _propTypes2.default.array,
  rowClass: _propTypes2.default.func,
  selectable: _propTypes2.default.bool,
  selected: _propTypes2.default.array,
  selectAll: _propTypes2.default.bool,
  sort: _propTypes2.default.object,
  onSelect: _propTypes2.default.func,
  onSelectAll: _propTypes2.default.func,
  onSort: _propTypes2.default.func
};
Table.defaultProps = {
  onSelect: function onSelect(id) {},
  onSelectAll: function onSelectAll() {}
};
exports.default = Table;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVGFibGUiLCJfaGFuZGxlUmVzaXplIiwiXyIsImRlYm91bmNlIiwiX3Jlc2l6ZUNvbHVtbnMiLCJzdGF0ZSIsIndpZHRocyIsInByb3BzIiwiY29sdW1ucyIsImxpbmsiLCJyZWNvcmRzIiwicmVjb3JkVGFza3MiLCJzZWxlY3RhYmxlIiwic2VsZWN0ZWQiLCJzZWxlY3RBbGwiLCJzb3J0IiwiX2hhbmRsZVNlbGVjdEFsbCIsImJpbmQiLCJmaWx0ZXIiLCJjb2x1bW4iLCJ2aXNpYmxlIiwibWFwIiwiY29sdW1uSW5kZXgiLCJfZ2V0SGVhZGVyQ2xhc3MiLCJfZ2V0SGVhZFN0eWxlIiwiX2hhbmRsZVNvcnQiLCJsYWJlbCIsImtleSIsIm9yZGVyIiwibm9kZSIsImhlYWQiLCJyZWNvcmQiLCJyb3dJbmRleCIsIl9nZXRCb2R5Um93Q2xhc3MiLCJfaGFuZGxlU2VsZWN0IiwiaWQiLCJpbmNsdWRlcyIsIl9nZXRCb2R5Q2xhc3MiLCJfaGFuZGxlQ2xpY2siLCJmb3JtYXQiLCJnZXQiLCJfaGFuZGxlVGFza3MiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZQcm9wcyIsImlzRXF1YWwiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NlcyIsInByaW1hcnkiLCJwdXNoIiwiY29sbGFwc2luZyIsImpvaW4iLCJjZW50ZXJlZCIsImlzRnVuY3Rpb24iLCJpc0VsZW1lbnQiLCJtb2RhbCIsImhhbmRsZXIiLCJyb3dDbGFzcyIsImlzU3RyaW5nIiwiaW5kZXgiLCJ3aWR0aCIsImxlbmd0aCIsImhlYWRlckNlbGxzIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGROb2RlcyIsImNlbGwiLCJvZmZzZXRXaWR0aCIsInNldFN0YXRlIiwiX2hhbmRsZUxpbmsiLCJfaGFuZGxlTW9kYWwiLCJfaGFuZGxlSGFuZGxlciIsIm9uU2VsZWN0Iiwib25TZWxlY3RBbGwiLCJwYXRoIiwiY29udGV4dCIsInJvdXRlciIsIm1vZGVsIiwib3BlbiIsIm9uU29ydCIsInRhc2tzIiwidGFzayIsInJlcXVlc3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInByb3BUeXBlcyIsImFycmF5IiwiZnVuYyIsImFueSIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxLOzs7Ozs7Ozs7Ozs7OztrTUE4QkpDLGEsR0FBcUJDLGlCQUFFQyxRQUFGLENBQVcsTUFBS0MsY0FBaEIsRUFBZ0MsR0FBaEMsQyxRQUlyQkMsSyxHQUFRO0FBQ05DLGNBQVE7QUFERixLOzs7Ozs2QkFJQTtBQUFBOztBQUFBLG1CQUNpRixLQUFLQyxLQUR0RjtBQUFBLFVBQ0VDLE9BREYsVUFDRUEsT0FERjtBQUFBLFVBQ1dDLElBRFgsVUFDV0EsSUFEWDtBQUFBLFVBQ2lCQyxPQURqQixVQUNpQkEsT0FEakI7QUFBQSxVQUMwQkMsV0FEMUIsVUFDMEJBLFdBRDFCO0FBQUEsVUFDdUNDLFVBRHZDLFVBQ3VDQSxVQUR2QztBQUFBLFVBQ21EQyxRQURuRCxVQUNtREEsUUFEbkQ7QUFBQSxVQUM2REMsU0FEN0QsVUFDNkRBLFNBRDdEO0FBQUEsVUFDd0VDLElBRHhFLFVBQ3dFQSxJQUR4RTs7QUFFTixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFPLFdBQVUsc0JBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0lILDRCQUNBO0FBQUE7QUFBQSxrQkFBSSxXQUFVLGlDQUFkLEVBQWdELFNBQVUsS0FBS0ksZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQTFEO0FBQ0lILDRCQUFZLHFDQUFHLFdBQVUsMEJBQWIsR0FBWixHQUF5RCxxQ0FBRyxXQUFVLHNCQUFiO0FBRDdELGVBRko7QUFNSU4sc0JBQVFV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QU8rQixvQkFBVUMsTUFERztBQUVwQlgsVUFBUVUsb0JBQVVDLE1BRkU7QUFHcEJQLFNBQU9NLG9CQUFVQztBQUhHLEM7QUFGbEJ4RixLLENBUUd5RixTLEdBQVk7QUFDakJqRixXQUFTK0Usb0JBQVVHLEtBREY7QUFFakJqQyxXQUFTOEIsb0JBQVVJLElBRkY7QUFHakJsRixRQUFNOEUsb0JBQVVJLElBSEM7QUFJakJuQyxTQUFPK0Isb0JBQVVLLEdBSkE7QUFLakJsRixXQUFTNkUsb0JBQVVHLEtBTEY7QUFNakIvRSxlQUFhNEUsb0JBQVVHLEtBTk47QUFPakJoQyxZQUFVNkIsb0JBQVVJLElBUEg7QUFRakIvRSxjQUFZMkUsb0JBQVVNLElBUkw7QUFTakJoRixZQUFVMEUsb0JBQVVHLEtBVEg7QUFVakI1RSxhQUFXeUUsb0JBQVVNLElBVko7QUFXakI5RSxRQUFNd0Usb0JBQVVDLE1BWEM7QUFZakJmLFlBQVVjLG9CQUFVSSxJQVpIO0FBYWpCakIsZUFBYWEsb0JBQVVJLElBYk47QUFjakJYLFVBQVFPLG9CQUFVSTtBQWRELEM7QUFSZjNGLEssQ0F5Qkc4RixZLEdBQWU7QUFDcEJyQixZQUFVLGtCQUFDdEMsRUFBRCxFQUFRLENBQUUsQ0FEQTtBQUVwQnVDLGVBQWEsdUJBQU0sQ0FBRTtBQUZELEM7a0JBK0xUMUUsSyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm1hdCBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIG1vZGFsOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB0YXNrczogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb2x1bW5zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbGluazogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbW9kYWw6IFByb3BUeXBlcy5hbnksXG4gICAgcmVjb3JkczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHJlY29yZFRhc2tzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgcm93Q2xhc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGVkOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0QWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEFsbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBvblNlbGVjdDogKGlkKSA9PiB7fSxcbiAgICBvblNlbGVjdEFsbDogKCkgPT4ge31cbiAgfVxuXG4gIF9oYW5kbGVSZXNpemU6IGFueSA9IF8uZGVib3VuY2UodGhpcy5fcmVzaXplQ29sdW1ucywgMTAwKVxuXG4gIGhlYWQ6IGFueVxuXG4gIHN0YXRlID0ge1xuICAgIHdpZHRoczogW11cbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgIGNvbnN0IHsgY29sdW1ucywgbGluaywgcmVjb3JkcywgcmVjb3JkVGFza3MsIHNlbGVjdGFibGUsIHNlbGVjdGVkLCBzZWxlY3RBbGwsIHNvcnQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXRhYmxlXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJyZWZyYW1lLXRhYmxlLXBpbm5lZFwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgeyBzZWxlY3RhYmxlICYmXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJlZnJhbWUtdGFibGUtY2hlY2stY2VsbCBtb2JpbGVcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlU2VsZWN0QWxsLmJpbmQodGhpcykgfT5cbiAgICAgICAgICAgICAgICAgIHsgc2VsZWN0QWxsID8gPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtY2hlY2stY2lyY2xlXCIgLz4gOiA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1jaXJjbGUtb1wiIC8+IH1cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHsgY29sdW1ucy5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi52aXNpYmxlICE9PSBmYWxzZSkubWFwKChjb2x1bW4sIGNvbHVtbkluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHRkIGtleT17YGhlYWRlci0ke2NvbHVtbkluZGV4fWB9IGNsYXNzTmFtZT17IHRoaXMuX2dldEhlYWRlckNsYXNzKGNvbHVtbikgfSBzdHlsZT17IHRoaXMuX2dldEhlYWRTdHlsZShjb2x1bW5JbmRleCArIChzZWxlY3RhYmxlID8gMSA6IDApKSB9IG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVTb3J0LmJpbmQodGhpcywgY29sdW1uKSB9PlxuICAgICAgICAgICAgICAgICAgeyBjb2x1bW4ubGFiZWwgfVxuICAgICAgICAgICAgICAgICAgeyBzb3J0ICYmIChjb2x1bW4ua2V5ID09PSBzb3J0LmtleSB8fCBjb2x1bW4uc29ydCA9PT0gc29ydC5rZXkpICYmXG4gICAgICAgICAgICAgICAgICAgIChzb3J0Lm9yZGVyID09PSAnYXNjJyA/IDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWNoZXZyb24tdXBcIiAvPiA6IDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWNoZXZyb24tZG93blwiIC8+KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICB7IChsaW5rIHx8IHJlY29yZFRhc2tzKSAmJlxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJyZWZyYW1lLXRhYmxlLWhlYWQtY2VsbCBtb2JpbGUgY29sbGFwc2luZyBuZXh0XCIgc3R5bGU9eyB0aGlzLl9nZXRIZWFkU3R5bGUoKSB9IC8+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInJlZnJhbWUtdGFibGUtZGF0YVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0ciByZWY9eyAobm9kZSkgPT4gdGhpcy5oZWFkID0gbm9kZSB9PlxuICAgICAgICAgICAgICB7IHNlbGVjdGFibGUgJiZcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicmVmcmFtZS10YWJsZS1jaGVjay1jZWxsIG1vYmlsZVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVTZWxlY3RBbGwuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgICAgICAgeyBzZWxlY3RBbGwgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1jaGVjay1jaXJjbGVcIiAvPiA6IDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWNpcmNsZS1vXCIgLz4gfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgeyBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLnZpc2libGUgIT09IGZhbHNlKS5tYXAoKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtgaGVhZGVyLSR7Y29sdW1uSW5kZXh9YH0gY2xhc3NOYW1lPXsgdGhpcy5fZ2V0SGVhZGVyQ2xhc3MoY29sdW1uKSB9IHN0eWxlPXsgdGhpcy5fZ2V0SGVhZFN0eWxlKGNvbHVtbkluZGV4ICsgKHNlbGVjdGFibGUgPyAxIDogMCkpIH0gb25DbGljaz17IHRoaXMuX2hhbmRsZVNvcnQuYmluZCh0aGlzLCBjb2x1bW4pIH0+XG4gICAgICAgICAgICAgICAgICB7IGNvbHVtbi5sYWJlbCB9XG4gICAgICAgICAgICAgICAgICB7IHNvcnQgJiYgKGNvbHVtbi5rZXkgPT09IHNvcnQua2V5IHx8IGNvbHVtbi5zb3J0ID09PSBzb3J0LmtleSkgJiZcbiAgICAgICAgICAgICAgICAgICAgKHNvcnQub3JkZXIgPT09ICdhc2MnID8gPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtY2hldnJvbi11cFwiIC8+IDogPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtY2hldnJvbi1kb3duXCIgLz4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIHsgKGxpbmsgfHwgcmVjb3JkVGFza3MpICYmXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJlZnJhbWUtdGFibGUtaGVhZC1jZWxsIG1vYmlsZSBjb2xsYXBzaW5nIG5leHRcIiBzdHlsZT17IHRoaXMuX2dldEhlYWRTdHlsZSgpIH0gLz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHsgcmVjb3Jkcy5tYXAoKHJlY29yZCwgcm93SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPHRyIGtleT17IGByZWNvcmRfJHtyb3dJbmRleH1gIH0gY2xhc3NOYW1lPXsgdGhpcy5fZ2V0Qm9keVJvd0NsYXNzKHJlY29yZCkgfT5cbiAgICAgICAgICAgICAgICB7IHNlbGVjdGFibGUgJiZcbiAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2BjZWxsXyR7cm93SW5kZXh9X3NlbGVjdGB9IGNsYXNzTmFtZT1cInJlZnJhbWUtdGFibGUtY2hlY2stY2VsbCBtb2JpbGVcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlU2VsZWN0LmJpbmQodGhpcywgcmVjb3JkLmlkKSB9PlxuICAgICAgICAgICAgICAgICAgICB7IF8uaW5jbHVkZXMoc2VsZWN0ZWQsIHJlY29yZC5pZCkgPyA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1jaGVjay1jaXJjbGVcIiAvPiA6IDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWNpcmNsZS1vXCIgLz4gfVxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeyBjb2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLnZpc2libGUgIT09IGZhbHNlKS5tYXAoKGNvbHVtbiwgY29sdW1uSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9eyBgY2VsbF8ke3Jvd0luZGV4fV8ke2NvbHVtbkluZGV4fWAgfSBjbGFzc05hbWU9eyB0aGlzLl9nZXRCb2R5Q2xhc3MoY29sdW1uKSB9IG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMsIHJlY29yZCwgcm93SW5kZXgpIH0+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXQgeyAuLi5yZWNvcmQgfSBmb3JtYXQ9eyBjb2x1bW4uZm9ybWF0IH0gdmFsdWU9eyBfLmdldChyZWNvcmQsIGNvbHVtbi5rZXkpIH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgICAgIHsgcmVjb3JkVGFza3MgJiZcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJpY29uIG1vYmlsZSBjb2xsYXBzaW5nIGNlbnRlcmVkXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZVRhc2tzLmJpbmQodGhpcywgcmVjb3JkLmlkKSB9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1lbGxpcHNpcy12XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgbGluayAmJlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInJlZnJhbWUtdGFibGUtYm9keS1jZWxsIGljb24gbW9iaWxlIGNvbGxhcHNpbmcgY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtY2hldnJvbi1yaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fcmVzaXplQ29sdW1ucygpLCAyNTApXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2hhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgY29sdW1ucyB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKCFfLmlzRXF1YWwocHJldlByb3BzLmNvbHVtbnMsIGNvbHVtbnMpKSB0aGlzLl9yZXNpemVDb2x1bW5zKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9oYW5kbGVSZXNpemUuYmluZCh0aGlzKSlcbiAgfVxuXG4gIF9nZXRIZWFkZXJDbGFzcyhjb2x1bW4pIHtcbiAgICBsZXQgY2xhc3NlcyA9IFsncGFkZGVkJ11cbiAgICBpZihjb2x1bW4ucHJpbWFyeSA9PT0gdHJ1ZSkgY2xhc3Nlcy5wdXNoKCdtb2JpbGUnKVxuICAgIGlmKGNvbHVtbi5mb3JtYXQgPT09ICdjaGVjaycgfHwgY29sdW1uLmNvbGxhcHNpbmcgPT09IHRydWUpIGNsYXNzZXMucHVzaCgnY29sbGFwc2luZycpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0Qm9keUNsYXNzKGNvbHVtbikge1xuICAgIGxldCBjbGFzc2VzID0gW11cbiAgICBpZihjb2x1bW4ucHJpbWFyeSA9PT0gdHJ1ZSkgY2xhc3Nlcy5wdXNoKCdtb2JpbGUnKVxuICAgIGlmKGNvbHVtbi5mb3JtYXQgPT09ICdjaGVjaycgfHwgY29sdW1uLmNvbGxhcHNpbmcgPT09IHRydWUpIGNsYXNzZXMucHVzaCgnY29sbGFwc2luZycpXG4gICAgaWYoY29sdW1uLmZvcm1hdCA9PT0gJ2NoZWNrJyB8fCBjb2x1bW4uY2VudGVyZWQgPT09IHRydWUpIGNsYXNzZXMucHVzaCgnY2VudGVyZWQnKVxuICAgIGlmKGNvbHVtbi5mb3JtYXQgPT09ICdjdXJyZW5jeScpIGNsYXNzZXMucHVzaCgncmlnaHQnKVxuICAgIGlmKCFfLmlzRnVuY3Rpb24oY29sdW1uLmZvcm1hdCkgJiYgIV8uaXNFbGVtZW50KGNvbHVtbi5mb3JtYXQpKSBjbGFzc2VzLnB1c2goJ3BhZGRlZCcpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0Qm9keVJvd0NsYXNzKHJlY29yZCkge1xuICAgIGNvbnN0IHsgbGluaywgbW9kYWwsIGhhbmRsZXIsIHJvd0NsYXNzIH0gPSB0aGlzLnByb3BzXG4gICAgbGV0IGNsYXNzZXMgPSBbXVxuICAgIGlmKGxpbmsgfHwgbW9kYWwgfHwgaGFuZGxlcikgY2xhc3Nlcy5wdXNoKCdyZWZyYW1lLXRhYmxlLWxpbmsnKVxuICAgIGlmKHJvd0NsYXNzICYmIF8uaXNTdHJpbmcocm93Q2xhc3MpKSBjbGFzc2VzLnB1c2gocm93Q2xhc3MpXG4gICAgaWYocm93Q2xhc3MgJiYgXy5pc0Z1bmN0aW9uKHJvd0NsYXNzKSkgY2xhc3Nlcy5wdXNoKHJvd0NsYXNzKHJlY29yZCkpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0SGVhZFN0eWxlKGluZGV4KXtcbiAgICBjb25zdCB7IHdpZHRocyB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHdpZHRoID0gKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcpID8gd2lkdGhzW2luZGV4XSA6IHdpZHRoc1t3aWR0aHMubGVuZ3RoIC0gMV1cbiAgICByZXR1cm4gd2lkdGggPyB7IHdpZHRoOiBgJHt3aWR0aH1weGAgfSA6IHt9XG4gIH1cblxuICBfcmVzaXplQ29sdW1ucygpIHtcbiAgICBpZighdGhpcy5oZWFkKSByZXR1cm5cbiAgICBjb25zdCBoZWFkZXJDZWxscyA9IEFycmF5LmZyb20odGhpcy5oZWFkLmNoaWxkTm9kZXMpXG4gICAgY29uc3Qgd2lkdGhzID0gaGVhZGVyQ2VsbHMubWFwKChjZWxsLCBpbmRleCkgPT4gY2VsbC5vZmZzZXRXaWR0aClcbiAgICB0aGlzLnNldFN0YXRlKHsgd2lkdGhzIH0pXG4gIH1cblxuICBfaGFuZGxlQ2xpY2socmVjb3JkLCBpbmRleCkge1xuICAgIGNvbnN0IHsgbGluaywgbW9kYWwsIGhhbmRsZXIgfSA9IHRoaXMucHJvcHNcbiAgICBpZihsaW5rKSByZXR1cm4gdGhpcy5faGFuZGxlTGluayhyZWNvcmQsIGluZGV4KVxuICAgIGlmKG1vZGFsKSByZXR1cm4gdGhpcy5faGFuZGxlTW9kYWwocmVjb3JkLCBpbmRleClcbiAgICBpZihoYW5kbGVyKSByZXR1cm4gdGhpcy5faGFuZGxlSGFuZGxlcihyZWNvcmQsIGluZGV4KVxuICB9XG5cbiAgX2hhbmRsZVNlbGVjdChpZCkge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3QoaWQpXG4gIH1cblxuICBfaGFuZGxlU2VsZWN0QWxsKCkge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3RBbGwoKVxuICB9XG5cbiAgX2hhbmRsZUxpbmsocmVjb3JkLCBpbmRleCkge1xuICAgIGNvbnN0IHsgbGluayB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBhdGggPSBsaW5rKHJlY29yZClcbiAgICB0aGlzLmNvbnRleHQucm91dGVyLnB1c2gocGF0aClcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbChyZWNvcmQsIGluZGV4KSB7XG4gICAgdGhpcy5jb250ZXh0Lm1vZGVsLm9wZW4oKCkgPT4gPHRoaXMucHJvcHMubW9kYWwgcmVjb3JkPXsgcmVjb3JkIH0gaW5kZXg9eyBpbmRleCB9IC8+KVxuICB9XG5cbiAgX2hhbmRsZUhhbmRsZXIocmVjb3JkLCBpbmRleCkge1xuICAgIHRoaXMucHJvcHMuaGFuZGxlcihyZWNvcmQsIGluZGV4KVxuICB9XG5cbiAgX2hhbmRsZVNvcnQoY29sdW1uKSB7XG4gICAgY29uc3Qga2V5ID0gY29sdW1uLnNvcnQgfHwgY29sdW1uLmtleVxuICAgIHRoaXMucHJvcHMub25Tb3J0KGtleSlcbiAgfVxuXG4gIF9oYW5kbGVUYXNrcyhpZCkge1xuICAgIGNvbnN0IHsgcmVjb3JkVGFza3MgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB0YXNrcyA9IHJlY29yZFRhc2tzLm1hcCh0YXNrID0+ICh7XG4gICAgICAuLi50YXNrLFxuICAgICAgaGFuZGxlcjogdGFzay5oYW5kbGVyID8gKCkgPT4gdGFzay5oYW5kbGVyKGlkKSA6IG51bGwsXG4gICAgICBtb2RhbDogdGFzay5tb2RhbCA/ICgpID0+IDx0YXNrLm1vZGFsIGlkPXsgaWQgfSAvPiA6IG51bGwsXG4gICAgICByZXF1ZXN0OiB0YXNrLnJlcXVlc3QgPyB0YXNrLnJlcXVlc3QoaWQpOiBudWxsXG4gICAgfSkpXG4gICAgdGhpcy5jb250ZXh0LnRhc2tzLm9wZW4odGFza3MpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxuIl19