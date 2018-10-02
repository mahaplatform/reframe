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

var _results = require('./results');

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _buttons = require('../buttons');

var _buttons2 = _interopRequireDefault(_buttons);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _tasks = require('./tasks');

var _tasks2 = _interopRequireDefault(_tasks);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Collection = function (_React$Component) {
  (0, _inherits3.default)(Collection, _React$Component);

  function Collection() {
    (0, _classCallCheck3.default)(this, Collection);
    return (0, _possibleConstructorReturn3.default)(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));
  }

  (0, _createClass3.default)(Collection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          buttons = _props.buttons,
          endpoint = _props.endpoint,
          records = _props.records;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        _react2.default.createElement('div', { className: 'reframe-collection-canvas', onClick: this._handleToggleTasks.bind(this) }),
        _react2.default.createElement(_tasks2.default, this._getTasks()),
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-body' },
          _react2.default.createElement(_header2.default, this._getHeader()),
          records && _react2.default.createElement(_results.Results, this._getResults()),
          endpoint && _react2.default.createElement(_infinite2.default, this._getInfinite()),
          _react2.default.createElement(
            _reactTransitionGroup.CSSTransition,
            { 'in': !_lodash2.default.isNil(buttons) && !_lodash2.default.isNil(buttons(this.props)), classNames: 'expanded', timeout: 150, mountOnEnter: true, unmountOnExit: true },
            _react2.default.createElement(
              'div',
              { className: 'reframe-collection-footer' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-collection-footer-items' },
                _react2.default.createElement(_buttons2.default, this._getButtons())
              )
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          data = _props2.data,
          defaultSort = _props2.defaultSort,
          table = _props2.table,
          onSetParams = _props2.onSetParams,
          onSetColumns = _props2.onSetColumns,
          onSetRecords = _props2.onSetRecords;

      var filter = this._getFilterFromUrl() || this.props.filter || {};
      var sort = defaultSort || { key: 'created_at', order: 'desc' };
      onSetParams(filter, sort);
      if (table) onSetColumns(table);
      if (data) onSetRecords(data);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var filter = this.props.filter;
      var router = this.context.router;

      if (!_lodash2.default.isEqual(filter, prevProps.filter)) {
        var query = _qs2.default.stringify({ $filter: filter }, { encode: false });
        router.replace(router.pathname + '?' + query);
      }
    }
  }, {
    key: '_getFilterFromUrl',
    value: function _getFilterFromUrl() {
      var search = this.context.router.search;

      if (_lodash2.default.isEmpty(search)) return null;
      var query = _qs2.default.parse(search.substr(1));
      if (!query.$filter) return null;
      return query.$filter;
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var classes = ['reframe-collection'];
      if (this.props.managing) classes.push('managing');
      return classes.join(' ');
    }
  }, {
    key: '_getHeader',
    value: function _getHeader() {
      var _props3 = this.props,
          filter = _props3.filter,
          filters = _props3.filters,
          managing = _props3.managing,
          search = _props3.search,
          tasks = _props3.tasks,
          onSetQuery = _props3.onSetQuery,
          onToggleTasks = _props3.onToggleTasks;

      return {
        export: this.props.export,
        filter: filter,
        filters: filters,
        managing: managing,
        search: search,
        tasks: tasks,
        onSetQuery: onSetQuery,
        onToggleTasks: onToggleTasks
      };
    }
  }, {
    key: '_getButtons',
    value: function _getButtons() {
      if (!this.props.buttons) return { buttons: null };
      return {
        buttons: this.props.buttons(this.props)
      };
    }
  }, {
    key: '_getTasks',
    value: function _getTasks() {
      return this.props;
    }
  }, {
    key: '_getResults',
    value: function _getResults() {
      return (0, _extends3.default)({}, this.props);
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this2 = this;

      var _props4 = this.props,
          cacheKey = _props4.cacheKey,
          endpoint = _props4.endpoint,
          failure = _props4.failure,
          loading = _props4.loading,
          q = _props4.q,
          sort = _props4.sort,
          onSetSelected = _props4.onSetSelected;

      var filter = (0, _extends3.default)({}, this.props.filter, {
        q: q
      });
      var footer = this.props.footer ? function (_ref) {
        var all = _ref.all,
            total = _ref.total;
        return all ? _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'NOW SHOWING:'
          ),
          ' ',
          total,
          ' / ',
          all,
          ' records'
        ) : '';
      } : false;
      return {
        cacheKey: cacheKey,
        endpoint: endpoint,
        filter: filter,
        footer: footer,
        loading: loading,
        empty: this._getEmpty(),
        failure: failure,
        layout: function layout(props) {
          return _react2.default.createElement(_results.Results, (0, _extends3.default)({}, _this2.props, props));
        },
        sort: sort,
        onUpdateSelected: onSetSelected
      };
    }
  }, {
    key: '_getEmpty',
    value: function _getEmpty() {
      var empty = this.props.empty;

      if (_lodash2.default.isFunction(empty)) return _react2.default.createElement(empty, this.props);
      return _react2.default.createElement(_results.Empty, this.props);
    }
  }, {
    key: '_handleToggleTasks',
    value: function _handleToggleTasks() {
      this.props.onToggleTasks();
    }
  }, {
    key: '_handleAddNew',
    value: function _handleAddNew() {
      this.context.modal.open(this.props.empty.modal);
    }
  }]);
  return Collection;
}(_react2.default.Component);

