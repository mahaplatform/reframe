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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = function (_React$Component) {
  (0, _inherits3.default)(Item, _React$Component);

  function Item() {
    (0, _classCallCheck3.default)(this, Item);
    return (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  (0, _createClass3.default)(Item, [{
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
      var item = _react2.default.createElement(
        'div',
        { className: this._getClass() },
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
            content && _react2.default.createElement(_format2.default, (0, _extends3.default)({}, content, { format: format, value: content })),
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
      return _react2.default.createElement(
        'div',
        { onClick: this._handleClick.bind(this) },
        item
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
  tasks: _propTypes2.default.object
};
exports.default = Item;