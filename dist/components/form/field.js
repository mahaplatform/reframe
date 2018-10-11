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

var Field = function (_React$Component) {
  (0, _inherits3.default)(Field, _React$Component);

  function Field() {
    (0, _classCallCheck3.default)(this, Field);
    return (0, _possibleConstructorReturn3.default)(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
  }

  (0, _createClass3.default)(Field, [{
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
      var classes = ['field'];
      if (required) classes.push('required');
      if (error) classes.push('error');
      return classes.join(' ');
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
          data = _props4.data,
          name = _props4.name;

      var defaultValue = _lodash2.default.get(data, name);
      return (0, _extends3.default)({}, this.props, {
        defaultValue: defaultValue,
        onBusy: this._handleBusy.bind(this),
        onChange: this._handleUpdateData.bind(this),
        onReady: this._handleReady.bind(this)
      });
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
  tabIndex: _propTypes2.default.number,
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