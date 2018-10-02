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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _searchbox = require('../../components/searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

var _infinite = require('../../components/infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Options = function (_React$Component) {
  (0, _inherits3.default)(Options, _React$Component);

  function Options() {
    (0, _classCallCheck3.default)(this, Options);
    return (0, _possibleConstructorReturn3.default)(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  (0, _createClass3.default)(Options, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          options = _props.options,
          selected = _props.selected,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-lookup-panel-results' },
        options.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { key: 'result_' + (option.id || index), className: 'reframe-lookup-panel-result', onClick: _this2._handleChoose.bind(_this2, option) },
            _react2.default.createElement(
              'div',
              { className: 'reframe-lookup-panel-result-label' },
              _react2.default.createElement(_format2.default, (0, _extends3.default)({}, option, { format: format, value: _lodash2.default.get(option, text) }))
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-lookup-panel-result-icon' },
              index === selected ? _react2.default.createElement('i', { className: 'fa fa-fw fa-check' }) : null
            )
          );
        })
      );
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(chosen) {
      var _props2 = this.props,
          onChoose = _props2.onChoose,
          onChange = _props2.onChange,
          value = _props2.value;

      onChoose(chosen);
      onChange(_lodash2.default.get(chosen, value));
      this.context.form.pop();
    }
  }]);
  return Options;
}(_react2.default.Component);

Options.contextTypes = {
  form: _propTypes2.default.object
};
Options.propTypes = {
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.string]),
  options: _propTypes2.default.array,
  selected: _propTypes2.default.number,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func
};

var Dynamic = function (_React$Component2) {
  (0, _inherits3.default)(Dynamic, _React$Component2);

  function Dynamic() {
    (0, _classCallCheck3.default)(this, Dynamic);
    return (0, _possibleConstructorReturn3.default)(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dynamic, [{
    key: 'render',
    value: function render() {
      var records = this.props.records;

      return records ? _react2.default.createElement(Options, this._getOptions()) : null;
    }
  }, {
    key: '_getOptions',
    value: function _getOptions() {
      var _props3 = this.props,
          format = _props3.format,
          selected = _props3.selected,
          records = _props3.records,
          text = _props3.text,
          value = _props3.value,
          onChoose = _props3.onChoose,
          onChange = _props3.onChange;

      return {
        format: format,
        selected: selected,
        options: records,
        text: text,
        value: value,
        onChoose: onChoose,
        onChange: onChange
      };
    }
  }]);
  return Dynamic;
}(_react2.default.Component);

Dynamic.propTypes = {
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.string]),
  records: _propTypes2.default.array,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  selected: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.number]),
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func
};

var Container = function (_React$Component3) {
  (0, _inherits3.default)(Container, _React$Component3);

  function Container() {
    (0, _classCallCheck3.default)(this, Container);
    return (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  (0, _createClass3.default)(Container, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          endpoint = _props4.endpoint,
          label = _props4.label,
          form = _props4.form,
          search = _props4.search;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-lookup-panel' },
        search && _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-panel-search' },
          _react2.default.createElement(_searchbox2.default, this._getSearchbox())
        ),
        endpoint && _react2.default.createElement(_infinite2.default, this._getInfinite()),
        !endpoint && _react2.default.createElement(Options, this._getStaticOptions()),
        form && _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-panel-add' },
          _react2.default.createElement(
            'div',
            { className: 'ui fluid red button', onClick: this._handleAdd.bind(this) },
            'Add ',
            label
          )
        )
      );
    }
  }, {
    key: '_getSearchbox',
    value: function _getSearchbox() {
      var _props5 = this.props,
          label = _props5.label,
          onQuery = _props5.onQuery;

      return {
        prompt: 'Find a ' + label,
        onChange: onQuery
      };
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this5 = this;

      var _props6 = this.props,
          cacheKey = _props6.cacheKey,
          endpoint = _props6.endpoint,
          q = _props6.q,
          sort = _props6.sort,
          text = _props6.text,
          value = _props6.value;

      return {
        cacheKey: cacheKey,
        endpoint: endpoint,
        filter: { q: q },
        layout: function layout(props) {
          return _react2.default.createElement(Dynamic, (0, _extends3.default)({}, _this5.props, props));
        },
        sort: sort,
        text: text,
        value: value
      };
    }
  }, {
    key: '_handleAdd',
    value: function _handleAdd() {
      this.props.onShowForm();
    }
  }, {
    key: '_getStaticOptions',
    value: function _getStaticOptions() {
      var _props7 = this.props,
          options = _props7.options,
          q = _props7.q;

      return (0, _extends3.default)({}, this.props, {
        options: options.filter(function (options) {
          return q === null || options.text.search(q) >= 0;
        })
      });
    }
  }]);
  return Container;
}(_react2.default.Component);

