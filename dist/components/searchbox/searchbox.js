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

var Searchbox = function (_React$Component) {
  (0, _inherits3.default)(Searchbox, _React$Component);

  function Searchbox() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Searchbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Searchbox.__proto__ || Object.getPrototypeOf(Searchbox)).call.apply(_ref, [this].concat(args))), _this), _this._handleChange = _lodash2.default.throttle(_this._handleChange, 500), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Searchbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          q = _props.q;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        _react2.default.createElement(
          'div',
          { className: 'reframe-searchbox-container' },
          icon && _react2.default.createElement(
            'div',
            { className: 'reframe-searchbox-extra', onClick: this._handleIcon.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-fw fa-' + icon })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-searchbox-input' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-searchbox-icon' },
              _react2.default.createElement('i', { className: 'fa fa-search' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-searchbox-field' },
              _react2.default.createElement('input', this._getInput())
            ),
            q.length > 0 && _react2.default.createElement(
              'div',
              { className: 'reframe-searchbox-remove-icon', onClick: this._handleAbort.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa-times-circle' })
            )
          )
        )
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var classes = ['reframe-searchbox'];
      if (this.props.active) classes.push('active');
      return classes.join(' ');
    }
  }, {
    key: '_getInput',
    value: function _getInput() {
      var _props2 = this.props,
          prompt = _props2.prompt,
          q = _props2.q;

      return {
        type: 'text',
        placeholder: prompt,
        value: q,
        onFocus: this._handleBegin.bind(this),
        onBlur: this._handleEnd.bind(this),
        onChange: this._handleType.bind(this)
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var q = this.props.q;

      if (q !== prevProps.q) this._handleChange(q);
    }
  }, {
    key: '_handleIcon',
    value: function _handleIcon() {
      this.props.onIcon();
    }
  }, {
    key: '_handleBegin',
    value: function _handleBegin() {
      this.props.onBegin();
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(q) {
      this.props.onChange(q);
    }
  }, {
    key: '_handleEnd',
    value: function _handleEnd() {
      this.props.onEnd();
    }
  }, {
    key: '_handleType',
    value: function _handleType(e) {
      var onType = this.props.onType;

      onType(e.target.value);
    }
  }, {
    key: '_handleAbort',
    value: function _handleAbort() {
      this.props.onAbort();
    }
  }]);
  return Searchbox;
}(_react2.default.Component);

