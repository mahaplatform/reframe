'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactTransitionGroup = require('react-transition-group');

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
          _react2.default.createElement(_format2.default, _extends({}, chosen, { format: format, value: value }))
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
      var modal = this.context.modal;
      var _props3 = this.props,
          active = _props3.active,
          adding = _props3.adding,
          disabled = _props3.disabled,
          status = _props3.status,
          onClear = _props3.onClear,
          onReady = _props3.onReady;

      if (prevProps.status !== status && status === 'success') onReady();
      if (prevProps.disabled !== disabled) onClear();
      if (!prevProps.active && active) modal.push(_react2.default.createElement(_search2.default, this._getSearch()));
      if (!prevProps.adding && adding) modal.push(_react2.default.createElement(_form2.default, this._getForm()));
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
      var modal = this.context.modal;
      var _props5 = this.props,
          form = _props5.form,
          value = _props5.value,
          onChoose = _props5.onChoose,
          onChange = _props5.onChange,
          onHideForm = _props5.onHideForm;

      return _extends({}, form, {
        onCancel: function onCancel() {
          onHideForm();
          modal.pop();
        },
        onSuccess: function onSuccess(chosen) {
          onChoose(chosen);
          onHideForm();
          onChange(_lodash2.default.get(chosen, value));
          modal.pop(2);
        }
      });
    }
  }]);

  return Lookup;
}(_react2.default.Component);

Lookup.contextTypes = {
  modal: _propTypes2.default.object
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