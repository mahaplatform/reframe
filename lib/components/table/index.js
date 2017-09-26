'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactRouterDom = require('react-router-dom');

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
  }

  _createClass(Table, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          columns = _props.columns,
          handler = _props.handler,
          link = _props.link,
          modal = _props.modal,
          records = _props.records,
          recordTasks = _props.recordTasks,
          sort = _props.sort;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-table' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-table-head reframe-scrollpane-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-table-head-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-table-head-row', ref: function ref(node) {
                  return _this2.head = node;
                } },
              columns.map(function (column, columnIndex) {
                var klass = ['reframe-table-head-cell', 'padded'];
                if (column.primary === true) klass.push('mobile');
                if (column.collapsing === true) klass.push('collapsing');
                return _react2.default.createElement(
                  'div',
                  { key: 'header-' + columnIndex, className: klass.join(' '), onClick: _this2._handleSort.bind(_this2, column) },
                  column.label,
                  sort && column.key === sort.key && (sort.order === 'asc' ? _react2.default.createElement('i', { className: 'chevron up icon' }) : _react2.default.createElement('i', { className: 'chevron down icon' }))
                );
              }),
              link && _react2.default.createElement('div', { className: 'reframe-table-head-cell mobile collapsing' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-table-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-table-body-wrapper', ref: function ref(node) {
                return _this2.body = node;
              } },
            records.map(function (record, rowIndex) {
              var row = columns.map(function (column, columnIndex) {
                var value = _lodash2.default.get(record, column.key);
                var klass = ['reframe-table-body-cell'];
                if (column.primary === true) klass.push('mobile');
                if (column.collapsing === true) klass.push('collapsing');
                if (column.centered === true) klass.push('centered');
                if (!column.format) klass.push('padded');
                return _react2.default.createElement(
                  'div',
                  { key: 'cell_' + rowIndex + '_' + columnIndex, className: klass.join(' ') },
                  _react2.default.createElement(_format2.default, _extends({}, record, { format: column.format, value: value }))
                );
              }).concat(_this2.props.export ? [_react2.default.createElement('div', { key: 'cell_extra', className: 'reframe-table-body-cell mobile' })] : []);

              if (link) {
                _lodash2.default.templateSettings.interpolate = /#{([\s\S]+?)}/g;
                var to = _lodash2.default.template(link)(record);
                return _react2.default.createElement(
                  _reactRouterDom.Link,
                  { key: 'record_' + rowIndex, className: 'reframe-table-body-row', to: to },
                  row,
                  _react2.default.createElement(
                    'div',
                    { className: 'reframe-table-body-cell icon mobile collapsing centered padded' },
                    _react2.default.createElement('i', { className: 'chevron right icon' })
                  )
                );
              } else if (modal) {
                return _react2.default.createElement(
                  'div',
                  { key: 'record_' + rowIndex, className: 'reframe-table-body-row', onClick: _this2._handleModal.bind(_this2, record.id) },
                  row
                );
              } else if (handler) {
                return _react2.default.createElement(
                  'div',
                  { key: 'record_' + rowIndex, className: 'reframe-table-body-row', onClick: _this2._handleHandler.bind(_this2, record.id) },
                  row
                );
              } else if (recordTasks) {
                return _react2.default.createElement(
                  'div',
                  { key: 'record_' + rowIndex, className: 'reframe-table-body-row' },
                  row,
                  _react2.default.createElement(
                    'div',
                    { className: 'reframe-table-body-cell icon mobile collapsing centered padded', onClick: _this2._handleTasks.bind(_this2, record.id) },
                    _react2.default.createElement('i', { className: 'ellipsis vertical icon' })
                  )
                );
              } else {
                return _react2.default.createElement(
                  'div',
                  { key: 'record_' + rowIndex, className: 'reframe-table-body-row' },
                  row
                );
              }
            })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._resizeColumns();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._resizeColumns();
    }
  }, {
    key: '_resizeColumns',
    value: function _resizeColumns() {
      var rows = this.body.childNodes;
      if (rows.length === 0) return;
      Array.from(rows[0].childNodes).map(function (cell, index) {
        cell.style.width = cell.offsetWidth + 'px';
      });
    }
  }, {
    key: '_handleSort',
    value: function _handleSort(column) {
      var key = column.sort || column.key;
      this.props.onSort(key);
    }
  }, {
    key: '_handleHandler',
    value: function _handleHandler(id) {
      this.props.handler(id);
    }
  }, {
    key: '_handleTasks',
    value: function _handleTasks(id) {
      var recordTasks = this.props.recordTasks;

      var tasks = recordTasks.map(function (task) {
        if (task.modal) {
          return _extends({}, task, {
            modal: function modal() {
              return _react2.default.createElement(task.modal, { id: id });
            }
          });
        }
      });
      this.context.tasks.open(tasks);
    }
  }]);

  return Table;
}(_react2.default.Component);

Table.contextTypes = {
  tasks: _propTypes2.default.object
};
Table.propTypes = {
  columns: _propTypes2.default.array,
  export: _propTypes2.default.array,
  handler: _propTypes2.default.func,
  link: _propTypes2.default.string,
  modal: _propTypes2.default.element,
  records: _propTypes2.default.array,
  recordTasks: _propTypes2.default.array,
  sort: _propTypes2.default.shape({
    key: _propTypes2.default.string,
    order: _propTypes2.default.string
  }),
  total: _propTypes2.default.number,
  onLoadMore: _propTypes2.default.func,
  onSort: _propTypes2.default.func
};
exports.default = Table;