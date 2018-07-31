'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Format = function (_React$Component) {
  (0, _inherits3.default)(Format, _React$Component);

  function Format() {
    (0, _classCallCheck3.default)(this, Format);
    return (0, _possibleConstructorReturn3.default)(this, (Format.__proto__ || Object.getPrototypeOf(Format)).apply(this, arguments));
  }

  (0, _createClass3.default)(Format, [{
    key: 'render',
    value: function render() {
      var format = this.props.format;

      if (_lodash2.default.isString(format)) {
        var _format$match = format.match(/([^\|]*)\|?(.*)/),
            _format$match2 = (0, _slicedToArray3.default)(_format$match, 3),
            style = _format$match2[1],
            details = _format$match2[2];

        if (style === 'status') {
          return Status(this.props);
        } else if (style === 'currency') {
          return Currency(this.props);
        } else if (style === 'number') {
          var template = details || '0';
          return Number(this.props, template);
        } else if (style === 'date') {
          var _template = details || 'MM/DD/YY';
          return Date(this.props, _template);
        } else if (style === 'datetime') {
          var _template2 = details || 'MM/DD/YY @ hh:mm A';
          return Date(this.props, _template2);
        } else if (style === 'time') {
          var _template3 = details || 'hh:mm A';
          return Date(this.props, _template3);
        } else if (style === 'check_times') {
          return Check(this.props, true);
        } else if (style === 'yes_no') {
          return YesNo(this.props, true);
        } else if (style === 'check') {
          return Check(this.props, false);
        } else if (style === 'capitalize') {
          return Capitalize(this.props);
        } else if (style === 'email') {
          return Email(this.props);
        } else if (style === 'link') {
          return Link(this.props);
        } else if (style === 'raw') {
          return Raw(this.props);
        } else if (style === 'element') {
          return Element(this.props);
        } else if (this.props.value === '') {
          return Empty(this.props);
        } else {
          return Default(this.props);
        }
      } else if (_lodash2.default.isFunction(format)) {
        return format(this.props);
      } else {
        return Default(this.props);
      }
    }
  }]);
  return Format;
}(_react2.default.Component);

Format.propTypes = {
  format: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.string]),
  value: _propTypes2.default.any
};


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
  if (props.value === false) return _react2.default.createElement(
    'span',
    { className: 'no' },
    'NO'
  );
  if (props.value === true) return _react2.default.createElement(
    'span',
    { className: 'yes' },
    'YES'
  );
  return null;
};

var Currency = function Currency(props) {
  return _react2.default.createElement(
    'span',
    null,
    (0, _numeral2.default)(props.value).format('$0,0.00')
  );
};

var Number = function Number(props, format) {
  return _react2.default.createElement(
    'span',
    null,
    (0, _numeral2.default)(props.value).format(format)
  );
};

var Date = function Date(props, format) {

  var _parseDate = function _parseDate(value) {
    var dateStr = value.toString();
    if (dateStr.match(/^\d{4}-\d{2}-\d{2} \d{2}\:\d{2}\:\d{2}$/)) {
      return (0, _moment2.default)(value, 'YYYY-MM-DD hh:mm:ss');
    } else if (dateStr.toString().match(/^\d{2}\:\d{2}\:\d{2}$/)) {
      return (0, _moment2.default)(value, 'hh:mm:ss');
    } else {
      return (0, _moment2.default)(value);
    }
  };

  return _react2.default.createElement(
    'span',
    null,
    props.value ? _parseDate(props.value).format(format) : ''
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