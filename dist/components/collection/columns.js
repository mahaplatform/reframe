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

var _sortable_list = require('../sortable_list');

var _sortable_list2 = _interopRequireDefault(_sortable_list);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Columns = function (_React$Component) {
  (0, _inherits3.default)(Columns, _React$Component);

  function Columns() {
    (0, _classCallCheck3.default)(this, Columns);
    return (0, _possibleConstructorReturn3.default)(this, (Columns.__proto__ || Object.getPrototypeOf(Columns)).apply(this, arguments));
  }

  (0, _createClass3.default)(Columns, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection-tasks-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-header-icon', onClick: this._handleDone.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-header-title' },
            'Manage Columns'
          ),
          _react2.default.createElement('div', { className: 'reframe-collection-tasks-panel-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-body' },
          _react2.default.createElement(_sortable_list2.default, this._getSortableList())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-footer', onClick: this._handleReset.bind(this) },
          'Reset Columns'
        )
      );
    }
  }, {
    key: '_getSortableList',
    value: function _getSortableList() {
      var _props = this.props,
          columns = _props.columns,
          onSetColumns = _props.onSetColumns;

      return {
        defaultValue: columns.map(function (column) {
          return {
            label: column.label,
            checked: column.visible !== false
          };
        }),
        onUpdate: function onUpdate(items) {
          return onSetColumns(items.map(function (item) {
            return (0, _extends3.default)({}, _lodash2.default.find(columns, { label: item.label }), {
              visible: item.checked
            });
          }));
        }
      };
    }
  }, {
    key: '_handleReset',
    value: function _handleReset() {
      this.props.onSetColumns(this.props.table);
    }
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }]);
  return Columns;
}(_react2.default.Component);

