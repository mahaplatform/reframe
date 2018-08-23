'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_VALUE = {
  items: [],
  selected: [],
  status: 'pending'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_ITEMS':
      return (0, _extends3.default)({}, state, {
        items: action.items
      });

    case 'FETCH_ITEMS_REQUEST':
      return (0, _extends3.default)({}, state, {
        status: 'loading'
      });

    case 'FETCH_ITEMS_FAILURE':
      return (0, _extends3.default)({}, state, {
        status: 'success'
      });

    case 'FETCH_ITEMS_SUCCESS':
      return (0, _extends3.default)({}, state, {
        items: action.result.data,
        status: 'success'
      });

    case 'SET_SELECTED':
      return (0, _extends3.default)({}, state, {
        selected: action.values
      });

    case 'CHOOSE':
      return (0, _extends3.default)({}, state, {
        selected: _lodash2.default.includes(state.selected, action.value) ? action.multiple ? _lodash2.default.without(state.selected, action.value) : [].concat((0, _toConsumableArray3.default)(state.selected)) : action.multiple ? [].concat((0, _toConsumableArray3.default)(state.selected), [action.value]) : [action.value]

      });

    default:
      return state;

  }
};