Searchbox.propTypes = {
  active: _propTypes2.default.bool,
  icon: _propTypes2.default.string,
  prompt: _propTypes2.default.string,
  q: _propTypes2.default.string,
  onAbort: _propTypes2.default.func,
  onBegin: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onEnd: _propTypes2.default.func,
  onIcon: _propTypes2.default.func,
  onType: _propTypes2.default.func
};
Searchbox.defaultProps = {
  prompt: 'Search...',
  q: '',
  onChange: function onChange(value) {}
};
exports.default = Searchbox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2VhcmNoYm94IiwiX2hhbmRsZUNoYW5nZSIsIl8iLCJ0aHJvdHRsZSIsInByb3BzIiwiaWNvbiIsInEiLCJfZ2V0Q2xhc3MiLCJfaGFuZGxlSWNvbiIsImJpbmQiLCJfZ2V0SW5wdXQiLCJsZW5ndGgiLCJfaGFuZGxlQWJvcnQiLCJjbGFzc2VzIiwiYWN0aXZlIiwicHVzaCIsImpvaW4iLCJwcm9tcHQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uRm9jdXMiLCJfaGFuZGxlQmVnaW4iLCJvbkJsdXIiLCJfaGFuZGxlRW5kIiwib25DaGFuZ2UiLCJfaGFuZGxlVHlwZSIsInByZXZQcm9wcyIsIm9uSWNvbiIsIm9uQmVnaW4iLCJvbkVuZCIsImUiLCJvblR5cGUiLCJ0YXJnZXQiLCJvbkFib3J0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFM7Ozs7Ozs7Ozs7Ozs7OzBNQXFCSkMsYSxHQUFnQkMsaUJBQUVDLFFBQUYsQ0FBVyxNQUFLRixhQUFoQixFQUErQixHQUEvQixDOzs7Ozs2QkFHUDtBQUFBLG1CQUNhLEtBQUtHLEtBRGxCO0FBQUEsVUFDQ0MsSUFERCxVQUNDQSxJQUREO0FBQUEsVUFDT0MsQ0FEUCxVQUNPQSxDQURQOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBWSxLQUFLQyxTQUFMLEVBQWpCO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSw2QkFBZjtBQUNJRixrQkFDQTtBQUFBO0FBQUEsY0FBSyxXQUFVLHlCQUFmLEVBQXlDLFNBQVUsS0FBS0csV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkQ7QUFDRSxpREFBRyw0QkFBMkJKLElBQTlCO0FBREYsV0FGSjtBQU1FO0FBQUE7QUFBQSxjQUFLLFdBQVUseUJBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSx3QkFBZjtBQUNFLG1EQUFHLFdBQVUsY0FBYjtBQURGLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSx5QkFBZjtBQUNFLHFEQUFZLEtBQUtLLFNBQUwsRUFBWjtBQURGLGFBSkY7QUFPSUosY0FBRUssTUFBRixHQUFXLENBQVgsSUFDQTtBQUFBO0FBQUEsZ0JBQUssV0FBVSwrQkFBZixFQUErQyxTQUFVLEtBQUtDLFlBQUwsQ0FBa0JILElBQWxCLENBQXVCLElBQXZCLENBQXpEO0FBQ0UsbURBQUcsV0FBVSxvQkFBYjtBQURGO0FBUko7QUFORjtBQURGLE9BREY7QUF3QkQ7OztnQ0FFVztBQUNWLFVBQU1JLFVBQVUsQ0FBQyxtQkFBRCxDQUFoQjtBQUNBLFVBQUcsS0FBS1QsS0FBTCxDQUFXVSxNQUFkLEVBQXNCRCxRQUFRRSxJQUFSLENBQWEsUUFBYjtBQUN0QixhQUFPRixRQUFRRyxJQUFSLENBQWEsR0FBYixDQUFQO0FBQ0Q7OztnQ0FFVztBQUFBLG9CQUNZLEtBQUtaLEtBRGpCO0FBQUEsVUFDRmEsTUFERSxXQUNGQSxNQURFO0FBQUEsVUFDTVgsQ0FETixXQUNNQSxDQUROOztBQUVWLGFBQU87QUFDTFksY0FBTSxNQUREO0FBRUxDLHFCQUFhRixNQUZSO0FBR0xHLGVBQU9kLENBSEY7QUFJTGUsaUJBQVMsS0FBS0MsWUFBTCxDQUFrQmIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FKSjtBQUtMYyxnQkFBUSxLQUFLQyxVQUFMLENBQWdCZixJQUFoQixDQUFxQixJQUFyQixDQUxIO0FBTUxnQixrQkFBVSxLQUFLQyxXQUFMLENBQWlCakIsSUFBakIsQ0FBc0IsSUFBdEI7QUFOTCxPQUFQO0FBUUQ7Ozt1Q0FFa0JrQixTLEVBQVc7QUFBQSxVQUNwQnJCLENBRG9CLEdBQ2QsS0FBS0YsS0FEUyxDQUNwQkUsQ0FEb0I7O0FBRTVCLFVBQUdBLE1BQU1xQixVQUFVckIsQ0FBbkIsRUFBc0IsS0FBS0wsYUFBTCxDQUFtQkssQ0FBbkI7QUFDdkI7OztrQ0FFYTtBQUNaLFdBQUtGLEtBQUwsQ0FBV3dCLE1BQVg7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS3hCLEtBQUwsQ0FBV3lCLE9BQVg7QUFDRDs7O2tDQUVhdkIsQyxFQUFHO0FBQ2YsV0FBS0YsS0FBTCxDQUFXcUIsUUFBWCxDQUFvQm5CLENBQXBCO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtGLEtBQUwsQ0FBVzBCLEtBQVg7QUFDRDs7O2dDQUVXQyxDLEVBQUc7QUFBQSxVQUNMQyxNQURLLEdBQ00sS0FBSzVCLEtBRFgsQ0FDTDRCLE1BREs7O0FBRWJBLGFBQU9ELEVBQUVFLE1BQUYsQ0FBU2IsS0FBaEI7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS2hCLEtBQUwsQ0FBVzhCLE9BQVg7QUFDRDs7O0VBbEdxQkMsZ0JBQU1DLFM7O0FBQXhCcEMsUyxDQUVHcUMsUyxHQUFZO0FBQ2pCdkIsVUFBUXdCLG9CQUFVQyxJQUREO0FBRWpCbEMsUUFBTWlDLG9CQUFVRSxNQUZDO0FBR2pCdkIsVUFBUXFCLG9CQUFVRSxNQUhEO0FBSWpCbEMsS0FBR2dDLG9CQUFVRSxNQUpJO0FBS2pCTixXQUFTSSxvQkFBVUcsSUFMRjtBQU1qQlosV0FBU1Msb0JBQVVHLElBTkY7QUFPakJoQixZQUFVYSxvQkFBVUcsSUFQSDtBQVFqQlgsU0FBT1Esb0JBQVVHLElBUkE7QUFTakJiLFVBQVFVLG9CQUFVRyxJQVREO0FBVWpCVCxVQUFRTSxvQkFBVUc7QUFWRCxDO0FBRmZ6QyxTLENBZUcwQyxZLEdBQWU7QUFDcEJ6QixVQUFRLFdBRFk7QUFFcEJYLEtBQUcsRUFGaUI7QUFHcEJtQixZQUFVLGtCQUFDTCxLQUFELEVBQVcsQ0FBRTtBQUhILEM7a0JBdUZUcEIsUyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBTZWFyY2hib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByb21wdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBxOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQWJvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmVnaW46IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25JY29uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblR5cGU6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHByb21wdDogJ1NlYXJjaC4uLicsXG4gICAgcTogJycsXG4gICAgb25DaGFuZ2U6ICh2YWx1ZSkgPT4ge31cbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UgPSBfLnRocm90dGxlKHRoaXMuX2hhbmRsZUNoYW5nZSwgNTAwKVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgcSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRoaXMuX2dldENsYXNzKCkgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaGJveC1jb250YWluZXJcIj5cbiAgICAgICAgICB7IGljb24gJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2hib3gtZXh0cmFcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlSWNvbi5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17IGBmYSBmYS1mdyBmYS0ke2ljb259YCB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaGJveC1pbnB1dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaGJveC1pY29uXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlYXJjaFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2hib3gtZmllbGRcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHsgLi4udGhpcy5fZ2V0SW5wdXQoKSB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsgcS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2hib3gtcmVtb3ZlLWljb25cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlQWJvcnQuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzLWNpcmNsZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9nZXRDbGFzcygpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gWydyZWZyYW1lLXNlYXJjaGJveCddXG4gICAgaWYodGhpcy5wcm9wcy5hY3RpdmUpIGNsYXNzZXMucHVzaCgnYWN0aXZlJylcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKCcgJylcbiAgfVxuXG4gIF9nZXRJbnB1dCgpIHtcbiAgICBjb25zdCB7IHByb21wdCwgcSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBwbGFjZWhvbGRlcjogcHJvbXB0LFxuICAgICAgdmFsdWU6IHEsXG4gICAgICBvbkZvY3VzOiB0aGlzLl9oYW5kbGVCZWdpbi5iaW5kKHRoaXMpLFxuICAgICAgb25CbHVyOiB0aGlzLl9oYW5kbGVFbmQuYmluZCh0aGlzKSxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLl9oYW5kbGVUeXBlLmJpbmQodGhpcylcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgY29uc3QgeyBxIH0gPSB0aGlzLnByb3BzXG4gICAgaWYocSAhPT0gcHJldlByb3BzLnEpIHRoaXMuX2hhbmRsZUNoYW5nZShxKVxuICB9XG5cbiAgX2hhbmRsZUljb24oKSB7XG4gICAgdGhpcy5wcm9wcy5vbkljb24oKVxuICB9XG5cbiAgX2hhbmRsZUJlZ2luKCkge1xuICAgIHRoaXMucHJvcHMub25CZWdpbigpXG4gIH1cblxuICBfaGFuZGxlQ2hhbmdlKHEpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHEpXG4gIH1cblxuICBfaGFuZGxlRW5kKCkge1xuICAgIHRoaXMucHJvcHMub25FbmQoKVxuICB9XG5cbiAgX2hhbmRsZVR5cGUoZSkge1xuICAgIGNvbnN0IHsgb25UeXBlIH0gPSB0aGlzLnByb3BzXG4gICAgb25UeXBlKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgX2hhbmRsZUFib3J0KCkge1xuICAgIHRoaXMucHJvcHMub25BYm9ydCgpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hib3hcbiJdfQ==