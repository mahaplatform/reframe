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

var _comment = require('./comment.js');

var _comment2 = _interopRequireDefault(_comment);

var _loading = require('snax/lib/containers/loading');

var _loading2 = _interopRequireDefault(_loading);

var _infinite = require('../containers/infinite');

var _infinite2 = _interopRequireDefault(_infinite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comments = function (_React$Component) {
  _inherits(Comments, _React$Component);

  function Comments() {
    _classCallCheck(this, Comments);

    return _possibleConstructorReturn(this, (Comments.__proto__ || Object.getPrototypeOf(Comments)).apply(this, arguments));
  }

  _createClass(Comments, [{
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
            { className: 'ui comments' },
            this.props.records.map(function (record, index) {
              return _react2.default.createElement(_comment2.default, _extends({}, record, { key: 'event_' + index }));
            })
          )
        )
      );
    }
  }]);

  return Comments;
}(_react2.default.Component);

Comments.propTypes = {
  records: _react2.default.PropTypes.array,
  empty: _react2.default.PropTypes.string.isRequired
};
Comments.defaultProps = {
  empty: "No records found."
};

var CommentsWrapper = function (_React$Component2) {
  _inherits(CommentsWrapper, _React$Component2);

  function CommentsWrapper() {
    _classCallCheck(this, CommentsWrapper);

    return _possibleConstructorReturn(this, (CommentsWrapper.__proto__ || Object.getPrototypeOf(CommentsWrapper)).apply(this, arguments));
  }

  _createClass(CommentsWrapper, [{
    key: 'render',
    value: function render() {
      if (this.props.endpoint) {
        return _react2.default.createElement(
          _infinite2.default,
          { endpoint: this.props.endpoint, injectAs: 'records' },
          _react2.default.createElement(Comments, this.props)
        );
      } else {
        return _react2.default.createElement(Comments, _extends({}, this.props, { records: this.props.data || this.props.records }));
      }
    }
  }]);

  return CommentsWrapper;
}(_react2.default.Component);

exports.default = CommentsWrapper;