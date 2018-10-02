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

var Popup = function (_React$Component) {
  (0, _inherits3.default)(Popup, _React$Component);

  function Popup() {
    (0, _classCallCheck3.default)(this, Popup);
    return (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).apply(this, arguments));
  }

  (0, _createClass3.default)(Popup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          component = _props.component,
          open = _props.open;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-popup', 'in': open, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-popup-panel' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-popup-panel-item' },
            component && (_lodash2.default.isFunction(component) ? _react2.default.createElement(component) : component)
          )
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
      var _props3 = this.props,
          onOpen = _props3.onOpen,
          onClose = _props3.onClose;

      return {
        popup: {
          open: onOpen,
          close: onClose
        }
      };
    }
  }]);
  return Popup;
}(_react2.default.Component);

Popup.childContextTypes = {
  popup: _propTypes2.default.object
};
exports.default = Popup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiUG9wdXAiLCJwcm9wcyIsImNoaWxkcmVuIiwiY29tcG9uZW50Iiwib3BlbiIsIl8iLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwicHJldlByb3BzIiwib25DbGVhciIsInNldFRpbWVvdXQiLCJvbk9wZW4iLCJvbkNsb3NlIiwicG9wdXAiLCJjbG9zZSIsIkNvbXBvbmVudCIsImNoaWxkQ29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsSzs7Ozs7Ozs7Ozs2QkFNSztBQUFBLG1CQUMrQixLQUFLQyxLQURwQztBQUFBLFVBQ0NDLFFBREQsVUFDQ0EsUUFERDtBQUFBLFVBQ1dDLFNBRFgsVUFDV0EsU0FEWDtBQUFBLFVBQ3NCQyxJQUR0QixVQUNzQkEsSUFEdEI7O0FBRVAsYUFBUSxDQUNORixRQURNLEVBRU47QUFBQywyQ0FBRDtBQUFBLFVBQWUsS0FBSSxlQUFuQixFQUFtQyxNQUFLRSxJQUF4QyxFQUErQyxZQUFXLFVBQTFELEVBQXFFLFNBQVUsR0FBL0UsRUFBcUYsY0FBZSxJQUFwRyxFQUEyRyxlQUFnQixJQUEzSDtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLDBCQUFmO0FBQ0lELDBCQUFlRSxpQkFBRUMsVUFBRixDQUFhSCxTQUFiLElBQTBCSSxnQkFBTUMsYUFBTixDQUFvQkwsU0FBcEIsQ0FBMUIsR0FBMkRBLFNBQTFFO0FBREo7QUFERjtBQURGLE9BRk0sQ0FBUjtBQVVEOzs7dUNBRWtCTSxTLEVBQVc7QUFBQSxvQkFDRixLQUFLUixLQURIO0FBQUEsVUFDcEJHLElBRG9CLFdBQ3BCQSxJQURvQjtBQUFBLFVBQ2RNLE9BRGMsV0FDZEEsT0FEYzs7QUFFNUIsVUFBR04sU0FBU0ssVUFBVUwsSUFBbkIsSUFBMkIsQ0FBQ0EsSUFBL0IsRUFBcUM7QUFDbkNPLG1CQUFXRCxPQUFYLEVBQW9CLEdBQXBCO0FBQ0Q7QUFDRjs7O3NDQUVpQjtBQUFBLG9CQUNZLEtBQUtULEtBRGpCO0FBQUEsVUFDUlcsTUFEUSxXQUNSQSxNQURRO0FBQUEsVUFDQUMsT0FEQSxXQUNBQSxPQURBOztBQUVoQixhQUFPO0FBQ0xDLGVBQU87QUFDTFYsZ0JBQU1RLE1BREQ7QUFFTEcsaUJBQU9GO0FBRkY7QUFERixPQUFQO0FBTUQ7OztFQW5DaUJOLGdCQUFNUyxTOztBQUFwQmhCLEssQ0FFR2lCLGlCLEdBQW9CO0FBQ3pCSCxTQUFPSSxvQkFBVUM7QUFEUSxDO2tCQXFDZG5CLEsiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgcG9wdXA6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBjb21wb25lbnQsIG9wZW4gfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgPENTU1RyYW5zaXRpb24ga2V5PVwicmVmcmFtZS1wb3B1cFwiIGluPXsgb3BlbiB9IGNsYXNzTmFtZXM9XCJleHBhbmRlZFwiIHRpbWVvdXQ9eyAyNTAgfSBtb3VudE9uRW50ZXI9eyB0cnVlIH0gdW5tb3VudE9uRXhpdD17IHRydWUgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXBvcHVwLXBhbmVsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXBvcHVwLXBhbmVsLWl0ZW1cIj5cbiAgICAgICAgICAgIHsgY29tcG9uZW50ICYmICggXy5pc0Z1bmN0aW9uKGNvbXBvbmVudCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQgKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9DU1NUcmFuc2l0aW9uPlxuICAgIF0pXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBvcGVuLCBvbkNsZWFyIH0gPSB0aGlzLnByb3BzXG4gICAgaWYob3BlbiAhPT0gcHJldlByb3BzLm9wZW4gJiYgIW9wZW4pIHtcbiAgICAgIHNldFRpbWVvdXQob25DbGVhciwgNTAwKVxuICAgIH1cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICBjb25zdCB7IG9uT3Blbiwgb25DbG9zZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBwb3B1cDoge1xuICAgICAgICBvcGVuOiBvbk9wZW4sXG4gICAgICAgIGNsb3NlOiBvbkNsb3NlXG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXBcbiJdfQ==