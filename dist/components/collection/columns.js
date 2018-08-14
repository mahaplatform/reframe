'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sortable_list = require('../sortable_list');

var _sortable_list2 = _interopRequireDefault(_sortable_list);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Columns = function (_React$Component) {
  _inherits(Columns, _React$Component);

  function Columns() {
    _classCallCheck(this, Columns);

    return _possibleConstructorReturn(this, (Columns.__proto__ || Object.getPrototypeOf(Columns)).apply(this, arguments));
  }

  _createClass(Columns, [{
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
            return _extends({}, _lodash2.default.find(columns, { label: item.label }), {
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