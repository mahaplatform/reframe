'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _field = require('./field.js');

var _field2 = _interopRequireDefault(_field);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fields = function (_React$Component) {
  _inherits(Fields, _React$Component);

  function Fields() {
    _classCallCheck(this, Fields);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Fields).apply(this, arguments));
  }

  _createClass(Fields, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var numbers = ['zero', 'one', 'two', 'three', 'four', 'five'];
      var label = this.props.label ? _react2.default.createElement(
        'label',
        null,
        this.props.label
      ) : '';
      var classes = ['fields'];
      classes.push(numbers[this.props.fields.length]);
      return _react2.default.createElement(
        'div',
        { className: classes.join(' ') },
        this.props.fields.map(function (field, index) {
          return _react2.default.createElement(_field2.default, _extends({}, field, { formId: _this2.props.formId, onChange: _this2.props.onChange, ref: 'field_' + field.code, key: 'field_' + index }));
        })
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return _lodash2.default.reduce(this.refs, function (values, field) {
        var fieldValue = field.getValue();
        if (_lodash2.default.isPlainObject(fieldValue)) {
          _lodash2.default.assign(values, fieldValue);
        } else {
          values[field.props.code] = fieldValue;
        }
        return values;
      }, {});
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      _lodash2.default.each(this.refs, function (field) {
        _lodash2.default.result(field, 'clear');
      });
    }
  }]);

  return Fields;
}(_react2.default.Component);

exports.default = Fields;