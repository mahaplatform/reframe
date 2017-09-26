'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_STATE = {
  component: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'OPEN':
      return {
        component: action.component
      };

    case 'CLOSE':
      return INITIAL_STATE;

    default:
      return state;
  }
};