'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _scrollpane = require('../scrollpane');

var _scrollpane2 = _interopRequireDefault(_scrollpane);

var _results = require('./results');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Infinite = function (_React$Component) {
  (0, _inherits3.default)(Infinite, _React$Component);

  function Infinite() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Infinite);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Infinite.__proto__ || Object.getPrototypeOf(Infinite)).call.apply(_ref, [this].concat(args))), _this), _this.timeout = null, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Infinite, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          all = _props.all,
          delayed = _props.delayed,
          empty = _props.empty,
          failure = _props.failure,
          footer = _props.footer,
          header = _props.header,
          layout = _props.layout,
          loading = _props.loading,
          notFound = _props.notFound,
          records = _props.records,
          status = _props.status,
          timeout = _props.timeout,
          total = _props.total;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-infinite' },
        header && _react2.default.createElement(
          'div',
          { className: 'reframe-infinite-header' },
          _react2.default.createElement(header, this.props)
        ),
        status === 'loading' && !records && this._getComponent(loading),
        status === 'delayed' && this._getComponent(delayed),
        status === 'timeout' && this._getComponent(timeout),
        status === 'failed' && this._getComponent(failure),
        status !== 'failed' && total === 0 && all !== 0 && this._getComponent(notFound),
        status !== 'failed' && total === 0 && all === 0 && this._getComponent(empty),
        status !== 'failed' && records && records.length > 0 && layout && _react2.default.createElement(
          _scrollpane2.default,
          this._getScrollpane(),
          _react2.default.createElement(layout, this.props)
        ),
        status === 'loading' && records && records.length > 0 && this._getComponent(_results.Appending),
        footer && total !== null && total !== 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-infinite-footer' },
          _react2.default.createElement(footer, this.props)
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timeout = null;
      this._handleFetch(0, true);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      var ignored = ['con', 'empty', 'layout', 'footer', 'router'];
      return Object.keys(_lodash2.default.omit(this.props, ignored)).reduce(function (update, key) {
        return update || !_lodash2.default.isEqual(_this2.props[key], nextProps[key]);
      }, false);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          cacheKey = _props2.cacheKey,
          exclude_ids = _props2.exclude_ids,
          filter = _props2.filter,
          records = _props2.records,
          selected = _props2.selected,
          sort = _props2.sort,
          status = _props2.status,
          onUpdateSelected = _props2.onUpdateSelected;

      if (this.timeout && status !== prevProps.status && prevProps.status === 'loading') {
        clearTimeout(this.timeout);
      }
      if (cacheKey !== prevProps.cacheKey || !_lodash2.default.isEqual(prevProps.exclude_ids, exclude_ids) || !_lodash2.default.isEqual(prevProps.filter, filter) || !_lodash2.default.isEqual(prevProps.sort, sort)) {
        this._handleFetch(0, true);
      }
      if (selected !== prevProps.selected && selected && records) {
        var selectedRecords = records.filter(function (record) {
          return _lodash2.default.includes(selected, record.id);
        });
        if (onUpdateSelected) onUpdateSelected(selectedRecords);
      }
    }
  }, {
    key: '_getComponent',
    value: function _getComponent(component) {
      return _lodash2.default.isFunction(component) ? _react2.default.createElement(component, this.props) : component;
    }
  }, {
    key: '_getScrollpane',
    value: function _getScrollpane() {
      return {
        onReachBottom: this._handleFetch.bind(this)
      };
    }
  }, {
    key: '_handleFetch',
    value: function _handleFetch() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var reload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var _props3 = this.props,
          endpoint = _props3.endpoint,
          exclude_ids = _props3.exclude_ids,
          filter = _props3.filter,
          next = _props3.next,
          records = _props3.records,
          sort = _props3.sort,
          total = _props3.total,
          onFetch = _props3.onFetch;

      var loaded = records ? records.length : 0;
      var query = (0, _extends4.default)({
        $page: this._getPagination(skip)
      }, filter ? { $filter: filter } : {}, sort && sort.key ? { $sort: (sort.order === 'desc' ? '-' : '') + sort.key } : {}, exclude_ids ? { $exclude_ids: exclude_ids } : {});
      if (onFetch && this._getMore(next, skip, reload, loaded, total)) onFetch(endpoint, query);
      this.timeout = setTimeout(this._handleDelay.bind(this), 5000);
    }
  }, {
    key: '_getMore',
    value: function _getMore(next, skip, reload, loaded, total) {
      if (reload) return true;
      if (next !== undefined) return next !== null;
      if (total === undefined && skip === 0) return true;
      if (total !== undefined) return loaded < total;
    }
  }, {
    key: '_getPagination',
    value: function _getPagination(skip) {
      var _props4 = this.props,
          next = _props4.next,
          records = _props4.records;

      var loaded = records ? records.length : 0;
      if (next) return { next: next };
      return { skip: skip !== null ? skip : loaded };
    }
  }, {
    key: '_handleDelay',
    value: function _handleDelay() {
      var _props5 = this.props,
          status = _props5.status,
          onFetchDelay = _props5.onFetchDelay;

      if (status !== 'loading') return;
      if (onFetchDelay) onFetchDelay();
      this.timeout = setTimeout(this._handleTimeout.bind(this), 5000);
    }
  }, {
    key: '_handleTimeout',
    value: function _handleTimeout() {
      var _props6 = this.props,
          status = _props6.status,
          onFetchTimeout = _props6.onFetchTimeout;

      if (status !== 'delyed') return;
      if (onFetchTimeout) onFetchTimeout();
    }
  }, {
    key: '_handleRefresh',
    value: function _handleRefresh() {
      var onFetchTimeout = this.props.onFetchTimeout;

      if (onFetchTimeout) onFetchTimeout();
    }
  }]);
  return Infinite;
}(_react2.default.Component);

