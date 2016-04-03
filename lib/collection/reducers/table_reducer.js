'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultTableState : arguments[0];
  var action = arguments[1];

  return _lodash2.default.get(handlers, action.type, _lodash2.default.constant(state))(state, action);
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultTableState = {
  sort: { key: 'id', order: 'asc' },
  columnVisibility: {},
  columnChooserVisible: false,
  exporterVisible: false
};

Object.freeze(defaultTableState);

var handlers = {
  SET_SORT: function SET_SORT(state, action) {
    return _extends({
      sort: {
        key: action.key,
        order: action.order
      }
    }, state);
  },
  REVERSE_SORT: function REVERSE_SORT(state, action) {
    return _extends({
      sort: _extends({
        order: action.order === 'asc' ? 'desc' : 'asc'
      }, state.sort)
    }, state);
  },
  SHOW_EXPORTER: function SHOW_EXPORTER(state, action) {
    return _extends({
      exporterVisible: true
    }, state);
  },
  HIDE_EXPORTER: function HIDE_EXPORTER(state, action) {
    return _extends({
      exporterVisible: false
    }, state);
  },
  SHOW_COLUMN_CHOOSER: function SHOW_COLUMN_CHOOSER(state, action) {
    return _extends({
      columnChooserVisible: true
    }, state);
  },
  HIDE_COLUMN_CHOOSER: function HIDE_COLUMN_CHOOSER(state, action) {
    return _extends({
      columnChooserVisible: false
    }, state);
  },
  SHOW_COLUMN: function SHOW_COLUMN(state, action) {
    return _extends({
      columnVisibility: _extends(_defineProperty({}, action.key, true), state.columnVisibility)
    }, state);
  },
  HIDE_COLUMN: function HIDE_COLUMN(state, action) {
    return _extends({
      columnVisibility: _extends(_defineProperty({}, action.key, false), state.columnVisibility)
    }, state);
  }
};