Container.contextTypes = {
  modal: _propTypes2.default.object
};
Container.propTypes = {
  cacheKey: _propTypes2.default.string,
  endpoint: _propTypes2.default.string,
  form: _propTypes2.default.object,
  label: _propTypes2.default.string,
  options: _propTypes2.default.array,
  q: _propTypes2.default.string,
  search: _propTypes2.default.bool,
  sort: _propTypes2.default.string,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onQuery: _propTypes2.default.func,
  onShowForm: _propTypes2.default.func
};
exports.default = Container;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiT3B0aW9ucyIsInByb3BzIiwiZm9ybWF0Iiwib3B0aW9ucyIsInNlbGVjdGVkIiwidGV4dCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiaWQiLCJfaGFuZGxlQ2hvb3NlIiwiYmluZCIsIl8iLCJnZXQiLCJjaG9zZW4iLCJvbkNob29zZSIsIm9uQ2hhbmdlIiwidmFsdWUiLCJjb250ZXh0IiwiZm9ybSIsInBvcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImZ1bmMiLCJzdHJpbmciLCJhcnJheSIsIm51bWJlciIsIkR5bmFtaWMiLCJyZWNvcmRzIiwiX2dldE9wdGlvbnMiLCJDb250YWluZXIiLCJlbmRwb2ludCIsImxhYmVsIiwic2VhcmNoIiwiX2dldFNlYXJjaGJveCIsIl9nZXRJbmZpbml0ZSIsIl9nZXRTdGF0aWNPcHRpb25zIiwiX2hhbmRsZUFkZCIsIm9uUXVlcnkiLCJwcm9tcHQiLCJjYWNoZUtleSIsInEiLCJzb3J0IiwiZmlsdGVyIiwibGF5b3V0Iiwib25TaG93Rm9ybSIsIm1vZGFsIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OzZCQW9CSztBQUFBOztBQUFBLG1CQUNxQyxLQUFLQyxLQUQxQztBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLE9BRFQsVUFDU0EsT0FEVDtBQUFBLFVBQ2tCQyxRQURsQixVQUNrQkEsUUFEbEI7QUFBQSxVQUM0QkMsSUFENUIsVUFDNEJBLElBRDVCOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSw4QkFBZjtBQUNJRixnQkFBUUcsR0FBUixDQUFZLFVBQUNDLE1BQUQs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QixRQUFNbUIsb0JBQVVNLE1BVEM7QUFVakJiLFNBQU9PLG9CQUFVTSxNQVZBO0FBV2pCZCxZQUFVUSxvQkFBVUssSUFYSDtBQVlqQmQsWUFBVVMsb0JBQVVLLElBWkg7QUFhakJlLFdBQVNwQixvQkFBVUssSUFiRjtBQWNqQnNCLGNBQVkzQixvQkFBVUs7QUFkTCxDO2tCQTBFTk8sUyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IFNlYXJjaGJveCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NlYXJjaGJveCdcbmltcG9ydCBJbmZpbml0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2luZmluaXRlJ1xuaW1wb3J0IEZvcm1hdCBmcm9tICcuLi8uLi91dGlscy9mb3JtYXQnXG5cbmNsYXNzIE9wdGlvbnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgZm9ybTogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMuZnVuYyxcbiAgICAgIFByb3BUeXBlcy5zdHJpbmdcbiAgICBdKSxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaG9vc2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtYXQsIG9wdGlvbnMsIHNlbGVjdGVkLCB0ZXh0IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAtcGFuZWwtcmVzdWx0c1wiPlxuICAgICAgICB7IG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2ByZXN1bHRfJHtvcHRpb24uaWQgfHwgaW5kZXh9YH0gY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAtcGFuZWwtcmVzdWx0XCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUNob29zZS5iaW5kKHRoaXMsIG9wdGlvbikgfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAtcGFuZWwtcmVzdWx0LWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxGb3JtYXQgeyAuLi5vcHRpb24gfSBmb3JtYXQ9eyBmb3JtYXQgfSB2YWx1ZT17IF8uZ2V0KG9wdGlvbiwgdGV4dCkgfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbG9va3VwLXBhbmVsLXJlc3VsdC1pY29uXCI+XG4gICAgICAgICAgICAgIHsgaW5kZXggPT09IHNlbGVjdGVkID8gPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtY2hlY2tcIiAvPiA6IG51bGwgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2hhbmRsZUNob29zZShjaG9zZW4pIHtcbiAgICBjb25zdCB7IG9uQ2hvb3NlLCBvbkNoYW5nZSwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBvbkNob29zZShjaG9zZW4pXG4gICAgb25DaGFuZ2UoXy5nZXQoY2hvc2VuLCB2YWx1ZSkpXG4gICAgdGhpcy5jb250ZXh0LmZvcm0ucG9wKClcbiAgfVxuXG59XG5cbmNsYXNzIER5bmFtaWMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICAgIFByb3BUeXBlcy5lbGVtZW50LFxuICAgICAgUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBQcm9wVHlwZXMuc3RyaW5nXG4gICAgXSksXG4gICAgcmVjb3JkczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmFycmF5LFxuICAgICAgUHJvcFR5cGVzLm51bWJlclxuICAgIF0pLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNob29zZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJlY29yZHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKHJlY29yZHMpID8gPE9wdGlvbnMgeyAuLi50aGlzLl9nZXRPcHRpb25zKCkgfSAvPiA6IG51bGxcbiAgfVxuXG4gIF9nZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0LCBzZWxlY3RlZCwgcmVjb3JkcywgdGV4dCwgdmFsdWUsIG9uQ2hvb3NlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtYXQsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIG9wdGlvbnM6IHJlY29yZHMsXG4gICAgICB0ZXh0LFxuICAgICAgdmFsdWUsXG4gICAgICBvbkNob29zZSxcbiAgICAgIG9uQ2hhbmdlXG4gICAgfVxuICB9XG5cbn1cblxuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIG1vZGFsOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNhY2hlS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGZvcm06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHE6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2VhcmNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hvb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblF1ZXJ5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNob3dGb3JtOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZW5kcG9pbnQsIGxhYmVsLCBmb3JtLCBzZWFyY2ggfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWxvb2t1cC1wYW5lbFwiPlxuICAgICAgICB7IHNlYXJjaCAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAtcGFuZWwtc2VhcmNoXCI+XG4gICAgICAgICAgICA8U2VhcmNoYm94IHsgLi4udGhpcy5fZ2V0U2VhcmNoYm94KCkgfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIHsgZW5kcG9pbnQgJiYgPEluZmluaXRlIHsgLi4udGhpcy5fZ2V0SW5maW5pdGUoKSB9IC8+IH1cbiAgICAgICAgeyAhZW5kcG9pbnQgJiYgPE9wdGlvbnMgeyAuLi50aGlzLl9nZXRTdGF0aWNPcHRpb25zKCkgfSAvPiB9XG4gICAgICAgIHsgZm9ybSAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAtcGFuZWwtYWRkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZsdWlkIHJlZCBidXR0b25cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlQWRkLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICBBZGQge2xhYmVsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9nZXRTZWFyY2hib3goKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgb25RdWVyeSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBwcm9tcHQ6IGBGaW5kIGEgJHtsYWJlbH1gLFxuICAgICAgb25DaGFuZ2U6IG9uUXVlcnlcbiAgICB9XG4gIH1cblxuICBfZ2V0SW5maW5pdGUoKSB7XG4gICAgY29uc3QgeyBjYWNoZUtleSwgZW5kcG9pbnQsIHEsIHNvcnQsIHRleHQsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhY2hlS2V5LFxuICAgICAgZW5kcG9pbnQsXG4gICAgICBmaWx0ZXI6IHsgcSB9LFxuICAgICAgbGF5b3V0OiAocHJvcHMpID0+IDxEeW5hbWljIHsgLi4udGhpcy5wcm9wcyB9IHsgLi4ucHJvcHMgfSAvPixcbiAgICAgIHNvcnQsXG4gICAgICB0ZXh0LFxuICAgICAgdmFsdWVcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQWRkKCkge1xuICAgIHRoaXMucHJvcHMub25TaG93Rm9ybSgpXG4gIH1cblxuICBfZ2V0U3RhdGljT3B0aW9ucygpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHEgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMuZmlsdGVyKG9wdGlvbnMgPT4gcSA9PT0gbnVsbCB8fCBvcHRpb25zLnRleHQuc2VhcmNoKHEpID49IDApXG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyXG4iXX0=