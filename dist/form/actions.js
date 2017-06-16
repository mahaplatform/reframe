'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = exports.updateData = exports.setReady = exports.setData = exports.fetchData = exports.setSections = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setSections = exports.setSections = function setSections(sections) {
  return {
    type: actionTypes.SET_SECTIONS,
    sections: sections
  };
};

var fetchData = exports.fetchData = function fetchData(endpoint) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    request: actionTypes.FETCH_DATA_REQUEST,
    success: actionTypes.FETCH_DATA_SUCCESS,
    failure: actionTypes.FETCH_DATA_FAILURE
  };
};

var setData = exports.setData = function setData(data) {
  return {
    type: actionTypes.SET_DATA,
    data: data
  };
};

var setReady = exports.setReady = function setReady() {
  return {
    type: actionTypes.SET_READY
  };
};

var updateData = exports.updateData = function updateData(key, value) {
  return {
    type: actionTypes.UPDATE_DATA,
    key: key,
    value: value
  };
};

var submitForm = exports.submitForm = function submitForm(method, endpoint, body) {
  return {
    type: 'API_REQUEST',
    method: method,
    body: body,
    endpoint: endpoint,
    request: actionTypes.SUBMIT_REQUEST,
    success: actionTypes.SUBMIT_SUCCESS,
    failure: actionTypes.SUBMIT_FAILURE
  };
};