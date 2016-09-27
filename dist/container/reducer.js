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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  status: 'uninitialized',
  data: {}
};

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];

  switch (action.type) {

    case actionTypes.FETCH_RESOURCE_REQUEST:
      return _extends({}, state, {
        status: 'loading'
      });

    case actionTypes.FETCH_RESOURCE_SUCCESS:
      var data = null;
      if (_lodash2.default.isObject(action.result)) {
        data = action.result.records ? action.result.records : action.result;
      } else if (_lodash2.default.isArray(action.result)) {
        data = action.result;
      }
      return _extends({}, state, {
        data: _extends({}, state.data, _defineProperty({}, action.prop, data)),
        status: 'loaded'
      });

    case actionTypes.FETCH_RESOURCE_FAILURE:
      return _extends({}, state, {
        status: 'failed'
      });

    default:
      return state;

  }
};