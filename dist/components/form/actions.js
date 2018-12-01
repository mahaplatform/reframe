'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setSections = exports.setSections = function setSections(sections) {
  return {
    type: 'SET_SECTIONS',
    sections: sections
  };
};

var updateSections = exports.updateSections = function updateSections(sections) {
  return {
    type: 'UPDATE_SECTIONS',
    sections: sections
  };
};

var fetchSections = exports.fetchSections = function fetchSections(endpoint) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    request: 'FETCH_SECTIONS_REQUEST',
    success: 'FETCH_SECTIONS_SUCCESS',
    failure: 'FETCH_SECTIONS_FAILURE'
  };
};

var fetchData = exports.fetchData = function fetchData(endpoint, defaults) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    meta: { defaults: defaults },
    request: 'FETCH_DATA_REQUEST',
    success: 'FETCH_DATA_SUCCESS',
    failure: 'FETCH_DATA_FAILURE'
  };
};

var pop = exports.pop = function pop() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: 'POP',
    num: num
  };
};

var push = exports.push = function push(component) {
  return {
    type: 'PUSH',
    component: component
  };
};

var setData = exports.setData = function setData(data) {
  return {
    type: 'SET_DATA',
    data: data
  };
};

var setReady = exports.setReady = function setReady(field) {
  return {
    type: 'SET_READY',
    field: field
  };
};

var toggleBusy = exports.toggleBusy = function toggleBusy(field) {
  return {
    type: 'TOGGLE_BUSY',
    field: field
  };
};

var updateData = exports.updateData = function updateData(key, value) {
  return {
    type: 'UPDATE_DATA',
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
    request: 'SUBMIT_REQUEST',
    success: 'SUBMIT_SUCCESS',
    failure: 'SUBMIT_FAILURE'
  };
};

var validateForm = exports.validateForm = function validateForm(validateResults) {
  return {
    type: 'VALIDATE_FORM',
    validateResults: validateResults
  };
};

var reset = exports.reset = function reset() {
  return {
    type: 'RESET'
  };
};