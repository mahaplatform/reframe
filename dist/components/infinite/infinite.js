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