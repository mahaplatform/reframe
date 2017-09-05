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
          components = _props.components,
          open = _props.open;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-modal' },
        children,
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { 'in': open, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
          _react2.default.createElement('div', { className: 'reframe-modal-overlay', onClick: this._handleClose.bind(this) })
        ),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { 'in': open, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-window' },
            components.length > 0 && (_lodash2.default.isFunction(components[0]) ? _react2.default.createElement(components[0]) : _react2.default.cloneElement(components[0])),
            components.length > 1 && components.slice(1).map(function (component, index) {
              return _react2.default.createElement(
                _reactTransitionGroup.CSSTransition,
                { key: 'component_' + index, 'in': components.length > 0, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
                _lodash2.default.isFunction(component) ? _react2.default.createElement(component, { key: 'modal_panel_' + index }) : _react2.default.cloneElement(component, { key: 'modal_panel_' + index })
              );
            })
          )
        )
      );
    }
  }, {
    key: '_handlePop',
    value: function _handlePop() {
      var _props2 = this.props,
          components = _props2.components,
          onPop = _props2.onPop,
          onClear = _props2.onClear;

      if (components.length === 1) {
        onClear();
        setTimeout(onPop, 500);
      } else {
        onPop();
      }
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      this.props.onClose();
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var onPush = this.props.onPush;

      return {
        modal: {
          open: onPush,
          close: this._handlePop.bind(this),
          pop: this._handlePop.bind(this),
          push: onPush
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
  children: _propTypes2.default.any,
  components: _propTypes2.default.array,
  open: _propTypes2.default.bool,
  onClear: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onPop: _propTypes2.default.func,
  onPush: _propTypes2.default.func
};
exports.default = Modal;