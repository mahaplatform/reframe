'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scrollpane = function (_React$Component) {
  _inherits(Scrollpane, _React$Component);

  function Scrollpane(props) {
    _classCallCheck(this, Scrollpane);

    var _this = _possibleConstructorReturn(this, (Scrollpane.__proto__ || Object.getPrototypeOf(Scrollpane)).call(this, props));

    _this.notified = false;
    return _this;
  }

  _createClass(Scrollpane, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-scrollpane', ref: 'scrollpane' },
        children
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.listener = _lodash2.default.throttle(this._scrollListener.bind(this), 100);
      this._attachScrollListener();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._attachScrollListener();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (!this.notified) this._detachScrollListener();
    }
  }, {
    key: '_attachScrollListener',
    value: function _attachScrollListener() {
      var scrollpane = this.refs.scrollpane;

      if (scrollpane.scrollHeight <= scrollpane.offsetHeight) return;
      this.notified = false;
      scrollpane.addEventListener('scroll', this.listener, true);
      scrollpane.addEventListener('resize', this.listener, true);
      this._scrollListener();
    }
  }, {
    key: '_detachScrollListener',
    value: function _detachScrollListener() {
      var scrollpane = this.refs.scrollpane;

      this.notified = true;
      scrollpane.removeEventListener('scroll', this.listener, true);
      scrollpane.removeEventListener('resize', this.listener, true);
    }
  }, {
    key: '_scrollListener',
    value: function _scrollListener() {
      var scrollpane = this.refs.scrollpane;
      var _props = this.props,
          notificationPercent = _props.notificationPercent,
          records = _props.records,
          status = _props.status,
          total = _props.total,
          onReachBottom = _props.onReachBottom;

      var bottomPosition = scrollpane.scrollHeight - (scrollpane.scrollTop + scrollpane.offsetHeight);
      var percentRemaining = bottomPosition / scrollpane.scrollHeight * 100;
      if (percentRemaining <= notificationPercent && !this.notified) {
        if (onReachBottom) onReachBottom();
        this._detachScrollListener();
      }
    }
  }]);

  return Scrollpane;
}(_react2.default.Component);

Scrollpane.PropTypes = {
  notificationPercent: _propTypes2.default.number,
  onReachBottom: _propTypes2.default.func
};
Scrollpane.defaultProps = {
  notificationPercent: 20,
  onReachBottom: null
};
exports.default = Scrollpane;