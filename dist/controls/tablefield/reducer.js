'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _update = require('react/lib/update');

var _update2 = _interopRequireDefault(_update);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_VALUE = {
  columns: [],
  value: {}
};

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_VALUE : arguments[0];
  var action = arguments[1];

  var _ret = function () {

    switch (action.type) {

      case actionTypes.INITIALIZE:
        return {
          v: _extends({}, state, {
            columns: action.columns,
            value: action.value || state.value
          })
        };

      case actionTypes.REMOVE_ROW:
        return {
          v: _extends({}, state, {
            value: _lodash2.default.remove(state.value, function (row, index) {
              return index != action.index;
            })
          })
        };

      case actionTypes.MOVE_ROW:
        var rows = state.value;
        var row = rows[action.fromIndex];
        return {
          v: _extends({}, state, {
            value: (0, _update2.default)(rows, { $splice: [[action.fromIndex, 1], [action.toIndex, 0, row]] })
          })
        };

      case actionTypes.ADD_ROW:
        var newrow = {};
        state.columns.map(function (column) {
          newrow[column.code] = null;
        });
        return {
          v: _extends({}, state, {
            value: [].concat(_toConsumableArray(state.value), [newrow])
          })
        };

      case actionTypes.UPDATE_TABLE:
        return {
          v: _extends({}, state, {
            value: action.value
          })
        };

      case actionTypes.UPDATE_CELL:
        var value = _lodash2.default.cloneDeep(state.value);
        value[action.index][action.code] = action.value;
        return {
          v: _extends({}, state, {
            value: value
          })
        };

      default:
        return {
          v: state
        };

    }
  }();

  if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
};