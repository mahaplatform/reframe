'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tab = require('./tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabbed = function (_React$Component) {
  _inherits(Tabbed, _React$Component);

  function Tabbed() {
    _classCallCheck(this, Tabbed);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tabbed).apply(this, arguments));
  }

  _createClass(Tabbed, [{
    key: 'render',
    value: function render() {
      var activeRoute = _lodash2.default.find(this.props.tabs, { route: this.props.location.pathname });
      var active = !_lodash2.default.isUndefined(activeRoute) ? activeRoute.route : this.props.tabs[0].route;
      var klass = ['ui', 'top', 'attached', 'tabular'];
      if (this.props.even) {
        var sizes = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        klass = klass.concat(['fluid', sizes[this.props.tabs.length], 'item', 'menu']);
      } else {
        klass.push('menu');
      }
      return _react2.default.createElement(
        'div',
        { className: 'pane' },
        _react2.default.createElement(
          'div',
          { className: klass.join(' ') },
          this.props.tabs.map(function (tab, index) {
            return _react2.default.createElement(_tab2.default, { key: 'tab_' + index, tab: tab, active: tab.route == active });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui bottom attached active tab segment' },
          this.props.children
        )
      );
    }
  }]);

  return Tabbed;
}(_react2.default.Component);

Tabbed.propTypes = {
  tabs: _react2.default.PropTypes.array,
  location: _react2.default.PropTypes.object,
  even: _react2.default.PropTypes.bool
};
Tabbed.defaultProps = {
  tabs: [],
  location: null,
  even: false
};
exports.default = Tabbed;