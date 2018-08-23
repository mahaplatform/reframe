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