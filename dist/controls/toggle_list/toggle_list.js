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

var _searchbox = require('../../components/searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

var _infinite = require('../../components/infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _filters = require('../../components/filters');

var _filters2 = _interopRequireDefault(_filters);

var _token = require('../../components/token');

var _token2 = _interopRequireDefault(_token);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _results = require('./results');

var _results2 = _interopRequireDefault(_results);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToggleList = function (_React$Component) {
  (0, _inherits3.default)(ToggleList, _React$Component);

  function ToggleList() {
    (0, _classCallCheck3.default)(this, ToggleList);
    return (0, _possibleConstructorReturn3.default)(this, (ToggleList.__proto__ || Object.getPrototypeOf(ToggleList)).apply(this, arguments));
  }

  (0, _createClass3.default)(ToggleList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          chosen = _props.chosen,
          endpoint = _props.endpoint,
          filters = _props.filters,
          multiple = _props.multiple,
          options = _props.options,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        _react2.default.createElement('div', { className: 'reframe-toggle-list-overlay', onClick: this._handleToggleFilter.bind(this) }),
        filters && _react2.default.createElement(
          'div',
          { className: 'reframe-toggle-list-filter' },
          _react2.default.createElement(_filters2.default, this._getFilters())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-toggle-list-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-toggle-list-header' },
            _react2.default.createElement(_searchbox2.default, this._getSearchbox())
          ),
          multiple && chosen && _react2.default.createElement(
            'div',
            { className: 'reframe-toggle-list-summary' },
            chosen.map(function (record, index) {
              return _react2.default.createElement(
                'div',
                { key: 'summary_token_' + index, className: 'reframe-toggle-list-summary-token' },
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-toggle-list-summary-token-label' },
                  _lodash2.default.get(record, text)
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-toggle-list-summary-token-remove', onClick: _this2._handleToggleRecord.bind(_this2, record) },
                  _react2.default.createElement('i', { className: 'fa fa-fw fa-times' })
                )
              );
            })
          ),
          endpoint && _react2.default.createElement(_infinite2.default, this._getInfinite()),
          options && _react2.default.createElement(_results2.default, (0, _extends3.default)({ records: options }, this._getResults()))
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady;

      if (defaultValue && defaultValue.length > 0) this._handleLoad();
      if (onReady) onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          chosen = _props3.chosen,
          full = _props3.full,
          value = _props3.value,
          onChange = _props3.onChange;

      if (onChange && chosen && !_lodash2.default.isEqual(prevProps.chosen, chosen)) {
        var items = chosen.map(function (record) {
          return full ? record : _lodash2.default.get(record, value);
        });
        onChange(items);
      }
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var classes = ['reframe-toggle-list'];
      if (this.props.filtering) classes.push('filtering');
      return classes.join(' ');
    }
  }, {
    key: '_getFilters',
    value: function _getFilters() {
      var _props4 = this.props,
          filters = _props4.filters,
          filter = _props4.filter,
          onSetFilter = _props4.onSetFilter;

      return {
        filters: filters,
        values: filter,
        onUpdate: onSetFilter
      };
    }
  }, {
    key: '_getSearchbox',
    value: function _getSearchbox() {
      var _props5 = this.props,
          filters = _props5.filters,
          filtering = _props5.filtering,
          onSetQuery = _props5.onSetQuery;

      return {
        icon: filters ? filtering ? 'times' : 'sliders' : null,
        onIcon: this._handleToggleFilter.bind(this),
        onChange: onSetQuery
      };
    }
  }, {
    key: '_getInfinite',
    value: function _getInfinite() {
      var _this3 = this;

      var _props6 = this.props,
          defaultFilters = _props6.defaultFilters,
          endpoint = _props6.endpoint,
          exclude_ids = _props6.exclude_ids,
          chosen = _props6.chosen,
          query = _props6.query;

      var filter = (0, _extends3.default)({}, defaultFilters, this.props.filter, {
        q: query
      });
      return {
        endpoint: endpoint,
        exclude_ids: exclude_ids,
        filter: filter,
        chosen: chosen,
        layout: function layout(props) {
          return _react2.default.createElement(_results2.default, (0, _extends3.default)({}, _this3._getResults(), props));
        }
      };
    }
  }, {
    key: '_getResults',
    value: function _getResults() {
      var _props7 = this.props,
          format = _props7.format,
          chosen = _props7.chosen,
          multiple = _props7.multiple,
          text = _props7.text,
          value = _props7.value;

      return {
        format: format,
        chosen: chosen,
        multiple: multiple,
        text: text,
        value: value,
        onToggleRecord: this._handleToggleRecord.bind(this)
      };
    }
  }, {
    key: '_handleLoad',
    value: function _handleLoad() {
      var _props8 = this.props,
          defaultValue = _props8.defaultValue,
          endpoint = _props8.endpoint,
          options = _props8.options,
          value = _props8.value,
          onLoad = _props8.onLoad,
          onSetChosen = _props8.onSetChosen;

      if (endpoint) return onLoad(endpoint, { $ids: defaultValue });
      if (!options) return;
      var chosen = options.filter(function (option) {
        return _lodash2.default.includes(defaultValue, _lodash2.default.get(option, value));
      });
      onSetChosen(chosen);
    }
  }, {
    key: '_handleToggleFilter',
    value: function _handleToggleFilter() {
      var onToggleFilter = this.props.onToggleFilter;

      if (onToggleFilter) onToggleFilter();
    }
  }, {
    key: '_handleToggleRecord',
    value: function _handleToggleRecord(record) {
      var _props9 = this.props,
          multiple = _props9.multiple,
          onToggleRecord = _props9.onToggleRecord;

      if (onToggleRecord) onToggleRecord(multiple, record);
    }
  }]);
  return ToggleList;
}(_react2.default.Component);

