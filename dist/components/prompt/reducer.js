'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  title: null,
  message: null,
  options: null,
  open: false
};

var open = function open(state, action) {
  return {
    title: action.title,
    message: action.message,
    options: action.options,
    open: true
  };
};

var close = function close(state, action) {
  return (0, _extends3.default)({}, state, {
    open: false
  });
};

var clear = function clear(state, action) {
  return (0, _extends3.default)({}, INITIAL_STATE);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInRpdGxlIiwibWVzc2FnZSIsIm9wdGlvbnMiLCJvcGVuIiwic3RhdGUiLCJhY3Rpb24iLCJjbG9zZSIsImNsZWFyIiwicmVkdWNlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGdCQUFnQjtBQUNwQkMsU0FBTyxJQURhO0FBRXBCQyxXQUFTLElBRlc7QUFHcEJDLFdBQVMsSUFIVztBQUlwQkMsUUFBTTtBQUpjLENBQXRCOztBQU9BLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxTQUFvQjtBQUMvQkwsV0FBT0ssT0FBT0wsS0FEaUI7QUFFL0JDLGFBQVNJLE9BQU9KLE9BRmU7QUFHL0JDLGFBQVNHLE9BQU9ILE9BSGU7QUFJL0JDLFVBQU07QUFKeUIsR0FBcEI7QUFBQSxDQUFiOztBQU9BLElBQU1HLFFBQVEsU0FBUkEsS0FBUSxDQUFDRixLQUFELEVBQVFDLE1BQVI7QUFBQSxvQ0FDVEQsS0FEUztBQUVaRCxVQUFNO0FBRk07QUFBQSxDQUFkOztBQUtBLElBQU1JLFFBQVEsU0FBUkEsS0FBUSxDQUFDSCxLQUFELEVBQVFDLE1BQVI7QUFBQSxvQ0FDVE4sYUFEUztBQUFBLENBQWQ7O0FBSUEsSUFBTVMsVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsTUFBbENKLEtBQWtDLHVFQUExQkwsYUFBMEI7QUFBQSxNQUFYTSxNQUFXOzs7QUFFakQsVUFBUUEsT0FBT0ksSUFBZjs7QUFFQSxTQUFLLE1BQUw7QUFDRSxhQUFPTixLQUFLQyxLQUFMLEVBQVlDLE1BQVosQ0FBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPQyxNQUFNRixLQUFOLEVBQWFDLE1BQWIsQ0FBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPRSxNQUFNSCxLQUFOLEVBQWFDLE1BQWIsQ0FBUDs7QUFFRjtBQUNFLGFBQU9ELEtBQVA7QUFaRjtBQWVELENBakJEOztrQkFtQmVJLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHRpdGxlOiBudWxsLFxuICBtZXNzYWdlOiBudWxsLFxuICBvcHRpb25zOiBudWxsLFxuICBvcGVuOiBmYWxzZVxufVxuXG5jb25zdCBvcGVuID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIHRpdGxlOiBhY3Rpb24udGl0bGUsXG4gIG1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLFxuICBvcHRpb25zOiBhY3Rpb24ub3B0aW9ucyxcbiAgb3BlbjogdHJ1ZVxufSlcblxuY29uc3QgY2xvc2UgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG9wZW46IGZhbHNlXG59KVxuXG5jb25zdCBjbGVhciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5JTklUSUFMX1NUQVRFXG59KVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIGNhc2UgJ09QRU4nOlxuICAgIHJldHVybiBvcGVuKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnQ0xPU0UnOlxuICAgIHJldHVybiBjbG9zZShzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ0NMRUFSJzpcbiAgICByZXR1cm4gY2xlYXIoc3RhdGUsIGFjdGlvbilcblxuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl19