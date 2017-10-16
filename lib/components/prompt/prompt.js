'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _task = require('../task');

var _task2 = _interopRequireDefault(_task);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prompt = function (_React$Component) {
  _inherits(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck(this, Prompt);

    return _possibleConstructorReturn(this, (Prompt.__proto__ || Object.getPrototypeOf(Prompt)).apply(this, arguments));
  }

  _createClass(Prompt, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          cancel = _props.cancel,
          children = _props.children,
          message = _props.message,
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
          message && _react2.default.createElement(
            'div',
            { className: 'reframe-prompt-header' },
            message
          ),
          options && options.map(function (option, index) {
            return _react2.default.createElement(_task2.default, _extends({ key: 'option_' + index }, option, { className: 'reframe-prompt-item', onDone: _this2._handleClose.bind(_this2) }));
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
      return _extends({}, this._getPromptChildContext(), this._getConfirmChildContext());
    }
  }, {
    key: '_getPromptChildContext',
    value: function _getPromptChildContext() {
      var _props3 = this.props,
          onOpen = _props3.onOpen,
          onClose = _props3.onClose;

      return {
        prompt: {
          open: onOpen,
          close: onClose
        }
      };
    }
  }, {
    key: '_getConfirmChildContext',
    value: function _getConfirmChildContext() {
      var _props4 = this.props,
          onOpen = _props4.onOpen,
          onClose = _props4.onClose;

      return {
        confirm: {
          open: function open(message, yes, no) {
            var options = [{ label: 'Yes', handler: function handler() {
                if (yes) yes();
              } }, { label: 'No', handler: function handler() {
                if (no) no();
              } }];
            onOpen(message, options);
          },
          close: onClose
        }
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
  confirm: _propTypes2.default.object,
  prompt: _propTypes2.default.object
};
Prompt.contextTypes = {
  drawer: _propTypes2.default.object,
  modal: _propTypes2.default.object,
  history: _propTypes2.default.object
};
Prompt.defaultProps = {
  cancel: false
};
exports.default = Prompt;