Collection.contextTypes = {
  modal: _propTypes2.default.object,
  router: _propTypes2.default.object
};
Collection.propTypes = {
  buttons: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.array]),
  cacheKey: _propTypes2.default.string,
  columns: _propTypes2.default.array,
  data: _propTypes2.default.array,
  defaultSort: _propTypes2.default.object,
  endpoint: _propTypes2.default.string,
  entity: _propTypes2.default.string,
  empty: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.string]),
  export: _propTypes2.default.array,
  failure: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  filter: _propTypes2.default.object,
  filters: _propTypes2.default.array,
  footer: _propTypes2.default.bool,
  handler: _propTypes2.default.func,
  icon: _propTypes2.default.string,
  layout: _propTypes2.default.func,
  loading: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  link: _propTypes2.default.func,
  managing: _propTypes2.default.bool,
  modal: _propTypes2.default.string,
  new: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  panel: _propTypes2.default.any,
  q: _propTypes2.default.string,
  records: _propTypes2.default.array,
  recordTasks: _propTypes2.default.array,
  rowClass: _propTypes2.default.func,
  search: _propTypes2.default.bool,
  selected: _propTypes2.default.array,
  selectable: _propTypes2.default.bool,
  sort: _propTypes2.default.object,
  table: _propTypes2.default.array,
  tasks: _propTypes2.default.array,
  token: _propTypes2.default.string,
  onAddPanel: _propTypes2.default.func,
  onClearPanel: _propTypes2.default.func,
  onFetch: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onSelectAll: _propTypes2.default.func,
  onSetColumns: _propTypes2.default.func,
  onSetFilter: _propTypes2.default.func,
  onSetParams: _propTypes2.default.func,
  onSetQuery: _propTypes2.default.func,
  onSetSelected: _propTypes2.default.func,
  onSetRecords: _propTypes2.default.func,
  onToggleTasks: _propTypes2.default.func
};
Collection.defaultProps = {
  cacheKey: null,
  entity: 'record',
  footer: true,
  search: true,
  selectable: false
};
exports.default = Collection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ29sbGVjdGlvbiIsInByb3BzIiwiYnV0dG9ucyIsImVuZHBvaW50IiwicmVjb3JkcyIsIl9nZXRDbGFzcyIsIl9oYW5kbGVUb2dnbGVUYXNrcyIsImJpbmQiLCJfZ2V0VGFza3MiLCJfZ2V0SGVhZGVyIiwiX2dldFJlc3VsdHMiLCJfZ2V0SW5maW5pdGUiLCJfIiwiaXNOaWwiLCJfZ2V0QnV0dG9ucyIsImRhdGEiLCJkZWZhdWx0U29ydCIsInRhYmxlIiwib25TZXRQYXJhbXMiLCJvblNldENvbHVtbnMiLCJvblNldFJlY29yZHMiLCJmaWx0ZXIiLCJfZ2V0RmlsdGVyRnJvbVVybCIsInNvcnQiLCJrZXkiLCJvcmRlciIsInByZXZQcm9wcyIsInJvdXRlciIsImNvbnRleHQiLCJpc0VxdWFsIiwicXVlcnkiLCJxcyIsInN0cmluZ2lmeSIsIiRmaWx0ZXIiLCJlbmNvZGUiLCJyZXBsYWNlIiwicGF0aG5hbWUiLCJzZWFyY2giLCJpc0VtcHR5IiwicGFyc2UiLCJzdWJzdHIiLCJjbGFzc2VzIiwibWFuYWdpbmciLCJwdXNoIiwiam9pbiIsImZpbHRlcnMiLCJ0YXNrcyIsIm9uU2V0UXVlcnkiLCJvblRvZ2dsZVRhc2tzIiwiZXhwb3J0IiwiY2FjaGVLZXkiLCJmYWlsdXJlIiwibG9hZGluZyIsInEiLCJvblNldFNlbGVjdGVkIiwiZm9vdGVyIiwiYWxsIiwidG90YWwiLCJlbXB0eSIsIl9nZXRFbXB0eSIsImxheW91dCIsIm9uVXBkYXRlU2VsZWN0ZWQiLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwibW9kYWwiLCJvcGVuIiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiZnVuYyIsImFycmF5Iiwic3RyaW5nIiwiY29sdW1ucyIsImVudGl0eSIsImVsZW1lbnQiLCJib29sIiwiaGFuZGxlciIsImljb24iLCJsaW5rIiwibmV3IiwicGFuZWwiLCJhbnkiLCJyZWNvcmRUYXNrcyIsInJvd0NsYXNzIiwic2VsZWN0ZWQiLCJzZWxlY3RhYmxlIiwidG9rZW4iLCJvbkFkZFBhbmVsIiwib25DbGVhclBhbmVsIiwib25GZXRjaCIsIm9uUmVtb3ZlUGFuZWwiLCJvblNlbGVjdCIsIm9uU2VsZWN0QWxsIiwib25TZXRGaWx0ZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7NkJBOEVLO0FBQUEsbUJBQ2dDLEtBQUtDLEtBRHJDO0FBQUEsVUFDQ0MsT0FERCxVQUNDQSxPQUREO0FBQUEsVUFDVUMsUUFEVixVQUNVQSxRQURWO0FBQUEsVUFDb0JDLE9BRHBCLFVBQ29CQSxPQURwQjs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBS0MsU0FBTCxFQUFqQjtBQUNFLCtDQUFLLFdBQVUsMkJBQWYsRUFBMkMsU0FBVSxLQUFLQyxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FBNkIsSUFBN0IsQ0FBckQsR0FERjtBQUVFLHNDQUFDLGVBQUQsRUFBWSxLQUFLQyxTQUFMLEVBQVosQ0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFLLFdBQVUseUJBQWY7QUFDRSx3Q0FBQyxnQkFBRCxFQUFhLEtBQUtDLFVBQUwsRUFBYixDQURGO0FBRUlMLHFCQUFXLDhCQUFDLGdCQUFELEVBQWMsS0FBS00sV0FBTCxFQUFkLENBRmY7QUFHSVAsc0JBQVksOEJBQUMsa0JBQUQsRUFBZSxLQUFLUSxZQUFMLEVBQWYsQ0FIaEI7QUFJRTtBQUFDLCtDQUFEO0FBQUEsY0FBZSxNQUFLLENBQUNDLGlCQUFFQyxLQUFGLENBQVFYLE9BQVIsQ0FBRCxJQUFxQixDQUFDVSxpQkFBRUMsS0FBRixDQUFRWCxRQUFRLEtBQUtELEtBQWIsQ0FBUixD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aURqQm1CLGdCQUFjdkIsb0JBQVVJLElBakRQO0FBa0RqQm9CLFdBQVN4QixvQkFBVUksSUFsREY7QUFtRGpCcUIsaUJBQWV6QixvQkFBVUksSUFuRFI7QUFvRGpCc0IsWUFBVTFCLG9CQUFVSSxJQXBESDtBQXFEakJ1QixlQUFhM0Isb0JBQVVJLElBckROO0FBc0RqQnRELGdCQUFja0Qsb0JBQVVJLElBdERQO0FBdURqQndCLGVBQWE1QixvQkFBVUksSUF2RE47QUF3RGpCdkQsZUFBYW1ELG9CQUFVSSxJQXhETjtBQXlEakIxQixjQUFZc0Isb0JBQVVJLElBekRMO0FBMERqQm5CLGlCQUFlZSxvQkFBVUksSUExRFI7QUEyRGpCckQsZ0JBQWNpRCxvQkFBVUksSUEzRFA7QUE0RGpCekIsaUJBQWVxQixvQkFBVUk7QUE1RFIsQztBQVBmekUsVSxDQXNFR2tHLFksR0FBZTtBQUNwQmhELFlBQVUsSUFEVTtBQUVwQjJCLFVBQVEsUUFGWTtBQUdwQnRCLFVBQVEsSUFIWTtBQUlwQmxCLFVBQVEsSUFKWTtBQUtwQm9ELGNBQVk7QUFMUSxDO2tCQWtJVHpGLFUiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IHsgRW1wdHksIFJlc3VsdHMgfSBmcm9tICcuL3Jlc3VsdHMnXG5pbXBvcnQgSW5maW5pdGUgZnJvbSAnLi4vaW5maW5pdGUnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQnV0dG9ucyBmcm9tICcuLi9idXR0b25zJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcidcbmltcG9ydCBUYXNrcyBmcm9tICcuL3Rhc2tzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHFzIGZyb20gJ3FzJ1xuXG5jbGFzcyBDb2xsZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIG1vZGFsOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBidXR0b25zOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLmFycmF5XG4gICAgXSksXG4gICAgY2FjaGVLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheSxcbiAgICBkZWZhdWx0U29ydDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBlbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlbnRpdHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZW1wdHk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSxcbiAgICBleHBvcnQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICBmYWlsdXJlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5mdW5jLFxuICAgICAgUHJvcFR5cGVzLmVsZW1lbnRcbiAgICBdKSxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGZvb3RlcjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYXlvdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudFxuICAgIF0pLFxuICAgIGxpbms6IFByb3BUeXBlcy5mdW5jLFxuICAgIG1hbmFnaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtb2RhbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBuZXc6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIHBhbmVsOiBQcm9wVHlwZXMuYW55LFxuICAgIHE6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVjb3JkczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHJlY29yZFRhc2tzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgcm93Q2xhc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlYXJjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzZWxlY3RhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHRhYmxlOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdGFza3M6IFByb3BUeXBlcy5hcnJheSxcbiAgICB0b2tlbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkFkZFBhbmVsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsZWFyUGFuZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRmV0Y2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVtb3ZlUGFuZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEFsbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZXRDb2x1bW5zOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNldEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZXRQYXJhbXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2V0U2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2V0UmVjb3JkczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Ub2dnbGVUYXNrczogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2FjaGVLZXk6IG51bGwsXG4gICAgZW50aXR5OiAncmVjb3JkJyxcbiAgICBmb290ZXI6IHRydWUsXG4gICAgc2VhcmNoOiB0cnVlLFxuICAgIHNlbGVjdGFibGU6IGZhbHNlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBidXR0b25zLCBlbmRwb2ludCwgcmVjb3JkcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMuX2dldENsYXNzKCkgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tY2FudmFzXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZVRvZ2dsZVRhc2tzLmJpbmQodGhpcykgfSAvPlxuICAgICAgICA8VGFza3MgeyAuLi50aGlzLl9nZXRUYXNrcygpIH0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tYm9keVwiPlxuICAgICAgICAgIDxIZWFkZXIgeyAuLi50aGlzLl9nZXRIZWFkZXIoKSB9IC8+XG4gICAgICAgICAgeyByZWNvcmRzICYmIDxSZXN1bHRzIHsgLi4udGhpcy5fZ2V0UmVzdWx0cygpIH0gLz4gfVxuICAgICAgICAgIHsgZW5kcG9pbnQgJiYgPEluZmluaXRlIHsgLi4udGhpcy5fZ2V0SW5maW5pdGUoKSB9IC8+IH1cbiAgICAgICAgICA8Q1NTVHJhbnNpdGlvbiBpbj17ICFfLmlzTmlsKGJ1dHRvbnMpICYmICFfLmlzTmlsKGJ1dHRvbnModGhpcy5wcm9wcykpIH0gY2xhc3NOYW1lcz1cImV4cGFuZGVkXCIgdGltZW91dD17IDE1MCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLWZvb3Rlci1pdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxCdXR0b25zIHsgLi4udGhpcy5fZ2V0QnV0dG9ucygpIH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkYXRhLCBkZWZhdWx0U29ydCwgdGFibGUsIG9uU2V0UGFyYW1zLCBvblNldENvbHVtbnMsIG9uU2V0UmVjb3JkcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuX2dldEZpbHRlckZyb21VcmwoKSB8fCB0aGlzLnByb3BzLmZpbHRlciB8fCB7fVxuICAgIGNvbnN0IHNvcnQgPSBkZWZhdWx0U29ydCB8fCB7IGtleTogJ2NyZWF0ZWRfYXQnLCBvcmRlcjogJ2Rlc2MnIH1cbiAgICBvblNldFBhcmFtcyhmaWx0ZXIsIHNvcnQpXG4gICAgaWYodGFibGUpIG9uU2V0Q29sdW1ucyh0YWJsZSlcbiAgICBpZihkYXRhKSBvblNldFJlY29yZHMoZGF0YSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBjb25zdCB7IGZpbHRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgcm91dGVyIH0gPSB0aGlzLmNvbnRleHRcbiAgICBpZighXy5pc0VxdWFsKGZpbHRlciwgcHJldlByb3BzLmZpbHRlcikpIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcXMuc3RyaW5naWZ5KHsgJGZpbHRlcjogZmlsdGVyIH0sIHsgZW5jb2RlOiBmYWxzZSB9KVxuICAgICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLnBhdGhuYW1lKyc/JytxdWVyeSlcbiAgICB9XG4gIH1cblxuICBfZ2V0RmlsdGVyRnJvbVVybCgpIHtcbiAgICBjb25zdCB7IHNlYXJjaCB9ID0gdGhpcy5jb250ZXh0LnJvdXRlclxuICAgIGlmKF8uaXNFbXB0eShzZWFyY2gpKSByZXR1cm4gbnVsbFxuICAgIGNvbnN0IHF1ZXJ5ID0gcXMucGFyc2Uoc2VhcmNoLnN1YnN0cigxKSlcbiAgICBpZighcXVlcnkuJGZpbHRlcikgcmV0dXJuIG51bGxcbiAgICByZXR1cm4gcXVlcnkuJGZpbHRlclxuICB9XG5cbiAgX2dldENsYXNzKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ3JlZnJhbWUtY29sbGVjdGlvbiddXG4gICAgaWYodGhpcy5wcm9wcy5tYW5hZ2luZykgY2xhc3Nlcy5wdXNoKCdtYW5hZ2luZycpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0SGVhZGVyKCkge1xuICAgIGNvbnN0IHsgZmlsdGVyLCBmaWx0ZXJzLCBtYW5hZ2luZywgc2VhcmNoLCB0YXNrcywgb25TZXRRdWVyeSwgb25Ub2dnbGVUYXNrcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBleHBvcnQ6IHRoaXMucHJvcHMuZXhwb3J0LFxuICAgICAgZmlsdGVyLFxuICAgICAgZmlsdGVycyxcbiAgICAgIG1hbmFnaW5nLFxuICAgICAgc2VhcmNoLFxuICAgICAgdGFza3MsXG4gICAgICBvblNldFF1ZXJ5LFxuICAgICAgb25Ub2dnbGVUYXNrc1xuICAgIH1cbiAgfVxuXG4gIF9nZXRCdXR0b25zKCkge1xuICAgIGlmKCF0aGlzLnByb3BzLmJ1dHRvbnMpIHJldHVybiB7IGJ1dHRvbnM6IG51bGwgfVxuICAgIHJldHVybiB7XG4gICAgICBidXR0b25zOiB0aGlzLnByb3BzLmJ1dHRvbnModGhpcy5wcm9wcylcbiAgICB9XG4gIH1cblxuICBfZ2V0VGFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNcbiAgfVxuXG4gIF9nZXRSZXN1bHRzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnByb3BzXG4gICAgfVxuICB9XG5cbiAgX2dldEluZmluaXRlKCkge1xuICAgIGNvbnN0IHsgY2FjaGVLZXksIGVuZHBvaW50LCBmYWlsdXJlLCBsb2FkaW5nLCBxLCBzb3J0LCBvblNldFNlbGVjdGVkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgZmlsdGVyID0ge1xuICAgICAgLi4udGhpcy5wcm9wcy5maWx0ZXIsXG4gICAgICBxXG4gICAgfVxuICAgIGNvbnN0IGZvb3RlciA9IHRoaXMucHJvcHMuZm9vdGVyID8gKHsgYWxsLCB0b3RhbCB9KSA9PiBhbGwgPyA8c3Bhbj48c3Ryb25nPk5PVyBTSE9XSU5HOjwvc3Ryb25nPiB7IHRvdGFsIH0gLyB7IGFsbCB9IHJlY29yZHM8L3NwYW4+IDogJycgOiBmYWxzZVxuICAgIHJldHVybiB7XG4gICAgICBjYWNoZUtleSxcbiAgICAgIGVuZHBvaW50LFxuICAgICAgZmlsdGVyLFxuICAgICAgZm9vdGVyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIGVtcHR5OiB0aGlzLl9nZXRFbXB0eSgpLFxuICAgICAgZmFpbHVyZSxcbiAgICAgIGxheW91dDogKHByb3BzKSA9PiA8UmVzdWx0cyB7IC4uLnRoaXMucHJvcHMgfSB7IC4uLnByb3BzIH0gLz4sXG4gICAgICBzb3J0LFxuICAgICAgb25VcGRhdGVTZWxlY3RlZDogb25TZXRTZWxlY3RlZFxuICAgIH1cbiAgfVxuXG4gIF9nZXRFbXB0eSgpIHtcbiAgICBjb25zdCB7IGVtcHR5IH0gPSB0aGlzLnByb3BzXG4gICAgaWYoXy5pc0Z1bmN0aW9uKGVtcHR5KSkgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoZW1wdHksIHRoaXMucHJvcHMpXG4gICAgcmV0dXJuIDxFbXB0eSB7IC4uLnRoaXMucHJvcHMgfSAvPlxuICB9XG5cbiAgX2hhbmRsZVRvZ2dsZVRhc2tzKCkge1xuICAgIHRoaXMucHJvcHMub25Ub2dnbGVUYXNrcygpXG4gIH1cblxuICBfaGFuZGxlQWRkTmV3KCkge1xuICAgIHRoaXMuY29udGV4dC5tb2RhbC5vcGVuKHRoaXMucHJvcHMuZW1wdHkubW9kYWwpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uXG4iXX0=