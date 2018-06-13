'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
      value: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var _props = this.props,
          options = _props.options,
          placeholder = _props.placeholder;

      var option = _lodash2.default.find(options, { 'value': value });
      return _react2.default.createElement(
        'div',
        { className: 'reframe-dropdown ui compact menu' },
        _react2.default.createElement(
          'div',
          { className: 'ui simple dropdown item' },
          option ? _react2.default.createElement(
            'span',
            null,
            option.text
          ) : _react2.default.createElement(
            'span',
            null,
            placeholder
          ),
          _react2.default.createElement('i', { className: 'dropdown icon' }),
          _react2.default.createElement(
            'div',
            { className: 'menu' },
            options.map(function (option, index) {
              return _react2.default.createElement(
                'div',
                { className: 'item', key: 'option_' + index, onClick: _this2._handleClick.bind(_this2, option.value) },
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
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady;

      if (defaultValue) this.setValue(defaultValue);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var value = this.state.value;

      if (value !== prevState.value) {
        this.props.onChange(value);
      }
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(value) {
      this.setValue(value);
      //.reframe-dropdown .dropdown .menu
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }]);

  return Dropdown;
}(_react2.default.Component);

Dropdown.propTypes = {
  defaultValue: _propTypes2.default.string,
  options: _propTypes2.default.array,
  placeholder: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};
Dropdown.defaultProps = {
  placeholder: 'Select an option...',
  defaultValue: null,
  options: [],
  onChange: function onChange(value) {},
  onReady: function onReady() {}
};
exports.default = Dropdown;