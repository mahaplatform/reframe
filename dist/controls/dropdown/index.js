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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false,
      value: null,
      animating: false
    }, _this._handleOpen = _this._handleOpen.bind(_this), _this._handleClose = _this._handleClose.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.props.options;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-dropdown' },
        _react2.default.createElement(
          'div',
          { className: this._getDropdownClass(), onClick: this._handleOpen },
          _react2.default.createElement(
            'div',
            { className: 'text', onClick: this._handleOpen },
            this._getLabel()
          ),
          _react2.default.createElement('i', { className: 'dropdown icon' }),
          _react2.default.createElement(
            'div',
            { className: this._getMenuClass() },
            options.map(function (option, index) {
              return _react2.default.createElement(
                'div',
                _extends({ key: 'option_' + index }, _this2._getOption(option)),
                option.text
              );
            })
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onReady = _props.onReady;

      if (defaultValue) this.setValue(defaultValue);
      document.addEventListener('mousedown', this._handleClose);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      var _state = this.state,
          active = _state.active,
          value = _state.value;

      if (value !== prevState.value) {
        this.props.onChange(value);
      }
      if (active !== prevState.active) {
        this.setState({
          animating: true
        });
        setTimeout(function () {
          return _this3.setState({
            animating: false
          });
        }, 250);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this._handleClose);
    }
  }, {
    key: '_getDropdownClass',
    value: function _getDropdownClass() {
      var _state2 = this.state,
          animating = _state2.animating,
          active = _state2.active;

      var classes = ['ui', 'fluid', 'selection', 'dropdown'];
      if (active) classes.push('active');
      if (active && !animating) classes.push('visible');
      if (!active && animating) classes.push('visible');
      return classes.join(' ');
    }
  }, {
    key: '_getMenuClass',
    value: function _getMenuClass() {
      var _state3 = this.state,
          active = _state3.active,
          animating = _state3.animating;

      var classes = ['menu', 'transition'];
      if (!animating && !active) classes.push('hidden');
      if (animating || active) classes.push('visible');
      if (animating && active) classes.push('animating slide down in');
      if (animating && !active) classes.push('animating slide down out');
      return classes.join(' ');
    }
  }, {
    key: '_getLabel',
    value: function _getLabel() {
      var value = this.state.value;
      var _props2 = this.props,
          options = _props2.options,
          placeholder = _props2.placeholder;

      var option = _lodash2.default.find(options, { value: value });
      return option ? option.text : placeholder;
    }
  }, {
    key: '_getOption',
    value: function _getOption(option) {
      return {
        className: 'item',
        onClick: this._handleChoose.bind(this, option.value)
      };
    }
  }, {
    key: '_handleOpen',
    value: function _handleOpen(e) {
      var active = this.state.active;

      if (active || e.target.className === 'item') return;
      this.setState({
        active: true
      });
    }
  }, {
    key: '_handleClose',
    value: function _handleClose(e) {
      var active = this.state.active;

      var reserved = ['item', 'text', 'dropdown icon', 'ui selection dropdown active visible'];
      if (!active || _lodash2.default.includes(reserved, e.target.className)) return;
      this.setState({
        active: false
      });
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(value) {
      this.setValue(value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({
        value: value,
        active: false
      });
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

Dropdown.propTypes = {
  defaultValue: _propTypes2.default.string,
  options: _propTypes2.default.array,
  placeholder: _propTypes2.default.string,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
Dropdown.defaultProps = {
  placeholder: 'Select an option...',
  defaultValue: null,
  options: [],
  onBusy: function onBusy(value) {},
  onChange: function onChange(value) {},
  onReady: function onReady() {}
};
exports.default = Dropdown;