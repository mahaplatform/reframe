'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorMessage = function (_React$Component) {
  _inherits(ErrorMessage, _React$Component);

  function ErrorMessage() {
    _classCallCheck(this, ErrorMessage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorMessage).apply(this, arguments));
  }

  _createClass(ErrorMessage, [{
    key: 'render',
    value: function render() {
      var settings = _lodash2.default.get(this.context, 'config.ui.messages.error', { color: '#db2828', backgroundColor: '#ffe8e6', colorClass: 'red' });
      var _props = this.props;
      var title = _props.title;
      var message = _props.message;
      var plain = _props.plain;


      if (plain) {
        return _react2.default.createElement(
          'div',
          { style: { color: settings.color, backgroundColor: settings.backgroundColor, padding: '1em' } },
          _react2.default.createElement(
            'b',
            null,
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            message
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'ui ' + settings.colorClass + ' message' },
          _react2.default.createElement(
            'div',
            { className: 'header' },
            title
          ),
          _react2.default.createElement(
            'p',
            null,
            message
          )
        );
      }
    }
  }]);

  return ErrorMessage;
}(_react2.default.Component);

ErrorMessage.propTypes = {
  title: _react.PropTypes.string.isRequired,
  message: _react.PropTypes.string.isRequired,
  plain: _react.PropTypes.bool.isRequired
};
ErrorMessage.defaultProps = {
  title: "Error",
  message: "This component couldn't be displayed because there was a problem with this part of the page.",
  plain: false
};
ErrorMessage.contextTypes = {
  config: _react.PropTypes.object
};
exports.default = ErrorMessage;