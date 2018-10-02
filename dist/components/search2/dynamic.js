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

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dynamic = function (_React$Component) {
  (0, _inherits3.default)(Dynamic, _React$Component);

  function Dynamic() {
    (0, _classCallCheck3.default)(this, Dynamic);
    return (0, _possibleConstructorReturn3.default)(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).apply(this, arguments));
  }

  (0, _createClass3.default)(Dynamic, [{
    key: 'render',
    value: function render() {
      return this.props.records ? _react2.default.createElement(_options2.default, this._getOptions()) : null;
    }
  }, {
    key: '_getOptions',
    value: function _getOptions() {
      var _props = this.props,
          format = _props.format,
          records = _props.records,
          status = _props.status,
          onChoose = _props.onChoose;

      var options = records.map(this._getOption.bind(this));
      return { name: name, format: format, options: options, status: status, onChoose: onChoose };
    }
  }, {
    key: '_getOption',
    value: function _getOption(record) {
      var _props2 = this.props,
          text = _props2.text,
          value = _props2.value;

      return {
        value: _lodash2.default.get(record, value),
        text: _lodash2.default.get(record, text),
        record: record
      };
    }
  }]);
  return Dynamic;
}(_react2.default.Component);

Dynamic.propTypes = {
  format: _propTypes2.default.any,
  records: _propTypes2.default.array,
  status: _propTypes2.default.string,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onChoose: _propTypes2.default.func
};
exports.default = Dynamic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRHluYW1pYyIsInByb3BzIiwicmVjb3JkcyIsIl9nZXRPcHRpb25zIiwiZm9ybWF0Iiwic3RhdHVzIiwib25DaG9vc2UiLCJvcHRpb25zIiwibWFwIiwiX2dldE9wdGlvbiIsImJpbmQiLCJuYW1lIiwicmVjb3JkIiwidGV4dCIsInZhbHVlIiwiXyIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiYXJyYXkiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OzZCQVdLO0FBQ1AsYUFBUSxLQUFLQyxLQUFMLENBQVdDLE9BQVosR0FBdUIsOEJBQUMsaUJBQUQsRUFBYyxLQUFLQyxXQUFMLEVBQWQsQ0FBdkIsR0FBK0QsSUFBdEU7QUFDRDs7O2tDQUVhO0FBQUEsbUJBQ2tDLEtBQUtGLEtBRHZDO0FBQUEsVUFDSkcsTUFESSxVQUNKQSxNQURJO0FBQUEsVUFDSUYsT0FESixVQUNJQSxPQURKO0FBQUEsVUFDYUcsTUFEYixVQUNhQSxNQURiO0FBQUEsVUFDcUJDLFFBRHJCLFVBQ3FCQSxRQURyQjs7QUFFWixVQUFNQyxVQUFVTCxRQUFRTSxHQUFSLENBQVksS0FBS0MsVUFBTCxDQUFnQkMsSUFBaEIsQ0FBcUIsSUFBckIsQ0FBWixDQUFoQjtBQUNBLGFBQU8sRUFBRUMsVUFBRixFQUFRUCxjQUFSLEVBQWdCRyxnQkFBaEIsRUFBeUJGLGNBQXpCLEVBQWlDQyxrQkFBakMsRUFBUDtBQUNEOzs7K0JBRVVNLE0sRUFBUTtBQUFBLG9CQUNPLEtBQUtYLEtBRFo7QUFBQSxVQUNUWSxJQURTLFdBQ1RBLElBRFM7QUFBQSxVQUNIQyxLQURHLFdBQ0hBLEtBREc7O0FBRWpCLGFBQU87QUFDTEEsZUFBT0MsaUJBQUVDLEdBQUYsQ0FBTUosTUFBTixFQUFjRSxLQUFkLENBREY7QUFFTEQsY0FBTUUsaUJBQUVDLEdBQUYsQ0FBTUosTUFBTixFQUFjQyxJQUFkLENBRkQ7QUFHTEQ7QUFISyxPQUFQO0FBS0Q7OztFQTVCbUJLLGdCQUFNQyxTOztBQUF0QmxCLE8sQ0FFR21CLFMsR0FBWTtBQUNqQmYsVUFBUWdCLG9CQUFVQyxHQUREO0FBRWpCbkIsV0FBU2tCLG9CQUFVRSxLQUZGO0FBR2pCakIsVUFBUWUsb0JBQVVHLE1BSEQ7QUFJakJWLFFBQU1PLG9CQUFVRyxNQUpDO0FBS2pCVCxTQUFPTSxvQkFBVUcsTUFMQTtBQU1qQmpCLFlBQVVjLG9CQUFVSTtBQU5ILEM7a0JBOEJOeEIsTyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBEeW5hbWljIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuYW55LFxuICAgIHJlY29yZHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzdGF0dXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNob29zZTogUHJvcFR5cGVzLmZ1bmNcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKHRoaXMucHJvcHMucmVjb3JkcykgPyA8T3B0aW9ucyB7IC4uLnRoaXMuX2dldE9wdGlvbnMoKSB9IC8+IDogbnVsbFxuICB9XG5cbiAgX2dldE9wdGlvbnMoKSB7XG4gICAgY29uc3QgeyBmb3JtYXQsIHJlY29yZHMsIHN0YXR1cywgb25DaG9vc2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gcmVjb3Jkcy5tYXAodGhpcy5fZ2V0T3B0aW9uLmJpbmQodGhpcykpXG4gICAgcmV0dXJuIHsgbmFtZSwgZm9ybWF0LCBvcHRpb25zLCBzdGF0dXMsIG9uQ2hvb3NlIH1cbiAgfVxuXG4gIF9nZXRPcHRpb24ocmVjb3JkKSB7XG4gICAgY29uc3QgeyB0ZXh0LCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogXy5nZXQocmVjb3JkLCB2YWx1ZSksXG4gICAgICB0ZXh0OiBfLmdldChyZWNvcmQsIHRleHQpLFxuICAgICAgcmVjb3JkXG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1xuIl19