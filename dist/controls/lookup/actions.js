'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var clear = exports.clear = function clear() {
  return {
    type: 'CLEAR'
  };
};

var cancel = exports.cancel = function cancel() {
  return {
    type: 'CANCEL'
  };
};

var choose = exports.choose = function choose(chosen) {
  return {
    type: 'CHOOSE',
    chosen: chosen
  };
};

var query = exports.query = function query(q) {
  return {
    type: 'QUERY',
    q: q
  };
};

var load = exports.load = function load(query, endpoint) {
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

var showForm = exports.showForm = function showForm() {
  return {
    type: 'SHOW_FORM'
  };
};

var hideForm = exports.hideForm = function hideForm() {
  return {
    type: 'HIDE_FORM'
  };
};