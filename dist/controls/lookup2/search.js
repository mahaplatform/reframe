'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
          selected = _props2.selected,
          text = _props2.text,
          value = _props2.value;

      var defaultValue = selected.map(function (item) {
        return item.id;
      });
      return {
        defaultValue: defaultValue,
        endpoint: endpoint,
        format: format,
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
  selected: _propTypes2.default.array,
  text: _propTypes2.default.string,
  onCancel: _propTypes2.default.func,
  onDone: _propTypes2.default.func,
  onSelect: _propTypes2.default.func
};
exports.default = Search;