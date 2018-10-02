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

var ColorField = function (_React$Component) {
  (0, _inherits3.default)(ColorField, _React$Component);

  function ColorField() {
    (0, _classCallCheck3.default)(this, ColorField);
    return (0, _possibleConstructorReturn3.default)(this, (ColorField.__proto__ || Object.getPrototypeOf(ColorField)).apply(this, arguments));
  }

  (0, _createClass3.default)(ColorField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          colors = _props.colors,
          tabIndex = _props.tabIndex;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-colorfield', tabIndex: tabIndex },
        colors.map(function (color, index) {
          return _react2.default.createElement(
            'div',
            { key: 'color_' + index, className: 'reframe-color', style: { backgroundColor: color.value }, onClick: _this2._handleSet.bind(_this2, color.name) },
            color.name === _this2.props.color && _react2.default.createElement('i', { className: 'fa fa-fw fa-check' })
          );
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          defaultValue = _props2.defaultValue,
          onReady = _props2.onReady,
          onSet = _props2.onSet;

      if (defaultValue) onSet(defaultValue);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          color = _props3.color,
          onChange = _props3.onChange;

      if (prevProps.color !== color) onChange(color);
    }
  }, {
    key: '_handleSet',
    value: function _handleSet(color) {
      this.props.onSet(color);
    }
  }]);
  return ColorField;
}(_react2.default.Component);

