'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _format = require('../../../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _record_actions = require('../record_actions');

var _record_actions2 = _interopRequireDefault(_record_actions);

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
      var _this2 = this;

      _lodash2.default.templateSettings.interpolate = /#{([\s\S]+?)}/g;
      var _props = this.props;
      var card = _props.card;
      var record = _props.record;
      var selected = _props.selected;
      var recordActions = _props.recordActions;
      var batchActions = _props.batchActions;

      var image = _lodash2.default.get(record, card.image);
      var checked = _lodash2.default.includes(selected, record.id);
      var url = _lodash2.default.template(card.url)(record);
      var classes = ['ui', 'segment'];
      if (checked) {
        classes.push('positive');
      }
      return _react2.default.createElement(
        'div',
        { className: classes.join(' '), ref: 'card' },
        function () {
          if (recordActions) {
            return _react2.default.createElement(_record_actions2.default, { icon: 'setting',
              button: true,
              record: record,
              recordActions: recordActions });
          }
        }(),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: url },
          _react2.default.createElement(
            'div',
            { className: 'image' },
            _react2.default.createElement('img', { src: image })
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            _react2.default.createElement(_format2.default, _extends({}, record, { format: card.content }))
          )
        ),
        function () {
          if (batchActions) {
            return _react2.default.createElement(
              'div',
              { className: 'select', onClick: _this2._handleSelect.bind(_this2, record.id) },
              _react2.default.createElement('input', { type: 'checkbox', checked: checked })
            );
          }
        }()
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.card).find('.dropdown').dropdown();
    }
  }, {
    key: '_handleSelect',
    value: function _handleSelect(recordId) {
      this.props.onSelect(recordId);
    }
  }]);

  return Card;
}(_react2.default.Component);

Card.propTypes = {
  record: _react2.default.PropTypes.object,
  card: _react2.default.PropTypes.object,
  selected: _react2.default.PropTypes.array,
  recordActions: _react2.default.PropTypes.array,
  batchActions: _react2.default.PropTypes.array,
  onSelect: _react2.default.PropTypes.func
};
exports.default = Card;