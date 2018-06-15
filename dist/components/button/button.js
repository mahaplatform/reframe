'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          icon = _props.icon,
          label = _props.label,
          text = _props.text;

      return _react2.default.createElement(
        'a',
        this._getButton(),
        icon && _react2.default.createElement('i', { className: 'fa fa-fw fa-' + icon }),
        label || text,
        component
      );
    }
  }, {
    key: '_getButton',
    value: function _getButton() {
      var _props2 = this.props,
          disabled = _props2.disabled,
          link = _props2.link;

      return {
        href: link ? link : null,
        className: this._getClass(),
        disabled: disabled,
        target: link ? '_blank' : null,
        onClick: !link ? this._handleClick.bind(this) : null
      };
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var _props3 = this.props,
          component = _props3.component,
          basic = _props3.basic,
          className = _props3.className,
          color = _props3.color,
          disabled = _props3.disabled,
          mobile = _props3.mobile,
          status = _props3.status;

      if (component) return '';
      var classes = className ? className.split(' ') : ['ui', color, 'fluid', 'button', 'reframe-button'];
      if (mobile !== false) classes.push('mobile');
      if (basic) classes.push('basic');
      if (disabled) classes.push('disabled');
      if (status === 'submitting') classes.push('loading');
      return classes.join(' ');
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var flash = this.context.flash;
      var _props4 = this.props,
          error = _props4.error,
          status = _props4.status;

      if (prevProps.status !== status && status === 'failure') {
        flash.set('error', error);
      }
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      var _this2 = this;

      var _props5 = this.props,
          confirm = _props5.confirm,
          disabled = _props5.disabled,
          drawer = _props5.drawer,
          handler = _props5.handler,
          location = _props5.location,
          modal = _props5.modal,
          request = _props5.request,
          route = _props5.route,
          onDone = _props5.onDone;

      if (disabled) return;
      var yesHandler = function yesHandler() {
        if (route) _this2._handleRoute(route);
        if (request) _this2._handleRequest(request);
        if (modal) _this2._handleModal(modal);
        if (drawer) _this2._handleDrawer(drawer, location);
        if (handler) _this2._handleFunction(handler);
      };
      onDone();
      if (confirm) return this.context.confirm.open(confirm, yesHandler);
      yesHandler();
    }
  }, {
    key: '_handleRoute',
    value: function _handleRoute(route) {
      this.context.router.push(route);
    }
  }, {
    key: '_handleModal',
    value: function _handleModal(component) {
      this.context.modal.open(component);
    }
  }, {
    key: '_handleDrawer',
    value: function _handleDrawer(component, location) {
      this.context.drawer.open(component, location);
    }
  }, {
    key: '_handleFunction',
    value: function _handleFunction(handler) {
      handler(function () {});
    }
  }, {
    key: '_handleRequest',
    value: function _handleRequest(itemRequest) {
      var onRequest = this.props.onRequest;

      onRequest(_extends({}, itemRequest, {
        body: null,
        params: null
      }));
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.contextTypes = {
  confirm: _propTypes2.default.object,
  drawer: _propTypes2.default.object,
  flash: _propTypes2.default.object,
  modal: _propTypes2.default.object,
  router: _propTypes2.default.object
};
Button.propTypes = {
  basic: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  color: _propTypes2.default.string,
  component: _propTypes2.default.any,
  confirm: _propTypes2.default.any,
  disabled: _propTypes2.default.bool,
  drawer: _propTypes2.default.any,
  error: _propTypes2.default.string,
  location: _propTypes2.default.string,
  handler: _propTypes2.default.func,
  icon: _propTypes2.default.string,
  label: _propTypes2.default.string,
  link: _propTypes2.default.string,
  mobile: _propTypes2.default.bool,
  modal: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  request: _propTypes2.default.shape({
    method: _propTypes2.default.string,
    endpoint: _propTypes2.default.string,
    onFailure: _propTypes2.default.func,
    onSuccess: _propTypes2.default.func
  }),
  route: _propTypes2.default.string,
  status: _propTypes2.default.string,
  text: _propTypes2.default.string,
  onDone: _propTypes2.default.func,
  onRequest: _propTypes2.default.func
};
Button.defaultProps = {
  basic: false,
  mobile: true,
  disabled: false,
  onDone: function onDone() {}
};
exports.default = Button;