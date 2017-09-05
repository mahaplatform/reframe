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

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var count = this.state.count;
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
            components.map(function (component, index) {
              return _react2.default.createElement(
                _reactTransitionGroup.CSSTransition,
                { key: 'component_' + index, 'in': index + 1 <= count || index === 0, classNames: 'cover', timeout: 500, appear: index > 0, mountOnEnter: index > 0, unmountOnExit: index > 0 },
                _lodash2.default.isFunction(component) ? _react2.default.createElement(component, { key: 'modal_panel_' + index }) : _react2.default.cloneElement(component, { key: 'modal_panel_' + index })
              );
            })
          )
        )
      );
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      var _this2 = this;

      var count = this.state.count;
      var _props2 = this.props,
          onClose = _props2.onClose,
          onPop = _props2.onPop;

      onClose();
      setTimeout(function () {
        onPop(count);
        _this2.setState({ count: 0 });
      }, 500);
    }
  }, {
    key: '_handlePush',
    value: function _handlePush(component) {
      var count = this.state.count;
      var _props3 = this.props,
          onOpen = _props3.onOpen,
          onPush = _props3.onPush,
          open = _props3.open;

      this.setState({ count: count + 1 });
      onPush(component);
      if (!open) onOpen();
    }
  }, {
    key: '_handlePop',
    value: function _handlePop() {
      var _this3 = this;

      var panels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var count = this.state.count;
      var _props4 = this.props,
          onClose = _props4.onClose,
          onPop = _props4.onPop;

      if (count > 1) {
        this.setState({ count: count - panels });
        setTimeout(function () {
          onPop(panels);
        }, 500);
      } else {
        onClose();
        setTimeout(function () {
          _this3.setState({ count: count - panels });
          onPop(panels);
        }, 500);
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        modal: {
          open: this._handlePush.bind(this),
          close: this._handlePop.bind(this),
          pop: this._handlePop.bind(this),
          push: this._handlePush.bind(this)
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
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onPop: _propTypes2.default.func,
  onPush: _propTypes2.default.func
};
exports.default = Modal;