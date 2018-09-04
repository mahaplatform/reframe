'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_VALUE = {
  active: false,
  value: null,
  month: null,
  year: null
};

var setCurrent = function setCurrent(state, action) {
  return (0, _extends3.default)({}, state, {
    month: action.month,
    year: action.year
  });
};

var setValue = function setValue(state, action) {
  return (0, _extends3.default)({}, state, {
    value: action.value
  });
};

var previous = function previous(state, action) {
  return (0, _extends3.default)({}, state, {
    month: state.month !== null ? state.month === 0 ? 11 : state.month - 1 : null,
    year: state.year !== null ? state.month === 0 ? state.year - 1 : state.year : null
  });
};

var next = function next(state, action) {
  return (0, _extends3.default)({}, state, {
    month: state.month !== null ? state.month === 11 ? 0 : state.month + 1 : null,
    year: state.year !== null ? state.month === 11 ? state.year + 1 : state.year : null
  });
};

var begin = function begin(state, action) {
  return (0, _extends3.default)({}, state, {
    active: true
  });
};

var cancel = function cancel(state, action) {
  return (0, _extends3.default)({}, state, {
    active: false
  });
};

var choose = function choose(state, action) {
  return (0, _extends3.default)({}, state, {
    value: action.value,
    active: false
  });
};

var clear = function clear(state, action) {
  return (0, _extends3.default)({}, state, {
    value: null
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_CURRENT':
      return setCurrent(state, action);

    case 'SET_VALUE':
      return setValue(state, action);

    case 'PREVIOUS':
      return previous(state, action);

    case 'NEXT':
      return next(state, action);

    case 'BEGIN':
      return begin(state, action);

    case 'CANCEL':
      return cancel(state, action);

    case 'CHOOSE':
      return choose(state, action);

    case 'CLEAR':
      return clear(state, action);

    default:
      return state;

  }
};

exports.default = reducer;