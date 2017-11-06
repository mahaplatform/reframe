'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeField = function (_React$Component) {
  _inherits(TimeField, _React$Component);

  function TimeField() {
    _classCallCheck(this, TimeField);

    return _possibleConstructorReturn(this, (TimeField.__proto__ || Object.getPrototypeOf(TimeField)).apply(this, arguments));
  }

  _createClass(TimeField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_lookup2.default, this._getLookup());
    }
  }, {
    key: '_getLookup',
    value: function _getLookup() {
      var _this2 = this;

      return _extends({}, this.props, {
        type: 'lookup',
        options: this._getOptions(),
        format: function format(_ref) {
          var text = _ref.text,
              duration = _ref.duration;
          return _react2.default.createElement(
            'div',
            { className: 'reframe-timefield-token' },
            text,
            _this2.props.duration && _react2.default.createElement(
              'span',
              { className: 'reframe-timefield-token-duration' },
              '(',
              duration >= 1 ? (0, _pluralize2.default)('hour', duration, true) : (0, _pluralize2.default)('mins', duration * 60, true),
              ')'
            )
          );
        }
      });
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

        return [].concat(_toConsumableArray(times), [value]);
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
  start: '12:00AM',
  tabIndex: 0
};
exports.default = TimeField;