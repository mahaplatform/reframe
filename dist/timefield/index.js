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
      return _extends({}, this.props, {
        type: 'lookup',
        options: this._getOptions()
      });
    }
  }, {
    key: '_getOptions',
    value: function _getOptions() {
      var increment = this.props.increment;


      var zeroPad = function zeroPad(number) {
        return number < 10 ? '0' + number : number;
      };

      return [].concat(_toConsumableArray(Array(24))).reduce(function (times, i, hour) {

        var displayHour = hour > 12 ? hour - 12 : hour > 0 ? hour : 12;

        return [].concat(_toConsumableArray(times), _toConsumableArray([].concat(_toConsumableArray(Array(Math.floor(60 / increment)))).map(function (j, index) {

          var displayMinute = index * increment;

          var displayAPM = hour > 11 ? 'PM' : 'AM';

          return {
            value: zeroPad(hour) + ':' + zeroPad(displayMinute) + ':00',
            text: displayHour + ':' + zeroPad(displayMinute) + ' ' + displayAPM
          };
        })));
      }, []);
    }
  }]);

  return TimeField;
}(_react2.default.Component);

TimeField.propTypes = {
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  increment: _propTypes2.default.number,
  prompt: _propTypes2.default.string,
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
  increment: 15
};
exports.default = TimeField;