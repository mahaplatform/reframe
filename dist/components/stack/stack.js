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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stack = function (_React$Component) {
  _inherits(Stack, _React$Component);

  function Stack(props) {
    _classCallCheck(this, Stack);

    var _this = _possibleConstructorReturn(this, (Stack.__proto__ || Object.getPrototypeOf(Stack)).call(this, props));

    _this.state = {
      cards: props.cards,
      mounted: props.cards.length
    };
    return _this;
  }

  _createClass(Stack, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var cards = this.state.cards;

      if (cards.length === 0) return null;
      return _react2.default.createElement(
        'div',
        { className: 'reframe-stack' },
        cards.map(function (card, index) {
          return _react2.default.createElement(
            'div',
            { key: 'card_' + index, className: _this2._getClass(index) },
            _react2.default.createElement(card.component, _extends({}, card.props, { active: index === cards.length - 1 }))
          );
        })
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var cards = this.props.cards;

      if (prevProps.cards.length < cards.length) this._handlePush();
      if (prevProps.cards.length > cards.length) this._handlePop();
    }
  }, {
    key: '_getClass',
    value: function _getClass(index) {
      var classes = ['reframe-stack-card'];
      classes.push(this._getStatus(index));
      return classes.join(' ');
    }
  }, {
    key: '_getStatus',
    value: function _getStatus(index) {
      var slideFirst = this.props.slideFirst;

      var mountedIndexes = this.state.mounted - 1;
      var cardIndexes = this.state.cards.length - 1;
      if (!slideFirst && mountedIndexes === -1) return 'active';
      if (index > mountedIndexes && index === cardIndexes) return 'mounting';
      if (index === mountedIndexes && index === cardIndexes) return 'active';
      if (index === mountedIndexes && index < cardIndexes) return 'covering';
      if (index < cardIndexes) return 'covered';
    }
  }, {
    key: '_handlePush',
    value: function _handlePush() {
      var _this3 = this;

      var cards = this.props.cards;

      this.setState({ cards: cards });
      setTimeout(function () {
        return _this3.setState({ mounted: _this3.state.mounted + 1 });
      }, 100);
    }
  }, {
    key: '_handlePop',
    value: function _handlePop() {
      var _this4 = this;

      var cards = this.props.cards;

      this.setState({ mounted: this.state.mounted - 1 });
      setTimeout(function () {
        return _this4.setState({ cards: cards });
      }, 500);
    }
  }]);

  return Stack;
}(_react2.default.Component);

Stack.propTypes = {
  cards: _propTypes2.default.array,
  slideFirst: _propTypes2.default.bool
};
Stack.defaultProps = {
  slideFirst: true,
  cards: []
};
exports.default = Stack;