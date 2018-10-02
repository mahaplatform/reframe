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

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      panels: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var panels = this.props.panels;
      var children = this.props.children;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-modal-overlay', 'in': panels.length > 0, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement('div', { className: 'reframe-modal-overlay', onClick: this._handleClose.bind(this) })
      ), _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-modal-window', 'in': panels.length > 0, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-window' },
          _react2.default.createElement(
            _reactTransitionGroup.TransitionGroup,
            null,
            panels.map(function (panel, index) {
              return _react2.default.createElement(
                _reactTransitionGroup.CSSTransition,
                { classNames: index > 0 ? 'stack' : '', timeout: 500, key: 'panel_' + index },
                _react2.default.createElement(
                  'div',
                  null,
                  _lodash2.default.isFunction(panel) ? _react2.default.createElement(panel) : panel
                )
              );
            })
          )
        )
      )];
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var panels = this.props.panels;
      // if(panels.length > prevProps.panels.length) {
      //   this.setState({ panels })
      // } else if(panels.length < prevProps.panels.length) {
      //   setTimeout(() => this.setState({ panels }), 500)
      // }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        modal: {
          close: this._handleClose.bind(this),
          open: this._handleOpen.bind(this),
          pop: this._handlePop.bind(this),
          push: this._handlePush.bind(this)
        }
      };
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      this.props.onClose();
    }
  }, {
    key: '_handleOpen',
    value: function _handleOpen(component) {
      this.props.onOpen(component);
    }
  }, {
    key: '_handlePop',
    value: function _handlePop() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.props.onPop(num);
    }
  }, {
    key: '_handlePush',
    value: function _handlePush(component) {
      this.props.onPush(component);
    }
  }]);
  return Modal;
}(_react2.default.Component);

