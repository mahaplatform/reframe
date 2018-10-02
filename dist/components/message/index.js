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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function (_React$Component) {
  (0, _inherits3.default)(Message, _React$Component);

  function Message() {
    (0, _classCallCheck3.default)(this, Message);
    return (0, _possibleConstructorReturn3.default)(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  (0, _createClass3.default)(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          button = _props.button,
          component = _props.component,
          icon = _props.icon,
          image = _props.image,
          text = _props.text,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-message' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-message-panel' },
          icon && _react2.default.createElement(
            'div',
            { className: 'reframe-message-panel-icon' },
            _react2.default.createElement(
              'h2',
              null,
              _react2.default.createElement('i', { className: this._getIconClass() })
            )
          ),
          image && _react2.default.createElement(
            'div',
            { className: 'reframe-message-panel-icon' },
            _react2.default.createElement('img', { src: image })
          ),
          title && _react2.default.createElement(
            'h3',
            null,
            title
          ),
          text && _react2.default.createElement(
            'p',
            null,
            text
          ),
          component,
          button && _react2.default.createElement(_button2.default, this._getButton())
        )
      );
    }
  }, {
    key: '_getIconClass',
    value: function _getIconClass() {
      var _props2 = this.props,
          animation = _props2.animation,
          color = _props2.color,
          icon = _props2.icon;

      var classes = ['fa', 'fa-' + icon];
      if (animation) classes.push('animated ' + animation);
      if (color) classes.push(color);
      return classes.join(' ');
    }
  }, {
    key: '_getButton',
    value: function _getButton() {
      var button = this.props.button;

      return {
        basic: true,
        color: 'red',
        label: button.label,
        modal: button.modal,
        handler: button.handler,
        request: button.request
      };
    }
  }]);
  return Message;
}(_react2.default.Component);

