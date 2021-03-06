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

var Tray = function (_React$Component) {
  _inherits(Tray, _React$Component);

  function Tray() {
    _classCallCheck(this, Tray);

    return _possibleConstructorReturn(this, (Tray.__proto__ || Object.getPrototypeOf(Tray)).apply(this, arguments));
  }

  _createClass(Tray, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          open = _props.open;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-overlay', 'in': open, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement('div', { className: 'reframe-tray-overlay', onClick: this._handleCloseTray.bind(this) })
      ), _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-tray-panel', 'in': open, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-tray-panel' },
          _lodash2.default.isFunction(component) ? _react2.default.createElement(component) : component
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
        tray: {
          open: this._handleOpenTray.bind(this),
          close: this._handleCloseTray.bind(this)
        }
      };
    }
  }, {
    key: '_handleOpenTray',
    value: function _handleOpenTray(component) {
      this.props.onOpen(component);
    }
  }, {
    key: '_handleCloseTray',
    value: function _handleCloseTray() {
      this.props.onClose();
    }
  }]);

  return Tray;
}(_react2.default.Component);

Tray.childContextTypes = {
  tray: _propTypes2.default.object
};
exports.default = Tray;