'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.choose = exports.cancel = exports.begin = exports.next = exports.previous = exports.setCurrent = exports.setValue = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setValue = exports.setValue = function setValue(value) {
  return {
    type: actionTypes.SET_VALUE,
    value: value
  };
};

var setCurrent = exports.setCurrent = function setCurrent(month, year) {
  return {
    type: actionTypes.SET_CURRENT,
    month: month,
    year: year
  };
};

var previous = exports.previous = function previous() {
  return {
    type: actionTypes.PREVIOUS
  };
};

var next = exports.next = function next() {
  return {
    type: actionTypes.NEXT
  };
};

var begin = exports.begin = function begin() {
  return {
    type: actionTypes.BEGIN
  };
};

var cancel = exports.cancel = function cancel() {
  return {
    type: actionTypes.CANCEL
  };
};

var choose = exports.choose = function choose(value) {
  return {
    type: actionTypes.CHOOSE,
    value: value
  };
};

var clear = exports.clear = function clear() {
  return {
    type: actionTypes.CLEAR
  };
};