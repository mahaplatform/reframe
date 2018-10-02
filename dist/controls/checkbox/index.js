'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          tabIndex = _props.tabIndex;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-checkbox ' + (disabled ? 'toggle-disabled' : ''), tabIndex: tabIndex },
        _react2.default.createElement('i', { className: 'fa fa-fw fa-' + this._getIcon() + ' ' + (disabled ? 'disabled' : ''), onClick: this._handleChange.bind(this) })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady;

      var value = defaultValue || false;
      this.setValue(value);
      if (onReady) onReady();
    }
  }, {
    key: '_getIcon',
    value: function _getIcon() {
      return 'toggle-' + (this.state.value ? 'on' : 'off');
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(value) {
      var _props3 = this.props,
          disabled = _props3.disabled,
          onClick = _props3.onClick;

      if (!disabled) {
        if (onClick) onClick();
        this.setValue(!this.state.value);
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      var onChange = this.props.onChange;

      this.setState({ value: value });
      if (onChange) onChange(value);
    }
  }]);
  return Checkbox;
}(_react2.default.Component);

Checkbox.defaultProps = {
  defaultValue: false,
  disabled: false,
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange(value) {},
  onReady: function onReady() {}
};
exports.default = Checkbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ2hlY2tib3giLCJzdGF0ZSIsInZhbHVlIiwicHJvcHMiLCJkaXNhYmxlZCIsInRhYkluZGV4IiwiX2dldEljb24iLCJfaGFuZGxlQ2hhbmdlIiwiYmluZCIsImRlZmF1bHRWYWx1ZSIsIm9uUmVhZHkiLCJzZXRWYWx1ZSIsIm9uQ2xpY2siLCJvbkNoYW5nZSIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJvbkJ1c3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRU1BLFE7Ozs7Ozs7Ozs7Ozs7O3dNQVdKQyxLLEdBQVE7QUFDTkMsYUFBTztBQURELEs7Ozs7OzZCQUlDO0FBQUEsbUJBQ3dCLEtBQUtDLEtBRDdCO0FBQUEsVUFDQ0MsUUFERCxVQUNDQSxRQUREO0FBQUEsVUFDV0MsUUFEWCxVQUNXQSxRQURYOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssa0NBQWlDRCxRQUFELEdBQWEsaUJBQWIsR0FBaUMsRUFBakUsQ0FBTCxFQUE2RSxVQUFXQyxRQUF4RjtBQUNFLDZDQUFHLDRCQUEyQixLQUFLQyxRQUFMLEVBQTNCLFVBQStDRixRQUFELEdBQWEsVUFBYixHQUEwQixFQUF4RSxDQUFILEVBQWtGLFNBQVUsS0FBS0csYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBNUY7QUFERixPQURGO0FBS0Q7Ozt3Q0FFbUI7QUFBQSxvQkFDZ0IsS0FBS0wsS0FEckI7QUFBQSxVQUNWTSxZQURVLFdBQ1ZBLFlBRFU7QUFBQSxVQUNJQyxPQURKLFdBQ0lBLE9BREo7O0FBRWxCLFVBQU1SLFFBQVFPLGdCQUFnQixLQUE5QjtBQUNBLFdBQUtFLFFBQUwsQ0FBY1QsS0FBZDtBQUNBLFVBQUdRLE9BQUgsRUFBWUE7QUFDYjs7OytCQUVVO0FBQ1QsMEJBQWlCLEtBQUtULEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixJQUFuQixHQUEwQixLQUEzQztBQUNEOzs7a0NBRWFBLEssRUFBTztBQUFBLG9CQUNXLEtBQUtDLEtBRGhCO0FBQUEsVUFDWEMsUUFEVyxXQUNYQSxRQURXO0FBQUEsVUFDRFEsT0FEQyxXQUNEQSxPQURDOztBQUVuQixVQUFHLENBQUNSLFFBQUosRUFBYTtBQUNYLFlBQUdRLE9BQUgsRUFBWUE7QUFDWixhQUFLRCxRQUFMLENBQWMsQ0FBQyxLQUFLVixLQUFMLENBQVdDLEtBQTFCO0FBQ0Q7QUFDRjs7OzZCQUVRQSxLLEVBQU87QUFBQSxVQUNOVyxRQURNLEdBQ08sS0FBS1YsS0FEWixDQUNOVSxRQURNOztBQUVkLFdBQUtDLFFBQUwsQ0FBYyxFQUFFWixZQUFGLEVBQWQ7QUFDQSxVQUFHVyxRQUFILEVBQWFBLFNBQVNYLEtBQVQ7QUFDZDs7O0VBL0NvQmEsZ0JBQU1DLFM7O0FBQXZCaEIsUSxDQUVHaUIsWSxHQUFlO0FBQ3BCUixnQkFBYyxLQURNO0FBRXBCTCxZQUFVLEtBRlU7QUFHcEJDLFlBQVUsQ0FIVTtBQUlwQmEsVUFBUSxrQkFBTSxDQUFFLENBSkk7QUFLcEJMLFlBQVUsa0JBQUNYLEtBQUQsRUFBMEIsQ0FBRSxDQUxsQjtBQU1wQlEsV0FBUyxtQkFBTSxDQUFFO0FBTkcsQztrQkFpRFRWLFEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdGFiSW5kZXg6IDAsXG4gICAgb25CdXN5OiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKHZhbHVlOiBib29sZWFuKTogdm9pZCA9PiB7fSxcbiAgICBvblJlYWR5OiAoKSA9PiB7fVxuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgdmFsdWU6IGZhbHNlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNhYmxlZCwgdGFiSW5kZXggfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBgcmVmcmFtZS1jaGVja2JveCAkeyhkaXNhYmxlZCkgPyAndG9nZ2xlLWRpc2FibGVkJyA6ICcnfWAgfSB0YWJJbmRleD17IHRhYkluZGV4IH0+XG4gICAgICAgIDxpIGNsYXNzTmFtZT17IGBmYSBmYS1mdyBmYS0ke3RoaXMuX2dldEljb24oKX0gJHsoZGlzYWJsZWQpID8gJ2Rpc2FibGVkJyA6ICcnfWAgfSBvbkNsaWNrPXsgdGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcykgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIG9uUmVhZHkgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB2YWx1ZSA9IGRlZmF1bHRWYWx1ZSB8fCBmYWxzZVxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpXG4gICAgaWYob25SZWFkeSkgb25SZWFkeSgpXG4gIH1cblxuICBfZ2V0SWNvbigpIHtcbiAgICByZXR1cm4gYHRvZ2dsZS0ke3RoaXMuc3RhdGUudmFsdWUgPyAnb24nIDogJ29mZid9YFxuICB9XG5cbiAgX2hhbmRsZUNoYW5nZSh2YWx1ZSkge1xuICAgIGNvbnN0IHsgZGlzYWJsZWQsIG9uQ2xpY2sgfSA9IHRoaXMucHJvcHNcbiAgICBpZighZGlzYWJsZWQpe1xuICAgICAgaWYob25DbGljaykgb25DbGljaygpXG4gICAgICB0aGlzLnNldFZhbHVlKCF0aGlzLnN0YXRlLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wc1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KVxuICAgIGlmKG9uQ2hhbmdlKSBvbkNoYW5nZSh2YWx1ZSlcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94XG4iXX0=