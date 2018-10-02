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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toggle = function (_React$Component) {
  (0, _inherits3.default)(Toggle, _React$Component);

  function Toggle() {
    (0, _classCallCheck3.default)(this, Toggle);
    return (0, _possibleConstructorReturn3.default)(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          format = _props.format,
          label = _props.label,
          name = _props.name,
          results = _props.results;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters-item', onClick: this._handleChange.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-title' },
          _react2.default.createElement(_format2.default, { format: format, value: label })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filters-item-icon' },
          results[name] && results[name] === true && _react2.default.createElement('i', { className: 'fa fa-check' })
        )
      );
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      var _props2 = this.props,
          name = _props2.name,
          results = _props2.results;

      var value = results[name] && results[name] === true ? null : true;
      this.props.onChange(name, value);
    }
  }]);
  return Toggle;
}(_react2.default.Component);

Toggle.propTypes = {
  format: _propTypes2.default.any,
  name: _propTypes2.default.string,
  label: _propTypes2.default.string,
  results: _propTypes2.default.object,
  onChange: _propTypes2.default.func
};
exports.default = Toggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiVG9nZ2xlIiwicHJvcHMiLCJmb3JtYXQiLCJsYWJlbCIsIm5hbWUiLCJyZXN1bHRzIiwiX2hhbmRsZUNoYW5nZSIsImJpbmQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJzdHJpbmciLCJvYmplY3QiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs2QkFVSztBQUFBLG1CQUNrQyxLQUFLQyxLQUR2QztBQUFBLFVBQ0NDLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1NDLEtBRFQsVUFDU0EsS0FEVDtBQUFBLFVBQ2dCQyxJQURoQixVQUNnQkEsSUFEaEI7QUFBQSxVQUNzQkMsT0FEdEIsVUFDc0JBLE9BRHRCOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxzQkFBZixFQUFzQyxTQUFVLEtBQUtDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQWhEO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSw0QkFBZjtBQUNFLHdDQUFDLGdCQUFELElBQVEsUUFBU0wsTUFBakIsRUFBMEIsT0FBUUMsS0FBbEM7QUFERixTQURGO0FBSUU7QUFBQTtBQUFBLFlBQUssV0FBVSwyQkFBZjtBQUNJRSxrQkFBUUQsSUFBUixLQUFpQkMsUUFBUUQsSUFBUixNQUFrQixJQUFuQyxJQUEyQyxxQ0FBRyxXQUFVLGFBQWI7QUFEL0M7QUFKRixPQURGO0FBVUQ7OztvQ0FFZTtBQUFBLG9CQUNZLEtBQUtILEtBRGpCO0FBQUEsVUFDTkcsSUFETSxXQUNOQSxJQURNO0FBQUEsVUFDQUMsT0FEQSxXQUNBQSxPQURBOztBQUVkLFVBQU1HLFFBQVFILFFBQVFELElBQVIsS0FBaUJDLFFBQVFELElBQVIsTUFBa0IsSUFBbkMsR0FBMEMsSUFBMUMsR0FBaUQsSUFBL0Q7QUFDQSxXQUFLSCxLQUFMLENBQVdRLFFBQVgsQ0FBb0JMLElBQXBCLEVBQTBCSSxLQUExQjtBQUNEOzs7RUE1QmtCRSxnQkFBTUMsUzs7QUFBckJYLE0sQ0FFR1ksUyxHQUFZO0FBQ2pCVixVQUFRVyxvQkFBVUMsR0FERDtBQUVqQlYsUUFBTVMsb0JBQVVFLE1BRkM7QUFHakJaLFNBQU9VLG9CQUFVRSxNQUhBO0FBSWpCVixXQUFTUSxvQkFBVUcsTUFKRjtBQUtqQlAsWUFBVUksb0JBQVVJO0FBTEgsQztrQkE4Qk5qQixNIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybWF0IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgVG9nZ2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZvcm1hdDogUHJvcFR5cGVzLmFueSxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlc3VsdHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtYXQsIGxhYmVsLCBuYW1lLCByZXN1bHRzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWx0ZXJzLWl0ZW1cIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcykgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbHRlcnMtaXRlbS10aXRsZVwiPlxuICAgICAgICAgIDxGb3JtYXQgZm9ybWF0PXsgZm9ybWF0IH0gdmFsdWU9eyBsYWJlbCB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtZmlsdGVycy1pdGVtLWljb25cIj5cbiAgICAgICAgICB7IHJlc3VsdHNbbmFtZV0gJiYgcmVzdWx0c1tuYW1lXSA9PT0gdHJ1ZSAmJiA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGVja1wiIC8+IH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfaGFuZGxlQ2hhbmdlKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgcmVzdWx0cyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0c1tuYW1lXSAmJiByZXN1bHRzW25hbWVdID09PSB0cnVlID8gbnVsbCA6IHRydWVcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5hbWUsIHZhbHVlKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlXG4iXX0=