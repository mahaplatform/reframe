'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LookupPanel = function (_React$Component) {
  (0, _inherits3.default)(LookupPanel, _React$Component);

  function LookupPanel() {
    (0, _classCallCheck3.default)(this, LookupPanel);
    return (0, _possibleConstructorReturn3.default)(this, (LookupPanel.__proto__ || Object.getPrototypeOf(LookupPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(LookupPanel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          label = _props.label,
          multiple = _props.multiple,
          name = _props.name,
          options = _props.options,
          results = _props.results;

      var value = results[name];
      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-header', onClick: this._handleRemovePanel.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-icon' },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-title' },
            label
          ),
          _react2.default.createElement('div', { className: 'reframe-filters-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-body' },
          options.map(function (option, index) {
            return _react2.default.createElement(
              'div',
              { className: 'reframe-filters-item', key: 'filter_item_' + index, onClick: _this2._handleClick.bind(_this2, option.id) },
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-content' },
                _react2.default.createElement(format, { option: option })
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-filters-item-icon' },
                multiple && _lodash2.default.includes(value, option.id) && _react2.default.createElement('i', { className: 'fa fa-check' }),
                !multiple && option.id === value && _react2.default.createElement('i', { className: 'fa fa-check' })
              )
            );
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-footer', onClick: this._handleReset.bind(this) },
          'Reset ',
          label
        )
      );
    }
  }, {
    key: '_getValue',
    value: function _getValue(id) {
      var _props2 = this.props,
          multiple = _props2.multiple,
          name = _props2.name,
          results = _props2.results;

      if (!multiple) return results[name] !== id ? id : null;
      if (_lodash2.default.includes(results[name], id)) return _lodash2.default.without(results[name], id);
      return [].concat((0, _toConsumableArray3.default)(results[name]), [id]);
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(id) {
      var _props3 = this.props,
          name = _props3.name,
          onChange = _props3.onChange;

      onChange(name, this._getValue(id));
    }
  }, {
    key: '_handleRemovePanel',
    value: function _handleRemovePanel() {
      this.props.onRemovePanel();
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      var _props4 = this.props,
          multiple = _props4.multiple,
          name = _props4.name,
          onChange = _props4.onChange;

      var value = multiple ? [] : null;
      onChange(name, value);
    }
  }]);
  return LookupPanel;
}(_react2.default.Component);

LookupPanel.propTypes = {
  format: _propTypes2.default.function,
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  results: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};

var Lookup = function (_React$Component2) {
  (0, _inherits3.default)(Lookup, _React$Component2);

  function Lookup() {
    (0, _classCallCheck3.default)(this, Lookup);
    return (0, _possibleConstructorReturn3.default)(this, (Lookup.__proto__ || Object.getPrototypeOf(Lookup)).apply(this, arguments));
  }

  (0, _createClass3.default)(Lookup, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-item', onClick: this._handleClick.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-title' },
          label
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-icon' },
          _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
        )
      );
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      this.props.onAddPanel(_react2.default.createElement(LookupPanel, this._getLookupPanel()));
    }
  }, {
    key: '_getLookupPanel',
    value: function _getLookupPanel() {
      var _props5 = this.props,
          format = _props5.format,
          label = _props5.label,
          multiple = _props5.multiple,
          name = _props5.name,
          options = _props5.options,
          results = _props5.results,
          onChange = _props5.onChange,
          onRemovePanel = _props5.onRemovePanel;

      return { format: format, label: label, multiple: multiple, name: name, options: options, results: results, onChange: onChange, onRemovePanel: onRemovePanel };
    }
  }]);
  return Lookup;
}(_react2.default.Component);

Lookup.propTypes = {
  format: _propTypes2.default.func,
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  results: _propTypes2.default.object,
  value: _propTypes2.default.number,
  onAddPanel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};
