'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = exports.load = exports.toggle = exports.type = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var type = exports.type = function type(q) {
  return {
    type: actionTypes.TYPE,
    q: q
  };
};

var toggle = exports.toggle = function toggle(record) {
  return {
    type: actionTypes.TOGGLE,
    record: record
  };
};

var load = exports.load = function load(endpoint, query) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    query: query,
    request: actionTypes.LOAD_REQUEST,
    success: actionTypes.LOAD_SUCCESS,
    failure: actionTypes.LOAD_FAILURE
  };
};

var save = exports.save = function save(endpoint, ids, onSuccess, onFailure) {
  return {
    type: 'API_REQUEST',
    method: 'PATCH',
    endpoint: endpoint,
    body: { ids: ids },
    request: actionTypes.SAVE_REQUEST,
    success: actionTypes.SAVE_SUCCESS,
    failure: actionTypes.SAVE_FAILURE,
    onSuccess: onSuccess,
    onFailure: onFailure
  };
};