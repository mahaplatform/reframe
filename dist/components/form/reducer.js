'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  busy: [],
  config: [],
  data: {},
  entity: {},
  errors: {},
  panels: [],
  ready: [],
  status: 'pending'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_SECTIONS':
      return _extends({}, state, {
        config: action.sections,
        status: 'sections_loaded'
      });

    case 'RESET':
      return _extends({}, state, {
        data: {}
      });

    case 'FETCH_SECTIONS_REQUEST':
      return _extends({}, state, {
        status: 'loading_sections'
      });

    case 'FETCH_SECTIONS_SUCCESS':
      return _extends({}, state, {
        status: 'sections_loaded',
        config: action.result.data
      });

    case 'POP':
      return _extends({}, state, {
        panels: state.panels.slice(0, 0 - action.num)
      });

    case 'PUSH':
      return _extends({}, state, {
        panels: [].concat(_toConsumableArray(state.panels), [action.component])
      });

    case 'SET_DATA':
      return _extends({}, state, {
        status: 'data_loaded',
        data: _extends({}, state.data, _lodash2.default.omitBy(action.data, _lodash2.default.isNil))
      });

    case 'SET_READY':
      return _extends({}, state, {
        ready: [].concat(_toConsumableArray(state.ready), [action.field])
      });

    case 'FETCH_DATA_REQUEST':
      return _extends({}, state, {
        status: 'loading_data'
      });

    case 'FETCH_DATA_SUCCESS':
      return _extends({}, state, {
        status: 'data_loaded',
        data: Object.keys(action.defaults).reduce(function (data, key) {
          return _extends({}, data, _defineProperty({}, key, _lodash2.default.get(action.result.data, key) || action.defaults[key] || null));
        }, {})
      });

    case 'TOGGLE_BUSY':
      return _extends({}, state, {
        busy: _lodash2.default.includes(state.busy, action.field) ? _lodash2.default.without(state.busy, action.field) : [].concat(_toConsumableArray(state.busy), [action.field])
      });

    case 'UPDATE_DATA':
      return _extends({}, state, {
        data: _extends({}, state.data, _defineProperty({}, action.key, action.value)),
        errors: _lodash2.default.omit(state.errors, action.key)
      });

    case 'UPDATE_FIELD':
      return _extends({}, state, {
        config: [].concat(_toConsumableArray(_lodash2.default.set(state.config, '[' + action.sectionIndex + '].fields[' + action.fieldIndex + ']', action.field)))
      });

    case 'SUBMIT_REQUEST':
      return _extends({}, state, {
        status: 'submitting'
      });

    case 'SUBMIT_SUCCESS':
      return _extends({}, state, {
        status: 'success',
        entity: action.result.data
      });

    case 'FETCH_SECTIONS_FAILURE':
    case 'FETCH_DATA_FAILURE':
    case 'SUBMIT_FAILURE':
      return _extends({}, state, {
        status: 'failure',
        errors: action.result.errors,
        message: action.result.meta.message
      });

    default:
      return state;
  }
};