'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _search = require('../search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectPanel = function (_React$Component) {
  (0, _inherits3.default)(SelectPanel, _React$Component);

  function SelectPanel() {
    (0, _classCallCheck3.default)(this, SelectPanel);
    return (0, _possibleConstructorReturn3.default)(this, (SelectPanel.__proto__ || Object.getPrototypeOf(SelectPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(SelectPanel, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

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
          _react2.default.createElement(_search2.default, this._getSearch())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-footer' },
          _react2.default.createElement(
            'button',
            { className: 'ui red fluid button', onClick: this._handleReset.bind(this) },
            'Reset ',
            label
          )
        )
      );
    }
  }, {
    key: '_getSearch',
    value: function _getSearch() {
      var _props = this.props,
          endpoint = _props.endpoint,
          filter = _props.filter,
          format = _props.format,
          label = _props.label,
          name = _props.name,
          multiple = _props.multiple,
          options = _props.options,
          sort = _props.sort,
          text = _props.text,
          value = _props.value,
          results = _props.results,
          onChange = _props.onChange;

      var onUpdate = onChange;
      return { endpoint: endpoint, filter: filter, format: format, label: label, name: name, multiple: multiple, options: options, results: results, sort: sort, text: text, value: value, onUpdate: onUpdate };
    }
  }, {
    key: '_handleRemovePanel',
    value: function _handleRemovePanel() {
      this.props.onRemovePanel();
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      var _props2 = this.props,
          multiple = _props2.multiple,
          name = _props2.name,
          onChange = _props2.onChange;

      var value = multiple ? [] : null;
      onChange(name, value);
    }
  }]);
  return SelectPanel;
}(_react2.default.Component);

SelectPanel.propTypes = {
  endpoint: _propTypes2.default.string,
  filter: _propTypes2.default.object,
  format: _propTypes2.default.any,
  label: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  results: _propTypes2.default.object,
  sort: _propTypes2.default.object,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};

var Select = function (_React$Component2) {
  (0, _inherits3.default)(Select, _React$Component2);

  function Select() {
    (0, _classCallCheck3.default)(this, Select);
    return (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  (0, _createClass3.default)(Select, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          label = _props3.label,
          name = _props3.name,
          results = _props3.results;

      var count = results[name] ? results[name].length : 0;
      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-item', onClick: this._handleClick.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-title' },
          label
        ),
        count > 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-description' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-item-count' },
            count
          )
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
      this.props.onAddPanel(_react2.default.createElement(SelectPanel, this.props));
    }
  }]);
  return Select;
}(_react2.default.Component);

