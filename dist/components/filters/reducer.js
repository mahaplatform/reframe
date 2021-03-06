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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  panels: [],
  results: {}
};

var set = function set(state, action) {
  return _extends({}, state, {
    results: action.results
  });
};

var change = function change(state, action) {
  return _extends({}, state, {
    results: action.value ? _extends({}, state.results, _defineProperty({}, action.name, action.value)) : _lodash2.default.omit(state.results, action.name)
  });
};

var addPanel = function addPanel(state, action) {
  return _extends({}, state, {
    panels: [].concat(_toConsumableArray(state.panels), [action.panel])
  });
};

var removePanel = function removePanel(state, action) {
  return _extends({}, state, {
    panels: state.panels.slice(0, state.panels - 1)
  });
};

var reset = function reset(state, action) {
  return _extends({}, state, {
    results: INITIAL_STATE.results
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return set(state, action);

    case 'CHANGE':
      return change(state, action);

    case 'ADD_PANEL':
      return addPanel(state, action);

    case 'REMOVE_PANEL':
      return removePanel(state, action);

    case 'RESET':
      return reset(state, action);

    default:
      return state;

  }
};

exports.default = reducer;