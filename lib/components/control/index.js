'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _controls = require('../../controls');

var Controls = _interopRequireWildcard(_controls);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var standard = Object.keys(Controls).reduce(function (standard, name) {
  return _extends({}, standard, _defineProperty({}, name.toLowerCase(), Controls[name]));
}, {});

var Control = function (_React$Component) {
  _inherits(Control, _React$Component);

  function Control() {
    _classCallCheck(this, Control);

    return _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).apply(this, arguments));
  }

  _createClass(Control, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reframe-control' },
        _react2.default.createElement(this._getElement(), this.props)
      );
    }
  }, {
    key: '_getElement',
    value: function _getElement() {
      var type = this.props.type;

      return _lodash2.default.isString(type) ? _lodash2.default.get(standard, type) : type;
    }
  }]);

  return Control;
}(_react2.default.Component);

Control.propTypes = {
  type: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  endpoint: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  options: _propTypes2.default.array,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
Control.defaultProps = {
  type: 'textfield',
  options: []
};
exports.default = Control;