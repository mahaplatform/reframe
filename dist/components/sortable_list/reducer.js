'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  items: []
};

var set = function set(state, action) {
  return _extends({}, state, {
    items: action.items
  });
};

var toggle = function toggle(state, action) {
  return _extends({}, state, {
    items: state.items.map(function (item, index) {
      if (index !== action.index) return item;
      return _extends({}, item, {
        checked: !item.checked
      });
    })
  });
};

var move = function move(state, action) {
  return _extends({}, state, {
    items: action.from < action.to ? [].concat(_toConsumableArray(state.items.slice(0, action.from)), _toConsumableArray(state.items.slice(action.from + 1, action.to + 1)), [state.items[action.from]], _toConsumableArray(state.items.slice(action.to + 1))) : [].concat(_toConsumableArray(state.items.slice(0, action.to)), [state.items[action.from]], _toConsumableArray(state.items.slice(action.to, action.from)), _toConsumableArray(state.items.slice(action.from + 1)))
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return set(state, action);

    case 'TOGGLE':
      return toggle(state, action);

    case 'MOVE':
      return move(state, action);

    default:
      return state;
  }
};

exports.default = reducer;