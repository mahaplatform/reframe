'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  chosen: null
};

var choose = function choose(state, action) {
  return (0, _extends3.default)({}, state, {
    chosen: action.index
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'CHOOSE':
      return choose(state, action);

    default:
      return state;
  }
};

exports.default = reducer;