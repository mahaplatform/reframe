'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _item = require('./item.js');

var _item2 = _interopRequireDefault(_item);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OffcanvasMenu = function (_React$Component) {
  _inherits(OffcanvasMenu, _React$Component);

  function OffcanvasMenu(props) {
    _classCallCheck(this, OffcanvasMenu);

    return _possibleConstructorReturn(this, (OffcanvasMenu.__proto__ || Object.getPrototypeOf(OffcanvasMenu)).call(this, props));
  }

  _createClass(OffcanvasMenu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var closeButton = {
        label: 'CLOSE',
        icon: 'x',
        handler: this.props.onClose
      };

      return _react2.default.createElement(
        'div',
        { className: 'ui sidebar inverted vertical fluid ' + (this.props.visible ? 'visible' : '') + ' menu', ref: 'menu' },
        _react2.default.createElement(
          'a',
          { className: 'large item', onClick: this.props.onClose },
          'CLOSE ',
          _react2.default.createElement('i', { className: 'x icon' })
        ),
        _lodash2.default.map(this.props.menu.left, function (item, index) {
          return _react2.default.createElement(_item2.default, { accordion: true, key: 'left_menu_item_' + index, item: item, onClick: _this2.handleItemClick });
        }),
        _lodash2.default.map(this.props.menu.right, function (item, index) {
          return _react2.default.createElement(_item2.default, { accordion: true, key: 'right_menu_item_' + index, item: item, onClick: _this2.handleItemClick });
        })
      );
    }
  }, {
    key: 'handleItemClick',
    value: function handleItemClick() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.menu).find(".accordion").accordion({ on: 'click' });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      $(this.refs.menu).find(".accordion").accordion({ on: 'click' });
    }
  }]);

  return OffcanvasMenu;
}(_react2.default.Component);

OffcanvasMenu.defaultProps = {
  onClose: _lodash2.default.noop
};
exports.default = OffcanvasMenu;