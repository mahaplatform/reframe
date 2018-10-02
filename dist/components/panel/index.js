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

var Panel = function (_React$Component) {
  (0, _inherits3.default)(Panel, _React$Component);

  function Panel() {
    (0, _classCallCheck3.default)(this, Panel);
    return (0, _possibleConstructorReturn3.default)(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  (0, _createClass3.default)(Panel, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          header = _props.header,
          component = _props.component;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-panel' },
        header && _react2.default.createElement(
          'div',
          { className: 'reframe-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-panel-inner' },
            _lodash2.default.isFunction() ? _react2.default.createElement(header) : header
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-panel-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-panel-inner' },
            _lodash2.default.isFunction(component) ? _react2.default.createElement(component) : component
          )
        )
      );
    }
  }]);
  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  component: _propTypes2.default.any,
  header: _propTypes2.default.any
};
exports.default = Panel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiUGFuZWwiLCJwcm9wcyIsImhlYWRlciIsImNvbXBvbmVudCIsIl8iLCJpc0Z1bmN0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsSzs7Ozs7Ozs7Ozs2QkFPSztBQUFBLG1CQUN1QixLQUFLQyxLQUQ1QjtBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLFNBRFQsVUFDU0EsU0FEVDs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNJRCxrQkFDQTtBQUFBO0FBQUEsWUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxxQkFBZjtBQUNJRSw2QkFBRUMsVUFBRixLQUFpQkMsZ0JBQU1DLGFBQU4sQ0FBb0JMLE1BQXBCLENBQWpCLEdBQStDQTtBQURuRDtBQURGLFNBRko7QUFRRTtBQUFBO0FBQUEsWUFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxxQkFBZjtBQUNJRSw2QkFBRUMsVUFBRixDQUFhRixTQUFiLElBQTBCRyxnQkFBTUMsYUFBTixDQUFvQkosU0FBcEIsQ0FBMUIsR0FBMkRBO0FBRC9EO0FBREY7QUFSRixPQURGO0FBZ0JEOzs7RUF6QmlCRyxnQkFBTUUsUzs7QUFBcEJSLEssQ0FFR1MsUyxHQUFZO0FBQ2pCTixhQUFXTyxvQkFBVUMsR0FESjtBQUVqQlQsVUFBUVEsb0JBQVVDO0FBRkQsQztrQkEyQk5YLEsiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgUGFuZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuICAgIGhlYWRlcjogUHJvcFR5cGVzLmFueVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGVhZGVyLCBjb21wb25lbnQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXBhbmVsXCI+XG4gICAgICAgIHsgaGVhZGVyICYmXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXBhbmVsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXBhbmVsLWlubmVyXCI+XG4gICAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGhlYWRlcikgOiBoZWFkZXIgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXBhbmVsLWJvZHlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtcGFuZWwtaW5uZXJcIj5cbiAgICAgICAgICAgIHsgXy5pc0Z1bmN0aW9uKGNvbXBvbmVudCkgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCkgOiBjb21wb25lbnQgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhbmVsXG4iXX0=