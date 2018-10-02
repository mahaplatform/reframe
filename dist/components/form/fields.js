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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fields = function (_React$Component) {
  (0, _inherits3.default)(Fields, _React$Component);

  function Fields() {
    (0, _classCallCheck3.default)(this, Fields);
    return (0, _possibleConstructorReturn3.default)(this, (Fields.__proto__ || Object.getPrototypeOf(Fields)).apply(this, arguments));
  }

  (0, _createClass3.default)(Fields, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var fields = this.props.fields;

      var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
      return _react2.default.createElement(
        'div',
        { className: numbers[fields.length] + ' fields' },
        fields.map(function (field, index) {
          return _react2.default.createElement(_field2.default, (0, _extends3.default)({ key: 'field_' + index }, _this2._getField(field)));
        })
      );
    }
  }, {
    key: '_getField',
    value: function _getField(field) {
      var _props = this.props,
          onChange = _props.onChange,
          onReady = _props.onReady,
          onSubmit = _props.onSubmit,
          onUpdateData = _props.onUpdateData;

      return (0, _extends3.default)({}, field, {
        onChange: onChange,
        onReady: onReady,
        onSubmit: onSubmit,
        onUpdateData: onUpdateData
      });
    }
  }]);
  return Fields;
}(_react2.default.Component);

Fields.propTypes = {
  fields: _propTypes2.default.array,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
Fields.defaultProps = {
  fields: [],
  onBusy: function onBusy() {},
  onChange: function onChange() {},
  onReady: function onReady() {},
  onSubmit: function onSubmit() {},
  onUpdateData: function onUpdateData() {}
};
exports.default = Fields;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRmllbGRzIiwiZmllbGRzIiwicHJvcHMiLCJudW1iZXJzIiwibGVuZ3RoIiwibWFwIiwiZmllbGQiLCJpbmRleCIsIl9nZXRGaWVsZCIsIm9uQ2hhbmdlIiwib25SZWFkeSIsIm9uU3VibWl0Iiwib25VcGRhdGVEYXRhIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsIm9uQnVzeSIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsTTs7Ozs7Ozs7Ozs2QkFvQks7QUFBQTs7QUFBQSxVQUNDQyxNQURELEdBQ1ksS0FBS0MsS0FEakIsQ0FDQ0QsTUFERDs7QUFFUCxVQUFNRSxVQUFVLENBQUMsTUFBRCxFQUFRLEtBQVIsRUFBYyxLQUFkLEVBQW9CLE9BQXBCLEVBQTRCLE1BQTVCLEVBQW1DLE1BQW5DLEVBQTBDLEtBQTFDLENBQWhCO0FBQ0EsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFjQSxRQUFRRixPQUFPRyxNQUFmLENBQWQsWUFBTDtBQUNHSCxlQUFPSSxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSLEVBQWtCO0FBQzVCLGlCQUFPLDhCQUFDLGVBQUQsMkJBQU8sZ0JBQWNBLEtBQXJCLElBQW1DLE9BQUtDLFNBQUwsQ0FBZUYsS0FBZixDQUFuQyxFQUFQO0FBQ0QsU0FGQTtBQURILE9BREY7QUFPRDs7OzhCQUVTQSxLLEVBQU87QUFBQSxtQkFDdUMsS0FBS0osS0FENUM7QUFBQSxVQUNQTyxRQURPLFVBQ1BBLFFBRE87QUFBQSxVQUNHQyxPQURILFVBQ0dBLE9BREg7QUFBQSxVQUNZQyxRQURaLFVBQ1lBLFFBRFo7QUFBQSxVQUNzQkMsWUFEdEIsVUFDc0JBLFlBRHRCOztBQUVmLHdDQUNLTixLQURMO0FBRUVHLDBCQUZGO0FBR0VDLHdCQUhGO0FBSUVDLDBCQUpGO0FBS0VDO0FBTEY7QUFRRDs7O0VBMUNrQkMsZ0JBQU1DLFM7O0FBQXJCZCxNLENBRUdlLFMsR0FBWTtBQUNqQmQsVUFBUWUsb0JBQVVDLEtBREQ7QUFFakJDLFVBQVFGLG9CQUFVRyxJQUZEO0FBR2pCVixZQUFVTyxvQkFBVUcsSUFISDtBQUlqQlQsV0FBU00sb0JBQVVHLElBSkY7QUFLakJSLFlBQVVLLG9CQUFVRyxJQUxIO0FBTWpCUCxnQkFBY0ksb0JBQVVHO0FBTlAsQztBQUZmbkIsTSxDQVdHb0IsWSxHQUFlO0FBQ3BCbkIsVUFBUSxFQURZO0FBRXBCaUIsVUFBUSxrQkFBTSxDQUFFLENBRkk7QUFHcEJULFlBQVUsb0JBQU0sQ0FBRSxDQUhFO0FBSXBCQyxXQUFTLG1CQUFNLENBQUUsQ0FKRztBQUtwQkMsWUFBVSxvQkFBTSxDQUFFLENBTEU7QUFNcEJDLGdCQUFjLHdCQUFNLENBQUU7QUFORixDO2tCQW1DVFosTSIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQnXG5cbmNsYXNzIEZpZWxkcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBmaWVsZHM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBvbkJ1c3k6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblJlYWR5OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25VcGRhdGVEYXRhOiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBmaWVsZHM6IFtdLFxuICAgIG9uQnVzeTogKCkgPT4ge30sXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIG9uUmVhZHk6ICgpID0+IHt9LFxuICAgIG9uU3VibWl0OiAoKSA9PiB7fSxcbiAgICBvblVwZGF0ZURhdGE6ICgpID0+IHt9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBmaWVsZHMgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBudW1iZXJzID0gWyd6ZXJvJywnb25lJywndHdvJywndGhyZWUnLCdmb3VyJywnZml2ZScsJ3NpeCddXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtudW1iZXJzW2ZpZWxkcy5sZW5ndGhdfSBmaWVsZHNgfT5cbiAgICAgICAge2ZpZWxkcy5tYXAoKGZpZWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8RmllbGQga2V5PXtgZmllbGRfJHtpbmRleH1gfSB7IC4uLnRoaXMuX2dldEZpZWxkKGZpZWxkKSB9IC8+XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgX2dldEZpZWxkKGZpZWxkKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgb25SZWFkeSwgb25TdWJtaXQsIG9uVXBkYXRlRGF0YSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiB7XG4gICAgICAuLi5maWVsZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgb25SZWFkeSxcbiAgICAgIG9uU3VibWl0LFxuICAgICAgb25VcGRhdGVEYXRhXG4gICAgfVxuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZHNcbiJdfQ==