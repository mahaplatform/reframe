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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiUm91dGVyU3RhY2siLCJzdGF0ZSIsImNhcmRzIiwicHJvcHMiLCJwYXRobmFtZSIsInJvb3RQYXRoIiwiY2FyZCIsIl9tYXRjaFJvdXRlIiwic2V0U3RhdGUiLCJwcmV2UHJvcHMiLCJhY3Rpb24iLCJtb3VudGVkIiwiX2hhbmRsZVB1c2giLCJzZXRUaW1lb3V0IiwiX2hhbmRsZVBvcCIsImJpbmQiLCJzdGFjayIsInB1c2giLCJwb3AiLCJzbGljZSIsInJvdXRlcyIsIk9iamVjdCIsImtleXMiLCJyZWR1Y2UiLCJjb21wb25lbnQiLCJwYXRoIiwibWF0Y2hlZCIsImV4YWN0IiwicGFyYW1zIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjaGlsZENvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRQcm9wcyIsIlJvdXRlclN0YWNrV3JhcHBlciIsIl9nZXRSb3V0ZXIiLCJjaGlsZHJlbiIsIl9nZXRIaXN0b3J5IiwidG9Mb3dlckNhc2UiLCJyb3V0ZXIiLCJjb250ZXh0IiwiaGlzdG9yeSIsImxvY2F0aW9uIiwiY29udGV4dFR5cGVzIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFc7Ozs7Ozs7Ozs7Ozs7OzhNQWlCSkMsSyxHQUFRO0FBQ05DLGFBQU87QUFERCxLOzs7Ozs2QkFJQztBQUFBLFVBQ0NBLEtBREQsR0FDVyxLQUFLRCxLQURoQixDQUNDQyxLQUREOztBQUVQLGFBQU8sOEJBQUMsZUFBRCxJQUFPLE9BQVFBLEtBQWYsR0FBUDtBQUNEOzs7d0NBRW1CO0FBQUEsbUJBQ2EsS0FBS0MsS0FEbEI7QUFBQSxVQUNWQyxRQURVLFVBQ1ZBLFFBRFU7QUFBQSxVQUNBQyxRQURBLFVBQ0FBLFFBREE7O0FBRWxCLFVBQUdELGFBQWFDLFFBQWhCLEVB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V0s7QUFDUCxhQUNFO0FBQUMsbUJBQUQ7QUFBa0IsYUFBS0MsVUFBTCxFQUFsQjtBQUNJLGFBQUtuQyxLQUFMLENBQVdvQztBQURmLE9BREY7QUFLRDs7O2lDQUVZO0FBQUEseUJBQ2tCLEtBQUtDLFdBQUwsRUFEbEI7QUFBQSxVQUNIOUIsTUFERyxnQkFDSEEsTUFERztBQUFBLFVBQ0tOLFFBREwsZ0JBQ0tBLFFBREw7O0FBRVgsd0NBQ0ssS0FBS0QsS0FEVjtBQUVFQywwQkFGRjtBQUdFTSxnQkFBUUEsT0FBTytCLFdBQVA7QUFIVjtBQUtEOzs7a0NBRWE7QUFBQSxVQUNKQyxNQURJLEdBQ08sS0FBS0MsT0FEWixDQUNKRCxNQURJOztBQUVaLGFBQU9BLE9BQU9FLE9BQVAsR0FBaUI7QUFDdEJsQyxnQkFBUWdDLE9BQU9FLE9BQVAsQ0FBZWxDLE1BREQ7QUFFdEJOLGtCQUFVc0MsT0FBT0UsT0FBUCxDQUFlQyxRQUFmLENBQXdCekM7QUFGWixPQUFqQixHQUdIc0MsTUFISjtBQUlEOzs7RUFsQzhCYixnQkFBTUMsUzs7QUFBakNPLGtCLENBRUdTLFksR0FBZTtBQUNwQkosVUFBUVYsb0JBQVVDO0FBREUsQztBQUZsQkksa0IsQ0FNR0gsUyxHQUFZO0FBQ2pCSyxZQUFVUCxvQkFBVWUsR0FESDtBQUVqQjNCLFVBQVFZLG9CQUFVQztBQUZELEM7a0JBZ0NOSSxrQiIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1hdGNoUGF0aCBmcm9tICdyZWFjdC1yb3V0ZXItZG9tL21hdGNoUGF0aCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTdGFjayBmcm9tICcuL3N0YWNrJ1xuXG5jbGFzcyBSb3V0ZXJTdGFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIHN0YWNrOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwYXRobmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb290UGF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByb3V0ZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgcm9vdFBhdGg6ICcvJ1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgY2FyZHM6IFtdXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjYXJkcyB9ID0gdGhpcy5zdGF0ZVxuICAgIHJldHVybiA8U3RhY2sgY2FyZHM9eyBjYXJkcyB9IC8+XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lLCByb290UGF0aCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKHBhdGhuYW1lID09PSByb290UGF0aCkgcmV0dXJuXG4gICAgY29uc3QgY2FyZCA9IHRoaXMuX21hdGNoUm91dGUocGF0aG5hbWUpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjYXJkczogWyBjYXJkIF1cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgYWN0aW9uLCBwYXRobmFtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgbW91bnRlZCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmKHByZXZQcm9wcy5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIGlmKGFjdGlvbiA9PT0gJ3B1c2gnKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLl9tYXRjaFJvdXRlKHBhdGhuYW1lKVxuICAgICAgICB0aGlzLl9oYW5kbGVQdXNoKGNhcmQpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vdW50ZWQ6IG1vdW50ZWQgKyAxIH0pLCA1MClcbiAgICAgIH0gZWxzZSBpZihhY3Rpb24gPT09ICdwb3AnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VudGVkOiBtb3VudGVkIC0gMSB9KVxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuX2hhbmRsZVBvcC5iaW5kKHRoaXMpLCA1MDApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIGNvbnN0IHsgY2FyZHMgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4ge1xuICAgICAgc3RhY2s6IHtcbiAgICAgICAgcHVzaDogdGhpcy5faGFuZGxlUHVzaC5iaW5kKHRoaXMpLFxuICAgICAgICBwb3A6IHRoaXMuX2hhbmRsZVBvcC5iaW5kKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVB1c2goY2FyZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2FyZHM6IFtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5jYXJkcyxcbiAgICAgICAgY2FyZFxuICAgICAgXVxuICAgIH0pXG4gIH1cblxuICBfaGFuZGxlUG9wKCkge1xuICAgIGNvbnN0IGNhcmRzID0gdGhpcy5zdGF0ZS5jYXJkcy5zbGljZSgwLCAtMSlcbiAgICB0aGlzLnNldFN0YXRlKHsgY2FyZHMgfSlcbiAgfVxuXG4gIF9tYXRjaFJvdXRlKHBhdGhuYW1lKSB7XG4gICAgY29uc3QgeyByb3V0ZXMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocm91dGVzKS5yZWR1Y2UoKGNvbXBvbmVudCwgcGF0aCkgPT4ge1xuICAgICAgaWYoY29tcG9uZW50KSByZXR1cm4gY29tcG9uZW50XG4gICAgICBjb25zdCBtYXRjaGVkID0gbWF0Y2hQYXRoKHBhdGhuYW1lLCB7IHBhdGgsIGV4YWN0OiB0cnVlIH0pXG4gICAgICBpZighbWF0Y2hlZCkgcmV0dXJuIG51bGxcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBjb21wb25lbnQ6IHJvdXRlc1twYXRoXSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBwYXJhbXM6IG1hdGNoZWQucGFyYW1zXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBudWxsKVxuICB9XG5cbn1cblxuY2xhc3MgUm91dGVyU3RhY2tXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHJvdXRlcjogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgICByb3V0ZXM6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFJvdXRlclN0YWNrIHsgLi4udGhpcy5fZ2V0Um91dGVyKCkgfT5cbiAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgIDwvUm91dGVyU3RhY2s+XG4gICAgKVxuICB9XG5cbiAgX2dldFJvdXRlcigpIHtcbiAgICBjb25zdCB7IGFjdGlvbiwgcGF0aG5hbWUgfSA9IHRoaXMuX2dldEhpc3RvcnkoKVxuICAgIHJldHVybiB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgcGF0aG5hbWUsXG4gICAgICBhY3Rpb246IGFjdGlvbi50b0xvd2VyQ2FzZSgpXG4gICAgfVxuICB9XG5cbiAgX2dldEhpc3RvcnkoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIgfSA9IHRoaXMuY29udGV4dFxuICAgIHJldHVybiByb3V0ZXIuaGlzdG9yeSA/IHtcbiAgICAgIGFjdGlvbjogcm91dGVyLmhpc3RvcnkuYWN0aW9uLFxuICAgICAgcGF0aG5hbWU6IHJvdXRlci5oaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lXG4gICAgfSA6IHJvdXRlclxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUm91dGVyU3RhY2tXcmFwcGVyXG4iXX0=