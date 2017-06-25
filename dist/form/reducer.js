'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INITIAL_STATE = {
  status: 'pending',
  config: [],
  entity: {},
  data: {},
  errors: {}
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.SET_SECTIONS:
      return _extends({}, state, {
        config: action.sections,
        status: 'configured'
      });

    case actionTypes.FETCH_DATA_REQUEST:
      return _extends({}, state, {
        status: 'loading'
      });

    case actionTypes.FETCH_DATA_SUCCESS:
    case actionTypes.SET_DATA:
      return _extends({}, state, {
        status: 'ready',
        data: action.result.data
      });

    case actionTypes.FETCH_DATA_FAILURE:
      return _extends({}, state, {
        status: 'error',
        error: action.result.error
      });

    case actionTypes.SUBMIT_REQUEST:
      return _extends({}, state, {
        status: 'submitting'
      });

    case actionTypes.SUBMIT_SUCCESS:
      return _extends({}, state, {
        status: 'success',
        entity: action.result.data
      });

    case actionTypes.SUBMIT_FAILURE:
      return _extends({}, state, {
        status: 'failure',
        errors: action.result.errors,
        message: action.result.meta.message
      });

    default:
      return state;
  }
};