Infinite.propTypes = {
  all: _propTypes2.default.number,
  cacheKey: _propTypes2.default.string,
  delayed: _propTypes2.default.any,
  endpoint: _propTypes2.default.any,
  empty: _propTypes2.default.any,
  exclude_ids: _propTypes2.default.any,
  failure: _propTypes2.default.any,
  filter: _propTypes2.default.object,
  footer: _propTypes2.default.any,
  header: _propTypes2.default.any,
  layout: _propTypes2.default.any,
  loading: _propTypes2.default.any,
  next: _propTypes2.default.string,
  notFound: _propTypes2.default.any,
  records: _propTypes2.default.array,
  selected: _propTypes2.default.array,
  sort: _propTypes2.default.object,
  status: _propTypes2.default.string,
  timeout: _propTypes2.default.any,
  total: _propTypes2.default.number,
  onFetch: _propTypes2.default.func,
  onFetchDelay: _propTypes2.default.func,
  onFetchTimeout: _propTypes2.default.func,
  onUpdateSelected: _propTypes2.default.func
};
Infinite.defaultProps = {
  cacheKey: null,
  delayed: _results.Delayed,
  empty: _results.Empty,
  failure: _results.Failure,
  filter: {},
  footer: null,
  header: null,
  loading: _results.Loader,
  notFound: _results.NotFound,
  sort: {
    key: null,
    order: null
  },
  timeout: _results.Timeout,
  onUpdateSelected: function onUpdateSelected(ids) {}
};


