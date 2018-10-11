'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  direction: 'left',
  active: 0,
  total: 0
};

var setTotal = function setTotal(state, action) {
  return (0, _extends3.default)({}, state, {
    total: action.total
  });
};

var previous = function previous(state, action) {
  return (0, _extends3.default)({}, state, {
    direction: 'right',
    active: state.active === 0 ? state.total - 1 : state.active - 1
  });
};

var next = function next(state, action) {
  return (0, _extends3.default)({}, state, {
    direction: 'left',
    active: state.active === state.total - 1 ? 0 : state.active + 1
  });
};

var goto = function goto(state, action) {
  return (0, _extends3.default)({}, state, {
    direction: action.index > state.index || state.index === state.total && action.index === 0 ? 'left' : 'right',
    active: action.index
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_TOTAL':
      return setTotal(state, action);

    case 'PREVIOUS':
      return previous(state, action);

    case 'NEXT':
      return next(state, action);

    case 'GOTO':
      return goto(state, action);

    default:
      return state;
  }
};

exports.default = reducer;