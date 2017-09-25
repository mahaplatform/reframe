'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
    _classCallCheck(this, Infinite);

    return _possibleConstructorReturn(this, (Infinite.__proto__ || Object.getPrototypeOf(Infinite)).apply(this, arguments));
  }

  _createClass(Infinite, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          delayed = _props.delayed,
          empty = _props.empty,
          failure = _props.failure,
          layout = _props.layout,
          loading = _props.loading,
          records = _props.records,
          status = _props.status,
          timeout = _props.timeout;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-infinite' },
        status === 'loading' && !records && this._getComponent(loading),
        status === 'delayed' && this._getComponent(delayed),
        status === 'timeout' && this._getComponent(timeout),
        status === 'failed' && this._getComponent(failure),
        status !== 'failed' && records && records.length === 0 && this._getComponent(empty),
        status !== 'failed' && records && records.length > 0 && _react2.default.createElement(
          _scrollpane2.default,
          this._getScrollpane(),
          _lodash2.default.isFunction(layout) ? _react2.default.createElement(layout, this.props) : layout,
          status === 'loading' && _react2.default.createElement(
            'div',
            { className: 'reframe-infinite-loader' },
            _react2.default.createElement(
              'div',
              { className: 'ui active inverted dimmer' },
              _react2.default.createElement('div', { className: 'ui small loader' })
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.timeout = null;
      this._handleFetch(0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          cacheKey = _props2.cacheKey,
          filter = _props2.filter,
          sort = _props2.sort,
          status = _props2.status;

      if (this.timeout && status !== prevProps.status && prevProps.status === 'loading') {
        clearTimeout(this.timeout);
      }
      if (cacheKey !== prevProps.cacheKey || !_lodash2.default.isEqual(prevProps.filter, filter) || !_lodash2.default.isEqual(prevProps.sort, sort)) {
        this._handleFetch(0);
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
          filter = _props3.filter,
          records = _props3.records,
          sort = _props3.sort,
          total = _props3.total,
          onFetch = _props3.onFetch;

      var loaded = records ? records.length : 0;
      var $page = { skip: skip !== null ? skip : loaded };
      var query = { $page: $page };
      if (filter) query.$filter = filter;
      if (sort.key) query.$sort = (sort.order === 'desc' ? '-' : '') + sort.key;
      if (skip === 0 || total === null || loaded < total) onFetch(endpoint, query);
      this.timeout = setTimeout(this._handleDelay.bind(this), 3000);
    }
  }, {
    key: '_handleDelay',
    value: function _handleDelay() {
      if (this.props.status !== 'loading') return;
      this.props.onFetchDelay();
      this.timeout = setTimeout(this._handleTimeout.bind(this), 3000);
    }
  }, {
    key: '_handleTimeout',
    value: function _handleTimeout() {
      if (this.props.status !== 'delyed') return;
      this.props.onFetchTimeout();
    }
  }, {
    key: '_handleRefresh',
    value: function _handleRefresh() {
      this.props.onFetchTimeout();
    }
  }]);

  return Infinite;
}(_react2.default.Component);

Infinite.propTypes = {
  all: _propTypes2.default.number,
  cacheKey: _propTypes2.default.string,
  delayed: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  empty: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  endpoint: _propTypes2.default.string,
  failure: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  filter: _propTypes2.default.object,
  layout: _propTypes2.default.func,
  loading: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  records: _propTypes2.default.array,
  sort: _propTypes2.default.shape({
    key: _propTypes2.default.string,
    order: _propTypes2.default.string
  }),
  status: _propTypes2.default.string,
  timeout: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  total: _propTypes2.default.number,
  onFetch: _propTypes2.default.func,
  onFetchDelay: _propTypes2.default.func,
  onFetchTimeout: _propTypes2.default.func
};
Infinite.defaultProps = {
  cacheKey: null,
  delayed: _results.Delayed,
  empty: _results.Empty,
  failure: _results.Failure,
  filter: {},
  loading: _results.Loading,
  sort: {
    key: null,
    order: null
  },
  timeout: _results.Timeout
};
exports.default = Infinite;