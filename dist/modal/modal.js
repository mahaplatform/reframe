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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-modal' },
        children,
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          { component: function component(_ref) {
              var children = _ref.children;
              return _react2.default.createElement(
                'div',
                { className: 'reframe-modal-outlet' },
                children
              );
            }, transitionName: 'expanded', transitionEnterTimeout: 500, transitionLeaveTimeout: 500 },
          component && _react2.default.createElement('div', { className: 'reframe-modal-overlay', onClick: this._handleClose.bind(this) }),
          component && _react2.default.createElement(
            'div',
            { className: 'reframe-modal-window' },
            _lodash2.default.isFunction(component) ? _react2.default.createElement(component) : component
          )
        )
      );
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      this.props.onClose();
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _props2 = this.props,
          onClose = _props2.onClose,
          onOpen = _props2.onOpen;

      return {
        modal: {
          open: onOpen,
          close: onClose
        }
      };
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.childContextTypes = {
  modal: _propTypes2.default.object
};
Modal.propTypes = {
  component: _propTypes2.default.oneOf(_propTypes2.default.element, _propTypes2.default.func),
  onClose: _propTypes2.default.func,
  onPop: _propTypes2.default.func,
  onPush: _propTypes2.default.func
};
exports.default = Modal;