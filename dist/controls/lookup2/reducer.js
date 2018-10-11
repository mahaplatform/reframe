'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  active: false,
  records: null,
  selected: [],
  status: 'pending'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_REQUEST':
      return (0, _extends3.default)({}, state, {
        status: 'loading'
      });

    case 'FETCH_FAILURE':
      return (0, _extends3.default)({}, state, {
        status: 'failure'
      });

    case 'FETCH_SUCCESS':
      return (0, _extends3.default)({}, state, {
        selected: action.result.data,
        status: 'success'
      });

    case 'SET':
      return (0, _extends3.default)({}, state, {
        records: action.records
      });

    case 'BEGIN':
      return (0, _extends3.default)({}, state, {
        active: true
      });

    case 'END':
      return (0, _extends3.default)({}, state, {
        active: false
      });

    case 'SELECT':
      return (0, _extends3.default)({}, state, {
        selected: action.selected
      });

    case 'REMOVE':
      return (0, _extends3.default)({}, state, {
        selected: [].concat((0, _toConsumableArray3.default)(state.selected.slice(0, action.index)), (0, _toConsumableArray3.default)(state.selected.slice(action.index + 1)))
      });

    default:
      return state;

  }
};

exports.default = reducer;