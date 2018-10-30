'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lookup = function (_React$Component) {
  _inherits(Lookup, _React$Component);

  function Lookup() {
    _classCallCheck(this, Lookup);

    return _possibleConstructorReturn(this, (Lookup.__proto__ || Object.getPrototypeOf(Lookup)).apply(this, arguments));
  }

  _createClass(Lookup, [{
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
                  _react2.default.createElement(_format2.default, _extends({}, item, { format: format, value: _lodash2.default.get(item, text) }))
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

      var query = value === 'id' ? { $ids: defaultValue } : { $filter: _defineProperty({}, value, { $in: defaultValue }) };
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