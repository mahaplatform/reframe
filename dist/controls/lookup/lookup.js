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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTG9va3VwIiwicHJvcHMiLCJhY3RpdmUiLCJhZGRpbmciLCJjaG9zZW4iLCJmb3JtYXQiLCJwcm9tcHQiLCJ0YWJJbmRleCIsInRleHQiLCJ2YWx1ZSIsIl8iLCJnZXQiLCJfaGFuZGxlQmVnaW4iLCJiaW5kIiwiX2hhbmRsZUNsZWFyIiwiZGVmYXVsdFZhbHVlIiwiZW5kcG9pbnQiLCJvcHRpb25zIiwib25DaG9vc2UiLCJvbkxvYWQiLCJvblJlYWR5IiwiJGlkcyIsImZpbmQiLCJwcmV2UHJvcHMiLCJmb3JtIiwiY29udGV4dCIsImRpc2FibGVkIiwic3RhdHVzIiwib25DbGVhciIsInB1c2giLCJfZ2V0U2VhcmNoIiwiX2dldEZvcm0iLCJvbkJlZ2luIiwib25DaGFuZ2UiLCJvbkhpZGVGb3JtIiwib25DYW5jZWwiLCJwb3AiLCJvblN1Y2Nlc3MiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInByb3BUeXBlcyIsImJvb2wiLCJhbnkiLCJzdHJpbmciLCJvbmVPZlR5cGUiLCJmdW5jIiwiYXJyYXkiLCJxdWVyeSIsInJlc3VsdHMiLCJzZWFyY2giLCJzZWxlY3RlZCIsIm51bWJlciIsInNvcnQiLCJvbkJ1c3kiLCJvblR5cGUiLCJvbkxvb29rdXAiLCJvblNob3dGb3JtIiwiZGVmYXVsdFByb3BzIiwiVmFsdWVUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7NkJBd0RLO0FBQUEsbUJBQzRELEtBQUtDLEtBRGpFO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEsVUFDU0MsTUFEVCxVQUNTQSxNQURUO0FBQUEsVUFDaUJDLE1BRGpCLFVBQ2lCQSxNQURqQjtBQUFBLFVBQ3lCQyxNQUR6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X3Rva2VuJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEZvcm1hdCBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoJ1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9mb3JtJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBMb29rdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgZm9ybTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxuICAgIGFkZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hvc2VuOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgZW5kcG9pbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBQcm9wVHlwZXMuZnVuY1xuICAgIF0pLFxuICAgIGZvcm06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHByb21wdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBxdWVyeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZXN1bHRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZWxlY3RlZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0YXR1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQmVnaW46IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQnVzeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbGVhcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNob29zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25IaWRlRm9ybTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25UeXBlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uTG9vb2t1cDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZWFkeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TaG93Rm9ybTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBmb3JtYXQ6IFZhbHVlVG9rZW4sXG4gICAgc2VhcmNoOiB0cnVlLFxuICAgIHRhYkluZGV4OiAwLFxuICAgIHRleHQ6ICd0ZXh0JyxcbiAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICBvbkJ1c3k6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvblJlYWR5OiAoKSA9PiB7fVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlLCBhZGRpbmcsIGNob3NlbiwgZm9ybWF0LCBwcm9tcHQsIHRhYkluZGV4LCB0ZXh0IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBjaG9zZW4gPyBfLmdldChjaG9zZW4sIHRleHQpIDogJydcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWxvb2t1cC1maWVsZFwiIHRhYkluZGV4PXsgdGFiSW5kZXggfT5cbiAgICAgICAgeyBjaG9zZW4gJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbG9va3VwLXRva2VuXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUJlZ2luLmJpbmQodGhpcykgfT5cbiAgICAgICAgICAgIDxGb3JtYXQgeyAuLi5jaG9zZW4gfSBmb3JtYXQ9eyBmb3JtYXQgfSB2YWx1ZT17IHZhbHVlIH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7IGNob3NlbiAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAtZmllbGQtY2xlYXJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gY2lyY2xlIHJlbW92ZVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbGVhci5iaW5kKHRoaXMpIH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICB7ICFjaG9zZW4gJiZcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbG9va3VwLWZpZWxkLXByb21wdFwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVCZWdpbi5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICB7IHByb21wdCB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIGVuZHBvaW50LCBvcHRpb25zLCBvbkNob29zZSwgb25Mb2FkLCBvblJlYWR5IH0gPSB0aGlzLnByb3BzXG4gICAgaWYoIWRlZmF1bHRWYWx1ZSkgcmV0dXJuIG9uUmVhZHkoKVxuICAgIGlmKGVuZHBvaW50KSByZXR1cm4gb25Mb2FkKHsgJGlkczogWyBkZWZhdWx0VmFsdWUgXSB9LCBlbmRwb2ludClcbiAgICBjb25zdCBjaG9zZW4gPSBfLmZpbmQob3B0aW9ucywgeyB2YWx1ZTogZGVmYXVsdFZhbHVlIH0pXG4gICAgb25DaG9vc2UoY2hvc2VuKVxuICAgIG9uUmVhZHkoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgeyBhY3RpdmUsIGFkZGluZywgZGlzYWJsZWQsIHN0YXR1cywgb25DbGVhciwgb25SZWFkeSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKHByZXZQcm9wcy5zdGF0dXMgIT09IHN0YXR1cyAmJiBzdGF0dXMgPT09ICdzdWNjZXNzJykgb25SZWFkeSgpXG4gICAgaWYocHJldlByb3BzLmRpc2FibGVkICE9PSBkaXNhYmxlZCkgb25DbGVhcigpXG4gICAgaWYoIXByZXZQcm9wcy5hY3RpdmUgJiYgYWN0aXZlKSBmb3JtLnB1c2goPFNlYXJjaCB7IC4uLnRoaXMuX2dldFNlYXJjaCgpIH0gLz4pXG4gICAgaWYoIXByZXZQcm9wcy5hZGRpbmcgJiYgYWRkaW5nKSBmb3JtLnB1c2goPEZvcm0geyAuLi50aGlzLl9nZXRGb3JtKCkgfSAvPilcbiAgfVxuXG4gIF9nZXRTZWFyY2goKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHNcbiAgfVxuXG4gIF9oYW5kbGVCZWdpbigpIHtcbiAgICB0aGlzLnByb3BzLm9uQmVnaW4oKVxuICB9XG5cbiAgX2hhbmRsZUNsZWFyKCkge1xuICAgIGNvbnN0IHsgb25DbGVhciwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBvbkNsZWFyKClcbiAgICBvbkNoYW5nZSgpXG4gIH1cblxuICBfZ2V0Rm9ybSgpIHtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHsgdmFsdWUsIG9uQ2hvb3NlLCBvbkNoYW5nZSwgb25IaWRlRm9ybSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnByb3BzLmZvcm0sXG4gICAgICBvbkNhbmNlbDogKCkgPT4ge1xuICAgICAgICBvbkhpZGVGb3JtKClcbiAgICAgICAgZm9ybS5wb3AoKVxuICAgICAgfSxcbiAgICAgIG9uU3VjY2VzczogKGNob3NlbikgPT4ge1xuICAgICAgICBvbkNob29zZShjaG9zZW4pXG4gICAgICAgIG9uSGlkZUZvcm0oKVxuICAgICAgICBvbkNoYW5nZShfLmdldChjaG9zZW4sIHZhbHVlKSlcbiAgICAgICAgZm9ybS5wb3AoMilcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb29rdXBcbiJdfQ==