ToggleList.propTypes = {
  chosen: _propTypes2.default.any,
  defaultFilters: _propTypes2.default.object,
  defaultValue: _propTypes2.default.array,
  endpoint: _propTypes2.default.string,
  exclude_ids: _propTypes2.default.array,
  filtering: _propTypes2.default.bool,
  filters: _propTypes2.default.array,
  full: _propTypes2.default.bool,
  format: _propTypes2.default.any,
  multiple: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  query: _propTypes2.default.string,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onLoad: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onSetChosen: _propTypes2.default.func,
  onSetFilter: _propTypes2.default.func,
  onSetQuery: _propTypes2.default.func,
  onToggleFilter: _propTypes2.default.func,
  onToggleRecord: _propTypes2.default.func
};
ToggleList.defaultProps = {
  defaultFilters: [],
  exclude_ids: [],
  format: _token2.default,
  full: false,
  multiple: false,
  value: 'value',
  text: 'text',
  onReady: function onReady() {},
  onChange: function onChange(value) {}
};
exports.default = ToggleList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVG9nZ2xlTGlzdCIsInByb3BzIiwiY2hvc2VuIiwiZW5kcG9pbnQiLCJmaWx0ZXJzIiwibXVsdGlwbGUiLCJvcHRpb25zIiwidGV4dCIsIl9nZXRDbGFzcyIsIl9oYW5kbGVUb2dnbGVGaWx0ZXIiLCJiaW5kIiwiX2dldEZpbHRlcnMiLCJfZ2V0U2VhcmNoYm94IiwibWFwIiwicmVjb3JkIiwiaW5kZXgiLCJfIiwiZ2V0IiwiX2hhbmRsZVRvZ2dsZVJlY29yZCIsIl9nZXRJbmZpbml0ZSIsIl9nZXRSZXN1bHRzIiwiZGVmYXVsdFZhbHVlIiwib25SZWFkeSIsImxlbmd0aCIsIl9oYW5kbGVMb2FkIiwicHJldlByb3BzIiwiZnVsbCIsInZhbHVlIiwib25DaGFuZ2UiLCJpc0VxdWFsIiwiaXRlbXMiLCJjbGFzc2VzIiwiZmlsdGVyaW5nIiwicHVzaCIsImpvaW4iLCJmaWx0ZXIiLCJvblNldEZpbHRlciIsInZhbHVlcyIsIm9uVXBkYXRlIiwib25TZXRRdWVyeSIsImljb24iLCJvbkljb24iLCJkZWZhdWx0RmlsdGVycyIsImV4Y2x1ZGVfaWRzIiwicXVlcnkiLCJxIiwibGF5b3V0IiwiZm9ybWF0Iiwib25Ub2dnbGVSZWNvcmQiLCJvbkxvYWQiLCJvblNldENob3NlbiIsIiRpZHMiLCJpbmNsdWRlcyIsIm9wdGlvbiIsIm9uVG9nZ2xlRmlsdGVyIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJvYmplY3QiLCJhcnJheSIsInN0cmluZyIsImJvb2wiLCJmdW5jIiwiZGVmYXVsdFByb3BzIiwiVG9rZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7NkJBdUNLO0FBQUE7O0FBQUEsbUJBQ3dELEtBQUtD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YztBQVFwQmUsV0FBUyxtQkFBTSxDQUFFLENBUkc7QUFTcEJNLFlBQVUsa0JBQUNELEtBQUQsRUFBVyxDQUFFO0FBVEgsQztrQkFxSVQzQixVIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VhcmNoYm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2VhcmNoYm94J1xuaW1wb3J0IEluZmluaXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5maW5pdGUnXG5pbXBvcnQgRmlsdGVycyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpbHRlcnMnXG5pbXBvcnQgVG9rZW4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90b2tlbidcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZXN1bHQgZnJvbSAnLi9yZXN1bHRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBUb2dnbGVMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hvc2VuOiBQcm9wVHlwZXMuYW55LFxuICAgIGRlZmF1bHRGaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIGVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGV4Y2x1ZGVfaWRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZmlsdGVyaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgZnVsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuYW55LFxuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgcXVlcnk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNldENob3NlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25TZXRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uVG9nZ2xlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblRvZ2dsZVJlY29yZDogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdEZpbHRlcnM6IFtdLFxuICAgIGV4Y2x1ZGVfaWRzOiBbXSxcbiAgICBmb3JtYXQ6IFRva2VuLFxuICAgIGZ1bGw6IGZhbHNlLFxuICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICB2YWx1ZTogJ3ZhbHVlJyxcbiAgICB0ZXh0OiAndGV4dCcsXG4gICAgb25SZWFkeTogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICh2YWx1ZSkgPT4ge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNob3NlbiwgZW5kcG9pbnQsIGZpbHRlcnMsIG11bHRpcGxlLCBvcHRpb25zLCB0ZXh0IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5fZ2V0Q2xhc3MoKSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtdG9nZ2xlLWxpc3Qtb3ZlcmxheVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVUb2dnbGVGaWx0ZXIuYmluZCh0aGlzKSB9IC8+XG4gICAgICAgIHsgZmlsdGVycyAmJlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS10b2dnbGUtbGlzdC1maWx0ZXJcIj5cbiAgICAgICAgICAgIDxGaWx0ZXJzIHsgLi4udGhpcy5fZ2V0RmlsdGVycygpIH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtdG9nZ2xlLWxpc3QtYm9keVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS10b2dnbGUtbGlzdC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxTZWFyY2hib3ggeyAuLi50aGlzLl9nZXRTZWFyY2hib3goKSB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyBtdWx0aXBsZSAmJiBjaG9zZW4gJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS10b2dnbGUtbGlzdC1zdW1tYXJ5XCI+XG4gICAgICAgICAgICAgIHsgY2hvc2VuLm1hcCgocmVjb3JkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgc3VtbWFyeV90b2tlbl8ke2luZGV4fWB9IGNsYXNzTmFtZT1cInJlZnJhbWUtdG9nZ2xlLWxpc3Qtc3VtbWFyeS10b2tlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXRvZ2dsZS1saXN0LXN1bW1hcnktdG9rZW4tbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgeyBfLmdldChyZWNvcmQsIHRleHQpIH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXRvZ2dsZS1saXN0LXN1bW1hcnktdG9rZW4tcmVtb3ZlXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZVRvZ2dsZVJlY29yZC5iaW5kKHRoaXMsIHJlY29yZCkgfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtdGltZXNcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICB7IGVuZHBvaW50ICYmIDxJbmZpbml0ZSB7IC4uLnRoaXMuX2dldEluZmluaXRlKCkgfSAvPiB9XG4gICAgICAgICAgeyBvcHRpb25zICYmIDxSZXN1bHQgcmVjb3Jkcz17IG9wdGlvbnMgfSB7IC4uLnRoaXMuX2dldFJlc3VsdHMoKSB9IC8+IH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgb25SZWFkeSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKGRlZmF1bHRWYWx1ZSAmJiBkZWZhdWx0VmFsdWUubGVuZ3RoID4gMCkgdGhpcy5faGFuZGxlTG9hZCgpXG4gICAgaWYob25SZWFkeSkgb25SZWFkeSgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBjaG9zZW4sIGZ1bGwsIHZhbHVlLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKG9uQ2hhbmdlICYmIGNob3NlbiAmJiAhXy5pc0VxdWFsKHByZXZQcm9wcy5jaG9zZW4sIGNob3NlbikpIHtcbiAgICAgIGNvbnN0IGl0ZW1zID0gY2hvc2VuLm1hcChyZWNvcmQgPT4gZnVsbCA/IHJlY29yZCA6IF8uZ2V0KHJlY29yZCwgdmFsdWUpKVxuICAgICAgb25DaGFuZ2UoaXRlbXMpXG4gICAgfVxuICB9XG5cbiAgX2dldENsYXNzKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ3JlZnJhbWUtdG9nZ2xlLWxpc3QnXVxuICAgIGlmKHRoaXMucHJvcHMuZmlsdGVyaW5nKSBjbGFzc2VzLnB1c2goJ2ZpbHRlcmluZycpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0RmlsdGVycygpIHtcbiAgICBjb25zdCB7IGZpbHRlcnMsIGZpbHRlciwgb25TZXRGaWx0ZXIgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgZmlsdGVycyxcbiAgICAgIHZhbHVlczogZmlsdGVyLFxuICAgICAgb25VcGRhdGU6IG9uU2V0RmlsdGVyXG4gICAgfVxuICB9XG5cbiAgX2dldFNlYXJjaGJveCgpIHtcbiAgICBjb25zdCB7IGZpbHRlcnMsIGZpbHRlcmluZywgb25TZXRRdWVyeSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBpY29uOiBmaWx0ZXJzID8gKGZpbHRlcmluZyA/ICd0aW1lcycgOiAnc2xpZGVycycpIDogbnVsbCxcbiAgICAgIG9uSWNvbjogdGhpcy5faGFuZGxlVG9nZ2xlRmlsdGVyLmJpbmQodGhpcyksXG4gICAgICBvbkNoYW5nZTogb25TZXRRdWVyeVxuICAgIH1cbiAgfVxuXG4gIF9nZXRJbmZpbml0ZSgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRGaWx0ZXJzLCBlbmRwb2ludCwgZXhjbHVkZV9pZHMsIGNob3NlbiwgcXVlcnkgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBmaWx0ZXIgPSB7XG4gICAgICAuLi5kZWZhdWx0RmlsdGVycyxcbiAgICAgIC4uLnRoaXMucHJvcHMuZmlsdGVyLFxuICAgICAgcTogcXVlcnlcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGVuZHBvaW50LFxuICAgICAgZXhjbHVkZV9pZHMsXG4gICAgICBmaWx0ZXIsXG4gICAgICBjaG9zZW4sXG4gICAgICBsYXlvdXQ6IChwcm9wcykgPT4gPFJlc3VsdCB7IC4uLnRoaXMuX2dldFJlc3VsdHMoKSB9IHsgLi4ucHJvcHMgfSAvPlxuICAgIH1cbiAgfVxuXG4gIF9nZXRSZXN1bHRzKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0LCBjaG9zZW4sIG11bHRpcGxlLCB0ZXh0LCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBmb3JtYXQsXG4gICAgICBjaG9zZW4sXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIHRleHQsXG4gICAgICB2YWx1ZSxcbiAgICAgIG9uVG9nZ2xlUmVjb3JkOiB0aGlzLl9oYW5kbGVUb2dnbGVSZWNvcmQuYmluZCh0aGlzKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVMb2FkKCkge1xuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCBlbmRwb2ludCwgb3B0aW9ucywgdmFsdWUsIG9uTG9hZCwgb25TZXRDaG9zZW4gfSA9IHRoaXMucHJvcHNcbiAgICBpZihlbmRwb2ludCkgcmV0dXJuIG9uTG9hZChlbmRwb2ludCwgeyAkaWRzOiBkZWZhdWx0VmFsdWUgfSlcbiAgICBpZighb3B0aW9ucykgcmV0dXJuXG4gICAgY29uc3QgY2hvc2VuID0gb3B0aW9ucy5maWx0ZXIob3B0aW9uID0+IF8uaW5jbHVkZXMoZGVmYXVsdFZhbHVlLCBfLmdldChvcHRpb24sIHZhbHVlKSkpXG4gICAgb25TZXRDaG9zZW4oY2hvc2VuKVxuICB9XG5cbiAgX2hhbmRsZVRvZ2dsZUZpbHRlcigpIHtcbiAgICBjb25zdCB7IG9uVG9nZ2xlRmlsdGVyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYob25Ub2dnbGVGaWx0ZXIpIG9uVG9nZ2xlRmlsdGVyKClcbiAgfVxuXG4gIF9oYW5kbGVUb2dnbGVSZWNvcmQocmVjb3JkKSB7XG4gICAgY29uc3QgeyBtdWx0aXBsZSwgb25Ub2dnbGVSZWNvcmQgfSA9IHRoaXMucHJvcHNcbiAgICBpZihvblRvZ2dsZVJlY29yZCkgb25Ub2dnbGVSZWNvcmQobXVsdGlwbGUsIHJlY29yZClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUxpc3RcbiJdfQ==