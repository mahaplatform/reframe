'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lookup = function (_React$Component) {
  (0, _inherits3.default)(Lookup, _React$Component);

  function Lookup() {
    (0, _classCallCheck3.default)(this, Lookup);
    return (0, _possibleConstructorReturn3.default)(this, (Lookup.__proto__ || Object.getPrototypeOf(Lookup)).apply(this, arguments));
  }

  (0, _createClass3.default)(Lookup, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          placeholder = _props.placeholder,
          selected = _props.selected,
          tabIndex = _props.tabIndex,
          format = _props.format,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { className: this._getClass(), tabIndex: tabIndex },
        _react2.default.createElement(
          'div',
          { className: 'reframe-lookup2-items', onClick: this._handleBegin.bind(this) },
          selected.map(function (item, index) {
            return _react2.default.createElement(
              'div',
              { className: 'reframe-lookup2-item', key: 'selected_' + index },
              _react2.default.createElement(
                'div',
                { className: 'reframe-lookup2-item-content' },
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-lookup2-item-token' },
                  _react2.default.createElement(_format2.default, (0, _extends3.default)({}, item, { format: format, value: _lodash2.default.get(item, text) }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-lookup2-item-remove', onClick: _this2._handleRemove.bind(_this2, index) },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-times-circle' })
                )
              )
            );
          }),
          selected.length === 0 && placeholder && _react2.default.createElement(
            'div',
            { className: 'reframe-lookup2-placeholder' },
            placeholder
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          endpoint = _props2.endpoint,
          multiple = _props2.multiple,
          value = _props2.value,
          onFetch = _props2.onFetch,
          onReady = _props2.onReady;

      var query = value === 'id' ? { $ids: defaultValue } : { $filter: (0, _defineProperty3.default)({}, value, { $in: defaultValue }) };
      if (defaultValue && (!multiple || defaultValue.length > 0)) onFetch(endpoint, query);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var form = this.context.form;
      var _props3 = this.props,
          active = _props3.active,
          selected = _props3.selected;

      if (!prevProps.active && active) form.push(_react2.default.createElement(_search2.default, this._getSearch()));
      if (prevProps.active && !active) form.pop();
      if (!_lodash2.default.isEqual(selected, prevProps.selected)) {
        this._handleChange();
      }
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var multiple = this.props.multiple;

      var classes = ['reframe-lookup2-field'];
      if (multiple) classes.push('multiple');
      return classes.join(' ');
    }
  }, {
    key: '_getSearch',
    value: function _getSearch() {
      var _props4 = this.props,
          endpoint = _props4.endpoint,
          format = _props4.format,
          label = _props4.label,
          multiple = _props4.multiple,
          options = _props4.options,
          selected = _props4.selected,
          text = _props4.text,
          value = _props4.value;

      return {
        endpoint: endpoint,
        format: format,
        label: label,
        multiple: multiple,
        options: options,
        selected: selected,
        text: text,
        value: value,
        onCancel: this._handleEnd.bind(this),
        onDone: this._handleEnd.bind(this),
        onSelect: this._handleSelect.bind(this)
      };
    }
  }, {
    key: '_getValue',
    value: function _getValue() {
      var _props5 = this.props,
          multiple = _props5.multiple,
          selected = _props5.selected,
          value = _props5.value;

      var values = selected.map(function (item) {
        return _lodash2.default.get(item, value);
      });
      return multiple ? values : values[0];
    }
  }, {
    key: '_handleBegin',
    value: function _handleBegin() {
      this.props.onBegin();
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd() {
      this.props.onEnd();
    }
  }, {
    key: '_handleRemove',
    value: function _handleRemove(index, e) {
      e.stopPropagation();
      this.props.onRemove(index);
    }
  }, {
    key: '_handleSelect',
    value: function _handleSelect(items) {
      var onSelect = this.props.onSelect;

      onSelect(items);
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      var onChange = this.props.onChange;

      return onChange(this._getValue());
    }
  }]);
  return Lookup;
}(_react2.default.Component);

Lookup.contextTypes = {
  form: _propTypes2.default.object
};
Lookup.propTypes = {
  active: _propTypes2.default.any,
  defaultValue: _propTypes2.default.any,
  endpoint: _propTypes2.default.string,
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  placeholder: _propTypes2.default.string,
  selected: _propTypes2.default.array,
  text: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  value: _propTypes2.default.string,
  onBegin: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  onFetch: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onRemove: _propTypes2.default.func,
  onSelect: _propTypes2.default.func
};
Lookup.defaultProps = {
  format: function format(_ref) {
    var value = _ref.value;
    return _react2.default.createElement(
      'div',
      { className: 'reframe-lookup2-token' },
      value
    );
  },
  label: 'Record',
  multiple: false,
  placeholder: null,
  value: 'value',
  text: 'text'
};
exports.default = Lookup;