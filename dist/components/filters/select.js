'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _search = require('../search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectPanel = function (_React$Component) {
  _inherits(SelectPanel, _React$Component);

  function SelectPanel() {
    _classCallCheck(this, SelectPanel);

    return _possibleConstructorReturn(this, (SelectPanel.__proto__ || Object.getPrototypeOf(SelectPanel)).apply(this, arguments));
  }

  _createClass(SelectPanel, [{
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
          filter = _props.filter,
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
      return { endpoint: endpoint, filter: filter, format: format, label: label, name: name, multiple: multiple, options: options, results: results, sort: sort, text: text, value: value, onUpdate: onUpdate };
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
  filter: _propTypes2.default.object,
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
  _inherits(Select, _React$Component2);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
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
  filter: _propTypes2.default.object,
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