'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = require('react-router-dom');

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_lodash2.default.templateSettings.interpolate = /#{([\s\S]+?)}/g;

var Table = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Table);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Table.__proto__ || Object.getPrototypeOf(Table)).call.apply(_ref, [this].concat(args))), _this), _this._handleResize = _lodash2.default.debounce(_this._resizeColumns), _this.state = {
      widths: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
                return _react2.default.createElement(
                  'div',
                  { key: 'header-' + columnIndex, className: _this2._getHeaderClass(column), onClick: _this2._handleSort.bind(_this2, column) },
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
            { className: 'reframe-table-body-wrapper' },
            records.map(function (record, rowIndex) {

              var rowColumns = columns.map(function (column, columnIndex) {
                return _react2.default.createElement(
                  'div',
                  { key: 'cell_' + rowIndex + '_' + columnIndex, className: _this2._getBodyClass(column), style: _this2._getBodyStyle(columnIndex) },
                  _react2.default.createElement(_format2.default, _extends({}, record, { format: column.format, value: _lodash2.default.get(record, column.key) }))
                );
              });

              var row = _this2.props.export ? [].concat(_toConsumableArray(rowColumns), [_react2.default.createElement('div', { key: 'cell_extra', className: 'reframe-table-body-cell mobile' })]) : rowColumns;

              if (link) {
                return _react2.default.createElement(
                  _reactRouterDom.Link,
                  { key: 'record_' + rowIndex, className: 'reframe-table-body-row', to: _lodash2.default.template(link)(record) },
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
      window.addEventListener('resize', this._handleResize.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this._handleResize.bind(this));
    }
  }, {
    key: '_getHeaderClass',
    value: function _getHeaderClass(column) {
      var classes = ['reframe-table-head-cell', 'padded'];
      if (column.primary === true) classes.push('mobile');
      if (column.collapsing === true) classes.push('collapsing');
      return classes.join(' ');
    }
  }, {
    key: '_getBodyClass',
    value: function _getBodyClass(column) {
      var classes = ['reframe-table-body-cell'];
      if (column.primary === true) classes.push('mobile');
      if (column.collapsing === true) classes.push('collapsing');
      if (column.centered === true) classes.push('centered');
      if (!column.format) classes.push('padded');
      return classes.join(' ');
    }
  }, {
    key: '_getBodyStyle',
    value: function _getBodyStyle(index) {
      var widths = this.state.widths;

      return widths[index] ? { width: widths[index] + 'px' } : {};
    }
  }, {
    key: '_resizeColumns',
    value: function _resizeColumns() {
      var headerCells = Array.from(this.head.childNodes);
      var widths = headerCells.map(function (cell, index) {
        return cell.offsetWidth;
      });
      this.setState({ widths: widths });
    }
  }, {
    key: '_handleSort',
    value: function _handleSort(column) {
      this.props.onSort(column.key);
    }
  }, {
    key: '_handleHandler',
    value: function _handleHandler(id) {
      this.props.handler(id);
    }
  }, {
    key: '_handleModal',
    value: function _handleModal(id) {
      var modal = this.props.modal;

      this.context.model.open(modal);
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
  modal: _propTypes2.default.object,
  tasks: _propTypes2.default.object
};
exports.default = Table;