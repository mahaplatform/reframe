'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return (0, _extends3.default)({}, state, {
        active: true
      });

    case 'END':
      return (0, _extends3.default)({}, state, {
        active: false
      });

    case 'CLEAR':
      return (0, _extends3.default)({}, state, {
        chosen: null
      });

    case 'CANCEL':
      return (0, _extends3.default)({}, state, {
        active: false
      });

    case 'CHOOSE':
      return (0, _extends3.default)({}, state, {
        active: false,
        chosen: action.chosen
      });

    case 'QUERY':
      return (0, _extends3.default)({}, state, {
        q: action.q
      });

    case 'LOAD_SUCCESS':
      return (0, _extends3.default)({}, state, {
        chosen: action.result.data[0],
        status: 'success'
      });

    case 'SHOW_FORM':
      return (0, _extends3.default)({}, state, {
        adding: true
      });

    case 'HIDE_FORM':
      return (0, _extends3.default)({}, state, {
        active: false,
        adding: false
      });
    default:
      return state;

  }
};