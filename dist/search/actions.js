'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lookup = exports.type = exports.completeSearch = exports.abortSearch = exports.focusSearch = exports.resetSearch = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var resetSearch = exports.resetSearch = function resetSearch() {
  return {
    type: actionTypes.RESET_SEARCH
  };
};

var focusSearch = exports.focusSearch = function focusSearch() {
  return {
    type: actionTypes.FOCUS_SEARCH
  };
};

var abortSearch = exports.abortSearch = function abortSearch() {
  return {
    type: actionTypes.ABORT_SEARCH
  };
};

var completeSearch = exports.completeSearch = function completeSearch(model, index) {
  return {
    type: actionTypes.COMPLETE_SEARCH,
    model: model,
    index: index
  };
};

var type = exports.type = function type(q) {
  return {
    type: actionTypes.TYPE_SEARCH,
    q: q
  };
};

var lookup = exports.lookup = function lookup(q) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    params: { q: q },
    endpoint: '/admin/search',
    request: actionTypes.LOOKUP_REQUEST,
    success: actionTypes.LOOKUP_SUCCESS,
    failure: actionTypes.LOOKUP_FAILURE
  };
};