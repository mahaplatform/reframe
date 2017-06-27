'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = require('../list');

var _list2 = _interopRequireDefault(_list);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          query = _props.query,
          results = _props.results,
          status = _props.status;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-search' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-search-form' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-search-input' },
            _react2.default.createElement(
              'div',
              { className: 'ui input' },
              _react2.default.createElement('input', { type: 'text', placeholder: 'Find a ' + label + '...', onChange: this._handleType.bind(this), value: query, ref: 'query' })
            ),
            query.length > 0 && _react2.default.createElement('i', { className: 'remove circle icon', onClick: this._handleResetSearch.bind(this) })
          )
        ),
        status === 'loading' && !results && _react2.default.createElement(
          'div',
          { className: 'reframe-search-loader' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-loader' },
            _react2.default.createElement(
              'div',
              { className: 'ui active inverted dimmer' },
              _react2.default.createElement(
                'div',
                { className: 'ui large text loader' },
                'Loading'
              )
            )
          )
        ),
        results && results.length === 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-search-empty' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-search-empty-message' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: 'circular remove icon' })
            ),
            _react2.default.createElement(
              'h3',
              null,
              'No Results Found'
            ),
            _react2.default.createElement(
              'p',
              null,
              'No ',
              label,
              ' match your query'
            )
          )
        ),
        results && results.length > 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-search-results' },
          _react2.default.createElement(_list2.default, this._getList())
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props2 = this.props,
          sort = _props2.sort,
          endpoint = _props2.endpoint,
          onLookup = _props2.onLookup;

      this._handleLookup = _lodash2.default.throttle(onLookup.bind(this), 500);
      setTimeout(function () {
        return _this2.refs.query.focus();
      }, 500);
      onLookup(endpoint, { $filter: { q: '' }, $sort: sort });
    }
  }, {
    key: '_handleType',
    value: function _handleType(event) {
      var _props3 = this.props,
          sort = _props3.sort,
          endpoint = _props3.endpoint;

      var q = event.target.value;
      var query = { $filter: { q: q }, $sort: sort };
      this.props.onType(q);
      this._handleLookup(endpoint, query);
    }
  }, {
    key: '_handleResetSearch',
    value: function _handleResetSearch() {
      var _props4 = this.props,
          sort = _props4.sort,
          endpoint = _props4.endpoint,
          onType = _props4.onType,
          onLookup = _props4.onLookup;

      onType('');
      onLookup(endpoint, { $filter: { q: '' }, $sort: sort });
    }
  }, {
    key: '_getList',
    value: function _getList() {
      var _props5 = this.props,
          results = _props5.results,
          itemMap = _props5.itemMap;

      return {
        items: itemMap(results)
      };
    }
  }]);

  return Search;
}(_react2.default.Component);

Search.PropTypes = {
  status: _propTypes2.default.string,
  results: _propTypes2.default.array,
  itemMap: _propTypes2.default.func
};
exports.default = Search;