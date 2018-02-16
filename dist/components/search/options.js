'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Options = function (_React$Component) {
  _inherits(Options, _React$Component);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
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
              _react2.default.createElement(_format2.default, _extends({}, option.record, { format: format, value: option.text }))
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
        }) : [].concat(_toConsumableArray(values), [{ key: value, value: token || text }]);
      } else if (!results[name] || results[name].key !== value) {
        values = { key: value, value: token || text };
      }
      onUpdate(name, values);
    }
  }]);

  return Options;
}(_react2.default.Component);

exports.default = Options;