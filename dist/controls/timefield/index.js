'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _lookup = require('../lookup');

var _lookup2 = _interopRequireDefault(_lookup);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeFieldToken = function TimeFieldToken(_ref) {
  var text = _ref.text,
      duration = _ref.duration;
  return _react2.default.createElement(
    'div',
    { className: 'reframe-timefield-token' },
    text,
    duration && _react2.default.createElement(
      'span',
      { className: 'reframe-timefield-token-duration' },
      '(',
      duration >= 1 ? (0, _pluralize2.default)('hour', duration, true) : (0, _pluralize2.default)('mins', duration * 60, true),
      ')'
    )
  );
};

TimeFieldToken.propTypes = {
  text: _propTypes2.default.string,
  duration: _propTypes2.default.number
};

var TimeField = function (_React$Component) {
  (0, _inherits3.default)(TimeField, _React$Component);

  function TimeField() {
    (0, _classCallCheck3.default)(this, TimeField);
    return (0, _possibleConstructorReturn3.default)(this, (TimeField.__proto__ || Object.getPrototypeOf(TimeField)).apply(this, arguments));
  }

  (0, _createClass3.default)(TimeField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_lookup2.default, this._getLookup());
    }
  }, {
    key: '_getLookup',
    value: function _getLookup() {
      return (0, _extends3.default)({}, this.props, {
        defaultValue: this._getStandardized(this.props.defaultValue),
        type: 'lookup',
        options: this._getOptions(),
        format: TimeFieldToken
      });
    }
  }, {
    key: '_getStandardized',
    value: function _getStandardized(value) {
      return value ? (0, _moment2.default)('2018-01-01 ' + value.replace(/\s?(am|pm)/i, ' $1')).format('HH:mm:ss') : null;
    }
  }, {
    key: '_getOptions',
    value: function _getOptions() {
      var _props = this.props,
          increment = _props.increment,
          start = _props.start;

      var today = (0, _moment2.default)().format('YYYY-MM-DD');
      var startTime = (0, _moment2.default)(today + ' ' + start, 'YYYY-MM-DD HH:mm');
      var endTime = (0, _moment2.default)(today + ' 24:00', 'YYYY-MM-DD HH:mm');
      var steps = endTime.diff(startTime) / 1000 / 60 / 60 * (60 / increment);
      var currTime = (0, _moment2.default)(today + ' ' + start, 'YYYY-MM-DD HH:mm');
      return Array.apply(null, { length: steps }).reduce(function (times, i) {
        var value = {
          value: currTime.format('HH:mm:ss'),
          text: currTime.format('hh:mm A'),
          duration: currTime.diff(startTime) / 1000 / 60 / 60
        };
        currTime.add(increment, 'minutes');
        return [].concat((0, _toConsumableArray3.default)(times), [value]);
      }, []);
    }
  }]);
  return TimeField;
}(_react2.default.Component);

