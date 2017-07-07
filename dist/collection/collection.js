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

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _filter = require('../filter');

var _filter2 = _interopRequireDefault(_filter);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _results = require('./results');

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
          filters = _props.filters,
          records = _props.records;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-layout' },
          filters && _react2.default.createElement(
            'div',
            { className: 'reframe-collection-header' },
            _react2.default.createElement(_filter2.default, this._getFilter())
          ),
          records ? _react2.default.createElement(_results.Results, this.props) : _react2.default.createElement(_infinite2.default, this._getInfinite())
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          data = _props2.data,
          onSetRecords = _props2.onSetRecords;

      var filter = this.props.filter || {};
      var sort = this.props.sort || { key: 'created_at', order: 'desc' };
      this.props.onSetParams(filter, sort);
      if (data) onSetRecords(data);
    }
  }, {
    key: '_getFilter',
    value: function _getFilter() {
      var _props3 = this.props,
          filters = _props3.filters,
          params = _props3.params,
          onFilter = _props3.onFilter;

      return {
        fields: filters,
        filters: params.filter,
        onChange: onFilter
      };
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this2 = this;

      var _props4 = this.props,
          endpoint = _props4.endpoint,
          params = _props4.params,
          loading = _props4.loading,
          empty = _props4.empty,
          failure = _props4.failure;
      var filter = params.filter,
          sort = params.sort;

      return {
        endpoint: endpoint,
        filter: filter,
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
    key: '_handleFetch',
    value: function _handleFetch() {
      var skip = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var _props5 = this.props,
          endpoint = _props5.endpoint,
          records = _props5.records,
          params = _props5.params,
          total = _props5.total,
          onFetch = _props5.onFetch;

      if (!endpoint) return;
      var filter = params.filter,
          sort = params.sort;

      var loaded = records.length;
      var $page = { skip: skip !== null ? skip : loaded };
      var query = { $page: $page };
      if (filter) query.$filter = filter;
      if (sort.key) query.$sort = (sort.order === 'desc' ? '-' : '') + sort.key;
      if (skip === 0 || loaded < total) onFetch(endpoint, query);
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
Collection.PropTypes = {
  all: _propTypes2.default.number,
  columns: _propTypes2.default.array,
  data: _propTypes2.default.array,
  entity: _propTypes2.default.object,
  empty: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.shape({
    icon: _propTypes2.default.string,
    message: _propTypes2.default.string,
    modal: _propTypes2.default.func
  })]),
  failure: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  filter: _propTypes2.default.object,
  filters: _propTypes2.default.array,
  handler: _propTypes2.default.func,
  layout: _propTypes2.default.func,
  loading: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]),
  link: _propTypes2.default.string,
  modal: _propTypes2.default.string,
  params: _propTypes2.default.object,
  records: _propTypes2.default.array,
  sort: _propTypes2.default.object,
  total: _propTypes2.default.number
};
Collection.defaultProps = {
  entity: 'record'
};
exports.default = Collection;