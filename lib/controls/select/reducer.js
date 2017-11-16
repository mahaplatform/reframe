'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_VALUE = {
  items: [],
  selected: null,
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
        selected: action.value
      });

    case 'CHOOSE':
      return _extends({}, state, {
        selected: action.value
      });

    default:
      return state;

  }
};