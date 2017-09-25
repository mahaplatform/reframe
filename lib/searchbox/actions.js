'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abort = exports.type = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var type = exports.type = function type(q) {
  return {
    type: actionTypes.TYPE,
    q: q
  };
};

var abort = exports.abort = function abort() {
  return {
    type: actionTypes.ABORT
  };
};