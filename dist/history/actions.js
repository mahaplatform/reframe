'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = exports.back = exports.push = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var push = exports.push = function push(pathname) {
  return {
    type: actionTypes.PUSH,
    pathname: pathname
  };
};

var back = exports.back = function back() {
  return {
    type: actionTypes.BACK
  };
};

var reset = exports.reset = function reset(pathname) {
  return {
    type: actionTypes.RESET,
    pathname: pathname
  };
};