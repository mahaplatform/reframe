'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abort = exports.lookup = exports.type = exports.remove = exports.update = exports.reset = exports.resetAll = exports.restart = exports.back = exports.choose = exports.set = exports.load = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var load = exports.load = function load(key, endpoint, value, text, ids) {
  return {
    type: 'APIREQUEST',
    method: 'GET',
    endpoint: endpoint,
    meta: { key: key, value: value, text: text },
    query: { $ids: ids },
    request: actionTypes.LOAD_REQUEST,
    success: actionTypes.LOAD_SUCCESS,
    failure: actionTypes.LOAD_FAILURE
  };
};

var set = exports.set = function set(key, value) {
  return {
    type: actionTypes.SET,
    key: key,
    value: value
  };
};

var choose = exports.choose = function choose(index) {
  return {
    type: actionTypes.CHOOSE,
    index: index
  };
};

var back = exports.back = function back() {
  return {
    type: actionTypes.BACK
  };
};

var restart = exports.restart = function restart() {
  return {
    type: actionTypes.RESTART
  };
};

var resetAll = exports.resetAll = function resetAll() {
  return {
    type: actionTypes.RESET_ALL
  };
};

var reset = exports.reset = function reset(key) {
  return {
    type: actionTypes.RESET,
    key: key
  };
};

var update = exports.update = function update(key, value) {
  return {
    type: actionTypes.UPDATE,
    key: key,
    value: value
  };
};

var remove = exports.remove = function remove(key, index) {
  return {
    type: actionTypes.REMOVE,
    key: key,
    index: index
  };
};

var type = exports.type = function type(query) {
  return {
    type: actionTypes.TYPE,
    query: query
  };
};

var lookup = exports.lookup = function lookup(q) {
  return {
    type: actionTypes.LOOKUP,
    q: q
  };
};

var abort = exports.abort = function abort() {
  return {
    type: actionTypes.ABORT
  };
};