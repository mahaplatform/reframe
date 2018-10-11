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