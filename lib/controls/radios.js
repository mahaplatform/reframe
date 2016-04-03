'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radios = function (_React$Component) {
  _inherits(Radios, _React$Component);

  function Radios(props) {
    _classCallCheck(this, Radios);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Radios).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Radios, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'grouped fields', ref: 'control' },
        this.props.options.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { className: 'field', key: 'option_' + index },
            _react2.default.createElement(
              'div',
              { className: 'ui radio checkbox', 'data-value': option.key },
              _react2.default.createElement('input', {
                defaultValue: _this2.props.defaultValue,
                className: 'hidden',
                name: _this2.props.code,
                type: 'radio',
                value: option.key }),
              _react2.default.createElement(
                'label',
                null,
                option.value
              )
            )
          );
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.control).find('.radio').checkbox({
        onChange: this.handleChange.bind(this)
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return $(this.refs.control).find('.radio input:checked').val();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      $(this.refs.control).find('.checkbox').checkbox('set unchecked');
      $(this.refs.control).find('.checkbox[data-value*=' + value + ']').checkbox('set checked');
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      this.props.onChange(this.props.code, value);
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      $(this.refs.control).find('.checkbox').checkbox('set unchecked');
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Radios;
}(_react2.default.Component);

Radios.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.oneOfType(_react2.default.PropTypes.string, _react2.default.PropTypes.string),
  asyncStatus: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.array
};
Radios.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  onChange: function onChange() {},
  options: []
};
exports.default = Radios;