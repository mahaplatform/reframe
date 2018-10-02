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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU3RhY2siLCJwcm9wcyIsInN0YXRlIiwiY2FyZHMiLCJtb3VudGVkIiwibGVuZ3RoIiwibWFwIiwiY2FyZCIsImluZGV4IiwiX2dldENsYXNzIiwicHJldlByb3BzIiwiX2hhbmRsZVB1c2giLCJfaGFuZGxlUG9wIiwiY2xhc3NlcyIsInB1c2giLCJfZ2V0U3RhdHVzIiwiam9pbiIsInNsaWRlRmlyc3QiLCJtb3VudGVkSW5kZXhlcyIsImNhcmRJbmRleGVzIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImJvb2wiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRU1BLEs7OztBQVlKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPRixNQUFNRSxLQURGO0FBRVhDLGVBQVNILE1BQU1FLEtBQU4sQ0FBWUU7QUFGVixLQUFiO0FBRmlCO0FBTWxCOzs7OzZCQUVRO0FBQUE7O0FBQUEsVUFDQ0YsS0FERCxHQUNXLEtBQUtELEtBRGhCLENBQ0NDLEtBREQ7O0FBRVAsVUFBR0EsTUFBTUUsTUFBTixLQUFpQixDQUFwQixFQUF1QixPQUFPLElBQVA7QUFDdkIsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDSUYsY0FBTUcsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGlCQUNWO0FBQUE7QUFBQSxjQUFLLGVBQWNBLEtBQW5CLEVBQTZCLFdBQVksT0FBS0MsU0FBTCxDQUFlRCxLQUFmLENBQXpDO0FBQ0UsMENBQUMsSUFBRCxDQUFNLFNBQU4sNkJBQXFCRCxLQUFLTixLQUExQixJQUFrQyxRQUFTTyxVQUFVTCxNQUFNRSxNQUFOLEdBQWUsQ0FBcEU7QUFERixXQURVO0FBQUEsU0FBVjtBQURKLE9BREY7QUFTRDs7O3VDQUVrQkssUyxFQUFXO0FBQUEsVUFDcEJQLEtBRG9CLEdBQ1YsS0FBS0YsS0FESyxDQUNwQkUsS0FEb0I7O0FBRTVCLFVBQUdPLFVBQVVQLEtBQVYsQ0FBZ0JFLE1BQWhCLEdBQXlCRixNQUFNRSxNQUFsQyxFQUEwQyxLQUFLTSxXQUFMO0FBQzFDLFVBQUdELFVBQVVQLEtBQVYsQ0FBZ0JFLE1BQWhCLEdBQXlCRixNQUFNRSxNQUFsQyxFQUEwQyxLQUFLTyxVQUFMO0FBQzNDOzs7OEJBRVNKLEssRUFBTztBQUNmLFVBQU1LLFVBQVUsQ0FBQyxvQkFBRCxDQUFoQjtBQUNBQSxjQUFRQyxJQUFSLENBQWEsS0FBS0MsVUFBTCxDQUFnQlAsS0FBaEIsQ0FBYjtBQUNBLGFBQU9LLFFBQVFHLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRDs7OytCQUVVUixLLEVBQU87QUFBQSxVQUNSUyxVQURRLEdBQ08sS0FBS2hCLEtBRFosQ0FDUmdCLFVBRFE7O0FBRWhCLFVBQU1DLGlCQUFpQixLQUFLaEIsS0FBTCxDQUFXRSxPQUFYLEdBQXFCLENBQTVDO0FBQ0EsVUFBTWUsY0FBYyxLQUFLakIsS0FBTCxDQUFXQyxLQUFYLENBQWlCRSxNQUFqQixHQUEwQixDQUE5QztBQUNBLFVBQUcsQ0FBQ1ksVUFBRCxJQUFlQyxtQkFBbUIsQ0FBQyxDQUF0QyxFQUF5QyxPQUFPLFFBQVA7QUFDekMsVUFBR1YsUUFBUVUsY0FBUixJQUEwQlYsVUFBVVcsV0FBdkMsRUFBb0QsT0FBTyxVQUFQO0FBQ3BELFVBQUdYLFVBQVVVLGNBQVYsSUFBNEJWLFVBQVVXLFdBQXpDLEVBQXVELE9BQU8sUUFBUDtBQUN2RCxVQUFHWCxVQUFVVSxjQUFWLElBQTRCVixRQUFRVyxXQUF2QyxFQUFvRCxPQUFPLFVBQVA7QUFDcEQsVUFBR1gsUUFBUVcsV0FBWCxFQUF5QixPQUFPLFNBQVA7QUFDMUI7OztrQ0FFYTtBQUFBOztBQUFBLFVBQ0poQixLQURJLEdBQ00sS0FBS0YsS0FEWCxDQUNKRSxLQURJOztBQUVaLFdBQUtpQixRQUFMLENBQWMsRUFBRWpCLFlBQUYsRUFBZDtBQUNBa0IsaUJBQVc7QUFBQSxlQUFNLE9BQUtELFFBQUwsQ0FBYyxFQUFFaEIsU0FBUyxPQUFLRixLQUFMLENBQVdFLE9BQVgsR0FBcUIsQ0FBaEMsRUFBZCxDQUFOO0FBQUEsT0FBWCxFQUFxRSxHQUFyRTtBQUNEOzs7aUNBRVk7QUFBQTs7QUFBQSxVQUNIRCxLQURHLEdBQ08sS0FBS0YsS0FEWixDQUNIRSxLQURHOztBQUVYLFdBQUtpQixRQUFMLENBQWMsRUFBRWhCLFNBQVMsS0FBS0YsS0FBTCxDQUFXRSxPQUFYLEdBQXFCLENBQWhDLEVBQWQ7QUFDQWlCLGlCQUFXO0FBQUEsZUFBTSxPQUFLRCxRQUFMLENBQWMsRUFBRWpCLFlBQUYsRUFBZCxDQUFOO0FBQUEsT0FBWCxFQUEyQyxHQUEzQztBQUNEOzs7RUFuRWlCbUIsZ0JBQU1DLFM7O0FBQXBCdkIsSyxDQUVHd0IsUyxHQUFZO0FBQ2pCckIsU0FBT3NCLG9CQUFVQyxLQURBO0FBRWpCVCxjQUFZUSxvQkFBVUU7QUFGTCxDO0FBRmYzQixLLENBT0c0QixZLEdBQWU7QUFDcEJYLGNBQVksSUFEUTtBQUVwQmQsU0FBTztBQUZhLEM7a0JBZ0VUSCxLIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIFN0YWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNhcmRzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2xpZGVGaXJzdDogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2xpZGVGaXJzdDogdHJ1ZSxcbiAgICBjYXJkczogW11cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhcmRzOiBwcm9wcy5jYXJkcyxcbiAgICAgIG1vdW50ZWQ6IHByb3BzLmNhcmRzLmxlbmd0aFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNhcmRzIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYoY2FyZHMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtc3RhY2tcIj5cbiAgICAgICAgeyBjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9eyBgY2FyZF8ke2luZGV4fWAgfSBjbGFzc05hbWU9eyB0aGlzLl9nZXRDbGFzcyhpbmRleCkgfT5cbiAgICAgICAgICAgIDxjYXJkLmNvbXBvbmVudCB7IC4uLmNhcmQucHJvcHMgfSBhY3RpdmU9eyBpbmRleCA9PT0gY2FyZHMubGVuZ3RoIC0gMX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgY2FyZHMgfSA9IHRoaXMucHJvcHNcbiAgICBpZihwcmV2UHJvcHMuY2FyZHMubGVuZ3RoIDwgY2FyZHMubGVuZ3RoKSB0aGlzLl9oYW5kbGVQdXNoKClcbiAgICBpZihwcmV2UHJvcHMuY2FyZHMubGVuZ3RoID4gY2FyZHMubGVuZ3RoKSB0aGlzLl9oYW5kbGVQb3AoKVxuICB9XG5cbiAgX2dldENsYXNzKGluZGV4KSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFsncmVmcmFtZS1zdGFjay1jYXJkJ11cbiAgICBjbGFzc2VzLnB1c2godGhpcy5fZ2V0U3RhdHVzKGluZGV4KSlcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJylcbiAgfVxuXG4gIF9nZXRTdGF0dXMoaW5kZXgpIHtcbiAgICBjb25zdCB7IHNsaWRlRmlyc3QgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBtb3VudGVkSW5kZXhlcyA9IHRoaXMuc3RhdGUubW91bnRlZCAtIDFcbiAgICBjb25zdCBjYXJkSW5kZXhlcyA9IHRoaXMuc3RhdGUuY2FyZHMubGVuZ3RoIC0gMVxuICAgIGlmKCFzbGlkZUZpcnN0ICYmIG1vdW50ZWRJbmRleGVzID09PSAtMSkgcmV0dXJuICdhY3RpdmUnXG4gICAgaWYoaW5kZXggPiBtb3VudGVkSW5kZXhlcyAmJiBpbmRleCA9PT0gY2FyZEluZGV4ZXMpIHJldHVybiAnbW91bnRpbmcnXG4gICAgaWYoaW5kZXggPT09IG1vdW50ZWRJbmRleGVzICYmIGluZGV4ID09PSBjYXJkSW5kZXhlcyApIHJldHVybiAnYWN0aXZlJ1xuICAgIGlmKGluZGV4ID09PSBtb3VudGVkSW5kZXhlcyAmJiBpbmRleCA8IGNhcmRJbmRleGVzKSByZXR1cm4gJ2NvdmVyaW5nJ1xuICAgIGlmKGluZGV4IDwgY2FyZEluZGV4ZXMgKSByZXR1cm4gJ2NvdmVyZWQnXG4gIH1cblxuICBfaGFuZGxlUHVzaCgpIHtcbiAgICBjb25zdCB7IGNhcmRzIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNhcmRzIH0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgbW91bnRlZDogdGhpcy5zdGF0ZS5tb3VudGVkICsgMSB9KSwgMTAwKVxuICB9XG5cbiAgX2hhbmRsZVBvcCgpIHtcbiAgICBjb25zdCB7IGNhcmRzIH0gPSB0aGlzLnByb3BzXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vdW50ZWQ6IHRoaXMuc3RhdGUubW91bnRlZCAtIDEgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyBjYXJkcyB9KSwgNTAwKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhY2tcbiJdfQ==