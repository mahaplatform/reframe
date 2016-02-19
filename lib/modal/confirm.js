'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Confirm = function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm() {
    _classCallCheck(this, Confirm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Confirm).apply(this, arguments));
  }

  _createClass(Confirm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui dimmer modals visible active page transition' },
        _react2.default.createElement(
          'div',
          { ref: 'modalWindow', style: this.getStyle(), className: 'ui small modal animating transition active', key: 'collection_confirmation' },
          _react2.default.createElement(
            'div',
            { className: 'header' },
            'Confirm'
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(
              'p',
              null,
              this.props.message
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'actions' },
            _react2.default.createElement(
              'div',
              { className: 'ui negative button', onClick: this.cancel.bind(this) },
              'Cancel'
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui positive button', onClick: this.approve.bind(this) },
              'Delete'
            )
          )
        )
      );
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      return {
        marginTop: '-90px',
        height: '180px'
      };
    }
  }, {
    key: 'approve',
    value: function approve() {
      this.props.onApprove();
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this.props.onCancel();
    }
  }]);

  return Confirm;
}(_react.Component);

Confirm.defaultProps = {
  onApprove: function onApprove() {},
  onCancel: function onCancel() {},
  message: 'Are you sure?'
};
exports.default = Confirm;