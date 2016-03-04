'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = tableActions = {
  setSort: function setSort(table_id, key, order) {
    return { type: 'SET_SORT', key: key, order: order, table_id: table_id };
  },
  reverseSort: function reverseSort(table_id, key, order) {
    return { type: 'REVERSE_SORT', key: key, table_id: table_id };
  },
  showExporter: function showExporter(table_id) {
    return { type: 'SHOW_EXPORTER', table_id: table_id };
  },
  hideExporter: function hideExporter(table_id) {
    return { type: 'HIDE_EXPORTER', table_id: table_id };
  },
  showColumnChooser: function showColumnChooser(table_id) {
    return { type: 'SHOW_COLUMN_CHOOSER', table_id: table_id };
  },
  hideColumnChooser: function hideColumnChooser(table_id) {
    return { type: 'HIDE_COLUMN_CHOOSER', table_id: table_id };
  }
};