Lookup.defaultProps = {
  mutiple: false
};
exports.default = Lookup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTG9va3VwUGFuZWwiLCJwcm9wcyIsImZvcm1hdCIsImxhYmVsIiwibXVsdGlwbGUiLCJuYW1lIiwib3B0aW9ucyIsInJlc3VsdHMiLCJ2YWx1ZSIsIl9oYW5kbGVSZW1vdmVQYW5lbCIsImJpbmQiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsIl9oYW5kbGVDbGljayIsImlkIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiXyIsImluY2x1ZGVzIiwiX2hhbmRsZVJlc2V0Iiwid2l0aG91dCIsIm9uQ2hhbmdlIiwiX2dldFZhbHVlIiwib25SZW1vdmVQYW5lbCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmN0aW9uIiwic3RyaW5nIiwiYm9vbCIsImFycmF5Iiwib2JqZWN0IiwiZnVuYyIsIkxvb2t1cCIsIm9uQWRkUGFuZWwiLCJfZ2V0TG9va3VwUGFuZWwiLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiLCJtdXRpcGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7NkJBYUs7QUFBQTs7QUFBQSxtQkFDcUQsS0FBS0MsS0FEMUQ7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxLQURULFVBQ1NBLEtBRFQ7QUFBQSxVQUNnQkMsUUFEaEIsVUFDZ0JBLFFBRGhCO0FBQUEsVUFDMEJDLElBRDFCLFVBQzBCQSxJQUQxQjtBQUFBLFVBQ2dDQyxPQURoQyxVQUNnQ0EsT0FEaEM7QUFBQSxVQUN5Q0MsT0FEekMsVUFDeUNBLE9BRHpDOztBQUVQLFVBQU1DLFFBQVFELFFBQVFGLElBQVIsQ0FBZDtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0JBQWYsRUFBd0MsU0FBVSxLQUFLSSxrQkFBTCxDQUF3QkMsSUFBeEIsQ0FB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QUFVRyxJQUhIO0FBSWpCekIsUUFBTXNCLG9CQUFVRSxNQUpDO0FBS2pCdkIsV0FBU3FCLG9CQUFVSSxLQUxGO0FBTWpCeEIsV0FBU29CLG9CQUFVSyxNQU5GO0FBT2pCeEIsU0FBT21CLG9CQUFVVSxNQVBBO0FBUWpCRixjQUFZUixvQkFBVU0sSUFSTDtBQVNqQlgsWUFBVUssb0JBQVVNLElBVEg7QUFVakJULGlCQUFlRyxvQkFBVU07QUFWUixDO0FBRmZDLE0sQ0FlR0ksWSxHQUFlO0FBQ3BCQyxXQUFTO0FBRFcsQztrQkE4QlRMLE0iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgTG9va3VwUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuZnVuY3Rpb24sXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHJlc3VsdHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVtb3ZlUGFuZWw6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtYXQsIGxhYmVsLCBtdWx0aXBsZSwgbmFtZSwgb3B0aW9ucywgcmVzdWx0cyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0c1tuYW1lXVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1wYW5lbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1oZWFkZXJcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlUmVtb3ZlUGFuZWwuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWhlYWRlci1pY29uXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaGVhZGVyLWljb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtYm9keVwiPlxuICAgICAgICAgIHsgb3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWl0ZW1cIiBrZXk9e2BmaWx0ZXJfaXRlbV8ke2luZGV4fWB9IG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMsIG9wdGlvbi5pZCkgfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgeyBSZWFjdC5jcmVhdGVFbGVtZW50KGZvcm1hdCwgeyBvcHRpb24gfSkgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbS1pY29uXCI+XG4gICAgICAgICAgICAgICAgeyBtdWx0aXBsZSAmJiBfLmluY2x1ZGVzKHZhbHVlLCBvcHRpb24uaWQpICYmIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCIgLz4gfVxuICAgICAgICAgICAgICAgIHsgIW11bHRpcGxlICYmIG9wdGlvbi5pZCA9PT0gdmFsdWUgJiYgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIiAvPiB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1mb290ZXJcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlUmVzZXQuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIFJlc2V0IHsgbGFiZWwgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9nZXRWYWx1ZShpZCkge1xuICAgIGNvbnN0IHsgbXVsdGlwbGUsIG5hbWUsIHJlc3VsdHMgfSA9IHRoaXMucHJvcHNcbiAgICBpZighbXVsdGlwbGUpIHJldHVybiByZXN1bHRzW25hbWVdICE9PSBpZCA/IGlkIDogbnVsbFxuICAgIGlmKF8uaW5jbHVkZXMocmVzdWx0c1tuYW1lXSwgaWQpKSByZXR1cm4gXy53aXRob3V0KHJlc3VsdHNbbmFtZV0sIGlkKVxuICAgIHJldHVybiBbIC4uLnJlc3VsdHNbbmFtZV0sIGlkIF1cbiAgfVxuXG4gIF9oYW5kbGVDbGljayhpZCkge1xuICAgIGNvbnN0IHsgbmFtZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBvbkNoYW5nZShuYW1lLCB0aGlzLl9nZXRWYWx1ZShpZCkpXG4gIH1cblxuICBfaGFuZGxlUmVtb3ZlUGFuZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJlbW92ZVBhbmVsKClcbiAgfVxuXG4gIF9oYW5kbGVSZXNldCgpIHtcbiAgICBjb25zdCB7IG11bHRpcGxlLCBuYW1lLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gbXVsdGlwbGUgPyBbXSA6IG51bGxcbiAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG59XG5cbmNsYXNzIExvb2t1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICByZXN1bHRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQWRkUGFuZWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlbW92ZVBhbmVsOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBtdXRpcGxlOiBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMpIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWl0ZW0tdGl0bGVcIj5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWl0ZW0taWNvblwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZXZyb24tcmlnaHRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uQWRkUGFuZWwoPExvb2t1cFBhbmVsIHsgLi4udGhpcy5fZ2V0TG9va3VwUGFuZWwoKSB9IC8+KVxuICB9XG5cbiAgX2dldExvb2t1cFBhbmVsKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0LCBsYWJlbCwgbXVsdGlwbGUsIG5hbWUsIG9wdGlvbnMsIHJlc3VsdHMsIG9uQ2hhbmdlLCBvblJlbW92ZVBhbmVsIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHsgZm9ybWF0LCBsYWJlbCwgbXVsdGlwbGUsIG5hbWUsIG9wdGlvbnMsIHJlc3VsdHMsIG9uQ2hhbmdlLCBvblJlbW92ZVBhbmVsIH1cbiAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9va3VwXG4iXX0=