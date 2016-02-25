'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cell).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      var classes = !this.props.column.primary ? ['secondary'] : [];
      if (this.props.column.collapsing) {
        classes.push('collapsing');
      }
      if (this.props.column.aligned && _lodash2.default.includes(['left', 'center', 'right'], this.props.column.aligned)) {
        classes.push(this.props.column.aligned + ' aligned');
      }
      var Content = DefaultCell;
      if (this.props.column.cell == 'id') {
        classes.push('collapsing center aligned');
      } else if (this.props.column.cell == 'status') {
        Content = StatusCell;
        classes.push('collapsing');
      } else if (this.props.column.cell == 'price') {
        Content = PriceCell;
        classes.push('collapsing right aligned');
      } else if (this.props.column.cell == 'date') {
        Content = DateCell;
        classes.push('collapsing right aligned');
      } else if (this.props.column.cell == 'datetime') {
        Content = DateTimeCell;
        classes.push('collapsing right aligned');
      } else if (this.props.column.cell == 'check_times') {
        Content = CheckTimesCell;
        classes.push('collapsing center aligned');
      } else if (this.props.column.cell == 'check') {
        Content = CheckCell;
        classes.push('collapsing center aligned');
      } else if (this.props.column.cell == 'capitalize') {
        Content = CapitalizeCell;
      } else if (this.props.column.cell) {
        Content = this.props.column.cell;
      }
      return _react2.default.createElement(
        'td',
        { className: classes.join(' ') },
        _react2.default.createElement(Content, this.props)
      );
    }
  }]);

  return Cell;
}(_react2.default.Component);

var DefaultCell = function DefaultCell(props) {
  return _react2.default.createElement(
    'span',
    null,
    _lodash2.default.get(props, props.column.key)
  );
};

var StatusCell = function StatusCell(props) {
  var status = _lodash2.default.get(props, props.column.key);
  return _react2.default.createElement(
    'span',
    { className: status.toLowerCase() },
    status.toUpperCase()
  );
};

var CheckTimesCell = function CheckTimesCell(props) {
  return _lodash2.default.get(props, props.column.key) ? _react2.default.createElement('i', { className: 'icon green check' }) : _react2.default.createElement('i', { className: 'icon red times' });
};

var CheckCell = function CheckCell(props) {
  return _lodash2.default.get(props, props.column.key) ? _react2.default.createElement('i', { className: 'icon green check' }) : _react2.default.createElement('span', null);
};

var PriceCell = function PriceCell(props) {
  return _react2.default.createElement(
    'span',
    null,
    numeral(_lodash2.default.get(props, props.column.key)).format('$0,0.00')
  );
};

var DateCell = function DateCell(props) {
  var value = _lodash2.default.get(props, props.column.key);
  return _react2.default.createElement(
    'span',
    null,
    value ? moment(new Date(value)).format('MM/DD/YY') : ''
  );
};

var DateTimeCell = function DateTimeCell(props) {
  var value = _lodash2.default.get(props, props.column.key);
  return _react2.default.createElement(
    'span',
    null,
    value ? moment(new Date(value)).format('MM/DD/YY @ hh:mm A') : ''
  );
};

var CapitalizeCell = function CapitalizeCell(props) {
  return _react2.default.createElement(
    'span',
    null,
    _lodash2.default.get(props, props.column.key).toUpperCase()
  );
};

exports.default = Cell;