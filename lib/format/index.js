'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Format = function (_React$Component) {
  _inherits(Format, _React$Component);

  function Format() {
    _classCallCheck(this, Format);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Format).apply(this, arguments));
  }

  _createClass(Format, [{
    key: 'render',
    value: function render() {
      var Content = Default;
      if (_lodash2.default.isFunction(this.props.format)) {
        Content = this.props.format;
      } else if (this.props.format == 'status') {
        Content = Status;
      } else if (this.props.format == 'price') {
        Content = Price;
      } else if (this.props.format == 'date') {
        Content = Date;
      } else if (this.props.format == 'datetime') {
        Content = DateTime;
      } else if (this.props.format == 'check_times') {
        Content = CheckTimes;
      } else if (this.props.format == 'check') {
        Content = Check;
      } else if (this.props.format == 'capitalize') {
        Content = Capitalize;
      } else if (this.props.format == 'raw') {
        Content = Raw;
      } else if (this.props.value === '') {
        Content = Empty;
      }
      return _react2.default.createElement(Content, this.props);
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

var Raw = function Raw(props) {
  return _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: props.value } });
};

var Empty = function Empty(props) {
  return _react2.default.createElement('span', { dangerouslySetInnerHTML: { __html: '&nbsp;' } });
};

var Status = function Status(props) {
  return _react2.default.createElement(
    'span',
    { className: props.value.toLowerCase() },
    props.value.toUpperCase()
  );
};

var CheckTimes = function CheckTimes(props) {
  return props.value !== false && !_lodash2.default.isNull(props.value) || props.value === true ? _react2.default.createElement('i', { className: 'icon green check' }) : _react2.default.createElement('i', { className: 'icon red times' });
};

var Check = function Check(props) {
  return props.value !== false && !_lodash2.default.isNull(props.value) || props.value === true ? _react2.default.createElement('i', { className: 'icon green check' }) : _react2.default.createElement('span', null);
};

var Price = function Price(props) {
  return _react2.default.createElement(
    'span',
    null,
    numeral(props.value).format('$0,0.00')
  );
};

var Date = function Date(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.value ? (0, _moment2.default)(props.value).format('MM/DD/YY') : ''
  );
};

var DateTime = function DateTime(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.value ? (0, _moment2.default)(props.value).format('MM/DD/YY @ hh:mm A') : ''
  );
};

var Capitalize = function Capitalize(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.value.toUpperCase()
  );
};

exports.default = Format;