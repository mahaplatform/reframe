'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Results = exports.Empty = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Empty = exports.Empty = function Empty(props) {
  var empty = props.empty,
      entity = props.entity,
      icon = props.icon;


  var entitities = (0, _pluralize2.default)(entity.replace('_', ' '));

  var text = empty || 'You have not yet created any ' + entitities;

  var button = props.new ? {
    label: 'Create New ' + _lodash2.default.startCase(entity.replace('_', ' ')),
    modal: props.new
  } : null;

  var message = {
    icon: icon,
    title: 'No ' + _lodash2.default.startCase((0, _pluralize2.default)(entity.replace('_', ' '))),
    text: text,
    button: button
  };

  return _react2.default.createElement(_message2.default, message);
};

var Results = exports.Results = function (_React$Component) {
  (0, _inherits3.default)(Results, _React$Component);

  function Results() {
    (0, _classCallCheck3.default)(this, Results);
    return (0, _possibleConstructorReturn3.default)(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  (0, _createClass3.default)(Results, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          layout = _props.layout,
          table = _props.table;

      if (table) return _react2.default.createElement(_table2.default, this._getTable());
      if (layout) return _react2.default.createElement(layout, (0, _extends3.default)({}, this._getCustomLayout()));
    }
  }, {
    key: '_getTable',
    value: function _getTable() {
      var _props2 = this.props,
          columns = _props2.columns,
          handler = _props2.handler,
          link = _props2.link,
          modal = _props2.modal,
          records = _props2.records,
          recordTasks = _props2.recordTasks,
          rowClass = _props2.rowClass,
          selectAll = _props2.selectAll,
          selectable = _props2.selectable,
          selected = _props2.selected,
          sort = _props2.sort,
          status = _props2.status,
          onLoadMore = _props2.onLoadMore,
          onSelect = _props2.onSelect,
          onSelectAll = _props2.onSelectAll,
          onSort = _props2.onSort;

      return {
        columns: columns,
        handler: handler,
        link: link,
        modal: modal,
        records: records,
        recordTasks: recordTasks,
        rowClass: rowClass,
        selectAll: selectAll,
        selectable: selectable,
        selected: selected,
        sort: sort,
        status: status,
        onLoadMore: onLoadMore,
        onSelect: onSelect,
        onSelectAll: onSelectAll,
        onSort: onSort
      };
    }
  }, {
    key: '_getCustomLayout',
    value: function _getCustomLayout() {
      var _props3 = this.props,
          records = _props3.records,
          sort = _props3.sort,
          status = _props3.status,
          onLoadMore = _props3.onLoadMore,
          onSort = _props3.onSort;

      return {
        records: records,
        sort: sort,
        status: status,
        onLoadMore: onLoadMore,
        onSort: onSort
      };
    }
  }]);
  return Results;
}(_react2.default.Component);

