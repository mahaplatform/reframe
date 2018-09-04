'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function (_React$Component) {
  (0, _inherits3.default)(Progress, _React$Component);

  function Progress() {
    (0, _classCallCheck3.default)(this, Progress);
    return (0, _possibleConstructorReturn3.default)(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  (0, _createClass3.default)(Progress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          title = _props.title,
          text = _props.text;

      var percent = this._getPercent();
      return _react2.default.createElement(
        'div',
        { className: 'reframe-progress' },
        _react2.default.createElement(
          'div',
          { className: 'pie p' + percent },
          _react2.default.createElement(
            'span',
            null,
            label || percent + '%'
          ),
          _react2.default.createElement(
            'div',
            { className: 'slice' },
            _react2.default.createElement('div', { className: 'bar' }),
            _react2.default.createElement('div', { className: 'fill' })
          )
        ),
        title && _react2.default.createElement(
          'h3',
          null,
          title
        ),
        text && _react2.default.createElement(
          'p',
          null,
          text
        )
      );
    }
  }, {
    key: '_getPercent',
    value: function _getPercent() {
      var percent = this.props.percent;

      return parseInt(percent);
    }
  }]);
  return Progress;
}(_react2.default.Component);

Progress.propTypes = {
  label: _propTypes2.default.string,
  percent: _propTypes2.default.number,
  text: _propTypes2.default.string,
  title: _propTypes2.default.string
};
exports.default = Progress;