exports.default = Columns;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiQ29sdW1ucyIsIl9oYW5kbGVEb25lIiwiYmluZCIsIl9nZXRTb3J0YWJsZUxpc3QiLCJfaGFuZGxlUmVzZXQiLCJwcm9wcyIsImNvbHVtbnMiLCJvblNldENvbHVtbnMiLCJkZWZhdWx0VmFsdWUiLCJtYXAiLCJsYWJlbCIsImNvbHVtbiIsImNoZWNrZWQiLCJ2aXNpYmxlIiwib25VcGRhdGUiLCJpdGVtcyIsIl8iLCJmaW5kIiwiaXRlbSIsInRhYmxlIiwib25Eb25lIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVNQSxPOzs7Ozs7Ozs7OzZCQUVLO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGdDQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSx1Q0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsNENBQWYsRUFBNEQsU0FBVSxLQUFLQyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUF0RTtBQUNFLGlEQUFHLFdBQVUsb0JBQWI7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSw2Q0FBZjtBQUFBO0FBQUEsV0FKRjtBQU9FLGlEQUFLLFdBQVUsNENBQWY7QUFQRixTQURGO0FBVUU7QUFBQTtBQUFBLFlBQUssV0FBVSxxQ0FBZjtBQUNFLHdDQUFDLHVCQUFELEVBQW1CLEtBQUtDLGdCQUFMLEVBQW5CO0FBREYsU0FWRjtBQWFFO0FBQUE7QUFBQSxZQUFLLFdBQVUsdUNBQWYsRUFBdUQsU0FBVSxLQUFLQyxZQUFMLENBQWtCRixJQUFsQixDQUF1QixJQUF2QixDQUFqRTtBQUFBO0FBQUE7QUFiRixPQURGO0FBbUJEOzs7dUNBRWtCO0FBQUEsbUJBQ2lCLEtBQUtHLEtBRHRCO0FBQUEsVUFDVEMsT0FEUyxVQUNUQSxPQURTO0FBQUEsVUFDQUMsWUFEQSxVQUNBQSxZQURBOztBQUVqQixhQUFPO0FBQ0xDLHNCQUFjRixRQUFRRyxHQUFSLENBQVk7QUFBQSxpQkFBVztBQUNuQ0MsbUJBQU9DLE9BQU9ELEtBRHFCO0FBRW5DRSxxQkFBVUQsT0FBT0UsT0FBUCxLQUFtQjtBQUZNLFdBQVg7QUFBQSxTQUFaLENBRFQ7QUFLTEMsa0JBQVUsa0JBQUNDLEtBQUQ7QUFBQSxpQkFBV1IsYUFBYVEsTUFBTU4sR0FBTixDQUFVO0FBQUEsOENBQ3ZDTyxpQkFBRUMsSUFBRixDQUFPWCxPQUFQLEVBQWdCLEVBQUVJLE9BQU9RLEtBQUtSLEtBQWQsRUFBaEIsQ0FEdUM7QUFFMUNHLHVCQUFTSyxLQUFLTjtBQUY0QjtBQUFBLFdBQVYsQ0FBYixDQUFYO0FBQUE7QUFMTCxPQUFQO0FBVUQ7OzttQ0FFYztBQUNiLFdBQUtQLEtBQUwsQ0FBV0UsWUFBWCxDQUF3QixLQUFLRixLQUFMLENBQVdjLEtBQW5DO0FBQ0Q7OztrQ0FFYTtBQUNaLFdBQUtkLEtBQUwsQ0FBV2UsTUFBWDtBQUNEOzs7RUE1Q21CQyxnQkFBTUMsUzs7a0JBZ0RidEIsTyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvcnRhYmxlTGlzdCBmcm9tICcuLi9zb3J0YWJsZV9saXN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jbGFzcyBDb2x1bW5zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsLWhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVmcmFtZS1jb2xsZWN0aW9uLXRhc2tzLXBhbmVsLWhlYWRlci1pY29uXCIgb25DbGljaz17IHRoaXMuX2hhbmRsZURvbmUuYmluZCh0aGlzKSB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrcy1wYW5lbC1oZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgIE1hbmFnZSBDb2x1bW5zXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWwtaGVhZGVyLWljb25cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWZyYW1lLWNvbGxlY3Rpb24tdGFza3MtcGFuZWwtYm9keVwiPlxuICAgICAgICAgIDxTb3J0YWJsZUxpc3QgeyAuLi50aGlzLl9nZXRTb3J0YWJsZUxpc3QoKSB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJhbWUtY29sbGVjdGlvbi10YXNrcy1wYW5lbC1mb290ZXJcIiBvbkNsaWNrPXsgdGhpcy5faGFuZGxlUmVzZXQuYmluZCh0aGlzKSB9PlxuICAgICAgICAgIFJlc2V0IENvbHVtbnNcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBfZ2V0U29ydGFibGVMaXN0KCkge1xuICAgIGNvbnN0IHsgY29sdW1ucywgb25TZXRDb2x1bW5zIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHRWYWx1ZTogY29sdW1ucy5tYXAoY29sdW1uID0+ICh7XG4gICAgICAgIGxhYmVsOiBjb2x1bW4ubGFiZWwsXG4gICAgICAgIGNoZWNrZWQ6IChjb2x1bW4udmlzaWJsZSAhPT0gZmFsc2UpXG4gICAgICB9KSksXG4gICAgICBvblVwZGF0ZTogKGl0ZW1zKSA9PiBvblNldENvbHVtbnMoaXRlbXMubWFwKGl0ZW0gPT4gKHtcbiAgICAgICAgLi4uXy5maW5kKGNvbHVtbnMsIHsgbGFiZWw6IGl0ZW0ubGFiZWwgfSksXG4gICAgICAgIHZpc2libGU6IGl0ZW0uY2hlY2tlZFxuICAgICAgfSkpKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVSZXNldCgpIHtcbiAgICB0aGlzLnByb3BzLm9uU2V0Q29sdW1ucyh0aGlzLnByb3BzLnRhYmxlKVxuICB9XG5cbiAgX2hhbmRsZURvbmUoKSB7XG4gICAgdGhpcy5wcm9wcy5vbkRvbmUoKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uc1xuIl19