var mapStateToProps = function mapStateToProps(state, props) {
  return props.selectors ? Object.keys(props.selectors).reduce(function (mapped, key) {
    return (0, _extends4.default)({}, mapped, (0, _defineProperty3.default)({}, key, props.selectors[key](state, props)));
  }, {}) : {};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Infinite);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSW5maW5pdGUiLCJ0aW1lb3V0IiwicHJvcHMiLCJhbGwiLCJkZWxheWVkIiwiZW1wdHkiLCJmYWlsdXJlIiwiZm9vdGVyIiwiaGVhZGVyIiwibGF5b3V0IiwibG9hZGluZyIsIm5vdEZvdW5kIiwicmVjb3JkcyIsInN0YXR1cyIsInRvdGFsIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX2dldENvbXBvbmVudCIsImxlbmd0aCIsIl9nZXRTY3JvbGxwYW5lIiwiQXBwZW5kaW5nIiwiX2hhbmRsZUZldGNoIiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwiaWdub3JlZCIsIk9iamVjdCIsImtleXMiLCJfIiwib21pdCIsInJlZHVjZSIsInVwZGF0ZSIsImtleSIsImlzRXF1YWwiLCJwcmV2UHJvcHMiLCJjYWNoZUtleSIsImV4Y2x1ZGVfaWRzIiwiZmlsdGVyIiwic2VsZWN0ZWQiLCJzb3J0Iiwib25VcGRhdGVTZWxlY3RlZCIsImNsZWFyVGltZW91dCIsInNlbGVjdGVkUmVjb3JkcyIsImluY2x1ZGVzIiwicmVjb3JkIiwiaWQiLCJjb21wb25lbnQiLCJpc0Z1bmN0aW9uIiwib25SZWFjaEJvdHRvbSIsImJpbmQiLCJza2lwIiwicmVsb2FkIiwiZW5kcG9pbnQiLCJuZXh0Iiwib25GZXRjaCIsImxvYWRlZCIsInF1ZXJ5IiwiJHBhZ2UiLCJfZ2V0UGFnaW5hdGlvbiIsIiRmaWx0ZXIiLCIkc29ydCIsIm9yZGVyIiwiJGV4Y2x1ZGVfaWRzIiwiX2dldE1vcmUiLCJzZXRUaW1lb3V0IiwiX2hhbmRsZURlbGF5IiwidW5kZWZpbmVkIiwib25GZXRjaERlbGF5IiwiX2hhbmRsZVRpbWVvdXQiLCJvbkZldGNoVGltZW91dCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsInN0cmluZyIsImFueSIsIm9iamVjdCIsImFycmF5IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsIkRlbGF5ZWQiLCJFbXB0eSIsIkZhaWx1cmUiLCJMb2FkZXIiLCJOb3RGb3VuZCIsIlRpbWVvdXQiLCJpZHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInNlbGVjdG9ycyIsIm1hcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztJQUVNQSxROzs7Ozs7Ozs7Ozs7Ozt3TUE2QkpDLE8sR0FBZSxJOzs7Ozs2QkFvQk47QUFBQSxtQkFDOEcsS0FBS0MsS0FEbkg7QUFBQSxVQUNDQyxHQURELFVBQ0NBLEdBREQ7QUFBQSxVQUNNQyxPQUROLFVBQ01BLE9BRE47QUFBQSxVQUNlQyxLQURmLFVBQ2VBLEtBRGY7QUFBQSxVQUNzQkMsT0FEdEIsVUFDc0JBLE9BRHRCO0FBQUEsVUFDK0JDLE1BRC9CLFVBQytCQSxNQUQvQjtBQUFBLFVBQ3VDQyxNQUR2QyxVQUN1Q0EsTUFEdkM7QUFBQSxVQUMrQ0MsTUFEL0MsVUFDK0NBLE1BRC9DO0FBQUEsVUFDdURDLE9BRHZELFVBQ3VEQSxPQUR2RDtBQUFBLFVBQ2dFQyxRQURoRSxVQUNnRUEsUUFEaEU7QUFBQSxVQUMwRUMsT0FEMUUsVUFDMEVBLE9BRDFFO0FBQUEsVUFDbUZDLE1BRG5GLFVBQ21GQSxNQURuRjtBQUFBLFVBQzJGWixPQUQzRixVQUMyRkEsT0FEM0Y7QUFBQSxVQUNvR2EsS0FEcEcsVUFDb0dBLEtBRHBHOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxrQkFBZjtBQUNJTixrQkFDQTtBQUFBO0FBQUEsWUFBSyxXQUFVLHlCQUFmO0FBQ0lPLDBCQUFNQyxhQUFOLENBQW9CUixNQUFwQixFQUE0QixLQUFLTixLQUFqQztBQURKLFNBRko7QUFNSVcsbUJBQVcsU0FBWCxJQUF3QixDQUFDRCxPQUF6QixJQUFvQyxLQUFLSyxhQUFMLENBQW1CUCxPQUFuQixDQU54QztBQU9JRyxtQkFBVyxTQUFYLElBQXdCLEtBQUtJLGFBQUwsQ0FBbUJiLE9BQW5C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RUFBNEJyRixLQUE1QixDQUZ1RjtBQUFBLEdBQXBDLEVBR3hELEVBSHdELENBQWxCLEdBR2hDLEVBSGM7QUFBQSxDQUF4Qjs7a0JBS2UseUJBQVFvRixlQUFSLEVBQXlCdEYsUUFBekIsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFNjcm9sbHBhbmUgZnJvbSAnLi4vc2Nyb2xscGFuZSdcbmltcG9ydCB7IEFwcGVuZGluZywgRGVsYXllZCwgRW1wdHksIEZhaWx1cmUsIExvYWRlciwgTm90Rm91bmQsIFRpbWVvdXQgfSBmcm9tICcuL3Jlc3VsdHMnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmNsYXNzIEluZmluaXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFsbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBjYWNoZUtleTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWxheWVkOiBQcm9wVHlwZXMuYW55LFxuICAgIGVuZHBvaW50OiBQcm9wVHlwZXMuYW55LFxuICAgIGVtcHR5OiBQcm9wVHlwZXMuYW55LFxuICAgIGV4Y2x1ZGVfaWRzOiBQcm9wVHlwZXMuYW55LFxuICAgIGZhaWx1cmU6IFByb3BUeXBlcy5hbnksXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZvb3RlcjogUHJvcFR5cGVzLmFueSxcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5hbnksXG4gICAgbGF5b3V0OiBQcm9wVHlwZXMuYW55LFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5hbnksXG4gICAgbmV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBub3RGb3VuZDogUHJvcFR5cGVzLmFueSxcbiAgICByZWNvcmRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzb3J0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0YXR1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aW1lb3V0OiBQcm9wVHlwZXMuYW55LFxuICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uRmV0Y2g6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRmV0Y2hEZWxheTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25GZXRjaFRpbWVvdXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVXBkYXRlU2VsZWN0ZWQ6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICB0aW1lb3V0OiBhbnkgPSBudWxsXG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjYWNoZUtleTogbnVsbCxcbiAgICBkZWxheWVkOiBEZWxheWVkLFxuICAgIGVtcHR5OiBFbXB0eSxcbiAgICBmYWlsdXJlOiBGYWlsdXJlLFxuICAgIGZpbHRlcjoge30sXG4gICAgZm9vdGVyOiBudWxsLFxuICAgIGhlYWRlcjogbnVsbCxcbiAgICBsb2FkaW5nOiBMb2FkZXIsXG4gICAgbm90Rm91bmQ6IE5vdEZvdW5kLFxuICAgIHNvcnQ6IHtcbiAgICAgIGtleTogbnVsbCxcbiAgICAgIG9yZGVyOiBudWxsXG4gICAgfSxcbiAgICB0aW1lb3V0OiBUaW1lb3V0LFxuICAgIG9uVXBkYXRlU2VsZWN0ZWQ6IChpZHMpID0+IHt9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhbGwsIGRlbGF5ZWQsIGVtcHR5LCBmYWlsdXJlLCBmb290ZXIsIGhlYWRlciwgbGF5b3V0LCBsb2FkaW5nLCBub3RGb3VuZCwgcmVjb3Jkcywgc3RhdHVzLCB0aW1lb3V0LCB0b3RhbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtaW5maW5pdGVcIj5cbiAgICAgICAgeyBoZWFkZXIgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtaW5maW5pdGUtaGVhZGVyXCI+XG4gICAgICAgICAgICB7IFJlYWN0LmNyZWF0ZUVsZW1lbnQoaGVhZGVyLCB0aGlzLnByb3BzKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgeyBzdGF0dXMgPT09ICdsb2FkaW5nJyAmJiAhcmVjb3JkcyAmJiB0aGlzLl9nZXRDb21wb25lbnQobG9hZGluZykgfVxuICAgICAgICB7IHN0YXR1cyA9PT0gJ2RlbGF5ZWQnICYmIHRoaXMuX2dldENvbXBvbmVudChkZWxheWVkKSB9XG4gICAgICAgIHsgc3RhdHVzID09PSAndGltZW91dCcgJiYgdGhpcy5fZ2V0Q29tcG9uZW50KHRpbWVvdXQpIH1cbiAgICAgICAgeyBzdGF0dXMgPT09ICdmYWlsZWQnICYmIHRoaXMuX2dldENvbXBvbmVudChmYWlsdXJlKSB9XG4gICAgICAgIHsgc3RhdHVzICE9PSAnZmFpbGVkJyAmJiB0b3RhbCA9PT0gMCAmJiBhbGwgIT09IDAgJiYgdGhpcy5fZ2V0Q29tcG9uZW50KG5vdEZvdW5kKSB9XG4gICAgICAgIHsgc3RhdHVzICE9PSAnZmFpbGVkJyAmJiB0b3RhbCA9PT0gMCAmJiBhbGwgPT09IDAgJiYgdGhpcy5fZ2V0Q29tcG9uZW50KGVtcHR5KSB9XG4gICAgICAgIHsgc3RhdHVzICE9PSAnZmFpbGVkJyAmJiByZWNvcmRzICYmIHJlY29yZHMubGVuZ3RoID4gMCAmJiBsYXlvdXQgJiZcbiAgICAgICAgICA8U2Nyb2xscGFuZSB7IC4uLnRoaXMuX2dldFNjcm9sbHBhbmUoKSB9PlxuICAgICAgICAgICAgeyBSZWFjdC5jcmVhdGVFbGVtZW50KGxheW91dCwgdGhpcy5wcm9wcykgfVxuICAgICAgICAgIDwvU2Nyb2xscGFuZT5cbiAgICAgICAgfVxuICAgICAgICB7IHN0YXR1cyA9PT0gJ2xvYWRpbmcnICYmIHJlY29yZHMgJiYgcmVjb3Jkcy5sZW5ndGggPiAwICYmIHRoaXMuX2dldENvbXBvbmVudChBcHBlbmRpbmcpIH1cbiAgICAgICAgeyBmb290ZXIgJiYgdG90YWwgIT09IG51bGwgJiYgdG90YWwgIT09IDAgJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtaW5maW5pdGUtZm9vdGVyXCI+XG4gICAgICAgICAgICB7IFJlYWN0LmNyZWF0ZUVsZW1lbnQoZm9vdGVyLCB0aGlzLnByb3BzKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGltZW91dCA9IG51bGxcbiAgICB0aGlzLl9oYW5kbGVGZXRjaCgwLCB0cnVlKVxuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgY29uc3QgaWdub3JlZCA9IFsnY29uJywnZW1wdHknLCdsYXlvdXQnLCdmb290ZXInLCdyb3V0ZXInXVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhfLm9taXQodGhpcy5wcm9wcywgaWdub3JlZCkpLnJlZHVjZSgodXBkYXRlLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiB1cGRhdGUgfHwgIV8uaXNFcXVhbCh0aGlzLnByb3BzW2tleV0sIG5leHRQcm9wc1trZXldKVxuICAgIH0sIGZhbHNlKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgY2FjaGVLZXksIGV4Y2x1ZGVfaWRzLCBmaWx0ZXIsIHJlY29yZHMsIHNlbGVjdGVkLCBzb3J0LCBzdGF0dXMsIG9uVXBkYXRlU2VsZWN0ZWQgfSA9IHRoaXMucHJvcHNcbiAgICBpZih0aGlzLnRpbWVvdXQgJiYgc3RhdHVzICE9PSBwcmV2UHJvcHMuc3RhdHVzICYmIHByZXZQcm9wcy5zdGF0dXMgPT09ICdsb2FkaW5nJykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dClcbiAgICB9XG4gICAgaWYoY2FjaGVLZXkgIT09IHByZXZQcm9wcy5jYWNoZUtleSB8fCAhXy5pc0VxdWFsKHByZXZQcm9wcy5leGNsdWRlX2lkcywgZXhjbHVkZV9pZHMpICB8fCAhXy5pc0VxdWFsKHByZXZQcm9wcy5maWx0ZXIsIGZpbHRlcikgfHwgIV8uaXNFcXVhbChwcmV2UHJvcHMuc29ydCwgc29ydCkpIHtcbiAgICAgIHRoaXMuX2hhbmRsZUZldGNoKDAsIHRydWUpXG4gICAgfVxuICAgIGlmKHNlbGVjdGVkICE9PSBwcmV2UHJvcHMuc2VsZWN0ZWQgJiYgc2VsZWN0ZWQgJiYgcmVjb3Jkcykge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRSZWNvcmRzID0gcmVjb3Jkcy5maWx0ZXIocmVjb3JkID0+IF8uaW5jbHVkZXMoc2VsZWN0ZWQsIHJlY29yZC5pZCkpXG4gICAgICBpZihvblVwZGF0ZVNlbGVjdGVkKSBvblVwZGF0ZVNlbGVjdGVkKHNlbGVjdGVkUmVjb3JkcylcbiAgICB9XG4gIH1cblxuICBfZ2V0Q29tcG9uZW50KGNvbXBvbmVudCl7XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbihjb21wb25lbnQpID8gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHRoaXMucHJvcHMpIDogY29tcG9uZW50XG4gIH1cblxuICBfZ2V0U2Nyb2xscGFuZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25SZWFjaEJvdHRvbTogdGhpcy5faGFuZGxlRmV0Y2guYmluZCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVGZXRjaChza2lwID0gbnVsbCwgcmVsb2FkID0gZmFsc2UpIHtcbiAgICBjb25zdCB7IGVuZHBvaW50LCBleGNsdWRlX2lkcywgZmlsdGVyLCBuZXh0LCByZWNvcmRzLCBzb3J0LCB0b3RhbCwgb25GZXRjaCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGxvYWRlZCA9IHJlY29yZHMgPyByZWNvcmRzLmxlbmd0aCA6IDBcbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgICRwYWdlOiB0aGlzLl9nZXRQYWdpbmF0aW9uKHNraXApLFxuICAgICAgLi4uKGZpbHRlciA/IHsgJGZpbHRlcjogZmlsdGVyIH0gOiB7fSksXG4gICAgICAuLi4oc29ydCAmJiBzb3J0LmtleSA/IHsgJHNvcnQ6IChzb3J0Lm9yZGVyID09PSAnZGVzYycgPyAnLScgOiAnJykgKyBzb3J0LmtleSB9IDoge30pLFxuICAgICAgLi4uKGV4Y2x1ZGVfaWRzID8geyAkZXhjbHVkZV9pZHM6IGV4Y2x1ZGVfaWRzIH0gOiB7fSlcbiAgICB9XG4gICAgaWYob25GZXRjaCAmJiB0aGlzLl9nZXRNb3JlKG5leHQsIHNraXAsIHJlbG9hZCwgbG9hZGVkLCB0b3RhbCkpIG9uRmV0Y2goZW5kcG9pbnQsIHF1ZXJ5KVxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5faGFuZGxlRGVsYXkuYmluZCh0aGlzKSwgNTAwMClcbiAgfVxuXG4gIF9nZXRNb3JlKG5leHQsIHNraXAsIHJlbG9hZCwgbG9hZGVkLCB0b3RhbCkge1xuICAgIGlmKHJlbG9hZCkgcmV0dXJuIHRydWVcbiAgICBpZihuZXh0ICE9PSB1bmRlZmluZWQpIHJldHVybiBuZXh0ICE9PSBudWxsXG4gICAgaWYodG90YWwgPT09IHVuZGVmaW5lZCAmJiBza2lwID09PSAwKSByZXR1cm4gdHJ1ZVxuICAgIGlmKHRvdGFsICE9PSB1bmRlZmluZWQpIHJldHVybiBsb2FkZWQgPCB0b3RhbFxuICB9XG5cbiAgX2dldFBhZ2luYXRpb24oc2tpcCkge1xuICAgIGNvbnN0IHsgbmV4dCwgcmVjb3JkcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGxvYWRlZCA9IHJlY29yZHMgPyByZWNvcmRzLmxlbmd0aCA6IDBcbiAgICBpZihuZXh0KSByZXR1cm4geyBuZXh0IH1cbiAgICByZXR1cm4geyBza2lwOiBza2lwICE9PSBudWxsID8gc2tpcCA6IGxvYWRlZCB9XG4gIH1cblxuICBfaGFuZGxlRGVsYXkoKSB7XG4gICAgY29uc3QgeyBzdGF0dXMsIG9uRmV0Y2hEZWxheSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKHN0YXR1cyAhPT0gJ2xvYWRpbmcnKSByZXR1cm5cbiAgICBpZihvbkZldGNoRGVsYXkpIG9uRmV0Y2hEZWxheSgpXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCh0aGlzLl9oYW5kbGVUaW1lb3V0LmJpbmQodGhpcyksIDUwMDApXG4gIH1cblxuICBfaGFuZGxlVGltZW91dCgpIHtcbiAgICBjb25zdCB7IHN0YXR1cywgb25GZXRjaFRpbWVvdXQgfSA9IHRoaXMucHJvcHNcbiAgICBpZihzdGF0dXMgIT09ICdkZWx5ZWQnKSByZXR1cm5cbiAgICBpZihvbkZldGNoVGltZW91dCkgb25GZXRjaFRpbWVvdXQoKVxuICB9XG5cbiAgX2hhbmRsZVJlZnJlc2goKSB7XG4gICAgY29uc3QgeyBvbkZldGNoVGltZW91dCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKG9uRmV0Y2hUaW1lb3V0KSBvbkZldGNoVGltZW91dCgpXG4gIH1cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiBwcm9wcy5zZWxlY3RvcnMgPyBPYmplY3Qua2V5cyhwcm9wcy5zZWxlY3RvcnMpLnJlZHVjZSgobWFwcGVkLCBrZXkpID0+ICh7XG4gIC4uLm1hcHBlZCxcbiAgW2tleV06IHByb3BzLnNlbGVjdG9yc1trZXldKHN0YXRlLCBwcm9wcylcbn0pLCB7fSkgOiB7fVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoSW5maW5pdGUpXG4iXX0=