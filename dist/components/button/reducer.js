'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  error: null,
  result: null,
  status: 'pending'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'REQUEST_REQUEST':
      return _extends({}, state, {
        status: 'submitting'
      });

    case 'REQUEST_FAILURE':
      return _extends({}, state, {
        status: 'failure',
        error: action.result.error.message
      });

    case 'REQUEST_SUCCESS':
      return _extends({}, state, {
        result: action.result.data,
        status: 'success'
      });

    default:
      return state;
  }
};

exports.default = reducer;