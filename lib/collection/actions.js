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