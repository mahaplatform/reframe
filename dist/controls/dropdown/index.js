'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dropdown = function (_React$Component) {
  (0, _inherits3.default)(Dropdown, _React$Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      active: false,
      value: null,
      animating: false
    }, _this._handleOpen = _this._handleOpen.bind(_this), _this._handleClose = _this._handleClose.bind(_this), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.props.options;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-dropdown' },
        _react2.default.createElement(
          'div',
          { className: this._getDropdownClass(), onClick: this._handleOpen },
          _react2.default.createElement(
            'div',
            { className: 'text', onClick: this._handleOpen },
            this._getLabel()
          ),
          _react2.default.createElement('i', { className: 'dropdown icon' }),
          _react2.default.createElement(
            'div',
            { className: this._getMenuClass() },
            options.map(function (option, index) {
              return _react2.default.createElement(
                'div',
                (0, _extends3.default)({ key: 'option_' + index }, _this2._getOption(option)),
                option.text
              );
            })
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

      if (defaultValue) this.setValue(defaultValue);
      document.addEventListener('mousedown', this._handleClose);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      var _state = this.state,
          active = _state.active,
          value = _state.value;

      if (value !== prevState.value) {
        this.props.onChange(value);
      }
      if (active !== prevState.active) {
        this.setState({
          animating: true
        });
        setTimeout(function () {
          return _this3.setState({
            animating: false
          });
        }, 250);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this._handleClose);
    }
  }, {
    key: '_getDropdownClass',
    value: function _getDropdownClass() {
      var _state2 = this.state,
          animating = _state2.animating,
          active = _state2.active;

      var classes = ['ui', 'fluid', 'selection', 'dropdown'];
      if (active) classes.push('active');
      if (active && !animating) classes.push('visible');
      if (!active && animating) classes.push('visible');
      return classes.join(' ');
    }
  }, {
    key: '_getMenuClass',
    value: function _getMenuClass() {
      var _state3 = this.state,
          active = _state3.active,
          animating = _state3.animating;

      var classes = ['menu', 'transition'];
      if (!animating && !active) classes.push('hidden');
      if (animating || active) classes.push('visible');
      if (animating && active) classes.push('animating slide down in');
      if (animating && !active) classes.push('animating slide down out');
      return classes.join(' ');
    }
  }, {
    key: '_getLabel',
    value: function _getLabel() {
      var value = this.state.value;
      var _props2 = this.props,
          options = _props2.options,
          placeholder = _props2.placeholder;

      var option = _lodash2.default.find(options, { value: value });
      return option ? option.text : placeholder;
    }
  }, {
    key: '_getOption',
    value: function _getOption(option) {
      return {
        className: 'item',
        onClick: this._handleChoose.bind(this, option.value)
      };
    }
  }, {
    key: '_handleOpen',
    value: function _handleOpen(e) {
      var active = this.state.active;

      if (active || e.target.className === 'item') return;
      this.setState({
        active: true
      });
    }
  }, {
    key: '_handleClose',
    value: function _handleClose(e) {
      var active = this.state.active;

      var reserved = ['item', 'text', 'dropdown icon', 'ui selection dropdown active visible'];
      if (!active || _lodash2.default.includes(reserved, e.target.className)) return;
      this.setState({
        active: false
      });
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(value) {
      this.setValue(value);
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.setState({
        value: value,
        active: false
      });
    }
  }]);
  return Dropdown;
}(_react2.default.Component);

