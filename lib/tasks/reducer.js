'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  error: null,
  items: null,
  open: false,
  result: null,
  status: 'pending'
};

var open = function open(state, action) {
  return _extends({}, state, {
    items: action.items,
    open: true
  });
};

var close = function close(state, action) {
  return _extends({}, state, {
    open: true
  });
};

var clear = function clear(state, action) {
  return INITIAL_STATE;
};

var request_request = function request_request(state, action) {
  return _extends({}, state, {
    status: 'submitting'
  });
};

var request_failure = function request_failure(state, action) {
  return _extends({}, state, {
    status: 'failure',
    error: action.result.error.message
  });
};

var request_success = function request_success(state, action) {
  return _extends({}, state, {
    result: action.result.data,
    status: 'success'
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'OPEN':
      return open(state, action);

    case 'CLOSE':
      return close(state, action);

    case 'CLEAR':
      return clear(state, action);

    case 'REQUEST_REQUEST':
      return request_request(state, action);

    case 'REQUEST_FAILURE':
      return request_failure(state, action);

    case 'REQUEST_SUCCESS':
      return request_success(state, action);

    default:
      return state;
  }
};

exports.default = reducer;