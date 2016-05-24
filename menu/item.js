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
      var iconElement = this.props.item.icon ? _react2.default.createElement('i', { className: this.props.item.icon + ' icon' }) : null;

      if (this.props.item.items) {
        if (this.props.accordion) return _react2.default.createElement(AccordionListItem, this.props.item);else return _react2.default.createElement(DropdownListItem, this.props.item);
      } else if (this.props.item.handler) {
        return _react2.default.createElement(
          'a',
          { onClick: this.props.item.handler, className: 'item' },
          iconElement,
          ' ',
          this.props.item.label
        );
      } else if (this.props.item.route) {
        if (this.props.item.label) {
          return _react2.default.createElement(
            _reactRouter.IndexLink,
            { to: this.props.item.route, className: 'item' },
            iconElement,
            ' ',
            this.props.item.label
          );
        } else if (this.props.item.image) {
          return _react2.default.createElement(
            _reactRouter.IndexLink,
            { to: this.props.item.route, className: 'item' },
            _react2.default.createElement('img', { src: this.props.item.image, className: 'ui image' })
          );
        }
      } else if (this.props.item.url) {
        if (this.props.item.label) {
          return _react2.default.createElement(
            'a',
            { href: this.props.item.url, className: 'item' },
            iconElement,
            ' ',
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
MenuItem.defaultProps = {
  accordion: false
};
exports.default = MenuItem;

var DropdownListItem = function (_React$Component2) {
  _inherits(DropdownListItem, _React$Component2);

  function DropdownListItem(props) {
    _classCallCheck(this, DropdownListItem);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DropdownListItem).call(this, props));

    _this2.state = {};
    return _this2;
  }

  _createClass(DropdownListItem, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { className: 'ui dropdown item' },
        function () {
          if (_this3.props.image) {
            return _react2.default.createElement('img', { src: _this3.props.image, className: 'ui image' });
          }
        }(),
        function () {
          if (_this3.props.icon) {
            return _react2.default.createElement('i', { className: _this3.props.icon + ' icon' });
          }
        }(),
        this.props.label,
        ' ',
        _react2.default.createElement('i', { className: 'dropdown icon' }),
        _react2.default.createElement(
          'div',
          { className: 'menu' },
          this.props.items.map(function (item, index) {
            return _react2.default.createElement(MenuItem, { key: 'item_' + index, item: item });
          })
        )
      );
    }
  }]);

  return DropdownListItem;
}(_react2.default.Component);

var AccordionListItem = function (_React$Component3) {
  _inherits(AccordionListItem, _React$Component3);

  function AccordionListItem(props) {
    _classCallCheck(this, AccordionListItem);

    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(AccordionListItem).call(this, props));

    _this4.state = {};
    return _this4;
  }

  _createClass(AccordionListItem, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      return _react2.default.createElement(
        'div',
        { className: 'ui inverted accordion item' },
        _react2.default.createElement(
          'div',
          { className: 'title' },
          function () {
            if (_this5.props.image) {
              return _react2.default.createElement('img', { src: _this5.props.image, className: 'ui image' });
            }
          }(),
          function () {
            if (_this5.props.icon) {
              return _react2.default.createElement('i', { className: _this5.props.icon + ' icon' });
            }
          }(),
          this.props.label,
          ' ',
          _react2.default.createElement('i', { className: 'dropdown icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          this.props.items.map(function (item, index) {
            return _react2.default.createElement(MenuItem, { key: 'item_' + index, item: item });
          })
        )
      );
    }
  }]);

  return AccordionListItem;
}(_react2.default.Component);