'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
        { className: 'ui segment secondary right aligned form-buttons' },
        buttons.map(function (button, index) {
          var classes = ['ui', 'button'];
          if (button.type == 'submit') {
            classes.push('positive');
            return _react2.default.createElement(
              'button',
              { key: 'button_' + index, className: classes.join(' '), onClick: _this2._handleValidateForm.bind(_this2) },
              button.label
            );
          } else if (button.type == 'reset') {
            classes.push('negative');
            return _react2.default.createElement(
              'button',
              { key: 'button_' + index, className: classes.join(' '), onClick: _this2._handleResetForm.bind(_this2) },
              button.label
            );
          } else {
            if (button.color) {
              classes.push(button.color);
            }
            var onClick = button.onClick ? button.onClick.bind(_this2) : function () {};
            return _react2.default.createElement(
              'button',
              { key: 'button_' + index, className: classes.join(' '), onClick: onClick },
              button.label
            );
          }
        })
      );
    }
  }, {
    key: '_handleResetForm',
    value: function _handleResetForm() {
      this.props.onResetForm();
    }
  }, {
    key: '_handleValidateForm',
    value: function _handleValidateForm() {
      this.props.onValidateForm();
    }
  }]);

  return Buttons;
}(_react2.default.Component);

Buttons.propTypes = {
  buttons: _react2.default.PropTypes.array,
  onValidate: _react2.default.PropTypes.func,
  onReset: _react2.default.PropTypes.func
};
exports.default = Buttons;