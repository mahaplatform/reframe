'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  records: null,
  request_id: null,
  selectAll: false,
  selected: [],
  status: 'pending'
};

var fetchRequest = function fetchRequest(state, action) {
  return _extends({}, state, {
    request_id: action.request_id,
    status: status !== 'pending' && action.request.params.$page.skip === 0 ? 'refreshing' : 'loading'
  });
};

var fetchSuccess = function fetchSuccess(state, action) {
  if (action.request_id !== state.request_id) return state;
  if (!_lodash2.default.includes(['loading', 'refreshing', 'delayed'], state.status)) return state;
  var loaded = state.records ? state.records.length : 0;
  if (action.result.pagination.all !== undefined) {
    return _extends({}, state, {
      all: action.result.pagination.all,
      request_id: null,
      records: action.result.pagination.skip > 0 ? [].concat(_toConsumableArray(state.records || []), _toConsumableArray(action.result.data)) : action.result.data,
      total: action.result.pagination.total,
      status: loaded + action.result.data.length >= action.result.pagination.total ? 'completed' : 'loaded'
    });
  } else if (action.result.pagination.next !== undefined) {
    return _extends({}, state, {
      next: action.result.pagination.next,
      request_id: null,
      records: action.result.pagination.skip > 0 ? [].concat(_toConsumableArray(state.records || []), _toConsumableArray(action.result.data)) : action.result.data,
      status: action.result.pagination.next === null ? 'completed' : 'loaded'
    });
  }
};

var fetchFailure = function fetchFailure(state, action) {
  return _extends({}, state, {
    status: 'failed'
  });
};

var fetchDelay = function fetchDelay(state, action) {
  return _extends({}, state, {
    status: 'delayed'
  });
};

var fetchTimeout = function fetchTimeout(state, action) {
  return _extends({}, state, {
    status: 'timeout'
  });
};

var select = function select(state, action) {
  var selected = !_lodash2.default.includes(state.selected, action.id) ? [].concat(_toConsumableArray(state.selected), [action.id]) : state.selected.filter(function (id) {
    return id !== action.id;
  });
  var all = state.records ? state.records.map(function (record) {
    return record.id;
  }) : [];
  var selectAll = _lodash2.default.isEqual(all.sort(), selected.sort());
  return _extends({}, state, {
    selectAll: selectAll,
    selected: selected
  });
};

var selectAll = function selectAll(state, action) {
  var all = state.records ? state.records.map(function (record) {
    return record.id;
  }) : [];
  var selectAll = !_lodash2.default.isEqual(all.sort(), state.selected.sort());
  return _extends({}, state, {
    selectAll: selectAll,
    selected: selectAll ? all : []
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_REQUEST':
      return fetchRequest(state, action);

    case 'FETCH_SUCCESS':
      return fetchSuccess(state, action);

    case 'FETCH_FAILURE':
      return fetchFailure(state, action);

    case 'FETCH_DELAY':
      return fetchDelay(state, action);

    case 'FETCH_TIMEOUT':
      return fetchTimeout(state, action);

    case 'SELECT':
      return select(state, action);

    case 'SELECT_ALL':
      return selectAll(state, action);

    default:
      return state;
  }
};

exports.default = reducer;