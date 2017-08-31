'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideForm = exports.showForm = exports.load = exports.query = exports.choose = exports.cancel = exports.clear = exports.begin = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var begin = exports.begin = function begin() {
  return {
    type: actionTypes.BEGIN
  };
};

var clear = exports.clear = function clear() {
  return {
    type: actionTypes.CLEAR
  };
};

var cancel = exports.cancel = function cancel() {
  return {
    type: actionTypes.CANCEL
  };
};

var choose = exports.choose = function choose(chosen) {
  return {
    type: actionTypes.CHOOSE,
    chosen: chosen
  };
};

var query = exports.query = function query(q) {
  return {
    type: actionTypes.QUERY,
    q: q
  };
};

var load = exports.load = function load(query, endpoint) {
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

var showForm = exports.showForm = function showForm() {
  return {
    type: actionTypes.SHOW_FORM
  };
};

var hideForm = exports.hideForm = function hideForm() {
  return {
    type: actionTypes.HIDE_FORM
  };
};