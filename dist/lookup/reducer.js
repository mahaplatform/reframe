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
  q: null,
  chosen: null,
  status: 'ready',
  adding: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.BEGIN:
      return _extends({}, state, {
        active: true
      });

    case actionTypes.CLEAR:
      return _extends({}, state, {
        chosen: null
      });

    case actionTypes.CANCEL:
      return _extends({}, state, {
        active: false
      });

    case actionTypes.CHOOSE:
      return _extends({}, state, {
        active: false,
        chosen: action.chosen
      });

    case actionTypes.QUERY:
      return _extends({}, state, {
        q: action.q
      });

    case actionTypes.LOAD_SUCCESS:
      return _extends({}, state, {
        chosen: action.result.data[0],
        status: 'success'
      });

    case actionTypes.SHOW_FORM:
      return _extends({}, state, {
        adding: true
      });

    case actionTypes.HIDE_FORM:
      return _extends({}, state, {
        adding: false
      });
    default:
      return state;

  }
};