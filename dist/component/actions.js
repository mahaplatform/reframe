'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeComponent = exports.addComponent = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addComponent = exports.addComponent = function addComponent(namespace) {
  var cid = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  return {
    type: actionTypes.ADD_COMPONENT,
    namespace: namespace,
    cid: cid
  };
};

var removeComponent = exports.removeComponent = function removeComponent(namespace) {
  var cid = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
  return {
    type: actionTypes.REMOVE_COMPONENT,
    namespace: namespace,
    cid: cid
  };
};