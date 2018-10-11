'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  active: false,
  q: ''
};

var begin = function begin(state, action) {
  return (0, _extends3.default)({}, state, {
    active: true
  });
};

var end = function end(state, action) {
  return (0, _extends3.default)({}, state, {
    active: false
  });
};

var type = function type(state, action) {
  return (0, _extends3.default)({}, state, {
    q: action.q
  });
};

var abort = function abort(state, action) {
  return (0, _extends3.default)({}, state, {
    q: ''
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'BEGIN':
      return begin(state, action);

    case 'END':
      return end(state, action);

    case 'TYPE':
      return type(state, action);

    case 'ABORT':
      return abort(state, action);

    default:
      return state;
  }
};

exports.default = reducer;