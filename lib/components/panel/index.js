'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          header = _props.header,
          component = _props.component;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-panel-inner' },
          header && _react2.default.createElement(
            'div',
            { className: 'reframe-panel-header' },
            _lodash2.default.isFunction() ? _react2.default.createElement(header) : header
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-panel-body' },
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