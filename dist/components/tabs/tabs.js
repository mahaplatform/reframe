'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this._swipe = {}, _this.state = {
      visited: [],
      transitioning: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          header = _props.header,
          items = _props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-tabs' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-tabs-header' },
          header && _react2.default.createElement(
            'div',
            { className: 'reframe-tabs-header-content' },
            _lodash2.default.isFunction() ? _react2.default.createElement(header) : header
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-tabs-items' },
            items.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'tab_' + index, className: _this2._getItemClass(index), onClick: _this2._handleChoose.bind(_this2, index) },
                item.label
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: 'reframe-tabs-body' }, this._getTabsBody()),
          items.map(function (item, index) {
            return _react2.default.createElement(
              'div',
              { key: 'tab_body_' + index, className: _this2._getTabClass(index) },
              _react2.default.createElement(
                'div',
                { className: 'reframe-tab-content' },
                _lodash2.default.isFunction() ? _react2.default.createElement(item.component) : item.component
              )
            );
          })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onChoose(0);
    }
  }, {
    key: '_getItemClass',
    value: function _getItemClass(index) {
      var chosen = this.props.chosen;

      var classes = ['reframe-tabs-item'];
      if (index === chosen) classes.push('active');
      return classes.join(' ');
    }
  }, {
    key: '_getTabClass',
    value: function _getTabClass(index) {
      var transitioning = this.state.transitioning;
      var chosen = this.props.chosen;

      var classes = ['reframe-tab'];
      if (transitioning) classes.push('transitioning');
      if (index > chosen) classes.push('right');
      if (index < chosen) classes.push('left');
      if (index === chosen) classes.push('active');
      return classes.join(' ');
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(index) {
      var _this3 = this;

      var onChoose = this.props.onChoose;

      var visited = _lodash2.default.uniq([].concat((0, _toConsumableArray3.default)(this.state.visited), [index]));
      this.setState({ visited: visited, transitioning: true });
      setTimeout(function () {
        return onChoose(index);
      }, 20);
      setTimeout(function () {
        return _this3.setState({ transitioning: false });
      }, 520);
    }
  }, {
    key: '_getTabsBody',
    value: function _getTabsBody() {
      return {
        className: 'reframe-tabs-body',
        onTouchStart: this._handleTouchStart.bind(this),
        onTouchMove: this._handleTouchMove.bind(this),
        onTouchEnd: this._handleTouchEnd.bind(this)
      };
    }
  }, {
    key: '_handleTouchStart',
    value: function _handleTouchStart(e) {
      this._swipe = { x: e.touches[0].clientX };
    }
  }, {
    key: '_handleTouchMove',
    value: function _handleTouchMove(e) {
      if (e.changedTouches && e.changedTouches.length) {
        this._swipe.swiping = true;
      }
    }
  }, {
    key: '_handleTouchEnd',
    value: function _handleTouchEnd(e) {
      var _props2 = this.props,
          chosen = _props2.chosen,
          items = _props2.items;

      var touch = e.changedTouches[0];
      var dist = touch.clientX - this._swipe.x;
      if (this._swipe.swiping && Math.abs(dist) > 30) {
        if (dist < 0 && chosen < items.length - 1) this._handleChoose(chosen + 1);
        if (dist > 0 && chosen > 0) this._handleChoose(chosen - 1);
      }
      this._swipe = {};
    }
  }]);
  return Tabs;
}(_react2.default.Component);

