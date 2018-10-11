'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fetch = exports.fetch = function fetch(endpoint, query) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    query: query,
    request: 'FETCH_REQUEST',
    success: 'FETCH_SUCCESS',
    failure: 'FETCH_FAILURE'
  };
};

var set = exports.set = function set(records) {
  return {
    type: 'SET',
    records: records
  };
};

var begin = exports.begin = function begin() {
  return {
    type: 'BEGIN'
  };
};

var end = exports.end = function end() {
  return {
    type: 'END'
  };
};

var remove = exports.remove = function remove(index) {
  return {
    type: 'REMOVE',
    index: index
  };
};

var select = exports.select = function select(selected) {
  return {
    type: 'SELECT',
    selected: selected
  };
};