'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var Scrollpane = function (_React$Component) {
  (0, _inherits3.default)(Scrollpane, _React$Component);

  function Scrollpane() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Scrollpane);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Scrollpane.__proto__ || Object.getPrototypeOf(Scrollpane)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      signpost: false
    }, _this.headers = [], _this.notified = false, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Scrollpane, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var signpost = this.state.signpost;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-scrollpane' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-scrollpane-inner', ref: function ref(node) {
              return _this2.scrollpane = node;
            } },
          children
        ),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { 'in': signpost, classNames: 'popin', timeout: 250, mountOnEnter: true, unmountOnExit: true },
          _react2.default.createElement(
            'div',
            { className: 'chat-signpost-bottom', onClick: this._handleScrollToTop.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-up' })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.fixed = -1;
      this.headers = this._getHeaders();
      this.listener = _lodash2.default.throttle(this._scrollListener.bind(this), 100);
      this._attachScrollListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.notified = false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._detachScrollListener();
    }
  }, {
    key: '_attachScrollListener',
    value: function _attachScrollListener() {
      this.scrollpane.addEventListener('scroll', this.listener, true);
      this.scrollpane.addEventListener('resize', this.listener, true);
      this._scrollListener();
    }
  }, {
    key: '_detachScrollListener',
    value: function _detachScrollListener() {
      this.scrollpane.removeEventListener('scroll', this.listener, true);
      this.scrollpane.removeEventListener('resize', this.listener, true);
    }
  }, {
    key: '_getHeaders',
    value: function _getHeaders() {
      var _this3 = this;

      var childNodes = Array.from(this.scrollpane.getElementsByClassName('reframe-scrollpane-header'));
      return childNodes.reduce(function (headers, node) {
        var top = parseInt(node.getBoundingClientRect().top - _this3.scrollpane.getBoundingClientRect().top);
        return [].concat((0, _toConsumableArray3.default)(headers), [{
          node: node,
          top: top,
          fixed: false
        }]);
      }, []);
    }
  }, {
    key: '_scrollListener',
    value: function _scrollListener() {
      var _this4 = this;

      var signpost = this.state.signpost;
      var _props = this.props,
          notificationPercent = _props.notificationPercent,
          onReachBottom = _props.onReachBottom;

      var bottomPosition = this.scrollpane.scrollHeight - (this.scrollpane.scrollTop + this.scrollpane.offsetHeight);
      var percentRemaining = bottomPosition / this.scrollpane.scrollHeight * 100;
      var showSignpost = this.scrollpane.scrollTop > 100;
      if (signpost !== showSignpost) this.setState({
        signpost: showSignpost
      });
      if (!this.notified && percentRemaining <= notificationPercent) {
        if (onReachBottom) onReachBottom();
        this.notified = true;
      }
      if (this.headers.length > 0) {
        this.headers.map(function (header, index) {
          var node = header.node;
          if (!header.fixed && index > _this4.fixed && _this4.scrollpane.scrollTop >= header.top) {
            _this4.scrollpane.style.paddingTop = node.offsetHeight + 'px';
            node.style.position = 'absolute';
            node.style.top = 0;
            node.style.left = 0;
            node.style.right = 0;
            _this4.fixed = index;
            _this4.headers[index].fixed = true;
          } else if (header.fixed && index <= _this4.fixed && _this4.scrollpane.scrollTop < header.top) {
            if (index === 0) _this4.scrollpane.removeAttribute('style');
            node.removeAttribute('style');
            _this4.headers[index].fixed = false;
            _this4.fixed = _this4.fixed - 1;
          }
        });
      }
    }
  }, {
    key: '_handleScrollToTop',
    value: function _handleScrollToTop() {
      this.scrollpane.scrollTop = 0;
    }
  }]);
  return Scrollpane;
}(_react2.default.Component);