Dropdown.propTypes = {
  defaultValue: _propTypes2.default.string,
  options: _propTypes2.default.array,
  placeholder: _propTypes2.default.string,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func
};
Dropdown.defaultProps = {
  placeholder: 'Select an option...',
  defaultValue: null,
  options: [],
  onBusy: function onBusy(value) {},
  onChange: function onChange(value) {},
  onReady: function onReady() {}
};
exports.default = Dropdown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRHJvcGRvd24iLCJzdGF0ZSIsImFjdGl2ZSIsInZhbHVlIiwiYW5pbWF0aW5nIiwiX2hhbmRsZU9wZW4iLCJiaW5kIiwiX2hhbmRsZUNsb3NlIiwib3B0aW9ucyIsInByb3BzIiwiX2dldERyb3Bkb3duQ2xhc3MiLCJfZ2V0TGFiZWwiLCJfZ2V0TWVudUNsYXNzIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJfZ2V0T3B0aW9uIiwidGV4dCIsImRlZmF1bHRWYWx1ZSIsIm9uUmVhZHkiLCJzZXRWYWx1ZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZQcm9wcyIsInByZXZTdGF0ZSIsIm9uQ2hhbmdlIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsInBsYWNlaG9sZGVyIiwiXyIsImZpbmQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiX2hhbmRsZUNob29zZSIsImUiLCJ0YXJnZXQiLCJyZXNlcnZlZCIsImluY2x1ZGVzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJhcnJheSIsIm9uQnVzeSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7d01Bb0JKQyxLLEdBQVE7QUFDTkMsY0FBUSxLQURGO0FBRU5DLGFBQU8sSUFGRDtBQUdOQyxpQkFBVztBQUhMLEssUUFNUkMsVyxHQUFjLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE8sUUFDZEMsWSxHQUFlLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE87Ozs7OzZCQUVOO0FBQUE7O0FBQUEsVUFDQ0UsT0FERCxHQUNhLEtBQUtDLEtBRGxCLENBQ0NELE9BREQ7O0FBRVAsYUFDRTtB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ZDtBQUNEOzs7NkJBRVFBLEssRUFBTztBQUNkLFdBQUt1QixRQUFMLENBQWM7QUFDWnZCLG9CQURZO0FBRVpELGdCQUFRO0FBRkksT0FBZDtBQUlEOzs7RUFySW9Cd0MsZ0JBQU1DLFM7O0FBQXZCM0MsUSxDQUVHNEMsUyxHQUFZO0FBQ2pCMUIsZ0JBQWMyQixvQkFBVUMsTUFEUDtBQUVqQnRDLFdBQVNxQyxvQkFBVUUsS0FGRjtBQUdqQmYsZUFBYWEsb0JBQVVDLE1BSE47QUFJakJFLFVBQVFILG9CQUFVSSxJQUpEO0FBS2pCeEIsWUFBVW9CLG9CQUFVSSxJQUxIO0FBTWpCOUIsV0FBUzBCLG9CQUFVSTtBQU5GLEM7QUFGZmpELFEsQ0FXR2tELFksR0FBZTtBQUNwQmxCLGVBQWEscUJBRE87QUFFcEJkLGdCQUFjLElBRk07QUFHcEJWLFdBQVMsRUFIVztBQUlwQndDLFVBQVEsZ0JBQUM3QyxLQUFELEVBQVcsQ0FBRSxDQUpEO0FBS3BCc0IsWUFBVSxrQkFBQ3RCLEtBQUQsRUFBVyxDQUFFLENBTEg7QUFNcEJnQixXQUFTLG1CQUFNLENBQUU7QUFORyxDO2tCQThIVG5CLFEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkJ1c3k6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlYWR5OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBwbGFjZWhvbGRlcjogJ1NlbGVjdCBhbiBvcHRpb24uLi4nLFxuICAgIGRlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBvcHRpb25zOiBbXSxcbiAgICBvbkJ1c3k6ICh2YWx1ZSkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICh2YWx1ZSkgPT4ge30sXG4gICAgb25SZWFkeTogKCkgPT4ge31cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgdmFsdWU6IG51bGwsXG4gICAgYW5pbWF0aW5nOiBmYWxzZVxuICB9XG5cbiAgX2hhbmRsZU9wZW4gPSB0aGlzLl9oYW5kbGVPcGVuLmJpbmQodGhpcylcbiAgX2hhbmRsZUNsb3NlID0gdGhpcy5faGFuZGxlQ2xvc2UuYmluZCh0aGlzKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWRyb3Bkb3duXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGhpcy5fZ2V0RHJvcGRvd25DbGFzcygpIH0gb25DbGljaz17IHRoaXMuX2hhbmRsZU9wZW4gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlT3BlbiB9PnsgdGhpcy5fZ2V0TGFiZWwoKSB9PC9kaXY+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gaWNvblwiPjwvaT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMuX2dldE1lbnVDbGFzcygpIH0+XG4gICAgICAgICAgICB7IG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgb3B0aW9uXyR7aW5kZXh9YH0gey4uLnRoaXMuX2dldE9wdGlvbihvcHRpb24pfT5cbiAgICAgICAgICAgICAgICB7IG9wdGlvbi50ZXh0IH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUsIG9uUmVhZHkgfSA9IHRoaXMucHJvcHNcbiAgICBpZihkZWZhdWx0VmFsdWUpIHRoaXMuc2V0VmFsdWUoZGVmYXVsdFZhbHVlKVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2hhbmRsZUNsb3NlKVxuICAgIG9uUmVhZHkoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgY29uc3QgeyBhY3RpdmUsIHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYodmFsdWUgIT09IHByZXZTdGF0ZS52YWx1ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG4gICAgaWYoYWN0aXZlICE9PSBwcmV2U3RhdGUuYWN0aXZlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYW5pbWF0aW5nOiBmYWxzZVxuICAgICAgfSksIDI1MClcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9oYW5kbGVDbG9zZSlcbiAgfVxuXG4gIF9nZXREcm9wZG93bkNsYXNzKCkge1xuICAgIGNvbnN0IHsgYW5pbWF0aW5nLCBhY3RpdmUgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBjbGFzc2VzID0gWyd1aScsJ2ZsdWlkJywnc2VsZWN0aW9uJywnZHJvcGRvd24nXVxuICAgIGlmKGFjdGl2ZSkgY2xhc3Nlcy5wdXNoKCdhY3RpdmUnKVxuICAgIGlmKGFjdGl2ZSAmJiAhYW5pbWF0aW5nKSBjbGFzc2VzLnB1c2goJ3Zpc2libGUnKVxuICAgIGlmKCFhY3RpdmUgJiYgYW5pbWF0aW5nKSBjbGFzc2VzLnB1c2goJ3Zpc2libGUnKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldE1lbnVDbGFzcygpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSwgYW5pbWF0aW5nIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgY2xhc3NlcyA9IFsnbWVudScsJ3RyYW5zaXRpb24nXVxuICAgIGlmKCFhbmltYXRpbmcgJiYgIWFjdGl2ZSkgY2xhc3Nlcy5wdXNoKCdoaWRkZW4nKVxuICAgIGlmKGFuaW1hdGluZyB8fCBhY3RpdmUpIGNsYXNzZXMucHVzaCgndmlzaWJsZScpXG4gICAgaWYoYW5pbWF0aW5nICYmIGFjdGl2ZSkgY2xhc3Nlcy5wdXNoKCdhbmltYXRpbmcgc2xpZGUgZG93biBpbicpXG4gICAgaWYoYW5pbWF0aW5nICYmICFhY3RpdmUpIGNsYXNzZXMucHVzaCgnYW5pbWF0aW5nIHNsaWRlIGRvd24gb3V0JylcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJylcbiAgfVxuXG4gIF9nZXRMYWJlbCgpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3QgeyBvcHRpb25zLCBwbGFjZWhvbGRlciB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG9wdGlvbiA9IF8uZmluZChvcHRpb25zLCB7IHZhbHVlIH0pXG4gICAgcmV0dXJuIG9wdGlvbiA/IG9wdGlvbi50ZXh0IDogcGxhY2Vob2xkZXJcbiAgfVxuXG4gIF9nZXRPcHRpb24ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNsYXNzTmFtZTogJ2l0ZW0nLFxuICAgICAgb25DbGljazogdGhpcy5faGFuZGxlQ2hvb3NlLmJpbmQodGhpcywgb3B0aW9uLnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVPcGVuKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmKGFjdGl2ZSB8fCBlLnRhcmdldC5jbGFzc05hbWUgPT09ICdpdGVtJykgcmV0dXJuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IHRydWVcbiAgICB9KVxuICB9XG5cbiAgX2hhbmRsZUNsb3NlKGUpIHtcbiAgICBjb25zdCB7IGFjdGl2ZSB9ID0gdGhpcy5zdGF0ZVxuICAgIGNvbnN0IHJlc2VydmVkID0gWydpdGVtJywndGV4dCcsJ2Ryb3Bkb3duIGljb24nLCd1aSBzZWxlY3Rpb24gZHJvcGRvd24gYWN0aXZlIHZpc2libGUnXVxuICAgIGlmKCFhY3RpdmUgfHwgXy5pbmNsdWRlcyhyZXNlcnZlZCwgZS50YXJnZXQuY2xhc3NOYW1lKSkgcmV0dXJuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmU6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIF9oYW5kbGVDaG9vc2UodmFsdWUpIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHZhbHVlLFxuICAgICAgYWN0aXZlOiBmYWxzZVxuICAgIH0pXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEcm9wZG93blxuIl19