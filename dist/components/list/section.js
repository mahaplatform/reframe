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

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_React$Component) {
  (0, _inherits3.default)(Section, _React$Component);

  function Section() {
    (0, _classCallCheck3.default)(this, Section);
    return (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  (0, _createClass3.default)(Section, [{
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
          return _react2.default.createElement(_item2.default, (0, _extends3.default)({ key: 'list_item_' + itemIndex }, item));
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