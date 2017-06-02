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

var _matchPath = require('react-router-dom/matchPath');

var _matchPath2 = _interopRequireDefault(_matchPath);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stack = function (_React$Component) {
  _inherits(Stack, _React$Component);

  function Stack(props) {
    _classCallCheck(this, Stack);

    var _this = _possibleConstructorReturn(this, (Stack.__proto__ || Object.getPrototypeOf(Stack)).call(this, props));

    _this.routes = _this._collapseRoutes(props.routes, props.routes.path);
    _this.state = {
      mounted: 1
    };
    return _this;
  }

  _createClass(Stack, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var cards = this.props.cards;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-stack' },
        cards.map(function (card, index) {
          var status = _this2._getStatus(index);
          var match = _this2._matchRoute(card);
          var Card = match.component;
          return _react2.default.createElement(
            'div',
            { key: 'card_' + index, className: 'reframe-stack-card ' + status },
            _react2.default.createElement(Card, { params: match.params }),
            _react2.default.createElement('div', { className: 'reframe-stack-card-cover' })
          );
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var pathname = this.context.router.route.location.pathname;
      var _props = this.props,
          initialRoute = _props.initialRoute,
          onSet = _props.onSet;

      var cards = [];
      if (initialRoute) cards.push(initialRoute);
      if (pathname !== initialRoute) cards.push(pathname);
      if (cards.length > 0) onSet(cards);
      this.setState({ mounted: cards.length });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState, prevContext) {
      var _this3 = this;

      var _props2 = this.props,
          onPop = _props2.onPop,
          onPush = _props2.onPush;
      var router = this.context.router;
      var pathname = router.route.location.pathname;
      var mounted = this.state.mounted;

      if (prevContext.router.route.location.pathname !== pathname) {
        if (router.history.action === 'PUSH') {
          onPush(pathname);
          setTimeout(function () {
            return _this3.setState({ mounted: mounted + 1 });
          }, 50);
        } else {
          this.setState({ mounted: mounted - 1 });
          setTimeout(function () {
            return onPop();
          }, 500);
        }
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        stack: {
          push: this._handlePush.bind(this),
          pop: this._handlePop.bind(this),
          reset: this._handleReset.bind(this)
        }
      };
    }
  }, {
    key: '_collapseRoutes',
    value: function _collapseRoutes(routes) {
      var _this4 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      return routes.children.reduce(function (routes, route) {
        var path = route.path !== '/' ? route.path : '';
        if (route.children) {
          return _extends({}, routes, _this4._collapseRoutes(route, '' + prefix + path));
        } else {
          return _extends({}, routes, _defineProperty({}, '' + prefix + path, route.component));
        }
      }, {});
    }
  }, {
    key: '_matchRoute',
    value: function _matchRoute(pathname) {
      var _this5 = this;

      return Object.keys(this.routes).reduce(function (component, path) {
        if (component) return component;
        var matched = (0, _matchPath2.default)(pathname, { path: path, exact: true });
        if (matched) return {
          component: _this5.routes[path],
          params: matched.params
        };
        return null;
      }, null);
    }
  }, {
    key: '_handlePush',
    value: function _handlePush(route) {
      this.context.router.history.push(route);
    }
  }, {
    key: '_handlePop',
    value: function _handlePop() {
      var _props3 = this.props,
          cards = _props3.cards,
          initialRoute = _props3.initialRoute;

      if (cards.length === 1) return this.context.router.history.replace(initialRoute);
      this.context.router.history.goBack();
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      var _this6 = this;

      var cards = this.props.cards;

      if (cards.length > 1) {
        this._handlePop();
        setTimeout(function () {
          return _this6._handleReset();
        }, 500);
      }
    }
  }, {
    key: '_getStatus',
    value: function _getStatus(index) {
      var mounted = this.state.mounted;
      var cards = this.props.cards;

      var mountedIndexes = mounted - 1;
      var cardIndexes = cards.length - 1;
      if (index > mountedIndexes && index === cardIndexes) return 'mounting';
      if (index === mountedIndexes && index === cardIndexes) return 'active';
      if (index === mountedIndexes && index < cardIndexes) return 'covering';
      if (index < cardIndexes) return 'covered';
    }
  }]);

  return Stack;
}(_react2.default.Component);

Stack.childContextTypes = {
  stack: _propTypes2.default.object
};
Stack.contextTypes = {
  router: _propTypes2.default.object
};
Stack.propTypes = {
  initialRoute: _propTypes2.default.string.isRequired,
  cards: _propTypes2.default.array,
  location: _propTypes2.default.object,
  routes: _propTypes2.default.object,
  onPop: _propTypes2.default.func,
  onPush: _propTypes2.default.func,
  onSet: _propTypes2.default.func
};
exports.default = Stack;