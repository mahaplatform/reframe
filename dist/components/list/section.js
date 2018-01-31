'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          content = _props.content,
          empty = _props.empty,
          items = _props.items,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-list-section' },
        title && _react2.default.createElement(
          'div',
          { className: 'reframe-list-title' },
          title
        ),
        component && _lodash2.default.isFunction(component) ? _react2.default.createElement(component, content) : component,
        content && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-list-item-content' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-list-item-content-value' },
              content
            )
          )
        ),
        items && items.length > 0 && items.map(function (item, itemIndex) {
          return _react2.default.createElement(_item2.default, _extends({ key: 'list_item_' + itemIndex }, item));
        }),
        empty && items && items.length === 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item' },
          _lodash2.default.isPlainObject(empty) ? _react2.default.createElement(_message2.default, empty) : _react2.default.createElement(
            'div',
            { className: 'reframe-list-item-content' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-list-item-content-value' },
              _lodash2.default.isFunction(empty) ? _react2.default.createElement(empty, this.props) : empty
            )
          )
        )
      );
    }
  }]);

  return Section;
}(_react2.default.Component);

exports.default = Section;