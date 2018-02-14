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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = function Token(_ref) {
  var value = _ref.value;
  return _react2.default.createElement(
    'div',
    { className: 'token' },
    value
  );
};

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
          filters = _props.filters,
          multiple = _props.multiple,
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
            _react2.default.createElement(
              'div',
              { className: 'reframe-toggle-list-header-search' },
              _react2.default.createElement(_searchbox2.default, this._getSearchbox())
            ),
            filters && _react2.default.createElement(
              'div',
              { className: 'reframe-toggle-list-header-icon', onClick: this._handleToggleFilter.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-sliders' })
            )
          ),
          multiple && chosen && _react2.default.createElement(
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
          _react2.default.createElement(_infinite2.default, this._getInfinite())
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          endpoint = _props2.endpoint,
          onLoad = _props2.onLoad,
          onReady = _props2.onReady;

      if (onLoad && defaultValue && defaultValue.length > 0) onLoad(endpoint, { $ids: defaultValue });
      if (onReady) onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          chosen = _props3.chosen,
          value = _props3.value,
          onChange = _props3.onChange;

      if (onChange && chosen && !_lodash2.default.isEqual(prevProps.chosen, chosen)) {
        var items = chosen.map(function (record) {
          return value ? _lodash2.default.get(record, value) : record;
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
      var onSetQuery = this.props.onSetQuery;

      return {
        onChange: onSetQuery
      };
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _props5 = this.props,
          defaultFilters = _props5.defaultFilters,
          endpoint = _props5.endpoint,
          exclude_ids = _props5.exclude_ids,
          query = _props5.query;

      var filter = _extends({}, defaultFilters, this.props.filter, {
        q: query
      });
      return {
        endpoint: endpoint,
        exclude_ids: exclude_ids,
        filter: filter,
        layout: this._getLayout()
      };
    }
  }, {
    key: '_getLayout',
    value: function _getLayout() {
      var _this3 = this;

      var _props6 = this.props,
          format = _props6.format,
          multiple = _props6.multiple,
          text = _props6.text;

      return function (_ref2) {
        var records = _ref2.records;
        return _react2.default.createElement(
          'div',
          { className: 'reframe-search-results' },
          records.map(function (record, index) {
            return _react2.default.createElement(
              'div',
              { key: 'record_' + index, className: _this3._getRecordClass(record), onClick: _this3._handleToggleRecord.bind(_this3, record) },
              multiple && _react2.default.createElement(
                'div',
                { className: 'reframe-search-item-icon' },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-' + _this3._getIcon(record) })
              ),
              _react2.default.createElement(_format2.default, _extends({ format: format }, record, { value: _lodash2.default.get(record, text) })),
              !multiple && _react2.default.createElement(
                'div',
                { className: 'reframe-search-item-icon' },
                _this3._getChecked(record) && _react2.default.createElement('i', { className: 'fa fa-fw fa-check' })
              )
            );
          })
        );
      };
    }
  }, {
    key: '_getRecordClass',
    value: function _getRecordClass(record) {
      var classes = ['reframe-search-item'];
      if (this._getChecked(record)) classes.push('checked');
      return classes.join(' ');
    }
  }, {
    key: '_getChecked',
    value: function _getChecked(record) {
      var chosen = this.props.chosen;

      var value = this.props.value || 'id';
      return _lodash2.default.find(chosen, _defineProperty({}, value, _lodash2.default.get(record, value)));
    }
  }, {
    key: '_getIcon',
    value: function _getIcon(record) {
      var checked = this._getChecked(record);
      if (checked) return 'check-circle';
      return 'circle-o';
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
      var _props7 = this.props,
          multiple = _props7.multiple,
          onToggleRecord = _props7.onToggleRecord;

      if (onToggleRecord) onToggleRecord(multiple, record);
    }
  }]);

  return ToggleList;
}(_react2.default.Component);

ToggleList.defaultProps = {
  defaultFilters: [],
  exclude_ids: [],
  format: Token,
  multiple: false,
  onReady: function onReady() {},
  onChange: function onChange(value) {}
};
exports.default = ToggleList;