Scrollpane.propTypes = {
  children: _propTypes2.default.any,
  notificationPercent: _propTypes2.default.number,
  onReachBottom: _propTypes2.default.func
};
Scrollpane.defaultProps = {
  notificationPercent: 30,
  onReachBottom: null
};
exports.default = Scrollpane;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2Nyb2xscGFuZSIsInN0YXRlIiwic2lnbnBvc3QiLCJoZWFkZXJzIiwibm90aWZpZWQiLCJjaGlsZHJlbiIsInByb3BzIiwibm9kZSIsInNjcm9sbHBhbmUiLCJfaGFuZGxlU2Nyb2xsVG9Ub3AiLCJiaW5kIiwiZml4ZWQiLCJfZ2V0SGVhZGVycyIsImxpc3RlbmVyIiwiXyIsInRocm90dGxlIiwiX3Njcm9sbExpc3RlbmVyIiwiX2F0dGFjaFNjcm9sbExpc3RlbmVyIiwiX2RldGFjaFNjcm9sbExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjaGlsZE5vZGVzIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlZHVjZSIsInRvcCIsInBhcnNlSW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwibm90aWZpY2F0aW9uUGVyY2VudCIsIm9uUmVhY2hCb3R0b20iLCJib3R0b21Qb3NpdGlvbiIsInNjcm9sbEhlaWdodCIsInNjcm9sbFRvcCIsIm9mZnNldEhlaWdodCIsInBlcmNlbnRSZW1haW5pbmciLCJzaG93U2lnbnBvc3QiLCJzZXRTdGF0ZSIsImxlbmd0aCIsIm1hcCIsImhlYWRlciIsImluZGV4Iiwic3R5bGUiLCJwYWRkaW5nVG9wIiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsIm51bWJlciIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs7NE1BYUpDLEssR0FBUTtBQUNOQyxnQkFBVTtBQURKLEssUUFJUkMsTyxHQUFVLEUsUUFFVkMsUSxHQUFXLEs7Ozs7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Qk8sT0FBT2QsR0FBN0UsRUFBa0Y7QUFDdkYsZ0JBQUdlLFVBQVUsQ0FBYixFQUFnQixPQUFLakMsVUFBTCxDQUFnQnVDLGVBQWhCLENBQWdDLE9BQWhDO0FBQ2hCeEMsaUJBQUt3QyxlQUFMLENBQXFCLE9BQXJCO0FBQ0EsbUJBQUs1QyxPQUFMLENBQWFzQyxLQUFiLEVBQW9COUIsS0FBcEIsR0FBNEIsS0FBNUI7QUFDQSxtQkFBS0EsS0FBTCxHQUFhLE9BQUtBLEtBQUwsR0FBYSxDQUExQjtBQUNEO0FBQ0YsU0FoQkQ7QUFpQkQ7QUFDRjs7O3lDQUVvQjtBQUNuQixXQUFLSCxVQUFMLENBQWdCeUIsU0FBaEIsR0FBNEIsQ0FBNUI7QUFDRDs7O0VBbkhzQmUsZ0JBQU1DLFM7O0FBQXpCakQsVSxDQUVHa0QsUyxHQUFZO0FBQ2pCN0MsWUFBVThDLG9CQUFVQyxHQURIO0FBRWpCdkIsdUJBQXFCc0Isb0JBQVVFLE1BRmQ7QUFHakJ2QixpQkFBZXFCLG9CQUFVRztBQUhSLEM7QUFGZnRELFUsQ0FRR3VELFksR0FBZTtBQUNwQjFCLHVCQUFxQixFQUREO0FBRXBCQyxpQkFBZTtBQUZLLEM7a0JBK0dUOUIsVSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNsYXNzIFNjcm9sbHBhbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gICAgbm90aWZpY2F0aW9uUGVyY2VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblJlYWNoQm90dG9tOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBub3RpZmljYXRpb25QZXJjZW50OiAzMCxcbiAgICBvblJlYWNoQm90dG9tOiBudWxsXG4gIH1cblxuICBzdGF0ZSA9IHtcbiAgICBzaWducG9zdDogZmFsc2VcbiAgfVxuXG4gIGhlYWRlcnMgPSBbXVxuXG4gIG5vdGlmaWVkID0gZmFsc2VcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgc2lnbnBvc3QgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNjcm9sbHBhbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNjcm9sbHBhbmUtaW5uZXJcIiByZWY9eyAobm9kZSkgPT4gdGhpcy5zY3JvbGxwYW5lID0gbm9kZSB9PlxuICAgICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENTU1RyYW5zaXRpb24gaW49eyBzaWducG9zdCB9IGNsYXNzTmFtZXM9XCJwb3BpblwiIHRpbWVvdXQ9eyAyNTAgfSBtb3VudE9uRW50ZXI9eyB0cnVlIH0gdW5tb3VudE9uRXhpdD17IHRydWUgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXQtc2lnbnBvc3QtYm90dG9tXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZVNjcm9sbFRvVG9wLmJpbmQodGhpcykgfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZXZyb24tdXBcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NTU1RyYW5zaXRpb24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmZpeGVkID0gLTFcbiAgICB0aGlzLmhlYWRlcnMgPSB0aGlzLl9nZXRIZWFkZXJzKClcbiAgICB0aGlzLmxpc3RlbmVyID0gXy50aHJvdHRsZSh0aGlzLl9zY3JvbGxMaXN0ZW5lci5iaW5kKHRoaXMpLCAxMDApXG4gICAgdGhpcy5fYXR0YWNoU2Nyb2xsTGlzdGVuZXIoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMubm90aWZpZWQgPSBmYWxzZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5fZGV0YWNoU2Nyb2xsTGlzdGVuZXIoKVxuICB9XG5cbiAgX2F0dGFjaFNjcm9sbExpc3RlbmVyKCkge1xuICAgIHRoaXMuc2Nyb2xscGFuZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmxpc3RlbmVyLCB0cnVlKVxuICAgIHRoaXMuc2Nyb2xscGFuZS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmxpc3RlbmVyLCB0cnVlKVxuICAgIHRoaXMuX3Njcm9sbExpc3RlbmVyKClcbiAgfVxuXG4gIF9kZXRhY2hTY3JvbGxMaXN0ZW5lcigpIHtcbiAgICB0aGlzLnNjcm9sbHBhbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5saXN0ZW5lciwgdHJ1ZSlcbiAgICB0aGlzLnNjcm9sbHBhbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5saXN0ZW5lciwgdHJ1ZSlcbiAgfVxuXG4gIF9nZXRIZWFkZXJzKCkge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBBcnJheS5mcm9tKHRoaXMuc2Nyb2xscGFuZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdyZWZyYW1lLXNjcm9sbHBhbmUtaGVhZGVyJykpXG4gICAgcmV0dXJuIGNoaWxkTm9kZXMucmVkdWNlKChoZWFkZXJzLCBub2RlKSA9PiB7XG4gICAgICBjb25zdCB0b3AgPSBwYXJzZUludChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRoaXMuc2Nyb2xscGFuZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApXG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5oZWFkZXJzLFxuICAgICAgICB7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICB0b3AsXG4gICAgICAgICAgZml4ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LCBbXSlcbiAgfVxuXG4gIF9zY3JvbGxMaXN0ZW5lcigpIHtcbiAgICBjb25zdCB7IHNpZ25wb3N0IH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBub3RpZmljYXRpb25QZXJjZW50LCBvblJlYWNoQm90dG9tIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgYm90dG9tUG9zaXRpb24gPSB0aGlzLnNjcm9sbHBhbmUuc2Nyb2xsSGVpZ2h0IC0gKHRoaXMuc2Nyb2xscGFuZS5zY3JvbGxUb3AgKyB0aGlzLnNjcm9sbHBhbmUub2Zmc2V0SGVpZ2h0KVxuICAgIGNvbnN0IHBlcmNlbnRSZW1haW5pbmcgPSAoYm90dG9tUG9zaXRpb24gLyB0aGlzLnNjcm9sbHBhbmUuc2Nyb2xsSGVpZ2h0KSAqIDEwMFxuICAgIGNvbnN0IHNob3dTaWducG9zdCA9IHRoaXMuc2Nyb2xscGFuZS5zY3JvbGxUb3AgPiAxMDBcbiAgICBpZihzaWducG9zdCAhPT0gc2hvd1NpZ25wb3N0KSB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNpZ25wb3N0OiBzaG93U2lnbnBvc3RcbiAgICB9KVxuICAgIGlmKCF0aGlzLm5vdGlmaWVkICYmIHBlcmNlbnRSZW1haW5pbmcgPD0gbm90aWZpY2F0aW9uUGVyY2VudCkge1xuICAgICAgaWYob25SZWFjaEJvdHRvbSkgb25SZWFjaEJvdHRvbSgpXG4gICAgICB0aGlzLm5vdGlmaWVkID0gdHJ1ZVxuICAgIH1cbiAgICBpZih0aGlzLmhlYWRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5oZWFkZXJzLm1hcCgoaGVhZGVyLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBub2RlID0gaGVhZGVyLm5vZGVcbiAgICAgICAgaWYoIWhlYWRlci5maXhlZCAmJiBpbmRleCA+IHRoaXMuZml4ZWQgJiYgdGhpcy5zY3JvbGxwYW5lLnNjcm9sbFRvcCA+PSBoZWFkZXIudG9wKSB7XG4gICAgICAgICAgdGhpcy5zY3JvbGxwYW5lLnN0eWxlLnBhZGRpbmdUb3AgPSBgJHtub2RlLm9mZnNldEhlaWdodH1weGBcbiAgICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xuICAgICAgICAgIG5vZGUuc3R5bGUudG9wID0gMFxuICAgICAgICAgIG5vZGUuc3R5bGUubGVmdCA9IDBcbiAgICAgICAgICBub2RlLnN0eWxlLnJpZ2h0ID0gMFxuICAgICAgICAgIHRoaXMuZml4ZWQgPSBpbmRleFxuICAgICAgICAgIHRoaXMuaGVhZGVyc1tpbmRleF0uZml4ZWQgPSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZihoZWFkZXIuZml4ZWQgJiYgaW5kZXggPD0gdGhpcy5maXhlZCAmJiB0aGlzLnNjcm9sbHBhbmUuc2Nyb2xsVG9wIDwgaGVhZGVyLnRvcCkge1xuICAgICAgICAgIGlmKGluZGV4ID09PSAwKSB0aGlzLnNjcm9sbHBhbmUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpXG4gICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJylcbiAgICAgICAgICB0aGlzLmhlYWRlcnNbaW5kZXhdLmZpeGVkID0gZmFsc2VcbiAgICAgICAgICB0aGlzLmZpeGVkID0gdGhpcy5maXhlZCAtIDFcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlU2Nyb2xsVG9Ub3AoKSB7XG4gICAgdGhpcy5zY3JvbGxwYW5lLnNjcm9sbFRvcCA9IDBcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjcm9sbHBhbmVcbiJdfQ==