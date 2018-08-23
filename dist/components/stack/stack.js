'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stack = function (_React$Component) {
  (0, _inherits3.default)(Stack, _React$Component);

  function Stack(props) {
    (0, _classCallCheck3.default)(this, Stack);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Stack.__proto__ || Object.getPrototypeOf(Stack)).call(this, props));

    _this.state = {
      cards: props.cards,
      mounted: props.cards.length
    };
    return _this;
  }

  (0, _createClass3.default)(Stack, [{
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
            _react2.default.createElement(card.component, (0, _extends3.default)({}, card.props, { active: index === cards.length - 1 }))
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