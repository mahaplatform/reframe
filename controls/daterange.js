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

var _select = require('./select.js');

var _select2 = _interopRequireDefault(_select);

var _quickdate = require('../utils/quickdate');

var _quickdate2 = _interopRequireDefault(_quickdate);

var _datefield = require('./datefield.js');

var _datefield2 = _interopRequireDefault(_datefield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateRange = function (_React$Component) {
  _inherits(DateRange, _React$Component);

  function DateRange(props) {
    _classCallCheck(this, DateRange);

    var _this = _possibleConstructorReturn(this, (DateRange.__proto__ || Object.getPrototypeOf(DateRange)).call(this, props));

    _this.state = {
      customRange: false,
      start_date: null,
      end_date: null
    };
    return _this;
  }

  _createClass(DateRange, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(_select2.default, { ref: 'range_field', options: this.dateOptions(), placeholder: 'Date Range',
            onChange: this.handleSelectDateRange.bind(this), allowBlank: this.props.allowBlank })
        ),
        this.renderCustomFields()
      );
    }
  }, {
    key: 'renderCustomFields',
    value: function renderCustomFields() {
      if (this.state.customRange) {
        var style = { display: 'flex' };
      } else {
        var style = { display: 'none' };
      }
      return _react2.default.createElement(
        'div',
        { className: 'two fields', style: style },
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(_datefield2.default, { ref: 'start_date_field', name: 'start_date_field', placeholder: 'Start Date', onChange: this.handleCustomDateChange.bind(this) })
        ),
        _react2.default.createElement(
          'div',
          { className: 'field' },
          _react2.default.createElement(_datefield2.default, { ref: 'end_date_field', name: 'end_date_field', placeholder: 'End Date', onChange: this.handleCustomDateChange.bind(this) })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.defaultValue) {
        _lodash2.default.forEach(this.props.defaultValue, function (v, k) {
          _this2.setCompositeValue(k, v);
        });
      }
    }
  }, {
    key: 'handleSelectDateRange',
    value: function handleSelectDateRange() {
      var range = this.refs.range_field.getValue();
      if (range == null) {
        this.setState({
          customRange: false,
          start_date: null,
          end_date: null
        });
      } else if (range === 'custom') {
        this.setState({ customRange: true });
      } else {
        this.setState({ customRange: false });
        var dates = _quickdate2.default.parse(range);
      }
      this.props.onChange(this.props.code, this.getValue());
    }
  }, {
    key: 'handleCustomDateChange',
    value: function handleCustomDateChange() {
      this.props.onChange(this.props.code, this.getValue());
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      if (this.state.customRange) {
        var _ref;

        return _ref = {}, _defineProperty(_ref, this.props.composite.start_date_field, this.refs.start_date_field.getValue()), _defineProperty(_ref, this.props.composite.end_date_field, this.refs.end_date_field.getValue()), _defineProperty(_ref, this.props.composite.range_field, this.refs.range_field.getValue()), _ref;
      } else {
        var range = this.refs.range_field.getValue();
        if (range) {
          var _ref2;

          var dates = _quickdate2.default.parse(range);
          return _ref2 = {}, _defineProperty(_ref2, this.props.composite.start_date_field, dates.start.format('YYYY-MM-DD')), _defineProperty(_ref2, this.props.composite.end_date_field, dates.end.format('YYYY-MM-DD')), _defineProperty(_ref2, this.props.composite.range_field, this.refs.range_field.getValue()), _ref2;
        } else {
          return null;
        }
      }
    }
  }, {
    key: 'setCompositeValue',
    value: function setCompositeValue(key, value) {
      var rComposite = _lodash2.default.invert(this.props.composite);
      this.refs[rComposite[key]].setValue(value);
      if (rComposite[key] == 'range_field' && (value == false || value == 'custom')) {
        this.setState({ customRange: true });
      }
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      this.refs.start_date_field.clearField();
      this.refs.end_date_field.clearField();
      this.refs.range_field.clearField();
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      var _ref3;

      return _ref3 = {}, _defineProperty(_ref3, this.props.composite.start_date_field, this), _defineProperty(_ref3, this.props.composite.end_date_field, this), _defineProperty(_ref3, this.props.composite.range_field, this), _ref3;
    }
  }, {
    key: 'dateOptions',
    value: function dateOptions() {
      return [{ key: "#@Y", value: "This Year" }, { key: "#-1Y", value: "Last Year" }, { key: "#@Q", value: "This Quarter" }, { key: "#-1Q", value: "Last Quarter" }, { key: "#@M", value: "This Month" }, { key: "#-1M", value: "Last Month" }, { key: "#@w", value: "This Week" }, { key: "#-1w", value: "Last Week" }, { key: "@y", value: "Year to Date" }, { key: "-10Y", value: "Life to Date" }, { key: "-30d", value: "Last 30 Days" }, { key: "-60d", value: "Last 60 Days" }, { key: "custom", value: "Custom" }];
    }
  }]);

  return DateRange;
}(_react2.default.Component);

DateRange.composite = ['start_date_field', 'end_date_field', 'range_field'];
DateRange.defaultProps = {
  allowBlank: true,
  composite: {
    start_date_field: 'start_date',
    end_date_field: 'end_date',
    range_field: 'range'
  }
};
exports.default = DateRange;