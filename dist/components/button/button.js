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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          icon = _props.icon,
          label = _props.label,
          text = _props.text;

      return _react2.default.createElement(
        'a',
        this._getButton(),
        icon && _react2.default.createElement('i', { className: 'fa fa-fw fa-' + icon }),
        label || text || children,
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

      onRequest((0, _extends3.default)({}, itemRequest, {
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
  children: _propTypes2.default.any,
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