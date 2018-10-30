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

var Searchbox = function (_React$Component) {
  _inherits(Searchbox, _React$Component);

  function Searchbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Searchbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Searchbox.__proto__ || Object.getPrototypeOf(Searchbox)).call.apply(_ref, [this].concat(args))), _this), _this._handleChange = _lodash2.default.throttle(_this._handleChange, 500), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Searchbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          q = _props.q;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        _react2.default.createElement(
          'div',
          { className: 'reframe-searchbox-container' },
          icon && _react2.default.createElement(
            'div',
            { className: 'reframe-searchbox-extra', onClick: this._handleIcon.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-fw fa-' + icon })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-searchbox-input' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-searchbox-icon' },
              _react2.default.createElement('i', { className: 'fa fa-search' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-searchbox-field' },
              _react2.default.createElement('input', this._getInput())
            ),
            q.length > 0 && _react2.default.createElement(
              'div',
              { className: 'reframe-searchbox-remove-icon', onClick: this._handleAbort.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-times-circle' })
            )
          )
        )
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var classes = ['reframe-searchbox'];
      if (this.props.active) classes.push('active');
      return classes.join(' ');
    }
  }, {
    key: '_getInput',
    value: function _getInput() {
      var _props2 = this.props,
          prompt = _props2.prompt,
          q = _props2.q;

      return {
        type: 'text',
        placeholder: prompt,
        value: q,
        onFocus: this._handleBegin.bind(this),
        onBlur: this._handleEnd.bind(this),
        onChange: this._handleType.bind(this)
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var q = this.props.q;

      if (q !== prevProps.q) this._handleChange(q);
    }
  }, {
    key: '_handleIcon',
    value: function _handleIcon() {
      this.props.onIcon();
    }
  }, {
    key: '_handleBegin',
    value: function _handleBegin() {
      this.props.onBegin();
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(q) {
      this.props.onChange(q);
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd() {
      this.props.onEnd();
    }
  }, {
    key: '_handleType',
    value: function _handleType(e) {
      var onType = this.props.onType;

      onType(e.target.value);
    }
  }, {
    key: '_handleAbort',
    value: function _handleAbort() {
      this.props.onAbort();
    }
  }]);

  return Searchbox;
}(_react2.default.Component);

Searchbox.propTypes = {
  active: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  prompt: _propTypes2.default.string,
  q: _propTypes2.default.string,
  onAbort: _propTypes2.default.func,
  onBegin: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  onIcon: _propTypes2.default.func,
  onType: _propTypes2.default.func
};
Searchbox.defaultProps = {
  prompt: 'Search...',
  q: '',
  onChange: function onChange(value) {}
};
exports.default = Searchbox;