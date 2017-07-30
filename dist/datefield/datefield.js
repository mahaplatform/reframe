'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _chooser = require('./chooser');

var _chooser2 = _interopRequireDefault(_chooser);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Datefield = function (_React$Component) {
  _inherits(Datefield, _React$Component);

  function Datefield() {
    _classCallCheck(this, Datefield);

    return _possibleConstructorReturn(this, (Datefield.__proto__ || Object.getPrototypeOf(Datefield)).apply(this, arguments));
  }

  _createClass(Datefield, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          placeholder = _props.placeholder,
          value = _props.value;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-datefield' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-datefield-input' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-datefield-icon' },
            _react2.default.createElement('i', { className: 'calendar icon' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-datefield-field', onClick: this._handleBegin.bind(this) },
            value ? value.format('dddd, MMMM DD, YYYY') : _react2.default.createElement(
              'span',
              null,
              placeholder
            )
          ),
          value && _react2.default.createElement(
            'div',
            { className: 'reframe-datefield-remove', onClick: this._handleClear.bind(this) },
            _react2.default.createElement('i', { className: 'remove circle icon' })
          )
        ),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          { transitionName: 'cover', transitionEnterTimeout: 500, transitionLeaveTimeout: 500 },
          active && _react2.default.createElement(_chooser2.default, this.props)
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onSetCurrent = _props2.onSetCurrent,
          onSetValue = _props2.onSetValue;

      if (defaultValue) onSetValue((0, _moment2.default)(defaultValue));
      var current = defaultValue ? (0, _moment2.default)(defaultValue) : (0, _moment2.default)();
      onSetCurrent(parseInt(current.format('MM')) - 1, parseInt(current.format('YYYY')));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          value = _props3.value,
          onChange = _props3.onChange;

      if (prevProps.value !== value) {
        if (value) {
          onChange(value.format('YYYY-MM-DD'));
        } else {
          onChange(value);
        }
      }
    }
  }, {
    key: '_getInput',
    value: function _getInput() {
      var _props4 = this.props,
          placeholder = _props4.placeholder,
          value = _props4.value;

      return {
        type: 'text',
        value: value,
        autoComplete: false,
        placeholder: placeholder
      };
    }
  }, {
    key: '_handleBegin',
    value: function _handleBegin() {
      this.props.onBegin();
    }
  }, {
    key: '_handleClear',
    value: function _handleClear() {
      this.props.onClear();
    }
  }]);

  return Datefield;
}(_react2.default.Component);

Datefield.propTypes = {
  active: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.string,
  month: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  year: _propTypes2.default.number,
  value: _propTypes2.default.instanceOf(Date),
  onBegin: _propTypes2.default.func,
  onClear: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onPrevious: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  onSetCurrent: _propTypes2.default.func,
  onSetValue: _propTypes2.default.func
};
Datefield.defaultProps = {
  placeholder: 'Choose a date...'
};
exports.default = Datefield;