'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var query = exports.query = function query(q) {
  return {
    type: actionTypes.QUERY,
    q: q
  };
};