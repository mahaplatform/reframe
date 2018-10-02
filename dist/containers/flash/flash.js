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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flash = function (_React$Component) {
  (0, _inherits3.default)(Flash, _React$Component);

  function Flash() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Flash);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Flash.__proto__ || Object.getPrototypeOf(Flash)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      message: null,
      style: null
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Flash, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          message = _state.message,
          style = _state.style;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-flash', 'in': this.props.message !== null, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-flash-popup ' + (style || '') },
          _react2.default.createElement(
            'div',
            { className: 'reframe-flash-popup-panel' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-flash-popup-icon' },
              this._getIcon(style)
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-flash-popup-message' },
              _react2.default.createElement(
                'p',
                null,
                message
              )
            )
          )
        )
      )];
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props = this.props,
          message = _props.message,
          style = _props.style,
          onClear = _props.onClear;

      if (prevProps.message !== message) {
        if (message) {
          this.setState({ message: message, style: style });
          setTimeout(onClear, 2000);
        } else {
          setTimeout(function () {
            return _this2.setState({ message: message, style: style });
          }, 250);
        }
      }
    }
  }, {
    key: '_getIcon',
    value: function _getIcon(style) {
      if (style == 'success') {
        return _react2.default.createElement('i', { className: 'fa fa-check-circle' });
      } else if (style == 'warning') {
        return _react2.default.createElement('i', { className: 'fa fa-warning' });
      } else if (style == 'error') {
        return _react2.default.createElement('i', { className: 'fa fa-times-circle' });
      } else {
        return _react2.default.createElement('i', { className: 'fa fa-info-circle' });
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _props2 = this.props,
          onSet = _props2.onSet,
          onClear = _props2.onClear;

      return {
        flash: {
          set: onSet,
          clear: onClear
        }
      };
    }
  }]);
  return Flash;
}(_react2.default.Component);

