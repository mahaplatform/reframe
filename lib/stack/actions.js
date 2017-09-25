'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pop = exports.push = exports.set = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var set = exports.set = function set(cards) {
  return {
    type: actionTypes.SET,
    cards: cards
  };
};

var push = exports.push = function push(card) {
  return {
    type: actionTypes.PUSH,
    card: card
  };
};

var pop = exports.pop = function pop() {
  return {
    type: actionTypes.POP
  };
};