'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _columns = require('./columns');

var _columns2 = _interopRequireDefault(_columns);

var _filters = require('../filters');

var _filters2 = _interopRequireDefault(_filters);

var _export = require('./export');

var _export2 = _interopRequireDefault(_export);

var _task = require('../task');

var _task2 = _interopRequireDefault(_task);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tasks = function (_React$Component) {
  _inherits(Tasks, _React$Component);

  function Tasks() {
    _classCallCheck(this, Tasks);

    return _possibleConstructorReturn(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).apply(this, arguments));
  }

  _createClass(Tasks, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          filters = _props.filters,
          open = _props.open,
          panel = _props.panel,
          table = _props.table,
          tasks = _props.tasks;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection-tasks' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-inner' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-container' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-collection-tasks-panel' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-collection-tasks-panel-header mobile' },
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-collection-tasks-panel-header-title' },
                  'Tasks'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-collection-tasks-panel-body' },
                table && _react2.default.createElement(
                  'div',
                  { className: 'reframe-collection-tasks-panel-item', onClick: this._handleColumns.bind(this) },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-table' }),
                  'Manage Columns'
                ),
                filters && _react2.default.createElement(
                  'div',
                  { className: 'reframe-collection-tasks-panel-item', onClick: this._handleFilter.bind(this) },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-filter' }),
                  'Filter Records'
                ),
                this.props.export && _react2.default.createElement(
                  'div',
                  { className: 'reframe-collection-tasks-panel-item', onClick: this._handleExport.bind(this) },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-download' }),
                  'Export Records'
                ),
                tasks && tasks.map(function (task, index) {
                  return _react2.default.createElement(_task2.default, _extends({ key: 'task_' + index }, _this2._getTask(task)));
                })
              )
            )
          ),
          _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            { 'in': open, classNames: 'cover', timeout: 500, mountOnEnter: true, unmountOnExit: true },
            _react2.default.createElement(
              'div',
              { className: 'reframe-collection-tasks-panel-container' },
              _lodash2.default.isFunction(panel) ? _react2.default.createElement(panel, this.props) : panel
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          open = _props2.open,
          onClearPanel = _props2.onClearPanel;

      if (open !== prevProps.open && !open) {
        setTimeout(onClearPanel, 500);
      }
    }
  }, {
    key: '_handleColumns',
    value: function _handleColumns() {
      var _this3 = this;

      this.props.onAddPanel(function (props) {
        var columns = props.columns,
            onSetColumns = props.onSetColumns;

        return _react2.default.createElement(_columns2.default, {
          columns: columns,
          onSetColumns: onSetColumns,
          onDone: function onDone() {
            return _this3.props.onRemovePanel();
          }
        });
      });
    }
  }, {
    key: '_handleFilter',
    value: function _handleFilter() {
      var _this4 = this;

      this.props.onAddPanel(function (props) {
        var entity = props.entity,
            filters = props.filters,
            filter = props.filter,
            onSetFilter = props.onSetFilter;

        var article = _lodash2.default.includes(['a', 'e', 'i', 'o'], entity[0]) ? 'an' : 'a';
        return _react2.default.createElement(_filters2.default, {
          filters: filters,
          values: filter,
          prompt: 'Find ' + article + ' ' + entity,
          onUpdate: onSetFilter,
          onDone: function onDone() {
            return _this4.props.onRemovePanel();
          }
        });
      });
    }
  }, {
    key: '_handleExport',
    value: function _handleExport() {
      var _this5 = this;

      this.props.onAddPanel(function (props) {
        var endpoint = props.endpoint,
            filtered = props.filtered,
            sort = props.sort,
            token = props.token;

        return _react2.default.createElement(_export2.default, {
          defaultValue: _this5.props.export,
          endpoint: endpoint,
          filter: filtered,
          sort: sort.key ? (sort.order === 'desc' ? '-' : '') + sort.key : null,
          token: token,
          onDone: function onDone() {
            return _this5.props.onRemovePanel();
          }
        });
      });
    }
  }, {
    key: '_getTask',
    value: function _getTask(task) {
      var _this6 = this;

      if (!task.panel) return task;
      return {
        label: task.label,
        icon: task.icon,
        handler: function handler() {
          return _this6.props.onAddPanel(task.panel);
        }
      };
    }
  }]);

  return Tasks;
}(_react2.default.Component);

Tasks.propTypes = {
  export: _propTypes2.default.array,
  filters: _propTypes2.default.array,
  open: _propTypes2.default.bool,
  panel: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  table: _propTypes2.default.array,
  tasks: _propTypes2.default.array,
  onClearPanel: _propTypes2.default.func,
  onAddPanel: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};
exports.default = Tasks;