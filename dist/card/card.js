'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _format = require('../utils/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var header = _props.header;
      var image = _props.image;
      var items = _props.items;
      var body = _props.body;
      var buttons = _props.buttons;

      return _react2.default.createElement(
        'div',
        { className: 'ui card fluid' },
        function () {
          if (header) {
            return _react2.default.createElement(
              'div',
              { className: 'content' },
              header
            );
          }
        }(),
        function () {
          if (image) {
            return _react2.default.createElement(
              'div',
              { className: 'image' },
              _react2.default.createElement('img', { src: image })
            );
          }
        }(),
        function () {
          if (body) {
            return _react2.default.createElement(
              'div',
              { className: 'ui content' },
              body
            );
          }
        }(),
        function () {
          if (items) {
            return _react2.default.createElement(
              'div',
              { className: 'ui content' },
              _react2.default.createElement(
                'div',
                { className: 'ui list' },
                items.map(function (item, index) {
                  var value = item.content;
                  return _react2.default.createElement(
                    'div',
                    { key: 'item_' + index, className: 'item' },
                    _react2.default.createElement(
                      'div',
                      { className: 'header' },
                      item.label
                    ),
                    _react2.default.createElement(_format2.default, { format: item.format, value: value })
                  );
                })
              )
            );
          }
        }(),
        function () {
          if (buttons) {
            return _react2.default.createElement(
              'div',
              { className: 'extra content' },
              _react2.default.createElement(
                'div',
                { className: 'ui two buttons' },
                buttons.map(function (button, index) {
                  var classes = ['ui', 'button'];
                  if (button.style) {
                    classes.push(button.style);
                  }
                  return _react2.default.createElement(
                    _reactRouter.Link,
                    { key: 'task_' + index, to: button.route, className: classes.join(' ') },
                    button.label
                  );
                })
              )
            );
          }
        }()
      );
    }
  }]);

  return Card;
}(_react2.default.Component);

Card.propTypes = {};
Card.defaultProps = {};


var mapStateToProps = function mapStateToProps(state, props) {
  return {
    state: state.reframe[props.id]
  };
};

var mapDispatchToProps = {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Card);