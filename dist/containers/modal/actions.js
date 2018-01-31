'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var close = exports.close = function close() {
  return {
    type: 'CLOSE'
  };
};

var open = exports.open = function open(component) {
  return {
    type: 'OPEN',
    component: component
  };
};

var pop = exports.pop = function pop() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: 'POP',
    num: num
  };
};

var push = exports.push = function push(component) {
  return {
    type: 'PUSH',
    component: component
  };
};