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

var Password = function (_React$Component) {
  (0, _inherits3.default)(Password, _React$Component);

  function Password(props) {
    (0, _classCallCheck3.default)(this, Password);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Password.__proto__ || Object.getPrototypeOf(Password)).call(this, props));

    _this.state = {
      value: _lodash2.default.toString(props.defaultValue)
    };
    return _this;
  }

  (0, _createClass3.default)(Password, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'password' },
        _react2.default.createElement('input', this._getInput())
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
    key: '_getInput',
    value: function _getInput() {
      var value = this.state.value;
      var _props = this.props,
          autoComplete = _props.autoComplete,
          placeholder = _props.placeholder,
          tabIndex = _props.tabIndex,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onKeyPress = _props.onKeyPress,
          onKeyUp = _props.onKeyUp,
          onKeyDown = _props.onKeyDown;

      return {
        type: 'password',
        value: value,
        autoComplete: autoComplete,
        placeholder: placeholder,
        tabIndex: tabIndex,
        onChange: this._handleChange.bind(this),
        onBlur: onBlur,
        onFocus: onFocus,
        onKeyPress: onKeyPress,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(event) {
      this.setValue(event.target.value);
      this.props.onChange(event.target.value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (!(this.props.maxLength && value.length > this.props.maxLength)) {
        this.setState({ value: value });
      }
    }
  }]);
  return Password;
}(_react2.default.Component);

Password.propTypes = {
  autoComplete: _propTypes2.default.string,
  maxLength: _propTypes2.default.number,
  prefix: _propTypes2.default.string,
  suffix: _propTypes2.default.string,
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  onBlur: _propTypes2.default.func,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
Password.defaultProps = {
  autoComplete: 'off',
  maxLength: null,
  prefix: null,
  suffix: null,
  disabled: false,
  placeholder: '',
  defaultValue: '',
  tabIndex: 0,
  onBlur: function onBlur() {},
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  onKeyDown: function onKeyDown() {},
  onReady: function onReady() {}
};
exports.default = Password;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiUGFzc3dvcmQiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJfIiwidG9TdHJpbmciLCJkZWZhdWx0VmFsdWUiLCJfZ2V0SW5wdXQiLCJvblJlYWR5IiwicHJldlByb3BzIiwic2V0VmFsdWUiLCJhdXRvQ29tcGxldGUiLCJwbGFjZWhvbGRlciIsInRhYkluZGV4Iiwib25CbHVyIiwib25Gb2N1cyIsIm9uS2V5UHJlc3MiLCJvbktleVVwIiwib25LZXlEb3duIiwidHlwZSIsIm9uQ2hhbmdlIiwiX2hhbmRsZUNoYW5nZSIsImJpbmQiLCJldmVudCIsInRhcmdldCIsIm1heExlbmd0aCIsImxlbmd0aCIsInNldFN0YXRlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJwcmVmaXgiLCJzdWZmaXgiLCJkaXNhYmxlZCIsImJvb2wiLCJmdW5jIiwib25CdXN5IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsUTs7O0FBd0NKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPQyxpQkFBRUMsUUFBRixDQUFXSixNQUFNSyxZQUFqQjtBQURJLEtBQWI7QUFGaUI7QUFLbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsVUFBZjtBQUNFLCtDQUFZLEtBQUtDLFNBQUwsRUFBWjtBQURGLE9BREY7QUFLRDs7O3dDQUVtQjtBQUNsQixXQUFLTixLQUFMLENBQVdPLE9BQVg7QUFDRDs7O3VDQUVrQkMsUyxFQUFXO0FBQzVCLFVBQUdBLFVBQVVILFlBQVYsSUFBMEIsS0FBS0wsS0FBTCxDQUFXSyxZQUF4QyxFQUFzRDtBQUNwRCxhQUFLSSxRQUFMLENBQWMsS0FBS1QsS0FBTCxDQUFXSyxZQUF6QjtBQUNEO0FBQ0Y7OztnQ0FFVztBQUFBLFVBQ0ZILEtBREUsR0FDUSxLQUFLRCxLQURiLENBQ0ZDLEtBREU7QUFBQSxtQkFFdUYsS0FBS0YsS0FGNUY7QUFBQSxVQUVGVSxZQUZFLFVBRUZBLFlBRkU7QUFBQSxVQUVZQyxXQUZaLFVBRVlBLFdBRlo7QUFBQSxVQUV5QkMsUUFGekIsVUFFeUJBLFFBRnpCO0FBQUEsVUFFbUNDLE1BRm5DLFVBRW1DQSxNQUZuQztBQUFBLFVBRTJDQyxPQUYzQyxVQUUyQ0EsT0FGM0M7QUFBQSxVQUVvREMsVUFGcEQsVUFFb0RBLFVBRnBEO0FBQUEsVUFFZ0VDLE9BRmhFLFVBRWdFQSxPQUZoRTtBQUFBLFVBRXlFQyxTQUZ6RSxVQUV5RUEsU0FGekU7O0FBR1YsYUFBTztBQUNMQyxjQUFNLFVBREQ7QUFFTGhCLG9CQUZLO0FBR0xRLGtDQUhLO0FBSUxDLGdDQUpLO0FBS0xDLDBCQUxLO0FBTUxPLGtCQUFVLEtBQUtDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBTkw7QUFPTFIsc0JBUEs7QUFRTEMsd0JBUks7QUFTTEMsOEJBVEs7QUFVTEMsd0JBVks7QUFXTEM7QUFYSyxPQUFQO0FBYUQ7OztrQ0FFYUssSyxFQUFPO0FBQ25CLFdBQUtiLFFBQUwsQ0FBY2EsTUFBTUMsTUFBTixDQUFhckIsS0FBM0I7QUFDQSxXQUFLRixLQUFMLENBQVdtQixRQUFYLENBQW9CRyxNQUFNQyxNQUFOLENBQWFyQixLQUFqQztBQUNEOzs7NkJBRVFBLEssRUFBTztBQUNkLFVBQUcsRUFBRSxLQUFLRixLQUFMLENBQVd3QixTQUFYLElBQXdCdEIsTUFBTXVCLE1BQU4sR0FBZSxLQUFLekIsS0FBTCxDQUFXd0IsU0FBcEQsQ0FBSCxFQUFtRTtBQUNqRSxhQUFLRSxRQUFMLENBQWMsRUFBQ3hCLFlBQUQsRUFBZDtBQUNEO0FBQ0Y7OztFQTVGb0J5QixnQkFBTUMsUzs7QUFBdkI3QixRLENBRUc4QixTLEdBQVk7QUFDakJuQixnQkFBY29CLG9CQUFVQyxNQURQO0FBRWpCUCxhQUFXTSxvQkFBVUUsTUFGSjtBQUdqQkMsVUFBUUgsb0JBQVVDLE1BSEQ7QUFJakJHLFVBQVFKLG9CQUFVQyxNQUpEO0FBS2pCMUIsZ0JBQWN5QixvQkFBVUMsTUFMUDtBQU1qQkksWUFBVUwsb0JBQVVNLElBTkg7QUFPakJ6QixlQUFhbUIsb0JBQVVDLE1BUE47QUFRakJuQixZQUFVa0Isb0JBQVVFLE1BUkg7QUFTakJuQixVQUFRaUIsb0JBQVVPLElBVEQ7QUFVakJDLFVBQVFSLG9CQUFVTyxJQVZEO0FBV2pCbEIsWUFBVVcsb0JBQVVPLElBWEg7QUFZakJ2QixXQUFTZ0Isb0JBQVVPLElBWkY7QUFhakJ0QixjQUFZZSxvQkFBVU8sSUFiTDtBQWNqQnJCLFdBQVNjLG9CQUFVTyxJQWRGO0FBZWpCcEIsYUFBV2Esb0JBQVVPLElBZko7QUFnQmpCOUIsV0FBU3VCLG9CQUFVTztBQWhCRixDO0FBRmZ0QyxRLENBcUJHd0MsWSxHQUFlO0FBQ3BCN0IsZ0JBQWMsS0FETTtBQUVwQmMsYUFBVyxJQUZTO0FBR3BCUyxVQUFRLElBSFk7QUFJcEJDLFVBQVEsSUFKWTtBQUtwQkMsWUFBVSxLQUxVO0FBTXBCeEIsZUFBYSxFQU5PO0FBT3BCTixnQkFBYyxFQVBNO0FBUXBCTyxZQUFVLENBUlU7QUFTcEJDLFVBQVEsa0JBQU0sQ0FBRSxDQVRJO0FBVXBCeUIsVUFBUSxrQkFBTSxDQUFFLENBVkk7QUFXcEJuQixZQUFVLG9CQUFNLENBQUUsQ0FYRTtBQVlwQkwsV0FBUyxtQkFBTSxDQUFFLENBWkc7QUFhcEJDLGNBQVksc0JBQU0sQ0FBRSxDQWJBO0FBY3BCQyxXQUFTLG1CQUFNLENBQUUsQ0FkRztBQWVwQkMsYUFBVyxxQkFBTSxDQUFFLENBZkM7QUFnQnBCVixXQUFTLG1CQUFNLENBQUU7QUFoQkcsQztrQkEyRVRSLFEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgUGFzc3dvcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG1heExlbmd0aDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwcmVmaXg6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc3VmZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkJ1c3k6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleVByZXNzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleVVwOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uUmVhZHk6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGF1dG9Db21wbGV0ZTogJ29mZicsXG4gICAgbWF4TGVuZ3RoOiBudWxsLFxuICAgIHByZWZpeDogbnVsbCxcbiAgICBzdWZmaXg6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIHRhYkluZGV4OiAwLFxuICAgIG9uQmx1cjogKCkgPT4ge30sXG4gICAgb25CdXN5OiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb25Gb2N1czogKCkgPT4ge30sXG4gICAgb25LZXlQcmVzczogKCkgPT4ge30sXG4gICAgb25LZXlVcDogKCkgPT4ge30sXG4gICAgb25LZXlEb3duOiAoKSA9PiB7fSxcbiAgICBvblJlYWR5OiAoKSA9PiB7fVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IF8udG9TdHJpbmcocHJvcHMuZGVmYXVsdFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXNzd29yZFwiPlxuICAgICAgICA8aW5wdXQgeyAuLi50aGlzLl9nZXRJbnB1dCgpIH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25SZWFkeSgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYocHJldlByb3BzLmRlZmF1bHRWYWx1ZSAhPSB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSlcbiAgICB9XG4gIH1cblxuICBfZ2V0SW5wdXQoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHsgYXV0b0NvbXBsZXRlLCBwbGFjZWhvbGRlciwgdGFiSW5kZXgsIG9uQmx1ciwgb25Gb2N1cywgb25LZXlQcmVzcywgb25LZXlVcCwgb25LZXlEb3duIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdwYXNzd29yZCcsXG4gICAgICB2YWx1ZSxcbiAgICAgIGF1dG9Db21wbGV0ZSxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgdGFiSW5kZXgsXG4gICAgICBvbkNoYW5nZTogdGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcyksXG4gICAgICBvbkJsdXIsXG4gICAgICBvbkZvY3VzLFxuICAgICAgb25LZXlQcmVzcyxcbiAgICAgIG9uS2V5VXAsXG4gICAgICBvbktleURvd25cbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpXG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmKCEodGhpcy5wcm9wcy5tYXhMZW5ndGggJiYgdmFsdWUubGVuZ3RoID4gdGhpcy5wcm9wcy5tYXhMZW5ndGgpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZX0pXG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRcbiJdfQ==