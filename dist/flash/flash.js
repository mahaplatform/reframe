'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flash = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flash = exports.Flash = function (_React$Component) {
  _inherits(Flash, _React$Component);

  function Flash() {
    _classCallCheck(this, Flash);

    return _possibleConstructorReturn(this, (Flash.__proto__ || Object.getPrototypeOf(Flash)).apply(this, arguments));
  }

  _createClass(Flash, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          message = _props.message,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-flash' },
        children,
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          { transitionName: 'expanded', transitionEnterTimeout: 250, transitionLeaveTimeout: 250 },
          message && _react2.default.createElement(
            'div',
            { className: 'reframe-flash-popup ' + style, key: 'flash_' + message },
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
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          message = _props2.message,
          onClear = _props2.onClear;

      if (prevProps.message !== message && message) {
        window.setTimeout(onClear, 2000);
      }
    }
  }, {
    key: '_getIcon',
    value: function _getIcon(style) {
      if (style == 'success') {
        return _react2.default.createElement('i', { className: 'fa fa-check-circle' });
      } else if (style == 'info') {
        return _react2.default.createElement('i', { className: 'fa fa-info-circle' });
      } else if (style == 'warning') {
        return _react2.default.createElement('i', { className: 'fa fa-warning' });
      } else if (style == 'error') {
        return _react2.default.createElement('i', { className: 'fa fa-times-circle' });
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _props3 = this.props,
          onSet = _props3.onSet,
          onClear = _props3.onClear;

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
Flash.propTypes = {
  message: _propTypes2.default.string,
  style: _propTypes2.default.string,
  onSet: _propTypes2.default.func.isRequired,
  onClear: _propTypes2.default.func.isRequired
};
exports.default = Flash;