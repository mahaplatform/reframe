'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _searchbox = require('../../components/searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

var _infinite = require('../../components/infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _filters = require('../../components/filters');

var _filters2 = _interopRequireDefault(_filters);

var _token = require('../../components/token');

var _token2 = _interopRequireDefault(_token);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _results = require('./results');

var _results2 = _interopRequireDefault(_results);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToggleList = function (_React$Component) {
  _inherits(ToggleList, _React$Component);

  function ToggleList() {
    _classCallCheck(this, ToggleList);

    return _possibleConstructorReturn(this, (ToggleList.__proto__ || Object.getPrototypeOf(ToggleList)).apply(this, arguments));
  }

  _createClass(ToggleList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          chosen = _props.chosen,
          endpoint = _props.endpoint,
          filters = _props.filters,
          multiple = _props.multiple,
          options = _props.options,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        _react2.default.createElement('div', { className: 'reframe-toggle-list-overlay', onClick: this._handleToggleFilter.bind(this) }),
        filters && _react2.default.createElement(
          'div',
          { className: 'reframe-toggle-list-filter' },
          _react2.default.createElement(_filters2.default, this._getFilters())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-toggle-list-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-toggle-list-header' },
            _react2.default.createElement(_searchbox2.default, this._getSearchbox())
          ),
          multiple && chosen && chosen.length > 0 && _react2.default.createElement(
            'div',
            { className: 'reframe-toggle-list-summary' },
            chosen.map(function (record, index) {
              return _react2.default.createElement(
                'div',
                { key: 'summary_token_' + index, className: 'reframe-toggle-list-summary-token' },
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-toggle-list-summary-token-label' },
                  _lodash2.default.get(record, text)
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-toggle-list-summary-token-remove', onClick: _this2._handleToggleRecord.bind(_this2, record) },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-times' })
                )
              );
            })
          ),
          endpoint && _react2.default.createElement(_infinite2.default, this._getInfinite()),
          options && _react2.default.createElement(_results2.default, _extends({ records: options }, this._getResults()))
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady;

      if (defaultValue && defaultValue.length > 0) this._handleLoad();
      if (onReady) onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          chosen = _props3.chosen,
          full = _props3.full,
          value = _props3.value,
          onChange = _props3.onChange;

      if (onChange && chosen && !_lodash2.default.isEqual(prevProps.chosen, chosen)) {
        var items = chosen.map(function (record) {
          return full ? record : _lodash2.default.get(record, value);
        });
        onChange(items);
      }
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var classes = ['reframe-toggle-list'];
      if (this.props.filtering) classes.push('filtering');
      return classes.join(' ');
    }
  }, {
    key: '_getFilters',
    value: function _getFilters() {
      var _props4 = this.props,
          filters = _props4.filters,
          filter = _props4.filter,
          onSetFilter = _props4.onSetFilter;

      return {
        filters: filters,
        values: filter,
        onUpdate: onSetFilter
      };
    }
  }, {
    key: '_getSearchbox',
    value: function _getSearchbox() {
      var _props5 = this.props,
          filters = _props5.filters,
          filtering = _props5.filtering,
          onSetQuery = _props5.onSetQuery;

      return {
        icon: filters ? filtering ? 'times' : 'sliders' : null,
        onIcon: this._handleToggleFilter.bind(this),
        onChange: onSetQuery
      };
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this3 = this;

      var _props6 = this.props,
          defaultFilters = _props6.defaultFilters,
          endpoint = _props6.endpoint,
          exclude_ids = _props6.exclude_ids,
          query = _props6.query;

      var filter = _extends({}, defaultFilters, this.props.filter, {
        q: query
      });
      return {
        endpoint: endpoint,
        exclude_ids: exclude_ids,
        filter: filter,
        layout: function layout(props) {
          return _react2.default.createElement(_results2.default, _extends({}, _this3._getResults(), props));
        }
      };
    }
  }, {
    key: '_getResults',
    value: function _getResults() {
      var _props7 = this.props,
          format = _props7.format,
          chosen = _props7.chosen,
          multiple = _props7.multiple,
          text = _props7.text,
          value = _props7.value;

      return {
        format: format,
        chosen: chosen,
        multiple: multiple,
        text: text,
        value: value,
        onToggleRecord: this._handleToggleRecord.bind(this)
      };
    }
  }, {
    key: '_handleLoad',
    value: function _handleLoad() {
      var _props8 = this.props,
          defaultValue = _props8.defaultValue,
          endpoint = _props8.endpoint,
          options = _props8.options,
          value = _props8.value,
          onLoad = _props8.onLoad,
          onSetChosen = _props8.onSetChosen;

      if (endpoint) return onLoad(endpoint, { $ids: defaultValue });
      if (!options) return;
      var chosen = options.filter(function (option) {
        return _lodash2.default.includes(defaultValue, _lodash2.default.get(option, value));
      });
      onSetChosen(chosen);
    }
  }, {
    key: '_handleToggleFilter',
    value: function _handleToggleFilter() {
      var onToggleFilter = this.props.onToggleFilter;

      if (onToggleFilter) onToggleFilter();
    }
  }, {
    key: '_handleToggleRecord',
    value: function _handleToggleRecord(record) {
      var _props9 = this.props,
          multiple = _props9.multiple,
          onToggleRecord = _props9.onToggleRecord;

      if (onToggleRecord) onToggleRecord(multiple, record);
    }
  }]);

  return ToggleList;
}(_react2.default.Component);

ToggleList.propTypes = {
  chosen: _propTypes2.default.any,
  defaultFilters: _propTypes2.default.array,
  defaultValue: _propTypes2.default.array,
  endpoint: _propTypes2.default.string,
  exclude_ids: _propTypes2.default.array,
  filtering: _propTypes2.default.bool,
  filters: _propTypes2.default.array,
  full: _propTypes2.default.bool,
  format: _propTypes2.default.any,
  multiple: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onLoad: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onSetChosen: _propTypes2.default.func,
  onSetFilter: _propTypes2.default.func,
  onSetQuery: _propTypes2.default.func,
  onToggleFilter: _propTypes2.default.func,
  onToggleRecord: _propTypes2.default.func
};
ToggleList.defaultProps = {
  defaultFilters: [],
  exclude_ids: [],
  format: _token2.default,
  full: false,
  multiple: false,
  value: 'value',
  text: 'text',
  onReady: function onReady() {},
  onChange: function onChange(value) {}
};
exports.default = ToggleList;