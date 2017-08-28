'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _format = require('../format');

var _format2 = _interopRequireDefault(_format);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lookup = function (_React$Component) {
  _inherits(Lookup, _React$Component);

  function Lookup() {
    _classCallCheck(this, Lookup);

    return _possibleConstructorReturn(this, (Lookup.__proto__ || Object.getPrototypeOf(Lookup)).apply(this, arguments));
  }

  _createClass(Lookup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          chosen = _props.chosen,
          disabled = _props.disabled,
          format = _props.format,
          prompt = _props.prompt;

      var value = chosen ? chosen.text : '';
      return _react2.default.createElement(
        'div',
        { className: 'reframe-lookup-field' },
        chosen && _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-token', onClick: this._handleBegin.bind(this) },
          _react2.default.createElement(_format2.default, _extends({}, chosen, { format: format, value: value }))
        ),
        chosen && _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-field-clear' },
          _react2.default.createElement('i', { className: 'icon circle remove', onClick: this._handleClear.bind(this) })
        ),
        !chosen && _react2.default.createElement('input', { type: 'text',
          disabled: disabled,
          onFocus: this._handleBegin.bind(this),
          value: value,
          placeholder: prompt }),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { 'in': active, classNames: 'cover', timeout: 500, mountOnEnter: true, unmountOnExit: true },
          _react2.default.createElement(_search2.default, this.props)
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          endpoint = _props2.endpoint,
          onLoad = _props2.onLoad;

      if (defaultValue) {
        var params = { $ids: [defaultValue] };
        onLoad(params, endpoint);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          disabled = _props3.disabled,
          onClear = _props3.onClear;

      if (prevProps.disabled !== disabled) onClear();
    }
  }, {
    key: '_handleBegin',
    value: function _handleBegin(e) {
      this.props.onBegin();
      e.target.blur();
      e.preventDefault();
      return false;
    }
  }, {
    key: '_handleClear',
    value: function _handleClear() {
      var _props4 = this.props,
          onClear = _props4.onClear,
          onChange = _props4.onChange;

      onClear();
      onChange();
    }
  }]);

  return Lookup;
}(_react2.default.Component);

Lookup.propTypes = {
  active: _propTypes2.default.bool,
  chosen: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.number,
  endpoint: _propTypes2.default.string,
  format: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),
  prompt: _propTypes2.default.string,
  query: _propTypes2.default.string,
  results: _propTypes2.default.array,
  selected: _propTypes2.default.number,
  sort: _propTypes2.default.string,
  status: _propTypes2.default.string,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onBegin: _propTypes2.default.func,
  onClear: _propTypes2.default.func,
  onCancel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onType: _propTypes2.default.func,
  onLoad: _propTypes2.default.func,
  onLoookup: _propTypes2.default.func
};
exports.default = Lookup;