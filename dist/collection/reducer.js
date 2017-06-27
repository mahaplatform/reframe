'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.SET_PARAMS:
      return _extends({}, state, {
        params: {
          filter: action.filter,
          sort: action.sort
        }
      });

    case actionTypes.FILTER:
      return _extends({}, state, {
        params: _extends({}, state.params, {
          filter: action.filter
        })
      });

    case actionTypes.SORT:
      return _extends({}, state, {
        params: _extends({}, state.params, {
          sort: {
            key: action.key,
            order: state.params.sort.key == action.key && state.params.sort.order == 'asc' ? 'desc' : 'asc'
          }
        })
      });

    case actionTypes.SET_RECORDS:
      return _extends({}, state, {
        records: action.records
      });

    default:
      return state;
  }
};