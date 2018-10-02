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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiUHJvbXB0IiwicHJvcHMiLCJjYW5jZWwiLCJjaGlsZHJlbiIsIm1lc3NhZ2UiLCJ0aXRsZSIsIm9wZW4iLCJvcHRpb25zIiwiX2hhbmRsZUNsb3NlIiwiYmluZCIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiX2dldEJ1dHRvbiIsInByZXZQcm9wcyIsIm9uQ2xlYXIiLCJzZXRUaW1lb3V0IiwiYWxlcnQiLCJfZ2V0QWxlcnRDaGlsZENvbnRleHQiLCJjb25maXJtIiwiX2dldENvbmZpcm1DaGlsZENvbnRleHQiLCJwcm9tcHQiLCJfZ2V0UHJvbXB0Q2hpbGRDb250ZXh0IiwiY2xhc3NOYW1lIiwib25Eb25lIiwib25PcGVuIiwib25DbG9zZSIsImNsb3NlIiwieWVzIiwibm8iLCJ0ZXh0IiwiaGFuZGxlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY2hpbGRDb250ZXh0VHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJjb250ZXh0VHlwZXMiLCJkcmF3ZXIiLCJtb2RhbCIsInByb3BUeXBlcyIsImJvb2wiLCJhbnkiLCJzdHJpbmciLCJhcnJheSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs2QkE2Qks7QUFBQTs7QUFBQSxtQkFDcUQsS0FBS0MsS0FEMUQ7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxRQURULFVBQ1NBLFFBRFQ7QUFBQSxVQUNtQkMsT0FEbkIsVUFDbUJBLE9BRG5CO0FBQUEsVUFDNEJDLEtBRDVCLFVBQzRCQSxLQUQ1QjtBQUFBLFVBQ21DQyxJQURuQyxVQUNtQ0EsSUFEbkM7QUFBQSxVQUN5Q0MsT0FEekMsVUFDeUNBLE9BRHpDOztBQUVQLGFBQVEsQ0FDTkosUUFETSxFQUVOO0FBQUMsMkNBQUQ7QUFBQSxVQUFlLEtBQUks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RXdCO0FBQUEsb0JBQ0ssS0FBS3pCLEtBRFY7QUFBQSxVQUNmd0IsTUFEZSxXQUNmQSxNQURlO0FBQUEsVUFDUEMsT0FETyxXQUNQQSxPQURPOztBQUV2QixhQUFPO0FBQ0xwQixjQUFNLGNBQUNELEtBQUQsRUFBUUUsT0FBUjtBQUFBLGlCQUFvQmtCLE9BQU9wQixLQUFQLEVBQWMsSUFBZCxFQUFvQkUsT0FBcEIsQ0FBcEI7QUFBQSxTQUREO0FBRUxvQixlQUFPRDtBQUZGLE9BQVA7QUFJRDs7O21DQUVjO0FBQ2IsV0FBS3pCLEtBQUwsQ0FBV3lCLE9BQVg7QUFDRDs7O0VBdEhrQk0sZ0JBQU1DLFM7O0FBQXJCakMsTSxDQUVHa0MsaUIsR0FBb0I7QUFDekJqQixTQUFPa0Isb0JBQVVDLE1BRFE7QUFFekJqQixXQUFTZ0Isb0JBQVVDLE1BRk07QUFHekJmLFVBQVFjLG9CQUFVQztBQUhPLEM7QUFGdkJwQyxNLENBUUdxQyxZLEdBQWU7QUFDcEJDLFVBQVFILG9CQUFVQyxNQURFO0FBRXBCRyxTQUFPSixvQkFBVUM7QUFGRyxDO0FBUmxCcEMsTSxDQWFHd0MsUyxHQUFZO0FBQ2pCdEMsVUFBUWlDLG9CQUFVTSxJQUREO0FBRWpCdEMsWUFBVWdDLG9CQUFVTyxHQUZIO0FBR2pCdEMsV0FBUytCLG9CQUFVUSxNQUhGO0FBSWpCckMsUUFBTTZCLG9CQUFVTSxJQUpDO0FBS2pCbEMsV0FBUzRCLG9CQUFVUyxLQUxGO0FBTWpCdkMsU0FBTzhCLG9CQUFVUSxNQU5BO0FBT2pCNUIsV0FBU29CLG9CQUFVVSxJQVBGO0FBUWpCbkIsV0FBU1Msb0JBQVVVLElBUkY7QUFTakJwQixVQUFRVSxvQkFBVVU7QUFURCxDO0FBYmY3QyxNLENBeUJHOEMsWSxHQUFlO0FBQ3BCNUMsVUFBUTtBQURZLEM7a0JBaUdURixNIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBQcm9tcHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBhbGVydDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb25maXJtOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHByb21wdDogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBkcmF3ZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbW9kYWw6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsZWFyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk9wZW46IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNhbmNlbDogZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNhbmNlbCwgY2hpbGRyZW4sIG1lc3NhZ2UsIHRpdGxlLCBvcGVuLCBvcHRpb25zIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChbXG4gICAgICBjaGlsZHJlbixcbiAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT1cInJlZnJhbWUtcHJvbXB0LW92ZXJsYXlcIiBpbj17IG9wZW4gfSBjbGFzc05hbWVzPVwiZXhwYW5kZWRcIiB0aW1lb3V0PXsgMjUwIH0gbW91bnRPbkVudGVyPXsgdHJ1ZSB9IHVubW91bnRPbkV4aXQ9eyB0cnVlIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1wcm9tcHQtb3ZlcmxheVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbG9zZS5iaW5kKHRoaXMpIH0gLz5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj4sXG4gICAgICA8Q1NTVHJhbnNpdGlvbiBrZXk9XCJyZWZyYW1lLXByb21wdC1vcHRpb25zXCIgaW49eyBvcGVuIH0gY2xhc3NOYW1lcz1cImV4cGFuZGVkXCIgdGltZW91dD17IDI1MCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtcHJvbXB0LW9wdGlvbnNcIj5cbiAgICAgICAgICB7IHRpdGxlICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtcHJvbXB0LXRpdGxlXCI+XG4gICAgICAgICAgICAgIHsgdGl0bGUgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsgbWVzc2FnZSAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXByb21wdC1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgIHsgbWVzc2FnZSB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyBvcHRpb25zICYmIG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8QnV0dG9uIGtleT17IGBvcHRpb25fJHtpbmRleH1gIH0geyAuLi50aGlzLl9nZXRCdXR0b24ob3B0aW9uKSB9ICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHsgY2FuY2VsICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtcHJvbXB0LWNhbmNlbFwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbG9zZS5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICBdKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgb3Blbiwgb25DbGVhciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKG9wZW4gIT09IHByZXZQcm9wcy5vcGVuICYmICFvcGVuKSB7XG4gICAgICBzZXRUaW1lb3V0KG9uQ2xlYXIsIDUwMClcbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsZXJ0OiB0aGlzLl9nZXRBbGVydENoaWxkQ29udGV4dCgpLFxuICAgICAgY29uZmlybTogdGhpcy5fZ2V0Q29uZmlybUNoaWxkQ29udGV4dCgpLFxuICAgICAgcHJvbXB0OiB0aGlzLl9nZXRQcm9tcHRDaGlsZENvbnRleHQoKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRCdXR0b24ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9wdGlvbixcbiAgICAgIGNsYXNzTmFtZTogJ3JlZnJhbWUtcHJvbXB0LWl0ZW0nLFxuICAgICAgb25Eb25lOiB0aGlzLl9oYW5kbGVDbG9zZS5iaW5kKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgX2dldEFsZXJ0Q2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IHsgb25PcGVuLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IChtZXNzYWdlKSA9PiBvbk9wZW4oJ0FMRVJUJywgbWVzc2FnZSksXG4gICAgICBjbG9zZTogb25DbG9zZVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDb25maXJtQ2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IHsgb25PcGVuLCBvbkNsb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW46IChtZXNzYWdlLCB5ZXMgPSBudWxsLCBubyA9IG51bGwpID0+IG9uT3BlbihtZXNzYWdlLCBudWxsLCBbXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnWWVzJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB5ZXMgPyB5ZXMoKSA6IG9uQ2xvc2UoKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgdGV4dDogJ05vJyxcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiBubyA/IG5vKCkgOiBvbkNsb3NlKClcbiAgICAgICAgfVxuICAgICAgXSksXG4gICAgICBjbG9zZTogb25DbG9zZVxuICAgIH1cbiAgfVxuXG4gIF9nZXRQcm9tcHRDaGlsZENvbnRleHQoKSB7XG4gICAgY29uc3QgeyBvbk9wZW4sIG9uQ2xvc2UgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbjogKHRpdGxlLCBvcHRpb25zKSA9PiBvbk9wZW4odGl0bGUsIG51bGwsIG9wdGlvbnMpLFxuICAgICAgY2xvc2U6IG9uQ2xvc2VcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQ2xvc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb21wdFxuIl19