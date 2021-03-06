'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flash = function (_React$Component) {
  _inherits(Flash, _React$Component);

  function Flash() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Flash);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Flash.__proto__ || Object.getPrototypeOf(Flash)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      message: null,
      style: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Flash, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          message = _state.message,
          style = _state.style;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-flash', 'in': this.props.message !== null, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-flash-popup ' + (style || '') },
          _react2.default.createElement(
            'div',
            { className: 'reframe-flash-popup-panel' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-flash-popup-icon' },
              this._getIcon(style)
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-flash-popup-message' },
              _react2.default.createElement(
                'p',
                null,
                message
              )
            )
          )
        )
      )];
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _props = this.props,
          message = _props.message,
          style = _props.style,
          onClear = _props.onClear;

      if (prevProps.message !== message) {
        if (message) {
          this.setState({ message: message, style: style });
          setTimeout(onClear, 2000);
        } else {
          setTimeout(function () {
            return _this2.setState({ message: message, style: style });
          }, 250);
        }
      }
    }
  }, {
    key: '_getIcon',
    value: function _getIcon(style) {
      if (style == 'success') {
        return _react2.default.createElement('i', { className: 'fa fa-check-circle' });
      } else if (style == 'warning') {
        return _react2.default.createElement('i', { className: 'fa fa-warning' });
      } else if (style == 'error') {
        return _react2.default.createElement('i', { className: 'fa fa-times-circle' });
      } else {
        return _react2.default.createElement('i', { className: 'fa fa-info-circle' });
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _props2 = this.props,
          onSet = _props2.onSet,
          onClear = _props2.onClear;

      return {
        flash: {
          set: onSet,
          clear: onClear
        }
      };
    }
  }]);

  return Flash;
}(_react2.default.Component);

Flash.childContextTypes = {
  flash: _propTypes2.default.object
};
exports.default = Flash;