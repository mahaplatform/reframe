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

var _modal_panel = require('../../components/modal_panel');

var _modal_panel2 = _interopRequireDefault(_modal_panel);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chooser = function (_React$Component) {
  (0, _inherits3.default)(Chooser, _React$Component);

  function Chooser() {
    (0, _classCallCheck3.default)(this, Chooser);
    return (0, _possibleConstructorReturn3.default)(this, (Chooser.__proto__ || Object.getPrototypeOf(Chooser)).apply(this, arguments));
  }

  (0, _createClass3.default)(Chooser, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          month = _props.month,
          value = _props.value,
          year = _props.year;

      var current = { month: month, year: year, day: '01' };
      var start = (0, _moment2.default)(current).startOf('month');
      var end = (0, _moment2.default)(current).endOf('month');
      var date = (0, _moment2.default)(current).startOf('week').subtract(1, 'day');
      var today = (0, _moment2.default)();
      return _react2.default.createElement(
        _modal_panel2.default,
        this._getPanel(),
        _react2.default.createElement(
          'div',
          { className: 'reframe-datefield-chooser' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-datefield-month' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-datefield-header' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-previous', onClick: this._handlePrevious.bind(this) },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-left' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-title' },
                (0, _moment2.default)(current).format('MMMM YYYY').toUpperCase()
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-next', onClick: this._handleNext.bind(this) },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-right' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-datefield-weekdays' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Sun'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Mon'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Tue'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Wed'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Thu'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Fri'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-datefield-weekday' },
                'Sat'
              )
            ),
            [].concat((0, _toConsumableArray3.default)(Array(6))).map(function (week, i) {
              return _react2.default.createElement(
                'div',
                { key: 'datefield_week_' + i, className: 'reframe-datefield-week' },
                [].concat((0, _toConsumableArray3.default)(Array(7))).map(function (day, j) {
                  date.add('1', 'days');
                  var classes = ['reframe-datefield-day'];
                  if (date.isBefore(start, 'day') || date.isAfter(end, 'day')) classes.push('notmonth');
                  if (date.isSame(value, 'day')) classes.push('selected');
                  if (date.isSame(today, 'day')) classes.push('today');
                  return _react2.default.createElement(
                    'div',
                    { key: 'datefield_day_' + i + '_' + j, className: classes.join(' '), onClick: _this2._handleChoose.bind(_this2, (0, _moment2.default)(date)) },
                    date.format('DD')
                  );
                })
              );
            })
          )
        )
      );
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      return {
        title: 'Choose Date',
        leftItems: [{ label: 'Cancel', handler: this._handleCancel.bind(this) }]
      };
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(value) {
      var _props2 = this.props,
          onChoose = _props2.onChoose,
          onSetCurrent = _props2.onSetCurrent;

      onSetCurrent(parseInt(value.format('MM')) - 1, parseInt(value.format('YYYY')));
      onChoose(value);
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.props.onCancel();
    }
  }, {
    key: '_handlePrevious',
    value: function _handlePrevious() {
      this.props.onPrevious();
    }
  }, {
    key: '_handleNext',
    value: function _handleNext() {
      this.props.onNext();
    }
  }]);
  return Chooser;
}(_react2.default.Component);

Chooser.propTypes = {
  month: _propTypes2.default.number,
  value: _propTypes2.default.any,
  year: _propTypes2.default.number,
  onCancel: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  onPrevious: _propTypes2.default.func,
  onSetCurrent: _propTypes2.default.func
};


