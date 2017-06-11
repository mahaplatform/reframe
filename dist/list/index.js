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

var _format = require('../format');

var _format2 = _interopRequireDefault(_format);

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
          items = _props.items,
          sections = _props.sections;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-list' },
        sections && sections.map(function (section, index) {
          return _react2.default.createElement(Section, _extends({}, section, { key: 'list_section_' + index }));
        }),
        items && _react2.default.createElement(Section, { items: items })
      );
    }
  }]);

  return List;
}(_react2.default.Component);

List.propTypes = {
  items: _propTypes2.default.array,
  sections: _propTypes2.default.array
};

var Section = function (_React$Component2) {
  _inherits(Section, _React$Component2);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props2 = this.props,
          empty = _props2.empty,
          items = _props2.items,
          title = _props2.title;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-list-section' },
        title && _react2.default.createElement(
          'div',
          { className: 'reframe-list-title' },
          title
        ),
        items && items.length > 0 && items.map(function (item, itemIndex) {
          return _react2.default.createElement(
            'div',
            { key: 'list_item_' + itemIndex, className: 'reframe-list-item' },
            item.icon && _react2.default.createElement(
              'div',
              { className: 'reframe-list-item-icon' },
              _react2.default.createElement('i', { className: item.icon + ' icon' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-list-item-content' },
              item.label && _react2.default.createElement(
                'strong',
                null,
                item.label,
                _react2.default.createElement('br', null)
              ),
              _react2.default.createElement(_format2.default, _extends({}, _this3.props, { format: item.format, value: item.content }))
            )
          );
        }),
        empty && !items || items && items.length === 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-list-item' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-list-item-content' },
            empty
          )
        )
      );
    }
  }]);

  return Section;
}(_react2.default.Component);

Section.propTypes = {
  empty: _propTypes2.default.string,
  items: _propTypes2.default.array,
  title: _propTypes2.default.string
};
exports.default = List;