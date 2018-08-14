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
  filtering: false,
  filter: {},
  query: '',
  chosen: []
};

var loadSuccess = function loadSuccess(state, action) {
  return _extends({}, state, {
    chosen: action.result.data
  });
};

var setChosen = function setChosen(state, action) {
  return _extends({}, state, {
    chosen: action.chosen
  });
};

var setQuery = function setQuery(state, action) {
  return _extends({}, state, {
    query: action.query
  });
};

var setFilter = function setFilter(state, action) {
  return _extends({}, state, {
    filter: action.filter
  });
};

var toggleFilter = function toggleFilter(state, action) {
  return _extends({}, state, {
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
    return [].concat(_toConsumableArray(state.chosen), [action.record]);
  };

  return _extends({}, state, {
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