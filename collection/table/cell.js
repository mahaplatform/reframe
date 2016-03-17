'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _numeral = require('numeral');

var _numeral2 = _interopRequireDefault(_numeral);

var _format = require('../../format');

var _format2 = _interopRequireDefault(_format);

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
      if (this.props.column.cell == 'id') {
        classes.push('collapsing center aligned');
      } else if (this.props.column.cell == 'status') {
        classes.push('collapsing');
      } else if (this.props.column.cell == 'price') {
        classes.push('collapsing right aligned');
      } else if (this.props.column.cell == 'date') {
        classes.push('collapsing right aligned');
      } else if (this.props.column.cell == 'datetime') {
        classes.push('collapsing right aligned');
      } else if (this.props.column.cell == 'check_times') {
        classes.push('collapsing center aligned');
      } else if (this.props.column.cell == 'check') {
        classes.push('collapsing center aligned');
      }
      var value = _lodash2.default.get(this.props, this.props.column.key);
      var format = this.props.column.cell;
      return _react2.default.createElement(
        'td',
        { className: classes.join(' ') },
        _react2.default.createElement(_format2.default, _extends({}, this.props, { format: format, value: value }))
      );
    }
  }]);

  return Cell;
}(_react2.default.Component);

exports.default = Cell;