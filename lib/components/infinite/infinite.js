'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _scrollpane = require('../scrollpane');

var _scrollpane2 = _interopRequireDefault(_scrollpane);

var _results = require('./results');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Infinite = function (_React$Component) {
  _inherits(Infinite, _React$Component);

  function Infinite() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Infinite);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Infinite.__proto__ || Object.getPrototypeOf(Infinite)).call.apply(_ref, [this].concat(args))), _this), _this.timeout = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Infinite, [{
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
        status === 'loading' && records && records.length > 0 && this._getComponent(_results.Loader),
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
      this._handleFetch(0);
    }

    // shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    //   return ['all','cacheKey','exclude_ids','filter','records','sort','status','selected','total'].reduce((update, key) => {
    //     return update || !_.isEqual(this.props[key], nextProps[key])
    //   }, false)
    // }

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
        this._handleFetch(0);
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
      var _props3 = this.props,
          endpoint = _props3.endpoint,
          exclude_ids = _props3.exclude_ids,
          filter = _props3.filter,
          records = _props3.records,
          sort = _props3.sort,
          total = _props3.total,
          onFetch = _props3.onFetch;

      var loaded = records ? records.length : 0;
      var query = _extends({
        $page: { skip: skip !== null ? skip : loaded }
      }, filter ? { $filter: filter } : {}, sort && sort.key ? { $sort: (sort.order === 'desc' ? '-' : '') + sort.key } : {}, exclude_ids ? { $exclude_ids: exclude_ids } : {});
      if (onFetch && (skip === 0 || total === null || total === undefined || loaded < total)) onFetch(endpoint, query);
      this.timeout = setTimeout(this._handleDelay.bind(this), 3000);
    }
  }, {
    key: '_handleDelay',
    value: function _handleDelay() {
      var _props4 = this.props,
          status = _props4.status,
          onFetchDelay = _props4.onFetchDelay;

      if (status !== 'loading') return;
      if (onFetchDelay) onFetchDelay();
      this.timeout = setTimeout(this._handleTimeout.bind(this), 3000);
    }
  }, {
    key: '_handleTimeout',
    value: function _handleTimeout() {
      var _props5 = this.props,
          status = _props5.status,
          onFetchTimeout = _props5.onFetchTimeout;

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

Infinite.defaultProps = {
  cacheKey: null,
  delayed: _results.Delayed,
  empty: _results.Empty,
  failure: _results.Failure,
  filter: {},
  footer: null,
  header: null,
  loading: _results.Loading,
  notFound: _results.NotFound,
  sort: {
    key: null,
    order: null
  },
  timeout: _results.Timeout,
  onUpdateSelected: function onUpdateSelected(ids) {}
};
exports.default = Infinite;