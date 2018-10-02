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
          })
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
  value: 'value',
  text: 'text'
};
exports.default = Lookup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTG9va3VwIiwicHJvcHMiLCJzZWxlY3RlZCIsInRhYkluZGV4IiwiZm9ybWF0IiwidGV4dCIsIl9nZXRDbGFzcyIsIl9oYW5kbGVCZWdpbiIsImJpbmQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJfIiwiZ2V0IiwiX2hhbmRsZVJlbW92ZSIsImRlZmF1bHRWYWx1ZSIsImVuZHBvaW50IiwibXVsdGlwbGUiLCJ2YWx1ZSIsIm9uRmV0Y2giLCJvblJlYWR5IiwicXVlcnkiLCIkaWRzIiwiJGZpbHRlciIsIiRpbiIsImxlbmd0aCIsInByZXZQcm9wcyIsImZvcm0iLCJjb250ZXh0IiwiYWN0aXZlIiwicHVzaCIsIl9nZXRTZWFyY2giLCJwb3AiLCJpc0VxdWFsIiwiX2hhbmRsZUNoYW5nZSIsImNsYXNzZXMiLCJqb2luIiwibGFiZWwiLCJvcHRpb25zIiwib25DYW5jZWwiLCJfaGFuZGxlRW5kIiwib25Eb25lIiwib25TZWxlY3QiLCJfaGFuZGxlU2VsZWN0IiwidmFsdWVzIiwib25CZWdpbiIsIm9uRW5kIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9uUmVtb3ZlIiwiaXRlbXMiLCJvbkNoYW5nZSIsIl9nZXRWYWx1ZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwiYW55Iiwic3RyaW5nIiwib25lT2ZUeXBlIiwiZWxlbWVudCIsImZ1bmMiLCJib29sIiwiYXJyYXkiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxNOzs7Ozs7Ozs7OzZCQXNDSztBQUFBOztBQUFBLG1CQUNzQyxLQUFLQyxLQUQzQztBQUFBLFVBQ0NDLFFBREQsVUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFFBRFgsVUFDV0Es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QUFBO0FBQUEsUUFBSyxXQUFVLHVCQUFmO0FBQXlDQTtBQUF6QyxLQUFmO0FBQUEsR0FEWTtBQUVwQm1CLFNBQU8sUUFGYTtBQUdwQnBCLFlBQVUsS0FIVTtBQUlwQkMsU0FBTyxPQUphO0FBS3BCYixRQUFNO0FBTGMsQztrQkFzR1RMLE0iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtYXQgZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgTG9va3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGZvcm06IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlOiBQcm9wVHlwZXMuYW55LFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICBlbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMuZnVuY1xuICAgIF0pLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRhYkluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQmVnaW46IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25GZXRjaDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZWFkeTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25SZW1vdmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmb3JtYXQ6ICh7IHZhbHVlIH0pID0+IDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAyLXRva2VuXCI+eyB2YWx1ZSB9PC9kaXY+LFxuICAgIGxhYmVsOiAnUmVjb3JkJyxcbiAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgdmFsdWU6ICd2YWx1ZScsXG4gICAgdGV4dDogJ3RleHQnXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCwgdGFiSW5kZXgsIGZvcm1hdCwgdGV4dCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMuX2dldENsYXNzKCkgfSB0YWJJbmRleD17IHRhYkluZGV4IH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAyLWl0ZW1zXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUJlZ2luLmJpbmQodGhpcykgfT5cbiAgICAgICAgICB7IHNlbGVjdGVkLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAyLWl0ZW1cIiBrZXk9eyBgc2VsZWN0ZWRfJHtpbmRleH1gIH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAyLWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1sb29rdXAyLWl0ZW0tdG9rZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtYXQgeyAuLi5pdGVtIH0gZm9ybWF0PXsgZm9ybWF0IH0gdmFsdWU9eyBfLmdldChpdGVtLCB0ZXh0KSB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWxvb2t1cDItaXRlbS1yZW1vdmVcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlUmVtb3ZlLmJpbmQodGhpcywgaW5kZXgpIH0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS10aW1lcy1jaXJjbGVcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZSwgZW5kcG9pbnQsIG11bHRpcGxlLCB2YWx1ZSwgb25GZXRjaCwgb25SZWFkeSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHF1ZXJ5ID0gdmFsdWUgPT09ICdpZCcgPyB7ICRpZHM6IGRlZmF1bHRWYWx1ZSB9IDogeyAkZmlsdGVyOiB7IFt2YWx1ZV06IHsgJGluOiBkZWZhdWx0VmFsdWUgfSB9IH1cbiAgICBpZihkZWZhdWx0VmFsdWUgJiYgKCFtdWx0aXBsZSB8fCBkZWZhdWx0VmFsdWUubGVuZ3RoID4gMCkpIG9uRmV0Y2goZW5kcG9pbnQsIHF1ZXJ5KVxuICAgIG9uUmVhZHkoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5jb250ZXh0XG4gICAgY29uc3QgeyBhY3RpdmUsIHNlbGVjdGVkIH0gPSB0aGlzLnByb3BzXG4gICAgaWYoIXByZXZQcm9wcy5hY3RpdmUgJiYgYWN0aXZlKSBmb3JtLnB1c2goPFNlYXJjaCB7IC4uLnRoaXMuX2dldFNlYXJjaCgpIH0gLz4pXG4gICAgaWYocHJldlByb3BzLmFjdGl2ZSAmJiAhYWN0aXZlKSBmb3JtLnBvcCgpXG4gICAgaWYoIV8uaXNFcXVhbChzZWxlY3RlZCwgcHJldlByb3BzLnNlbGVjdGVkKSkge1xuICAgICAgdGhpcy5faGFuZGxlQ2hhbmdlKClcbiAgICB9XG4gIH1cblxuICBfZ2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBtdWx0aXBsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ3JlZnJhbWUtbG9va3VwMi1maWVsZCddXG4gICAgaWYobXVsdGlwbGUpIGNsYXNzZXMucHVzaCgnbXVsdGlwbGUnKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldFNlYXJjaCgpIHtcbiAgICBjb25zdCB7IGVuZHBvaW50LCBmb3JtYXQsIGxhYmVsLCBtdWx0aXBsZSwgb3B0aW9ucywgc2VsZWN0ZWQsIHRleHQsIHZhbHVlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIGVuZHBvaW50LFxuICAgICAgZm9ybWF0LFxuICAgICAgbGFiZWwsXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHRleHQsXG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2FuY2VsOiB0aGlzLl9oYW5kbGVFbmQuYmluZCh0aGlzKSxcbiAgICAgIG9uRG9uZTogdGhpcy5faGFuZGxlRW5kLmJpbmQodGhpcyksXG4gICAgICBvblNlbGVjdDogdGhpcy5faGFuZGxlU2VsZWN0LmJpbmQodGhpcylcbiAgICB9XG4gIH1cbiAgXG4gIF9nZXRWYWx1ZSgpIHtcbiAgICBjb25zdCB7IG11bHRpcGxlLCBzZWxlY3RlZCwgdmFsdWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB2YWx1ZXMgPSBzZWxlY3RlZC5tYXAoaXRlbSA9PiBfLmdldChpdGVtLCB2YWx1ZSkpXG4gICAgcmV0dXJuIG11bHRpcGxlID8gdmFsdWVzIDogdmFsdWVzWzBdICAgIFxuICB9XG5cbiAgX2hhbmRsZUJlZ2luKCkge1xuICAgIHRoaXMucHJvcHMub25CZWdpbigpXG4gIH1cblxuICBfaGFuZGxlRW5kKCkge1xuICAgIHRoaXMucHJvcHMub25FbmQoKVxuICB9XG5cbiAgX2hhbmRsZVJlbW92ZShpbmRleCwgZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB0aGlzLnByb3BzLm9uUmVtb3ZlKGluZGV4KVxuICB9XG5cbiAgX2hhbmRsZVNlbGVjdChpdGVtcykge1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHNcbiAgICBvblNlbGVjdChpdGVtcylcbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UoKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiBvbkNoYW5nZSh0aGlzLl9nZXRWYWx1ZSgpKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9va3VwXG4iXX0=