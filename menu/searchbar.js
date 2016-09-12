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

var _search = require('./search.js');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchbar = function (_React$Component) {
  _inherits(Searchbar, _React$Component);

  function Searchbar(props) {
    _classCallCheck(this, Searchbar);

    var _this = _possibleConstructorReturn(this, (Searchbar.__proto__ || Object.getPrototypeOf(Searchbar)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Searchbar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var menuButton = {
        icon: 'sidebar',
        handler: function handler() {
          return _this2.props.onClickMenuButton();
        }
      };
      return _react2.default.createElement(
        'div',
        { className: 'ui mobile menu fixed inverted application-menu', ref: 'menu' },
        _react2.default.createElement(
          'div',
          { className: 'left menu' },
          _react2.default.createElement(_item2.default, { key: 'toggle_menu_button', item: menuButton, onClick: this.props.onClickMenuButton })
        ),
        function () {
          if (_this2.props.menu.search) {
            return _react2.default.createElement(_search2.default, {
              endpoint: _this2.props.menu.search.endpoint || '/admin/search',
              query: _this2.props.menu.search.queryParam || 'q',
              itemComponent: _this2.props.menu.search.resultComponent,
              routes: _this2.props.menu.search.routes });
          }
        }()
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.menu).find(".dropdown").dropdown({ on: 'click' });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      $(this.refs.menu).find(".dropdown").dropdown({ on: 'click' });
    }
  }]);

  return Searchbar;
}(_react2.default.Component);

Searchbar.defaultProps = {
  onClickMenuButton: function onClickMenuButton() {}
};
exports.default = Searchbar;