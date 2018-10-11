'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_STATE = {
  color: null
};

var set = function set(state, action) {
  return {
    color: action.color
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return set(state, action);

    default:
      return state;
  }
};

exports.default = reducer;