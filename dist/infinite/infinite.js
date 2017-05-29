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
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-infinite' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-infinite-body', ref: 'infinite' },
          children
        ),
        status === 'loading' && _react2.default.createElement(
          'div',
          { className: 'reframe-infinite-footer' },
          _react2.default.createElement(
            'div',
            { className: 'ui active inverted dimmer' },
            _react2.default.createElement('div', { className: 'ui small loader' })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.listener = _lodash2.default.throttle(this._scrollListener.bind(this), 100);
      this._attachScrollListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          filter = _props.filter,
          sort = _props.sort,
          loaded = _props.loaded,
          records = _props.records,
          status = _props.status;

      if (!_lodash2.default.isEqual(prevProps.sort, sort) || !_lodash2.default.isEqual(prevProps.filter, filter)) {
        this._handleFetch(0);
      } else if (prevProps.status !== status) {
        if (status === 'loaded' && records.length > 0) {
          this._attachScrollListener();
        } else if (status === 'pending') {
          this._handleFetch(loaded);
        } else if (status === 'completed') {
          this._detachScrollListener();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._detachScrollListener();
    }
  }, {
    key: '_attachScrollListener',
    value: function _attachScrollListener() {
      var infinite = this.refs.infinite;

      infinite.addEventListener('scroll', this.listener, true);
      infinite.addEventListener('resize', this.listener, true);
      this._scrollListener();
    }
  }, {
    key: '_detachScrollListener',
    value: function _detachScrollListener() {
      var infinite = this.refs.infinite;

      infinite.removeEventListener('scroll', this._listener(), true);
      infinite.removeEventListener('resize', this._listener(), true);
    }
  }, {
    key: '_scrollListener',
    value: function _scrollListener() {
      var infinite = this.refs.infinite;
      var _props2 = this.props,
          records = _props2.records,
          status = _props2.status,
          total = _props2.total;

      var bottomPosition = infinite.scrollHeight - (infinite.scrollTop + infinite.offsetHeight);
      var percentRemaining = bottomPosition / infinite.scrollHeight * 100;
      if (percentRemaining <= 20 && status !== 'laoding' && records.length < total) {
        this._handleFetch(records.length);
      }
    }
  }, {
    key: '_handleFetch',
    value: function _handleFetch(loaded) {
      var _props3 = this.props,
          endpoint = _props3.endpoint,
          filter = _props3.filter,
          sort = _props3.sort,
          onFetch = _props3.onFetch;
      // const $filter = filter
      // const $page = { skip: loaded }
      // const $sort = (sort.order === 'desc' ? '-' : '') + sort.key

      var params = {}; //{ $filter, $page, $sort }
      onFetch(endpoint, params);
    }
  }]);

  return Infinite;
}(_react2.default.Component);

Infinite.PropTypes = {
  all: _propTypes2.default.number,
  endpoint: _propTypes2.default.string,
  records: _propTypes2.default.array,
  status: _propTypes2.default.string,
  total: _propTypes2.default.number,
  onFetch: _propTypes2.default.func
};
exports.default = Infinite;