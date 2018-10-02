'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_STATE = {
  message: null,
  style: null
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return set(state, action);

    case 'CLEAR':
      return clear(state, action);

    default:
      return state;
  }
};

var set = function set(state, action) {
  return {
    style: action.style,
    message: action.message
  };
};

var clear = function clear(state, action) {
  return INITIAL_STATE;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsIm1lc3NhZ2UiLCJzdHlsZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInNldCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLGdCQUFnQjtBQUNwQkMsV0FBUyxJQURXO0FBRXBCQyxTQUFPO0FBRmEsQ0FBdEI7O2tCQUtlLFlBQW1DO0FBQUEsTUFBbENDLEtBQWtDLHVFQUExQkgsYUFBMEI7QUFBQSxNQUFYSSxNQUFXOzs7QUFFaEQsVUFBUUEsT0FBT0MsSUFBZjs7QUFFQSxTQUFLLEtBQUw7QUFDRSxhQUFPQyxJQUFJSCxLQUFKLEVBQVdDLE1BQVgsQ0FBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPRyxNQUFNSixLQUFOLEVBQWFDLE1BQWIsQ0FBUDs7QUFFRjtBQUNFLGFBQU9ELEtBQVA7QUFURjtBQVlELEM7O0FBRUQsSUFBTUcsTUFBTSxTQUFOQSxHQUFNLENBQUNILEtBQUQsRUFBUUMsTUFBUjtBQUFBLFNBQW9CO0FBQzlCRixXQUFPRSxPQUFPRixLQURnQjtBQUU5QkQsYUFBU0csT0FBT0g7QUFGYyxHQUFwQjtBQUFBLENBQVo7O0FBTUEsSUFBTU0sUUFBUSxTQUFSQSxLQUFRLENBQUNKLEtBQUQsRUFBUUMsTUFBUjtBQUFBLFNBQW1CSixhQUFuQjtBQUFBLENBQWQiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIG1lc3NhZ2U6IG51bGwsXG4gIHN0eWxlOiBudWxsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdTRVQnOlxuICAgIHJldHVybiBzZXQoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdDTEVBUic6XG4gICAgcmV0dXJuIGNsZWFyKHN0YXRlLCBhY3Rpb24pXG5cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG59XG5cbmNvbnN0IHNldCA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICBzdHlsZTogYWN0aW9uLnN0eWxlLFxuICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZVxufSlcblxuXG5jb25zdCBjbGVhciA9IChzdGF0ZSwgYWN0aW9uKSA9PiBJTklUSUFMX1NUQVRFXG4iXX0=