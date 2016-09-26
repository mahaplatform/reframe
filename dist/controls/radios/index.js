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

var Radios = function (_React$Component) {
  _inherits(Radios, _React$Component);

  function Radios(props) {
    _classCallCheck(this, Radios);

    var _this = _possibleConstructorReturn(this, (Radios.__proto__ || Object.getPrototypeOf(Radios)).call(this, props));

    _this.state = {
      value: props.defaultValue
    };
    return _this;
  }

  _createClass(Radios, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.props.options;

      return _react2.default.createElement(
        'div',
        { className: 'radios', ref: 'control' },
        function () {
          if (options.length) {
            return _react2.default.createElement(
              'div',
              { className: 'grouped fields' },
              options.map(function (option, index) {
                return _react2.default.createElement(
                  'div',
                  { key: 'option_' + index, className: 'field' },
                  _react2.default.createElement(
                    'div',
                    { className: 'ui radio checkbox', 'data-value': option.key },
                    _react2.default.createElement('input', { className: 'hidden',
                      type: 'radio',
                      name: 'radio',
                      defaultChecked: _lodash2.default.isEqual(_this2.state.value, option.key),
                      defaultValue: option.key }),
                    _react2.default.createElement(
                      'label',
                      null,
                      option.value
                    )
                  )
                );
              })
            );
          } else {
            return _react2.default.createElement('div', { className: 'grouped fields' });
          }
        }()
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var defaultValue = this.props.defaultValue;

      $(this.refs.control).find('.checkbox').checkbox({
        onChange: this.handleChange.bind(this)
      });
      if (defaultValue) {
        $(this.refs.control).checkbox('set checked', defaultValue);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      $(this.refs.control).find('.checkbox').checkbox('refresh');
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var value = $(this.refs.control).find('.checkbox input:checked').val();
      this.setValue(value);
      this.props.onChange(value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({ value: value });
    }
  }]);

  return Radios;
}(_react2.default.Component);

Radios.propTypes = {
  options: _react2.default.PropTypes.array,
  defaultValue: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};
Radios.defaultProps = {
  options: [],
  defaultValue: null,
  onChange: function onChange() {}
};
exports.default = Radios;