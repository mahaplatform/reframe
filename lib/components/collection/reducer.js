'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  mode: null,
  sort: {
    key: null,
    order: null
  },
  filter: {},
  q: '',
  records: null
};

var setParams = function setParams(state, action) {
  return _extends({}, state, {
    filter: action.filter,
    sort: action.sort
  });
};

var filter = function filter(state, action) {
  return _extends({}, state, {
    filter: action.filter
  });
};

var sort = function sort(state, action) {
  return _extends({}, state, {
    sort: {
      key: action.key,
      order: state.sort.key == action.key && state.sort.order == 'asc' ? 'desc' : 'asc'
    }
  });
};

var setRecords = function setRecords(state, action) {
  return _extends({}, state, {
    records: action.records
  });
};

var setFilter = function setFilter(state, action) {
  return _extends({}, state, {
    filter: action.filter
  });
};

var setQuery = function setQuery(state, action) {
  return _extends({}, state, {
    q: action.q
  });
};

var toggleMode = function toggleMode(state, action) {
  return _extends({}, state, {
    mode: state.mode === action.mode ? null : action.mode
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_PARAMS':
      return setParams(state, action);

    case 'FILTER':
      return filter(state, action);

    case 'SORT':
      return sort(state, action);

    case 'SET_RECORDS':
      return setRecords(state, action);

    case 'SET_FILTER':
      return setFilter(state, action);

    case 'SET_QUERY':
      return setQuery(state, action);

    case 'TOGGLE_MODE':
      return toggleMode(state, action);

    default:
      return state;
  }
};

exports.default = reducer;