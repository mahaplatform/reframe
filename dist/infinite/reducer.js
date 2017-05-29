'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  all: 0,
  records: [],
  status: 'pending',
  total: 300
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.FETCH_REQUEST:
      return _extends({}, state, {
        status: 'loading'
      });

    case actionTypes.FETCH_SUCCESS:
      return _extends({}, state, {
        all: action.result.pagination.all,
        records: action.result.pagination.skip > 0 ? [].concat(_toConsumableArray(state.records), _toConsumableArray(action.result.data)) : action.result.data,
        total: action.result.pagination.total,
        status: loaded >= action.result.pagination.total ? 'completed' : 'loaded'
      });

    case actionTypes.FETCH_FAILURE:
      return _extends({}, state, {
        status: 'failure'
      });

    default:
      return state;
  }
};