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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = function (_React$Component) {
  (0, _inherits3.default)(Panel, _React$Component);

  function Panel() {
    (0, _classCallCheck3.default)(this, Panel);
    return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Panel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          header = _props.header,
          component = _props.component;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-panel' },
        header && _react2.default.createElement(
          'div',
          { className: 'reframe-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-panel-inner' },
            _lodash2.default.isFunction() ? _react2.default.createElement(header) : header
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-panel-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-panel-inner' },
            _lodash2.default.isFunction(component) ? _react2.default.createElement(component) : component
          )
        )
      );
    }
  }]);
  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  component: _propTypes2.default.any,
  header: _propTypes2.default.any
};
exports.default = Panel;