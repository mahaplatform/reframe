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

var fetchDelay = exports.fetchDelay = function fetchDelay() {
  return {
    type: 'FETCH_DELAY'
  };
};

var fetchTimeout = exports.fetchTimeout = function fetchTimeout() {
  return {
    type: 'FETCH_TIMEOUT'
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