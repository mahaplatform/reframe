'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _reactRouterDom = require('react-router-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          content = _props.content,
          extra = _props.extra,
          format = _props.format,
          handler = _props.handler,
          icon = _props.icon,
          label = _props.label,
          link = _props.link;

      var item = _react2.default.createElement(
        'div',
        { className: this._getClass() },
        icon && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-icon' },
          _react2.default.createElement('i', { className: icon + ' icon' })
        ),
        component && _lodash2.default.isFunction(component) ? _react2.default.createElement(component, content) : component,
        !component && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-content' },
          label && _react2.default.createElement(
            'strong',
            null,
            label,
            _react2.default.createElement('br', null)
          ),
          _react2.default.createElement(_format2.default, _extends({}, content, { format: format, value: content }))
        ),
        extra && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-extra' },
          _lodash2.default.isFunction(extra) ? _react2.default.createElement(extra) : extra
        ),
        link && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-proceed' },
          _react2.default.createElement('i', { className: 'chevron right icon' })
        )
      );
      if (link) return _react2.default.createElement(
        _reactRouterDom.Link,
        { to: link },
        item
      );
      if (handler) return _react2.default.createElement(
        'div',
        { onClick: handler },
        item
      );
      return item;
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var className = this.props.className;

      var classes = ['reframe-list-item'];
      if (className) classes.push(className);
      return classes.join(' ');
    }
  }]);

  return Item;
}(_react2.default.Component);

exports.default = Item;