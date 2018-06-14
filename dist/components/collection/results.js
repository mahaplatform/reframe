'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Results = exports.Empty = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(Results, _React$Component);

  function Results() {
    _classCallCheck(this, Results);

    return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  _createClass(Results, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          layout = _props.layout,
          table = _props.table;

      if (table) return _react2.default.createElement(_table2.default, this._getTable());
      if (layout) return _react2.default.createElement(layout, _extends({}, this._getCustomLayout()));
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