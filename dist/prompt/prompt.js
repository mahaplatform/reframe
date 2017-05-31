'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

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
          children = _props.children,
          message = _props.message,
          options = _props.options;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-prompt' },
        children,
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          { component: function component(_ref) {
              var children = _ref.children;
              return _react2.default.createElement(
                'div',
                { className: 'reframe-prompt-outlet' },
                children
              );
            }, transitionName: 'expanded', transitionEnterTimeout: 250, transitionLeaveTimeout: 250, transitionAppear: true, transitionAppearTimeout: 250 },
          message && _react2.default.createElement('div', { className: 'reframe-prompt-overlay', onClick: this._handleClosePrompt.bind(this) }),
          message && _react2.default.createElement(
            'div',
            { className: 'reframe-prompt-options' },
            message && _react2.default.createElement(
              'div',
              { className: 'reframe-prompt-header' },
              message
            ),
            options && options.map(function (option, index) {
              return _react2.default.createElement(
                'div',
                { key: 'option_' + index, className: 'reframe-prompt-option', onClick: _this2._handleChooseOption.bind(_this2, index) },
                option.label
              );
            })
          )
        )
      );
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        prompt: this._getPromptChildContext(),
        confirm: this._getConfirmChildContext()
      };
    }
  }, {
    key: '_getPromptChildContext',
    value: function _getPromptChildContext() {
      var _props2 = this.props,
          onOpen = _props2.onOpen,
          onClose = _props2.onClose;

      return {
        open: onOpen,
        close: onClose
      };
    }
  }, {
    key: '_getConfirmChildContext',
    value: function _getConfirmChildContext() {
      var _props3 = this.props,
          onOpen = _props3.onOpen,
          onClose = _props3.onClose;

      return {
        open: function open(message, yes, no) {
          var options = [{ label: 'Yes', handler: function handler() {
              if (yes) yes();
            } }, { label: 'No', handler: function handler() {
              if (no) no();
            } }];
          onOpen(message, options);
        },
        close: onClose
      };
    }
  }, {
    key: '_handleChooseOption',
    value: function _handleChooseOption(index) {
      var options = this.props.options;

      this._handleClosePrompt();
      if (options[index].handler) {
        options[index].handler();
      }
    }
  }, {
    key: '_handleClosePrompt',
    value: function _handleClosePrompt() {
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
Prompt.propsTypes = {
  message: _propTypes2.default.string,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    handler: _propTypes2.default.func,
    label: _propTypes2.default.string
  })),
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func
};
exports.default = Prompt;