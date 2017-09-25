'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  params: {
    sort: {
      key: null,
      order: null
    },
    filter: {}
  },
  records: null
};

var setParams = function setParams(state, action) {
  return _extends({}, state, {
    params: {
      filter: action.filter,
      sort: action.sort
    }
  });
};

var filter = function filter(state, action) {
  return _extends({}, state, {
    params: _extends({}, state.params, {
      filter: action.filter
    })
  });
};

var sort = function sort(state, action) {
  return _extends({}, state, {
    params: _extends({}, state.params, {
      sort: {
        key: action.key,
        order: state.params.sort.key == action.key && state.params.sort.order == 'asc' ? 'desc' : 'asc'
      }
    })
  });
};

var setRecords = function setRecords(state, action) {
  return _extends({}, state, {
    records: action.records
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

    default:
      return state;
  }
};

exports.default = reducer;