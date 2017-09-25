'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INITIAL_STATE = exports.INITIAL_STATE = {
  error: null,
  items: null,
  open: false,
  status: 'pending'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.OPEN:
      return {
        items: action.items,
        open: true
      };

    case actionTypes.CLOSE:
      return _extends({}, state, {
        open: false
      });

    case actionTypes.REQUEST_REQUEST:
      return _extends({}, state, {
        status: 'submitting'
      });

    case actionTypes.REQUEST_FAILURE:
      return _extends({}, state, {
        status: 'failure',
        error: action.result.error.message
      });

    case actionTypes.REQUEST_SUCCESS:
      return _extends({}, state, {
        status: 'success'
      });

    case actionTypes.CLEAR:
      return INITIAL_STATE;

    default:
      return state;
  }
};