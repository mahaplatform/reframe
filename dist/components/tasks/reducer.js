'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  items: null,
  open: false
};

var open = function open(state, action) {
  return (0, _extends3.default)({}, state, {
    items: action.items,
    open: true
  });
};

var close = function close(state, action) {
  return (0, _extends3.default)({}, state, {
    open: false
  });
};

var clear = function clear(state, action) {
  return INITIAL_STATE;
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'OPEN':
      return open(state, action);

    case 'CLOSE':
      return close(state, action);

    case 'CLEAR':
      return clear(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsIml0ZW1zIiwib3BlbiIsInN0YXRlIiwiYWN0aW9uIiwiY2xvc2UiLCJjbGVhciIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLFNBQU8sSUFEYTtBQUVwQkMsUUFBTTtBQUZjLENBQXRCOztBQUtBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxvQ0FDUkQsS0FEUTtBQUVYRixXQUFPRyxPQUFPSCxLQUZIO0FBR1hDLFVBQU07QUFISztBQUFBLENBQWI7O0FBTUEsSUFBTUcsUUFBUSxTQUFSQSxLQUFRLENBQUNGLEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNURCxLQURTO0FBRVpELFVBQU07QUFGTTtBQUFBLENBQWQ7O0FBS0EsSUFBTUksUUFBUSxTQUFSQSxLQUFRLENBQUNILEtBQUQsRUFBUUMsTUFBUjtBQUFBLFNBQW1CSixhQUFuQjtBQUFBLENBQWQ7O0FBRUEsSUFBTU8sVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsTUFBbENKLEtBQWtDLHVFQUExQkgsYUFBMEI7QUFBQSxNQUFYSSxNQUFXOzs7QUFFakQsVUFBUUEsT0FBT0ksSUFBZjs7QUFFQSxTQUFLLE1BQUw7QUFDRSxhQUFPTixLQUFLQyxLQUFMLEVBQVlDLE1BQVosQ0FBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPQyxNQUFNRixLQUFOLEVBQWFDLE1BQWIsQ0FBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPRSxNQUFNSCxLQUFOLEVBQWFDLE1BQWIsQ0FBUDs7QUFFRjtBQUNFLGFBQU9ELEtBQVA7QUFaRjtBQWVELENBakJEOztrQkFtQmVJLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGl0ZW1zOiBudWxsLFxuICBvcGVuOiBmYWxzZVxufVxuXG5jb25zdCBvcGVuID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBpdGVtczogYWN0aW9uLml0ZW1zLFxuICBvcGVuOiB0cnVlXG59KVxuXG5jb25zdCBjbG9zZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgb3BlbjogZmFsc2Vcbn0pXG5cbmNvbnN0IGNsZWFyID0gKHN0YXRlLCBhY3Rpb24pID0+IElOSVRJQUxfU1RBVEVcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdPUEVOJzpcbiAgICByZXR1cm4gb3BlbihzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ0NMT1NFJzpcbiAgICByZXR1cm4gY2xvc2Uoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdDTEVBUic6XG4gICAgcmV0dXJuIGNsZWFyKHN0YXRlLCBhY3Rpb24pXG5cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdfQ==