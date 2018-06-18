'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _token = require('../../components/token');

var _token2 = _interopRequireDefault(_token);

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

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

var Select = function Select(multiple) {
  var Control = function (_React$Component) {
    _inherits(Control, _React$Component);

    function Control() {
      _classCallCheck(this, Control);

      return _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).apply(this, arguments));
    }

    _createClass(Control, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            items = _props.items,
            format = _props.format,
            tabIndex = _props.tabIndex,
            text = _props.text;

        return _react2.default.createElement(
          'div',
          { className: 'reframe-select ui field', tabIndex: tabIndex },
          items.map(function (option, index) {
            return _react2.default.createElement(
              'div',
              _extends({ key: 'option_' + index }, _this2._getItem(option)),
              _react2.default.createElement(
                'div',
                { className: 'reframe-select-option-icon' },
                _react2.default.createElement('i', { className: 'fa fa-fw fa-' + _this2._getItemIcon(option) })
              ),
              _react2.default.createElement(
                'div',
                { className: 'reframe-select-option-label' },
                _react2.default.createElement(_format2.default, _extends({}, option, { format: format, value: _lodash2.default.get(option, text) }))
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
            onSetItems = _props2.onSetItems;

        if (defaultValue) this._handleSetSelected(defaultValue);
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
            multiple = _props3.multiple,
            selected = _props3.selected,
            status = _props3.status,
            onChange = _props3.onChange,
            onReady = _props3.onReady;

        if (status !== prevProps.status && status === 'success') {
          onReady();
        }
        if (selected !== prevProps.selected) {
          var value = multiple ? selected : selected[0];
          onChange(value);
        }
      }
    }, {
      key: '_getItem',
      value: function _getItem(option) {
        return {
          className: this._getItemClass(option),
          onClick: this._handleClick.bind(this, option)
        };
      }
    }, {
      key: '_getSelected',
      value: function _getSelected(option) {
        var selected = this.props.selected;

        var value = _lodash2.default.get(option, this.props.value);
        return _lodash2.default.includes(selected, value);
      }
    }, {
      key: '_getItemClass',
      value: function _getItemClass(option) {
        var classes = ['reframe-select-option'];
        if (this._getSelected(option)) classes.push('selected');
        return classes.join(' ');
      }
    }, {
      key: '_getItemIcon',
      value: function _getItemIcon(option) {
        var multiple = this.props.multiple;

        var selected = this._getSelected(option);
        if (multiple && selected) return 'check-square';
        if (multiple && !selected) return 'square-o';
        if (!multiple && selected) return 'check-circle';
        if (!multiple && !selected) return 'circle-o';
      }
    }, {
      key: '_handleSetSelected',
      value: function _handleSetSelected(defaultValue) {
        var onSetSelected = this.props.onSetSelected;

        var selected = !_lodash2.default.isArray(defaultValue) ? [defaultValue] : defaultValue;
        onSetSelected(selected);
      }
    }, {
      key: '_handleClick',
      value: function _handleClick(option) {
        var _props4 = this.props,
            multiple = _props4.multiple,
            onChoose = _props4.onChoose;

        var value = _lodash2.default.get(option, this.props.value);
        onChoose(multiple, value);
      }
    }]);

    return Control;
  }(_react2.default.Component);

  Control.propTypes = {
    defaultValue: _propTypes2.default.any,
    multiple: _propTypes2.default.bool,
    endpoint: _propTypes2.default.string,
    format: _propTypes2.default.any,
    items: _propTypes2.default.array,
    options: _propTypes2.default.array,
    selected: _propTypes2.default.array,
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
  Control.defaultProps = {
    format: _token2.default,
    multiple: multiple,
    tabIndex: 0,
    value: 'value',
    text: 'text',
    onBusy: function onBusy() {},
    onChange: function onChange() {},
    onReady: function onReady() {},
    onSubmit: function onSubmit(selected) {}
  };


  return Control;
};

exports.default = Select;