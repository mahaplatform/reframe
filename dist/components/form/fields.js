'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fields = function (_React$Component) {
  (0, _inherits3.default)(Fields, _React$Component);

  function Fields() {
    (0, _classCallCheck3.default)(this, Fields);
    return (0, _possibleConstructorReturn3.default)(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).apply(this, arguments));
  }

  (0, _createClass3.default)(Fields, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fields = this.props.fields;

      var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
      return _react2.default.createElement(
        'div',
        { className: numbers[fields.length] + ' fields' },
        fields.map(function (field, index) {
          return _react2.default.createElement(_field2.default, (0, _extends3.default)({ key: 'field_' + index }, _this2._getField(field)));
        })
      );
    }
  }, {
    key: '_getField',
    value: function _getField(field) {
      var _props = this.props,
          onChange = _props.onChange,
          onReady = _props.onReady,
          onSubmit = _props.onSubmit,
          onUpdateData = _props.onUpdateData;

      return (0, _extends3.default)({}, field, {
        onChange: onChange,
        onReady: onReady,
        onSubmit: onSubmit,
        onUpdateData: onUpdateData
      });
    }
  }]);
  return Fields;
}(_react2.default.Component);

Fields.propTypes = {
  fields: _propTypes2.default.array,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
Fields.defaultProps = {
  fields: [],
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {},
  onSubmit: function onSubmit() {},
  onUpdateData: function onUpdateData() {}
};
exports.default = Fields;