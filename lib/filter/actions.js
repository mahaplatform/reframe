'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var load = exports.load = function load(key, endpoint, value, text, ids) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    meta: { key: key, value: value, text: text },
    query: { $ids: ids },
    request: 'LOAD_REQUEST',
    success: 'LOAD_SUCCESS',
    failure: 'LOAD_FAILURE'
  };
};

var set = exports.set = function set(key, value) {
  return {
    type: 'SET',
    key: key,
    value: value
  };
};

var choose = exports.choose = function choose(index) {
  return {
    type: 'CHOOSE',
    index: index
  };
};

var back = exports.back = function back() {
  return {
    type: 'BACK'
  };
};

var restart = exports.restart = function restart() {
  return {
    type: 'RESTART'
  };
};

var resetAll = exports.resetAll = function resetAll() {
  return {
    type: 'RESET_ALL'
  };
};

var reset = exports.reset = function reset(key) {
  return {
    type: 'RESET',
    key: key
  };
};

var update = exports.update = function update(key, value) {
  return {
    type: 'UPDATE',
    key: key,
    value: value
  };
};

var remove = exports.remove = function remove(key, index) {
  return {
    type: 'REMOVE',
    key: key,
    index: index
  };
};

var query = exports.query = function query(q) {
  return {
    type: 'QUERY',
    q: q
  };
};