Select.propTypes = {
  filter: _propTypes2.default.object,
  format: _propTypes2.default.func,
  label: _propTypes2.default.string,
  mutiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  results: _propTypes2.default.object,
  values: _propTypes2.default.object,
  onAddPanel: _propTypes2.default.func
};
exports.default = Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2VsZWN0UGFuZWwiLCJsYWJlbCIsInByb3BzIiwiX2hhbmRsZVJlbW92ZVBhbmVsIiwiYmluZCIsIl9nZXRTZWFyY2giLCJfaGFuZGxlUmVzZXQiLCJlbmRwb2ludCIsImZpbHRlciIsImZvcm1hdCIsIm5hbWUiLCJtdWx0aXBsZSIsIm9wdGlvbnMiLCJzb3J0IiwidGV4dCIsInZhbHVlIiwicmVzdWx0cyIsIm9uQ2hhbmdlIiwib25VcGRhdGUiLCJvblJlbW92ZVBhbmVsIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJvYmplY3QiLCJhbnkiLCJib29sIiwiYXJyYXkiLCJmdW5jIiwiU2VsZWN0IiwiY291bnQiLCJsZW5ndGgiLCJfaGFuZGxlQ2xpY2siLCJvbkFkZFBhbmVsIiwibXV0aXBsZSIsInZhbHVlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7NkJBbUJLO0FBQUEsVUFDQ0MsS0FERCxHQUNXLEtBQUtDLEtBRGhCLENBQ0NELEtBREQ7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHVCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx3QkFBZixFQUF3QyxTQUFVLEtBQUtFLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUFsRDtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsNkJBQWY7QUFDRSxpREFBRyxXQUFVLG9CQUFiO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsOEJBQWY7QUFDSUg7QUFESixXQUpGO0FBT0UsaURBQUssV0FBVSw2QkFBZjtBQVBGLFNBREY7QUFVRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQ0Usd0NBQUMsZ0JBQUQsRUFBYSxLQUFLSSxVQUFMLEVBQWI7QUFERixTQVZGO0FBYUU7QUFB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QUE5QztBQURGLFNBTEo7QUFTRTtBQUFBO0FBQUEsWUFBSyxXQUFVLDJCQUFmO0FBQ0UsK0NBQUcsV0FBVSxxQkFBYjtBQURGO0FBVEYsT0FERjtBQWVEOzs7bUNBRWM7QUFDYixXQUFLN0IsS0FBTCxDQUFXZ0MsVUFBWCxDQUFzQiw4QkFBQyxXQUFELEVBQWtCLEtBQUtoQyxLQUF2QixDQUF0QjtBQUNEOzs7RUFwQ2tCa0IsZ0JBQU1DLFM7O0FBQXJCUyxNLENBRUdSLFMsR0FBWTtBQUNqQmQsVUFBUWUsb0JBQVVFLE1BREQ7QUFFakJoQixVQUFRYyxvQkFBVU0sSUFGRDtBQUdqQjVCLFNBQU9zQixvQkFBVUMsTUFIQTtBQUlqQlcsV0FBU1osb0JBQVVJLElBSkY7QUFLakJqQixRQUFNYSxvQkFBVUMsTUFMQztBQU1qQlosV0FBU1csb0JBQVVLLEtBTkY7QUFPakJaLFdBQVNPLG9CQUFVRSxNQVBGO0FBUWpCVyxVQUFRYixvQkFBVUUsTUFSRDtBQVNqQlMsY0FBWVgsb0JBQVVNO0FBVEwsQztrQkFzQ05DLE0iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi4vc2VhcmNoJ1xuXG5jbGFzcyBTZWxlY3RQYW5lbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBlbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuYW55LFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICByZXN1bHRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNvcnQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVtb3ZlUGFuZWw6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1wYW5lbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1oZWFkZXJcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlUmVtb3ZlUGFuZWwuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWhlYWRlci1pY29uXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaGVhZGVyLWljb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtYm9keVwiPlxuICAgICAgICAgIDxTZWFyY2ggeyAuLi50aGlzLl9nZXRTZWFyY2goKSB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIHJlZCBmbHVpZCBidXR0b25cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlUmVzZXQuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgUmVzZXQgeyBsYWJlbCB9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldFNlYXJjaCgpIHtcbiAgICBjb25zdCB7IGVuZHBvaW50LCBmaWx0ZXIsIGZvcm1hdCwgbGFiZWwsIG5hbWUsIG11bHRpcGxlLCBvcHRpb25zLCBzb3J0LCB0ZXh0LCB2YWx1ZSwgcmVzdWx0cywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvblVwZGF0ZSA9IG9uQ2hhbmdlXG4gICAgcmV0dXJuIHsgZW5kcG9pbnQsIGZpbHRlciwgZm9ybWF0LCBsYWJlbCwgbmFtZSwgbXVsdGlwbGUsIG9wdGlvbnMsIHJlc3VsdHMsIHNvcnQsIHRleHQsIHZhbHVlLCBvblVwZGF0ZSB9XG4gIH1cblxuICBfaGFuZGxlUmVtb3ZlUGFuZWwoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJlbW92ZVBhbmVsKClcbiAgfVxuXG4gIF9oYW5kbGVSZXNldCgpIHtcbiAgICBjb25zdCB7IG11bHRpcGxlLCBuYW1lLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gbXVsdGlwbGUgPyBbXSA6IG51bGxcbiAgICBvbkNoYW5nZShuYW1lLCB2YWx1ZSlcbiAgfVxuXG59XG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmaWx0ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBtdXRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICByZXN1bHRzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHZhbHVlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvbkFkZFBhbmVsOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIG5hbWUsIHJlc3VsdHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjb3VudCA9IHJlc3VsdHNbbmFtZV0gPyByZXN1bHRzW25hbWVdLmxlbmd0aCA6IDBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbGljay5iaW5kKHRoaXMpIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWl0ZW0tdGl0bGVcIj5cbiAgICAgICAgICB7IGxhYmVsIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgY291bnQgPiAwICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbS1jb3VudFwiPnsgY291bnQgfTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWl0ZW0taWNvblwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZXZyb24tcmlnaHRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uQWRkUGFuZWwoPFNlbGVjdFBhbmVsIHsgLi4udGhpcy5wcm9wcyB9IC8+KVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0XG4iXX0=