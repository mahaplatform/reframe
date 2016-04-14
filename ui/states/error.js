'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _error = require('../messages/error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNotEmpty = _lodash2.default.negate(_lodash2.default.isEmpty);

var ErrorState = _react2.default.createClass({
  displayName: 'ErrorState',
  render: function render() {
    if (isNotEmpty(this.props.children)) {
      return this.props.children;
    } else {
      return _react2.default.createElement(_error2.default, { title: this.props.title, message: this.props.text });
    }
  }
});

ErrorState.defaultProps = {
  title: "Couldn't load content",
  text: "The server responded with an error, so this content could not be loaded right now.",
  class: "ui negative message"
};

exports.default = ErrorState;