Flash.childContextTypes = {
  flash: _propTypes2.default.object
};
exports.default = Flash;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRmxhc2giLCJzdGF0ZSIsIm1lc3NhZ2UiLCJzdHlsZSIsImNoaWxkcmVuIiwicHJvcHMiLCJfZ2V0SWNvbiIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIm9uQ2xlYXIiLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJvblNldCIsImZsYXNoIiwic2V0IiwiY2xlYXIiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNoaWxkQ29udGV4dFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7O2tNQU1KQyxLLEdBQVE7QUFDTkMsZUFBUyxJQURIO0FBRU5DLGFBQU87QUFGRCxLOzs7Ozs2QkFLQztBQUFBLFVBQ0NDLFFBREQsR0FDYyxLQUFLQyxLQURuQixDQUNDRCxRQUREO0FBQUEsbUJBRW9CLEtBQUtILEtBRnpCO0FBQUEsVUFFQ0MsT0FGRCxVQUVDQSxPQUZEO0FBQUEsVUFFVUMsS0FGVixVQUVVQSxLQUZWOztBQUdQLGFBQVEsQ0FDTkMsUUFETSxFQUVOO0FBQUMsMkNBQUQ7QUFBQSxVQUFlLEtBQUksZUFBbkIsRUFBbUMsTUFBSyxLQUFLQyxLQUFMLENBQVdILE9BQVgsS0FBdUIsSUFBL0QsRUFBc0UsWUFBVyxVQUFqRixFQUE0RixTQUFVLEdBQXRHLEVBQTRHLGNBQWUsSUFBM0gsRUFBa0ksZUFBZ0IsSUFBbEo7QUFDRTtBQUFBO0FBQUEsWUFBSyxxQ0FBa0NDLFNBQVMsRUFBM0MsQ0FBTDtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsMkJBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSwwQkFBZjtBQUNJLG1CQUFLRyxRQUFMLENBQWNILEtBQWQ7QUFESixhQURGO0FBSUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsNkJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBS0Q7QUFBTDtBQURGO0FBSkY7QUFERjtBQURGLE9BRk0sQ0FBUjtBQWVEOzs7dUNBRWtCSyxTLEVBQVdDLFMsRUFBVztBQUFBOztBQUFBLG1CQUNILEtBQUtILEtBREY7QUFBQSxVQUMvQkgsT0FEK0IsVUFDL0JBLE9BRCtCO0FBQUEsVUFDdEJDLEtBRHNCLFVBQ3RCQSxLQURzQjtBQUFBLFVBQ2ZNLE9BRGUsVUFDZkEsT0FEZTs7QUFFdkMsVUFBR0YsVUFBVUwsT0FBVixLQUFzQkEsT0FBekIsRUFBa0M7QUFDaEMsWUFBR0EsT0FBSCxFQUFZO0FBQ1YsZUFBS1EsUUFBTCxDQUFjLEVBQUVSLGdCQUFGLEVBQVdDLFlBQVgsRUFBZDtBQUNBUSxxQkFBV0YsT0FBWCxFQUFvQixJQUFwQjtBQUNELFNBSEQsTUFHTztBQUNMRSxxQkFBVztBQUFBLG1CQUFNLE9BQUtELFFBQUwsQ0FBYyxFQUFFUixnQkFBRixFQUFXQyxZQUFYLEVBQWQsQ0FBTjtBQUFBLFdBQVgsRUFBb0QsR0FBcEQ7QUFDRDtBQUNGO0FBQ0Y7Ozs2QkFFUUEsSyxFQUFPO0FBQ2QsVUFBR0EsU0FBUyxTQUFaLEVBQXVCO0FBQ3JCLGVBQU8scUNBQUcsV0FBVSxvQkFBYixHQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUdBLFNBQVMsU0FBWixFQUF1QjtBQUM1QixlQUFPLHFDQUFHLFdBQVUsZUFBYixHQUFQO0FBQ0QsT0FGTSxNQUVBLElBQUdBLFNBQVMsT0FBWixFQUFxQjtBQUMxQixlQUFPLHFDQUFHLFdBQVUsb0JBQWIsR0FBUDtBQUNELE9BRk0sTUFFQTtBQUNMLGVBQU8scUNBQUcsV0FBVSxtQkFBYixHQUFQO0FBQ0Q7QUFDRjs7O3NDQUVpQjtBQUFBLG9CQUNXLEtBQUtFLEtBRGhCO0FBQUEsVUFDUk8sS0FEUSxXQUNSQSxLQURRO0FBQUEsVUFDREgsT0FEQyxXQUNEQSxPQURDOztBQUVoQixhQUFPO0FBQ0xJLGVBQU87QUFDTEMsZUFBS0YsS0FEQTtBQUVMRyxpQkFBT047QUFGRjtBQURGLE9BQVA7QUFNRDs7O0VBL0RpQk8sZ0JBQU1DLFM7O0FBQXBCakIsSyxDQUVHa0IsaUIsR0FBb0I7QUFDekJMLFNBQU9NLG9CQUFVQztBQURRLEM7a0JBaUVkcEIsSyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNsYXNzIEZsYXNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIHN0YXRpYyBjaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgICBmbGFzaDogUHJvcFR5cGVzLm9iamVjdFxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgbWVzc2FnZTogbnVsbCxcbiAgICBzdHlsZTogbnVsbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IG1lc3NhZ2UsIHN0eWxlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIChbXG4gICAgICBjaGlsZHJlbixcbiAgICAgIDxDU1NUcmFuc2l0aW9uIGtleT1cInJlZnJhbWUtZmxhc2hcIiBpbj17IHRoaXMucHJvcHMubWVzc2FnZSAhPT0gbnVsbCB9IGNsYXNzTmFtZXM9XCJleHBhbmRlZFwiIHRpbWVvdXQ9eyAyNTAgfSBtb3VudE9uRW50ZXI9eyB0cnVlIH0gdW5tb3VudE9uRXhpdD17IHRydWUgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWZyYW1lLWZsYXNoLXBvcHVwICR7c3R5bGUgfHwgJyd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZsYXNoLXBvcHVwLXBhbmVsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmxhc2gtcG9wdXAtaWNvblwiPlxuICAgICAgICAgICAgICB7IHRoaXMuX2dldEljb24oc3R5bGUpIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZsYXNoLXBvcHVwLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgPHA+eyBtZXNzYWdlIH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgXSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgbWVzc2FnZSwgc3R5bGUsIG9uQ2xlYXIgfSA9IHRoaXMucHJvcHNcbiAgICBpZihwcmV2UHJvcHMubWVzc2FnZSAhPT0gbWVzc2FnZSkge1xuICAgICAgaWYobWVzc2FnZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZSwgc3R5bGUgfSlcbiAgICAgICAgc2V0VGltZW91dChvbkNsZWFyLCAyMDAwKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgbWVzc2FnZSwgc3R5bGUgfSksIDI1MClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0SWNvbihzdHlsZSkge1xuICAgIGlmKHN0eWxlID09ICdzdWNjZXNzJykge1xuICAgICAgcmV0dXJuIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrLWNpcmNsZVwiIC8+XG4gICAgfSBlbHNlIGlmKHN0eWxlID09ICd3YXJuaW5nJykge1xuICAgICAgcmV0dXJuIDxpIGNsYXNzTmFtZT1cImZhIGZhLXdhcm5pbmdcIiAvPlxuICAgIH0gZWxzZSBpZihzdHlsZSA9PSAnZXJyb3InKSB7XG4gICAgICByZXR1cm4gPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgLz5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxpIGNsYXNzTmFtZT1cImZhIGZhLWluZm8tY2lyY2xlXCIgLz5cbiAgICB9XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgY29uc3QgeyBvblNldCwgb25DbGVhciB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBmbGFzaDoge1xuICAgICAgICBzZXQ6IG9uU2V0LFxuICAgICAgICBjbGVhcjogb25DbGVhclxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsYXNoXG4iXX0=