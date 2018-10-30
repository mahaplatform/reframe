'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Progress = function (_React$Component) {
  _inherits(Progress, _React$Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  _createClass(Progress, [{
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