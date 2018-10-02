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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function (_React$Component) {
  (0, _inherits3.default)(Progress, _React$Component);

  function Progress() {
    (0, _classCallCheck3.default)(this, Progress);
    return (0, _possibleConstructorReturn3.default)(this, (Progress.__proto__ || Object.getPrototypeOf(Progress)).apply(this, arguments));
  }

  (0, _createClass3.default)(Progress, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          title = _props.title,
          text = _props.text;

      var percent = this._getPercent();
      return _react2.default.createElement(
        'div',
        { className: 'reframe-progress' },
        _react2.default.createElement(
          'div',
          { className: 'pie p' + percent },
          _react2.default.createElement(
            'span',
            null,
            label || percent + '%'
          ),
          _react2.default.createElement(
            'div',
            { className: 'slice' },
            _react2.default.createElement('div', { className: 'bar' }),
            _react2.default.createElement('div', { className: 'fill' })
          )
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
        )
      );
    }
  }, {
    key: '_getPercent',
    value: function _getPercent() {
      var percent = this.props.percent;

      return parseInt(percent);
    }
  }]);
  return Progress;
}(_react2.default.Component);

Progress.propTypes = {
  label: _propTypes2.default.string,
  percent: _propTypes2.default.number,
  text: _propTypes2.default.string,
  title: _propTypes2.default.string
};
exports.default = Progress;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiUHJvZ3Jlc3MiLCJwcm9wcyIsImxhYmVsIiwidGl0bGUiLCJ0ZXh0IiwicGVyY2VudCIsIl9nZXRQZXJjZW50IiwicGFyc2VJbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUVNQSxROzs7Ozs7Ozs7OzZCQVNLO0FBQUEsbUJBQ3dCLEtBQUtDLEtBRDdCO0FBQUEsVUFDQ0MsS0FERCxVQUNDQSxLQUREO0FBQUEsVUFDUUMsS0FEUixVQUNRQSxLQURSO0FBQUEsVUFDZUMsSUFEZixVQUNlQSxJQURmOztBQUVQLFVBQU1DLFVBQVUsS0FBS0MsV0FBTCxFQUFoQjtBQUNBLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLHFCQUFvQkQsT0FBekI7QUFDRTtBQUFBO0FBQUE7QUFBUUgscUJBQVlHLE9BQVo7QUFBUixXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxPQUFmO0FBQ0UsbURBQUssV0FBVSxLQUFmLEdBREY7QUFFRSxtREFBSyxXQUFVLE1BQWY7QUFGRjtBQUZGLFNBREY7QUFRSUYsaUJBQVM7QUFBQTtBQUFBO0FBQU1BO0FBQU4sU0FSYjtBQVNJQyxnQkFBUTtBQUFBO0FBQUE7QUFBS0E7QUFBTDtBQVRaLE9BREY7QUFhRDs7O2tDQUVhO0FBQUEsVUFDSkMsT0FESSxHQUNRLEtBQUtKLEtBRGIsQ0FDSkksT0FESTs7QUFFWixhQUFPRSxTQUFTRixPQUFULENBQVA7QUFDRDs7O0VBOUJvQkcsZ0JBQU1DLFM7O0FBQXZCVCxRLENBRUdVLFMsR0FBWTtBQUNqQlIsU0FBT1Msb0JBQVVDLE1BREE7QUFFakJQLFdBQVNNLG9CQUFVRSxNQUZGO0FBR2pCVCxRQUFNTyxvQkFBVUMsTUFIQztBQUlqQlQsU0FBT1Esb0JBQVVDO0FBSkEsQztrQkFnQ05aLFEiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcblxuY2xhc3MgUHJvZ3Jlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGVyY2VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgdGl0bGUsIHRleHQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwZXJjZW50ID0gdGhpcy5fZ2V0UGVyY2VudCgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1wcm9ncmVzc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGBwaWUgcCR7cGVyY2VudH1gIH0+XG4gICAgICAgICAgPHNwYW4+eyBsYWJlbCB8fCBgJHtwZXJjZW50fSVgIH08L3NwYW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxsXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsgdGl0bGUgJiYgPGgzPnsgdGl0bGUgfTwvaDM+IH1cbiAgICAgICAgeyB0ZXh0ICYmIDxwPnsgdGV4dCB9PC9wPiB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ2V0UGVyY2VudCgpIHtcbiAgICBjb25zdCB7IHBlcmNlbnQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gcGFyc2VJbnQocGVyY2VudClcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzXG4iXX0=