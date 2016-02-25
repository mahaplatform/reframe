'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _select = require('./select.js');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timezoneselect = function (_React$Component) {
  _inherits(Timezoneselect, _React$Component);

  function Timezoneselect(props) {
    _classCallCheck(this, Timezoneselect);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timezoneselect).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Timezoneselect, [{
    key: 'render',
    value: function render() {
      var timezones = [['(GMT-10:00)', 'Hawaii'], ['(GMT-09:00)', 'Alaska'], ['(GMT-08:00)', 'Pacific Time (US & Canada)'], ['(GMT-07:00)', 'Arizona'], ['(GMT-07:00)', 'Mountain Time (US & Canada)'], ['(GMT-06:00)', 'Central Time (US & Canada)'], ['(GMT-05:00)', 'Eastern Time (US & Canada)'], ['(GMT-05:00)', 'Indiana (East)'], ['', '-------------'], ['(GMT-11:00)', 'American Samoa'], ['(GMT-11:00)', 'International Date Line West'], ['(GMT-11:00)', 'Midway Island'], ['(GMT-08:00)', 'Tijuana'], ['(GMT-07:00)', 'Chihuahua'], ['(GMT-07:00)', 'Mazatlan'], ['(GMT-06:00)', 'Central America'], ['(GMT-06:00)', 'Guadalajara'], ['(GMT-06:00)', 'Mexico City'], ['(GMT-06:00)', 'Monterrey'], ['(GMT-06:00)', 'Saskatchewan'], ['(GMT-05:00)', 'Bogota'], ['(GMT-05:00)', 'Lima'], ['(GMT-05:00)', 'Quito'], ['(GMT-04:30)', 'Caracas'], ['(GMT-04:00)', 'Atlantic Time (Canada)'], ['(GMT-04:00)', 'Georgetown'], ['(GMT-04:00)', 'La Paz'], ['(GMT-03:30)', 'Newfoundland'], ['(GMT-03:00)', 'Brasilia'], ['(GMT-03:00)', 'Buenos Aires'], ['(GMT-03:00)', 'Greenland'], ['(GMT-03:00)', 'Montevideo'], ['(GMT-03:00)', 'Santiago'], ['(GMT-02:00)', 'Mid-Atlantic'], ['(GMT-01:00)', 'Azores'], ['(GMT-01:00)', 'Cape Verde Is.'], ['(GMT+00:00)', 'Casablanca'], ['(GMT+00:00)', 'Dublin'], ['(GMT+00:00)', 'Edinburgh'], ['(GMT+00:00)', 'Lisbon'], ['(GMT+00:00)', 'London'], ['(GMT+00:00)', 'Monrovia'], ['(GMT+00:00)', 'UTC'], ['(GMT+01:00)', 'Amsterdam'], ['(GMT+01:00)', 'Belgrade'], ['(GMT+01:00)', 'Berlin'], ['(GMT+01:00)', 'Bern'], ['(GMT+01:00)', 'Bratislava'], ['(GMT+01:00)', 'Brussels'], ['(GMT+01:00)', 'Budapest'], ['(GMT+01:00)', 'Copenhagen'], ['(GMT+01:00)', 'Ljubljana'], ['(GMT+01:00)', 'Madrid'], ['(GMT+01:00)', 'Paris'], ['(GMT+01:00)', 'Prague'], ['(GMT+01:00)', 'Rome'], ['(GMT+01:00)', 'Sarajevo'], ['(GMT+01:00)', 'Skopje'], ['(GMT+01:00)', 'Stockholm'], ['(GMT+01:00)', 'Vienna'], ['(GMT+01:00)', 'Warsaw'], ['(GMT+01:00)', 'West Central Africa'], ['(GMT+01:00)', 'Zagreb'], ['(GMT+02:00)', 'Athens'], ['(GMT+02:00)', 'Bucharest'], ['(GMT+02:00)', 'Cairo'], ['(GMT+02:00)', 'Harare'], ['(GMT+02:00)', 'Helsinki'], ['(GMT+02:00)', 'Istanbul'], ['(GMT+02:00)', 'Jerusalem'], ['(GMT+02:00)', 'Kyiv'], ['(GMT+02:00)', 'Pretoria'], ['(GMT+02:00)', 'Riga'], ['(GMT+02:00)', 'Sofia'], ['(GMT+02:00)', 'Tallinn'], ['(GMT+02:00)', 'Vilnius'], ['(GMT+03:00)', 'Baghdad'], ['(GMT+03:00)', 'Kuwait'], ['(GMT+03:00)', 'Minsk'], ['(GMT+03:00)', 'Moscow'], ['(GMT+03:00)', 'Nairobi'], ['(GMT+03:00)', 'Riyadh'], ['(GMT+03:00)', 'St. Petersburg'], ['(GMT+03:00)', 'Volgograd'], ['(GMT+03:30)', 'Tehran'], ['(GMT+04:00)', 'Abu Dhabi'], ['(GMT+04:00)', 'Baku'], ['(GMT+04:00)', 'Muscat'], ['(GMT+04:00)', 'Tbilisi'], ['(GMT+04:00)', 'Yerevan'], ['(GMT+04:30)', 'Kabul'], ['(GMT+05:00)', 'Ekaterinburg'], ['(GMT+05:00)', 'Islamabad'], ['(GMT+05:00)', 'Karachi'], ['(GMT+05:00)', 'Tashkent'], ['(GMT+05:30)', 'Chennai'], ['(GMT+05:30)', 'Kolkata'], ['(GMT+05:30)', 'Mumbai'], ['(GMT+05:30)', 'New Delhi'], ['(GMT+05:30)', 'Sri Jayawardenepura'], ['(GMT+05:45)', 'Kathmandu'], ['(GMT+06:00)', 'Almaty'], ['(GMT+06:00)', 'Astana'], ['(GMT+06:00)', 'Dhaka'], ['(GMT+06:00)', 'Novosibirsk'], ['(GMT+06:00)', 'Urumqi'], ['(GMT+06:30)', 'Rangoon'], ['(GMT+07:00)', 'Bangkok'], ['(GMT+07:00)', 'Hanoi'], ['(GMT+07:00)', 'Jakarta'], ['(GMT+07:00)', 'Krasnoyarsk'], ['(GMT+08:00)', 'Beijing'], ['(GMT+08:00)', 'Chongqing'], ['(GMT+08:00)', 'Hong Kong'], ['(GMT+08:00)', 'Irkutsk'], ['(GMT+08:00)', 'Kuala Lumpur'], ['(GMT+08:00)', 'Perth'], ['(GMT+08:00)', 'Singapore'], ['(GMT+08:00)', 'Taipei'], ['(GMT+08:00)', 'Ulaanbaatar'], ['(GMT+09:00)', 'Osaka'], ['(GMT+09:00)', 'Sapporo'], ['(GMT+09:00)', 'Seoul'], ['(GMT+09:00)', 'Tokyo'], ['(GMT+09:00)', 'Yakutsk'], ['(GMT+09:30)', 'Adelaide'], ['(GMT+09:30)', 'Darwin'], ['(GMT+10:00)', 'Brisbane'], ['(GMT+10:00)', 'Canberra'], ['(GMT+10:00)', 'Guam'], ['(GMT+10:00)', 'Hobart'], ['(GMT+10:00)', 'Magadan'], ['(GMT+10:00)', 'Melbourne'], ['(GMT+10:00)', 'Port Moresby'], ['(GMT+10:00)', 'Sydney'], ['(GMT+10:00)', 'Vladivostok'], ['(GMT+11:00)', 'New Caledonia'], ['(GMT+11:00)', 'Solomon Is.'], ['(GMT+12:00)', 'Auckland'], ['(GMT+12:00)', 'Fiji'], ['(GMT+12:00)', 'Kamchatka'], ['(GMT+12:00)', 'Marshall Is.'], ['(GMT+12:00)', 'Wellington'], ['(GMT+12:45)', 'Chatham Is.'], ['(GMT+13:00)', "Nuku'alofa"], ['(GMT+13:00)', 'Samoa'], ['(GMT+13:00)', 'Tokelau Is.']];
      var options = _(timezones).map(function (state) {
        return { key: state[1], value: state[0] + ' ' + state[1] };
      }).value();
      return _react2.default.createElement(_select2.default, _extends({ ref: 'control' }, this.props, { options: options }));
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.control.getValue();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      return this.refs.control.setValue(value);
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.refs.control.clearField();
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Timezoneselect;
}(_react2.default.Component);

Timezoneselect.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string
};
Timezoneselect.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  onChange: function onChange() {}
};
exports.default = Timezoneselect;