Modal.childContextTypes = {
  modal: _propTypes2.default.object
};
Modal.propTypes = {
  panels: _propTypes2.default.array,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onPop: _propTypes2.default.func,
  onPush: _propTypes2.default.func
};
exports.default = Modal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTW9kYWwiLCJzdGF0ZSIsInBhbmVscyIsInByb3BzIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJfaGFuZGxlQ2xvc2UiLCJiaW5kIiwibWFwIiwicGFuZWwiLCJpbmRleCIsIl8iLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwicHJldlByb3BzIiwicHJldlN0YXRlIiwibW9kYWwiLCJjbG9zZSIsIm9wZW4iLCJfaGFuZGxlT3BlbiIsInBvcCIsIl9oYW5kbGVQb3AiLCJwdXNoIiwiX2hhbmRsZVB1c2giLCJvbkNsb3NlIiwiY29tcG9uZW50Iiwib25PcGVuIiwibnVtIiwib25Qb3AiLCJvblB1c2giLCJDb21wb25lbnQiLCJjaGlsZENvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsInByb3BUeXBlcyIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0lBRU1BLEs7Ozs7Ozs7Ozs7Ozs7O2tNQWNKQyxLLEdBQVE7QUFDTkMsY0FBUTtBQURGLEs7Ozs7OzZCQUlDO0FBQUEsVUFDQ0EsTUFERCxHQUNZLEtBQUtDLEtBRGpCLENBQ0NELE1BREQ7QUFBQSxVQUVDRSxRQUZELEdBRWMsS0FBS0QsS0FGbkIsQ0FFQ0MsUUFGRDs7QUFHUCxhQUFRLENBQ05BLFFBRE0sRUFFTjtBQUFDLDJDQUFEO0FBQUEsVUFBZSxLQUFJLHVCQUFuQixFQUEyQyxNQUFLRixPQUFPRyxNQUFQLEdBQWdCLENBQWhFLEVBQW9FLFlBQVcsVUFBL0UsRUFBMEYsU0FBVSxHQUFwRyxFQUEwRyxjQUFlLElBQXpILEVBQWdJLGVBQWdCLElBQWhKO0FBQ0UsK0NBQUssV0FBVSx1QkFBZixFQUF1QyxTQUFTLEtBQUtDLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQWhEO0FBREYsT0FGTSxFQUtOO0FBQUMsMkNBQUQ7QUFBQSxVQUFlLEtBQUksc0JBQW5CLEVBQTBDLE1BQUtMLE9BQU9HLE1BQVAsR0FBZ0IsQ0FBL0QsRUFBbUUsWUFBVyxVQUE5RSxFQUF5RixTQUFVLEdBQW5HLEVBQXlHLGNBQWUsSUFBeEgsRUFBK0gsZUFBZ0IsSUFBL0k7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQyxpREFBRDtBQUFBO0FBQ0lILG1CQUFPTSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEscUJBQ1g7QUFBQyxtREFBRDtBQUFBLGtCQUFlLFlBQWFBLFFBQVEsQ0FBUixHQUFZLE9BQVosR0FBc0IsRUFBbEQsRUFBc0QsU0FBVSxHQUFoRSxFQUFzRSxnQkFBZUEsS0FBckY7QUFDRTtBQUFBO0FBQUE7QUFDSUMsbUNBQUVDLFVBQUYsQ0FBYUgsS0FBYixJQUFzQkksZ0JBQU1DLGFBQU4sQ0FBb0JMLEtBQXBCLENBQXRCLEdBQW1EQTtBQUR2RDtBQURGLGVBRFc7QUFBQSxhQUFYO0FBREo7QUFERjtBQURGLE9BTE0sQ0FBUjtBQW1CRDs7O3VDQUVrQk0sUyxFQUFXQyxTLEVBQVc7QUFBQSxVQUMvQmQsTUFEK0IsR0FDcEIsS0FBS0MsS0FEZSxDQUMvQkQsTUFEK0I7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7c0NBRWlCO0FBQ2hCLGFBQU87QUFDTGUsZUFBTztBQUNMQyxpQkFBTyxLQUFLWixZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURGO0FBRUxZLGdCQUFNLEtBQUtDLFdBQUwsQ0FBaUJiLElBQWpCLENBQXNCLElBQXRCLENBRkQ7QUFHTGMsZUFBSyxLQUFLQyxVQUFMLENBQWdCZixJQUFoQixDQUFxQixJQUFyQixDQUhBO0FBSUxnQixnQkFBTSxLQUFLQyxXQUFMLENBQWlCakIsSUFBakIsQ0FBc0IsSUFBdEI7QUFKRDtBQURGLE9BQVA7QUFRRDs7O21DQUVjO0FBQ2IsV0FBS0osS0FBTCxDQUFXc0IsT0FBWDtBQUNEOzs7Z0NBRVdDLFMsRUFBVztBQUNyQixXQUFLdkIsS0FBTCxDQUFXd0IsTUFBWCxDQUFrQkQsU0FBbEI7QUFDRDs7O2lDQUVtQjtBQUFBLFVBQVRFLEdBQVMsdUVBQUgsQ0FBRzs7QUFDbEIsV0FBS3pCLEtBQUwsQ0FBVzBCLEtBQVgsQ0FBaUJELEdBQWpCO0FBQ0Q7OztnQ0FFV0YsUyxFQUFXO0FBQ3JCLFdBQUt2QixLQUFMLENBQVcyQixNQUFYLENBQWtCSixTQUFsQjtBQUNEOzs7RUE1RWlCYixnQkFBTWtCLFM7O0FBQXBCL0IsSyxDQUVHZ0MsaUIsR0FBb0I7QUFDekJmLFNBQU9nQixvQkFBVUM7QUFEUSxDO0FBRnZCbEMsSyxDQU1HbUMsUyxHQUFZO0FBQ2pCakMsVUFBUStCLG9CQUFVRyxLQUREO0FBRWpCWCxXQUFTUSxvQkFBVUksSUFGRjtBQUdqQlYsVUFBUU0sb0JBQVVJLElBSEQ7QUFJakJSLFNBQU9JLG9CQUFVSSxJQUpBO0FBS2pCUCxVQUFRRyxvQkFBVUk7QUFMRCxDO2tCQTBFTnJDLEsiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFRyYW5zaXRpb25Hcm91cCwgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgbW9kYWw6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgcGFuZWxzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25PcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblBvcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25QdXNoOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgcGFuZWxzOiBbXVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFuZWxzIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoW1xuICAgICAgY2hpbGRyZW4sXG4gICAgICA8Q1NTVHJhbnNpdGlvbiBrZXk9XCJyZWZyYW1lLW1vZGFsLW92ZXJsYXlcIiBpbj17IHBhbmVscy5sZW5ndGggPiAwIH0gY2xhc3NOYW1lcz1cImV4cGFuZGVkXCIgdGltZW91dD17IDUwMCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbW9kYWwtb3ZlcmxheVwiIG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUNsb3NlLmJpbmQodGhpcyl9IC8+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+LFxuICAgICAgPENTU1RyYW5zaXRpb24ga2V5PVwicmVmcmFtZS1tb2RhbC13aW5kb3dcIiBpbj17IHBhbmVscy5sZW5ndGggPiAwIH0gY2xhc3NOYW1lcz1cImV4cGFuZGVkXCIgdGltZW91dD17IDUwMCB9IG1vdW50T25FbnRlcj17IHRydWUgfSB1bm1vdW50T25FeGl0PXsgdHJ1ZSB9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbW9kYWwtd2luZG93XCI+XG4gICAgICAgICAgPFRyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgICAgIHsgcGFuZWxzLm1hcCgocGFuZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxDU1NUcmFuc2l0aW9uIGNsYXNzTmFtZXM9eyBpbmRleCA+IDAgPyAnc3RhY2snIDogJyd9IHRpbWVvdXQ9eyA1MDAgfSBrZXk9eyBgcGFuZWxfJHtpbmRleH1gIH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKHBhbmVsKSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQocGFuZWwpIDogcGFuZWwgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RyYW5zaXRpb25Hcm91cD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgXSlcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgIGNvbnN0IHsgcGFuZWxzIH0gPSB0aGlzLnByb3BzXG4gICAgLy8gaWYocGFuZWxzLmxlbmd0aCA+IHByZXZQcm9wcy5wYW5lbHMubGVuZ3RoKSB7XG4gICAgLy8gICB0aGlzLnNldFN0YXRlKHsgcGFuZWxzIH0pXG4gICAgLy8gfSBlbHNlIGlmKHBhbmVscy5sZW5ndGggPCBwcmV2UHJvcHMucGFuZWxzLmxlbmd0aCkge1xuICAgIC8vICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFuZWxzIH0pLCA1MDApXG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBtb2RhbDoge1xuICAgICAgICBjbG9zZTogdGhpcy5faGFuZGxlQ2xvc2UuYmluZCh0aGlzKSxcbiAgICAgICAgb3BlbjogdGhpcy5faGFuZGxlT3Blbi5iaW5kKHRoaXMpLFxuICAgICAgICBwb3A6IHRoaXMuX2hhbmRsZVBvcC5iaW5kKHRoaXMpLFxuICAgICAgICBwdXNoOiB0aGlzLl9oYW5kbGVQdXNoLmJpbmQodGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQ2xvc2UoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkNsb3NlKClcbiAgfVxuXG4gIF9oYW5kbGVPcGVuKGNvbXBvbmVudCkge1xuICAgIHRoaXMucHJvcHMub25PcGVuKGNvbXBvbmVudClcbiAgfVxuXG4gIF9oYW5kbGVQb3AobnVtID0gMSkge1xuICAgIHRoaXMucHJvcHMub25Qb3AobnVtKVxuICB9XG5cbiAgX2hhbmRsZVB1c2goY29tcG9uZW50KSB7XG4gICAgdGhpcy5wcm9wcy5vblB1c2goY29tcG9uZW50KVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxcbiJdfQ==