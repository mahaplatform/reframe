'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dynamic = function (_React$Component) {
  (0, _inherits3.default)(Dynamic, _React$Component);

  function Dynamic() {
    (0, _classCallCheck3.default)(this, Dynamic);
    return (0, _possibleConstructorReturn3.default)(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dynamic, [{
    key: 'render',
    value: function render() {
      return this.props.records ? _react2.default.createElement(_options2.default, this._getOptions()) : null;
    }
  }, {
    key: '_getOptions',
    value: function _getOptions() {
      var _props = this.props,
          format = _props.format,
          multiple = _props.multiple,
          name = _props.name,
          records = _props.records,
          results = _props.results,
          status = _props.status,
          onUpdate = _props.onUpdate;

      var options = records.map(this._getOption.bind(this));
      return { name: name, format: format, multiple: multiple, options: options, results: results, status: status, onUpdate: onUpdate };
    }
  }, {
    key: '_getOption',
    value: function _getOption(record) {
      var _props2 = this.props,
          text = _props2.text,
          value = _props2.value;

      return {
        value: _lodash2.default.get(record, value),
        text: _lodash2.default.get(record, text),
        record: record
      };
    }
  }]);
  return Dynamic;
}(_react2.default.Component);

exports.default = Dynamic;