'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_VALUE = {
  active: false,
  q: null,
  chosen: null,
  status: 'ready',
  adding: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case 'BEGIN':
      return _extends({}, state, {
        active: true
      });

    case 'END':
      return _extends({}, state, {
        active: false
      });

    case 'CLEAR':
      return _extends({}, state, {
        chosen: null
      });

    case 'CANCEL':
      return _extends({}, state, {
        active: false
      });

    case 'CHOOSE':
      return _extends({}, state, {
        active: false,
        chosen: action.chosen
      });

    case 'QUERY':
      return _extends({}, state, {
        q: action.q
      });

    case 'LOAD_SUCCESS':
      return _extends({}, state, {
        chosen: action.result.data[0],
        status: 'success'
      });

    case 'SHOW_FORM':
      return _extends({}, state, {
        adding: true
      });

    case 'HIDE_FORM':
      return _extends({}, state, {
        active: false,
        adding: false
      });
    default:
      return state;

  }
};