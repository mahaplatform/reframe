'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiSelect = function (_React$Component) {
  _inherits(MultiSelect, _React$Component);

  function MultiSelect(props) {
    _classCallCheck(this, MultiSelect);

    var _this = _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).call(this, props));

    _this.state = {
      value: _lodash2.default.toString(props.defaultValue)
    };
    return _this;
  }

  _createClass(MultiSelect, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'select', ref: 'control' },
        _react2.default.createElement(
          'div',
          { className: 'ui fluid search selection dropdown' },
          _react2.default.createElement(
            'div',
            { className: 'default text' },
            this.props.prompt
          ),
          _react2.default.createElement('i', { className: 'dropdown icon' }),
          function () {
            if (_this2.props.options.length) {
              return _react2.default.createElement(
                'div',
                { className: 'menu' },
                _this2.props.options.map(function (option, index) {
                  return _react2.default.createElement(
                    'div',
                    { key: 'option_' + index, className: 'item', 'data-value': option.key },
                    option.value
                  );
                })
              );
            } else {
              return _react2.default.createElement('div', { className: 'menu' });
            }
          }()
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _jquery2.default)(this.refs.control).find('dropdown').dropdown({
        onChange: this.handleChange.bind(this)
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      (0, _jquery2.default)(this.refs.control).find('dropdown').dropdown('refresh');
      if (prevProps.defaultValue != this.props.defaultValue) {
        this.setState({
          value: this.props.defaultValue
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {
      this.setValue(value);
      this.props.onChange(this.props.code, value);
    }
  }]);

  return MultiSelect;
}(_react2.default.Component);

MultiSelect.propTypes = {
  prompt: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.array,
  disabled: _react2.default.PropTypes.bool,
  placeholder: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};
MultiSelect.defaultProps = {
  prompt: '',
  options: [],
  disabled: false,
  placeholder: '',
  defaultValue: [],
  onChange: function onChange() {}
};
exports.default = MultiSelect;