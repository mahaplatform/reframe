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
  panels: []
};

var open = function open(state, action) {
  return {
    panels: [action.component]
  };
};

var close = function close(state, action) {
  return (0, _extends3.default)({}, state, {
    panels: []
  });
};

var pop = function pop(state, action) {
  return {
    panels: state.panels.slice(0, 0 - action.num)
  };
};

var push = function push(state, action) {
  return {
    panels: [].concat((0, _toConsumableArray3.default)(state.panels), [action.component])
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'CLOSE':
      return close(state, action);

    case 'OPEN':
      return open(state, action);

    case 'POP':
      return pop(state, action);

    case 'PUSH':
      return push(state, action);

    default:
      return state;
  }
};

exports.default = reducer;