'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var load = exports.load = function load(endpoint, query) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    query: query,
    request: 'LOAD_REQUEST',
    success: 'LOAD_SUCCESS',
    failure: 'LOAD_FAILURE'
  };
};

var setChosen = exports.setChosen = function setChosen(chosen) {
  return {
    type: 'SET_CHOSEN',
    chosen: chosen
  };
};

var setQuery = exports.setQuery = function setQuery(query) {
  return {
    type: 'SET_QUERY',
    query: query
  };
};

var setFilter = exports.setFilter = function setFilter(filter) {
  return {
    type: 'SET_FILTER',
    filter: filter
  };
};

var toggleFilter = exports.toggleFilter = function toggleFilter(id) {
  return {
    type: 'TOGGLE_FILTER',
    id: id
  };
};

var toggleRecord = exports.toggleRecord = function toggleRecord(multiple, record) {
  return {
    type: 'TOGGLE_RECORD',
    multiple: multiple,
    record: record
  };
};