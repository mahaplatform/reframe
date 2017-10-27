'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectAll = exports.select = exports.clearPanel = exports.removePanel = exports.addPanel = exports.toggleTasks = exports.setQuery = exports.setFilter = exports.setRecords = exports.filter = exports.sort = exports.setColumns = exports.setParams = undefined;

var _types = require('../../types');

var setParams = exports.setParams = function setParams(filter, sort) {
  return {
    type: 'SET_PARAMS',
    filter: filter,
    sort: sort
  };
};

var setColumns = exports.setColumns = function setColumns(columns) {
  return {
    type: 'SET_COLUMNS',
    columns: columns
  };
};

var sort = exports.sort = function sort(key) {
  return {
    type: 'SORT',
    key: key
  };
};

var filter = exports.filter = function filter(_filter) {
  return {
    type: 'FILTER',
    filter: _filter
  };
};

var setRecords = exports.setRecords = function setRecords(records) {
  return {
    type: 'SET_RECORDS',
    records: records
  };
};

var setFilter = exports.setFilter = function setFilter(filter) {
  return {
    type: 'SET_FILTER',
    filter: filter
  };
};

var setQuery = exports.setQuery = function setQuery(q) {
  return {
    type: 'SET_QUERY',
    q: q
  };
};

var toggleTasks = exports.toggleTasks = function toggleTasks() {
  return {
    type: 'TOGGLE_TASKS'
  };
};

var addPanel = exports.addPanel = function addPanel(panel) {
  return {
    type: 'ADD_PANEL',
    panel: panel
  };
};

var removePanel = exports.removePanel = function removePanel(panel) {
  return {
    type: 'REMOVE_PANEL'
  };
};

var clearPanel = exports.clearPanel = function clearPanel(panel) {
  return {
    type: 'CLEAR_PANEL'
  };
};

var select = exports.select = function select(id) {
  return {
    type: 'SELECT',
    id: id
  };
};

var selectAll = exports.selectAll = function selectAll() {
  return {
    type: 'SELECT_ALL'
  };
};