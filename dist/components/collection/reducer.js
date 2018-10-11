'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  columns: [],
  filter: {},
  managing: false,
  open: false,
  panel: null,
  q: '',
  records: null,
  selected: [],
  sort: {
    key: null,
    order: null
  }
};

var setParams = function setParams(state, action) {
  return (0, _extends3.default)({}, state, {
    filter: action.filter,
    sort: action.sort
  });
};

var setColumns = function setColumns(state, action) {
  return (0, _extends3.default)({}, state, {
    columns: action.columns
  });
};

var setSelected = function setSelected(state, action) {
  return (0, _extends3.default)({}, state, {
    selected: action.selected
  });
};

var filter = function filter(state, action) {
  return (0, _extends3.default)({}, state, {
    filter: action.filter
  });
};

var sort = function sort(state, action) {
  return (0, _extends3.default)({}, state, {
    sort: {
      key: action.key,
      order: state.sort.key == action.key && state.sort.order == 'asc' ? 'desc' : 'asc'
    }
  });
};

var setRecords = function setRecords(state, action) {
  return (0, _extends3.default)({}, state, {
    records: action.records
  });
};

var setFilter = function setFilter(state, action) {
  return (0, _extends3.default)({}, state, {
    filter: action.filter
  });
};

var setQuery = function setQuery(state, action) {
  return (0, _extends3.default)({}, state, {
    q: action.q
  });
};

var toggleTasks = function toggleTasks(state, action) {
  return (0, _extends3.default)({}, state, {
    managing: !state.managing
  });
};

var addPanel = function addPanel(state, action) {
  return (0, _extends3.default)({}, state, {
    open: true,
    panel: action.panel
  });
};

var removePanel = function removePanel(state, action) {
  return (0, _extends3.default)({}, state, {
    open: false
  });
};

var clearPanel = function clearPanel(state, action) {
  return (0, _extends3.default)({}, state, {
    panel: null
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_PARAMS':
      return setParams(state, action);

    case 'SET_COLUMNS':
      return setColumns(state, action);

    case 'SET_SELECTED':
      return setSelected(state, action);

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