'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _control = require('../control');

var _control2 = _interopRequireDefault(_control);

var _fields = require('./fields');

var _fields2 = _interopRequireDefault(_fields);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
  }

  _createClass(Field, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          include = _props.include,
          instructions = _props.instructions,
          label = _props.label,
          show = _props.show,
          type = _props.type;

      var error = this._getError();
      if (!include || !show) return null;
      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        label && _react2.default.createElement(
          'label',
          null,
          label
        ),
        instructions && _react2.default.createElement(
          'div',
          { className: 'instructions' },
          instructions
        ),
        type === 'fields' ? _react2.default.createElement(_fields2.default, this._getFields()) : _react2.default.createElement(_control2.default, this._getControl()),
        error && _react2.default.createElement(
          'div',
          { className: 'error-message' },
          error
        )
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var required = this.props.required;

      var error = this._getError();
      return ['field'].concat(_toConsumableArray(error ? ['error'] : []), _toConsumableArray(required ? ['required'] : [])).join(' ');
    }
  }, {
    key: '_getError',
    value: function _getError() {
      var _props2 = this.props,
          errors = _props2.errors,
          name = _props2.name;

      return errors && errors[name] ? errors[name][0] : null;
    }
  }, {
    key: '_getFields',
    value: function _getFields() {
      var _props3 = this.props,
          fields = _props3.fields,
          onSubmit = _props3.onSubmit,
          onUpdateData = _props3.onUpdateData;

      return {
        fields: fields,
        onChange: this._handleUpdateData.bind(this),
        onSubmit: onSubmit,
        onUpdateData: onUpdateData
      };
    }
  }, {
    key: '_getControl',
    value: function _getControl() {
      var _props4 = this.props,
          action = _props4.action,
          columns = _props4.columns,
          component = _props4.component,
          data = _props4.data,
          disabled = _props4.disabled,
          endpoint = _props4.endpoint,
          filters = _props4.filters,
          form = _props4.form,
          format = _props4.format,
          label = _props4.label,
          name = _props4.name;
      var _props5 = this.props,
          options = _props5.options,
          prompt = _props5.prompt,
          prefix = _props5.prefix,
          sort = _props5.sort,
          suffix = _props5.suffix,
          type = _props5.type,
          text = _props5.text,
          token = _props5.token,
          value = _props5.value;
      var onSubmit = this.props.onSubmit;

      var defaultValue = _lodash2.default.get(data, name);
      return {
        action: action,
        columns: columns,
        component: component,
        defaultValue: defaultValue,
        disabled: disabled,
        endpoint: endpoint,
        filters: filters,
        form: form,
        format: format,
        label: label,
        options: options,
        prompt: prompt,
        prefix: prefix,
        sort: sort,
        suffix: suffix,
        text: text,
        token: token,
        type: type,
        value: value,
        onBusy: this._handleBusy.bind(this),
        onChange: this._handleUpdateData.bind(this),
        onReady: this._handleReady.bind(this),
        onSubmit: onSubmit
      };
    }
  }, {
    key: '_handleBusy',
    value: function _handleBusy() {
      this.props.onBusy(this.props.name);
    }
  }, {
    key: '_handleReady',
    value: function _handleReady() {
      this.props.onReady(this.props.name);
    }
  }, {
    key: '_handleUpdateData',
    value: function _handleUpdateData(value) {
      this.props.onUpdateData(this.props.name, value);
    }
  }]);

  return Field;
}(_react2.default.Component);

Field.propTypes = {
  action: _propTypes2.default.string,
  columns: _propTypes2.default.array,
  data: _propTypes2.default.object,
  endpoint: _propTypes2.default.string,
  errors: _propTypes2.default.object,
  fields: _propTypes2.default.array,
  include: _propTypes2.default.bool,
  instructions: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string.isRequired,
  options: _propTypes2.default.array,
  required: _propTypes2.default.bool,
  type: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  show: _propTypes2.default.bool,
  onBusy: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
Field.defaultProps = {
  columns: [],
  data: {},
  errors: {},
  fields: [],
  include: true,
  options: [],
  required: false,
  show: true,
  onBusy: function onBusy() {},
  onReady: function onReady() {},
  onUpdateData: function onUpdateData() {}
};
exports.default = Field;