'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  items: []
};

var set = function set(state, action) {
  return (0, _extends3.default)({}, state, {
    items: action.items
  });
};

var toggle = function toggle(state, action) {
  return (0, _extends3.default)({}, state, {
    items: state.items.map(function (item, index) {
      if (index !== action.index) return item;
      return (0, _extends3.default)({}, item, {
        checked: !item.checked
      });
    })
  });
};

var move = function move(state, action) {
  return (0, _extends3.default)({}, state, {
    items: action.from < action.to ? [].concat((0, _toConsumableArray3.default)(state.items.slice(0, action.from)), (0, _toConsumableArray3.default)(state.items.slice(action.from + 1, action.to + 1)), [state.items[action.from]], (0, _toConsumableArray3.default)(state.items.slice(action.to + 1))) : [].concat((0, _toConsumableArray3.default)(state.items.slice(0, action.to)), [state.items[action.from]], (0, _toConsumableArray3.default)(state.items.slice(action.to, action.from)), (0, _toConsumableArray3.default)(state.items.slice(action.from + 1)))
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return set(state, action);

    case 'TOGGLE':
      return toggle(state, action);

    case 'MOVE':
      return move(state, action);

    default:
      return state;
  }
};

exports.default = reducer;