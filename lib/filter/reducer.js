'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  active: null,
  q: '',
  results: {}
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.SET:
      return _extends({}, state, {
        results: _extends({}, state.results, _defineProperty({}, action.key, action.value))
      });

    case actionTypes.LOAD_SUCCESS:
      return _extends({}, state, {
        results: _extends({}, state.results, _defineProperty({}, action.key, action.result.data.records.map(function (record) {
          return {
            key: _lodash2.default.get(record, action.value),
            value: _lodash2.default.get(record, action.text)
          };
        })))
      });

    case actionTypes.REMOVE:
      return _extends({}, state, {
        results: _lodash2.default.isArray(state.results[action.key]) && state.results[action.key].length > 1 ? _extends({}, state.results, _defineProperty({}, action.key, [].concat(_toConsumableArray(state.results[action.key].slice(0, action.index)), _toConsumableArray(state.results[action.key].slice(action.index + 1))))) : _lodash2.default.omit(state.results, action.key)
      });

    case actionTypes.RESET_ALL:
      return _extends({}, state, {
        results: {}
      });

    case actionTypes.RESET:
      return _extends({}, state, {
        results: _lodash2.default.omit(state.results, action.key)
      });

    case actionTypes.RESTART:
      return _extends({}, state, {
        active: null
      });

    case actionTypes.CHOOSE:
      return _extends({}, state, {
        active: action.index,
        query: ''
      });

    case actionTypes.BACK:
      return _extends({}, state, {
        q: '',
        query: '',
        active: null
      });

    case actionTypes.UPDATE:
      return _extends({}, state, {
        results: _extends({}, state.results, _defineProperty({}, action.key, action.value))
      });

    case actionTypes.QUERY:
      return _extends({}, state, {
        q: action.q
      });

    default:
      return state;
  }
};