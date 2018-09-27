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