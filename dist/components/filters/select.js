'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _search = require('../search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectPanel = function (_React$Component) {
  (0, _inherits3.default)(SelectPanel, _React$Component);

  function SelectPanel() {
    (0, _classCallCheck3.default)(this, SelectPanel);
    return (0, _possibleConstructorReturn3.default)(this, (SelectPanel.__proto__ || Object.getPrototypeOf(SelectPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectPanel, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-header', onClick: this._handleRemovePanel.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-icon' },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-title' },
            label
          ),
          _react2.default.createElement('div', { className: 'reframe-filters-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-body' },
          _react2.default.createElement(_search2.default, this._getSearch())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-footer' },
          _react2.default.createElement(
            'button',
            { className: 'ui red fluid button', onClick: this._handleReset.bind(this) },
            'Reset ',
            label
          )
        )
      );
    }
  }, {
    key: '_getSearch',
    value: function _getSearch() {
      var _props = this.props,
          endpoint = _props.endpoint,
          format = _props.format,
          label = _props.label,
          name = _props.name,
          multiple = _props.multiple,
          options = _props.options,
          sort = _props.sort,
          text = _props.text,
          value = _props.value,
          results = _props.results,
          onChange = _props.onChange;

      var onUpdate = onChange;
      return { endpoint: endpoint, format: format, label: label, name: name, multiple: multiple, options: options, results: results, sort: sort, text: text, value: value, onUpdate: onUpdate };
    }
  }, {
    key: '_handleRemovePanel',
    value: function _handleRemovePanel() {
      this.props.onRemovePanel();
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      var _props2 = this.props,
          multiple = _props2.multiple,
          name = _props2.name,
          onChange = _props2.onChange;

      var value = multiple ? [] : null;
      onChange(name, value);
    }
  }]);
  return SelectPanel;
}(_react2.default.Component);

SelectPanel.propTypes = {
  endpoint: _propTypes2.default.string,
  format: _propTypes2.default.any,
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  results: _propTypes2.default.object,
  sort: _propTypes2.default.object,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};

var Select = function (_React$Component2) {
  (0, _inherits3.default)(Select, _React$Component2);

  function Select() {
    (0, _classCallCheck3.default)(this, Select);
    return (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  (0, _createClass3.default)(Select, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          label = _props3.label,
          name = _props3.name,
          results = _props3.results;

      var count = results[name] ? results[name].length : 0;
      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-item', onClick: this._handleClick.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-title' },
          label
        ),
        count > 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-description' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-item-count' },
            count
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-icon' },
          _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
        )
      );
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      this.props.onAddPanel(_react2.default.createElement(SelectPanel, this.props));
    }
  }]);
  return Select;
}(_react2.default.Component);

Select.propTypes = {
  format: _propTypes2.default.func,
  label: _propTypes2.default.string,
  mutiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  results: _propTypes2.default.object,
  values: _propTypes2.default.object,
  onAddPanel: _propTypes2.default.func
};
exports.default = Select;