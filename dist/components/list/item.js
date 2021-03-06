'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
          alt = _props.alt,
          component = _props.component,
          content = _props.content,
          empty = _props.empty,
          extra = _props.extra,
          format = _props.format,
          handler = _props.handler,
          icon = _props.icon,
          label = _props.label,
          link = _props.link,
          tasks = _props.tasks,
          units = _props.units;

      if (this.props.if === false) return null;
      return _react2.default.createElement(
        'div',
        { className: this._getClass(), onClick: this._handleClick.bind(this) },
        icon && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-icon' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-' + icon })
        ),
        component && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-component' },
          _lodash2.default.isFunction(component) ? _react2.default.createElement(component, content) : component
        ),
        !component && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-content' },
          label && _react2.default.createElement(
            'div',
            { className: 'reframe-list-item-content-label' },
            label
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-list-item-content-value' },
            content && _react2.default.createElement(_format2.default, _extends({}, content, { format: format, value: content })),
            content && units && ' ' + units,
            !content && alt && _react2.default.createElement(
              'span',
              null,
              alt
            ),
            !content && empty && _react2.default.createElement(
              'span',
              { className: 'reframe-list-item-content-empty' },
              empty
            )
          )
        ),
        extra && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-extra' },
          _lodash2.default.isFunction(extra) ? _react2.default.createElement(extra, content) : extra
        ),
        (handler || link) && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-proceed' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-chevron-right' })
        ),
        tasks && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item-proceed', onClick: this._handleTasks.bind(this) },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-ellipsis-v' })
        )
      );
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      var _props2 = this.props,
          link = _props2.link,
          handler = _props2.handler;

      if (link) this.context.router.push(link);
      if (handler) handler();
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var _props3 = this.props,
          className = _props3.className,
          handler = _props3.handler,
          link = _props3.link;

      var classes = ['reframe-list-item'];
      if (className) classes.push(className);
      if (link || handler) classes.push('reframe-list-item-link');
      return classes.join(' ');
    }
  }, {
    key: '_handleTasks',
    value: function _handleTasks() {
      var tasks = this.props.tasks;

      this.context.tasks.open(tasks);
    }
  }]);

  return Item;
}(_react2.default.Component);

Item.contextTypes = {
  router: _propTypes2.default.object,
  tasks: _propTypes2.default.object
};
exports.default = Item;