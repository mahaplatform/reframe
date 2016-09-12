'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _event = require('./event.js');

var _event2 = _interopRequireDefault(_event);

var _loading = require('snax/lib/containers/loading');

var _loading2 = _interopRequireDefault(_loading);

var _infinite = require('../containers/infinite');

var _infinite2 = _interopRequireDefault(_infinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feed = function (_React$Component) {
  _inherits(Feed, _React$Component);

  function Feed() {
    _classCallCheck(this, Feed);

    return _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).apply(this, arguments));
  }

  _createClass(Feed, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _loading2.default,
        { content: this.props.records, useLoader: true },
        _react2.default.createElement(
          _loading.EmptyState,
          null,
          _react2.default.createElement(
            'p',
            null,
            this.props.empty
          )
        ),
        _react2.default.createElement(
          _loading.PresentState,
          null,
          _react2.default.createElement(
            'div',
            { className: 'feed' },
            this.props.records.map(function (record, index) {
              return _react2.default.createElement(_event2.default, _extends({}, record, { key: 'event_' + index }));
            })
          )
        )
      );
    }
  }]);

  return Feed;
}(_react2.default.Component);

Feed.propTypes = {
  records: _react2.default.PropTypes.array,
  empty: _react2.default.PropTypes.string.isRequired
};
Feed.defaultProps = {
  empty: "No records found."
};

var FeedWrapper = function (_React$Component2) {
  _inherits(FeedWrapper, _React$Component2);

  function FeedWrapper() {
    _classCallCheck(this, FeedWrapper);

    return _possibleConstructorReturn(this, (FeedWrapper.__proto__ || Object.getPrototypeOf(FeedWrapper)).apply(this, arguments));
  }

  _createClass(FeedWrapper, [{
    key: 'render',
    value: function render() {
      if (this.props.endpoint) {
        return _react2.default.createElement(
          _infinite2.default,
          { endpoint: this.props.endpoint, injectAs: 'records' },
          _react2.default.createElement(Feed, this.props)
        );
      } else {
        return _react2.default.createElement(Feed, _extends({}, this.props, { records: this.props.data || this.props.records }));
      }
    }
  }]);

  return FeedWrapper;
}(_react2.default.Component);

exports.default = FeedWrapper;