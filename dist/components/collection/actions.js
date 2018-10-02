'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var setSelected = exports.setSelected = function setSelected(selected) {
  return {
    type: 'SET_SELECTED',
    selected: selected
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsic2V0UGFyYW1zIiwiZmlsdGVyIiwic29ydCIsInR5cGUiLCJzZXRDb2x1bW5zIiwiY29sdW1ucyIsInNldFNlbGVjdGVkIiwic2VsZWN0ZWQiLCJrZXkiLCJzZXRSZWNvcmRzIiwicmVjb3JkcyIsInNldEZpbHRlciIsInNldFF1ZXJ5IiwicSIsInRvZ2dsZVRhc2tzIiwiYWRkUGFuZWwiLCJwYW5lbCIsInJlbW92ZVBhbmVsIiwiY2xlYXJQYW5lbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSxnQ0FBWSxTQUFaQSxTQUFZLENBQUNDLE1BQUQsRUFBU0MsSUFBVDtBQUFBLFNBQW1CO0FBQzFDQyxVQUFNLFlBRG9DO0FBRTFDRixrQkFGMEM7QUFHMUNDO0FBSDBDLEdBQW5CO0FBQUEsQ0FBbEI7O0FBTUEsSUFBTUUsa0NBQWEsU0FBYkEsVUFBYSxDQUFDQyxPQUFEO0FBQUEsU0FBYztBQUN0Q0YsVUFBTSxhQURnQztBQUV0Q0U7QUFGc0MsR0FBZDtBQUFBLENBQW5COztBQUtBLElBQU1DLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsUUFBRDtBQUFBLFNBQWU7QUFDeENKLFVBQU0sY0FEa0M7QUFFeENJO0FBRndDLEdBQWY7QUFBQSxDQUFwQjs7QUFLQSxJQUFNTCxzQkFBTyxTQUFQQSxJQUFPLENBQUNNLEdBQUQ7QUFBQSxTQUFVO0FBQzVCTCxVQUFNLE1BRHNCO0FBRTVCSztBQUY0QixHQUFWO0FBQUEsQ0FBYjs7QUFLQSxJQUFNUCwwQkFBUyxnQkFBQ0EsT0FBRDtBQUFBLFNBQWE7QUFDakNFLFVBQU0sUUFEMkI7QUFFakNGO0FBRmlDLEdBQWI7QUFBQSxDQUFmOztBQUtBLElBQU1RLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRDtBQUFBLFNBQWM7QUFDdENQLFVBQU0sYUFEZ0M7QUFFdENPO0FBRnNDLEdBQWQ7QUFBQSxDQUFuQjs7QUFLQSxJQUFNQyxnQ0FBWSxTQUFaQSxTQUFZLENBQUNWLE1BQUQ7QUFBQSxTQUFhO0FBQ3BDRSxVQUFNLFlBRDhCO0FBRXBDRjtBQUZvQyxHQUFiO0FBQUEsQ0FBbEI7O0FBS0EsSUFBTVcsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxDQUFEO0FBQUEsU0FBUTtBQUM5QlYsVUFBTSxXQUR3QjtBQUU5QlU7QUFGOEIsR0FBUjtBQUFBLENBQWpCOztBQUtBLElBQU1DLG9DQUFjLFNBQWRBLFdBQWM7QUFBQSxTQUFPO0FBQ2hDWCxVQUFNO0FBRDBCLEdBQVA7QUFBQSxDQUFwQjs7QUFJQSxJQUFNWSw4QkFBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ2xDYixVQUFNLFdBRDRCO0FBRWxDYTtBQUZrQyxHQUFaO0FBQUEsQ0FBakI7O0FBS0EsSUFBTUMsb0NBQWMsU0FBZEEsV0FBYyxDQUFDRCxLQUFEO0FBQUEsU0FBVztBQUNwQ2IsVUFBTTtBQUQ4QixHQUFYO0FBQUEsQ0FBcEI7O0FBSUEsSUFBTWUsa0NBQWEsU0FBYkEsVUFBYSxDQUFDRixLQUFEO0FBQUEsU0FBWTtBQUNwQ2IsVUFBTTtBQUQ4QixHQUFaO0FBQUEsQ0FBbkIiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXRQYXJhbXMgPSAoZmlsdGVyLCBzb3J0KSA9PiAoe1xuICB0eXBlOiAnU0VUX1BBUkFNUycsXG4gIGZpbHRlcixcbiAgc29ydFxufSlcblxuZXhwb3J0IGNvbnN0IHNldENvbHVtbnMgPSAoY29sdW1ucykgPT4gKHtcbiAgdHlwZTogJ1NFVF9DT0xVTU5TJyxcbiAgY29sdW1uc1xufSlcblxuZXhwb3J0IGNvbnN0IHNldFNlbGVjdGVkID0gKHNlbGVjdGVkKSA9PiAoe1xuICB0eXBlOiAnU0VUX1NFTEVDVEVEJyxcbiAgc2VsZWN0ZWRcbn0pXG5cbmV4cG9ydCBjb25zdCBzb3J0ID0gKGtleSkgPT4gKHtcbiAgdHlwZTogJ1NPUlQnLFxuICBrZXlcbn0pXG5cbmV4cG9ydCBjb25zdCBmaWx0ZXIgPSAoZmlsdGVyKSA9PiAoe1xuICB0eXBlOiAnRklMVEVSJyxcbiAgZmlsdGVyXG59KVxuXG5leHBvcnQgY29uc3Qgc2V0UmVjb3JkcyA9IChyZWNvcmRzKSA9PiAoe1xuICB0eXBlOiAnU0VUX1JFQ09SRFMnLFxuICByZWNvcmRzXG59KVxuXG5leHBvcnQgY29uc3Qgc2V0RmlsdGVyID0gKGZpbHRlcikgPT4gKHtcbiAgdHlwZTogJ1NFVF9GSUxURVInLFxuICBmaWx0ZXJcbn0pXG5cbmV4cG9ydCBjb25zdCBzZXRRdWVyeSA9IChxKSA9PiAoe1xuICB0eXBlOiAnU0VUX1FVRVJZJyxcbiAgcVxufSlcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZVRhc2tzID0gKCkgPT4gKHtcbiAgdHlwZTogJ1RPR0dMRV9UQVNLUydcbn0pXG5cbmV4cG9ydCBjb25zdCBhZGRQYW5lbCA9IChwYW5lbCkgPT4gKHtcbiAgdHlwZTogJ0FERF9QQU5FTCcsXG4gIHBhbmVsXG59KVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlUGFuZWwgPSAocGFuZWwpPT4gKHtcbiAgdHlwZTogJ1JFTU9WRV9QQU5FTCdcbn0pXG5cbmV4cG9ydCBjb25zdCBjbGVhclBhbmVsID0gKHBhbmVsKSA9PiAoe1xuICB0eXBlOiAnQ0xFQVJfUEFORUwnXG59KVxuIl19