'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = {
      value: _lodash2.default.toString(props.defaultValue)
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prompt = _props.prompt,
          options = _props.options,
          defaultValue = _props.defaultValue,
          disabled = _props.disabled,
          status = _props.status;

      var classes = ["ui", "fluid", "search", "selection", "dropdown"];
      if (disabled) {
        classes.push('disabled');
      }
      if (status == 'loading') {
        classes.push('loading');
      } else if (status == 'error') {
        classes.push('error');
      }
      return _react2.default.createElement(
        'div',
        { className: 'select', ref: 'control' },
        _react2.default.createElement(
          'div',
          { className: classes.join(' ') },
          defaultValue ? _react2.default.createElement(
            'div',
            { className: 'text' },
            defaultValue
          ) : _react2.default.createElement(
            'div',
            { className: 'default text' },
            prompt
          ),
          _react2.default.createElement('i', { className: 'dropdown icon' }),
          function () {
            return _react2.default.createElement(
              'div',
              { className: 'menu' },
              options.map(function (option, index) {
                return _react2.default.createElement(
                  'div',
                  { key: 'option_' + index, className: option.key == _this2.state.value ? "item active selected" : "item", 'data-value': option.key },
                  option.value
                );
              })
            );
          }()
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.control).find('.dropdown').dropdown({
        onChange: this.handleChange.bind(this)
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      $(this.refs.control).find('.dropdown').dropdown('refresh');
      if (prevProps.defaultValue != this.props.defaultValue) {
        this.setValue(this.props.defaultValue);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      this.setValue(value);
      this.props.onChange(value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.propTypes = {
  prompt: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.array,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  status: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};
Select.defaultProps = {
  prompt: '',
  options: [],
  disabled: false,
  placeholder: '',
  status: 'ready',
  defaultValue: null,
  onChange: function onChange() {}
};
exports.default = Select;