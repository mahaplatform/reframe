'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Options = function (_React$Component) {
  (0, _inherits3.default)(Options, _React$Component);

  function Options() {
    (0, _classCallCheck3.default)(this, Options);
    return (0, _possibleConstructorReturn3.default)(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  (0, _createClass3.default)(Options, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          options = _props.options;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-search-results' },
        options.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { key: 'filter_' + index, className: 'reframe-search-item', onClick: _this2._handleChoose.bind(_this2, option) },
            _react2.default.createElement(
              'div',
              { className: _this2._getClasses() },
              _react2.default.createElement(_format2.default, (0, _extends3.default)({}, option.record, { format: format, value: option.text }))
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-search-item-icon' },
              _this2._getChecked(option) ? _react2.default.createElement('i', { className: 'fa fa-fw fa-check' }) : null
            )
          );
        })
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      var classes = ['reframe-search-item-label'];
      if (!this.props.format) classes.push('padded');
      return classes.join(' ');
    }
  }, {
    key: '_getChecked',
    value: function _getChecked(option) {
      var _props2 = this.props,
          name = _props2.name,
          multiple = _props2.multiple,
          results = _props2.results;

      if (multiple) return results[name] && _lodash2.default.find(results[name], { key: option.value });
      return results[name] && results[name].key == option.value;
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(option) {
      var value = option.value,
          text = option.text,
          token = option.token;
      var _props3 = this.props,
          name = _props3.name,
          multiple = _props3.multiple,
          results = _props3.results,
          onUpdate = _props3.onUpdate;

      var values = null;
      if (multiple) {
        values = results[name] || [];
        values = _lodash2.default.find(values, { key: value }) ? _lodash2.default.filter(values, function (item) {
          return item.key !== value;
        }) : [].concat((0, _toConsumableArray3.default)(values), [{ key: value, value: token || text }]);
      } else if (!results[name] || results[name].key !== value) {
        values = { key: value, value: token || text };
      }
      onUpdate(name, values);
    }
  }]);
  return Options;
}(_react2.default.Component);

exports.default = Options;