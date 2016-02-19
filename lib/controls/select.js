'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

    _this.NO_SELECTION = 'EMPTY_' + Math.floor(Math.random() * 999999).toString(36);
    _this.state = {
      value: ''
    };
    _this.deferredSetValue = undefined;
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var cssClass = 'ui selection dropdown';
      if (this.props.asyncStatus === 'AWAITING') {
        cssClass += ' loading';
      }
      return _react2.default.createElement(
        'div',
        { ref: 'control', className: cssClass },
        _react2.default.createElement('input', { type: 'hidden', name: this.props.code }),
        _react2.default.createElement('i', { className: 'dropdown icon' }),
        this.props.placeholder ? _react2.default.createElement(
          'div',
          { className: 'default text', key: 'selection_default' },
          this.props.placeholder
        ) : _react2.default.createElement('div', { className: 'text', key: 'selection_text' }),
        function (elem) {
          if (elem.props.options) {
            return _react2.default.createElement(
              'div',
              { className: 'menu' },
              _this2.props.allowBlank ? _react2.default.createElement(
                'div',
                { key: 'option_none', 'data-value': _this2.NO_SELECTION, className: 'item',
                  style: { color: 'lightgrey' } },
                'No Selection'
              ) : null,
              elem.props.options.map(function (option, index) {
                var icon = option.icon ? _react2.default.createElement('i', { className: 'ui icon ' + option.icon }) : null;
                return _react2.default.createElement(
                  'div',
                  { className: 'item', key: 'option_' + index, 'data-value': option.key },
                  icon,
                  option.value
                );
              })
            );
          }
        }(this)
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.allowBlank && !this.props.defaultValue) {
        $(this.refs.control).dropdown('set selected', _lodash2.default.get(_lodash2.default.first(this.props.options), 'key', null));
      } else {
        $(this.refs.control).dropdown('set selected', this.props.defaultValue);
      }
      $(this.refs.control).dropdown({
        onChange: this.handleChange.bind(this)
      });
      $(this.refs.control).attr('tabIndex', 0);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this3 = this;

      if (nextProps.asyncStatus !== this.props.asyncStatus && nextProps.asyncStatus !== 'AWAITING') {
        _lodash2.default.defer(function () {
          return _this3.setValue(_this3.deferredSetValue || _this3.props.defaultValue || null);
        });
      }
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return $(this.refs.control).dropdown('get value') || this.props.defaultValue || null;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (this.props.asyncStatus === 'AWAITING') {
        this.deferredSetValue = value;
        return;
      }
      $(this.refs.control).dropdown('setting', 'onChange', _lodash2.default.noop);
      $(this.refs.control).dropdown('set selected', value);
      $(this.refs.control).dropdown('setting', 'onChange', this.handleChange.bind(this));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.getValue() === this.NO_SELECTION) {
        $(this.refs.control).dropdown('clear');
      }
      this.props.onChange(this.props.code, event);
      $(this.refs.control).find('.text > span').attr('data-reactid', null);
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      $(this.refs.control).dropdown('setting', 'onChange', _lodash2.default.noop);
      $(this.refs.control).dropdown('clear');
      $(this.refs.control).dropdown('setting', 'onChange', this.handleChange.bind(this));
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.propTypes = {
  code: _react2.default.PropTypes.string,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.oneOfType(_react2.default.PropTypes.string, _react2.default.PropTypes.string),
  asyncStatus: _react2.default.PropTypes.string
};
Select.defaultProps = {
  code: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  allowBlank: true,
  onChange: function onChange() {}
};
exports.default = Select;