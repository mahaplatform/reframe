'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  active: false,
  q: ''
};

var begin = function begin(state, action) {
  return (0, _extends3.default)({}, state, {
    active: true
  });
};

var end = function end(state, action) {
  return (0, _extends3.default)({}, state, {
    active: false
  });
};

var type = function type(state, action) {
  return (0, _extends3.default)({}, state, {
    q: action.q
  });
};

var abort = function abort(state, action) {
  return (0, _extends3.default)({}, state, {
    q: ''
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'BEGIN':
      return begin(state, action);

    case 'END':
      return end(state, action);

    case 'TYPE':
      return type(state, action);

    case 'ABORT':
      return abort(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImFjdGl2ZSIsInEiLCJiZWdpbiIsInN0YXRlIiwiYWN0aW9uIiwiZW5kIiwidHlwZSIsImFib3J0IiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLHdDQUFnQjtBQUMzQkMsVUFBUSxLQURtQjtBQUUzQkMsS0FBRztBQUZ3QixDQUF0Qjs7QUFLUCxJQUFNQyxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1RELEtBRFM7QUFFWkgsWUFBUTtBQUZJO0FBQUEsQ0FBZDs7QUFLQSxJQUFNSyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0YsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1BELEtBRE87QUFFVkgsWUFBUTtBQUZFO0FBQUEsQ0FBWjs7QUFLQSxJQUFNTSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1JELEtBRFE7QUFFWEYsT0FBR0csT0FBT0g7QUFGQztBQUFBLENBQWI7O0FBS0EsSUFBTU0sUUFBUSxTQUFSQSxLQUFRLENBQUNKLEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNURCxLQURTO0FBRVpGLE9BQUc7QUFGUztBQUFBLENBQWQ7O0FBS0EsSUFBTU8sVUFBVSxTQUFWQSxPQUFVLEdBQTJDO0FBQUEsTUFBMUNMLEtBQTBDLHVFQUFsQ0osYUFBa0M7QUFBQSxNQUFuQkssTUFBbUI7OztBQUV6RCxVQUFRQSxPQUFPRSxJQUFmOztBQUVBLFNBQUssT0FBTDtBQUNFLGFBQU9KLE1BQU1DLEtBQU4sRUFBYUMsTUFBYixDQUFQOztBQUVGLFNBQUssS0FBTDtBQUNFLGFBQU9DLElBQUlGLEtBQUosRUFBV0MsTUFBWCxDQUFQOztBQUVGLFNBQUssTUFBTDtBQUNFLGFBQU9FLEtBQUtILEtBQUwsRUFBWUMsTUFBWixDQUFQOztBQUVGLFNBQUssT0FBTDtBQUNFLGFBQU9HLE1BQU1KLEtBQU4sRUFBYUMsTUFBYixDQUFQOztBQUVGO0FBQ0UsYUFBT0QsS0FBUDtBQWZGO0FBa0JELENBcEJEOztrQkFzQmVLLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICBxOiAnJ1xufVxuXG5jb25zdCBiZWdpbiA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgYWN0aXZlOiB0cnVlXG59KVxuXG5jb25zdCBlbmQgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGFjdGl2ZTogZmFsc2Vcbn0pXG5cbmNvbnN0IHR5cGUgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIHE6IGFjdGlvbi5xXG59KVxuXG5jb25zdCBhYm9ydCA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgcTogJydcbn0pXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb246IEFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdCRUdJTic6XG4gICAgcmV0dXJuIGJlZ2luKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnRU5EJzpcbiAgICByZXR1cm4gZW5kKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnVFlQRSc6XG4gICAgcmV0dXJuIHR5cGUoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdBQk9SVCc6XG4gICAgcmV0dXJuIGFib3J0KHN0YXRlLCBhY3Rpb24pXG5cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdfQ==