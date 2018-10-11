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

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Prompt = function (_React$Component) {
  (0, _inherits3.default)(Prompt, _React$Component);

  function Prompt() {
    (0, _classCallCheck3.default)(this, Prompt);
    return (0, _possibleConstructorReturn3.default)(this, (Prompt.__proto__ || Object.getPrototypeOf(Prompt)).apply(this, arguments));
  }

  (0, _createClass3.default)(Prompt, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          cancel = _props.cancel,
          children = _props.children,
          message = _props.message,
          title = _props.title,
          open = _props.open,
          options = _props.options;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-prompt-overlay', 'in': open, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement('div', { className: 'reframe-prompt-overlay', onClick: this._handleClose.bind(this) })
      ), _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-prompt-options', 'in': open, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-prompt-options' },
          title && _react2.default.createElement(
            'div',
            { className: 'reframe-prompt-title' },
            title
          ),
          message && _react2.default.createElement(
            'div',
            { className: 'reframe-prompt-message' },
            message
          ),
          options && options.map(function (option, index) {
            return _react2.default.createElement(_button2.default, (0, _extends3.default)({ key: 'option_' + index }, _this2._getButton(option)));
          }),
          cancel && _react2.default.createElement(
            'div',
            { className: 'reframe-prompt-cancel', onClick: this._handleClose.bind(this) },
            'Cancel'
          )
        )
      )];
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          open = _props2.open,
          onClear = _props2.onClear;

      if (open !== prevProps.open && !open) {
        setTimeout(onClear, 500);
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        alert: this._getAlertChildContext(),
        confirm: this._getConfirmChildContext(),
        prompt: this._getPromptChildContext()
      };
    }
  }, {
    key: '_getButton',
    value: function _getButton(option) {
      return (0, _extends3.default)({}, option, {
        className: 'reframe-prompt-item',
        onDone: this._handleClose.bind(this)
      });
    }
  }, {
    key: '_getAlertChildContext',
    value: function _getAlertChildContext() {
      var _props3 = this.props,
          onOpen = _props3.onOpen,
          onClose = _props3.onClose;

      return {
        open: function open(message) {
          return onOpen('ALERT', message);
        },
        close: onClose
      };
    }
  }, {
    key: '_getConfirmChildContext',
    value: function _getConfirmChildContext() {
      var _props4 = this.props,
          onOpen = _props4.onOpen,
          onClose = _props4.onClose;

      return {
        open: function open(message) {
          var yes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var no = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return onOpen(message, null, [{
            text: 'Yes',
            handler: function handler() {
              return yes ? yes() : onClose();
            }
          }, {
            text: 'No',
            handler: function handler() {
              return no ? no() : onClose();
            }
          }]);
        },
        close: onClose
      };
    }
  }, {
    key: '_getPromptChildContext',
    value: function _getPromptChildContext() {
      var _props5 = this.props,
          onOpen = _props5.onOpen,
          onClose = _props5.onClose;

      return {
        open: function open(title, options) {
          return onOpen(title, null, options);
        },
        close: onClose
      };
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      this.props.onClose();
    }
  }]);
  return Prompt;
}(_react2.default.Component);

Prompt.childContextTypes = {
  alert: _propTypes2.default.object,
  confirm: _propTypes2.default.object,
  prompt: _propTypes2.default.object
};
Prompt.contextTypes = {
  drawer: _propTypes2.default.object,
  modal: _propTypes2.default.object
};
Prompt.propTypes = {
  cancel: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  message: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  title: _propTypes2.default.string,
  onClear: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func
};
Prompt.defaultProps = {
  cancel: false
};
exports.default = Prompt;