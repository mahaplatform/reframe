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

var _modal_panel = require('../../components/modal_panel');

var _modal_panel2 = _interopRequireDefault(_modal_panel);

var _toggle_list = require('../toggle_list');

var _toggle_list2 = _interopRequireDefault(_toggle_list);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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
      return _react2.default.createElement(
        _modal_panel2.default,
        this._getPanel(),
        _react2.default.createElement(_toggle_list2.default, this._getToggleList())
      );
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var _props = this.props,
          label = _props.label,
          multiple = _props.multiple;

      return {
        title: 'Choose ' + label,
        leftItems: [{ label: 'Cancel', handler: this._handleCancel.bind(this) }],
        rightItems: multiple ? [{ label: 'Done', handler: this._handleDone.bind(this) }] : null
      };
    }
  }, {
    key: '_getToggleList',
    value: function _getToggleList() {
      var _props2 = this.props,
          endpoint = _props2.endpoint,
          format = _props2.format,
          multiple = _props2.multiple,
          options = _props2.options,
          selected = _props2.selected,
          text = _props2.text,
          value = _props2.value;

      var defaultValue = selected.map(function (item) {
        return _lodash2.default.get(item, value);
      });
      return {
        defaultValue: defaultValue,
        endpoint: endpoint,
        options: options,
        format: format,
        full: true,
        multiple: multiple,
        text: text,
        value: value,
        onChange: this._handleSelect.bind(this)
      };
    }
  }, {
    key: '_handleSelect',
    value: function _handleSelect(items) {
      var _props3 = this.props,
          multiple = _props3.multiple,
          selected = _props3.selected,
          onDone = _props3.onDone,
          onSelect = _props3.onSelect;

      onSelect(items);
      if (!multiple && !_lodash2.default.isEqual(items, selected)) onDone();
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.props.onCancel();
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }]);
  return Search;
}(_react2.default.Component);

Search.contextTypes = {};
Search.propTypes = {
  endpoint: _propTypes2.default.string,
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  selected: _propTypes2.default.array,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onCancel: _propTypes2.default.func,
  onDone: _propTypes2.default.func,
  onSelect: _propTypes2.default.func
};
exports.default = Search;