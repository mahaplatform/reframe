'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chooser = function (_React$Component) {
  _inherits(Chooser, _React$Component);

  function Chooser() {
    _classCallCheck(this, Chooser);

    return _possibleConstructorReturn(this, (Chooser.__proto__ || Object.getPrototypeOf(Chooser)).apply(this, arguments));
  }

  _createClass(Chooser, [{
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
        'div',
        { className: 'reframe-modal-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-navigation', onClick: this._handleCancel.bind(this) },
            _react2.default.createElement('i', { className: 'chevron left icon' }),
            'Cancel'
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-title' },
            'Choose Date'
          ),
          _react2.default.createElement('div', { className: 'reframe-modal-panel-header-navigation' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-body' },
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
                  _react2.default.createElement('i', { className: 'left chevron icon' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-datefield-title' },
                  (0, _moment2.default)(current).format('MMMM YYYY').toUpperCase()
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'reframe-datefield-next', onClick: this._handleNext.bind(this) },
                  _react2.default.createElement('i', { className: 'right chevron icon' })
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
              [].concat(_toConsumableArray(Array(6))).map(function (week, i) {
                return _react2.default.createElement(
                  'div',
                  { key: 'datefield_week_' + i, className: 'reframe-datefield-week' },
                  [].concat(_toConsumableArray(Array(7))).map(function (day, j) {
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
        )
      );
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
exports.default = Chooser;