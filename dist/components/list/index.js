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

var _section = require('./section');

var _section2 = _interopRequireDefault(_section);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function (_React$Component) {
  (0, _inherits3.default)(List, _React$Component);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          alert = _props.alert,
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
          return _react2.default.createElement(_section2.default, (0, _extends3.default)({}, section, { key: 'list_section_' + index }));
        }),
        items && _react2.default.createElement(_section2.default, { items: items, empty: empty }),
        footer && _react2.default.createElement(
          'div',
          { className: 'reframe-list-footer' },
          _lodash2.default.isFunction(footer) ? _react2.default.createElement(footer) : footer
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