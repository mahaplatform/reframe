'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  component: null,
  location: null,
  open: false
};

var open = function open(state, action) {
  return {
    component: action.component,
    location: action.location,
    open: true
  };
};

var close = function close(state, action) {
  return (0, _extends3.default)({}, state, {
    open: false
  });
};

var clear = function clear(state, action) {
  return (0, _extends3.default)({}, INITIAL_STATE);
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'OPEN':
      return open(state, action);

    case 'CLOSE':
      return close(state, action);

    case 'CLEAR':
      return clear(state, action);

    default:
      return state;
  }
};

exports.default = reducer;