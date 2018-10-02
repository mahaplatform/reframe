'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactTransitionGroup = require('react-transition-group');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tray = function (_React$Component) {
  (0, _inherits3.default)(Tray, _React$Component);

  function Tray() {
    (0, _classCallCheck3.default)(this, Tray);
    return (0, _possibleConstructorReturn3.default)(this, (Tray.__proto__ || Object.getPrototypeOf(Tray)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tray, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          open = _props.open;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-overlay', 'in': open, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement('div', { className: 'reframe-tray-overlay', onClick: this._handleCloseTray.bind(this) })
      ), _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-tray-panel', 'in': open, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-tray-panel' },
          _lodash2.default.isFunction(component) ? _react2.default.createElement(component) : component
        )
      )];
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          open = _props2.open,
          onClear = _props2.onClear;

      if (open !== prevProps.open && !open) {
        setTimeout(onClear, 500);
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        tray: {
          open: this._handleOpenTray.bind(this),
          close: this._handleCloseTray.bind(this)
        }
      };
    }
  }, {
    key: '_handleOpenTray',
    value: function _handleOpenTray(component) {
      this.props.onOpen(component);
    }
  }, {
    key: '_handleCloseTray',
    value: function _handleCloseTray() {
      this.props.onClose();
    }
  }]);
  return Tray;
}(_react2.default.Component);

Tray.childContextTypes = {
  tray: _propTypes2.default.object
};
exports.default = Tray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVHJheSIsInByb3BzIiwiY2hpbGRyZW4iLCJjb21wb25lbnQiLCJvcGVuIiwiX2hhbmRsZUNsb3NlVHJheSIsImJpbmQiLCJfIiwiaXNGdW5jdGlvbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInByZXZQcm9wcyIsIm9uQ2xlYXIiLCJzZXRUaW1lb3V0IiwidHJheSIsIl9oYW5kbGVPcGVuVHJheSIsImNsb3NlIiwib25PcGVuIiwib25DbG9zZSIsIkNvbXBvbmVudCIsImNoaWxkQ29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsSTs7Ozs7Ozs7Ozs2QkFNSztBQUFBLG1CQUMrQixLQUFLQyxLQURwQztBQUFBLFVBQ0NDLFFBREQsVUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFNBRFgsVUFDV0EsU0FEWDtBQUFBLFVBQ3NCQyxJQUR0QixVQUNzQkEsSUFEdEI7O0FBRVAsYUFBUSxDQUNORixRQURNLEVBRU47QUFBQywyQ0FBRDtBQUFBLFVBQWUsS0FBSSxpQkFBbkIsRUFBcUMsTUFBS0UsSUFBMUMsRUFBaUQsWUFBVyxVQUE1RCxFQUF1RSxTQUFVLEdBQWpGLEVBQXVGLGNBQWUsSUFBdEcsRUFBNkcsZUFBZ0IsSUFBN0g7QUFDRSwrQ0FBSyxXQUFVLHNCQUFmLEVBQXNDLFNBQVUsS0FBS0MsZ0JBQUwsQ0FBc0JDLElBQXRCLENBQTJCLElBQTNCLENBQWhEO0FBREYsT0FGTSxFQUtOO0FBQUMsMkNBQUQ7QUFBQSxVQUFlLEtBQUksb0JBQW5CLEVBQXdDLE1BQUtGLElBQTdDLEVBQW9ELFlBQVcsVUFBL0QsRUFBMEUsU0FBVSxHQUFwRixFQUEwRixjQUFlLElBQXpHLEVBQWdILGVBQWdCLElBQWhJO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNJRywyQkFBRUMsVUFBRixDQUFhTCxTQUFiLElBQTBCTSxnQkFBTUMsYUFBTixDQUFvQlAsU0FBcEIsQ0FBMUIsR0FBMkRBO0FBRC9EO0FBREYsT0FMTSxDQUFSO0FBV0Q7Ozt1Q0FFa0JRLFMsRUFBVztBQUFBLG9CQUNGLEtBQUtWLEtBREg7QUFBQSxVQUNwQkcsSUFEb0IsV0FDcEJBLElBRG9CO0FBQUEsVUFDZFEsT0FEYyxXQUNkQSxPQURjOztBQUU1QixVQUFHUixTQUFTTyxVQUFVUCxJQUFuQixJQUEyQixDQUFDQSxJQUEvQixFQUFxQztBQUNuQ1MsbUJBQVdELE9BQVgsRUFBb0IsR0FBcEI7QUFDRDtBQUNGOzs7c0NBRWlCO0FBQ2hCLGFBQU87QUFDTEUsY0FBTTtBQUNKVixnQkFBTSxLQUFLVyxlQUFMLENBQXFCVCxJQUFyQixDQUEwQixJQUExQixDQURGO0FBRUpVLGlCQUFPLEtBQUtYLGdCQUFMLENBQXNCQyxJQUF0QixDQUEyQixJQUEzQjtBQUZIO0FBREQsT0FBUDtBQU1EOzs7b0NBRWVILFMsRUFBVztBQUN6QixXQUFLRixLQUFMLENBQVdnQixNQUFYLENBQWtCZCxTQUFsQjtBQUNEOzs7dUNBRWtCO0FBQ2pCLFdBQUtGLEtBQUwsQ0FBV2lCLE9BQVg7QUFDRDs7O0VBM0NnQlQsZ0JBQU1VLFM7O0FBQW5CbkIsSSxDQUVHb0IsaUIsR0FBb0I7QUFDekJOLFFBQU1PLG9CQUFVQztBQURTLEM7a0JBNkNkdEIsSSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIFRyYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICB0cmF5OiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgY29tcG9uZW50LCBvcGVuIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChbXG4gICAgICBjaGlsZHJlbixcbiAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT1cInJlZnJhbWUtb3ZlcmxheVwiIGluPXsgb3BlbiB9IGNsYXNzTmFtZXM9XCJleHBhbmRlZFwiIHRpbWVvdXQ9eyA1MDAgfSBtb3VudE9uRW50ZXI9eyB0cnVlIH0gdW5tb3VudE9uRXhpdD17IHRydWUgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXRyYXktb3ZlcmxheVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVDbG9zZVRyYXkuYmluZCh0aGlzKSB9IC8+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+LFxuICAgICAgPENTU1RyYW5zaXRpb24ga2V5PVwicmVmcmFtZS10cmF5LXBhbmVsXCIgaW49eyBvcGVuIH0gY2xhc3NOYW1lcz1cImV4cGFuZGVkXCIgdGltZW91dD17IDUwMCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtdHJheS1wYW5lbFwiPlxuICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKGNvbXBvbmVudCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cbiAgICBdKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgb3Blbiwgb25DbGVhciB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKG9wZW4gIT09IHByZXZQcm9wcy5vcGVuICYmICFvcGVuKSB7XG4gICAgICBzZXRUaW1lb3V0KG9uQ2xlYXIsIDUwMClcbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYXk6IHtcbiAgICAgICAgb3BlbjogdGhpcy5faGFuZGxlT3BlblRyYXkuYmluZCh0aGlzKSxcbiAgICAgICAgY2xvc2U6IHRoaXMuX2hhbmRsZUNsb3NlVHJheS5iaW5kKHRoaXMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZU9wZW5UcmF5KGNvbXBvbmVudCkge1xuICAgIHRoaXMucHJvcHMub25PcGVuKGNvbXBvbmVudClcbiAgfVxuXG4gIF9oYW5kbGVDbG9zZVRyYXkoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXlcbiJdfQ==