'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Results = function (_React$Component) {
  (0, _inherits3.default)(Results, _React$Component);

  function Results() {
    (0, _classCallCheck3.default)(this, Results);
    return (0, _possibleConstructorReturn3.default)(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  (0, _createClass3.default)(Results, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          multiple = _props.multiple,
          records = _props.records,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-search-results' },
        records.map(function (record, index) {
          return _react2.default.createElement(
            'div',
            { key: 'record_' + index, className: _this2._getRecordClass(record), onClick: _this2._handleToggleRecord.bind(_this2, record) },
            multiple && _react2.default.createElement(
              'div',
              { className: 'reframe-search-item-icon' },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-' + _this2._getIcon(record) })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-search-item-label' },
              _react2.default.createElement(_format2.default, (0, _extends3.default)({ format: format }, record, { value: _lodash2.default.get(record, text) }))
            ),
            !multiple && _react2.default.createElement(
              'div',
              { className: 'reframe-search-item-icon' },
              _this2._getChecked(record) && _react2.default.createElement('i', { className: 'fa fa-fw fa-check' })
            )
          );
        })
      );
    }
  }, {
    key: '_getRecordClass',
    value: function _getRecordClass(record) {
      var classes = ['reframe-search-item'];
      if (this._getChecked(record)) classes.push('checked');
      return classes.join(' ');
    }
  }, {
    key: '_getChecked',
    value: function _getChecked(record) {
      var chosen = this.props.chosen;

      var value = this.props.value || 'id';
      return _lodash2.default.find(chosen, (0, _defineProperty3.default)({}, value, _lodash2.default.get(record, value)));
    }
  }, {
    key: '_getIcon',
    value: function _getIcon(record) {
      var checked = this._getChecked(record);
      if (checked) return 'check-circle';
      return 'circle-o';
    }
  }, {
    key: '_handleToggleRecord',
    value: function _handleToggleRecord(record) {
      this.props.onToggleRecord(record);
    }
  }]);
  return Results;
}(_react2.default.Component);

