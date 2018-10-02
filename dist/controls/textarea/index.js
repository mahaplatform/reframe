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

var TextArea = function (_React$Component) {
  (0, _inherits3.default)(TextArea, _React$Component);

  function TextArea(props) {
    (0, _classCallCheck3.default)(this, TextArea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this, props));

    _this.state = {
      value: props.defaultValue ? _lodash2.default.toString(props.defaultValue) : null
    };
    return _this;
  }

  (0, _createClass3.default)(TextArea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'textarea' },
        _react2.default.createElement('textarea', this._getTextarea())
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
    key: '_getTextarea',
    value: function _getTextarea() {
      var _props = this.props,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          rows = _props.rows,
          tabIndex = _props.tabIndex;
      var value = this.state.value;

      return {
        placeholder: placeholder,
        disabled: disabled,
        defaultValue: value,
        rows: rows,
        tabIndex: tabIndex,
        onChange: this._handleChange.bind(this)
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
      if (this.props.maxLength && value.length <= this.props.maxLength) {
        this.setState({ value: value });
      }
    }
  }]);
  return TextArea;
}(_react2.default.Component);

TextArea.propTypes = {
  defaultValue: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  maxLength: _propTypes2.default.number,
  placeholder: _propTypes2.default.string,
  rows: _propTypes2.default.number,
  tabIndex: _propTypes2.default.number,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
TextArea.defaultProps = {
  defaultValue: '',
  disabled: false,
  maxLength: null,
  placeholder: '',
  rows: 5,
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {}
};
exports.default = TextArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJfIiwidG9TdHJpbmciLCJfZ2V0VGV4dGFyZWEiLCJvblJlYWR5IiwicHJldlByb3BzIiwic2V0VmFsdWUiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwicm93cyIsInRhYkluZGV4Iiwib25DaGFuZ2UiLCJfaGFuZGxlQ2hhbmdlIiwiYmluZCIsImV2ZW50IiwidGFyZ2V0IiwibWF4TGVuZ3RoIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImJvb2wiLCJudW1iZXIiLCJvbkJ1c3kiLCJmdW5jIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsUTs7O0FBMEJKLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0lBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPRixNQUFNRyxZQUFOLEdBQXFCQyxpQkFBRUMsUUFBRixDQUFXTCxNQUFNRyxZQUFqQixDQUFyQixHQUFzRDtBQURsRCxLQUFiO0FBRmlCO0FBS2xCOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDRSxrREFBZSxLQUFLRyxZQUFMLEVBQWY7QUFERixPQURGO0FBS0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS04sS0FBTCxDQUFXTyxPQUFYO0FBQ0Q7Ozt1Q0FFa0JDLFMsRUFBVztBQUM1QixVQUFHQSxVQUFVTCxZQUFWLElBQTBCLEtBQUtILEtBQUwsQ0FBV0csWUFBeEMsRUFBc0Q7QUFDcEQsYUFBS00sUUFBTCxDQUFjLEtBQUtULEtBQUwsQ0FBV0csWUFBekI7QUFDRDtBQUNGOzs7bUNBRWM7QUFBQSxtQkFDcUMsS0FBS0gsS0FEMUM7QUFBQSxVQUNMVSxXQURLLFVBQ0xBLFdBREs7QUFBQSxVQUNRQyxRQURSLFVBQ1FBLFFBRFI7QUFBQSxVQUNrQkMsSUFEbEIsVUFDa0JBLElBRGxCO0FBQUEsVUFDd0JDLFFBRHhCLFVBQ3dCQSxRQUR4QjtBQUFBLFVBRUxYLEtBRkssR0FFSyxLQUFLRCxLQUZWLENBRUxDLEtBRks7O0FBR2IsYUFBTztBQUNMUSxnQ0FESztBQUVMQywwQkFGSztBQUdMUixzQkFBY0QsS0FIVDtBQUlMVSxrQkFKSztBQUtMQywwQkFMSztBQU1MQyxrQkFBVSxLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtBQU5MLE9BQVA7QUFRRDs7O2tDQUVhQyxLLEVBQU87QUFDbkIsV0FBS1IsUUFBTCxDQUFjUSxNQUFNQyxNQUFOLENBQWFoQixLQUEzQjtBQUNBLFdBQUtGLEtBQUwsQ0FBV2MsUUFBWCxDQUFvQkcsTUFBTUMsTUFBTixDQUFhaEIsS0FBakM7QUFDRDs7OzZCQUVRQSxLLEVBQU87QUFDZCxVQUFHLEtBQUtGLEtBQUwsQ0FBV21CLFNBQVgsSUFBd0JqQixNQUFNa0IsTUFBTixJQUFnQixLQUFLcEIsS0FBTCxDQUFXbUIsU0FBdEQsRUFBaUU7QUFDL0QsYUFBS0UsUUFBTCxDQUFjLEVBQUNuQixZQUFELEVBQWQ7QUFDRDtBQUNGOzs7RUF6RW9Cb0IsZ0JBQU1DLFM7O0FBQXZCeEIsUSxDQUVHeUIsUyxHQUFZO0FBQ2pCckIsZ0JBQWNzQixvQkFBVUMsTUFEUDtBQUVqQmYsWUFBVWMsb0JBQVVFLElBRkg7QUFHakJSLGFBQVdNLG9CQUFVRyxNQUhKO0FBSWpCbEIsZUFBYWUsb0JBQVVDLE1BSk47QUFLakJkLFFBQU1hLG9CQUFVRyxNQUxDO0FBTWpCZixZQUFVWSxvQkFBVUcsTUFOSDtBQU9qQkMsVUFBUUosb0JBQVVLLElBUEQ7QUFRakJoQixZQUFVVyxvQkFBVUssSUFSSDtBQVNqQnZCLFdBQVNrQixvQkFBVUs7QUFURixDO0FBRmYvQixRLENBY0dnQyxZLEdBQWU7QUFDcEI1QixnQkFBYyxFQURNO0FBRXBCUSxZQUFVLEtBRlU7QUFHcEJRLGFBQVcsSUFIUztBQUlwQlQsZUFBYSxFQUpPO0FBS3BCRSxRQUFNLENBTGM7QUFNcEJDLFlBQVUsQ0FOVTtBQU9wQmdCLFVBQVEsa0JBQU0sQ0FBRSxDQVBJO0FBUXBCZixZQUFVLG9CQUFNLENBQUUsQ0FSRTtBQVNwQlAsV0FBUyxtQkFBTSxDQUFFO0FBVEcsQztrQkErRFRSLFEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBtYXhMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvbkJ1c3k6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlYWR5OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBkZWZhdWx0VmFsdWU6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBtYXhMZW5ndGg6IG51bGwsXG4gICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgIHJvd3M6IDUsXG4gICAgdGFiSW5kZXg6IDAsXG4gICAgb25CdXN5OiAoKSA9PiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb25SZWFkeTogKCkgPT4ge31cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiBwcm9wcy5kZWZhdWx0VmFsdWUgPyBfLnRvU3RyaW5nKHByb3BzLmRlZmF1bHRWYWx1ZSkgOiBudWxsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRhcmVhXCI+XG4gICAgICAgIDx0ZXh0YXJlYSB7IC4uLnRoaXMuX2dldFRleHRhcmVhKCkgfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5wcm9wcy5vblJlYWR5KClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZihwcmV2UHJvcHMuZGVmYXVsdFZhbHVlICE9IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRUZXh0YXJlYSgpIHtcbiAgICBjb25zdCB7IHBsYWNlaG9sZGVyLCBkaXNhYmxlZCwgcm93cywgdGFiSW5kZXggfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkZWZhdWx0VmFsdWU6IHZhbHVlLFxuICAgICAgcm93cyxcbiAgICAgIHRhYkluZGV4LFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX2hhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICBpZih0aGlzLnByb3BzLm1heExlbmd0aCAmJiB2YWx1ZS5sZW5ndGggPD0gdGhpcy5wcm9wcy5tYXhMZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlfSlcbiAgICB9XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYVxuIl19