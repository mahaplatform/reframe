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

var _filters = require('../filters');

var _filters2 = _interopRequireDefault(_filters);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _results = require('./results');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

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
          filters = _props.filters,
          records = _props.records;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-body' },
          filters && _react2.default.createElement(_header2.default, this._getHeader()),
          records && _react2.default.createElement(_results.Results, this.props),
          endpoint && _react2.default.createElement(_infinite2.default, this._getInfinite())
        ),
        _react2.default.createElement('div', { className: 'reframe-collection-canvas', onClick: this._handleToggleFilter.bind(this) }),
        filters && _react2.default.createElement(
          'div',
          { className: 'reframe-collection-filter' },
          _react2.default.createElement(_filters2.default, this._getFilters())
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          data = _props2.data,
          defaultSort = _props2.defaultSort,
          onSetParams = _props2.onSetParams,
          onSetRecords = _props2.onSetRecords;

      var filter = this.props.filter || {};
      var sort = defaultSort || { key: 'created_at', order: 'desc' };
      onSetParams(filter, sort);
      if (data) onSetRecords(data);
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var classes = ['reframe-collection'];
      if (this.props.filtering) classes.push('filtering');
      return classes.join(' ');
    }
  }, {
    key: '_getHeader',
    value: function _getHeader() {
      var _props3 = this.props,
          onSetQuery = _props3.onSetQuery,
          onToggleFilter = _props3.onToggleFilter;

      return {
        onSetQuery: onSetQuery,
        onToggleFilter: onToggleFilter
      };
    }
  }, {
    key: '_getFilters',
    value: function _getFilters() {
      var _props4 = this.props,
          entity = _props4.entity,
          filters = _props4.filters,
          filter = _props4.filter,
          onSetFilter = _props4.onSetFilter;

      var article = _lodash2.default.includes(['a', 'e', 'i', 'o'], entity[0]) ? 'an' : 'a';
      return {
        fields: filters,
        filters: filter,
        prompt: 'Find ' + article + ' ' + entity,
        onChange: onSetFilter
      };
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this2 = this;

      var _props5 = this.props,
          cacheKey = _props5.cacheKey,
          empty = _props5.empty,
          endpoint = _props5.endpoint,
          failure = _props5.failure,
          filter = _props5.filter,
          loading = _props5.loading,
          q = _props5.q,
          sort = _props5.sort;

      return {
        cacheKey: cacheKey,
        endpoint: endpoint,
        filter: _extends({}, filter, { q: q }),
        loading: loading,
        empty: _lodash2.default.isPlainObject(empty) ? _react2.default.createElement(_results.Empty, this.props) : empty,
        failure: failure,
        layout: function layout(props) {
          return _react2.default.createElement(_results.Results, _extends({}, _this2.props, props));
        },
        sort: sort
      };
    }
  }, {
    key: '_handleToggleFilter',
    value: function _handleToggleFilter() {
      this.props.onToggleFilter();
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
  empty: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.shape({
    icon: _propTypes2.default.string,
    message: _propTypes2.default.string,
    modal: _propTypes2.default.func
  })]),
  failure: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  filtering: _propTypes2.default.bool,
  filter: _propTypes2.default.object,
  filters: _propTypes2.default.array,
  handler: _propTypes2.default.func,
  layout: _propTypes2.default.func,
  loading: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  link: _propTypes2.default.string,
  modal: _propTypes2.default.string,
  q: _propTypes2.default.string,
  records: _propTypes2.default.array,
  recordTasks: _propTypes2.default.array,
  sort: _propTypes2.default.object,
  onFetch: _propTypes2.default.func,
  onSetFilter: _propTypes2.default.func,
  onSetParams: _propTypes2.default.func,
  onSetQuery: _propTypes2.default.func,
  onSetRecords: _propTypes2.default.func,
  onToggleFilter: _propTypes2.default.func
};
Collection.defaultProps = {
  cacheKey: null,
  entity: 'record'
};
exports.default = Collection;