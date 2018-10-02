'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  panels: []
};

var open = function open(state, action) {
  return {
    panels: [action.component]
  };
};

var close = function close(state, action) {
  return (0, _extends3.default)({}, state, {
    panels: []
  });
};

var pop = function pop(state, action) {
  return {
    panels: state.panels.slice(0, 0 - action.num)
  };
};

var push = function push(state, action) {
  return {
    panels: [].concat((0, _toConsumableArray3.default)(state.panels), [action.component])
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'CLOSE':
      return close(state, action);

    case 'OPEN':
      return open(state, action);

    case 'POP':
      return pop(state, action);

    case 'PUSH':
      return push(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInBhbmVscyIsIm9wZW4iLCJzdGF0ZSIsImFjdGlvbiIsImNvbXBvbmVudCIsImNsb3NlIiwicG9wIiwic2xpY2UiLCJudW0iLCJwdXNoIiwicmVkdWNlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLFVBQVE7QUFEWSxDQUF0Qjs7QUFJQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsU0FBb0I7QUFDL0JILFlBQVEsQ0FBQ0csT0FBT0MsU0FBUjtBQUR1QixHQUFwQjtBQUFBLENBQWI7O0FBSUEsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUNILEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNURCxLQURTO0FBRVpGLFlBQVE7QUFGSTtBQUFBLENBQWQ7O0FBS0EsSUFBTU0sTUFBTSxTQUFOQSxHQUFNLENBQUNKLEtBQUQsRUFBUUMsTUFBUjtBQUFBLFNBQW9CO0FBQzlCSCxZQUFRRSxNQUFNRixNQUFOLENBQWFPLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsSUFBSUosT0FBT0ssR0FBakM7QUFEc0IsR0FBcEI7QUFBQSxDQUFaOztBQUlBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxDQUFDUCxLQUFELEVBQVFDLE1BQVI7QUFBQSxTQUFvQjtBQUMvQkgsdURBQ0tFLE1BQU1GLE1BRFgsSUFFRUcsT0FBT0MsU0FGVDtBQUQrQixHQUFwQjtBQUFBLENBQWI7O0FBT0EsSUFBTU0sVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsTUFBbENSLEtBQWtDLHVFQUExQkgsYUFBMEI7QUFBQSxNQUFYSSxNQUFXOzs7QUFFakQsVUFBUUEsT0FBT1EsSUFBZjs7QUFFQSxTQUFLLE9BQUw7QUFDRSxhQUFPTixNQUFNSCxLQUFOLEVBQWFDLE1BQWIsQ0FBUDs7QUFFRixTQUFLLE1BQUw7QUFDRSxhQUFPRixLQUFLQyxLQUFMLEVBQVlDLE1BQVosQ0FBUDs7QUFFRixTQUFLLEtBQUw7QUFDRSxhQUFPRyxJQUFJSixLQUFKLEVBQVdDLE1BQVgsQ0FBUDs7QUFFRixTQUFLLE1BQUw7QUFDRSxhQUFPTSxLQUFLUCxLQUFMLEVBQVlDLE1BQVosQ0FBUDs7QUFFRjtBQUNFLGFBQU9ELEtBQVA7QUFmRjtBQWtCRCxDQXBCRDs7a0JBc0JlUSxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBwYW5lbHM6IFtdXG59XG5cbmNvbnN0IG9wZW4gPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgcGFuZWxzOiBbYWN0aW9uLmNvbXBvbmVudF1cbn0pXG5cbmNvbnN0IGNsb3NlID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBwYW5lbHM6IFtdXG59KVxuXG5jb25zdCBwb3AgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgcGFuZWxzOiBzdGF0ZS5wYW5lbHMuc2xpY2UoMCwgMCAtIGFjdGlvbi5udW0pXG59KVxuXG5jb25zdCBwdXNoID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIHBhbmVsczogW1xuICAgIC4uLnN0YXRlLnBhbmVscyxcbiAgICBhY3Rpb24uY29tcG9uZW50XG4gIF1cbn0pXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgY2FzZSAnQ0xPU0UnOlxuICAgIHJldHVybiBjbG9zZShzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ09QRU4nOlxuICAgIHJldHVybiBvcGVuKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnUE9QJzpcbiAgICByZXR1cm4gcG9wKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnUFVTSCc6XG4gICAgcmV0dXJuIHB1c2goc3RhdGUsIGFjdGlvbilcblxuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl19