'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LookupPanel = function (_React$Component) {
  _inherits(LookupPanel, _React$Component);

  function LookupPanel() {
    _classCallCheck(this, LookupPanel);

    return _possibleConstructorReturn(this, (LookupPanel.__proto__ || Object.getPrototypeOf(LookupPanel)).apply(this, arguments));
  }

  _createClass(LookupPanel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          label = _props.label,
          multiple = _props.multiple,
          name = _props.name,
          options = _props.options,
          results = _props.results;

      var value = results[name];
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
          options.map(function (option, index) {
            return _react2.default.createElement(
              'div',
              { className: 'reframe-filters-item', key: 'filter_item_' + index, onClick: _this2._handleClick.bind(_this2, option.id) },
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-content' },
                _react2.default.createElement(format, { option: option })
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-icon' },
                multiple && _lodash2.default.includes(value, option.id) && _react2.default.createElement('i', { className: 'fa fa-check' }),
                !multiple && option.id === value && _react2.default.createElement('i', { className: 'fa fa-check' })
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-footer', onClick: this._handleReset.bind(this) },
          'Reset ',
          label
        )
      );
    }
  }, {
    key: '_getValue',
    value: function _getValue(id) {
      var _props2 = this.props,
          multiple = _props2.multiple,
          name = _props2.name,
          results = _props2.results;

      if (!multiple) return results[name] !== id ? id : null;
      if (_lodash2.default.includes(results[name], id)) return _lodash2.default.without(results[name], id);
      return [].concat(_toConsumableArray(results[name]), [id]);
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(id) {
      var _props3 = this.props,
          name = _props3.name,
          onChange = _props3.onChange;

      onChange(name, this._getValue(id));
    }
  }, {
    key: '_handleRemovePanel',
    value: function _handleRemovePanel() {
      this.props.onRemovePanel();
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      var _props4 = this.props,
          multiple = _props4.multiple,
          name = _props4.name,
          onChange = _props4.onChange;

      var value = multiple ? [] : null;
      onChange(name, value);
    }
  }]);

  return LookupPanel;
}(_react2.default.Component);

LookupPanel.propTypes = {
  format: _propTypes2.default.function,
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  results: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};

var Lookup = function (_React$Component2) {
  _inherits(Lookup, _React$Component2);

  function Lookup() {
    _classCallCheck(this, Lookup);

    return _possibleConstructorReturn(this, (Lookup.__proto__ || Object.getPrototypeOf(Lookup)).apply(this, arguments));
  }

  _createClass(Lookup, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-item', onClick: this._handleClick.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-title' },
          label
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
      this.props.onAddPanel(_react2.default.createElement(LookupPanel, this._getLookupPanel()));
    }
  }, {
    key: '_getLookupPanel',
    value: function _getLookupPanel() {
      var _props5 = this.props,
          format = _props5.format,
          label = _props5.label,
          multiple = _props5.multiple,
          name = _props5.name,
          options = _props5.options,
          results = _props5.results,
          onChange = _props5.onChange,
          onRemovePanel = _props5.onRemovePanel;

      return { format: format, label: label, multiple: multiple, name: name, options: options, results: results, onChange: onChange, onRemovePanel: onRemovePanel };
    }
  }]);

  return Lookup;
}(_react2.default.Component);

Lookup.propTypes = {
  format: _propTypes2.default.func,
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  results: _propTypes2.default.object,
  value: _propTypes2.default.number,
  onAddPanel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};
Lookup.defaultProps = {
  mutiple: false
};
exports.default = Lookup;