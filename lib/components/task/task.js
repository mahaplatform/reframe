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

var Task = function (_React$Component) {
  _inherits(Task, _React$Component);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
  }

  _createClass(Task, [{
    key: 'render',
    value: function render() {
      var label = this.props.label;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-task', onClick: this._handleChoose.bind(this) },
        label
      );
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(index) {
      var _props = this.props,
          drawer = _props.drawer,
          handler = _props.handler,
          location = _props.location,
          modal = _props.modal,
          request = _props.request,
          route = _props.route;

      if (route) this._handleRoute(route);
      if (request) this._handleRequest(request);
      if (modal) this._handleModal(modal);
      if (drawer) this._handleDrawer(drawer, location);
      if (handler) this._handleFunction(handler);
    }
  }, {
    key: '_handleRoute',
    value: function _handleRoute(route) {
      var router = this.context.router;

      router.history.push(route);
      this.props.onDone();
    }
  }, {
    key: '_handleModal',
    value: function _handleModal(component) {
      var modal = this.context.modal;

      modal.open(component);
      this.props.onDone();
    }
  }, {
    key: '_handleDrawer',
    value: function _handleDrawer(component, location) {
      var drawer = this.context.drawer;

      drawer.open(component, location);
      this.props.onDone();
    }
  }, {
    key: '_handleFunction',
    value: function _handleFunction(handler) {
      var done = this.props.onDone.bind(this);
      handler(done);
    }
  }, {
    key: '_handleRequest',
    value: function _handleRequest(itemRequest) {
      var _props2 = this.props,
          onDone = _props2.onDone,
          onRequest = _props2.onRequest;

      var onFailure = function onFailure(result) {
        if (itemRequest.onFailure) itemRequest.onFailure(result);
        onDone();
      };
      var onSuccess = function onSuccess(result) {
        if (itemRequest.onSuccess) itemRequest.onSuccess(result);
        onDone();
      };
      onRequest(_extends({}, itemRequest, {
        onSuccess: onSuccess,
        onFailure: onFailure
      }));
    }
  }]);

  return Task;
}(_react2.default.Component);

Task.contextTypes = {
  drawer: _propTypes2.default.object,
  modal: _propTypes2.default.object,
  router: _propTypes2.default.object
};
Task.propTypes = {
  drawer: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  handler: _propTypes2.default.func,
  label: _propTypes2.default.string,
  location: _propTypes2.default.string,
  modal: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  request: _propTypes2.default.shape({
    method: _propTypes2.default.string,
    endpoint: _propTypes2.default.string,
    onFailure: _propTypes2.default.func,
    onSuccess: _propTypes2.default.func
  }),
  route: _propTypes2.default.string,
  onRequest: _propTypes2.default.func,
  onDone: _propTypes2.default.func
};
exports.default = Task;