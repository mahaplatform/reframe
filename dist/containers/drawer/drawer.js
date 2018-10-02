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

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawer = function (_React$Component) {
  (0, _inherits3.default)(Drawer, _React$Component);

  function Drawer() {
    (0, _classCallCheck3.default)(this, Drawer);
    return (0, _possibleConstructorReturn3.default)(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Drawer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          location = _props.location,
          open = _props.open;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-drawer-overlay', 'in': open, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement('div', { className: 'reframe-drawer-overlay', onClick: this._handleClose.bind(this) })
      ), _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-drawer-panel', 'in': open, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-drawer-panel reframe-drawer-panel-' + location },
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
        drawer: {
          open: this._handleOpen.bind(this),
          close: this._handleClose.bind(this)
        }
      };
    }
  }, {
    key: '_handleOpen',
    value: function _handleOpen(component, location) {
      this.props.onOpen(component, location);
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      this.props.onClose();
    }
  }]);
  return Drawer;
}(_react2.default.Component);

Drawer.childContextTypes = {
  drawer: _propTypes2.default.object
};
exports.default = Drawer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRHJhd2VyIiwicHJvcHMiLCJjaGlsZHJlbiIsImNvbXBvbmVudCIsImxvY2F0aW9uIiwib3BlbiIsIl9oYW5kbGVDbG9zZSIsImJpbmQiLCJfIiwiaXNGdW5jdGlvbiIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInByZXZQcm9wcyIsIm9uQ2xlYXIiLCJzZXRUaW1lb3V0IiwiZHJhd2VyIiwiX2hhbmRsZU9wZW4iLCJjbG9zZSIsIm9uT3BlbiIsIm9uQ2xvc2UiLCJDb21wb25lbnQiLCJjaGlsZENvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLE07Ozs7Ozs7Ozs7NkJBTUs7QUFBQSxtQkFDeUMsS0FBS0MsS0FEOUM7QUFBQSxVQUNDQyxRQURELFVBQ0NBLFFBREQ7QUFBQSxVQUNXQyxTQURYLFVBQ1dBLFNBRFg7QUFBQSxVQUNzQkMsUUFEdEIsVUFDc0JBLFFBRHRCO0FBQUEsVUFDZ0NDLElBRGhDLFVBQ2dDQSxJQURoQzs7QUFFUCxhQUFRLENBQ05ILFFBRE0sRUFFTjtBQUFDLDJDQUFEO0FBQUEsVUFBZSxLQUFJLHdCQUFuQixFQUE0QyxNQUFLRyxJQUFqRCxFQUF3RCxZQUFXLFVBQW5FLEVBQThFLFNBQVUsR0FBeEYsRUFBOEYsY0FBZSxJQUE3RyxFQUFvSCxlQUFnQixJQUFwSTtBQUNFLCtDQUFLLFdBQVUsd0JBQWYsRUFBd0MsU0FBUyxLQUFLQyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFqRDtBQURGLE9BRk0sRUFLTjtBQUFDLDJDQUFEO0FBQUEsVUFBZSxLQUFJLHNCQUFuQixFQUEwQyxNQUFLRixJQUEvQyxFQUFzRCxZQUFXLFVBQWpFLEVBQTRFLFNBQVUsR0FBdEYsRUFBNEYsY0FBZSxJQUEzRyxFQUFrSCxlQUFnQixJQUFsSTtBQUNFO0FBQUE7QUFBQSxZQUFLLDBEQUF3REQsUUFBN0Q7QUFDSUksMkJBQUVDLFVBQUYsQ0FBYU4sU0FBYixJQUEwQk8sZ0JBQU1DLGFBQU4sQ0FBb0JSLFNBQXBCLENBQTFCLEdBQTJEQTtBQUQvRDtBQURGLE9BTE0sQ0FBUjtBQVdEOzs7dUNBRWtCUyxTLEVBQVc7QUFBQSxvQkFDRixLQUFLWCxLQURIO0FBQUEsVUFDcEJJLElBRG9CLFdBQ3BCQSxJQURvQjtBQUFBLFVBQ2RRLE9BRGMsV0FDZEEsT0FEYzs7QUFFNUIsVUFBR1IsU0FBU08sVUFBVVAsSUFBbkIsSUFBMkIsQ0FBQ0EsSUFBL0IsRUFBcUM7QUFDbkNTLG1CQUFXRCxPQUFYLEVBQW9CLEdBQXBCO0FBQ0Q7QUFDRjs7O3NDQUVpQjtBQUNoQixhQUFPO0FBQ0xFLGdCQUFRO0FBQ05WLGdCQUFNLEtBQUtXLFdBQUwsQ0FBaUJULElBQWpCLENBQXNCLElBQXRCLENBREE7QUFFTlUsaUJBQU8sS0FBS1gsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7QUFGRDtBQURILE9BQVA7QUFNRDs7O2dDQUVXSixTLEVBQVdDLFEsRUFBVTtBQUMvQixXQUFLSCxLQUFMLENBQVdpQixNQUFYLENBQWtCZixTQUFsQixFQUE2QkMsUUFBN0I7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS0gsS0FBTCxDQUFXa0IsT0FBWDtBQUNEOzs7RUEzQ2tCVCxnQkFBTVUsUzs7QUFBckJwQixNLENBRUdxQixpQixHQUFvQjtBQUN6Qk4sVUFBUU8sb0JBQVVDO0FBRE8sQztrQkE2Q2R2QixNIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDU1NUcmFuc2l0aW9uIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgRHJhd2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgZHJhd2VyOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgY29tcG9uZW50LCBsb2NhdGlvbiwgb3BlbiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoW1xuICAgICAgY2hpbGRyZW4sXG4gICAgICA8Q1NTVHJhbnNpdGlvbiBrZXk9XCJyZWZyYW1lLWRyYXdlci1vdmVybGF5XCIgaW49eyBvcGVuIH0gY2xhc3NOYW1lcz1cImV4cGFuZGVkXCIgdGltZW91dD17IDUwMCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZHJhd2VyLW92ZXJsYXlcIiBvbkNsaWNrPXt0aGlzLl9oYW5kbGVDbG9zZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPixcbiAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT1cInJlZnJhbWUtZHJhd2VyLXBhbmVsXCIgaW49eyBvcGVuIH0gY2xhc3NOYW1lcz1cImV4cGFuZGVkXCIgdGltZW91dD17IDUwMCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHJlZnJhbWUtZHJhd2VyLXBhbmVsIHJlZnJhbWUtZHJhd2VyLXBhbmVsLSR7bG9jYXRpb259YH0+XG4gICAgICAgICAgeyBfLmlzRnVuY3Rpb24oY29tcG9uZW50KSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50KSA6IGNvbXBvbmVudCB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgIF0pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBvcGVuLCBvbkNsZWFyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYob3BlbiAhPT0gcHJldlByb3BzLm9wZW4gJiYgIW9wZW4pIHtcbiAgICAgIHNldFRpbWVvdXQob25DbGVhciwgNTAwKVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHJhd2VyOiB7XG4gICAgICAgIG9wZW46IHRoaXMuX2hhbmRsZU9wZW4uYmluZCh0aGlzKSxcbiAgICAgICAgY2xvc2U6IHRoaXMuX2hhbmRsZUNsb3NlLmJpbmQodGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGFuZGxlT3Blbihjb21wb25lbnQsIGxvY2F0aW9uKSB7XG4gICAgdGhpcy5wcm9wcy5vbk9wZW4oY29tcG9uZW50LCBsb2NhdGlvbilcbiAgfVxuXG4gIF9oYW5kbGVDbG9zZSgpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyXG4iXX0=