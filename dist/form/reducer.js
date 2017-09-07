'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  status: 'pending',
  config: [],
  entity: {},
  data: {},
  errors: {},
  ready: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.SET_SECTIONS:
      return _extends({}, state, {
        config: action.sections,
        status: 'sections_loaded'
      });

    case actionTypes.FETCH_SECTIONS_REQUEST:
      return _extends({}, state, {
        status: 'loading_sections'
      });

    case actionTypes.FETCH_SECTIONS_SUCCESS:
      return _extends({}, state, {
        status: 'sections_loaded',
        config: action.result.data
      });

    case actionTypes.SET_DATA:
      return _extends({}, state, {
        status: 'data_loaded',
        data: _extends({}, state.data, _lodash2.default.omitBy(action.data, _lodash2.default.isNil))
      });

    case actionTypes.SET_READY:
      return _extends({}, state, {
        ready: [].concat(_toConsumableArray(state.ready), [action.field])
      });

    case actionTypes.FETCH_DATA_REQUEST:
      return _extends({}, state, {
        status: 'loading_data'
      });

    case actionTypes.FETCH_DATA_SUCCESS:
      return _extends({}, state, {
        status: 'data_loaded',
        data: action.result.data
      });

    case actionTypes.SET_READY:
      return _extends({}, state, {
        status: 'ready'
      });

    case actionTypes.UPDATE_DATA:
      return _extends({}, state, {
        data: _extends({}, state.data, _defineProperty({}, action.key, action.value)),
        errors: _lodash2.default.omit(state.errors, action.key)
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

    case actionTypes.FETCH_SECTIONS_FAILURE:
    case actionTypes.FETCH_DATA_FAILURE:
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