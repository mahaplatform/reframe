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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInBhbmVscyIsInJlc3VsdHMiLCJzZXQiLCJzdGF0ZSIsImFjdGlvbiIsImNoYW5nZSIsInZhbHVlIiwibmFtZSIsIl8iLCJvbWl0IiwiYWRkUGFuZWwiLCJwYW5lbCIsInJlbW92ZVBhbmVsIiwic2xpY2UiLCJyZXNldCIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLHdDQUFnQjtBQUMzQkMsVUFBUSxFQURtQjtBQUUzQkMsV0FBUztBQUZrQixDQUF0Qjs7QUFLUCxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1BELEtBRE87QUFFVkYsYUFBU0csT0FBT0g7QUFGTjtBQUFBLENBQVo7O0FBS0EsSUFBTUksU0FBUyxTQUFUQSxNQUFTLENBQUNGLEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNWRCxLQURVO0FBRWJGLGFBQVNHLE9BQU9FLEtBQVAsOEJBQ0pILE1BQU1GLE9BREYsb0NBRU5HLE9BQU9HLElBRkQsRUFFUUgsT0FBT0UsS0FGZixLQUdMRSxpQkFBRUMsSUFBRixDQUFPTixNQUFNRixPQUFiLEVBQXNCRyxPQUFPRyxJQUE3QjtBQUxTO0FBQUEsQ0FBZjs7QUFRQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1pELEtBRFk7QUFFZkgsdURBQ0tHLE1BQU1ILE1BRFgsSUFFRUksT0FBT08sS0FGVDtBQUZlO0FBQUEsQ0FBakI7O0FBUUEsSUFBTUMsY0FBYyxTQUFkQSxXQUFjLENBQUNULEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNmRCxLQURlO0FBRWxCSCxZQUFRRyxNQUFNSCxNQUFOLENBQWFhLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JWLE1BQU1ILE1BQU4sR0FBZSxDQUFyQztBQUZVO0FBQUEsQ0FBcEI7O0FBS0EsSUFBTWMsUUFBUSxTQUFSQSxLQUFRLENBQUNYLEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNURCxLQURTO0FBRVpGLGFBQVNGLGNBQWNFO0FBRlg7QUFBQSxDQUFkOztBQUtBLElBQU1jLFVBQVUsU0FBVkEsT0FBVSxHQUFtQztBQUFBLE1BQWxDWixLQUFrQyx1RUFBMUJKLGFBQTBCO0FBQUEsTUFBWEssTUFBVzs7O0FBRWpELFVBQVFBLE9BQU9ZLElBQWY7O0FBRUEsU0FBSyxLQUFMO0FBQ0UsYUFBT2QsSUFBSUMsS0FBSixFQUFXQyxNQUFYLENBQVA7O0FBRUYsU0FBSyxRQUFMO0FBQ0UsYUFBT0MsT0FBT0YsS0FBUCxFQUFjQyxNQUFkLENBQVA7O0FBRUYsU0FBSyxXQUFMO0FBQ0UsYUFBT00sU0FBU1AsS0FBVCxFQUFnQkMsTUFBaEIsQ0FBUDs7QUFFRixTQUFLLGNBQUw7QUFDRSxhQUFPUSxZQUFZVCxLQUFaLEVBQW1CQyxNQUFuQixDQUFQOztBQUVGLFNBQUssT0FBTDtBQUNFLGFBQU9VLE1BQU1YLEtBQU4sRUFBYUMsTUFBYixDQUFQOztBQUVGO0FBQ0UsYUFBT0QsS0FBUDs7QUFsQkY7QUFxQkQsQ0F2QkQ7O2tCQXlCZVksTyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgcGFuZWxzOiBbXSxcbiAgcmVzdWx0czoge31cbn1cblxuY29uc3Qgc2V0ID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICByZXN1bHRzOiBhY3Rpb24ucmVzdWx0c1xufSlcblxuY29uc3QgY2hhbmdlID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICByZXN1bHRzOiBhY3Rpb24udmFsdWUgPyB7XG4gICAgLi4uc3RhdGUucmVzdWx0cyxcbiAgICBbYWN0aW9uLm5hbWVdOiBhY3Rpb24udmFsdWVcbiAgfSA6IF8ub21pdChzdGF0ZS5yZXN1bHRzLCBhY3Rpb24ubmFtZSlcbn0pXG5cbmNvbnN0IGFkZFBhbmVsID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBwYW5lbHM6IFtcbiAgICAuLi5zdGF0ZS5wYW5lbHMsXG4gICAgYWN0aW9uLnBhbmVsXG4gIF1cbn0pXG5cbmNvbnN0IHJlbW92ZVBhbmVsID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBwYW5lbHM6IHN0YXRlLnBhbmVscy5zbGljZSgwLCBzdGF0ZS5wYW5lbHMgLSAxKVxufSlcblxuY29uc3QgcmVzZXQgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIHJlc3VsdHM6IElOSVRJQUxfU1RBVEUucmVzdWx0c1xufSlcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdTRVQnOlxuICAgIHJldHVybiBzZXQoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdDSEFOR0UnOlxuICAgIHJldHVybiBjaGFuZ2Uoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdBRERfUEFORUwnOlxuICAgIHJldHVybiBhZGRQYW5lbChzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ1JFTU9WRV9QQU5FTCc6XG4gICAgcmV0dXJuIHJlbW92ZVBhbmVsKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnUkVTRVQnOlxuICAgIHJldHVybiByZXNldChzdGF0ZSwgYWN0aW9uKVxuXG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXX0=