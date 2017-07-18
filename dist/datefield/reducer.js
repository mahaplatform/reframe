'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INITIAL_VALUE = {
  active: false,
  value: null,
  month: null,
  year: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.SET_CURRENT:
      return _extends({}, state, {
        month: action.month,
        year: action.year
      });

    case actionTypes.SET_VALUE:
      return _extends({}, state, {
        value: action.value
      });

    case actionTypes.PREVIOUS:
      return _extends({}, state, {
        month: state.month === 0 ? 11 : state.month - 1,
        year: state.month === 0 ? state.year - 1 : state.year
      });

    case actionTypes.NEXT:
      return _extends({}, state, {
        month: state.month === 11 ? 0 : state.month + 1,
        year: state.month === 11 ? state.year + 1 : state.year
      });

    case actionTypes.BEGIN:
      return _extends({}, state, {
        active: true
      });

    case actionTypes.CANCEL:
      return _extends({}, state, {
        active: false
      });

    case actionTypes.CHOOSE:
      return _extends({}, state, {
        value: action.value,
        active: false
      });

    case actionTypes.CLEAR:
      return _extends({}, state, {
        value: null
      });

    default:
      return state;

  }
};