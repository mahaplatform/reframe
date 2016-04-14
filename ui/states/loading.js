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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNotEmpty = _lodash2.default.negate(_lodash2.default.isEmpty);

var LoadingState = _react2.default.createClass({
  displayName: 'LoadingState',
  render: function render() {
    if (isNotEmpty(this.props.children)) {
      return this.props.children;
    } else {
      return _react2.default.createElement(
        'div',
        { className: this.props.class },
        this.props.text
      );
    }
  }
});

LoadingState.defaultProps = {
  text: "Loading...",
  class: "loader"
};

exports.default = LoadingState;