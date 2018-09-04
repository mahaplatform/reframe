'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          button = _props.button,
          component = _props.component,
          icon = _props.icon,
          image = _props.image,
          text = _props.text,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-message' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-message-panel' },
          icon && _react2.default.createElement(
            'div',
            { className: 'reframe-message-panel-icon' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: this._getIconClass() })
            )
          ),
          image && _react2.default.createElement(
            'div',
            { className: 'reframe-message-panel-icon' },
            _react2.default.createElement('img', { src: image })
          ),
          title && _react2.default.createElement(
            'h3',
            null,
            title
          ),
          text && _react2.default.createElement(
            'p',
            null,
            text
          ),
          component,
          button && _react2.default.createElement(_button2.default, this._getButton())
        )
      );
    }
  }, {
    key: '_getIconClass',
    value: function _getIconClass() {
      var _props2 = this.props,
          animation = _props2.animation,
          color = _props2.color,
          icon = _props2.icon;

      var classes = ['fa', 'fa-' + icon];
      if (animation) classes.push('animated ' + animation);
      if (color) classes.push(color);
      return classes.join(' ');
    }
  }, {
    key: '_getButton',
    value: function _getButton() {
      var button = this.props.button;

      return {
        basic: true,
        color: 'red',
        label: button.label,
        modal: button.modal,
        handler: button.handler,
        request: button.request
      };
    }
  }]);

  return Message;
}(_react2.default.Component);

Message.contextTypes = {
  modal: _propTypes2.default.object
};
Message.propTypes = {
  animation: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  image: _propTypes2.default.string,
  text: _propTypes2.default.string,
  title: _propTypes2.default.string,
  color: _propTypes2.default.object,
  component: _propTypes2.default.object,
  button: _propTypes2.default.object
};
Message.defaultProps = {
  animation: null,
  color: null
};
exports.default = Message;