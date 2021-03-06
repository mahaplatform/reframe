'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _buttons = require('../buttons');

var _buttons2 = _interopRequireDefault(_buttons);

var _section = require('./section');

var _section2 = _interopRequireDefault(_section);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alert = _props.alert,
          buttons = _props.buttons,
          empty = _props.empty,
          footer = _props.footer,
          header = _props.header,
          items = _props.items,
          sections = _props.sections;

      return _react2.default.createElement(
        'div',
        { className: this._getClasses() },
        header && _react2.default.createElement(
          'div',
          { className: 'reframe-list-header' },
          _lodash2.default.isFunction(header) ? _react2.default.createElement(header) : header
        ),
        alert && _react2.default.createElement(
          'div',
          { className: 'reframe-list-alert ' + alert.color },
          alert.message
        ),
        sections && sections.map(function (section, index) {
          return _react2.default.createElement(_section2.default, _extends({}, section, { key: 'list_section_' + index }));
        }),
        items && _react2.default.createElement(_section2.default, { items: items, empty: empty }),
        footer && _react2.default.createElement(
          'div',
          { className: 'reframe-list-footer' },
          _lodash2.default.isFunction(footer) ? _react2.default.createElement(footer) : footer
        ),
        buttons && _react2.default.createElement(
          'div',
          { className: 'reframe-list-buttons' },
          _react2.default.createElement(_buttons2.default, { buttons: buttons })
        )
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      var className = this.props.className;

      var classes = ['reframe-list'];
      if (className) classes.push(className);
      return classes.join(' ');
    }
  }]);

  return List;
}(_react2.default.Component);

exports.default = List;