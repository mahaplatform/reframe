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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Options = function (_React$Component) {
  (0, _inherits3.default)(Options, _React$Component);

  function Options() {
    (0, _classCallCheck3.default)(this, Options);
    return (0, _possibleConstructorReturn3.default)(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  (0, _createClass3.default)(Options, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          options = _props.options;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-search-results' },
        options.map(function (option, index) {
          return _react2.default.createElement(
            'div',
            { key: 'result_' + index, className: 'reframe-search-item', onClick: _this2._handleChoose.bind(_this2, option) },
            _react2.default.createElement(_format2.default, (0, _extends3.default)({}, option.record, { format: format, value: option.text }))
          );
        })
      );
    }
  }, {
    key: '_getClasses',
    value: function _getClasses() {
      var classes = ['reframe-search-item-label'];
      if (!this.props.format) classes.push('padded');
      return classes.join(' ');
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(option) {
      this.props.onChoose(option.record);
    }
  }]);
  return Options;
}(_react2.default.Component);

Options.propTypes = {
  format: _propTypes2.default.any,
  options: _propTypes2.default.array,
  onChoose: _propTypes2.default.func
};
exports.default = Options;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiT3B0aW9ucyIsInByb3BzIiwiZm9ybWF0Iiwib3B0aW9ucyIsIm1hcCIsIm9wdGlvbiIsImluZGV4IiwiX2hhbmRsZUNob29zZSIsImJpbmQiLCJyZWNvcmQiLCJ0ZXh0IiwiY2xhc3NlcyIsInB1c2giLCJqb2luIiwib25DaG9vc2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFueSIsImFycmF5IiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OzZCQVFLO0FBQUE7O0FBQUEsbUJBQ3FCLEtBQUtDLEtBRDFCO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEsVUFDU0MsT0FEVCxVQUNTQSxPQURUOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUNJQSxnQkFBUUMsR0FBUixDQUFZLFVBQUNDLE1BQUQsRUFBU0MsS0FBVDtBQUFBLGlCQUNaO0FBQUE7QUFBQSxjQUFLLGlCQUFlQSxLQUFwQixFQUE2QixXQUFVLHFCQUF2QyxFQUE2RCxTQUFVLE9BQUtDLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLE1BQXhCLEVBQThCSCxNQUE5QixDQUF2RTtBQUNFLDBDQUFDLGdCQUFELDZCQUFhQSxPQUFPSSxNQUFwQixJQUE2QixRQUFTUCxNQUF0QyxFQUErQyxPQUFRRyxPQUFPSyxJQUE5RDtBQURGLFdBRFk7QUFBQSxTQUFaO0FBREosT0FERjtBQVNEOzs7a0NBRWE7QUFDWixVQUFNQyxVQUFVLENBQUMsMkJBQUQsQ0FBaEI7QUFDQSxVQUFHLENBQUMsS0FBS1YsS0FBTCxDQUFXQyxNQUFmLEVBQXVCUyxRQUFRQyxJQUFSLENBQWEsUUFBYjtBQUN2QixhQUFPRCxRQUFRRSxJQUFSLENBQWEsR0FBYixDQUFQO0FBQ0Q7OztrQ0FFYVIsTSxFQUFRO0FBQ3BCLFdBQUtKLEtBQUwsQ0FBV2EsUUFBWCxDQUFvQlQsT0FBT0ksTUFBM0I7QUFDRDs7O0VBN0JtQk0sZ0JBQU1DLFM7O0FBQXRCaEIsTyxDQUVHaUIsUyxHQUFZO0FBQ2pCZixVQUFRZ0Isb0JBQVVDLEdBREQ7QUFFakJoQixXQUFTZSxvQkFBVUUsS0FGRjtBQUdqQk4sWUFBVUksb0JBQVVHO0FBSEgsQztrQkErQk5yQixPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybWF0IGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY2xhc3MgT3B0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5hbnksXG4gICAgb3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uQ2hvb3NlOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybWF0LCBvcHRpb25zIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2gtcmVzdWx0c1wiPlxuICAgICAgICB7IG9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2ByZXN1bHRfJHtpbmRleH1gfSBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaC1pdGVtXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZUNob29zZS5iaW5kKHRoaXMsIG9wdGlvbikgfT5cbiAgICAgICAgICAgIDxGb3JtYXQgeyAuLi5vcHRpb24ucmVjb3JkIH0gZm9ybWF0PXsgZm9ybWF0IH0gdmFsdWU9eyBvcHRpb24udGV4dCB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpIH1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIF9nZXRDbGFzc2VzKCkge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbJ3JlZnJhbWUtc2VhcmNoLWl0ZW0tbGFiZWwnXVxuICAgIGlmKCF0aGlzLnByb3BzLmZvcm1hdCkgY2xhc3Nlcy5wdXNoKCdwYWRkZWQnKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2hhbmRsZUNob29zZShvcHRpb24pIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hvb3NlKG9wdGlvbi5yZWNvcmQpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25zXG4iXX0=