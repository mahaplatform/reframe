'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var request = exports.request = function request(_ref) {
  var method = _ref.method,
      endpoint = _ref.endpoint,
      onSuccess = _ref.onSuccess,
      onFailure = _ref.onFailure;
  return {
    type: 'API_REQUEST',
    method: method,
    endpoint: endpoint,
    request: 'REQUEST_REQUEST',
    success: 'REQUEST_SUCCESS',
    failure: 'REQUEST_FAILURE',
    onSuccess: onSuccess,
    onFailure: onFailure
  };
};