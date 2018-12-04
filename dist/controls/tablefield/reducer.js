'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_VALUE = {
  rows: [],
  values: {}
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return _extends({}, state, {
        rows: action.rows
      });

    case 'ADD':
      return _extends({}, state, {
        rows: [].concat(_toConsumableArray(state.rows), [action.row]),
        values: {}
      });

    case 'UPDATE':
      return _extends({}, state, {
        values: _extends({}, state.values, _defineProperty({}, action.key, action.value))
      });

    case 'REMOVE':
      return _extends({}, state, {
        rows: [].concat(_toConsumableArray(state.rows.filter(function (row, index) {
          return index !== action.index;
        })))
      });

    case 'REORDER':
      return _extends({}, state, {
        rows: action.from < action.to ? [].concat(_toConsumableArray(state.rows.slice(0, action.from)), _toConsumableArray(state.rows.slice(action.from + 1, action.to + 1)), [state.rows[action.from]], _toConsumableArray(state.rows.slice(action.to + 1))) : [].concat(_toConsumableArray(state.rows.slice(0, action.to)), [state.rows[action.from]], _toConsumableArray(state.rows.slice(action.to, action.from)), _toConsumableArray(state.rows.slice(action.from + 1)))
      });

    default:
      return state;

  }
};