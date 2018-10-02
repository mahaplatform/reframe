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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DaterangePanel = function (_React$Component) {
  (0, _inherits3.default)(DaterangePanel, _React$Component);

  function DaterangePanel() {
    (0, _classCallCheck3.default)(this, DaterangePanel);
    return (0, _possibleConstructorReturn3.default)(this, (DaterangePanel.__proto__ || Object.getPrototypeOf(DaterangePanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(DaterangePanel, [{
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
          label = _props.label,
          name = _props.name,
          include = _props.include,
          text = _props.text,
          value = _props.value,
          results = _props.results,
          onChange = _props.onChange;

      var options = this._getOptions(include);
      var onUpdate = onChange;
      return { label: label, name: name, options: options, results: results, text: text, value: value, onUpdate: onUpdate };
    }
  }, {
    key: '_getOptions',
    value: function _getOptions(include) {
      var options = [];
      if (_lodash2.default.includes(include, 'this')) options.push({ value: 'this_week', description: this.description(0, 'week'), text: 'This Week' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_week', description: this.description(-1, 'week'), text: 'Last Week' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_week', description: this.description(1, 'week'), text: 'Next Week' });
      if (_lodash2.default.includes(include, 'this')) options.push({ value: 'this_month', description: this.description(0, 'month'), text: 'This Month' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_month', description: this.description(-1, 'month'), text: 'Last Month' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_month', description: this.description(1, 'month'), text: 'Next Month' });
      if (_lodash2.default.includes(include, 'this')) options.push({ value: 'this_quarter', description: this.description(0, 'quarter'), text: 'This Quarter' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_quarter', description: this.description(-1, 'quarter'), text: 'Last Quarter' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_quarter', description: this.description(1, 'quarter'), text: 'Next Quarter' });
      if (_lodash2.default.includes(include, 'this')) options.push({ value: 'this_year', description: this.description(0, 'year'), text: 'This Year' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_year', description: this.description(-1, 'year'), text: 'Last Year' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_year', description: this.description(1, 'year'), text: 'Next Year' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_30', description: this.description(-1, 'year'), text: 'Last 30 Days' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_30', description: this.description(1, 'year'), text: 'Next 30 Days' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_60', description: this.description(-1, 'year'), text: 'Last 60 Days' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_60', description: this.description(1, 'year'), text: 'Next 60 Days' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_90', description: this.description(-1, 'year'), text: 'Last 90 Days' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_90', description: this.description(1, 'year'), text: 'Next 90 Days' });
      options.push({ value: 'ytd', description: this.description(1, 'year'), text: 'Year to Date' });
      options.push({ value: 'ltd', description: this.description(1, 'year'), text: 'Life to Date' });
      return options;
    }
  }, {
    key: 'description',
    value: function description(quantity, unit) {
      var start = (0, _moment2.default)().add(quantity, unit).startOf(unit);
      var end = (0, _moment2.default)().add(quantity, unit).endOf(unit);
      var startdate = start.format('YY') !== end.format('YY') ? start.format('MMM D, YYYY') : start.format('MMM D');
      var enddate = start.format('MM') !== end.format('MM') ? end.format('MMM D, YYYY') : end.format('D, YYYY');
      return startdate + ' - ' + enddate;
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
          name = _props2.name,
          onChange = _props2.onChange;

      onChange(name, null);
    }
  }]);
  return DaterangePanel;
}(_react2.default.Component);

DaterangePanel.propTypes = {
  format: _propTypes2.default.any,
  label: _propTypes2.default.string,
  include: _propTypes2.default.array,
  name: _propTypes2.default.string,
  results: _propTypes2.default.object,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};

var Daterange = function (_React$Component2) {
  (0, _inherits3.default)(Daterange, _React$Component2);

  function Daterange() {
    (0, _classCallCheck3.default)(this, Daterange);
    return (0, _possibleConstructorReturn3.default)(this, (Daterange.__proto__ || Object.getPrototypeOf(Daterange)).apply(this, arguments));
  }

  (0, _createClass3.default)(Daterange, [{
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
      this.props.onAddPanel(_react2.default.createElement(DaterangePanel, this.props));
    }
  }]);
  return Daterange;
}(_react2.default.Component);

Daterange.propTypes = {
  format: _propTypes2.default.func,
  label: _propTypes2.default.string,
  mutiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  values: _propTypes2.default.object,
  onAddPanel: _propTypes2.default.func
};
exports.default = Daterange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRGF0ZXJhbmdlUGFuZWwiLCJsYWJlbCIsInByb3BzIiwiX2hhbmRsZVJlbW92ZVBhbmVsIiwiYmluZCIsIl9nZXRTZWFyY2giLCJfaGFuZGxlUmVzZXQiLCJuYW1lIiwiaW5jbHVkZSIsInRleHQiLCJ2YWx1ZSIsInJlc3VsdHMiLCJvbkNoYW5nZSIsIm9wdGlvbnMiLCJfZ2V0T3B0aW9ucyIsIm9uVXBkYXRlIiwiXyIsImluY2x1ZGVzIiwicHVzaCIsImRlc2NyaXB0aW9uIiwicXVhbnRpdHkiLCJ1bml0Iiwic3RhcnQiLCJhZGQiLCJzdGFydE9mIiwiZW5kIiwiZW5kT2YiLCJzdGFydGRhdGUiLCJmb3JtYXQiLCJlbmRkYXRlIiwib25SZW1vdmVQYW5lbCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Iiwic3RyaW5nIiwiYXJyYXkiLCJvYmplY3QiLCJmdW5jIiwiRGF0ZXJhbmdlIiwiX2hhbmRsZUNsaWNrIiwib25BZGRQYW5lbCIsIm11dGlwbGUiLCJib29sIiwidmFsdWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLGM7Ozs7Ozs7Ozs7NkJBZUs7QUFBQSxVQUNDQyxLQURELEdBQ1csS0FBS0MsS0FEaEIsQ0FDQ0QsS0FERDs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsdUJBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHdCQUFmLEVBQXdDLFNBQVUsS0FBS0Usa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBQWxEO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSw2QkFBZjtBQUNFLGlEQUFHLFdBQVUsb0JBQWI7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSw4QkFBZjtBQUNJSDtBQURKLFdBSkY7QUFPRSxpREFBSyxXQUFV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VUssSUFERDtBQUVqQnRDLFNBQU9pQyxvQkFBVUUsTUFGQTtBQUdqQk8sV0FBU1Qsb0JBQVVVLElBSEY7QUFJakJyQyxRQUFNMkIsb0JBQVVFLE1BSkM7QUFLakJ2QixXQUFTcUIsb0JBQVVHLEtBTEY7QUFNakJRLFVBQVFYLG9CQUFVSSxNQU5EO0FBT2pCSSxjQUFZUixvQkFBVUs7QUFQTCxDO2tCQThCTkMsUyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9zZWFyY2gnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgRGF0ZXJhbmdlUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuYW55LFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGluY2x1ZGU6IFByb3BUeXBlcy5hcnJheSxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlc3VsdHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25VcGRhdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVtb3ZlUGFuZWw6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1wYW5lbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1oZWFkZXJcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlUmVtb3ZlUGFuZWwuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWhlYWRlci1pY29uXCI+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgeyBsYWJlbCB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaGVhZGVyLWljb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtYm9keVwiPlxuICAgICAgICAgIDxTZWFyY2ggeyAuLi50aGlzLl9nZXRTZWFyY2goKSB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1mb290ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInVpIHJlZCBmbHVpZCBidXR0b25cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlUmVzZXQuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgUmVzZXQgeyBsYWJlbCB9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldFNlYXJjaCgpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBuYW1lLCBpbmNsdWRlLCB0ZXh0LCB2YWx1ZSwgcmVzdWx0cywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5fZ2V0T3B0aW9ucyhpbmNsdWRlKVxuICAgIGNvbnN0IG9uVXBkYXRlID0gb25DaGFuZ2VcbiAgICByZXR1cm4geyBsYWJlbCwgbmFtZSwgb3B0aW9ucywgcmVzdWx0cywgdGV4dCwgdmFsdWUsIG9uVXBkYXRlIH1cbiAgfVxuXG4gIF9nZXRPcHRpb25zKGluY2x1ZGUpIHtcbiAgICBjb25zdCBvcHRpb25zID0gW11cbiAgICBpZihfLmluY2x1ZGVzKGluY2x1ZGUsICd0aGlzJykpIG9wdGlvbnMucHVzaCh7IHZhbHVlOiAndGhpc193ZWVrJywgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24oMCwgJ3dlZWsnKSwgdGV4dDogJ1RoaXMgV2VlaycgfSlcbiAgICBpZihfLmluY2x1ZGVzKGluY2x1ZGUsICdsYXN0JykpIG9wdGlvbnMucHVzaCh7IHZhbHVlOiAnbGFzdF93ZWVrJywgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24oLTEsICd3ZWVrJyksIHRleHQ6ICdMYXN0IFdlZWsnIH0pXG4gICAgaWYoXy5pbmNsdWRlcyhpbmNsdWRlLCAnbmV4dCcpKSBvcHRpb25zLnB1c2goeyB2YWx1ZTogJ25leHRfd2VlaycsIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uKDEsICd3ZWVrJyksIHRleHQ6ICdOZXh0IFdlZWsnIH0pXG4gICAgaWYoXy5pbmNsdWRlcyhpbmNsdWRlLCAndGhpcycpKSBvcHRpb25zLnB1c2goeyB2YWx1ZTogJ3RoaXNfbW9udGgnLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbigwLCAnbW9udGgnKSwgdGV4dDogJ1RoaXMgTW9udGgnIH0pXG4gICAgaWYoXy5pbmNsdWRlcyhpbmNsdWRlLCAnbGFzdCcpKSBvcHRpb25zLnB1c2goeyB2YWx1ZTogJ2xhc3RfbW9udGgnLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbigtMSwgJ21vbnRoJyksIHRleHQ6ICdMYXN0IE1vbnRoJyB9KVxuICAgIGlmKF8uaW5jbHVkZXMoaW5jbHVkZSwgJ25leHQnKSkgb3B0aW9ucy5wdXNoKHsgdmFsdWU6ICduZXh0X21vbnRoJywgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24oMSwgJ21vbnRoJyksIHRleHQ6ICdOZXh0IE1vbnRoJyB9KVxuICAgIGlmKF8uaW5jbHVkZXMoaW5jbHVkZSwgJ3RoaXMnKSkgb3B0aW9ucy5wdXNoKHsgdmFsdWU6ICd0aGlzX3F1YXJ0ZXInLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbigwLCAncXVhcnRlcicpLCB0ZXh0OiAnVGhpcyBRdWFydGVyJyB9KVxuICAgIGlmKF8uaW5jbHVkZXMoaW5jbHVkZSwgJ2xhc3QnKSkgb3B0aW9ucy5wdXNoKHsgdmFsdWU6ICdsYXN0X3F1YXJ0ZXInLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbigtMSwgJ3F1YXJ0ZXInKSwgdGV4dDogJ0xhc3QgUXVhcnRlcicgfSlcbiAgICBpZihfLmluY2x1ZGVzKGluY2x1ZGUsICduZXh0JykpIG9wdGlvbnMucHVzaCh7IHZhbHVlOiAnbmV4dF9xdWFydGVyJywgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24oMSwgJ3F1YXJ0ZXInKSwgdGV4dDogJ05leHQgUXVhcnRlcicgfSlcbiAgICBpZihfLmluY2x1ZGVzKGluY2x1ZGUsICd0aGlzJykpIG9wdGlvbnMucHVzaCh7IHZhbHVlOiAndGhpc195ZWFyJywgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24oMCwgJ3llYXInKSwgdGV4dDogJ1RoaXMgWWVhcicgfSlcbiAgICBpZihfLmluY2x1ZGVzKGluY2x1ZGUsICdsYXN0JykpIG9wdGlvbnMucHVzaCh7IHZhbHVlOiAnbGFzdF95ZWFyJywgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24oLTEsICd5ZWFyJyksIHRleHQ6ICdMYXN0IFllYXInIH0pXG4gICAgaWYoXy5pbmNsdWRlcyhpbmNsdWRlLCAnbmV4dCcpKSBvcHRpb25zLnB1c2goeyB2YWx1ZTogJ25leHRfeWVhcicsIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uKDEsICd5ZWFyJyksIHRleHQ6ICdOZXh0IFllYXInIH0pXG4gICAgaWYoXy5pbmNsdWRlcyhpbmNsdWRlLCAnbGFzdCcpKSBvcHRpb25zLnB1c2goeyB2YWx1ZTogJ2xhc3RfMzAnLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbigtMSwgJ3llYXInKSwgdGV4dDogJ0xhc3QgMzAgRGF5cycgfSlcbiAgICBpZihfLmluY2x1ZGVzKGluY2x1ZGUsICduZXh0JykpIG9wdGlvbnMucHVzaCh7IHZhbHVlOiAnbmV4dF8zMCcsIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uKDEsICd5ZWFyJyksIHRleHQ6ICdOZXh0IDMwIERheXMnIH0pXG4gICAgaWYoXy5pbmNsdWRlcyhpbmNsdWRlLCAnbGFzdCcpKSBvcHRpb25zLnB1c2goeyB2YWx1ZTogJ2xhc3RfNjAnLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbigtMSwgJ3llYXInKSwgdGV4dDogJ0xhc3QgNjAgRGF5cycgfSlcbiAgICBpZihfLmluY2x1ZGVzKGluY2x1ZGUsICduZXh0JykpIG9wdGlvbnMucHVzaCh7IHZhbHVlOiAnbmV4dF82MCcsIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uKDEsICd5ZWFyJyksIHRleHQ6ICdOZXh0IDYwIERheXMnIH0pXG4gICAgaWYoXy5pbmNsdWRlcyhpbmNsdWRlLCAnbGFzdCcpKSBvcHRpb25zLnB1c2goeyB2YWx1ZTogJ2xhc3RfOTAnLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbigtMSwgJ3llYXInKSwgdGV4dDogJ0xhc3QgOTAgRGF5cycgfSlcbiAgICBpZihfLmluY2x1ZGVzKGluY2x1ZGUsICduZXh0JykpIG9wdGlvbnMucHVzaCh7IHZhbHVlOiAnbmV4dF85MCcsIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uKDEsICd5ZWFyJyksIHRleHQ6ICdOZXh0IDkwIERheXMnIH0pXG4gICAgb3B0aW9ucy5wdXNoKHsgdmFsdWU6ICd5dGQnLCBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbigxLCAneWVhcicpLCB0ZXh0OiAnWWVhciB0byBEYXRlJyB9KVxuICAgIG9wdGlvbnMucHVzaCh7IHZhbHVlOiAnbHRkJywgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24oMSwgJ3llYXInKSwgdGV4dDogJ0xpZmUgdG8gRGF0ZScgfSlcbiAgICByZXR1cm4gb3B0aW9uc1xuICB9XG5cbiAgZGVzY3JpcHRpb24ocXVhbnRpdHksIHVuaXQpIHtcbiAgICBjb25zdCBzdGFydCA9IG1vbWVudCgpLmFkZChxdWFudGl0eSwgdW5pdCkuc3RhcnRPZih1bml0KVxuICAgIGNvbnN0IGVuZCA9IG1vbWVudCgpLmFkZChxdWFudGl0eSwgdW5pdCkuZW5kT2YodW5pdClcbiAgICBjb25zdCBzdGFydGRhdGUgPSAoc3RhcnQuZm9ybWF0KCdZWScpICE9PSBlbmQuZm9ybWF0KCdZWScpKSA/IHN0YXJ0LmZvcm1hdCgnTU1NIEQsIFlZWVknKSA6ICBzdGFydC5mb3JtYXQoJ01NTSBEJylcbiAgICBjb25zdCBlbmRkYXRlID0gIChzdGFydC5mb3JtYXQoJ01NJykgIT09IGVuZC5mb3JtYXQoJ01NJykpID8gZW5kLmZvcm1hdCgnTU1NIEQsIFlZWVknKSA6IGVuZC5mb3JtYXQoJ0QsIFlZWVknKVxuICAgIHJldHVybiBgJHtzdGFydGRhdGV9IC0gJHtlbmRkYXRlfWBcbiAgfVxuXG4gIF9oYW5kbGVSZW1vdmVQYW5lbCgpIHtcbiAgICB0aGlzLnByb3BzLm9uUmVtb3ZlUGFuZWwoKVxuICB9XG5cbiAgX2hhbmRsZVJlc2V0KCkge1xuICAgIGNvbnN0IHsgbmFtZSwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBvbkNoYW5nZShuYW1lLCBudWxsKVxuICB9XG5cbn1cblxuY2xhc3MgRGF0ZXJhbmdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZvcm1hdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbXV0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgdmFsdWVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQWRkUGFuZWw6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1pdGVtXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUNsaWNrLmJpbmQodGhpcykgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbS10aXRsZVwiPlxuICAgICAgICAgIHsgbGFiZWwgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbS1pY29uXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2hhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMucHJvcHMub25BZGRQYW5lbCg8RGF0ZXJhbmdlUGFuZWwgeyAuLi50aGlzLnByb3BzIH0gLz4pXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXRlcmFuZ2VcbiJdfQ==