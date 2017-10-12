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

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _results = require('./results');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _tasks = require('./tasks');

var _tasks2 = _interopRequireDefault(_tasks);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_React$Component) {
  _inherits(Collection, _React$Component);

  function Collection() {
    _classCallCheck(this, Collection);

    return _possibleConstructorReturn(this, (Collection.__proto__ || Object.getPrototypeOf(Collection)).apply(this, arguments));
  }

  _createClass(Collection, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          endpoint = _props.endpoint,
          records = _props.records;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-body' },
          _react2.default.createElement(_header2.default, this._getHeader()),
          records && _react2.default.createElement(_results.Results, this._getResuts()),
          endpoint && _react2.default.createElement(_infinite2.default, this._getInfinite())
        ),
        _react2.default.createElement('div', { className: 'reframe-collection-canvas', onClick: this._handleToggleTasks.bind(this) }),
        _react2.default.createElement(_tasks2.default, this._getTasks())
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

      var filter = this.props.filter || {};
      var sort = defaultSort || { key: 'created_at', order: 'desc' };
      onSetParams(filter, sort);
      if (table) onSetColumns(table);
      if (data) onSetRecords(data);
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
          tasks = _props3.tasks,
          onSetQuery = _props3.onSetQuery,
          onToggleTasks = _props3.onToggleTasks;

      return {
        export: this.props.export,
        filter: filter,
        filters: filters,
        tasks: tasks,
        onSetQuery: onSetQuery,
        onToggleTasks: onToggleTasks
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
      return _extends({}, this.props);
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this2 = this;

      var _props4 = this.props,
          cacheKey = _props4.cacheKey,
          empty = _props4.empty,
          endpoint = _props4.endpoint,
          failure = _props4.failure,
          loading = _props4.loading,
          q = _props4.q,
          sort = _props4.sort;

      var filter = _extends({}, this.props.filter, {
        q: q
      });
      return {
        cacheKey: cacheKey,
        endpoint: endpoint,
        filter: filter,
        footer: this._getFooter(),
        loading: loading,
        empty: _lodash2.default.isString(empty) ? _react2.default.createElement(_results.Empty, this.props) : empty,
        failure: failure,
        layout: function layout(props) {
          return _react2.default.createElement(_results.Results, _extends({}, _this2.props, props));
        },
        sort: sort
      };
    }
  }, {
    key: '_getFooter',
    value: function _getFooter() {
      var entities = (0, _pluralize2.default)(this.props.entity);
      return function (_ref) {
        var all = _ref.all,
            total = _ref.total;
        return all ? _react2.default.createElement(
          'span',
          null,
          'Now showing ',
          total,
          ' / ',
          all,
          ' ',
          entities
        ) : 'nbsp;';
      };
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
  modal: _propTypes2.default.object
};
Collection.propTypes = {
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
  handler: _propTypes2.default.func,
  icon: _propTypes2.default.string,
  layout: _propTypes2.default.func,
  loading: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  link: _propTypes2.default.string,
  managing: _propTypes2.default.bool,
  modal: _propTypes2.default.string,
  new: _propTypes2.default.func,
  open: _propTypes2.default.bool,
  panel: _propTypes2.default.any,
  q: _propTypes2.default.string,
  records: _propTypes2.default.array,
  recordTasks: _propTypes2.default.array,
  sort: _propTypes2.default.object,
  table: _propTypes2.default.array,
  tasks: _propTypes2.default.array,
  token: _propTypes2.default.string,
  onAddPanel: _propTypes2.default.func,
  onClearPanel: _propTypes2.default.func,
  onFetch: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func,
  onSetColumns: _propTypes2.default.func,
  onSetFilter: _propTypes2.default.func,
  onSetParams: _propTypes2.default.func,
  onSetQuery: _propTypes2.default.func,
  onSetRecords: _propTypes2.default.func,
  onToggleTasks: _propTypes2.default.func
};
Collection.defaultProps = {
  cacheKey: null,
  entity: 'record'
};
exports.default = Collection;