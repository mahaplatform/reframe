'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = exports.INITIAL_STATE = {
  active: false,
  records: null,
  selected: [],
  status: 'pending'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_REQUEST':
      return _extends({}, state, {
        status: 'loading'
      });

    case 'FETCH_FAILURE':
      return _extends({}, state, {
        status: 'failure'
      });

    case 'FETCH_SUCCESS':
      return _extends({}, state, {
        selected: action.result.data,
        status: 'success'
      });

    case 'SET':
      return _extends({}, state, {
        records: action.records
      });

    case 'BEGIN':
      return _extends({}, state, {
        active: true
      });

    case 'END':
      return _extends({}, state, {
        active: false
      });

    case 'SELECT':
      return _extends({}, state, {
        selected: action.selected
      });

    case 'REMOVE':
      return _extends({}, state, {
        selected: [].concat(_toConsumableArray(state.selected.slice(0, action.index)), _toConsumableArray(state.selected.slice(action.index + 1)))
      });

    default:
      return state;

  }
};

exports.default = reducer;