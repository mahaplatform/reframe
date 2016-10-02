'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Task = function (_React$Component) {
  _inherits(Task, _React$Component);

  function Task() {
    _classCallCheck(this, Task);

    return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
  }

  _createClass(Task, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var label = _props.label;
      var route = _props.route;
      var handler = _props.handler;
      var button = _props.button;

      var classes = button ? "ui button" : "";
      if (route) {
        return _react2.default.createElement(
          _reactRouter.Link,
          { to: route, className: classes },
          label
        );
      } else if (handler) {
        return _react2.default.createElement(
          'a',
          { className: classes, onClick: handler.bind(this) },
          label
        );
      }
    }
  }]);

  return Task;
}(_react2.default.Component);

Task.propTypes = {
  label: _react2.default.PropTypes.string.isRequired,
  button: _react2.default.PropTypes.bool,
  route: _react2.default.PropTypes.string,
  handler: _react2.default.PropTypes.func
};
Task.defaultProps = {
  button: false
};
exports.default = Task;