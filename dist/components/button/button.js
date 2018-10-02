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
        'div',
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
      var classes = className ? className.split(' ') : ['ui', color, 'fluid', 'button'];
      classes.push('reframe-button');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJjaGlsZHJlbiIsImNvbXBvbmVudCIsImljb24iLCJsYWJlbCIsInRleHQiLCJfZ2V0QnV0dG9uIiwiZGlzYWJsZWQiLCJsaW5rIiwiaHJlZiIsImNsYXNzTmFtZSIsIl9nZXRDbGFzcyIsInRhcmdldCIsIm9uQ2xpY2siLCJfaGFuZGxlQ2xpY2siLCJiaW5kIiwiYmFzaWMiLCJjb2xvciIsIm1vYmlsZSIsInN0YXR1cyIsImNsYXNzZXMiLCJzcGxpdCIsInB1c2giLCJqb2luIiwicHJldlByb3BzIiwiZmxhc2giLCJjb250ZXh0IiwiZXJyb3IiLCJzZXQiLCJjb25maXJtIiwiZHJhd2VyIiwiaGFuZGxlciIsImxvY2F0aW9uIiwibW9kYWwiLCJyZXF1ZXN0Iiwicm91dGUiLCJvbkRvbmUiLCJ5ZXNIYW5kbGVyIiwiX2hhbmRsZVJvdXRlIiwiX2hhbmRsZVJlcXVlc3QiLCJfaGFuZGxlTW9kYWwiLCJfaGFuZGxlRHJhd2VyIiwiX2hhbmRsZUZ1bmN0aW9uIiwib3BlbiIsInJvdXRlciIsIml0ZW1SZXF1ZXN0Iiwib25SZXF1ZXN0IiwiYm9keSIsInBhcmFtcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwicHJvcFR5cGVzIiwiYm9vbCIsInN0cmluZyIsImFueSIsImZ1bmMiLCJvbmVPZlR5cGUiLCJlbGVtZW50Iiwic2hhcGUiLCJtZXRob2QiLCJlbmRwb2ludCIsIm9uRmFpbHVyZSIsIm9uU3VjY2VzcyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs2QkFrREs7QUFBQSxtQkFDNEMsS0FBS0MsS0FEakQ7QUFBQSxVQUNDQyxRQURELFVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxTQURYLFVBQ1dBLFNBRFg7QUFBQSxVQUNz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QUFVLEtBSFU7QUFJcEI2QixVQUFRLGtCQUFNLENBQUU7QUFKSSxDO2tCQTRGVHJDLE0iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIGNvbmZpcm06IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZHJhd2VyOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGZsYXNoOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1vZGFsOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBiYXNpYzogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbXBvbmVudDogUHJvcFR5cGVzLmFueSxcbiAgICBjb25maXJtOiBQcm9wVHlwZXMuYW55LFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkcmF3ZXI6IFByb3BUeXBlcy5hbnksXG4gICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1vYmlsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbW9kYWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICBQcm9wVHlwZXMuZnVuY1xuICAgIF0pLFxuICAgIHJlcXVlc3Q6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBtZXRob2Q6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBlbmRwb2ludDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIG9uRmFpbHVyZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICBvblN1Y2Nlc3M6IFByb3BUeXBlcy5mdW5jXG4gICAgfSksXG4gICAgcm91dGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3RhdHVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25Eb25lOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGJhc2ljOiBmYWxzZSxcbiAgICBtb2JpbGU6IHRydWUsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIG9uRG9uZTogKCkgPT4ge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjb21wb25lbnQsIGljb24sIGxhYmVsLCB0ZXh0IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgeyAuLi50aGlzLl9nZXRCdXR0b24oKSB9PlxuICAgICAgICB7IGljb24gJiYgPGkgY2xhc3NOYW1lPXtgZmEgZmEtZncgZmEtJHtpY29ufWB9IC8+IH1cbiAgICAgICAgeyBsYWJlbCB8fCB0ZXh0IHx8IGNoaWxkcmVuIH1cbiAgICAgICAgeyBjb21wb25lbnQgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gIH1cblxuICBfZ2V0QnV0dG9uKCkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIGxpbmsgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogbGluayA/IGxpbmsgOiBudWxsLFxuICAgICAgY2xhc3NOYW1lOiB0aGlzLl9nZXRDbGFzcygpLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICB0YXJnZXQ6IGxpbmsgPyAnX2JsYW5rJyA6IG51bGwsXG4gICAgICBvbkNsaWNrOiAhbGluayA/IHRoaXMuX2hhbmRsZUNsaWNrLmJpbmQodGhpcykgOiBudWxsXG4gICAgfVxuICB9XG5cbiAgX2dldENsYXNzKCkge1xuICAgIGNvbnN0IHsgY29tcG9uZW50LCBiYXNpYywgY2xhc3NOYW1lLCBjb2xvciwgZGlzYWJsZWQsIG1vYmlsZSwgc3RhdHVzIH0gPSB0aGlzLnByb3BzXG4gICAgaWYoY29tcG9uZW50KSByZXR1cm4gJydcbiAgICBjb25zdCBjbGFzc2VzID0gY2xhc3NOYW1lID8gY2xhc3NOYW1lLnNwbGl0KCcgJykgOiBbJ3VpJywgY29sb3IsICdmbHVpZCcsICdidXR0b24nXVxuICAgIGNsYXNzZXMucHVzaCgncmVmcmFtZS1idXR0b24nKVxuICAgIGlmKG1vYmlsZSAhPT0gZmFsc2UpIGNsYXNzZXMucHVzaCgnbW9iaWxlJylcbiAgICBpZihiYXNpYykgY2xhc3Nlcy5wdXNoKCdiYXNpYycpXG4gICAgaWYoZGlzYWJsZWQpIGNsYXNzZXMucHVzaCgnZGlzYWJsZWQnKVxuICAgIGlmKHN0YXR1cyA9PT0gJ3N1Ym1pdHRpbmcnKSBjbGFzc2VzLnB1c2goJ2xvYWRpbmcnKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgZmxhc2ggfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IHsgZXJyb3IsIHN0YXR1cyB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKHByZXZQcm9wcy5zdGF0dXMgIT09IHN0YXR1cyAmJiBzdGF0dXMgPT09ICdmYWlsdXJlJykge1xuICAgICAgZmxhc2guc2V0KCdlcnJvcicsIGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVDbGljaygpIHtcbiAgICBjb25zdCB7IGNvbmZpcm0sIGRpc2FibGVkLCBkcmF3ZXIsIGhhbmRsZXIsIGxvY2F0aW9uLCBtb2RhbCwgcmVxdWVzdCwgcm91dGUsIG9uRG9uZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKGRpc2FibGVkKSByZXR1cm5cbiAgICBjb25zdCB5ZXNIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYocm91dGUpIHRoaXMuX2hhbmRsZVJvdXRlKHJvdXRlKVxuICAgICAgaWYocmVxdWVzdCkgdGhpcy5faGFuZGxlUmVxdWVzdChyZXF1ZXN0KVxuICAgICAgaWYobW9kYWwpIHRoaXMuX2hhbmRsZU1vZGFsKG1vZGFsKVxuICAgICAgaWYoZHJhd2VyKSB0aGlzLl9oYW5kbGVEcmF3ZXIoZHJhd2VyLCBsb2NhdGlvbilcbiAgICAgIGlmKGhhbmRsZXIpIHRoaXMuX2hhbmRsZUZ1bmN0aW9uKGhhbmRsZXIpXG4gICAgfVxuICAgIG9uRG9uZSgpXG4gICAgaWYoY29uZmlybSkgcmV0dXJuIHRoaXMuY29udGV4dC5jb25maXJtLm9wZW4oY29uZmlybSwgeWVzSGFuZGxlcilcbiAgICB5ZXNIYW5kbGVyKClcbiAgfVxuXG4gIF9oYW5kbGVSb3V0ZShyb3V0ZSkge1xuICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaChyb3V0ZSlcbiAgfVxuXG4gIF9oYW5kbGVNb2RhbChjb21wb25lbnQpIHtcbiAgICB0aGlzLmNvbnRleHQubW9kYWwub3Blbihjb21wb25lbnQpXG4gIH1cblxuICBfaGFuZGxlRHJhd2VyKGNvbXBvbmVudCwgbG9jYXRpb24pIHtcbiAgICB0aGlzLmNvbnRleHQuZHJhd2VyLm9wZW4oY29tcG9uZW50LCBsb2NhdGlvbilcbiAgfVxuXG4gIF9oYW5kbGVGdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgaGFuZGxlcigoKSA9PiB7fSlcbiAgfVxuXG4gIF9oYW5kbGVSZXF1ZXN0KGl0ZW1SZXF1ZXN0KSB7XG4gICAgY29uc3QgeyBvblJlcXVlc3QgfSA9IHRoaXMucHJvcHNcbiAgICBvblJlcXVlc3Qoe1xuICAgICAgLi4uaXRlbVJlcXVlc3QsXG4gICAgICBib2R5OiBudWxsLFxuICAgICAgcGFyYW1zOiBudWxsXG4gICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIl19