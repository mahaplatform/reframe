'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_STATE = exports.INITIAL_STATE = {
  chosen: []
};

var set = function set(state, action) {
  return _extends({}, state, {
    chosen: action.ids
  });
};

var toggle = function toggle(state, action) {
  return _extends({}, state, {
    chosen: _lodash2.default.includes(state.chosen, action.id) ? _lodash2.default.without(state.chosen, action.id) : [].concat(_toConsumableArray(state.chosen), [action.id])
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'TOGGLE':
      return toggle(state, action);

    case 'SET':
      return set(state, action);

    default:
      return state;
  }
};

exports.default = reducer;