Results.propTypes = {
  format: _propTypes2.default.any,
  chosen: _propTypes2.default.any,
  multiple: _propTypes2.default.bool,
  records: _propTypes2.default.array,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onToggleRecord: _propTypes2.default.func
};
exports.default = Results;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiUmVzdWx0cyIsInByb3BzIiwiZm9ybWF0IiwibXVsdGlwbGUiLCJyZWNvcmRzIiwidGV4dCIsIm1hcCIsInJlY29yZCIsImluZGV4IiwiX2dldFJlY29yZENsYXNzIiwiX2hhbmRsZVRvZ2dsZVJlY29yZCIsImJpbmQiLCJfZ2V0SWNvbiIsIl8iLCJnZXQiLCJfZ2V0Q2hlY2tlZCIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsImNob3NlbiIsInZhbHVlIiwiZmluZCIsImNoZWNrZWQiLCJvblRvZ2dsZVJlY29yZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiYm9vbCIsImFycmF5Iiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OzZCQVlLO0FBQUE7O0FBQUEsbUJBQ3FDLEtBQUtDLEtBRDFDO0FBQUEsVUFDQ0MsTUFERCxVQUNDQSxNQUREO0FBQUEsVUFDU0MsUUFEVCxVQUNTQSxRQURUO0FBQUEsVUFDbUJDLE9BRG5CLFVBQ21CQSxPQURuQjtBQUFBLFVBQzRCQyxJQUQ1QixVQUM0QkEsSUFENUI7O0FBRVAsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdCQUFmO0FBQ0lELGdCQUFRRSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsaUJBQ1o7QUFBQTtBQUFBLGNBQUssaUJBQWVBLEtBQXBCLEVBQTZCLFdBQVksT0FBS0MsZUFBTCxDQUFxQkYsTUFBckIsQ0FBekMsRUFBd0UsU0FBVSxPQUFLRyxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsTUFBOUIsRUFBb0NKLE1BQXBDLENBQWxGO0FBQ0lKLHdCQUNBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLDBCQUFmO0FBQ0UsbURBQUcsNEJBQTJCLE9BQUtTLFFBQUwsQ0FBY0wsTUFBZCxDQUE5QjtBQURGLGFBRko7QUFNRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSwyQkFBZjtBQUNFLDRDQUFDLGdCQUFELDJCQUFRLFFBQVNMLE1BQWpCLElBQStCSyxNQUEvQixJQUF3QyxPQUFRTSxpQkFBRUMsR0FBRixDQUFNUCxNQUFOLEVBQWNGLElBQWQsQ0FBaEQ7QUFERixhQU5GO0FBU0ksYUFBQ0YsUUFBRCxJQUNBO0FBQUE7QUFBQSxnQkFBSyxXQUFVLDBCQUFmO0FBQ0kscUJBQUtZLFdBQUwsQ0FBaUJSLE1BQWpCLEtBQTRCLHFDQUFHLFdBQVUsbUJBQWI7QUFEaEM7QUFWSixXQURZO0FBQUEsU0FBWjtBQURKLE9BREY7QUFxQkQ7OztvQ0FFZUEsTSxFQUFRO0FBQ3RCLFVBQU1TLFVBQVUsQ0FBQyxxQkFBRCxDQUFoQjtBQUNBLFVBQUcsS0FBS0QsV0FBTCxDQUFpQlIsTUFBakIsQ0FBSCxFQUE2QlMsUUFBUUMsSUFBUixDQUFhLFNBQWI7QUFDN0IsYUFBT0QsUUFBUUUsSUFBUixDQUFhLEdBQWIsQ0FBUDtBQUNEOzs7Z0NBRVdYLE0sRUFBUTtBQUFBLFVBQ1ZZLE1BRFUsR0FDQyxLQUFLbEIsS0FETixDQUNWa0IsTUFEVTs7QUFFbEIsVUFBTUMsUUFBUSxLQUFLbkIsS0FBTCxDQUFXbUIsS0FBWCxJQUFvQixJQUFsQztBQUNBLGFBQU9QLGlCQUFFUSxJQUFGLENBQU9GLE1BQVAsb0NBQWtCQyxLQUFsQixFQUEwQlAsaUJBQUVDLEdBQUYsQ0FBTVAsTUFBTixFQUFjYSxLQUFkLENBQTFCLEVBQVA7QUFDRDs7OzZCQUVRYixNLEVBQVE7QUFDZixVQUFNZSxVQUFVLEtBQUtQLFdBQUwsQ0FBaUJSLE1BQWpCLENBQWhCO0FBQ0EsVUFBR2UsT0FBSCxFQUFZLE9BQU8sY0FBUDtBQUNaLGFBQU8sVUFBUDtBQUNEOzs7d0NBRW1CZixNLEVBQVE7QUFDMUIsV0FBS04sS0FBTCxDQUFXc0IsY0FBWCxDQUEwQmhCLE1BQTFCO0FBQ0Q7OztFQXpEbUJpQixnQkFBTUMsUzs7QUFBdEJ6QixPLENBRUcwQixTLEdBQVk7QUFDakJ4QixVQUFReUIsb0JBQVVDLEdBREQ7QUFFakJULFVBQVFRLG9CQUFVQyxHQUZEO0FBR2pCekIsWUFBVXdCLG9CQUFVRSxJQUhIO0FBSWpCekIsV0FBU3VCLG9CQUFVRyxLQUpGO0FBS2pCekIsUUFBTXNCLG9CQUFVSSxNQUxDO0FBTWpCWCxTQUFPTyxvQkFBVUksTUFOQTtBQU9qQlIsa0JBQWdCSSxvQkFBVUs7QUFQVCxDO2tCQTJETmhDLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtYXQgZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuYW55LFxuICAgIGNob3NlbjogUHJvcFR5cGVzLmFueSxcbiAgICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVjb3JkczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25Ub2dnbGVSZWNvcmQ6IFByb3BUeXBlcy5mdW5jXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZvcm1hdCwgbXVsdGlwbGUsIHJlY29yZHMsIHRleHQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLXNlYXJjaC1yZXN1bHRzXCI+XG4gICAgICAgIHsgcmVjb3Jkcy5tYXAoKHJlY29yZCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17YHJlY29yZF8ke2luZGV4fWB9IGNsYXNzTmFtZT17IHRoaXMuX2dldFJlY29yZENsYXNzKHJlY29yZCkgfSBvbkNsaWNrPXsgdGhpcy5faGFuZGxlVG9nZ2xlUmVjb3JkLmJpbmQodGhpcywgcmVjb3JkKSB9PlxuICAgICAgICAgICAgeyBtdWx0aXBsZSAmJlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtc2VhcmNoLWl0ZW0taWNvblwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17IGBmYSBmYS1mdyBmYS0ke3RoaXMuX2dldEljb24ocmVjb3JkKX1gIH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtc2VhcmNoLWl0ZW0tbGFiZWxcIj5cbiAgICAgICAgICAgICAgPEZvcm1hdCBmb3JtYXQ9eyBmb3JtYXQgfSB7IC4uLnJlY29yZCB9IHZhbHVlPXsgXy5nZXQocmVjb3JkLCB0ZXh0KSB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsgIW11bHRpcGxlICYmXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1zZWFyY2gtaXRlbS1pY29uXCI+XG4gICAgICAgICAgICAgICAgeyB0aGlzLl9nZXRDaGVja2VkKHJlY29yZCkgJiYgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtY2hlY2tcIiAvPiB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKSB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ2V0UmVjb3JkQ2xhc3MocmVjb3JkKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IFsncmVmcmFtZS1zZWFyY2gtaXRlbSddXG4gICAgaWYodGhpcy5fZ2V0Q2hlY2tlZChyZWNvcmQpKSBjbGFzc2VzLnB1c2goJ2NoZWNrZWQnKVxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKVxuICB9XG5cbiAgX2dldENoZWNrZWQocmVjb3JkKSB7XG4gICAgY29uc3QgeyBjaG9zZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgJ2lkJ1xuICAgIHJldHVybiBfLmZpbmQoY2hvc2VuLCB7IFt2YWx1ZV06IF8uZ2V0KHJlY29yZCwgdmFsdWUpIH0pXG4gIH1cblxuICBfZ2V0SWNvbihyZWNvcmQpIHtcbiAgICBjb25zdCBjaGVja2VkID0gdGhpcy5fZ2V0Q2hlY2tlZChyZWNvcmQpXG4gICAgaWYoY2hlY2tlZCkgcmV0dXJuICdjaGVjay1jaXJjbGUnXG4gICAgcmV0dXJuICdjaXJjbGUtbydcbiAgfVxuXG4gIF9oYW5kbGVUb2dnbGVSZWNvcmQocmVjb3JkKSB7XG4gICAgdGhpcy5wcm9wcy5vblRvZ2dsZVJlY29yZChyZWNvcmQpXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzXG4iXX0=