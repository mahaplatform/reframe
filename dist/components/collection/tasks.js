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

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _columns = require('./columns');

var _columns2 = _interopRequireDefault(_columns);

var _filters = require('../filters');

var _filters2 = _interopRequireDefault(_filters);

var _export = require('./export');

var _export2 = _interopRequireDefault(_export);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tasks = function (_React$Component) {
  (0, _inherits3.default)(Tasks, _React$Component);

  function Tasks() {
    (0, _classCallCheck3.default)(this, Tasks);
    return (0, _possibleConstructorReturn3.default)(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tasks, [{
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
                _react2.default.createElement('div', { className: 'reframe-collection-tasks-panel-header-icon' }),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-collection-tasks-panel-header-title' },
                  'Tasks'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-collection-tasks-panel-header-icon ', onClick: this._handleToggleTasks.bind(this) },
                  'Done'
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
                  { className: 'reframe-collection-tasks-panel-item mobile', onClick: this._handleFilter.bind(this) },
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
                  return _react2.default.createElement(_button2.default, (0, _extends3.default)({ key: 'task_' + index }, _this2._getTask(task)));
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
    key: '_getTask',
    value: function _getTask(task) {
      return (0, _extends3.default)({
        className: 'reframe-collection-tasks-panel-item',
        label: task.label,
        mobile: task.mobile,
        icon: task.icon,
        rights: task.rights
      }, this._getTaskAction(task));
    }
  }, {
    key: '_getTaskAction',
    value: function _getTaskAction(task) {
      var _this3 = this;

      if (task.panel) {
        return {
          handler: function handler() {
            return _this3.props.onAddPanel(task.panel);
          }
        };
      }
      if (task.handler) {
        return {
          handler: function handler() {
            return task.handler(_this3.props);
          }
        };
      }
      if (task.request) {
        return {
          request: function request() {
            return task.request(_this3.props);
          }
        };
      }
    }
  }, {
    key: '_handleToggleTasks',
    value: function _handleToggleTasks() {
      this.props.onToggleTasks();
    }
  }, {
    key: '_handleColumns',
    value: function _handleColumns() {
      var _this4 = this;

      this.props.onAddPanel(function (props) {
        var table = props.table,
            columns = props.columns,
            onSetColumns = props.onSetColumns;

        return _react2.default.createElement(_columns2.default, {
          table: table,
          columns: columns,
          onSetColumns: onSetColumns,
          onDone: function onDone() {
            return _this4.props.onRemovePanel();
          }
        });
      });
    }
  }, {
    key: '_handleFilter',
    value: function _handleFilter() {
      var _this5 = this;

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
            return _this5.props.onRemovePanel();
          }
        });
      });
    }
  }, {
    key: '_handleExport',
    value: function _handleExport() {
      var _this6 = this;

      this.props.onAddPanel(function (props) {
        var endpoint = props.endpoint,
            entity = props.entity,
            filter = props.filter,
            sort = props.sort,
            token = props.token;

        return _react2.default.createElement(_export2.default, {
          defaultValue: _this6.props.export,
          endpoint: endpoint,
          entity: entity,
          filter: filter,
          sort: sort.key ? (sort.order === 'desc' ? '-' : '') + sort.key : null,
          token: token,
          onDone: function onDone() {
            return _this6.props.onRemovePanel();
          }
        });
      });
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
  onRemovePanel: _propTypes2.default.func,
  onToggleTasks: _propTypes2.default.func
};
exports.default = Tasks;