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

var fetchData = exports.fetchData = function fetchData(endpoint) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    request: 'FETCH_DATA_REQUEST',
    success: 'FETCH_DATA_SUCCESS',
    failure: 'FETCH_DATA_FAILURE'
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