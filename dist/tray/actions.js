'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.close = exports.open = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var open = exports.open = function open(component, location) {
  return {
    type: actionTypes.OPEN,
    component: component,
    location: location
  };
};

var close = exports.close = function close() {
  return {
    type: actionTypes.CLOSE
  };
};

var clear = exports.clear = function clear() {
  return {
    type: actionTypes.CLEAR
  };
};