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

var _value_token = require('./value_token');

var _value_token2 = _interopRequireDefault(_value_token);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _form = require('../../components/form');

var _form2 = _interopRequireDefault(_form);

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
      var _props = this.props,
          active = _props.active,
          adding = _props.adding,
          chosen = _props.chosen,
          format = _props.format,
          prompt = _props.prompt,
          tabIndex = _props.tabIndex,
          text = _props.text;

      var value = chosen ? _lodash2.default.get(chosen, text) : '';
      return _react2.default.createElement(
        'div',
        { className: 'reframe-lookup-field', tabIndex: tabIndex },
        chosen && _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-token', onClick: this._handleBegin.bind(this) },
          _react2.default.createElement(_format2.default, (0, _extends3.default)({}, chosen, { format: format, value: value }))
        ),
        chosen && _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-field-clear' },
          _react2.default.createElement('i', { className: 'icon circle remove', onClick: this._handleClear.bind(this) })
        ),
        !chosen && _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-field-prompt', onClick: this._handleBegin.bind(this) },
          prompt
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          endpoint = _props2.endpoint,
          options = _props2.options,
          onChoose = _props2.onChoose,
          onLoad = _props2.onLoad,
          onReady = _props2.onReady;

      if (!defaultValue) return onReady();
      if (endpoint) return onLoad({ $ids: [defaultValue] }, endpoint);
      var chosen = _lodash2.default.find(options, { value: defaultValue });
      onChoose(chosen);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var form = this.context.form;
      var _props3 = this.props,
          active = _props3.active,
          adding = _props3.adding,
          disabled = _props3.disabled,
          status = _props3.status,
          onClear = _props3.onClear,
          onReady = _props3.onReady;

      if (prevProps.status !== status && status === 'success') onReady();
      if (prevProps.disabled !== disabled) onClear();
      if (!prevProps.active && active) form.push(_react2.default.createElement(_search2.default, this._getSearch()));
      if (!prevProps.adding && adding) form.push(_react2.default.createElement(_form2.default, this._getForm()));
    }
  }, {
    key: '_getSearch',
    value: function _getSearch() {
      return this.props;
    }
  }, {
    key: '_handleBegin',
    value: function _handleBegin() {
      this.props.onBegin();
    }
  }, {
    key: '_handleClear',
    value: function _handleClear() {
      var _props4 = this.props,
          onClear = _props4.onClear,
          onChange = _props4.onChange;

      onClear();
      onChange();
    }
  }, {
    key: '_getForm',
    value: function _getForm() {
      var form = this.context.form;
      var _props5 = this.props,
          value = _props5.value,
          onChoose = _props5.onChoose,
          onChange = _props5.onChange,
          onHideForm = _props5.onHideForm;

      return (0, _extends3.default)({}, this.props.form, {
        onCancel: function onCancel() {
          onHideForm();
          form.pop();
        },
        onSuccess: function onSuccess(chosen) {
          onChoose(chosen);
          onHideForm();
          onChange(_lodash2.default.get(chosen, value));
          form.pop(2);
        }
      });
    }
  }]);
  return Lookup;
}(_react2.default.Component);

Lookup.contextTypes = {
  form: _propTypes2.default.object
};
Lookup.propTypes = {
  active: _propTypes2.default.bool,
  adding: _propTypes2.default.bool,
  chosen: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.any,
  endpoint: _propTypes2.default.string,
  format: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  form: _propTypes2.default.object,
  options: _propTypes2.default.array,
  prompt: _propTypes2.default.string,
  query: _propTypes2.default.string,
  results: _propTypes2.default.array,
  search: _propTypes2.default.bool,
  selected: _propTypes2.default.number,
  sort: _propTypes2.default.string,
  status: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onBegin: _propTypes2.default.func,
  onBusy: _propTypes2.default.func,
  onClear: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onHideForm: _propTypes2.default.func,
  onType: _propTypes2.default.func,
  onLoad: _propTypes2.default.func,
  onLoookup: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onShowForm: _propTypes2.default.func
};
Lookup.defaultProps = {
  defaultValue: null,
  disabled: false,
  format: _value_token2.default,
  search: true,
  tabIndex: 0,
  text: 'text',
  value: 'value',
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {}
};
exports.default = Lookup;