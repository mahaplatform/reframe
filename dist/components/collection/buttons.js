'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _task = require('../task');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = function (_React$Component) {
  _inherits(Buttons, _React$Component);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var buttons = this.props.buttons;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection-footer' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-footer-items' },
          buttons && buttons.map(function (button, index) {
            return _react2.default.createElement(
              'div',
              { key: 'collection_footer_' + index, className: 'reframe-collection-footer-item' },
              _react2.default.createElement(_task2.default, _this2._getTask(index))
            );
          })
        )
      );
    }
  }, {
    key: '_getTask',
    value: function _getTask(index) {
      var buttons = this.props.buttons;

      var button = buttons[index];
      var color = button.color || 'blue';
      var classes = ['ui', color, 'fluid', 'button'];
      if (button.disabled) classes.push('disabled');
      return _extends({
        className: classes.join(' ')
      }, button);
    }
  }]);

  return Buttons;
}(_react2.default.Component);

Buttons.propTypes = {
  buttons: _propTypes2.default.array
};
exports.default = Buttons;