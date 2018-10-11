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

var _reactTransitionGroup = require('react-transition-group');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tray = function (_React$Component) {
  (0, _inherits3.default)(Tray, _React$Component);

  function Tray() {
    (0, _classCallCheck3.default)(this, Tray);
    return (0, _possibleConstructorReturn3.default)(this, (Tray.__proto__ || Object.getPrototypeOf(Tray)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tray, [{
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