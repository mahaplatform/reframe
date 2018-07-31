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

var Searchbox = function (_React$Component) {
  (0, _inherits3.default)(Searchbox, _React$Component);

  function Searchbox() {
    (0, _classCallCheck3.default)(this, Searchbox);
    return (0, _possibleConstructorReturn3.default)(this, (Searchbox.__proto__ || Object.getPrototypeOf(Searchbox)).apply(this, arguments));
  }

  (0, _createClass3.default)(Searchbox, [{
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleChange = _lodash2.default.throttle(this.props.onChange, 500);
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