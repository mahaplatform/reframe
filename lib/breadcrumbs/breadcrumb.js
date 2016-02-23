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

var Breadcrumb = function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Breadcrumb).apply(this, arguments));
  }

  _createClass(Breadcrumb, [{
    key: 'render',
    value: function render() {
      if (this.props.item.route) {
        return _react2.default.createElement(
          'span',
          { className: '.item-item' },
          _react2.default.createElement(
            'div',
            { className: 'divider' },
            ' / '
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: this.props.item.route, className: 'item' },
            this.props.item.label
          )
        );
      } else if (this.props.item.link) {
        return _react2.default.createElement(
          'span',
          { className: '.item-item' },
          _react2.default.createElement(
            'div',
            { className: 'divider' },
            ' / '
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: this.props.item.link, className: 'item' },
            this.props.item.label
          )
        );
      } else {
        return _react2.default.createElement(
          'span',
          { className: '.item-item' },
          _react2.default.createElement(
            'div',
            { className: 'divider' },
            ' / '
          ),
          _react2.default.createElement(
            'div',
            { className: 'active section' },
            this.props.item.label
          )
        );
      }
    }
  }]);

  return Breadcrumb;
}(_react2.default.Component);

Breadcrumb.propTypes = {
  item: _react2.default.PropTypes.shape({
    label: _react2.default.PropTypes.string,
    link: _react2.default.PropTypes.string,
    route: _react2.default.PropTypes.string
  })
};
Breadcrumb.defaultProps = {};
exports.default = Breadcrumb;