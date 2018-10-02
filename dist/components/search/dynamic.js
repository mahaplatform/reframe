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

var _options = require('./options');

var _options2 = _interopRequireDefault(_options);

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
          multiple = _props.multiple,
          name = _props.name,
          records = _props.records,
          results = _props.results,
          status = _props.status,
          onUpdate = _props.onUpdate;

      var options = records.map(this._getOption.bind(this));
      return { name: name, format: format, multiple: multiple, options: options, results: results, status: status, onUpdate: onUpdate };
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

exports.default = Dynamic;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRHluYW1pYyIsInByb3BzIiwicmVjb3JkcyIsIl9nZXRPcHRpb25zIiwiZm9ybWF0IiwibXVsdGlwbGUiLCJuYW1lIiwicmVzdWx0cyIsInN0YXR1cyIsIm9uVXBkYXRlIiwib3B0aW9ucyIsIm1hcCIsIl9nZXRPcHRpb24iLCJiaW5kIiwicmVjb3JkIiwidGV4dCIsInZhbHVlIiwiXyIsImdldCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsTzs7Ozs7Ozs7Ozs2QkFFSztBQUNQLGFBQVEsS0FBS0MsS0FBTCxDQUFXQyxPQUFaLEdBQXVCLDhCQUFDLGlCQUFELEVBQWMsS0FBS0MsV0FBTCxFQUFkLENBQXZCLEdBQStELElBQXRFO0FBQ0Q7OztrQ0FFYTtBQUFBLG1CQUMyRCxLQUFLRixLQURoRTtBQUFBLFVBQ0pHLE1BREksVUFDSkEsTUFESTtBQUFBLFVBQ0lDLFFBREosVUFDSUEsUUFESjtBQUFBLFVBQ2NDLElBRGQsVUFDY0EsSUFEZDtBQUFBLFVBQ29CSixPQURwQixVQUNvQkEsT0FEcEI7QUFBQSxVQUM2QkssT0FEN0IsVUFDNkJBLE9BRDdCO0FBQUEsVUFDc0NDLE1BRHRDLFVBQ3NDQSxNQUR0QztBQUFBLFVBQzhDQyxRQUQ5QyxVQUM4Q0EsUUFEOUM7O0FBRVosVUFBTUMsVUFBVVIsUUFBUVMsR0FBUixDQUFZLEtBQUtDLFVBQUwsQ0FBZ0JDLElBQWhCLENBQXFCLElBQXJCLENBQVosQ0FBaEI7QUFDQSxhQUFPLEVBQUVQLFVBQUYsRUFBUUYsY0FBUixFQUFnQkMsa0JBQWhCLEVBQTBCSyxnQkFBMUIsRUFBbUNILGdCQUFuQyxFQUE0Q0MsY0FBNUMsRUFBb0RDLGtCQUFwRCxFQUFQO0FBQ0Q7OzsrQkFFVUssTSxFQUFhO0FBQUEsb0JBQ0UsS0FBS2IsS0FEUDtBQUFBLFVBQ2RjLElBRGMsV0FDZEEsSUFEYztBQUFBLFVBQ1JDLEtBRFEsV0FDUkEsS0FEUTs7QUFFdEIsYUFBTztBQUNMQSxlQUFPQyxpQkFBRUMsR0FBRixDQUFNSixNQUFOLEVBQWNFLEtBQWQsQ0FERjtBQUVMRCxjQUFNRSxpQkFBRUMsR0FBRixDQUFNSixNQUFOLEVBQWNDLElBQWQsQ0FGRDtBQUdMRDtBQUhLLE9BQVA7QUFLRDs7O0VBbkJtQkssZ0JBQU1DLFM7O2tCQXVCYnBCLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBPcHRpb25zIGZyb20gJy4vb3B0aW9ucydcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY2xhc3MgRHluYW1pYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAodGhpcy5wcm9wcy5yZWNvcmRzKSA/IDxPcHRpb25zIHsgLi4udGhpcy5fZ2V0T3B0aW9ucygpIH0gLz4gOiBudWxsXG4gIH1cblxuICBfZ2V0T3B0aW9ucygpIHtcbiAgICBjb25zdCB7IGZvcm1hdCwgbXVsdGlwbGUsIG5hbWUsIHJlY29yZHMsIHJlc3VsdHMsIHN0YXR1cywgb25VcGRhdGUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBvcHRpb25zID0gcmVjb3Jkcy5tYXAodGhpcy5fZ2V0T3B0aW9uLmJpbmQodGhpcykpXG4gICAgcmV0dXJuIHsgbmFtZSwgZm9ybWF0LCBtdWx0aXBsZSwgb3B0aW9ucywgcmVzdWx0cywgc3RhdHVzLCBvblVwZGF0ZSB9XG4gIH1cblxuICBfZ2V0T3B0aW9uKHJlY29yZDogYW55KSB7XG4gICAgY29uc3QgeyB0ZXh0LCB2YWx1ZSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogXy5nZXQocmVjb3JkLCB2YWx1ZSksXG4gICAgICB0ZXh0OiBfLmdldChyZWNvcmQsIHRleHQpLFxuICAgICAgcmVjb3JkXG4gICAgfVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY1xuIl19