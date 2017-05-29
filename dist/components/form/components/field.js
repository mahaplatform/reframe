'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fields = require('./fields');

var _fields2 = _interopRequireDefault(_fields);

var _control = require('../../../controls/control');

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Field = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, (Field.__proto__ || Object.getPrototypeOf(Field)).apply(this, arguments));
  }

  _createClass(Field, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          code = _props.code,
          type = _props.type,
          include = _props.include,
          show = _props.show,
          label = _props.label,
          style = _props.style,
          instructions = _props.instructions,
          required = _props.required,
          datasource = _props.datasource,
          columns = _props.columns,
          options = _props.options,
          data = _props.data,
          errors = _props.errors,
          fields = _props.fields,
          onUpdateData = _props.onUpdateData;

      var error = errors[code] ? errors[code][0] : null;
      var classes = ["field"];
      if (error) {
        classes.push("error");
      }
      if (required) {
        classes.push("required");
      }
      if (include && show) {
        return _react2.default.createElement(
          'div',
          { className: classes.join(" ") },
          label ? _react2.default.createElement(
            'label',
            null,
            label
          ) : null,
          instructions ? _react2.default.createElement(
            'div',
            { className: 'instructions' },
            instructions
          ) : null,
          function () {
            if (type == 'fields') {
              return _react2.default.createElement(_fields2.default, { fields: fields,
                onChange: _this2._handleUpdateData.bind(_this2),
                onUpdateData: onUpdateData });
            } else {
              var value = data[code];
              return _react2.default.createElement(_control2.default, { type: type,
                label: label,
                style: style,
                datasource: datasource,
                columns: columns,
                options: options,
                defaultValue: value,
                onChange: _this2._handleUpdateData.bind(_this2) });
            }
          }(),
          error ? _react2.default.createElement(
            'div',
            { className: 'ui pointing red basic label' },
            error
          ) : null
        );
      } else {
        return null;
      }
    }
  }, {
    key: '_handleUpdateData',
    value: function _handleUpdateData(value) {
      var _props2 = this.props,
          code = _props2.code,
          onUpdateData = _props2.onUpdateData;

      onUpdateData(code, value);
    }
  }]);

  return Field;
}(_react2.default.Component);

Field.propTypes = {
  code: _react2.default.PropTypes.string,
  include: _react2.default.PropTypes.bool,
  show: _react2.default.PropTypes.bool,
  label: _react2.default.PropTypes.string,
  instructions: _react2.default.PropTypes.string,
  required: _react2.default.PropTypes.bool,
  columns: _react2.default.PropTypes.array,
  options: _react2.default.PropTypes.array,
  data: _react2.default.PropTypes.object,
  fields: _react2.default.PropTypes.array,
  errors: _react2.default.PropTypes.object,
  onUpdateData: _react2.default.PropTypes.func
};
Field.defaultProps = {
  code: null,
  include: true,
  show: true,
  label: null,
  instructions: null,
  required: false,
  columns: [],
  options: [],
  data: {},
  fields: [],
  onUpdateData: function onUpdateData() {}
};
exports.default = Field;