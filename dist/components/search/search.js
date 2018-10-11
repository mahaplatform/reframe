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

var _searchbox = require('../searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _jsonHash = require('json-hash');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dynamic = require('./dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Search = function (_React$Component) {
  (0, _inherits3.default)(Search, _React$Component);

  function Search() {
    (0, _classCallCheck3.default)(this, Search);
    return (0, _possibleConstructorReturn3.default)(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  (0, _createClass3.default)(Search, [{
    key: 'render',
    value: function render() {
      if (!this.props.endpoint) return _react2.default.createElement(_options2.default, this._getOptions());
      return _react2.default.createElement(
        'div',
        { className: 'reframe-search' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-search-header' },
          _react2.default.createElement(_searchbox2.default, this._getSearchbox())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-search-body' },
          _react2.default.createElement(_infinite2.default, this._getInfinite())
        )
      );
    }
  }, {
    key: '_getOptions',
    value: function _getOptions() {
      var _props = this.props,
          format = _props.format,
          name = _props.name,
          multiple = _props.multiple,
          options = _props.options,
          results = _props.results,
          onUpdate = _props.onUpdate;

      return { format: format, name: name, multiple: multiple, options: options, results: results, onUpdate: onUpdate };
    }
  }, {
    key: '_getSearchbox',
    value: function _getSearchbox() {
      var _props2 = this.props,
          label = _props2.label,
          prompt = _props2.prompt,
          onQuery = _props2.onQuery;

      return {
        prompt: prompt || 'Find a ' + label,
        onChange: onQuery
      };
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this2 = this;

      var _props3 = this.props,
          endpoint = _props3.endpoint,
          filter = _props3.filter,
          q = _props3.q,
          results = _props3.results,
          sort = _props3.sort;

      var cacheKey = (0, _jsonHash.digest)(results);
      return {
        cacheKey: cacheKey,
        endpoint: endpoint,
        filter: (0, _extends3.default)({}, filter, {
          q: q
        }),
        layout: function layout(props) {
          return _react2.default.createElement(_dynamic2.default, (0, _extends3.default)({}, _this2._getDynamic(), props));
        },
        sort: sort
      };
    }
  }, {
    key: '_getDynamic',
    value: function _getDynamic() {
      return this.props;
    }
  }]);
  return Search;
}(_react2.default.Component);

Search.propTypes = {
  filter: _propTypes2.default.object
};
Search.defaultProps = {
  filter: {}
};
exports.default = Search;