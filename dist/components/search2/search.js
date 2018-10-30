'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _searchbox = require('../searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dynamic = require('./dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicToken = function BasicToken(_ref) {
  var value = _ref.value;
  return _react2.default.createElement(
    'div',
    { className: 'token' },
    value
  );
};

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
  }

  _createClass(Search, [{
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
          text = _props.text,
          value = _props.value,
          options = _props.options,
          onChoose = _props.onChoose;

      return { format: format, text: text, value: value, options: options, onChoose: onChoose };
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
          cacheKey = _props3.cacheKey,
          empty = _props3.empty,
          endpoint = _props3.endpoint,
          exclude_ids = _props3.exclude_ids,
          notFound = _props3.notFound,
          q = _props3.q;

      return {
        cacheKey: cacheKey,
        empty: empty,
        endpoint: endpoint,
        exclude_ids: exclude_ids,
        filter: { q: q },
        layout: function layout(props) {
          return _react2.default.createElement(_dynamic2.default, _extends({}, _this2._getDynamic(), props));
        },
        notFound: notFound
      };
    }
  }, {
    key: '_getDynamic',
    value: function _getDynamic() {
      var _props4 = this.props,
          format = _props4.format,
          text = _props4.text,
          value = _props4.value,
          onChoose = _props4.onChoose;

      return { format: format, text: text, value: value, onChoose: onChoose };
    }
  }]);

  return Search;
}(_react2.default.Component);

Search.propTypes = {
  cacheKey: _propTypes2.default.string,
  endpoint: _propTypes2.default.string,
  exclude_ids: _propTypes2.default.array,
  empty: _propTypes2.default.func,
  format: _propTypes2.default.any,
  label: _propTypes2.default.string,
  notFound: _propTypes2.default.func,
  options: _propTypes2.default.array,
  prompt: _propTypes2.default.string,
  q: _propTypes2.default.string,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onQuery: _propTypes2.default.func,
  onChoose: _propTypes2.default.func
};
Search.defaultProps = {
  format: BasicToken,
  cacheKey: null,
  empty: null,
  notFound: null,
  onChoose: function onChoose() {}
};
exports.default = Search;