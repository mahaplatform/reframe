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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lookup = require('./lookup');

var _lookup2 = _interopRequireDefault(_lookup);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _toggle = require('./toggle');

var _toggle2 = _interopRequireDefault(_toggle);

var _daterange = require('./daterange');

var _daterange2 = _interopRequireDefault(_daterange);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overview = function (_React$Component) {
  (0, _inherits3.default)(Overview, _React$Component);

  function Overview() {
    (0, _classCallCheck3.default)(this, Overview);
    return (0, _possibleConstructorReturn3.default)(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).apply(this, arguments));
  }

  (0, _createClass3.default)(Overview, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          filters = _props.filters,
          onDone = _props.onDone;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-header' },
          onDone ? _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-icon', onClick: this._handleDone.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ) : _react2.default.createElement('div', { className: 'reframe-filters-header-icon' }),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-title' },
            'Filter Results'
          ),
          _react2.default.createElement('div', { className: 'reframe-filters-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-overview' },
            filters.map(function (filter, index) {
              if (filter.type === 'toggle') return _react2.default.createElement(_toggle2.default, (0, _extends3.default)({}, _this2._getToggle(filter), { key: 'filter_' + index }));
              if (filter.type === 'lookup') return _react2.default.createElement(_lookup2.default, (0, _extends3.default)({}, _this2._getLookup(filter), { key: 'filter_' + index }));
              if (filter.type === 'select') return _react2.default.createElement(_select2.default, (0, _extends3.default)({}, _this2._getSelect(filter), { key: 'filter_' + index }));
              if (filter.type === 'daterange') return _react2.default.createElement(_daterange2.default, (0, _extends3.default)({}, _this2._getDaterange(filter), { key: 'filter_' + index }));
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-footer' },
          _react2.default.createElement(
            'button',
            { className: 'ui red fluid button', onClick: this._handleReset.bind(this) },
            'Reset Filters'
          )
        )
      );
    }
  }, {
    key: '_getToggle',
    value: function _getToggle(filter) {
      var _props2 = this.props,
          results = _props2.results,
          onChange = _props2.onChange;
      var format = filter.format,
          label = filter.label,
          name = filter.name;

      return {
        format: format,
        label: label,
        name: name,
        results: results,
        onChange: onChange
      };
    }
  }, {
    key: '_getLookup',
    value: function _getLookup(filter) {
      var _props3 = this.props,
          results = _props3.results,
          onAddPanel = _props3.onAddPanel,
          onChange = _props3.onChange,
          onRemovePanel = _props3.onRemovePanel;
      var format = filter.format,
          label = filter.label,
          multiple = filter.multiple,
          options = filter.options;

      return {
        format: format,
        label: label,
        multiple: multiple,
        name: name,
        options: options,
        results: results,
        onAddPanel: onAddPanel,
        onChange: onChange,
        onRemovePanel: onRemovePanel
      };
    }
  }, {
    key: '_getSelect',
    value: function _getSelect(filter) {
      var _props4 = this.props,
          results = _props4.results,
          onAddPanel = _props4.onAddPanel,
          onChange = _props4.onChange,
          onRemovePanel = _props4.onRemovePanel;

      return (0, _extends3.default)({}, filter, {
        results: results,
        onAddPanel: onAddPanel,
        onChange: onChange,
        onRemovePanel: onRemovePanel
      });
    }
  }, {
    key: '_getDaterange',
    value: function _getDaterange(filter) {
      var _props5 = this.props,
          results = _props5.results,
          onAddPanel = _props5.onAddPanel,
          onChange = _props5.onChange,
          onRemovePanel = _props5.onRemovePanel;

      return (0, _extends3.default)({}, filter, {
        results: results,
        onAddPanel: onAddPanel,
        onChange: onChange,
        onRemovePanel: onRemovePanel
      });
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      this.props.onReset();
    }
  }]);
  return Overview;
}(_react2.default.Component);

Overview.propTypes = {
  filters: _propTypes2.default.array,
  results: _propTypes2.default.object,
  onAddPanel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onDone: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func,
  onReset: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};
exports.default = Overview;