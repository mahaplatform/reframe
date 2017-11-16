'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var fetchItems = exports.fetchItems = function fetchItems(endpoint) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    request: 'FETCH_ITEMS_REQUEST',
    success: 'FETCH_ITEMS_SUCCESS',
    failure: 'FETCH_ITEMS_FAILURE'
  };
};

var setItems = exports.setItems = function setItems(items) {
  return {
    type: 'SET_ITEMS',
    items: items
  };
};

var setSelected = exports.setSelected = function setSelected(value) {
  return {
    type: 'SET_SELECTED',
    value: value
  };
};

var choose = exports.choose = function choose(value) {
  return {
    type: 'CHOOSE',
    value: value
  };
};