'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return (0, _extends4.default)({}, state, {
        config: action.sections,
        status: 'sections_loaded'
      });

    case 'RESET':
      return (0, _extends4.default)({}, state, {
        data: {}
      });

    case 'FETCH_SECTIONS_REQUEST':
      return (0, _extends4.default)({}, state, {
        status: 'loading_sections'
      });

    case 'FETCH_SECTIONS_SUCCESS':
      return (0, _extends4.default)({}, state, {
        status: 'sections_loaded',
        config: action.result.data
      });

    case 'POP':
      return (0, _extends4.default)({}, state, {
        panels: state.panels.slice(0, 0 - action.num)
      });

    case 'PUSH':
      return (0, _extends4.default)({}, state, {
        panels: [].concat((0, _toConsumableArray3.default)(state.panels), [action.component])
      });

    case 'SET_DATA':
      return (0, _extends4.default)({}, state, {
        status: 'data_loaded',
        data: (0, _extends4.default)({}, state.data, _lodash2.default.omitBy(action.data, _lodash2.default.isNil))
      });

    case 'SET_READY':
      return (0, _extends4.default)({}, state, {
        ready: [].concat((0, _toConsumableArray3.default)(state.ready), [action.field])
      });

    case 'FETCH_DATA_REQUEST':
      return (0, _extends4.default)({}, state, {
        status: 'loading_data'
      });

    case 'FETCH_DATA_SUCCESS':
      return (0, _extends4.default)({}, state, {
        status: 'data_loaded',
        data: action.result.data
      });

    case 'TOGGLE_BUSY':
      return (0, _extends4.default)({}, state, {
        busy: _lodash2.default.includes(state.busy, action.field) ? _lodash2.default.without(state.busy, action.field) : [].concat((0, _toConsumableArray3.default)(state.busy), [action.field])
      });

    case 'UPDATE_DATA':
      return (0, _extends4.default)({}, state, {
        data: (0, _extends4.default)({}, state.data, (0, _defineProperty3.default)({}, action.key, action.value)),
        errors: _lodash2.default.omit(state.errors, action.key)
      });

    case 'UPDATE_FIELD':
      return (0, _extends4.default)({}, state, {
        config: [].concat((0, _toConsumableArray3.default)(_lodash2.default.set(state.config, '[' + action.sectionIndex + '].fields[' + action.fieldIndex + ']', action.field)))
      });

    case 'SUBMIT_REQUEST':
      return (0, _extends4.default)({}, state, {
        status: 'submitting'
      });

    case 'SUBMIT_SUCCESS':
      return (0, _extends4.default)({}, state, {
        status: 'success',
        entity: action.result.data
      });

    case 'FETCH_SECTIONS_FAILURE':
    case 'FETCH_DATA_FAILURE':
    case 'SUBMIT_FAILURE':
      return (0, _extends4.default)({}, state, {
        status: 'failure',
        errors: action.result.errors,
        message: action.result.meta.message
      });

    default:
      return state;
  }
};