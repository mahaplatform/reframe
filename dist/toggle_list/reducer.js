'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = exports.INITIAL_STATE = {
  query: '',
  chosen: [],
  status: 'ready'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.RESET:
      return INITIAL_STATE;

    case actionTypes.TYPE:
      return _extends({}, state, {
        query: action.q
      });

    case actionTypes.TOGGLE:
      var index = _lodash2.default.findIndex(state.chosen, { id: action.record.id });
      return _extends({}, state, {
        chosen: index >= 0 ? state.chosen.filter(function (record) {
          return record.id !== action.record.id;
        }) : [].concat(_toConsumableArray(state.chosen), [action.record])
      });

    case actionTypes.LOAD_REQUEST:
      return _extends({}, state, {
        status: 'loading'
      });

    case actionTypes.LOAD_SUCCESS:
      return _extends({}, state, {
        status: 'success',
        chosen: action.result.data
      });

    case actionTypes.LOAD_FAILURE:
      return _extends({}, state, {
        status: 'failure'
      });

    default:
      return state;
  }
};