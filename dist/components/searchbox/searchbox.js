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
    (0, _classCallCheck3.default)(this, Searchbox);
    return (0, _possibleConstructorReturn3.default)(this, (Searchbox.__proto__ || Object.getPrototypeOf(Searchbox)).apply(this, arguments));
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleChange = _lodash2.default.throttle(this.props.onChange, 500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiU2VhcmNoYm94IiwicHJvcHMiLCJpY29uIiwicSIsIl9nZXRDbGFzcyIsIl9oYW5kbGVJY29uIiwiYmluZCIsIl9nZXRJbnB1dCIsImxlbmd0aCIsIl9oYW5kbGVBYm9ydCIsIl9oYW5kbGVDaGFuZ2UiLCJfIiwidGhyb3R0bGUiLCJvbkNoYW5nZSIsImNsYXNzZXMiLCJhY3RpdmUiLCJwdXNoIiwiam9pbiIsInByb21wdCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25Gb2N1cyIsIl9oYW5kbGVCZWdpbiIsIm9uQmx1ciIsIl9oYW5kbGVFbmQiLCJfaGFuZGxlVHlwZSIsInByZXZQcm9wcyIsIm9uSWNvbiIsIm9uQmVnaW4iLCJvbkVuZCIsImUiLCJvblR5cGUiLCJ0YXJnZXQiLCJvbkFib3J0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFM7Ozs7Ozs7Ozs7NkJBcUJLO0FBQUEsbUJBQ2EsS0FBS0MsS0FEbEI7QUFBQSxVQUNDQyxJQURELFVBQ0NBLElBREQ7QUFBQSxVQUNPQyxDQURQLFVBQ09BLENBRFA7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFZLEtBQUtDLFNBQUwsRUFBakI7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLDZCQUFmO0FBQ0lGLGtCQUNBO0FBQUE7QUFBQSxjQUFLLFdBQVUseUJBQWYsRUFBeUMsU0FBVSxLQUFLRyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFuRDtBQUNFLGlEQUFHLDRCQUEyQkosSUFBOUI7QUFERixXQUZKO0FBTUU7QUFBQTtBQUFBLGNBQUssV0FBVSx5QkFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLHdCQUFmO0FBQ0UsbURBQUcsV0FBVSxjQUFiO0FBREYsYUFERjtBQUlFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLHlCQUFmO0FBQ0UscURBQVksS0FBS0ssU0FBTCxFQUFaO0FBREYsYUFKRjtBQU9JSixjQUFFSyxNQUFGLEdBQVcsQ0FBWCxJQUNBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLCtCQUFmLEVBQStDLFNBQVUsS0FBS0MsWUFBTCxDQUFrQkgsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBekQ7QUFDRSxtREFBRyxXQUFVLG9CQUFiO0FBREY7QUFSSjtBQU5GO0FBREYsT0FERjtBQXdCRDs7O3dDQUVtQjtBQUNsQixXQUFLSSxhQUFMLEdBQXFCQyxpQkFBRUMsUUFBRixDQUFXLEtBQUtYLEtBQUwsQ0FBV1ksUUFBdEIsRUFBZ0MsR0FBaEMsQ0FBckI7QUFDRDs7O2dDQUVXO0FBQ1YsVUFBTUMsVUFBVSxDQUFDLG1CQUFELENBQWhCO0FBQ0EsVUFBRyxLQUFLYixLQUFMLENBQVdjLE1BQWQsRUFBc0JELFFBQVFFLElBQVIsQ0FBYSxRQUFiO0FBQ3RCLGFBQU9GLFFBQVFHLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRDs7O2dDQUVXO0FBQUEsb0JBQ1ksS0FBS2hCLEtBRGpCO0FBQUEsVUFDRmlCLE1BREUsV0FDRkEsTUFERTtBQUFBLFVBQ01mLENBRE4sV0FDTUEsQ0FETjs7QUFFVixhQUFPO0FBQ0xnQixjQUFNLE1BREQ7QUFFTEMscUJBQWFGLE1BRlI7QUFHTEcsZUFBT2xCLENBSEY7QUFJTG1CLGlCQUFTLEtBQUtDLFlBQUwsQ0FBa0JqQixJQUFsQixDQUF1QixJQUF2QixDQUpKO0FBS0xrQixnQkFBUSxLQUFLQyxVQUFMLENBQWdCbkIsSUFBaEIsQ0FBcUIsSUFBckIsQ0FMSDtBQU1MTyxrQkFBVSxLQUFLYSxXQUFMLENBQWlCcEIsSUFBakIsQ0FBc0IsSUFBdEI7QUFOTCxPQUFQO0FBUUQ7Ozt1Q0FFa0JxQixTLEVBQVc7QUFBQSxVQUNwQnhCLENBRG9CLEdBQ2QsS0FBS0YsS0FEUyxDQUNwQkUsQ0FEb0I7O0FBRTVCLFVBQUdBLE1BQU13QixVQUFVeEIsQ0FBbkIsRUFBc0IsS0FBS08sYUFBTCxDQUFtQlAsQ0FBbkI7QUFDdkI7OztrQ0FFYTtBQUNaLFdBQUtGLEtBQUwsQ0FBVzJCLE1BQVg7QUFDRDs7O21DQUVjO0FBQ2IsV0FBSzNCLEtBQUwsQ0FBVzRCLE9BQVg7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBSzVCLEtBQUwsQ0FBVzZCLEtBQVg7QUFDRDs7O2dDQUVXQyxDLEVBQUc7QUFBQSxVQUNMQyxNQURLLEdBQ00sS0FBSy9CLEtBRFgsQ0FDTCtCLE1BREs7O0FBRWJBLGFBQU9ELEVBQUVFLE1BQUYsQ0FBU1osS0FBaEI7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS3BCLEtBQUwsQ0FBV2lDLE9BQVg7QUFDRDs7O0VBL0ZxQkMsZ0JBQU1DLFM7O0FBQXhCcEMsUyxDQUVHcUMsUyxHQUFZO0FBQ2pCdEIsVUFBUXVCLG9CQUFVQyxJQUREO0FBRWpCckMsUUFBTW9DLG9CQUFVRSxNQUZDO0FBR2pCdEIsVUFBUW9CLG9CQUFVRSxNQUhEO0FBSWpCckMsS0FBR21DLG9CQUFVRSxNQUpJO0FBS2pCTixXQUFTSSxvQkFBVUcsSUFMRjtBQU1qQlosV0FBU1Msb0JBQVVHLElBTkY7QUFPakI1QixZQUFVeUIsb0JBQVVHLElBUEg7QUFRakJYLFNBQU9RLG9CQUFVRyxJQVJBO0FBU2pCYixVQUFRVSxvQkFBVUcsSUFURDtBQVVqQlQsVUFBUU0sb0JBQVVHO0FBVkQsQztBQUZmekMsUyxDQWVHMEMsWSxHQUFlO0FBQ3BCeEIsVUFBUSxXQURZO0FBRXBCZixLQUFHLEVBRmlCO0FBR3BCVSxZQUFVLGtCQUFDUSxLQUFELEVBQVcsQ0FBRTtBQUhILEM7a0JBb0ZUckIsUyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBTZWFyY2hib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHByb21wdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBxOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQWJvcnQ6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmVnaW46IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVuZDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25JY29uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblR5cGU6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHByb21wdDogJ1NlYXJjaC4uLicsXG4gICAgcTogJycsXG4gICAgb25DaGFuZ2U6ICh2YWx1ZSkgPT4ge31cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGljb24sIHEgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyB0aGlzLl9nZXRDbGFzcygpIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2hib3gtY29udGFpbmVyXCI+XG4gICAgICAgICAgeyBpY29uICYmIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaGJveC1leHRyYVwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVJY29uLmJpbmQodGhpcykgfT5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXsgYGZhIGZhLWZ3IGZhLSR7aWNvbn1gIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtc2VhcmNoYm94LWlucHV0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtc2VhcmNoYm94LWljb25cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaGJveC1maWVsZFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgeyAuLi50aGlzLl9nZXRJbnB1dCgpIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyBxLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaGJveC1yZW1vdmUtaWNvblwiIG9uQ2xpY2s9eyB0aGlzLl9oYW5kbGVBYm9ydC5iaW5kKHRoaXMpIH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGltZXMtY2lyY2xlXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5faGFuZGxlQ2hhbmdlID0gXy50aHJvdHRsZSh0aGlzLnByb3BzLm9uQ2hhbmdlLCA1MDApXG4gIH1cblxuICBfZ2V0Q2xhc3MoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFsncmVmcmFtZS1zZWFyY2hib3gnXVxuICAgIGlmKHRoaXMucHJvcHMuYWN0aXZlKSBjbGFzc2VzLnB1c2goJ2FjdGl2ZScpXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpXG4gIH1cblxuICBfZ2V0SW5wdXQoKSB7XG4gICAgY29uc3QgeyBwcm9tcHQsIHEgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgcGxhY2Vob2xkZXI6IHByb21wdCxcbiAgICAgIHZhbHVlOiBxLFxuICAgICAgb25Gb2N1czogdGhpcy5faGFuZGxlQmVnaW4uYmluZCh0aGlzKSxcbiAgICAgIG9uQmx1cjogdGhpcy5faGFuZGxlRW5kLmJpbmQodGhpcyksXG4gICAgICBvbkNoYW5nZTogdGhpcy5faGFuZGxlVHlwZS5iaW5kKHRoaXMpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGNvbnN0IHsgcSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKHEgIT09IHByZXZQcm9wcy5xKSB0aGlzLl9oYW5kbGVDaGFuZ2UocSlcbiAgfVxuICBcbiAgX2hhbmRsZUljb24oKSB7XG4gICAgdGhpcy5wcm9wcy5vbkljb24oKVxuICB9XG5cbiAgX2hhbmRsZUJlZ2luKCkge1xuICAgIHRoaXMucHJvcHMub25CZWdpbigpXG4gIH1cblxuICBfaGFuZGxlRW5kKCkge1xuICAgIHRoaXMucHJvcHMub25FbmQoKVxuICB9XG5cbiAgX2hhbmRsZVR5cGUoZSkge1xuICAgIGNvbnN0IHsgb25UeXBlIH0gPSB0aGlzLnByb3BzXG4gICAgb25UeXBlKGUudGFyZ2V0LnZhbHVlKVxuICB9XG5cbiAgX2hhbmRsZUFib3J0KCkge1xuICAgIHRoaXMucHJvcHMub25BYm9ydCgpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hib3hcbiJdfQ==