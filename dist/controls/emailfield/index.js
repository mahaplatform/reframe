'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EmailField = function (_React$Component) {
  _inherits(EmailField, _React$Component);

  function EmailField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EmailField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EmailField.__proto__ || Object.getPrototypeOf(EmailField)).call.apply(_ref, [this].concat(args))), _this), _this.email = null, _this.state = {
      value: ''
    }, _this._handleChange = _this._handleChange.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EmailField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui field' },
        _react2.default.createElement('input', this._getInput())
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onReady = _props.onReady;

      if (defaultValue) this.setState(defaultValue);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.value !== prevState.value) {
        this.props.onChange(this.state);
      }
    }
  }, {
    key: '_getInput',
    value: function _getInput() {
      var _this2 = this;

      var value = this.state.value;

      return {
        className: 'ui input',
        type: 'email',
        placeholder: 'Email',
        value: value,
        ref: function ref(node) {
          return _this2.email = node;
        },
        onChange: this._handleChange
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      this.setState({
        value: this.email.value
      });
    }
  }]);

  return EmailField;
}(_react2.default.Component);

EmailField.propTypes = {
  defaultValue: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
exports.default = EmailField;