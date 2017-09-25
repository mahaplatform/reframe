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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRange = function (_React$Component) {
  _inherits(DateRange, _React$Component);

  function DateRange() {
    _classCallCheck(this, DateRange);

    return _possibleConstructorReturn(this, (DateRange.__proto__ || Object.getPrototypeOf(DateRange)).apply(this, arguments));
  }

  _createClass(DateRange, [{
    key: 'render',
    value: function render() {
      var include = this.props.include;

      return _react2.default.createElement(_select2.default, _extends({}, this.props, { options: this._getOptions(include) }));
    }
  }, {
    key: '_getOptions',
    value: function _getOptions(include) {
      var options = [];
      if (_lodash2.default.includes(include, 'this')) options.push({ value: 'this_week', description: this.description(0, 'week'), text: 'This Week' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_week', description: this.description(-1, 'week'), text: 'Last Week' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_week', description: this.description(1, 'week'), text: 'Next Week' });
      if (_lodash2.default.includes(include, 'this')) options.push({ value: 'this_month', description: this.description(0, 'month'), text: 'This Month' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_month', description: this.description(-1, 'month'), text: 'Last Month' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_month', description: this.description(1, 'month'), text: 'Next Month' });
      if (_lodash2.default.includes(include, 'this')) options.push({ value: 'this_quarter', description: this.description(0, 'quarter'), text: 'This Quarter' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_quarter', description: this.description(-1, 'quarter'), text: 'Last Quarter' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_quarter', description: this.description(1, 'quarter'), text: 'Next Quarter' });
      if (_lodash2.default.includes(include, 'this')) options.push({ value: 'this_year', description: this.description(0, 'year'), text: 'This Year' });
      if (_lodash2.default.includes(include, 'last')) options.push({ value: 'last_year', description: this.description(-1, 'year'), text: 'Last Year' });
      if (_lodash2.default.includes(include, 'next')) options.push({ value: 'next_year', description: this.description(1, 'year'), text: 'Next Year' });
      options.push({ value: 'custom', text: 'Custom' });
      return options;
    }
  }, {
    key: 'description',
    value: function description(quantity, unit) {
      var start = (0, _moment2.default)().add(quantity, unit).startOf(unit);
      var end = (0, _moment2.default)().add(quantity, unit).endOf(unit);
      var startdate = start.format('YY') !== end.format('YY') ? start.format('MMM D, YYYY') : start.format('MMM D');
      var enddate = start.format('MM') !== end.format('MM') ? end.format('MMM D, YYYY') : end.format('D, YYYY');
      return startdate + ' - ' + enddate;
    }
  }]);

  return DateRange;
}(_react2.default.Component);

DateRange.propTypes = {
  include: _propTypes2.default.array
};
exports.default = DateRange;