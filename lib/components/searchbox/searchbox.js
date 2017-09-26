'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchbox = function (_React$Component) {
  _inherits(Searchbox, _React$Component);

  function Searchbox(props) {
    _classCallCheck(this, Searchbox);

    var _this = _possibleConstructorReturn(this, (Searchbox.__proto__ || Object.getPrototypeOf(Searchbox)).call(this, props));

    _this._handleChange = null;

    _this._handleChange = _lodash2.default.throttle(props.onChange, 500);
    return _this;
  }

  _createClass(Searchbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prompt = _props.prompt,
          q = _props.q;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-searchbox' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-searchbox-icon' },
          _react2.default.createElement('i', { className: 'search icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-searchbox-input' },
          _react2.default.createElement(
            'div',
            { className: 'ui input' },
            _react2.default.createElement('input', { type: 'text', placeholder: prompt, onChange: this._handleType.bind(this), value: q })
          )
        ),
        q && q.length > 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-searchbox-icon', onClick: this._handleAbort.bind(this) },
          _react2.default.createElement('i', { className: 'remove circle icon' })
        )
      );
    }
  }, {
    key: '_handleType',
    value: function _handleType(e) {
      var onType = this.props.onType;

      if (onType) onType(e.target.value);
      this._handleChange(e.target.value);
    }
  }, {
    key: '_handleAbort',
    value: function _handleAbort() {
      var _props2 = this.props,
          onAbort = _props2.onAbort,
          onChange = _props2.onChange;

      if (onAbort) onAbort();
      if (onChange) onChange('');
    }
  }]);

  return Searchbox;
}(_react2.default.Component);

Searchbox.defaultProps = {
  prompt: 'Search...',
  q: '',
  onAbort: function onAbort() {},
  onChange: function onChange(q) {},
  onType: function onType(q) {}
};
exports.default = Searchbox;