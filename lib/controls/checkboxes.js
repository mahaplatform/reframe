'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkboxes = function (_React$Component) {
  _inherits(Checkboxes, _React$Component);

  function Checkboxes(props) {
    _classCallCheck(this, Checkboxes);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkboxes).call(this, props));

    _this.state = { value: props.defaultValue || null };
    return _this;
  }

  _createClass(Checkboxes, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var name = this.props.code + '[]';
      return _react2.default.createElement(
        'div',
        { className: 'grouped fields', ref: 'control' },
        this.props.options.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { key: 'option_' + index, className: 'field' },
            _react2.default.createElement(
              'div',
              { className: 'ui checkbox', 'data-value': option.key },
              _react2.default.createElement('input', {
                defaultValue: _this2.props.defaultValue,
                className: 'hidden',
                name: name,
                type: 'checkbox',
                value: option.key }),
              _react2.default.createElement(
                'label',
                null,
                option.value
              )
            )
          );
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.control).find('.checkbox').checkbox({
        onChange: this.handleChange.bind(this)
      });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var values = $(this.refs.control).find('.checkbox input:checked').toArray().map(function (cb) {
        return $(cb).val();
      });
      return values;
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var _this3 = this;

      $(this.refs.control).find('.checkbox').checkbox('set unchecked');
      if (_.isArray(value)) {
        _.each(value, function (v) {
          $(_this3.refs.control).find('.checkbox[data-value*=' + v + ']').checkbox('set checked');
        });
      } else {
        $(this.refs.control).find('.checkbox[data-value*=' + v + ']').checkbox('set checked');
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.props.onChange(this.props.code, this.getValue());
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      $(this.refs.control).find('.checkbox').checkbox('set unchecked');
    }
  }, {
    key: 'getReference',
    value: function getReference() {
      return _defineProperty({}, this.props.code, this);
    }
  }]);

  return Checkboxes;
}(_react2.default.Component);

Checkboxes.defaultProps = {
  onChange: function onChange() {},
  options: []
};
exports.default = Checkboxes;