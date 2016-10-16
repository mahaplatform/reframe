'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _map_fields = require('./map_fields');

var _map_fields2 = _interopRequireDefault(_map_fields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = {
  status: 'initialized',
  sections: [],
  data: {},
  errors: {},
  result: {},
  message: null
};

var getDefaults = function getDefaults(sections) {
  var defaults = {};
  (0, _map_fields2.default)(sections, function (field) {
    if (field.include !== false) {
      defaults[field.code] = field.defaultValue || null;
    }
  });
  return defaults;
};

var validateForm = function validateForm(sections, data) {
  var errors = {};
  (0, _map_fields2.default)(sections, function (field) {
    var value = data[field.code];
    if (field.required && _lodash2.default.isEmpty(value)) {
      errors[field.code] = ['field is required'];
    }
  });
  return errors;
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.FETCH_SECTIONS_REQUEST:
      return _extends({}, state, {
        status: 'configuring'
      });

    case actionTypes.FETCH_SECTIONS_SUCCESS:
    case actionTypes.SET_SECTIONS:
      return _extends({}, state, {
        status: 'configured',
        sections: action.sections,
        data: getDefaults(action.sections)
      });

    case actionTypes.FETCH_CONFIG_FAILURE:
      return _extends({}, state, {
        status: 'error',
        errors: action.error.errors,
        message: {
          type: 'error',
          title: 'Unable to load form configuration',
          text: action.error.message
        }
      });

    case actionTypes.FETCH_DATA_REQUEST:
      return _extends({}, state, {
        status: 'loading'
      });

    case actionTypes.FETCH_DATA_SUCCESS:
    case actionTypes.SET_DATA:
      return _extends({}, state, {
        status: 'ready',
        data: action.data
      });

    case actionTypes.FETCH_DATA_FAILURE:
      return _extends({}, state, {
        status: 'error',
        errors: action.error.errors,
        message: {
          type: 'error',
          title: 'Unable to load form data',
          text: action.error.message
        }
      });

    case actionTypes.SET_READY:
      return _extends({}, state, {
        status: 'ready'
      });

    case actionTypes.UPDATE_DATA:
      return _extends({}, state, {
        data: _extends({}, state.data, _defineProperty({}, action.key, action.value))
      });

    case actionTypes.VALIDATE_FORM:
      var errors = validateForm(state.sections, state.data);
      return _extends({}, state, {
        errors: errors,
        status: _lodash2.default.isEmpty(errors) ? 'validated' : state.status
      });

    case actionTypes.SUBMIT_REQUEST:
      return _extends({}, state, {
        status: 'submitting'
      });

    case actionTypes.SUBMIT_SUCCESS:
      return _extends({}, state, {
        status: 'success',
        result: action.data
      });

    case actionTypes.SUBMIT_FAILURE:
      return _extends({}, state, {
        status: 'error',
        errors: action.error.errors,
        message: {
          type: 'error',
          title: 'Unable to submit your data',
          text: action.error.message
        }
      });

    case actionTypes.RESET_FORM:
      return _extends({}, state, {
        status: 'ready',
        data: {},
        errors: {},
        result: {},
        message: null
      });

    default:
      return state;

  }
};