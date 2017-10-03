'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _search = require('../search');

var _search2 = _interopRequireDefault(_search);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DaterangePanel = function (_React$Component) {
  _inherits(DaterangePanel, _React$Component);

  function DaterangePanel() {
    _classCallCheck(this, DaterangePanel);

    return _possibleConstructorReturn(this, (DaterangePanel.__proto__ || Object.getPrototypeOf(DaterangePanel)).apply(this, arguments));
  }

  _createClass(DaterangePanel, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-header', onClick: this._handleRemovePanel.bind(this) },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-icon' },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filters-header-title' },
            label
          ),
          _react2.default.createElement('div', { className: 'reframe-filters-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-body' },
          _react2.default.createElement(_search2.default, this._getSearch())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-footer', onClick: this._handleReset.bind(this) },
          'Reset ',
          label
        )
      );
    }
  }, {
    key: '_getSearch',
    value: function _getSearch() {
      var _props = this.props,
          label = _props.label,
          name = _props.name,
          include = _props.include,
          text = _props.text,
          value = _props.value,
          results = _props.results,
          onChange = _props.onChange;

      var options = this._getOptions(include);
      var onUpdate = onChange;
      return { label: label, name: name, options: options, results: results, text: text, value: value, onUpdate: onUpdate };
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
  }, {
    key: '_handleRemovePanel',
    value: function _handleRemovePanel() {
      this.props.onRemovePanel();
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      var _props2 = this.props,
          name = _props2.name,
          onChange = _props2.onChange;

      onChange(name, null);
    }
  }]);

  return DaterangePanel;
}(_react2.default.Component);

DaterangePanel.propTypes = {
  format: _propTypes2.default.any,
  label: _propTypes2.default.string,
  include: _propTypes2.default.array,
  name: _propTypes2.default.string,
  results: _propTypes2.default.object,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};

var Daterange = function (_React$Component2) {
  _inherits(Daterange, _React$Component2);

  function Daterange() {
    _classCallCheck(this, Daterange);

    return _possibleConstructorReturn(this, (Daterange.__proto__ || Object.getPrototypeOf(Daterange)).apply(this, arguments));
  }

  _createClass(Daterange, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-item', onClick: this._handleClick.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-title' },
          label
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-icon' },
          _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
        )
      );
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      this.props.onAddPanel(_react2.default.createElement(DaterangePanel, this.props));
    }
  }]);

  return Daterange;
}(_react2.default.Component);

Daterange.propTypes = {
  format: _propTypes2.default.func,
  label: _propTypes2.default.string,
  mutiple: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  options: _propTypes2.default.array,
  values: _propTypes2.default.object,
  onAddPanel: _propTypes2.default.func
};
exports.default = Daterange;