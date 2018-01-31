'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  panels: []
};

var open = function open(state, action) {
  return {
    panels: [action.component]
  };
};

var close = function close(state, action) {
  return _extends({}, state, {
    panels: []
  });
};

var pop = function pop(state, action) {
  return {
    panels: state.panels.slice(0, 0 - action.num)
  };
};

var push = function push(state, action) {
  return {
    panels: [].concat(_toConsumableArray(state.panels), [action.component])
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'CLOSE':
      return close(state, action);

    case 'OPEN':
      return open(state, action);

    case 'POP':
      return pop(state, action);

    case 'PUSH':
      return push(state, action);

    default:
      return state;
  }
};

exports.default = reducer;