'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.close = exports.pop = exports.push = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var push = exports.push = function push(component) {
  return {
    type: actionTypes.PUSH,
    component: component
  };
};

var pop = exports.pop = function pop() {
  return {
    type: actionTypes.POP
  };
};

var close = exports.close = function close() {
  return {
    type: actionTypes.CLOSE
  };
};