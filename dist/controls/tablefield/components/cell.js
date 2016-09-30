'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _control = require('../../control');

var _control2 = _interopRequireDefault(_control);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cell = function (_React$Component) {
  _inherits(Cell, _React$Component);

  function Cell() {
    _classCallCheck(this, Cell);

    return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
  }

  _createClass(Cell, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var code = _props.code;
      var type = _props.type;
      var options = _props.options;
      var defaultValue = _props.defaultValue;

      return _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(_control2.default, { code: code,
          type: type,
          options: options,
          defaultValue: defaultValue,
          onChange: this._handleUpdateCell.bind(this) })
      );
    }
  }, {
    key: '_handleUpdateCell',
    value: function _handleUpdateCell(value) {
      var _props2 = this.props;
      var index = _props2.index;
      var code = _props2.code;
      var onUpdateCell = _props2.onUpdateCell;

      onUpdateCell(index, code, value);
    }
  }]);

  return Cell;
}(_react2.default.Component);

Cell.propTypes = {
  index: _react2.default.PropTypes.number,
  code: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.array,
  defaultValue: _react2.default.PropTypes.string,
  onUpdateCell: _react2.default.PropTypes.func
};
exports.default = Cell;