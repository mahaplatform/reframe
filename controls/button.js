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

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'button',
          { onClick: this.handleClick.bind(this), className: this.getButtonClass() },
          this.props.text
        )
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      this.props.onPress();
    }
  }, {
    key: 'getButtonClass',
    value: function getButtonClass() {
      var baseClasses = ['ui', 'button'];
      if (this.props.icon) {
        baseClasses.push('icon');
      }
      baseClasses.push(this.props.color);
      baseClasses.push(this.props.size);
      if (this.props.basic) {
        baseClasses.push('basic');
      }
      if (this.props.inverted) {
        baseClasses.push('inverted');
      }
      return baseClasses.join(' ');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.control).checkbox();
      if (this.props.defaultValue === true || this.props.defaultValue === 1) {
        $(this.refs.checkbox_ui).checkbox('set checked');
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.state.pressed ? 1 : 0;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      // if(value === 1 || value === true) {
      //   $(this.refs.checkbox_ui).checkbox('set checked')
      // }
      // else {
      //   $(this.refs.checkbox_ui).checkbox('set unchecked')
      // }
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.defaultProps = {
  onChange: function onChange() {},
  onPress: function onPress() {},
  toggle: false,
  size: 'medium',
  color: 'neutral',
  icon: null,
  label: null,
  labelIcon: null,
  labelDirection: null,
  cursor: 'pointer',
  basic: false,
  inverted: false
};
exports.default = Button;