'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setValue = exports.setValue = function setValue(value) {
  return {
    type: 'SET_VALUE',
    value: value
  };
};

var setCurrent = exports.setCurrent = function setCurrent(month, year) {
  return {
    type: 'SET_CURRENT',
    month: month,
    year: year
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

var begin = exports.begin = function begin() {
  return {
    type: 'BEGIN'
  };
};

var cancel = exports.cancel = function cancel() {
  return {
    type: 'CANCEL'
  };
};

var choose = exports.choose = function choose(value) {
  return {
    type: 'CHOOSE',
    value: value
  };
};

var clear = exports.clear = function clear() {
  return {
    type: 'CLEAR'
  };
};