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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function (_React$Component) {
  (0, _inherits3.default)(TextField, _React$Component);

  function TextField(props) {
    (0, _classCallCheck3.default)(this, TextField);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).call(this, props));

    _this.state = {
      value: _lodash2.default.toString(props.defaultValue)
    };
    return _this;
  }

  (0, _createClass3.default)(TextField, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        this.props.prefix && _react2.default.createElement(
          'div',
          { className: 'ui label' },
          this.props.prefix
        ),
        _react2.default.createElement('input', this._getControl()),
        this.props.suffix && _react2.default.createElement(
          'div',
          { className: 'ui label' },
          this.props.suffix
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.defaultValue != this.props.defaultValue) {
        this.setValue(this.props.defaultValue);
      }
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var _props = this.props,
          prefix = _props.prefix,
          suffix = _props.suffix;

      var classes = ['reframe-textfield', 'ui', 'fluid', 'input'];
      if (prefix) classes.push('left labeled');
      if (suffix) classes.push('right labeled');
      return classes.join(' ');
    }
  }, {
    key: '_getControl',
    value: function _getControl() {
      var _props2 = this.props,
          autoComplete = _props2.autoComplete,
          disabled = _props2.disabled,
          placeholder = _props2.placeholder,
          tabIndex = _props2.tabIndex,
          onBlur = _props2.onBlur,
          onFocus = _props2.onFocus,
          onKeyPress = _props2.onKeyPress,
          onKeyDown = _props2.onKeyDown;
      var value = this.state.value;

      return {
        tabIndex: tabIndex,
        type: 'text',
        disabled: disabled,
        value: value,
        autoComplete: autoComplete,
        placeholder: placeholder,
        onChange: this._handleChange.bind(this),
        onBlur: onBlur,
        onFocus: onFocus,
        onKeyPress: onKeyPress,
        onKeyUp: this._handleKeyUp.bind(this),
        onKeyDown: onKeyDown
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(event) {
      var sanitized = this.props.sanitize(event.target.value);
      if (!this.props.validate(sanitized)) {
        event.preventDefault();
        return false;
      }
      this.setValue(sanitized);
      this.props.onChange(sanitized);
    }
  }, {
    key: '_handleKeyUp',
    value: function _handleKeyUp(event) {
      this.props.onKeyUp(this.state.value);
      if (event.which == 13) {
        event.preventDefault();
        this.props.onSubmit();
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (!(this.props.maxLength && value.length > this.props.maxLength)) {
        this.setState({ value: value });
      }
    }
  }]);
  return TextField;
}(_react2.default.Component);

TextField.propTypes = {
  autoComplete: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  maxLength: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  prefix: _propTypes2.default.string,
  sanitize: _propTypes2.default.func,
  suffix: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  trim: _propTypes2.default.bool,
  validate: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func
};
TextField.defaultProps = {
  autoComplete: 'off',
  defaultValue: '',
  disabled: false,
  maxLength: null,
  placeholder: '',
  prefix: null,
  sanitize: function sanitize(value) {
    return value;
  },
  suffix: null,
  tabIndex: 0,
  trim: true,
  validate: function validate(value) {
    return true;
  },
  onBlur: function onBlur() {},
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  onKeyDown: function onKeyDown() {},
  onReady: function onReady() {},
  onSubmit: function onSubmit() {}
};
exports.default = TextField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwicHJvcHMiLCJzdGF0ZSIsInZhbHVlIiwiXyIsInRvU3RyaW5nIiwiZGVmYXVsdFZhbHVlIiwiX2dldENsYXNzIiwicHJlZml4IiwiX2dldENvbnRyb2wiLCJzdWZmaXgiLCJvblJlYWR5IiwicHJldlByb3BzIiwic2V0VmFsdWUiLCJjbGFzc2VzIiwicHVzaCIsImpvaW4iLCJhdXRvQ29tcGxldGUiLCJkaXNhYmxlZCIsInBsYWNlaG9sZGVyIiwidGFiSW5kZXgiLCJvbkJsdXIiLCJvbkZvY3VzIiwib25LZXlQcmVzcyIsIm9uS2V5RG93biIsInR5cGUiLCJvbkNoYW5nZSIsIl9oYW5kbGVDaGFuZ2UiLCJiaW5kIiwib25LZXlVcCIsIl9oYW5kbGVLZXlVcCIsImV2ZW50Iiwic2FuaXRpemVkIiwic2FuaXRpemUiLCJ0YXJnZXQiLCJ2YWxpZGF0ZSIsInByZXZlbnREZWZhdWx0Iiwid2hpY2giLCJvblN1Ym1pdCIsIm1heExlbmd0aCIsImxlbmd0aCIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwibnVtYmVyIiwiZnVuYyIsInRyaW0iLCJvbkJ1c3kiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxTOzs7QUFnREoscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxvSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU9DLGlCQUFFQyxRQUFGLENBQVdKLE1BQU1LLFlBQWpCO0FBREksS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBWSxLQUFLQyxTQUFMLEVBQWpCO0FBQ0ksYUFBS04sS0FBTCxDQUFXTyxNQUFYLElBQXFCO0FBQUE7QUFBQSxZQUFLLFdBQVUsVUFBZjtBQUEyQixlQUFLUCxLQUFMLENBQVdPO0FBQXRDLFNBRHpCO0FBRUUsK0NBQVksS0FBS0MsV0FBTCxFQUFaLENBRkY7QUFHSSxhQUFLUixLQUFMLENBQVdTLE1BQVgsSUFBcUI7QUFBQTtBQUFBLFlBQUssV0FBVSxVQUFmO0FBQTJCLGVBQUtULEtBQUwsQ0FBV1M7QUFBdEM7QUFIekIsT0FERjtBQU9EOzs7d0NBRW1CO0FBQ2xCLFdBQUtULEtBQUwsQ0FBV1UsT0FBWDtBQUNEOzs7dUNBRWtCQyxTLEVBQVc7QUFDNUIsVUFBR0EsVUFBVU4sWUFBVixJQUEwQixLQUFLTCxLQUFMLENBQVdLLFlBQXhDLEVBQXNEO0FBQ3BELGFBQUtPLFFBQUwsQ0FBYyxLQUFLWixLQUFMLENBQVdLLFlBQXpCO0FBQ0Q7QUFDRjs7O2dDQUVXO0FBQUEsbUJBQ2lCLEtBQUtMLEtBRHRCO0FBQUEsVUFDRk8sTUFERSxVQUNGQSxNQURFO0FBQUEsVUFDTUUsTUFETixVQUNNQSxNQUROOztBQUVWLFVBQU1JLFVBQVUsQ0FBQyxtQkFBRCxFQUFxQixJQUFyQixFQUEwQixPQUExQixFQUFrQyxPQUFsQyxDQUFoQjtBQUNBLFVBQUdOLE1BQUgsRUFBV00sUUFBUUMsSUFBUixDQUFhLGNBQWI7QUFDWCxVQUFHTCxNQUFILEVBQVdJLFFBQVFDLElBQVIsQ0FBYSxlQUFiO0FBQ1gsYUFBT0QsUUFBUUUsSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNEOzs7a0NBRWE7QUFBQSxvQkFDc0YsS0FBS2YsS0FEM0Y7QUFBQSxVQUNKZ0IsWUFESSxXQUNKQSxZQURJO0FBQUEsVUFDVUMsUUFEVixXQUNVQSxRQURWO0FBQUEsVUFDb0JDLFdBRHBCLFdBQ29CQSxXQURwQjtBQUFBLFVBQ2lDQyxRQURqQyxXQUNpQ0EsUUFEakM7QUFBQSxVQUMyQ0MsTUFEM0MsV0FDMkNBLE1BRDNDO0FBQUEsVUFDbURDLE9BRG5ELFdBQ21EQSxPQURuRDtBQUFBLFVBQzREQyxVQUQ1RCxXQUM0REEsVUFENUQ7QUFBQSxVQUN3RUMsU0FEeEUsV0FDd0VBLFNBRHhFO0FBQUEsVUFFSnJCLEtBRkksR0FFTSxLQUFLRCxLQUZYLENBRUpDLEtBRkk7O0FBR1osYUFBTztBQUNMaUIsMEJBREs7QUFFTEssY0FBTSxNQUZEO0FBR0xQLDBCQUhLO0FBSUxmLG9CQUpLO0FBS0xjLGtDQUxLO0FBTUxFLGdDQU5LO0FBT0xPLGtCQUFVLEtBQUtDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBUEw7QUFRTFAsc0JBUks7QUFTTEMsd0JBVEs7QUFVTEMsOEJBVks7QUFXTE0saUJBQVMsS0FBS0MsWUFBTCxDQUFrQkYsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FYSjtBQVlMSjtBQVpLLE9BQVA7QUFjRDs7O2tDQUVhTyxLLEVBQU87QUFDbkIsVUFBTUMsWUFBWSxLQUFLL0IsS0FBTCxDQUFXZ0MsUUFBWCxDQUFvQkYsTUFBTUcsTUFBTixDQUFhL0IsS0FBakMsQ0FBbEI7QUFDQSxVQUFHLENBQUMsS0FBS0YsS0FBTCxDQUFXa0MsUUFBWCxDQUFvQkgsU0FBcEIsQ0FBSixFQUFvQztBQUNsQ0QsY0FBTUssY0FBTjtBQUNBLGVBQU8sS0FBUDtBQUNEO0FBQ0QsV0FBS3ZCLFFBQUwsQ0FBY21CLFNBQWQ7QUFDQSxXQUFLL0IsS0FBTCxDQUFXeUIsUUFBWCxDQUFvQk0sU0FBcEI7QUFDRDs7O2lDQUVZRCxLLEVBQU87QUFDbEIsV0FBSzlCLEtBQUwsQ0FBVzRCLE9BQVgsQ0FBbUIsS0FBSzNCLEtBQUwsQ0FBV0MsS0FBOUI7QUFDQSxVQUFHNEIsTUFBTU0sS0FBTixJQUFlLEVBQWxCLEVBQXNCO0FBQ3BCTixjQUFNSyxjQUFOO0FBQ0EsYUFBS25DLEtBQUwsQ0FBV3FDLFFBQVg7QUFDRDtBQUNGOzs7NkJBRVFuQyxLLEVBQU87QUFDZCxVQUFHLEVBQUUsS0FBS0YsS0FBTCxDQUFXc0MsU0FBWCxJQUF3QnBDLE1BQU1xQyxNQUFOLEdBQWUsS0FBS3ZDLEtBQUwsQ0FBV3NDLFNBQXBELENBQUgsRUFBbUU7QUFDakUsYUFBS0UsUUFBTCxDQUFjLEVBQUN0QyxZQUFELEVBQWQ7QUFDRDtBQUNGOzs7RUE1SHFCdUMsZ0JBQU1DLFM7O0FBQXhCM0MsUyxDQUVHNEMsUyxHQUFZO0FBQ2pCM0IsZ0JBQWM0QixvQkFBVUMsTUFEUDtBQUVqQnhDLGdCQUFjdUMsb0JBQVVDLE1BRlA7QUFHakI1QixZQUFVMkIsb0JBQVVFLElBSEg7QUFJakJSLGFBQVdNLG9CQUFVRyxNQUpKO0FBS2pCN0IsZUFBYTBCLG9CQUFVQyxNQUxOO0FBTWpCdEMsVUFBUXFDLG9CQUFVQyxNQU5EO0FBT2pCYixZQUFVWSxvQkFBVUksSUFQSDtBQVFqQnZDLFVBQVFtQyxvQkFBVUMsTUFSRDtBQVNqQjFCLFlBQVV5QixvQkFBVUcsTUFUSDtBQVVqQkUsUUFBTUwsb0JBQVVFLElBVkM7QUFXakJaLFlBQVVVLG9CQUFVSSxJQVhIO0FBWWpCNUIsVUFBUXdCLG9CQUFVSSxJQVpEO0FBYWpCRSxVQUFRTixvQkFBVUksSUFiRDtBQWNqQnZCLFlBQVVtQixvQkFBVUksSUFkSDtBQWVqQjNCLFdBQVN1QixvQkFBVUksSUFmRjtBQWdCakIxQixjQUFZc0Isb0JBQVVJLElBaEJMO0FBaUJqQnBCLFdBQVNnQixvQkFBVUksSUFqQkY7QUFrQmpCekIsYUFBV3FCLG9CQUFVSSxJQWxCSjtBQW1CakJ0QyxXQUFTa0Msb0JBQVVJLElBbkJGO0FBb0JqQlgsWUFBVU8sb0JBQVVJO0FBcEJILEM7QUFGZmpELFMsQ0F5QkdvRCxZLEdBQWU7QUFDcEJuQyxnQkFBYyxLQURNO0FBRXBCWCxnQkFBYyxFQUZNO0FBR3BCWSxZQUFVLEtBSFU7QUFJcEJxQixhQUFXLElBSlM7QUFLcEJwQixlQUFhLEVBTE87QUFNcEJYLFVBQVEsSUFOWTtBQU9wQnlCLFlBQVUsa0JBQUM5QixLQUFEO0FBQUEsV0FBV0EsS0FBWDtBQUFBLEdBUFU7QUFRcEJPLFVBQVEsSUFSWTtBQVNwQlUsWUFBVSxDQVRVO0FBVXBCOEIsUUFBTSxJQVZjO0FBV3BCZixZQUFVLGtCQUFDaEMsS0FBRDtBQUFBLFdBQVcsSUFBWDtBQUFBLEdBWFU7QUFZcEJrQixVQUFRLGtCQUFNLENBQUUsQ0FaSTtBQWFwQjhCLFVBQVEsa0JBQU0sQ0FBRSxDQWJJO0FBY3BCekIsWUFBVSxvQkFBTSxDQUFFLENBZEU7QUFlcEJKLFdBQVMsbUJBQU0sQ0FBRSxDQWZHO0FBZ0JwQkMsY0FBWSxzQkFBTSxDQUFFLENBaEJBO0FBaUJwQk0sV0FBUyxtQkFBTSxDQUFFLENBakJHO0FBa0JwQkwsYUFBVyxxQkFBTSxDQUFFLENBbEJDO0FBbUJwQmIsV0FBUyxtQkFBTSxDQUFFLENBbkJHO0FBb0JwQjJCLFlBQVUsb0JBQU0sQ0FBRTtBQXBCRSxDO2tCQXVHVHRDLFMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgVGV4dEZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG1heExlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2FuaXRpemU6IFByb3BUeXBlcy5mdW5jLFxuICAgIHN1ZmZpeDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0cmltOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB2YWxpZGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJ1c3k6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleVByZXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleVVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBhdXRvQ29tcGxldGU6ICdvZmYnLFxuICAgIGRlZmF1bHRWYWx1ZTogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIG1heExlbmd0aDogbnVsbCxcbiAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgcHJlZml4OiBudWxsLFxuICAgIHNhbml0aXplOiAodmFsdWUpID0+IHZhbHVlLFxuICAgIHN1ZmZpeDogbnVsbCxcbiAgICB0YWJJbmRleDogMCxcbiAgICB0cmltOiB0cnVlLFxuICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IHRydWUsXG4gICAgb25CbHVyOiAoKSA9PiB7fSxcbiAgICBvbkJ1c3k6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvbkZvY3VzOiAoKSA9PiB7fSxcbiAgICBvbktleVByZXNzOiAoKSA9PiB7fSxcbiAgICBvbktleVVwOiAoKSA9PiB7fSxcbiAgICBvbktleURvd246ICgpID0+IHt9LFxuICAgIG9uUmVhZHk6ICgpID0+IHt9LFxuICAgIG9uU3VibWl0OiAoKSA9PiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IF8udG9TdHJpbmcocHJvcHMuZGVmYXVsdFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyB0aGlzLl9nZXRDbGFzcygpIH0+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5wcmVmaXggJiYgPGRpdiBjbGFzc05hbWU9XCJ1aSBsYWJlbFwiPnt0aGlzLnByb3BzLnByZWZpeH08L2Rpdj4gfVxuICAgICAgICA8aW5wdXQgeyAuLi50aGlzLl9nZXRDb250cm9sKCkgfSAvPlxuICAgICAgICB7IHRoaXMucHJvcHMuc3VmZml4ICYmIDxkaXYgY2xhc3NOYW1lPVwidWkgbGFiZWxcIj57dGhpcy5wcm9wcy5zdWZmaXh9PC9kaXY+IH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25SZWFkeSgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYocHJldlByb3BzLmRlZmF1bHRWYWx1ZSAhPSB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBfZ2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgeyBwcmVmaXgsIHN1ZmZpeCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ3JlZnJhbWUtdGV4dGZpZWxkJywndWknLCdmbHVpZCcsJ2lucHV0J11cbiAgICBpZihwcmVmaXgpIGNsYXNzZXMucHVzaCgnbGVmdCBsYWJlbGVkJylcbiAgICBpZihzdWZmaXgpIGNsYXNzZXMucHVzaCgncmlnaHQgbGFiZWxlZCcpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0Q29udHJvbCgpIHtcbiAgICBjb25zdCB7IGF1dG9Db21wbGV0ZSwgZGlzYWJsZWQsIHBsYWNlaG9sZGVyLCB0YWJJbmRleCwgb25CbHVyLCBvbkZvY3VzLCBvbktleVByZXNzLCBvbktleURvd24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIHtcbiAgICAgIHRhYkluZGV4LFxuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICB2YWx1ZSxcbiAgICAgIGF1dG9Db21wbGV0ZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX2hhbmRsZUNoYW5nZS5iaW5kKHRoaXMpLFxuICAgICAgb25CbHVyLFxuICAgICAgb25Gb2N1cyxcbiAgICAgIG9uS2V5UHJlc3MsXG4gICAgICBvbktleVVwOiB0aGlzLl9oYW5kbGVLZXlVcC5iaW5kKHRoaXMpLFxuICAgICAgb25LZXlEb3duXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHNhbml0aXplZCA9IHRoaXMucHJvcHMuc2FuaXRpemUoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIGlmKCF0aGlzLnByb3BzLnZhbGlkYXRlKHNhbml0aXplZCkpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLnNldFZhbHVlKHNhbml0aXplZClcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNhbml0aXplZClcbiAgfVxuXG4gIF9oYW5kbGVLZXlVcChldmVudCkge1xuICAgIHRoaXMucHJvcHMub25LZXlVcCh0aGlzLnN0YXRlLnZhbHVlKVxuICAgIGlmKGV2ZW50LndoaWNoID09IDEzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLnByb3BzLm9uU3VibWl0KClcbiAgICB9XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKCEodGhpcy5wcm9wcy5tYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gdGhpcy5wcm9wcy5tYXhMZW5ndGgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZX0pXG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkXG4iXX0=