var mapStateToProps = function mapStateToProps(state, props) {
  return state.reframe.datefield[props.cid];
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Chooser);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ2hvb3NlciIsInByb3BzIiwibW9udGgiLCJ2YWx1ZSIsInllYXIiLCJjdXJyZW50IiwiZGF5Iiwic3RhcnQiLCJzdGFydE9mIiwiZW5kIiwiZW5kT2YiLCJkYXRlIiwic3VidHJhY3QiLCJ0b2RheSIsIl9nZXRQYW5lbCIsIl9oYW5kbGVQcmV2aW91cyIsImJpbmQiLCJmb3JtYXQiLCJ0b1VwcGVyQ2FzZSIsIl9oYW5kbGVOZXh0IiwiQXJyYXkiLCJtYXAiLCJ3ZWVrIiwiaSIsImoiLCJhZGQiLCJjbGFzc2VzIiwiaXNCZWZvcmUiLCJpc0FmdGVyIiwicHVzaCIsImlzU2FtZSIsImpvaW4iLCJfaGFuZGxlQ2hvb3NlIiwidGl0bGUiLCJsZWZ0SXRlbXMiLCJsYWJlbCIsImhhbmRsZXIiLCJfaGFuZGxlQ2FuY2VsIiwib25DaG9vc2UiLCJvblNldEN1cnJlbnQiLCJwYXJzZUludCIsIm9uQ2FuY2VsIiwib25QcmV2aW91cyIsIm9uTmV4dCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiYW55IiwiZnVuYyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwicmVmcmFtZSIsImRhdGVmaWVsZCIsImNpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLE87Ozs7Ozs7Ozs7NkJBYUs7QUFBQTs7QUFBQSxtQkFDd0IsS0FBS0MsS0FEN0I7QUFBQSxVQUNDQyxLQURELFVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxLQURSLFVBQ1FBLEtBRFI7QUFBQSxVQUNlQyxJQURmLFVBQ2VBLElBRGY7O0FBRVAsVUFBTUMsVUFBVSxFQUFFSCxZQUFGLEVBQVNFLFVBQVQsRUFBZUUsS0FBSyxJQUFwQixFQUFoQjtBQUNBLFVBQU1DLFFBQVEsc0JBQU9GLE9BQVAsRUFBZ0JHLE9BQWhCLENB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Y0MsU0FBZCxDQUF3QnJELE1BQU1zRCxHQUE5QixDQUFsQjtBQUFBLENBQXhCOztrQkFFZSx5QkFBUUosZUFBUixFQUF5Qm5ELE9BQXpCLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb2RhbFBhbmVsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWxfcGFuZWwnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQ2hvb3NlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBtb250aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcbiAgICB5ZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNob29zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25OZXh0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblByZXZpb3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNldEN1cnJlbnQ6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtb250aCwgdmFsdWUsIHllYXIgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjdXJyZW50ID0geyBtb250aCwgeWVhciwgZGF5OiAnMDEnfVxuICAgIGNvbnN0IHN0YXJ0ID0gbW9tZW50KGN1cnJlbnQpLnN0YXJ0T2YoJ21vbnRoJylcbiAgICBjb25zdCBlbmQgPSBtb21lbnQoY3VycmVudCkuZW5kT2YoJ21vbnRoJylcbiAgICBjb25zdCBkYXRlID0gbW9tZW50KGN1cnJlbnQpLnN0YXJ0T2YoJ3dlZWsnKS5zdWJ0cmFjdCgxLCAnZGF5JylcbiAgICBjb25zdCB0b2RheSA9IG1vbWVudCgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFBhbmVsIHsgLi4udGhpcy5fZ2V0UGFuZWwoKSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZGF0ZWZpZWxkLWNob29zZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZGF0ZWZpZWxkLW1vbnRoXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZGF0ZWZpZWxkLWhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZGF0ZWZpZWxkLXByZXZpb3VzXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZVByZXZpb3VzLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWNoZXZyb24tbGVmdFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZGF0ZWZpZWxkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgeyBtb21lbnQoY3VycmVudCkuZm9ybWF0KCdNTU1NIFlZWVknKS50b1VwcGVyQ2FzZSgpIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1kYXRlZmllbGQtbmV4dFwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVOZXh0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWNoZXZyb24tcmlnaHRcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWRhdGVmaWVsZC13ZWVrZGF5c1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZGF0ZWZpZWxkLXdlZWtkYXlcIj5TdW48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWRhdGVmaWVsZC13ZWVrZGF5XCI+TW9uPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1kYXRlZmllbGQtd2Vla2RheVwiPlR1ZTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZGF0ZWZpZWxkLXdlZWtkYXlcIj5XZWQ8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWRhdGVmaWVsZC13ZWVrZGF5XCI+VGh1PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1kYXRlZmllbGQtd2Vla2RheVwiPkZyaTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZGF0ZWZpZWxkLXdlZWtkYXlcIj5TYXQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyBbLi4uQXJyYXkoNildLm1hcCgod2VlaywgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17YGRhdGVmaWVsZF93ZWVrXyR7aX1gfSBjbGFzc05hbWU9XCJyZWZyYW1lLWRhdGVmaWVsZC13ZWVrXCI+XG4gICAgICAgICAgICAgICAgeyBbLi4uQXJyYXkoNyldLm1hcCgoZGF5LCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICBkYXRlLmFkZCgnMScsICdkYXlzJylcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbJ3JlZnJhbWUtZGF0ZWZpZWxkLWRheSddXG4gICAgICAgICAgICAgICAgICBpZihkYXRlLmlzQmVmb3JlKHN0YXJ0LCAnZGF5JykgfHwgZGF0ZS5pc0FmdGVyKGVuZCwgJ2RheScpKSBjbGFzc2VzLnB1c2goJ25vdG1vbnRoJylcbiAgICAgICAgICAgICAgICAgIGlmKGRhdGUuaXNTYW1lKHZhbHVlLCAnZGF5JykpIGNsYXNzZXMucHVzaCgnc2VsZWN0ZWQnKVxuICAgICAgICAgICAgICAgICAgaWYoZGF0ZS5pc1NhbWUodG9kYXksICdkYXknKSkgY2xhc3Nlcy5wdXNoKCd0b2RheScpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YGRhdGVmaWVsZF9kYXlfJHtpfV8ke2p9YH0gY2xhc3NOYW1lPXsgY2xhc3Nlcy5qb2luKCcgJyl9IG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDaG9vc2UuYmluZCh0aGlzLCBtb21lbnQoZGF0ZSkpIH0+XG4gICAgICAgICAgICAgICAgICAgICAgeyBkYXRlLmZvcm1hdCgnREQnKSB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbFBhbmVsPlxuICAgIClcbiAgfVxuXG4gIF9nZXRQYW5lbCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICdDaG9vc2UgRGF0ZScsXG4gICAgICBsZWZ0SXRlbXM6IFtcbiAgICAgICAgeyBsYWJlbDogJ0NhbmNlbCcsIGhhbmRsZXI6IHRoaXMuX2hhbmRsZUNhbmNlbC5iaW5kKHRoaXMpIH1cbiAgICAgIF1cbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQ2hvb3NlKHZhbHVlKSB7XG4gICAgY29uc3QgeyBvbkNob29zZSwgb25TZXRDdXJyZW50IH0gPSB0aGlzLnByb3BzXG4gICAgb25TZXRDdXJyZW50KHBhcnNlSW50KHZhbHVlLmZvcm1hdCgnTU0nKSkgLSAxLCBwYXJzZUludCh2YWx1ZS5mb3JtYXQoJ1lZWVknKSkpXG4gICAgb25DaG9vc2UodmFsdWUpXG4gIH1cblxuICBfaGFuZGxlQ2FuY2VsKCkge1xuICAgIHRoaXMucHJvcHMub25DYW5jZWwoKVxuICB9XG5cbiAgX2hhbmRsZVByZXZpb3VzKCkge1xuICAgIHRoaXMucHJvcHMub25QcmV2aW91cygpXG4gIH1cblxuICBfaGFuZGxlTmV4dCgpIHtcbiAgICB0aGlzLnByb3BzLm9uTmV4dCgpXG4gIH1cblxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIHByb3BzKSA9PiBzdGF0ZS5yZWZyYW1lLmRhdGVmaWVsZFtwcm9wcy5jaWRdXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShDaG9vc2VyKVxuIl19