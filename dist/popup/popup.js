'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popup = undefined;

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

var Outlet = function (_React$Component) {
  _inherits(Outlet, _React$Component);

  function Outlet() {
    _classCallCheck(this, Outlet);

    return _possibleConstructorReturn(this, (Outlet.__proto__ || Object.getPrototypeOf(Outlet)).apply(this, arguments));
  }

  _createClass(Outlet, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reframe-popup-outlet' },
        this.props.children
      );
    }
  }, {
    key: 'shoudlComponentUpdate',
    value: function shoudlComponentUpdate() {
      return true;
    }
  }]);

  return Outlet;
}(_react2.default.Component);

var Popup = exports.Popup = function (_React$Component2) {
  _inherits(Popup, _React$Component2);

  function Popup() {
    _classCallCheck(this, Popup);

    return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
  }

  _createClass(Popup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-popup' },
        children,
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          { component: Outlet, transitionName: 'expanded', transitionEnterTimeout: 250, transitionLeaveTimeout: 250 },
          component && _react2.default.createElement(
            'div',
            { className: 'reframe-popup-panel' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-popup-panel-item' },
              _react2.default.createElement(component)
            )
          )
        )
      );
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _props2 = this.props,
          onOpen = _props2.onOpen,
          onClose = _props2.onClose;

      return {
        popup: {
          open: onOpen,
          close: onClose
        }
      };
    }
  }]);

  return Popup;
}(_react2.default.Component);

Popup.childContextTypes = {
  popup: _propTypes2.default.object
};
Popup.propTypes = {
  component: _propTypes2.default.func,
  onOpen: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired
};
exports.default = Popup;