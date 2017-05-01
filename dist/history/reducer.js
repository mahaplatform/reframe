'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = {
  stack: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.PUSH:
      return {
        stack: [].concat(_toConsumableArray(state.stack), [action.pathname])
      };

    case actionTypes.BACK:
      return {
        stack: state.stack.slice(0, -1)
      };

    case actionTypes.RESET:
      return {
        stack: [action.pathname]
      };

    default:
      return state;
  }
};