Results.propTypes = {
  columns: _propTypes2.default.array,
  handler: _propTypes2.default.func,
  layout: _propTypes2.default.any,
  link: _propTypes2.default.func,
  modal: _propTypes2.default.func,
  records: _propTypes2.default.array,
  recordTasks: _propTypes2.default.array,
  rowClass: _propTypes2.default.func,
  selectable: _propTypes2.default.bool,
  selectAll: _propTypes2.default.bool,
  selected: _propTypes2.default.array,
  sort: _propTypes2.default.object,
  status: _propTypes2.default.string,
  table: _propTypes2.default.array,
  onLoadMore: _propTypes2.default.func,
  onSelect: _propTypes2.default.func,
  onSelectAll: _propTypes2.default.func,
  onSort: _propTypes2.default.func
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiRW1wdHkiLCJwcm9wcyIsImVtcHR5IiwiZW50aXR5IiwiaWNvbiIsImVudGl0aXRpZXMiLCJyZXBsYWNlIiwidGV4dCIsImJ1dHRvbiIsIm5ldyIsImxhYmVsIiwiXyIsInN0YXJ0Q2FzZSIsIm1vZGFsIiwibWVzc2FnZSIsInRpdGxlIiwiUmVzdWx0cyIsImxheW91dCIsInRhYmxlIiwiX2dldFRhYmxlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX2dldEN1c3RvbUxheW91dCIsImNvbHVtbnMiLCJoYW5kbGVyIiwibGluayIsInJlY29yZHMiLCJyZWNvcmRUYXNrcyIsInJvd0NsYXNzIiwic2VsZWN0QWxsIiwic2VsZWN0YWJsZSIsInNlbGVjdGVkIiwic29ydCIsInN0YXR1cyIsIm9uTG9hZE1vcmUiLCJvblNlbGVjdCIsIm9uU2VsZWN0QWxsIiwib25Tb3J0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJmdW5jIiwiYW55IiwiYm9vbCIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxJQUFNQSx3QkFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBLE1BRXRCQyxLQUZzQixHQUVFRCxLQUZGLENBRXRCQyxLQUZzQjtBQUFBLE1BRWZDLE1BRmUsR0FFRUYsS0FGRixDQUVmRSxNQUZlO0FBQUEsTUFFUEMsSUFGTyxHQUVFSCxLQUZGLENBRVBHLElBRk87OztBQUk5QixNQUFNQyxhQUFhLHlCQUFVRixPQUFPRyxPQUFQLENBQWUsR0FBZixFQUFvQixHQUFwQixDQUFWLENBQW5COztBQUVBLE1BQU1DLE9BQU9MLDJDQUF5Q0csVUFBdEQ7O0FBRUEsTUFBTUcsU0FBVVAsTUFBTVEsR0FBUCxHQUFjO0FBQzNCQywy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QUFVRSxJQVJIO0FBU2pCWixjQUFZVSxvQkFBVUksSUFUTDtBQVVqQmYsYUFBV1csb0JBQVVJLElBVko7QUFXakJiLFlBQVVTLG9CQUFVQyxLQVhIO0FBWWpCVCxRQUFNUSxvQkFBVUssTUFaQztBQWFqQlosVUFBUU8sb0JBQVVNLE1BYkQ7QUFjakI1QixTQUFPc0Isb0JBQVVDLEtBZEE7QUFlakJQLGNBQVlNLG9CQUFVRSxJQWZMO0FBZ0JqQlAsWUFBVUssb0JBQVVFLElBaEJIO0FBaUJqQk4sZUFBYUksb0JBQVVFLElBakJOO0FBa0JqQkwsVUFBUUcsb0JBQVVFO0FBbEJELEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSAnLi4vbWVzc2FnZSdcbmltcG9ydCBUYWJsZSBmcm9tICcuLi90YWJsZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGNvbnN0IEVtcHR5ID0gKHByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBlbXB0eSwgZW50aXR5LCBpY29uIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGVudGl0aXRpZXMgPSBwbHVyYWxpemUoZW50aXR5LnJlcGxhY2UoJ18nLCAnICcpKVxuXG4gIGNvbnN0IHRleHQgPSBlbXB0eSB8fCBgWW91IGhhdmUgbm90IHlldCBjcmVhdGVkIGFueSAke2VudGl0aXRpZXN9YFxuXG4gIGNvbnN0IGJ1dHRvbiA9IChwcm9wcy5uZXcpID8ge1xuICAgIGxhYmVsOiBgQ3JlYXRlIE5ldyAke18uc3RhcnRDYXNlKGVudGl0eS5yZXBsYWNlKCdfJywgJyAnKSl9YCxcbiAgICBtb2RhbDogcHJvcHMubmV3XG4gIH0gOiBudWxsXG5cbiAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICBpY29uLFxuICAgIHRpdGxlOiBgTm8gJHtfLnN0YXJ0Q2FzZShwbHVyYWxpemUoZW50aXR5LnJlcGxhY2UoJ18nLCAnICcpKSl9YCxcbiAgICB0ZXh0LFxuICAgIGJ1dHRvblxuICB9XG5cbiAgcmV0dXJuIDxNZXNzYWdlIHsgLi4ubWVzc2FnZSB9IC8+XG5cbn1cblxuZXhwb3J0IGNsYXNzIFJlc3VsdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgY29sdW1uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGxheW91dDogUHJvcFR5cGVzLmFueSxcbiAgICBsaW5rOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBtb2RhbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcmVjb3JkczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHJlY29yZFRhc2tzOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgcm93Q2xhc3M6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNlbGVjdGFibGU6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdEFsbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5hcnJheSxcbiAgICBzb3J0OiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHN0YXR1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWJsZTogUHJvcFR5cGVzLmFycmF5LFxuICAgIG9uTG9hZE1vcmU6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvblNlbGVjdEFsbDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Tb3J0OiBQcm9wVHlwZXMuZnVuY1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGF5b3V0LCB0YWJsZSB9ID0gdGhpcy5wcm9wc1xuICAgIGlmKHRhYmxlKSByZXR1cm4gPFRhYmxlIHsgLi4udGhpcy5fZ2V0VGFibGUoKSB9IC8+XG4gICAgaWYobGF5b3V0KSByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChsYXlvdXQsIHsgLi4udGhpcy5fZ2V0Q3VzdG9tTGF5b3V0KCkgfSlcbiAgfVxuXG4gIF9nZXRUYWJsZSgpIHtcbiAgICBjb25zdCB7IGNvbHVtbnMsIGhhbmRsZXIsIGxpbmssIG1vZGFsLCByZWNvcmRzLCByZWNvcmRUYXNrcywgcm93Q2xhc3MsIHNlbGVjdEFsbCwgc2VsZWN0YWJsZSwgc2VsZWN0ZWQsIHNvcnQsIHN0YXR1cywgb25Mb2FkTW9yZSwgb25TZWxlY3QsIG9uU2VsZWN0QWxsLCBvblNvcnQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgY29sdW1ucyxcbiAgICAgIGhhbmRsZXIsXG4gICAgICBsaW5rLFxuICAgICAgbW9kYWwsXG4gICAgICByZWNvcmRzLFxuICAgICAgcmVjb3JkVGFza3MsXG4gICAgICByb3dDbGFzcyxcbiAgICAgIHNlbGVjdEFsbCxcbiAgICAgIHNlbGVjdGFibGUsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHNvcnQsXG4gICAgICBzdGF0dXMsXG4gICAgICBvbkxvYWRNb3JlLFxuICAgICAgb25TZWxlY3QsXG4gICAgICBvblNlbGVjdEFsbCxcbiAgICAgIG9uU29ydFxuICAgIH1cbiAgfVxuXG4gIF9nZXRDdXN0b21MYXlvdXQoKSB7XG4gICAgY29uc3QgeyByZWNvcmRzLCBzb3J0LCBzdGF0dXMsIG9uTG9hZE1vcmUsIG9uU29ydCAgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4ge1xuICAgICAgcmVjb3JkcyxcbiAgICAgIHNvcnQsXG4gICAgICBzdGF0dXMsXG4gICAgICBvbkxvYWRNb3JlLFxuICAgICAgb25Tb3J0XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==