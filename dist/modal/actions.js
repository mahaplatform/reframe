'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pop = exports.push = exports.open = exports.close = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var close = exports.close = function close() {
  return {
    type: actionTypes.CLOSE
  };
};

var open = exports.open = function open() {
  return {
    type: actionTypes.OPEN
  };
};

var push = exports.push = function push(component) {
  return {
    type: actionTypes.PUSH,
    component: component
  };
};

var pop = exports.pop = function pop(panels) {
  return {
    type: actionTypes.POP,
    panels: panels
  };
};