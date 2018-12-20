'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this._handleResize = _lodash2.default.debounce(_this._handleResize, 100), _this.state = {
      widths: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Table, [{
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
                    _react2.default.createElement(_format2.default, _extends({}, record, { format: column.format, value: _lodash2.default.get(record, column.key) }))
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
        return _this3._handleResize();
      }, 250);
      window.addEventListener('resize', this._handleResize.bind(this));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var columns = this.props.columns;

      if (!_lodash2.default.isEqual(prevProps.columns, columns)) this._handleResize();
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
    key: '_handleHandler',
    value: function _handleHandler(record, index) {
      this.props.handler(record, index);
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
    key: '_handleResize',
    value: function _handleResize() {
      if (!this.head) return;
      var headerCells = Array.from(this.head.childNodes);
      var widths = headerCells.map(function (cell, index) {
        return cell.offsetWidth;
      });
      this.setState({ widths: widths });
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
        return _extends({}, task, {
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