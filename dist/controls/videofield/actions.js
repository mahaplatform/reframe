'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(link_id) {
  return {
    type: 'SET',
    link_id: link_id
  };
};

var remove = exports.remove = function remove() {
  return {
    type: 'REMOVE'
  };
};

var fetchLink = exports.fetchLink = function fetchLink(id) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: '/api/admin/links/' + id,
    request: 'FETCH_LINK_REQUEST',
    success: 'FETCH_LINK_SUCCESS',
    failure: 'FETCH_LINK_FAILURE'
  };
};

var createLink = exports.createLink = function createLink(url) {
  return {
    type: 'API_REQUEST',
    method: 'POST',
    body: { url: url },
    endpoint: '/api/admin/links',
    request: 'FETCH_LINK_REQUEST',
    success: 'FETCH_LINK_SUCCESS',
    failure: 'FETCH_LINK_FAILURE'
  };
};