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