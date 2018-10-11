'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setTotal = exports.setTotal = function setTotal(total) {
  return {
    type: 'SET_TOTAL',
    total: total
  };
};

var previous = exports.previous = function previous() {
  return {
    type: 'PREVIOUS'
  };
};

var next = exports.next = function next() {
  return {
    type: 'NEXT'
  };
};

var goto = exports.goto = function goto(index) {
  return {
    type: 'GOTO',
    index: index
  };
};