TimeField.propTypes = {
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  duration: _propTypes2.default.bool,
  increment: _propTypes2.default.number,
  prompt: _propTypes2.default.string,
  start: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func
};
TimeField.defaultProps = {
  prompt: 'Choose a time',
  duration: false,
  increment: 15,
  start: '00:00',
  tabIndex: 0
};
exports.default = TimeField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVGltZUZpZWxkVG9rZW4iLCJ0ZXh0IiwiZHVyYXRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJUaW1lRmllbGQiLCJfZ2V0TG9va3VwIiwicHJvcHMiLCJkZWZhdWx0VmFsdWUiLCJfZ2V0U3RhbmRhcmRpemVkIiwidHlwZSIsIm9wdGlvbnMiLCJfZ2V0T3B0aW9ucyIsImZvcm1hdCIsInZhbHVlIiwicmVwbGFjZSIsImluY3JlbWVudCIsInN0YXJ0IiwidG9kYXkiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwic3RlcHMiLCJkaWZmIiwiY3VyclRpbWUiLCJBcnJheSIsImFwcGx5IiwibGVuZ3RoIiwicmVkdWNlIiwidGltZXMiLCJpIiwiYWRkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkaXNhYmxlZCIsImJvb2wiLCJwcm9tcHQiLCJ0YWJJbmRleCIsIm9uQnVzeSIsImZ1bmMiLCJvbkNoYW5nZSIsIm9uRm9jdXMiLCJvbkJsdXIiLCJvblJlYWR5Iiwib25LZXlQcmVzcyIsIm9uS2V5VXAiLCJvbktleURvd24iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGlCQUFpQixTQUFqQkEsY0FBaUI7QUFBQSxNQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTQyxRQUFULFFBQVNBLFFBQVQ7QUFBQSxTQUNyQjtBQUFBO0FBQUEsTUFBSyxXQUFVLHlCQUFmO0FBQ0lELFFBREo7QUFFSUMsZ0JBQ0E7QUFBQTtBQUFBLFFBQU0sV0FBVSxrQ0FBaEI7QUFBQTtBQUNLQSxrQkFBWSxDQUFaLEdBQWdCLHlCQUFVLE1BQVYsRUFBa0JBLFFBQWxCLEVBQTRCLElBQTVCLENBQWhCLEdBQW9ELHlCQUFVLE1BQVYsRUFBa0JBLFdBQVcsRUFBN0Is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QUlwQkMsU0FBTyxPQUphO0FBS3BCbUIsWUFBVTtBQUxVLEM7a0JBaURUL0IsUyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExvb2t1cCBmcm9tICcuLi9sb29rdXAnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuXG5jb25zdCBUaW1lRmllbGRUb2tlbiA9ICh7IHRleHQsIGR1cmF0aW9uIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXRpbWVmaWVsZC10b2tlblwiPlxuICAgIHsgdGV4dCB9XG4gICAgeyBkdXJhdGlvbiAmJlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVmcmFtZS10aW1lZmllbGQtdG9rZW4tZHVyYXRpb25cIj5cbiAgICAgICAgKHsgZHVyYXRpb24gPj0gMSA/IHBsdXJhbGl6ZSgnaG91cicsIGR1cmF0aW9uLCB0cnVlKSA6IHBsdXJhbGl6ZSgnbWlucycsIGR1cmF0aW9uICogNjAsIHRydWUpIH0pXG4gICAgICA8L3NwYW4+XG4gICAgfVxuICA8L2Rpdj5cbilcblxuVGltZUZpZWxkVG9rZW4ucHJvcFR5cGVzID0ge1xuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlclxufVxuXG5jbGFzcyBUaW1lRmllbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkdXJhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaW5jcmVtZW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHByb21wdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzdGFydDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkJ1c3k6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5UHJlc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5VXA6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcHJvbXB0OiAnQ2hvb3NlIGEgdGltZScsXG4gICAgZHVyYXRpb246IGZhbHNlLFxuICAgIGluY3JlbWVudDogMTUsXG4gICAgc3RhcnQ6ICcwMDowMCcsXG4gICAgdGFiSW5kZXg6IDBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPExvb2t1cCB7IC4uLnRoaXMuX2dldExvb2t1cCgpIH0gLz5cbiAgfVxuXG4gIF9nZXRMb29rdXAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICBkZWZhdWx0VmFsdWU6IHRoaXMuX2dldFN0YW5kYXJkaXplZCh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSksXG4gICAgICB0eXBlOiAnbG9va3VwJyxcbiAgICAgIG9wdGlvbnM6IHRoaXMuX2dldE9wdGlvbnMoKSxcbiAgICAgIGZvcm1hdDogVGltZUZpZWxkVG9rZW5cbiAgICB9XG4gIH1cblxuICBfZ2V0U3RhbmRhcmRpemVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID8gbW9tZW50KGAyMDE4LTAxLTAxICR7dmFsdWUucmVwbGFjZSgvXFxzPyhhbXxwbSkvaSwgJyAkMScpfWApLmZvcm1hdCgnSEg6bW06c3MnKSA6IG51bGxcbiAgfVxuXG4gIF9nZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgaW5jcmVtZW50LCBzdGFydCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICBjb25zdCBzdGFydFRpbWUgPSBtb21lbnQoYCR7dG9kYXl9ICR7c3RhcnR9YCwgJ1lZWVktTU0tREQgSEg6bW0nKVxuICAgIGNvbnN0IGVuZFRpbWUgPSBtb21lbnQoYCR7dG9kYXl9IDI0OjAwYCwgJ1lZWVktTU0tREQgSEg6bW0nKVxuICAgIGNvbnN0IHN0ZXBzID0gKGVuZFRpbWUuZGlmZihzdGFydFRpbWUpIC8gMTAwMCAvIDYwIC8gNjApICAqICg2MCAvIGluY3JlbWVudClcbiAgICBjb25zdCBjdXJyVGltZSA9IG1vbWVudChgJHt0b2RheX0gJHtzdGFydH1gLCAnWVlZWS1NTS1ERCBISDptbScpXG4gICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIHsgbGVuZ3RoOiBzdGVwcyB9KS5yZWR1Y2UoKHRpbWVzLCBpKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgdmFsdWU6IGN1cnJUaW1lLmZvcm1hdCgnSEg6bW06c3MnKSxcbiAgICAgICAgdGV4dDogY3VyclRpbWUuZm9ybWF0KCdoaDptbSBBJyksXG4gICAgICAgIGR1cmF0aW9uOiBjdXJyVGltZS5kaWZmKHN0YXJ0VGltZSkgLyAxMDAwIC8gNjAgLyA2MFxuICAgICAgfVxuICAgICAgY3VyclRpbWUuYWRkKGluY3JlbWVudCwgJ21pbnV0ZXMnKVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4udGltZXMsXG4gICAgICAgIHZhbHVlXG4gICAgICBdXG4gICAgfSwgW10pXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lRmllbGRcbiJdfQ==