Message.contextTypes = {
  modal: _propTypes2.default.object
};
Message.propTypes = {
  animation: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  image: _propTypes2.default.string,
  text: _propTypes2.default.string,
  title: _propTypes2.default.string,
  color: _propTypes2.default.string,
  component: _propTypes2.default.object,
  button: _propTypes2.default.object
};
Message.defaultProps = {
  animation: null,
  color: null
};
exports.default = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiTWVzc2FnZSIsInByb3BzIiwiYnV0dG9uIiwiY29tcG9uZW50IiwiaWNvbiIsImltYWdlIiwidGV4dCIsInRpdGxlIiwiX2dldEljb25DbGFzcyIsIl9nZXRCdXR0b24iLCJhbmltYXRpb24iLCJjb2xvciIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsImJhc2ljIiwibGFiZWwiLCJtb2RhbCIsImhhbmRsZXIiLCJyZXF1ZXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb250ZXh0VHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OzZCQXNCSztBQUFBLG1CQUNpRCxLQUFLQyxLQUR0RDtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLFNBRFQsVUFDU0EsU0FEVDtBQUFBLFVBQ29CQyxJQURwQixVQUNvQkEsSUFEcEI7QUFBQSxVQUMwQkMsS0FEMUIsVUFDMEJBLEtBRDFCO0FBQUEsVUFDaUNDLElBRGpDLFVBQ2lDQSxJQURqQztBQUFBLFVBQ3VDQyxLQUR2QyxVQUN1Q0EsS0FEdkM7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGlCQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx1QkFBZjtBQUNJSCxrQkFDQTtBQUFBO0FBQUEsY0FBSyxXQUFVLDRCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbURBQUcsV0FBWSxLQUFLSSxhQUFMLEVBQWY7QUFERjtBQURGLFdBRko7QUFRSUgsbUJBQ0E7QUFBQTtBQUFBLGNBQUssV0FBVSw0QkFBZjtBQUNFLG1EQUFLLEtBQU1BLEtBQVg7QUFERixXQVRKO0FBYUlFLG1CQUFTO0FBQUE7QUFBQTtBQUFNQTtBQUFOLFdBYmI7QUFjSUQsa0JBQVE7QUFBQTtBQUFBO0FBQUtBO0FBQUwsV0FkWjtBQWVJSCxtQkFmSjtBQWdCSUQsb0JBQVUsOEJBQUMsZ0JBQUQsRUFBYSxLQUFLTyxVQUFMLEVBQWI7QUFoQmQ7QUFERixPQURGO0FBc0JEOzs7b0NBRWU7QUFBQSxvQkFDcUIsS0FBS1IsS0FEMUI7QUFBQSxVQUNOUyxTQURNLFdBQ05BLFNBRE07QUFBQSxVQUNLQyxLQURMLFdBQ0tBLEtBREw7QUFBQSxVQUNZUCxJQURaLFdBQ1lBLElBRFo7O0FBRWQsVUFBTVEsVUFBVSxDQUFDLElBQUQsVUFBYVIsSUFBYixDQUFoQjtBQUNBLFVBQUdNLFNBQUgsRUFBY0UsUUFBUUMsSUFBUixlQUF5QkgsU0FBekI7QUFDZCxVQUFHQyxLQUFILEVBQVVDLFFBQVFDLElBQVIsQ0FBYUYsS0FBYjtBQUNWLGFBQU9DLFFBQVFFLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRDs7O2lDQUVZO0FBQUEsVUFDSFosTUFERyxHQUNRLEtBQUtELEtBRGIsQ0FDSEMsTUFERzs7QUFFWCxhQUFPO0FBQ0xhLGVBQU8sSUFERjtBQUVMSixlQUFPLEtBRkY7QUFHTEssZUFBT2QsT0FBT2MsS0FIVDtBQUlMQyxlQUFPZixPQUFPZSxLQUpUO0FBS0xDLGlCQUFTaEIsT0FBT2dCLE9BTFg7QUFNTEMsaUJBQVNqQixPQUFPaUI7QUFOWCxPQUFQO0FBUUQ7OztFQWxFbUJDLGdCQUFNQyxTOztBQUF0QnJCLE8sQ0FFR3NCLFksR0FBZTtBQUNwQkwsU0FBT00sb0JBQVVDO0FBREcsQztBQUZsQnhCLE8sQ0FNR3lCLFMsR0FBWTtBQUNqQmYsYUFBV2Esb0JBQVVHLE1BREo7QUFFakJ0QixRQUFNbUIsb0JBQVVHLE1BRkM7QUFHakJyQixTQUFPa0Isb0JBQVVHLE1BSEE7QUFJakJwQixRQUFNaUIsb0JBQVVHLE1BSkM7QUFLakJuQixTQUFPZ0Isb0JBQVVHLE1BTEE7QUFNakJmLFNBQU9ZLG9CQUFVRyxNQU5BO0FBT2pCdkIsYUFBV29CLG9CQUFVQyxNQVBKO0FBUWpCdEIsVUFBUXFCLG9CQUFVQztBQVJELEM7QUFOZnhCLE8sQ0FpQkcyQixZLEdBQWU7QUFDcEJqQixhQUFXLElBRFM7QUFFcEJDLFNBQU87QUFGYSxDO2tCQXFEVFgsTyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgbW9kYWw6IFByb3BUeXBlcy5vYmplY3RcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb21wb25lbnQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgYnV0dG9uOiBQcm9wVHlwZXMub2JqZWN0XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFuaW1hdGlvbjogbnVsbCxcbiAgICBjb2xvcjogbnVsbFxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYnV0dG9uLCBjb21wb25lbnQsIGljb24sIGltYWdlLCB0ZXh0LCB0aXRsZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbWVzc2FnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtbWVzc2FnZS1wYW5lbFwiPlxuICAgICAgICAgIHsgaWNvbiAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLW1lc3NhZ2UtcGFuZWwtaWNvblwiPlxuICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXsgdGhpcy5fZ2V0SWNvbkNsYXNzKCkgfSAvPlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsgaW1hZ2UgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1tZXNzYWdlLXBhbmVsLWljb25cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9eyBpbWFnZSB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgeyB0aXRsZSAmJiA8aDM+eyB0aXRsZSB9PC9oMz4gfVxuICAgICAgICAgIHsgdGV4dCAmJiA8cD57IHRleHQgfTwvcD4gfVxuICAgICAgICAgIHsgY29tcG9uZW50IH1cbiAgICAgICAgICB7IGJ1dHRvbiAmJiA8QnV0dG9uIHsgLi4udGhpcy5fZ2V0QnV0dG9uKCkgfSAvPiB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldEljb25DbGFzcygpIHtcbiAgICBjb25zdCB7IGFuaW1hdGlvbiwgY29sb3IsIGljb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBjbGFzc2VzID0gWydmYScsIGBmYS0ke2ljb259YF1cbiAgICBpZihhbmltYXRpb24pIGNsYXNzZXMucHVzaChgYW5pbWF0ZWQgJHthbmltYXRpb259YClcbiAgICBpZihjb2xvcikgY2xhc3Nlcy5wdXNoKGNvbG9yKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldEJ1dHRvbigpIHtcbiAgICBjb25zdCB7IGJ1dHRvbiB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICBiYXNpYzogdHJ1ZSxcbiAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgIGxhYmVsOiBidXR0b24ubGFiZWwsXG4gICAgICBtb2RhbDogYnV0dG9uLm1vZGFsLFxuICAgICAgaGFuZGxlcjogYnV0dG9uLmhhbmRsZXIsXG4gICAgICByZXF1ZXN0OiBidXR0b24ucmVxdWVzdFxuICAgIH1cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VcbiJdfQ==