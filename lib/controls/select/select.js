'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          options = _props.options,
          tabIndex = _props.tabIndex;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-select', tabIndex: tabIndex },
        options.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { className: _this2._getClass(option), key: 'option_' + index, onClick: _this2._handleClick.bind(_this2, option.value) },
            option.icon && _react2.default.createElement(
              'div',
              { className: 'reframe-select-option-icon' },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-' + option.icon })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-select-option-label' },
              option.title && _react2.default.createElement(
                'strong',
                null,
                option.title,
                _react2.default.createElement('br', null)
              ),
              option.text
            )
          );
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady,
          onSet = _props2.onSet;

      if (defaultValue) onSet(defaultValue);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          selected = _props3.selected,
          onChange = _props3.onChange;

      if (selected !== prevProps.selected) onChange(selected);
    }
  }, {
    key: '_getClass',
    value: function _getClass(option) {
      var selected = this.props.selected;

      var classes = ['reframe-select-option'];
      if (option.value === selected) classes.push('selected');
      return classes.join(' ');
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(value) {
      this.props.onChoose(value);
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.propTypes = {
  defaultValue: _propTypes2.default.any,
  multiple: _propTypes2.default.bool,
  options: _propTypes2.default.array,
  selected: _propTypes2.default.any,
  tabIndex: _propTypes2.default.number,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSet: _propTypes2.default.func
};
Select.defaultProps = {
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {},
  onSubmit: function onSubmit(selected) {}
};
exports.default = Select;