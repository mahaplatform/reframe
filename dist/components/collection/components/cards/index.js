'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cards = function (_React$Component) {
  _inherits(Cards, _React$Component);

  function Cards() {
    _classCallCheck(this, Cards);

    return _possibleConstructorReturn(this, (Cards.__proto__ || Object.getPrototypeOf(Cards)).apply(this, arguments));
  }

  _createClass(Cards, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var card = _props.card;
      var records = _props.records;
      var selected = _props.selected;
      var recordActions = _props.recordActions;
      var batchActions = _props.batchActions;
      var onSelect = _props.onSelect;

      return _react2.default.createElement(
        'div',
        { className: 'cards' },
        records.map(function (record, index) {
          return _react2.default.createElement(
            'div',
            { key: 'card_' + index, className: 'card' },
            _react2.default.createElement(_card2.default, { card: card,
              selected: selected,
              recordActions: recordActions,
              batchActions: batchActions,
              record: record,
              onSelect: onSelect })
          );
        })
      );
    }
  }]);

  return Cards;
}(_react2.default.Component);

Cards.propTypes = {
  records: _react2.default.PropTypes.array,
  card: _react2.default.PropTypes.object,
  selected: _react2.default.PropTypes.array,
  recordActions: _react2.default.PropTypes.array,
  batchActions: _react2.default.PropTypes.array,
  onSelect: _react2.default.PropTypes.func
};
exports.default = Cards;