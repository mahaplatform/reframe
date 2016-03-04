'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _livetime = require('./livetime.js');

var _livetime2 = _interopRequireDefault(_livetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = function (_React$Component) {
  _inherits(Comment, _React$Component);

  function Comment() {
    _classCallCheck(this, Comment);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Comment).apply(this, arguments));
  }

  _createClass(Comment, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'comment' },
        _react2.default.createElement(
          'a',
          { className: 'avatar' },
          _react2.default.createElement('img', { src: this.props.user.photo })
        ),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'a',
            { className: 'author' },
            this.props.user.full_name
          ),
          _react2.default.createElement(
            'div',
            { className: 'metadata' },
            _react2.default.createElement(
              'span',
              { className: 'date' },
              _react2.default.createElement(_livetime2.default, { time: this.props.created_at })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'text' },
            _react2.default.createElement(
              'p',
              null,
              this.props.body
            )
          )
        )
      );
    }
  }]);

  return Comment;
}(_react2.default.Component);

Comment.propTypes = {
  user: _react2.default.PropTypes.shape({
    photo: _react2.default.PropTypes.string.isRequired,
    full_name: _react2.default.PropTypes.string.isRequired
  }).isRequired,
  created_at: _react2.default.PropTypes.string.isRequired,
  body: _react2.default.PropTypes.string.isRequired
};
Comment.defaultProps = {};
exports.default = Comment;