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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _monthselect = require('./monthselect.js');

var _monthselect2 = _interopRequireDefault(_monthselect);

var _numberselect = require('./numberselect.js');

var _numberselect2 = _interopRequireDefault(_numberselect);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _semantic_classes = require('../utils/semantic_classes');

var _semantic_classes2 = _interopRequireDefault(_semantic_classes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IGNORED = Symbol('Ignored');

var Dateselect = function (_React$Component) {
  _inherits(Dateselect, _React$Component);

  function Dateselect(props) {
    _classCallCheck(this, Dateselect);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Dateselect).call(this, props));

    _this.state = {
      focused: false,
      validated: false,
      isValid: null
    };
    return _this;
  }

  _createClass(Dateselect, [{
    key: 'render',
    value: function render() {
      var month = this.props.defaultValue ? (0, _moment2.default)(this.props.defaultValue).format('MM') : null;
      var day = this.props.defaultValue ? (0, _moment2.default)(this.props.defaultValue).format('DD') : null;
      var year = this.props.defaultValue ? (0, _moment2.default)(this.props.defaultValue).format('YYYY') : null;

      var yearOptions = { year: year, startYear: this.props.startYear, endYear: this.props.endYear };

      return _react2.default.createElement(
        'div',
        { className: _semantic_classes2.default.numberToClass(this.props.fields.length) + ' fields dateselect' },
        _lodash2.default.includes(this.props.fields, 'month') ? _react2.default.createElement(MonthField, { ref: 'month', month: month, handleChange: this.handleChange.bind(this) }) : null,
        _lodash2.default.includes(this.props.fields, 'day') ? _react2.default.createElement(DayField, { ref: 'day', day: day, handleChange: this.handleChange.bind(this) }) : null,
        _lodash2.default.includes(this.props.fields, 'year') ? _react2.default.createElement(YearField, _extends({ ref: 'year' }, yearOptions, { handleChange: this.handleChange.bind(this) })) : null
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var value = {
        months: _lodash2.default.result(this, 'refs.month.getValue', IGNORED),
        days: _lodash2.default.result(this, 'refs.day.getValue', IGNORED),
        years: _lodash2.default.result(this, 'refs.year.getValue', IGNORED)
      };

      var anyNull = (0, _lodash2.default)(value).values().reject(function (v) {
        return v === IGNORED;
      }).any(_lodash2.default.isNull);
      var allNull = (0, _lodash2.default)(value).values().reject(function (v) {
        return v === IGNORED;
      }).all(_lodash2.default.isNull);

      if (allNull) {
        return null;
      }

      if (this.props.requireAll && anyNull) {
        return null;
      }

      value.months -= 1;
      return (0, _moment2.default)(_lodash2.default.omit(value, function (v) {
        return _lodash2.default.isNull(v) || v === IGNORED || v < 0;
      })).format(this.props.format);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var m = (0, _moment2.default)(value);
      this.refs.month.setValue(m.format('MM'));
      this.refs.day.setValue(m.format('DD'));
      this.refs.year.setValue(m.format('YYYY'));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.props.onChange(this.props.code, this.getValue());
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.refs.month.clearField();
      this.refs.day.clearField();
      this.refs.year.clearField();
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Dateselect;
}(_react2.default.Component);

Dateselect.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string
};
Dateselect.defaultProps = {
  code: null,
  disabled: false,
  dropdown: false,
  requireAll: true,
  placeholder: '',
  defaultValue: '',
  startYear: (0, _moment2.default)().subtract(10, 'years').format('YYYY'),
  endYear: (0, _moment2.default)().format('YYYY'),
  fields: ['month', 'day', 'year'],
  format: 'YYYY-MM-DD',
  onChange: function onChange() {}
};
exports.default = Dateselect;

var MonthField = function (_React$Component2) {
  _inherits(MonthField, _React$Component2);

  function MonthField() {
    _classCallCheck(this, MonthField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MonthField).apply(this, arguments));
  }

  _createClass(MonthField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(_monthselect2.default, { ref: 'month', placeholder: 'Month', defaultValue: this.props.month, onChange: this.props.handleChange })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.month.getValue();
    }
  }, {
    key: 'setValue',
    value: function setValue(v) {
      this.refs.month.setValue(v);
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.refs.month.clearField();
    }
  }]);

  return MonthField;
}(_react2.default.Component);

var DayField = function (_React$Component3) {
  _inherits(DayField, _React$Component3);

  function DayField() {
    _classCallCheck(this, DayField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DayField).apply(this, arguments));
  }

  _createClass(DayField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(_numberselect2.default, { ref: 'day', placeholder: 'Day', zeroPad: true, start: '1', end: '31', defaultValue: this.props.day, onChange: this.props.handleChange })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.day.getValue();
    }
  }, {
    key: 'setValue',
    value: function setValue(v) {
      this.refs.day.setValue(v);
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.refs.day.clearField();
    }
  }]);

  return DayField;
}(_react2.default.Component);

var YearField = function (_React$Component4) {
  _inherits(YearField, _React$Component4);

  function YearField() {
    _classCallCheck(this, YearField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(YearField).apply(this, arguments));
  }

  _createClass(YearField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(_numberselect2.default, { ref: 'year', placeholder: 'Year', start: this.props.startYear, end: this.props.endYear, defaultValue: this.props.year, onChange: this.props.handleChange })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs.year.getValue();
    }
  }, {
    key: 'setValue',
    value: function setValue(v) {
      this.refs.year.setValue(v);
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.refs.year.clearField();
    }
  }]);

  return YearField;
}(_react2.default.Component);