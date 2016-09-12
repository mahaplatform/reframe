'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _topbar = require('./topbar');

var _topbar2 = _interopRequireDefault(_topbar);

var _offcanvas = require('./offcanvas');

var _offcanvas2 = _interopRequireDefault(_offcanvas);

var _searchbar = require('./searchbar');

var _searchbar2 = _interopRequireDefault(_searchbar);

var _dom = require('../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TOPBAR = Symbol("topbar mode");
var OFFCANVAS = Symbol("offcanvas mode");

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = { displayMode: TOPBAR, visible: false };
    _lodash2.default.defer(_this.onViewportResize.bind(_this));
    return _this;
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      switch (this.state.displayMode) {
        case TOPBAR:
          return _react2.default.createElement(_topbar2.default, _extends({}, this.props, { ref: 'menu' }));
        case OFFCANVAS:
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_searchbar2.default, _extends({}, this.props, { onClickMenuButton: this.toggleMenu.bind(this) })),
            _react2.default.createElement(_offcanvas2.default, _extends({}, this.props, { visible: this.state.visible, onClose: this.closeMenu.bind(this), ref: 'menu' }))
          );
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.resizeListener = _lodash2.default.throttle(this.onViewportResize.bind(this), 100);
      this.closeListener = this.closeMenu.bind(this);
      window.addEventListener('resize', this.resizeListener);
      document.addEventListener('click', this.closeListener);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.resizeListener);
      document.removeEventListener('click', this.closeListener);
    }
  }, {
    key: 'onViewportResize',
    value: function onViewportResize() {
      var w = document.body.offsetWidth;
      if (w <= this.props.breakpoint) {
        this.setState({ displayMode: OFFCANVAS });
      } else {
        this.setState({ displayMode: TOPBAR });
      }
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.setState({ visible: !this.state.visible });
    }
  }, {
    key: 'closeMenu',
    value: function closeMenu(event) {
      if ((0, _dom.matches)(event.target, '.ui.sidebar *') && ((0, _dom.matches)(event.target, 'a.item') || (0, _dom.matches)(event.target, 'a.item *'))) {
        this.setState({ visible: false });
      }
    }
  }]);

  return Menu;
}(_react2.default.Component);

Menu.propTypes = {
  menu: _react2.default.PropTypes.shape({
    left: _react2.default.PropTypes.array,
    right: _react2.default.PropTypes.array,
    search: _react2.default.PropTypes.object
  })
};
Menu.defaultProps = {
  search: {
    endpoint: '/admin/search',
    queryParam: 'q'
  },
  breakpoint: 800
};
exports.default = Menu;