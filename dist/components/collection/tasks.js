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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVGFza3MiLCJwcm9wcyIsImZpbHRlcnMiLCJvcGVuIiwicGFuZWwiLCJ0YWJsZSIsInRhc2tzIiwiX2hhbmRsZVRvZ2dsZVRhc2tzIiwiYmluZCIsIl9oYW5kbGVDb2x1bW5zIiwiX2hhbmRsZUZpbHRlciIsImV4cG9ydCIsIl9oYW5kbGVFeHBvcnQiLCJtYXAiLCJ0YXNrIiwiaW5kZXgiLCJfZ2V0VGFzayIsIl8iLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwicHJldlByb3BzIiwib25DbGVhclBhbmVsIiwic2V0VGltZW91dCIsImNsYXNzTmFtZSIsImxhYmVsIiwibW9iaWxlIiwiaWNvbiIsInJpZ2h0cyIsIl9nZXRUYXNrQWN0aW9uIiwiaGFuZGxlciIsIm9uQWRkUGFuZWwiLCJyZXF1ZXN0Iiwib25Ub2dnbGVUYXNrcyIsImNvbHVtbnMiLCJvblNldENvbHVtbnMiLCJDb2x1bW5zIiwib25Eb25lIiwib25SZW1vdmVQYW5lbCIsImVudGl0eSIsImZpbHRlciIsIm9uU2V0RmlsdGVyIiwiYXJ0aWNsZSIsImluY2x1ZGVzIiwiRmlsdGVycyIsInZhbHVlcyIsInByb21wdCIsIm9uVXBkYXRlIiwiZW5kcG9pbnQiLCJzb3J0IiwidG9rZW4iLCJFeHBvcnQiLCJkZWZhdWx0VmFsdWUiLCJrZXkiLCJvcmRlciIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5IiwiYm9vbCIsIm9uZU9mVHlwZSIsImVsZW1lbnQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsSzs7Ozs7Ozs7Ozs2QkFrQks7QUFBQTs7QUFBQSxtQkFDd0MsS0FBS0MsS0FEN0M7QUFBQSxVQUNDQyxPQURELFVBQ0NBLE9BREQ7QUFBQSxVQUNV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R0FBOEIsRUFBL0IsSUFBcUNMLEtBQUtJLEdBQXJELEdBQTJELElBTGhDO0FBTWpDSCxzQkFOaUM7QUFPakNiLGtCQUFRO0FBQUEsbUJBQU0sT0FBS3BDLEtBQUwsQ0FBV3FDLGFBQVgsRUFBTjtBQUFBO0FBUHlCLFNBQTVCLENBQVA7QUFTRCxPQVhEO0FBWUQ7OztFQW5KaUJuQixnQkFBTW9DLFM7O0FBQXBCdkQsSyxDQUVHd0QsUyxHQUFZO0FBQ2pCN0MsVUFBUThDLG9CQUFVQyxLQUREO0FBRWpCeEQsV0FBU3VELG9CQUFVQyxLQUZGO0FBR2pCdkQsUUFBTXNELG9CQUFVRSxJQUhDO0FBSWpCdkQsU0FBT3FELG9CQUFVRyxTQUFWLENBQW9CLENBQ3pCSCxvQkFBVUksT0FEZSxFQUV6Qkosb0JBQVVLLElBRmUsQ0FBcEIsQ0FKVTtBQVFqQnpELFNBQU9vRCxvQkFBVUMsS0FSQTtBQVNqQnBELFNBQU9tRCxvQkFBVUMsS0FUQTtBQVVqQnBDLGdCQUFjbUMsb0JBQVVLLElBVlA7QUFXakIvQixjQUFZMEIsb0JBQVVLLElBWEw7QUFZakJ4QixpQkFBZW1CLG9CQUFVSyxJQVpSO0FBYWpCN0IsaUJBQWV3QixvQkFBVUs7QUFiUixDO2tCQXNKTjlELEsiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IENvbHVtbnMgZnJvbSAnLi9jb2x1bW5zJ1xuaW1wb3J0IEZpbHRlcnMgZnJvbSAnLi4vZmlsdGVycydcbmltcG9ydCBFeHBvcnQgZnJvbSAnLi9leHBvcnQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgVGFza3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZXhwb3J0OiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5LFxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHBhbmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgUHJvcFR5cGVzLmZ1bmNcbiAgICBdKSxcbiAgICB0YWJsZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRhc2tzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb25DbGVhclBhbmVsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkFkZFBhbmVsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlbW92ZVBhbmVsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblRvZ2dsZVRhc2tzOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsdGVycywgb3BlbiwgcGFuZWwsIHRhYmxlLCB0YXNrcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrcy1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWwtaGVhZGVyIG1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsLWhlYWRlci1pY29uXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrcy1wYW5lbC1oZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIFRhc2tzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWwtaGVhZGVyLWljb24gXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZVRvZ2dsZVRhc2tzLmJpbmQodGhpcykgfT5cbiAgICAgICAgICAgICAgICAgIERvbmVcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICB7IHRhYmxlICYmXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrcy1wYW5lbC1pdGVtXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUNvbHVtbnMuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS10YWJsZVwiIC8+TWFuYWdlIENvbHVtbnNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IGZpbHRlcnMgJiZcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsLWl0ZW0gbW9iaWxlXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUZpbHRlci5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWZpbHRlclwiIC8+RmlsdGVyIFJlY29yZHNcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7IHRoaXMucHJvcHMuZXhwb3J0ICYmXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrcy1wYW5lbC1pdGVtXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUV4cG9ydC5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWRvd25sb2FkXCIgLz5FeHBvcnQgUmVjb3Jkc1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHsgdGFza3MgJiYgdGFza3MubWFwKCh0YXNrLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBrZXk9e2B0YXNrXyR7aW5kZXh9YH0geyAuLi50aGlzLl9nZXRUYXNrKHRhc2spIH0gLz5cbiAgICAgICAgICAgICAgICApKSB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENTU1RyYW5zaXRpb24gaW49eyBvcGVuIH0gY2xhc3NOYW1lcz1cImNvdmVyXCIgdGltZW91dD17IDUwMCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKHBhbmVsKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQocGFuZWwsIHRoaXMucHJvcHMpIDogcGFuZWwgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgb3Blbiwgb25DbGVhclBhbmVsIH0gPSB0aGlzLnByb3BzXG4gICAgaWYob3BlbiAhPT0gcHJldlByb3BzLm9wZW4gJiYgIW9wZW4pIHtcbiAgICAgIHNldFRpbWVvdXQob25DbGVhclBhbmVsLCA1MDApXG4gICAgfVxuICB9XG5cbiAgX2dldFRhc2sodGFzaykge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6ICdyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWwtaXRlbScsXG4gICAgICBsYWJlbDogdGFzay5sYWJlbCxcbiAgICAgIG1vYmlsZTogdGFzay5tb2JpbGUsXG4gICAgICBpY29uOiB0YXNrLmljb24sXG4gICAgICByaWdodHM6IHRhc2sucmlnaHRzLFxuICAgICAgLi4udGhpcy5fZ2V0VGFza0FjdGlvbih0YXNrKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRUYXNrQWN0aW9uKHRhc2spIHtcbiAgICBpZih0YXNrLnBhbmVsKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVyOiAoKSA9PiB0aGlzLnByb3BzLm9uQWRkUGFuZWwodGFzay5wYW5lbClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodGFzay5oYW5kbGVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVyOiAoKSA9PiB0YXNrLmhhbmRsZXIodGhpcy5wcm9wcylcbiAgICAgIH1cbiAgICB9XG4gICAgaWYodGFzay5yZXF1ZXN0KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByZXF1ZXN0OiAoKSA9PiB0YXNrLnJlcXVlc3QodGhpcy5wcm9wcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGFuZGxlVG9nZ2xlVGFza3MoKSB7XG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVRhc2tzKClcbiAgfVxuXG4gIF9oYW5kbGVDb2x1bW5zKCkge1xuICAgIHRoaXMucHJvcHMub25BZGRQYW5lbCgocHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHsgdGFibGUsIGNvbHVtbnMsIG9uU2V0Q29sdW1ucyB9ID0gcHJvcHNcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbHVtbnMsIHtcbiAgICAgICAgdGFibGUsXG4gICAgICAgIGNvbHVtbnMsXG4gICAgICAgIG9uU2V0Q29sdW1ucyxcbiAgICAgICAgb25Eb25lOiAoKSA9PiB0aGlzLnByb3BzLm9uUmVtb3ZlUGFuZWwoKVxuICAgICAgfSlcbiAgICB9KVxuXG4gIH1cblxuICBfaGFuZGxlRmlsdGVyKCkge1xuICAgIHRoaXMucHJvcHMub25BZGRQYW5lbCgocHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHsgZW50aXR5LCBmaWx0ZXJzLCBmaWx0ZXIsIG9uU2V0RmlsdGVyIH0gPSBwcm9wc1xuICAgICAgY29uc3QgYXJ0aWNsZSA9IF8uaW5jbHVkZXMoWydhJywnZScsJ2knLCdvJ10sIGVudGl0eVswXSkgPyAnYW4nIDogJ2EnXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGaWx0ZXJzLCB7XG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIHZhbHVlczogZmlsdGVyLFxuICAgICAgICBwcm9tcHQ6IGBGaW5kICR7YXJ0aWNsZX0gJHtlbnRpdHl9YCxcbiAgICAgICAgb25VcGRhdGU6IG9uU2V0RmlsdGVyLFxuICAgICAgICBvbkRvbmU6ICgpID0+IHRoaXMucHJvcHMub25SZW1vdmVQYW5lbCgpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBfaGFuZGxlRXhwb3J0KCkge1xuICAgIHRoaXMucHJvcHMub25BZGRQYW5lbCgocHJvcHMpID0+IHtcbiAgICAgIGNvbnN0IHsgZW5kcG9pbnQsIGVudGl0eSwgZmlsdGVyLCBzb3J0LCB0b2tlbiB9ID0gcHJvcHNcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEV4cG9ydCwge1xuICAgICAgICBkZWZhdWx0VmFsdWU6IHRoaXMucHJvcHMuZXhwb3J0LFxuICAgICAgICBlbmRwb2ludCxcbiAgICAgICAgZW50aXR5LFxuICAgICAgICBmaWx0ZXIsXG4gICAgICAgIHNvcnQ6IHNvcnQua2V5ID8gKHNvcnQub3JkZXIgPT09ICdkZXNjJyA/ICctJyA6ICcnKSArIHNvcnQua2V5IDogbnVsbCxcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIG9uRG9uZTogKCkgPT4gdGhpcy5wcm9wcy5vblJlbW92ZVBhbmVsKClcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFza3NcbiJdfQ==