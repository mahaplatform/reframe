'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = exports.INITIAL_STATE = {
  columns: null,
  records: null,
  layout: 'table',
  params: {
    filter: {},
    sort: {
      key: 'created_at',
      order: 'desc'
    }
  },
  expanded: false,
  exporting: false,
  selected: [],
  selectAll: false,
  status: 'initialized',
  batchAction: null
};

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.SET_RECORDS:
      return _extends({}, state, {
        records: action.records
      });

    case actionTypes.FETCH_COLUMNS_REQUEST:
      return _extends({}, state, {
        status: 'loading_columns'
      });

    case actionTypes.FETCH_COLUMNS_SUCCESS:
    case actionTypes.SET_COLUMNS:
      return _extends({}, state, {
        columns: action.columns,
        status: 'columns_loaded'
      });

    case actionTypes.FETCH_COLUMNS_FAILURE:
      return _extends({}, state, {
        errors: action.errors,
        status: 'columns_failed'
      });

    case actionTypes.FETCH_RECORDS_REQUEST:
      return _extends({}, state, {
        status: 'records_loading'
      });

    case actionTypes.FETCH_RECORDS_SUCCESS:
      return _extends({}, state, {
        records: action.records,
        status: 'records_loaded'
      });

    case actionTypes.FETCH_RECORDS_FAILURE:
      return _extends({}, state, {
        errors: action.errors,
        status: 'records_failed'
      });

    case actionTypes.APPEND_RECORDS:
      return _extends({}, state, {
        records: [].concat(_toConsumableArray(state.records), _toConsumableArray(action.records))
      });

    case actionTypes.TOGGLE_FILTERS:
      return _extends({}, state, {
        expanded: !state.expanded
      });

    case actionTypes.CHANGE_LAYOUT:
      return _extends({}, state, {
        layout: action.layout
      });

    case actionTypes.SELECT_ALL:
      var selectAll = !state.selectAll && state.selected.length < state.records.length;
      return _extends({}, state, {
        selectAll: selectAll,
        selected: selectAll ? _lodash2.default.map(state.records, function (object) {
          return object.id;
        }) : []
      });

    case actionTypes.SELECT:
      var selected = _lodash2.default.includes(state.selected, action.id) ? _lodash2.default.without(state.selected, action.id) : [].concat(_toConsumableArray(state.selected), [action.id]);
      return _extends({}, state, {
        selectAll: selected.length == state.records.length,
        selected: selected
      });

    case actionTypes.FILTER_RECORDS:
      return _extends({}, state, {
        status: 'reload_records',
        params: _extends({}, state.params, {
          filter: action.params
        })
      });

    case actionTypes.SORT_RECORDS:
      return _extends({}, state, {
        status: 'reload_records',
        params: _extends({}, state.params, {
          sort: {
            key: action.key,
            order: state.params.sort.key == action.key && state.params.sort.order == 'asc' ? 'desc' : 'asc'
          }
        })
      });

    case actionTypes.EXPORT_RECORDS:
      return _extends({}, state, {
        exporting: true
      });

    case actionTypes.RELOAD_RECORDS:
      return _extends({}, state, {
        records: null,
        status: 'reload_records'
      });

    case actionTypes.EXECUTE_BATCH_ACTION:
      return _extends({}, state, {
        batchAction: action.batchAction
      });

    default:
      return state;

  }
};