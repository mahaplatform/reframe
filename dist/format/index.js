'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Format = function (_React$Component) {
  _inherits(Format, _React$Component);

  function Format() {
    _classCallCheck(this, Format);

    return _possibleConstructorReturn(this, (Format.__proto__ || Object.getPrototypeOf(Format)).apply(this, arguments));
  }

  _createClass(Format, [{
    key: 'render',
    value: function render() {
      var format = this.props.format;

      if (_lodash2.default.isFunction(format)) {
        return format(this.props);
      } else if (format === 'status') {
        return Status(this.props);
      } else if (format === 'currency') {
        return Currency(this.props);
      } else if (format === 'date') {
        return Date(this.props, 'MM/DD/YY');
      } else if (format === 'datetime') {
        return Date(this.props, 'MM/DD/YY @ hh:mm A');
      } else if (format === 'check_times') {
        return Check(this.props, true);
      } else if (format === 'yes_no') {
        return YesNo(this.props, true);
      } else if (format === 'check') {
        return Check(this.props, false);
      } else if (format === 'capitalize') {
        return Capitalize(this.props);
      } else if (format === 'email') {
        return Email(this.props);
      } else if (format === 'link') {
        return Link(this.props);
      } else if (format === 'raw') {
        return Raw(this.props);
      } else if (format === 'element') {
        return Element(this.props);
      } else if (this.props.value === '') {
        return Empty(this.props);
      } else {
        return Default(this.props);
      }
    }
  }]);

  return Format;
}(_react2.default.Component);

var Default = function Default(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.value
  );
};

var Element = function Element(props) {
  return _react2.default.createElement(props.value, null);
};

var Raw = function Raw(props) {
  return _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: props.value } });
};

var Empty = function Empty() {
  return _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: '&nbsp;' } });
};

var Status = function Status(props) {
  return props.value ? _react2.default.createElement(
    'span',
    { className: props.value.toLowerCase() },
    props.value.toUpperCase()
  ) : _react2.default.createElement('span', null);
};

var Check = function Check(props, times) {
  if (props.value === true) return _react2.default.createElement('i', { className: 'icon green check' });
  if (times && props.value === false) return _react2.default.createElement('i', { className: 'icon red remove' });
  return _react2.default.createElement('span', null);
};

var YesNo = function YesNo(props) {
  return props.value === false ? _react2.default.createElement(
    'span',
    { className: 'no' },
    'NO'
  ) : _react2.default.createElement(
    'span',
    { className: 'yes' },
    'YES'
  );
};

var Currency = function Currency(props) {
  return _react2.default.createElement(
    'span',
    null,
    (0, _numeral2.default)(props.value).format('$0,0.00')
  );
};

var Date = function Date(props, format) {
  return _react2.default.createElement(
    'span',
    null,
    props.value ? (0, _moment2.default)(props.value).format(format) : ''
  );
};

var Capitalize = function Capitalize(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.value.toUpperCase()
  );
};

var Email = function Email(props) {
  return _react2.default.createElement(
    'a',
    { href: 'mailto:' + props.value },
    props.value
  );
};

var Link = function Link(props) {
  return _react2.default.createElement(
    'a',
    { href: props.value, target: '_blank' },
    props.value
  );
};

exports.default = Format;