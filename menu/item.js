'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (this.props.item.items) {
        return _react2.default.createElement(
          'div',
          { className: 'ui dropdown item' },
          function () {
            if (_this2.props.item.image) {
              return _react2.default.createElement('img', { src: _this2.props.item.image, className: 'ui image' });
            }
          }(),
          this.props.item.label,
          ' ',
          _react2.default.createElement('i', { className: 'dropdown icon' }),
          _react2.default.createElement(
            'div',
            { className: 'menu' },
            this.props.item.items.map(function (item, index) {
              return _react2.default.createElement(MenuItem, { key: 'item_' + index, item: item });
            })
          )
        );
      } else if (this.props.item.handler) {
        return _react2.default.createElement(
          'a',
          { onClick: this.props.item.handler, className: 'item' },
          this.props.item.label
        );
      } else if (this.props.item.route) {
        if (this.props.item.label) {
          return _react2.default.createElement(
            _reactRouter.Link,
            { to: this.props.item.route, className: 'item' },
            this.props.item.label
          );
        } else if (this.props.item.image) {
          return _react2.default.createElement(
            _reactRouter.Link,
            { to: this.props.item.route, className: 'item' },
            _react2.default.createElement('img', { src: this.props.item.image, className: 'ui image' })
          );
        }
      } else if (this.props.item.url) {
        if (this.props.item.label) {
          return _react2.default.createElement(
            'a',
            { href: this.props.item.url, className: 'item' },
            this.props.item.label
          );
        } else if (this.props.item.image) {
          return _react2.default.createElement(
            'a',
            { href: this.props.item.url, className: 'item' },
            _react2.default.createElement('img', { src: this.props.item.image, className: 'ui image' })
          );
        }
      }
    }
  }]);

  return MenuItem;
}(_react2.default.Component);

MenuItem.propTypes = {
  item: _react2.default.PropTypes.shape({
    handler: _react2.default.PropTypes.string,
    image: _react2.default.PropTypes.string,
    label: _react2.default.PropTypes.string,
    route: _react2.default.PropTypes.string,
    url: _react2.default.PropTypes.string
  })
};
MenuItem.defaultProps = {};
exports.default = MenuItem;