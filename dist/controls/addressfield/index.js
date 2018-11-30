'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var AddressField = function (_React$Component) {
  _inherits(AddressField, _React$Component);

  function AddressField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AddressField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddressField.__proto__ || Object.getPrototypeOf(AddressField)).call.apply(_ref, [this].concat(args))), _this), _this.street1 = null, _this.street2 = null, _this.city = null, _this.province = null, _this.postalcode = null, _this.state = {
      street1: '',
      street2: '',
      city: '',
      province: '',
      postalcode: ''
    }, _this._handleChange = _this._handleChange.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddressField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          street1 = _state.street1,
          street2 = _state.street2,
          city = _state.city,
          province = _state.province,
          postalcode = _state.postalcode;

      return _react2.default.createElement(
        'div',
        { className: 'addressfield' },
        _react2.default.createElement(
          'div',
          { className: 'ui field' },
          _react2.default.createElement('input', { className: 'ui input', type: 'text', placeholder: 'Street 1', defaultValue: street1, onChange: this._handleChange, ref: function ref(node) {
              return _this2.street1 = node;
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui field' },
          _react2.default.createElement('input', { className: 'ui input', type: 'text', placeholder: 'Street 2', defaultValue: street2, onChange: this._handleChange, ref: function ref(node) {
              return _this2.street2 = node;
            } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui three fields' },
          _react2.default.createElement(
            'div',
            { className: 'ui field' },
            _react2.default.createElement('input', { className: 'ui input', type: 'text', placeholder: 'City', defaultValue: city, onChange: this._handleChange, ref: function ref(node) {
                return _this2.city = node;
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui field' },
            _react2.default.createElement('input', { className: 'ui input', type: 'text', placeholder: 'State/Province', defaultValue: province, onChange: this._handleChange, ref: function ref(node) {
                return _this2.province = node;
              } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'ui field' },
            _react2.default.createElement('input', { className: 'ui input', type: 'text', placeholder: 'Postal Code', defaultValue: postalcode, onChange: this._handleChange, ref: function ref(node) {
                return _this2.postalcode = node;
              } })
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

      if (defaultValue) this.setState(defaultValue);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (!_lodash2.default.isEqual(this.state, prevState)) {
        this.props.onChange(this.state);
      }
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      this.setState({
        street1: this.street1.value,
        street2: this.street2.value,
        city: this.city.value,
        province: this.province.value,
        postalcode: this.postalcode.value
      });
    }
  }]);

  return AddressField;
}(_react2.default.Component);

AddressField.propTypes = {
  defaultValue: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
exports.default = AddressField;