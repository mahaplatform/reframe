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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function (_React$Component) {
  (0, _inherits3.default)(Message, _React$Component);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message, [{
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
  color: _propTypes2.default.string,
  component: _propTypes2.default.object,
  button: _propTypes2.default.object
};
Message.defaultProps = {
  animation: null,
  color: null
};
exports.default = Message;