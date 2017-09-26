'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(cards) {
  return {
    type: 'SET',
    cards: cards
  };
};

var push = exports.push = function push(card) {
  return {
    type: 'PUSH',
    card: card
  };
};

var pop = exports.pop = function pop() {
  return {
    type: 'POP'
  };
};