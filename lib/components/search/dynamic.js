'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dynamic = function (_React$Component) {
  _inherits(Dynamic, _React$Component);

  function Dynamic() {
    _classCallCheck(this, Dynamic);

    return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).apply(this, arguments));
  }

  _createClass(Dynamic, [{
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