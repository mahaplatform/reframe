'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  filtering: false,
  filter: {},
  query: '',
  chosen: []
};

var loadSuccess = function loadSuccess(state, action) {
  return (0, _extends3.default)({}, state, {
    chosen: action.result.data
  });
};

var setChosen = function setChosen(state, action) {
  return (0, _extends3.default)({}, state, {
    chosen: action.chosen
  });
};

var setQuery = function setQuery(state, action) {
  return (0, _extends3.default)({}, state, {
    query: action.query
  });
};

var setFilter = function setFilter(state, action) {
  return (0, _extends3.default)({}, state, {
    filter: action.filter
  });
};

var toggleFilter = function toggleFilter(state, action) {
  return (0, _extends3.default)({}, state, {
    filtering: !state.filtering
  });
};

var toggleRecord = function toggleRecord(state, action) {

  var getChosen = function getChosen() {
    if (!action.multiple) return [action.record];
    if (_lodash2.default.find(state.chosen, { id: action.record.id }) !== undefined) {
      return state.chosen.filter(function (record) {
        return record.id !== action.record.id;
      });
    }
    return [].concat((0, _toConsumableArray3.default)(state.chosen), [action.record]);
  };

  return (0, _extends3.default)({}, state, {
    chosen: getChosen()
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'LOAD_SUCCESS':
      return loadSuccess(state, action);

    case 'SET_CHOSEN':
      return setChosen(state, action);

    case 'SET_QUERY':
      return setQuery(state, action);

    case 'SET_FILTER':
      return setFilter(state, action);

    case 'TOGGLE_FILTER':
      return toggleFilter(state, action);

    case 'TOGGLE_RECORD':
      return toggleRecord(state, action);

    default:
      return state;
  }
};

exports.default = reducer;