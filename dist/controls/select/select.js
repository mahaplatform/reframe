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
          items = _props.items,
          tabIndex = _props.tabIndex;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-select', tabIndex: tabIndex },
        items.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { className: _this2._getClass(option), key: 'option_' + index, onClick: _this2._handleClick.bind(_this2, option) },
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
          endpoint = _props2.endpoint,
          options = _props2.options,
          onReady = _props2.onReady,
          onFetchItems = _props2.onFetchItems,
          onSetSelected = _props2.onSetSelected,
          onSetItems = _props2.onSetItems;

      if (defaultValue) onSetSelected(defaultValue);
      if (endpoint) return onFetchItems(endpoint);
      if (options) {
        onSetItems(options);
        onReady();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          selected = _props3.selected,
          status = _props3.status,
          onChange = _props3.onChange,
          onReady = _props3.onReady;

      if (selected !== prevProps.selected) onChange(selected);
      if (status !== prevProps.status && status === 'success') onReady();
    }
  }, {
    key: '_getClass',
    value: function _getClass(option) {
      var selected = this.props.selected;

      var value = _lodash2.default.get(option, this.props.value);
      var classes = ['reframe-select-option'];
      if (value === selected) classes.push('selected');
      return classes.join(' ');
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(option) {
      var value = _lodash2.default.get(option, this.props.value);
      this.props.onChoose(value);
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.propTypes = {
  defaultValue: _propTypes2.default.any,
  multiple: _propTypes2.default.bool,
  endpoint: _propTypes2.default.string,
  items: _propTypes2.default.array,
  options: _propTypes2.default.array,
  selected: _propTypes2.default.any,
  status: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onChoose: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onFetchItems: _propTypes2.default.func,
  onSetSelected: _propTypes2.default.func,
  onSetItems: _propTypes2.default.func
};
Select.defaultProps = {
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {},
  onSubmit: function onSubmit(selected) {}
};
exports.default = Select;