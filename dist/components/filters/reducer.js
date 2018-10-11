'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  panels: [],
  results: {}
};

var set = function set(state, action) {
  return (0, _extends4.default)({}, state, {
    results: action.results
  });
};

var change = function change(state, action) {
  return (0, _extends4.default)({}, state, {
    results: action.value ? (0, _extends4.default)({}, state.results, (0, _defineProperty3.default)({}, action.name, action.value)) : _lodash2.default.omit(state.results, action.name)
  });
};

var addPanel = function addPanel(state, action) {
  return (0, _extends4.default)({}, state, {
    panels: [].concat((0, _toConsumableArray3.default)(state.panels), [action.panel])
  });
};

var removePanel = function removePanel(state, action) {
  return (0, _extends4.default)({}, state, {
    panels: state.panels.slice(0, state.panels - 1)
  });
};

var reset = function reset(state, action) {
  return (0, _extends4.default)({}, state, {
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