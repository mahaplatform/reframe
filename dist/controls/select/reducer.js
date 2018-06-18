'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_VALUE = {
  items: [],
  selected: [],
  status: 'pending'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_ITEMS':
      return _extends({}, state, {
        items: action.items
      });

    case 'FETCH_ITEMS_REQUEST':
      return _extends({}, state, {
        status: 'loading'
      });

    case 'FETCH_ITEMS_FAILURE':
      return _extends({}, state, {
        status: 'success'
      });

    case 'FETCH_ITEMS_SUCCESS':
      return _extends({}, state, {
        items: action.result.data,
        status: 'success'
      });

    case 'SET_SELECTED':
      return _extends({}, state, {
        selected: action.values
      });

    case 'CHOOSE':
      return _extends({}, state, {
        selected: _lodash2.default.includes(state.selected, action.value) ? action.multiple ? _lodash2.default.without(state.selected, action.value) : [].concat(_toConsumableArray(state.selected)) : action.multiple ? [].concat(_toConsumableArray(state.selected), [action.value]) : [action.value]

      });

    default:
      return state;

  }
};