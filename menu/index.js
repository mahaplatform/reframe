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

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: this.props.menu.className },
        _react2.default.createElement(
          'div',
          { className: 'ui menu fixed inverted', ref: 'menu' },
          function () {
            if (_this2.props.menu.left) {
              return _react2.default.createElement(
                'div',
                { className: 'left menu' },
                _this2.props.menu.left.map(function (item, index) {
                  return _react2.default.createElement(_item2.default, { key: 'left_menu_item_' + index, item: item, onClick: _this2.handleItemClick });
                })
              );
            }
          }(),
          function () {
            if (_this2.props.menu.search) {
              return _react2.default.createElement(_search2.default, {
                endpoint: _this2.props.menu.search.endpoint || '/admin/search',
                query: _this2.props.menu.search.queryParam || 'q',
                itemComponent: _this2.props.menu.search.resultComponent,
                routes: _this2.props.menu.search.routes });
            }
          }(),
          function () {
            if (_this2.props.menu.right) {
              return _react2.default.createElement(
                'div',
                { className: 'right menu' },
                _this2.props.menu.right.map(function (item, index) {
                  return _react2.default.createElement(_item2.default, { key: 'right_menu_item_' + index, item: item, onClick: _this2.handleItemClick });
                })
              );
            }
          }()
        )
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
  }
};
exports.default = Menu;