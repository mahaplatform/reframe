'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = exports.INITIAL_STATE = {
  q: ''
};

var type = function type(state, action) {
  return _extends({}, state, {
    q: action.q
  });
};

var abort = function abort(state, action) {
  return _extends({}, state, {
    q: ''
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'TYPE':
      return type(state, action);

    case 'ABORT':
      return abort(state, action);

    default:
      return state;
  }
};

exports.default = reducer;