Tabs.contextTypes = {
  stack: _propTypes2.default.object
};
Tabs.propTypes = {
  chosen: _propTypes2.default.number,
  header: _propTypes2.default.any,
  items: _propTypes2.default.array,
  onChoose: _propTypes2.default.func
};
Tabs.defaultProps = {
  chosen: null,
  header: null,
  items: [],
  onChoose: function onChoose(index) {}
};
exports.default = Tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVGFicyIsIl9zd2lwZSIsInN0YXRlIiwidmlzaXRlZCIsInRyYW5zaXRpb25pbmciLCJwcm9wcyIsImhlYWRlciIsIml0ZW1zIiwiXyIsImlzRnVuY3Rpb24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJfZ2V0SXRlbUNsYXNzIiwiX2hhbmRsZUNob29zZSIsImJpbmQiLCJsYWJlbCIsIl9nZXRUYWJzQm9keSIsIl9nZXRUYWJDbGFzcyIsImNvbXBvbmVudCIsIm9uQ2hvb3NlIiwiY2hvc2VuIiwiY2xhc3NlcyIsInB1c2giLCJqb2luIiwidW5pcSIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImNsYXNzTmFtZSIsIm9uVG91Y2hTdGFydCIsIl9oYW5kbGVUb3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJfaGFuZGxlVG91Y2hNb3ZlIiwib25Ub3VjaEVuZCIsIl9oYW5kbGVUb3VjaEVuZCIsImUiLCJ4IiwidG91Y2hlcyIsImNsaWVudFgiLCJjaGFuZ2VkVG91Y2hlcyIsImxlbmd0aCIsInN3aXBpbmciLCJ0b3VjaCIsImRpc3QiLCJNYXRoIiwiYWJzIiwiQ29tcG9uZW50IiwiY29udGV4dFR5cGVzIiwic3RhY2siLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJwcm9wVHlwZXMiLCJudW1iZXIiLCJhbnkiLCJhcnJheSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLEk7Ozs7Ozs7Ozs7Ozs7O2dNQW9CSkMsTSxHQUFpQixFLFFBRWpCQyxLLEdBQVE7QUFDTkMsZUFBUyxFQURIO0FBRU5DLHFCQUFlO0FBRlQsSzs7Ozs7NkJBS0M7QUFBQTs7QUFBQSxtQkFDbUIsS0FBS0MsS0FEeEI7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxLQURU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QUwsR0FBYyxFQUFkO0FBQ0Q7OztFQXBIZ0JTLGdCQUFNc0MsUzs7QUFBbkJoRCxJLENBRUdpRCxZLEdBQWU7QUFDcEJDLFNBQU9DLG9CQUFVQztBQURHLEM7QUFGbEJwRCxJLENBTUdxRCxTLEdBQVk7QUFDakI5QixVQUFRNEIsb0JBQVVHLE1BREQ7QUFFakJoRCxVQUFRNkMsb0JBQVVJLEdBRkQ7QUFHakJoRCxTQUFPNEMsb0JBQVVLLEtBSEE7QUFJakJsQyxZQUFVNkIsb0JBQVVNO0FBSkgsQztBQU5mekQsSSxDQWFHMEQsWSxHQUFlO0FBQ3BCbkMsVUFBUSxJQURZO0FBRXBCakIsVUFBUSxJQUZZO0FBR3BCQyxTQUFPLEVBSGE7QUFJcEJlLFlBQVUsa0JBQUNSLEtBQUQsRUFBVyxDQUFFO0FBSkgsQztrQkEyR1RkLEkiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBzdGFjazogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjaG9zZW46IFByb3BUeXBlcy5udW1iZXIsXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuYW55LFxuICAgIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb25DaG9vc2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNob3NlbjogbnVsbCxcbiAgICBoZWFkZXI6IG51bGwsXG4gICAgaXRlbXM6IFtdLFxuICAgIG9uQ2hvb3NlOiAoaW5kZXgpID0+IHt9XG4gIH1cblxuICBfc3dpcGU6IE9iamVjdCA9IHt9XG5cbiAgc3RhdGUgPSB7XG4gICAgdmlzaXRlZDogW10sXG4gICAgdHJhbnNpdGlvbmluZzogZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGhlYWRlciwgaXRlbXMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXRhYnNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXRhYnMtaGVhZGVyXCI+XG4gICAgICAgICAgeyBoZWFkZXIgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS10YWJzLWhlYWRlci1jb250ZW50XCI+XG4gICAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGhlYWRlcikgOiBoZWFkZXIgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS10YWJzLWl0ZW1zXCI+XG4gICAgICAgICAgICB7IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2B0YWJfJHtpbmRleH1gfSBjbGFzc05hbWU9eyB0aGlzLl9nZXRJdGVtQ2xhc3MoaW5kZXgpIH0gb25DbGljaz17IHRoaXMuX2hhbmRsZUNob29zZS5iaW5kKHRoaXMsIGluZGV4KSB9PlxuICAgICAgICAgICAgICAgIHsgaXRlbS5sYWJlbCB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSkgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXRhYnMtYm9keVwiIHsgLi4udGhpcy5fZ2V0VGFic0JvZHkoKSB9PlxuICAgICAgICAgIHsgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2B0YWJfYm9keV8ke2luZGV4fWB9IGNsYXNzTmFtZT17IHRoaXMuX2dldFRhYkNsYXNzKGluZGV4KSB9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtdGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7IF8uaXNGdW5jdGlvbigpID8gUmVhY3QuY3JlYXRlRWxlbWVudChpdGVtLmNvbXBvbmVudCkgOiBpdGVtLmNvbXBvbmVudCB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSkgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25DaG9vc2UoMClcbiAgfVxuXG4gIF9nZXRJdGVtQ2xhc3MoaW5kZXgpIHtcbiAgICBjb25zdCB7IGNob3NlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ3JlZnJhbWUtdGFicy1pdGVtJ11cbiAgICBpZihpbmRleCA9PT0gY2hvc2VuKSBjbGFzc2VzLnB1c2goJ2FjdGl2ZScpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0VGFiQ2xhc3MoaW5kZXgpIHtcbiAgICBjb25zdCB7IHRyYW5zaXRpb25pbmcgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCB7IGNob3NlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ3JlZnJhbWUtdGFiJ11cbiAgICBpZih0cmFuc2l0aW9uaW5nKSBjbGFzc2VzLnB1c2goJ3RyYW5zaXRpb25pbmcnKVxuICAgIGlmKGluZGV4ID4gY2hvc2VuKSBjbGFzc2VzLnB1c2goJ3JpZ2h0JylcbiAgICBpZihpbmRleCA8IGNob3NlbikgY2xhc3Nlcy5wdXNoKCdsZWZ0JylcbiAgICBpZihpbmRleCA9PT0gY2hvc2VuKSBjbGFzc2VzLnB1c2goJ2FjdGl2ZScpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfaGFuZGxlQ2hvb3NlKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9uQ2hvb3NlIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmlzaXRlZCA9IF8udW5pcShbIC4uLnRoaXMuc3RhdGUudmlzaXRlZCwgaW5kZXggXSlcbiAgICB0aGlzLnNldFN0YXRlKHsgdmlzaXRlZCwgdHJhbnNpdGlvbmluZzogdHJ1ZSB9KVxuICAgIHNldFRpbWVvdXQoKCkgPT4gb25DaG9vc2UoaW5kZXgpLCAyMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U3RhdGUoeyB0cmFuc2l0aW9uaW5nOiBmYWxzZSB9KSwgNTIwKVxuICB9XG5cbiAgX2dldFRhYnNCb2R5KCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGFzc05hbWU6ICdyZWZyYW1lLXRhYnMtYm9keScsXG4gICAgICBvblRvdWNoU3RhcnQ6IHRoaXMuX2hhbmRsZVRvdWNoU3RhcnQuYmluZCh0aGlzKSxcbiAgICAgIG9uVG91Y2hNb3ZlOiB0aGlzLl9oYW5kbGVUb3VjaE1vdmUuYmluZCh0aGlzKSxcbiAgICAgIG9uVG91Y2hFbmQ6IHRoaXMuX2hhbmRsZVRvdWNoRW5kLmJpbmQodGhpcylcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlVG91Y2hTdGFydChlKSB7XG4gICAgdGhpcy5fc3dpcGUgPSB7IHg6IGUudG91Y2hlc1swXS5jbGllbnRYIH1cbiAgfVxuXG4gIF9oYW5kbGVUb3VjaE1vdmUoZSkge1xuICAgIGlmIChlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9zd2lwZS5zd2lwaW5nID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVUb3VjaEVuZChlKSB7XG4gICAgY29uc3QgeyBjaG9zZW4sIGl0ZW1zIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdXG4gICAgY29uc3QgZGlzdCA9IHRvdWNoLmNsaWVudFggLSB0aGlzLl9zd2lwZS54XG4gICAgaWYgKHRoaXMuX3N3aXBlLnN3aXBpbmcgJiYgTWF0aC5hYnMoZGlzdCkgPiAzMCApIHtcbiAgICAgIGlmKGRpc3QgPCAwICYmIGNob3NlbiA8IGl0ZW1zLmxlbmd0aCAtIDEpIHRoaXMuX2hhbmRsZUNob29zZShjaG9zZW4gKyAxKVxuICAgICAgaWYoZGlzdCA+IDAgJiYgY2hvc2VuID4gMCkgdGhpcy5faGFuZGxlQ2hvb3NlKGNob3NlbiAtIDEpXG4gICAgfVxuICAgIHRoaXMuX3N3aXBlID0ge31cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYnNcbiJdfQ==