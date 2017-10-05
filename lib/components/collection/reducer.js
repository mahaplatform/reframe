'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  filter: {},
  managing: false,
  open: false,
  panel: null,
  q: '',
  records: null,
  sort: {
    key: null,
    order: null
  }
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

var toggleTasks = function toggleTasks(state, action) {
  return _extends({}, state, {
    managing: !state.managing
  });
};

var addPanel = function addPanel(state, action) {
  return _extends({}, state, {
    open: true,
    panel: action.panel
  });
};

var removePanel = function removePanel(state, action) {
  return _extends({}, state, {
    open: false
  });
};

var clearPanel = function clearPanel(state, action) {
  return _extends({}, state, {
    panel: null
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

    case 'TOGGLE_TASKS':
      return toggleTasks(state, action);

    case 'ADD_PANEL':
      return addPanel(state, action);

    case 'REMOVE_PANEL':
      return removePanel(state, action);

    case 'CLEAR_PANEL':
      return clearPanel(state, action);

    default:
      return state;
  }
};

exports.default = reducer;