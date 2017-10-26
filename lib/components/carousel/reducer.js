'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  direction: 'left',
  active: 0,
  total: 0
};

var setTotal = function setTotal(state, action) {
  return _extends({}, state, {
    total: action.total
  });
};

var previous = function previous(state, action) {
  return _extends({}, state, {
    direction: 'right',
    active: state.active === 0 ? state.total - 1 : state.active - 1
  });
};

var next = function next(state, action) {
  return _extends({}, state, {
    direction: 'left',
    active: state.active === state.total - 1 ? 0 : state.active + 1
  });
};

var goto = function goto(state, action) {
  return _extends({}, state, {
    direction: action.index > state.index || state.index === state.total && action.index === 0 ? 'left' : 'right',
    active: action.index
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_TOTAL':
      return setTotal(state, action);

    case 'PREVIOUS':
      return previous(state, action);

    case 'NEXT':
      return next(state, action);

    case 'GOTO':
      return goto(state, action);

    default:
      return state;
  }
};

exports.default = reducer;