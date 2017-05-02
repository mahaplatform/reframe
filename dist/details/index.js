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

var Details = function (_React$Component) {
  _inherits(Details, _React$Component);

  function Details() {
    _classCallCheck(this, Details);

    return _possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }

  _createClass(Details, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          top = _props.top,
          image = _props.image,
          items = _props.items,
          body = _props.body,
          buttons = _props.buttons;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-details' },
        top && _react2.default.createElement(
          'div',
          { className: 'reframe-details-top' },
          top
        ),
        image && _react2.default.createElement(
          'div',
          { className: 'reframe-details-image' },
          _react2.default.createElement('img', { src: image, className: 'ui circular image' })
        ),
        body && _react2.default.createElement(
          'div',
          { className: 'reframe-details-content' },
          body
        ),
        items && _react2.default.createElement(
          'div',
          { className: 'reframe-details-content' },
          _react2.default.createElement(
            'div',
            { className: 'ui list' },
            items.map(function (item, index) {
              if (item.content !== null || item.content === undefined) {
                return _react2.default.createElement(
                  'div',
                  { key: 'item_' + index, className: 'item' },
                  _react2.default.createElement(
                    'div',
                    { className: 'header' },
                    item.label
                  ),
                  _react2.default.createElement(_format2.default, _extends({}, _this2.props, { format: item.format, value: item.content }))
                );
              }
            })
          )
        ),
        buttons && _react2.default.createElement(
          'div',
          { className: 'extra content' },
          _react2.default.createElement(
            'div',
            { className: 'ui two buttons' },
            buttons.map(function (button, index) {
              var classes = ['ui', 'button'];
              if (button.style) {
                classes.push(button.style);
              }
              return _react2.default.createElement(
                'div',
                { key: 'task_' + index, handler: button.handler, className: classes.join(' ') },
                button.label
              );
            })
          )
        )
      );
    }
  }]);

  return Details;
}(_react2.default.Component);

Details.propTypes = {
  header: _propTypes2.default.string,
  image: _propTypes2.default.string,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    content: _propTypes2.default.any,
    format: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element, _propTypes2.default.func])
  })),
  body: _propTypes2.default.string,
  buttons: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    style: _propTypes2.default.string,
    handler: _propTypes2.default.string
  }))
};
exports.default = Details;