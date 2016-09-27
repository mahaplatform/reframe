'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INITIAL_STATE = {};

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments[1];


  switch (action.type) {

    default:
      return state;

  }
};