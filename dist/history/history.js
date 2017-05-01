'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var History = function (_React$Component) {
  _inherits(History, _React$Component);

  function History() {
    _classCallCheck(this, History);

    return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).apply(this, arguments));
  }

  _createClass(History, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var history = this.context.router.history;
      var stack = this.props.stack;

      if (stack.length === 0) {
        history.push('/');
      } else {
        var route = stack[stack.length - 1];
        var pathname = route.pathname || route;
        if (stack.length < prevProps.stack.length) {
          history.push(pathname);
        } else if (stack.length > prevProps.stack.length) {
          history.push(pathname);
        }
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        history: {
          back: this._handleBack.bind(this),
          push: this._handlePush.bind(this),
          reset: this._handleReset.bind(this)
        }
      };
    }
  }, {
    key: '_handleBack',
    value: function _handleBack() {
      this.props.onBack();
    }
  }, {
    key: '_handlePush',
    value: function _handlePush(url) {
      this.props.onPush(url);
    }
  }, {
    key: '_handleReset',
    value: function _handleReset(url) {
      this.props.onReset(url);
    }
  }]);

  return History;
}(_react2.default.Component);

History.childContextTypes = {
  history: _propTypes2.default.object
};
History.contextTypes = {
  router: _propTypes2.default.object
};
History.propTypes = {
  stack: _propTypes2.default.array,
  onBack: _propTypes2.default.func,
  onPush: _propTypes2.default.func,
  onReset: _propTypes2.default.func
};
exports.default = History;