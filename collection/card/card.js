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

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var batchActions = '';
      if (!_lodash2.default.isEmpty(this.props.batchActions)) {
        var checked = _lodash2.default.includes(this.props.checked, this.props.id);
        batchActions = _react2.default.createElement(
          'div',
          { className: 'extra content center aligned' },
          _react2.default.createElement('input', { type: 'checkbox', checked: checked, onChange: this.handleCheck.bind(this, this.props.id), ref: this.props.id })
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'ui card' },
        _react2.default.createElement(
          'div',
          { className: 'image' },
          _react2.default.createElement('img', { src: '/images/logo.jpg' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          this.props.name
        ),
        batchActions
      );
    }
  }, {
    key: 'handleCheck',
    value: function handleCheck(id) {
      var checked = this.refs[id].checked;
      this.props.onCheck(this.props.componentId, id, checked);
    }
  }, {
    key: 'handleRecordAction',
    value: function handleRecordAction(action, id) {
      this.props.onRecordAction(this.props.componentId, action, id);
    }
  }]);

  return Card;
}(_react2.default.Component);

Card.defaultProps = {
  onCheck: _lodash2.default.noop,
  onRecordAction: _lodash2.default.noop
};
exports.default = Card;