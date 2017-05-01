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
  active: false,
  choice: null,
  focused: false,
  query: '',
  results: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.RESET_SEARCH:
      return INITIAL_STATE;

    case actionTypes.ABORT_SEARCH:
      return _extends({}, state, {
        active: false,
        focused: false,
        query: '',
        results: null
      });

    case actionTypes.FOCUS_SEARCH:
      return _extends({}, state, {
        focused: true
      });

    case actionTypes.COMPLETE_SEARCH:
      return _extends({}, state, {
        active: false,
        choice: state.results[action.model][action.index],
        focused: false,
        query: '',
        results: null
      });

    case actionTypes.TYPE_SEARCH:
      return _extends({}, state, {
        query: action.q
      });

    case actionTypes.LOOKUP_REQUEST:
      return _extends({}, state, {
        query: action.params.q
      });

    case actionTypes.LOOKUP_SUCCESS:
      return _extends({}, state, {
        results: state.query.length ? action.data : null
      });

    default:
      return state;
  }
};