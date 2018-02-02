'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_STATE = {
  message: null,
  style: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return set(state, action);

    case 'CLEAR':
      return clear(state, action);

    default:
      return state;
  }
};

var set = function set(state, action) {
  return {
    style: action.style,
    message: action.message
  };
};

var clear = function clear(state, action) {
  return INITIAL_STATE;
};