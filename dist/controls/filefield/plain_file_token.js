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

var _bytes = require('bytes');

var _bytes2 = _interopRequireDefault(_bytes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlainFileToken = function (_React$Component) {
  (0, _inherits3.default)(PlainFileToken, _React$Component);

  function PlainFileToken() {
    (0, _classCallCheck3.default)(this, PlainFileToken);
    return (0, _possibleConstructorReturn3.default)(this, (PlainFileToken.__proto__ || Object.getPrototypeOf(PlainFileToken)).apply(this, arguments));
  }

  (0, _createClass3.default)(PlainFileToken, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          file_name = _props.file_name,
          file_size = _props.file_size;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filefield-file-preview ' + this._getExt(file_name) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-file-preview-icon' },
          _react2.default.createElement('i', { className: 'fa fa-fw fa-' + this._getIcon(file_name) })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-filefield-file-preview-details' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-filefield-file-preview-filename' },
            file_name
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-filefield-file-preview-filesize' },
            (0, _bytes2.default)(file_size)
          )
        )
      );
    }
  }, {
    key: '_getExt',
    value: function _getExt(file_name) {
      return file_name.split('.').pop().substr(0, 3);
    }
  }, {
    key: '_getIcon',
    value: function _getIcon(file_name) {
      var ext = this._getExt(file_name);
      if (ext === 'pdf') return 'file-pdf-o';
      if (ext === 'xls') return 'file-excel-o';
      if (ext === 'doc') return 'file-word-o';
      if (ext === 'ppt') return 'file-powerpoint-o';
      return 'file-text-o';
    }
  }]);
  return PlainFileToken;
}(_react2.default.Component);

PlainFileToken.propTypes = {
  file_name: _propTypes2.default.string,
  file_size: _propTypes2.default.number
};
exports.default = PlainFileToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiUGxhaW5GaWxlVG9rZW4iLCJwcm9wcyIsImZpbGVfbmFtZSIsImZpbGVfc2l6ZSIsIl9nZXRFeHQiLCJfZ2V0SWNvbiIsInNwbGl0IiwicG9wIiwic3Vic3RyIiwiZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxjOzs7Ozs7Ozs7OzZCQU9LO0FBQUEsbUJBQzBCLEtBQUtDLEtBRC9CO0FBQUEsVUFDQ0MsU0FERCxVQUNDQSxTQUREO0FBQUEsVUFDWUMsU0FEWixVQUNZQSxTQURaOztBQUVQLGFBQ0U7QUFBQTtBQUFBLFVBQUssK0NBQTZDLEtBQUtDLE9BQUwsQ0FBYUYsU0FBYixDQUFsRDtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUscUNBQWY7QUFDRSwrQ0FBRyw0QkFBMEIsS0FBS0csUUFBTCxDQUFjSCxTQUFkLENBQTdCO0FBREYsU0FERjtBQUlFO0FBQUE7QUFBQSxZQUFLLFdBQVUsd0NBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHlDQUFmO0FBQ0lBO0FBREosV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUseUNBQWY7QUFDSSxpQ0FBTUMsU0FBTjtBQURKO0FBSkY7QUFKRixPQURGO0FBZUQ7Ozs0QkFFT0QsUyxFQUFXO0FBQ2pCLGFBQU9BLFVBQVVJLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUJDLEdBQXJCLEdBQTJCQyxNQUEzQixDQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFQO0FBQ0Q7Ozs2QkFFUU4sUyxFQUFXO0FBQ2xCLFVBQU1PLE1BQU0sS0FBS0wsT0FBTCxDQUFhRixTQUFiLENBQVo7QUFDQSxVQUFHTyxRQUFRLEtBQVgsRUFBa0IsT0FBTyxZQUFQO0FBQ2xCLFVBQUdBLFFBQVEsS0FBWCxFQUFrQixPQUFPLGNBQVA7QUFDbEIsVUFBR0EsUUFBUSxLQUFYLEVBQWtCLE9BQU8sYUFBUDtBQUNsQixVQUFHQSxRQUFRLEtBQVgsRUFBa0IsT0FBTyxtQkFBUDtBQUNsQixhQUFPLGFBQVA7QUFDRDs7O0VBckMwQkMsZ0JBQU1DLFM7O0FBQTdCWCxjLENBRUdZLFMsR0FBWTtBQUNqQlYsYUFBV1csb0JBQVVDLE1BREo7QUFFakJYLGFBQVdVLG9CQUFVRTtBQUZKLEM7a0JBdUNOZixjIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgYnl0ZXMgZnJvbSAnYnl0ZXMnXG5cbmNsYXNzIFBsYWluRmlsZVRva2VuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGZpbGVfbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmaWxlX3NpemU6IFByb3BUeXBlcy5udW1iZXJcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZpbGVfbmFtZSwgZmlsZV9zaXplIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVmcmFtZS1maWxlZmllbGQtZmlsZS1wcmV2aWV3ICR7dGhpcy5fZ2V0RXh0KGZpbGVfbmFtZSl9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWxlZmllbGQtZmlsZS1wcmV2aWV3LWljb25cIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9e2BmYSBmYS1mdyBmYS0ke3RoaXMuX2dldEljb24oZmlsZV9uYW1lKX1gfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbGVmaWVsZC1maWxlLXByZXZpZXctZGV0YWlsc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1maWxlZmllbGQtZmlsZS1wcmV2aWV3LWZpbGVuYW1lXCI+XG4gICAgICAgICAgICB7IGZpbGVfbmFtZSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWZpbGVmaWVsZC1maWxlLXByZXZpZXctZmlsZXNpemVcIj5cbiAgICAgICAgICAgIHsgYnl0ZXMoZmlsZV9zaXplKSB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldEV4dChmaWxlX25hbWUpIHtcbiAgICByZXR1cm4gZmlsZV9uYW1lLnNwbGl0KCcuJykucG9wKCkuc3Vic3RyKDAsIDMpXG4gIH1cblxuICBfZ2V0SWNvbihmaWxlX25hbWUpIHtcbiAgICBjb25zdCBleHQgPSB0aGlzLl9nZXRFeHQoZmlsZV9uYW1lKVxuICAgIGlmKGV4dCA9PT0gJ3BkZicpIHJldHVybiAnZmlsZS1wZGYtbydcbiAgICBpZihleHQgPT09ICd4bHMnKSByZXR1cm4gJ2ZpbGUtZXhjZWwtbydcbiAgICBpZihleHQgPT09ICdkb2MnKSByZXR1cm4gJ2ZpbGUtd29yZC1vJ1xuICAgIGlmKGV4dCA9PT0gJ3BwdCcpIHJldHVybiAnZmlsZS1wb3dlcnBvaW50LW8nXG4gICAgcmV0dXJuICdmaWxlLXRleHQtbydcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYWluRmlsZVRva2VuXG4iXX0=