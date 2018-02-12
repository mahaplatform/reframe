'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stack = require('./stack');

var _stack2 = _interopRequireDefault(_stack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArrayStack = function (_React$Component) {
  _inherits(ArrayStack, _React$Component);

  function ArrayStack() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ArrayStack);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ArrayStack.__proto__ || Object.getPrototypeOf(ArrayStack)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      cards: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ArrayStack, [{
    key: 'render',
    value: function render() {
      var cards = this.state.cards;

      return _react2.default.createElement(_stack2.default, { cards: cards });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.cards) return;
      this.setState({
        cards: this.props.cards
      });
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
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
        cards: [].concat(_toConsumableArray(this.state.cards), [card])
      });
    }
  }, {
    key: '_handlePop',
    value: function _handlePop() {
      var cards = this.state.cards.slice(0, -1);
      this.setState({ cards: cards });
    }
  }]);

  return ArrayStack;
}(_react2.default.Component);

ArrayStack.childContextTypes = {
  stack: _propTypes2.default.object
};
ArrayStack.propTypes = {
  cards: _propTypes2.default.array()
};
exports.default = ArrayStack;