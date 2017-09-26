'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = exports.INITIAL_STATE = {
  cards: []
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return {
        cards: action.cards
      };

    case 'PUSH':
      return {
        cards: [].concat(_toConsumableArray(state.cards), [action.card])
      };

    case 'POP':
      return {
        cards: state.cards.slice(0, state.cards.length - 1)
      };

    default:
      return state;
  }
};