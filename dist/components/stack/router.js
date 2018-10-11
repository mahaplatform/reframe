'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _matchPath = require('react-router-dom/matchPath');

var _matchPath2 = _interopRequireDefault(_matchPath);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stack = require('./stack');

var _stack2 = _interopRequireDefault(_stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterStack = function (_React$Component) {
  (0, _inherits3.default)(RouterStack, _React$Component);

  function RouterStack() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RouterStack);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RouterStack.__proto__ || Object.getPrototypeOf(RouterStack)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      cards: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RouterStack, [{
    key: 'render',
    value: function render() {
      var cards = this.state.cards;

      return _react2.default.createElement(_stack2.default, { cards: cards });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          pathname = _props.pathname,
          rootPath = _props.rootPath;

      if (pathname === rootPath) return;
      var card = this._matchRoute(pathname);
      this.setState({
        cards: [card]
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var _props2 = this.props,
          action = _props2.action,
          pathname = _props2.pathname;
      var mounted = this.state.mounted;

      if (prevProps.pathname !== pathname) {
        if (action === 'push') {
          var card = this._matchRoute(pathname);
          this._handlePush(card);
          setTimeout(function () {
            return _this2.setState({ mounted: mounted + 1 });
          }, 50);
        } else if (action === 'pop') {
          this.setState({ mounted: mounted - 1 });
          setTimeout(this._handlePop.bind(this), 500);
        }
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var cards = this.state.cards;

      return {
        stack: {
          push: this._handlePush.bind(this),
          pop: this._handlePop.bind(this)
        }
      };
    }
  }, {
    key: '_handlePush',
    value: function _handlePush(card) {
      this.setState({
        cards: [].concat((0, _toConsumableArray3.default)(this.state.cards), [card])
      });
    }
  }, {
    key: '_handlePop',
    value: function _handlePop() {
      var cards = this.state.cards.slice(0, -1);
      this.setState({ cards: cards });
    }
  }, {
    key: '_matchRoute',
    value: function _matchRoute(pathname) {
      var routes = this.props.routes;

      return Object.keys(routes).reduce(function (component, path) {
        if (component) return component;
        var matched = (0, _matchPath2.default)(pathname, { path: path, exact: true });
        if (!matched) return null;
        return {
          pathname: pathname,
          component: routes[path],
          props: {
            pathname: pathname,
            params: matched.params
          }
        };
      }, null);
    }
  }]);
  return RouterStack;
}(_react2.default.Component);

RouterStack.childContextTypes = {
  stack: _propTypes2.default.object
};
RouterStack.propTypes = {
  action: _propTypes2.default.string,
  pathname: _propTypes2.default.string,
  rootPath: _propTypes2.default.string,
  routes: _propTypes2.default.object
};
RouterStack.defaultProps = {
  rootPath: '/'
};

var RouterStackWrapper = function (_React$Component2) {
  (0, _inherits3.default)(RouterStackWrapper, _React$Component2);

  function RouterStackWrapper() {
    (0, _classCallCheck3.default)(this, RouterStackWrapper);
    return (0, _possibleConstructorReturn3.default)(this, (RouterStackWrapper.__proto__ || Object.getPrototypeOf(RouterStackWrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(RouterStackWrapper, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        RouterStack,
        this._getRouter(),
        this.props.children
      );
    }
  }, {
    key: '_getRouter',
    value: function _getRouter() {
      var _getHistory2 = this._getHistory(),
          action = _getHistory2.action,
          pathname = _getHistory2.pathname;

      return (0, _extends3.default)({}, this.props, {
        pathname: pathname,
        action: action.toLowerCase()
      });
    }
  }, {
    key: '_getHistory',
    value: function _getHistory() {
      var router = this.context.router;

      return router.history ? {
        action: router.history.action,
        pathname: router.history.location.pathname
      } : router;
    }
  }]);
  return RouterStackWrapper;
}(_react2.default.Component);

RouterStackWrapper.contextTypes = {
  router: _propTypes2.default.object
};
RouterStackWrapper.propTypes = {
  children: _propTypes2.default.any,
  routes: _propTypes2.default.object
};
exports.default = RouterStackWrapper;