'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  records: null,
  request_id: null,
  selectAll: false,
  selected: [],
  status: 'pending'
};

var fetchRequest = function fetchRequest(state, action) {
  return (0, _extends3.default)({}, state, {
    request_id: action.request_id,
    status: status !== 'pending' && action.request.params.$page.skip === 0 ? 'loading' : 'refreshing'
  });
};

var fetchSuccess = function fetchSuccess(state, action) {
  if (action.request_id !== state.request_id) return state;
  if (!_lodash2.default.includes(['loading', 'refreshing', 'delayed'], state.status)) return state;
  var loaded = state.records ? state.records.length : 0;
  if (action.result.pagination.all !== undefined) {
    return (0, _extends3.default)({}, state, {
      all: action.result.pagination.all,
      request_id: null,
      records: action.result.pagination.skip > 0 ? [].concat((0, _toConsumableArray3.default)(state.records || []), (0, _toConsumableArray3.default)(action.result.data)) : action.result.data,
      total: action.result.pagination.total,
      status: loaded + action.result.data.length >= action.result.pagination.total ? 'completed' : 'loaded'
    });
  } else if (action.result.pagination.next !== undefined) {
    return (0, _extends3.default)({}, state, {
      next: action.result.pagination.next,
      request_id: null,
      records: action.result.pagination.skip > 0 ? [].concat((0, _toConsumableArray3.default)(state.records || []), (0, _toConsumableArray3.default)(action.result.data)) : action.result.data,
      status: action.result.pagination.next === null ? 'completed' : 'loaded'
    });
  }
};

var fetchFailure = function fetchFailure(state, action) {
  return (0, _extends3.default)({}, state, {
    status: 'failed'
  });
};

var fetchDelay = function fetchDelay(state, action) {
  return (0, _extends3.default)({}, state, {
    status: 'delayed'
  });
};

var fetchTimeout = function fetchTimeout(state, action) {
  return (0, _extends3.default)({}, state, {
    status: 'timeout'
  });
};

var select = function select(state, action) {
  var selected = !_lodash2.default.includes(state.selected, action.id) ? [].concat((0, _toConsumableArray3.default)(state.selected), [action.id]) : state.selected.filter(function (id) {
    return id !== action.id;
  });
  var all = state.records ? state.records.map(function (record) {
    return record.id;
  }) : [];
  var selectAll = _lodash2.default.isEqual(all.sort(), selected.sort());
  return (0, _extends3.default)({}, state, {
    selectAll: selectAll,
    selected: selected
  });
};

var selectAll = function selectAll(state, action) {
  var all = state.records ? state.records.map(function (record) {
    return record.id;
  }) : [];
  var selectAll = !_lodash2.default.isEqual(all.sort(), state.selected.sort());
  return (0, _extends3.default)({}, state, {
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