ColorField.defaultProps = {
  colors: [{ name: 'red', value: '#DB2828' }, { name: 'orange', value: '#F2711C' }, { name: 'yellow', value: '#FBBD08' }, { name: 'olive', value: '#B5CC18' }, { name: 'green', value: '#21BA45' }, { name: 'teal', value: '#00B5AD' }, { name: 'blue', value: '#2185D0' }, { name: 'violet', value: '#6435C9' }, { name: 'purple', value: '#A333C8' }, { name: 'pink', value: '#E03997' }],
  defaultValue: null,
  disabled: false,
  tabIndex: 0,
  onBusy: function onBusy() {},
  onChange: function onChange(value) {},
  onReady: function onReady() {},
  onSet: function onSet(value) {}
};
exports.default = ColorField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ29sb3JGaWVsZCIsInByb3BzIiwiY29sb3JzIiwidGFiSW5kZXgiLCJtYXAiLCJjb2xvciIsImluZGV4IiwiYmFja2dyb3VuZENvbG9yIiwidmFsdWUiLCJfaGFuZGxlU2V0IiwiYmluZCIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJvblJlYWR5Iiwib25TZXQiLCJwcmV2UHJvcHMiLCJvbkNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiZGlzYWJsZWQiLCJvbkJ1c3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7NkJBd0JLO0FBQUE7O0FBQUEsbUJBQ3NCLEtBQUtDLEtBRDNCO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEsVUFDU0MsUUFEVCxVQUNTQSxRQURUOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxvQkFBZixFQUFvQyxVQUFXQSxRQUEvQztBQUNJRCxlQUFPRSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsaUJBQ1g7QUFBQTtBQUFBLGNBQUssZ0JBQWNBLEtBQW5CLEVBQTRCLFdBQVUsZUFBdEMsRUFBc0QsT0FBTyxFQUFFQyxpQkFBaUJGLE1BQU1HLEtBQXpCLEVBQTdELEVBQStGLFNBQVUsT0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsTUFBckIsRUFBMkJMLE1BQU1NLElBQWpDLENBQXpHO0FBQ0lOLGtCQUFNTSxJQUFOLEtBQWUsT0FBS1YsS0FBTCxDQUFXSSxLQUExQixJQUFtQyxxQ0FBRyxXQUFVLG1CQUFiO0FBRHZDLFdBRFc7QUFBQSxTQUFYO0FBREosT0FERjtBQVNEOzs7d0NBRW1CO0FBQUEsb0JBQ3VCLEtBQUtKLEtBRDVCO0FBQUEsVUFDVlcsWUFEVSxXQUNWQSxZQURVO0FBQUEsVUFDSUMsT0FESixXQUNJQSxPQURKO0FBQUEsVUFDYUMsS0FEYixXQUNhQSxLQURiOztBQUVsQixVQUFHRixZQUFILEVBQWlCRSxNQUFNRixZQUFOO0FBQ2pCQztBQUNEOzs7dUNBRWtCRSxTLEVBQVc7QUFBQSxvQkFDQSxLQUFLZCxLQURMO0FBQUEsVUFDcEJJLEtBRG9CLFdBQ3BCQSxLQURvQjtBQUFBLFVBQ2JXLFFBRGEsV0FDYkEsUUFEYTs7QUFFNUIsVUFBR0QsVUFBVVYsS0FBVixLQUFvQkEsS0FBdkIsRUFBOEJXLFNBQVNYLEtBQVQ7QUFDL0I7OzsrQkFFVUEsSyxFQUFPO0FBQ2hCLFdBQUtKLEtBQUwsQ0FBV2EsS0FBWCxDQUFpQlQsS0FBakI7QUFDRDs7O0VBbERzQlksZ0JBQU1DLFM7O0FBQXpCbEIsVSxDQUVHbUIsWSxHQUFlO0FBQ3BCakIsVUFBUSxDQUNOLEVBQUVTLE1BQU0sS0FBUixFQUFlSCxPQUFPLFNBQXRCLEVBRE0sRUFFTixFQUFFRyxNQUFNLFFBQVIsRUFBa0JILE9BQU8sU0FBekIsRUFGTSxFQUdOLEVBQUVHLE1BQU0sUUFBUixFQUFrQkgsT0FBTyxTQUF6QixFQUhNLEVBSU4sRUFBRUcsTUFBTSxPQUFSLEVBQWlCSCxPQUFPLFNBQXhCLEVBSk0sRUFLTixFQUFFRyxNQUFNLE9BQVIsRUFBaUJILE9BQU8sU0FBeEIsRUFMTSxFQU1OLEVBQUVHLE1BQU0sTUFBUixFQUFnQkgsT0FBTyxTQUF2QixFQU5NLEVBT04sRUFBRUcsTUFBTSxNQUFSLEVBQWdCSCxPQUFPLFNBQXZCLEVBUE0sRUFRTixFQUFFRyxNQUFNLFFBQVIsRUFBa0JILE9BQU8sU0FBekIsRUFSTSxFQVNOLEVBQUVHLE1BQU0sUUFBUixFQUFrQkgsT0FBTyxTQUF6QixFQVRNLEVBVU4sRUFBRUcsTUFBTSxNQUFSLEVBQWdCSCxPQUFPLFNBQXZCLEVBVk0sQ0FEWTtBQWFwQkksZ0JBQWMsSUFiTTtBQWNwQlEsWUFBVSxLQWRVO0FBZXBCakIsWUFBVSxDQWZVO0FBZ0JwQmtCLFVBQVEsa0JBQU0sQ0FBRSxDQWhCSTtBQWlCcEJMLFlBQVUsa0JBQUNSLEtBQUQsRUFBVyxDQUFFLENBakJIO0FBa0JwQkssV0FBUyxtQkFBTSxDQUFFLENBbEJHO0FBbUJwQkMsU0FBTyxlQUFDTixLQUFELEVBQVcsQ0FBRTtBQW5CQSxDO2tCQW9EVFIsVSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBDb2xvckZpZWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNvbG9yczogW1xuICAgICAgeyBuYW1lOiAncmVkJywgdmFsdWU6ICcjREIyODI4JyB9LFxuICAgICAgeyBuYW1lOiAnb3JhbmdlJywgdmFsdWU6ICcjRjI3MTFDJyB9LFxuICAgICAgeyBuYW1lOiAneWVsbG93JywgdmFsdWU6ICcjRkJCRDA4JyB9LFxuICAgICAgeyBuYW1lOiAnb2xpdmUnLCB2YWx1ZTogJyNCNUNDMTgnIH0sXG4gICAgICB7IG5hbWU6ICdncmVlbicsIHZhbHVlOiAnIzIxQkE0NScgfSxcbiAgICAgIHsgbmFtZTogJ3RlYWwnLCB2YWx1ZTogJyMwMEI1QUQnIH0sXG4gICAgICB7IG5hbWU6ICdibHVlJywgdmFsdWU6ICcjMjE4NUQwJyB9LFxuICAgICAgeyBuYW1lOiAndmlvbGV0JywgdmFsdWU6ICcjNjQzNUM5JyB9LFxuICAgICAgeyBuYW1lOiAncHVycGxlJywgdmFsdWU6ICcjQTMzM0M4JyB9LFxuICAgICAgeyBuYW1lOiAncGluaycsIHZhbHVlOiAnI0UwMzk5NycgfVxuICAgIF0sXG4gICAgZGVmYXVsdFZhbHVlOiBudWxsLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0YWJJbmRleDogMCxcbiAgICBvbkJ1c3k6ICgpID0+IHt9LFxuICAgIG9uQ2hhbmdlOiAodmFsdWUpID0+IHt9LFxuICAgIG9uUmVhZHk6ICgpID0+IHt9LFxuICAgIG9uU2V0OiAodmFsdWUpID0+IHt9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjb2xvcnMsIHRhYkluZGV4IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xvcmZpZWxkXCIgdGFiSW5kZXg9eyB0YWJJbmRleCB9PlxuICAgICAgICB7IGNvbG9ycy5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtgY29sb3JfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbG9yXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBjb2xvci52YWx1ZSB9fSBvbkNsaWNrPXsgdGhpcy5faGFuZGxlU2V0LmJpbmQodGhpcywgY29sb3IubmFtZSkgfT5cbiAgICAgICAgICAgIHsgY29sb3IubmFtZSA9PT0gdGhpcy5wcm9wcy5jb2xvciAmJiA8aSBjbGFzc05hbWU9XCJmYSBmYS1mdyBmYS1jaGVja1wiIC8+IH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSkgfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIG9uUmVhZHksIG9uU2V0IH0gPSB0aGlzLnByb3BzXG4gICAgaWYoZGVmYXVsdFZhbHVlKSBvblNldChkZWZhdWx0VmFsdWUpXG4gICAgb25SZWFkeSgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBjb2xvciwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICBpZihwcmV2UHJvcHMuY29sb3IgIT09IGNvbG9yKSBvbkNoYW5nZShjb2xvcilcbiAgfVxuXG4gIF9oYW5kbGVTZXQoY29sb3IpIHtcbiAgICB0aGlzLnByb3BzLm9uU2V0KGNvbG9yKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JGaWVsZFxuIl19