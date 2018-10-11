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

var _chooser = require('./chooser');

var _chooser2 = _interopRequireDefault(_chooser);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Datefield = function (_React$Component) {
  (0, _inherits3.default)(Datefield, _React$Component);

  function Datefield() {
    (0, _classCallCheck3.default)(this, Datefield);
    return (0, _possibleConstructorReturn3.default)(this, (Datefield.__proto__ || Object.getPrototypeOf(Datefield)).apply(this, arguments));
  }

  (0, _createClass3.default)(Datefield, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prompt = _props.prompt,
          value = _props.value,
          tabIndex = _props.tabIndex;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-datefield' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-datefield-input', tabIndex: tabIndex },
          _react2.default.createElement(
            'div',
            { className: 'reframe-datefield-field', onClick: this._handleBegin.bind(this) },
            value ? value.format('dddd, MMMM DD, YYYY') : _react2.default.createElement(
              'span',
              null,
              prompt
            )
          ),
          value && _react2.default.createElement(
            'div',
            { className: 'reframe-datefield-remove', onClick: this._handleClear.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-times-circle' })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady,
          onSetCurrent = _props2.onSetCurrent,
          onSetValue = _props2.onSetValue;

      if (defaultValue) onSetValue((0, _moment2.default)(defaultValue));
      var current = defaultValue ? (0, _moment2.default)(defaultValue) : (0, _moment2.default)();
      onSetCurrent(parseInt(current.format('MM')) - 1, parseInt(current.format('YYYY')));
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          active = _props3.active,
          value = _props3.value,
          onChange = _props3.onChange;
      var form = this.context.form;

      if (prevProps.value !== value) {
        if (value) {
          onChange(value.format('YYYY-MM-DD'));
        } else {
          onChange(value);
        }
      }
      if (active !== prevProps.active) {
        if (active) {
          form.push(_react2.default.createElement(_chooser2.default, this._getChooser()));
        } else {
          form.pop();
        }
      }
    }
  }, {
    key: '_getInput',
    value: function _getInput() {
      var _props4 = this.props,
          prompt = _props4.prompt,
          value = _props4.value;

      return {
        type: 'text',
        value: value,
        autoComplete: false,
        prompt: prompt
      };
    }
  }, {
    key: '_getChooser',
    value: function _getChooser() {
      return this.props;
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

Datefield.contextTypes = {
  form: _propTypes2.default.object
};
Datefield.propTypes = {
  active: _propTypes2.default.bool,
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  month: _propTypes2.default.number,
  prompt: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  year: _propTypes2.default.number,
  value: _propTypes2.default.any,
  onBegin: _propTypes2.default.func,
  onBusy: _propTypes2.default.func,
  onClear: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  onPrevious: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSetCurrent: _propTypes2.default.func,
  onSetValue: _propTypes2.default.func
};
Datefield.defaultProps = {
  defaultValue: null,
  disabled: false,
  prompt: 'Choose a date',
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {},
  onSet: function onSet() {}
};
exports.default = Datefield;