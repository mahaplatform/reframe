'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  component: null,
  location: null,
  open: false
};

var open = function open(state, action) {
  return {
    component: action.component,
    location: action.location,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImNvbXBvbmVudCIsImxvY2F0aW9uIiwib3BlbiIsInN0YXRlIiwiYWN0aW9uIiwiY2xvc2UiLCJjbGVhciIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLGFBQVcsSUFEUztBQUVwQkMsWUFBVSxJQUZVO0FBR3BCQyxRQUFNO0FBSGMsQ0FBdEI7O0FBTUEsSUFBTUEsT0FBTyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBUUMsTUFBUjtBQUFBLFNBQW9CO0FBQy9CSixlQUFXSSxPQUFPSixTQURhO0FBRS9CQyxjQUFVRyxPQUFPSCxRQUZjO0FBRy9CQyxVQUFNO0FBSHlCLEdBQXBCO0FBQUEsQ0FBYjs7QUFNQSxJQUFNRyxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0YsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1RELEtBRFM7QUFFWkQsVUFBTTtBQUZNO0FBQUEsQ0FBZDs7QUFLQSxJQUFNSSxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1RMLGFBRFM7QUFBQSxDQUFkOztBQUlBLElBQU1RLFVBQVUsU0FBVkEsT0FBVSxHQUFtQztBQUFBLE1BQWxDSixLQUFrQyx1RUFBMUJKLGFBQTBCO0FBQUEsTUFBWEssTUFBVzs7O0FBRWpELFVBQVFBLE9BQU9JLElBQWY7O0FBRUEsU0FBSyxNQUFMO0FBQ0UsYUFBT04sS0FBS0MsS0FBTCxFQUFZQyxNQUFaLENBQVA7O0FBRUYsU0FBSyxPQUFMO0FBQ0UsYUFBT0MsTUFBTUYsS0FBTixFQUFhQyxNQUFiLENBQVA7O0FBRUYsU0FBSyxPQUFMO0FBQ0UsYUFBT0UsTUFBTUgsS0FBTixFQUFhQyxNQUFiLENBQVA7O0FBRUY7QUFDRSxhQUFPRCxLQUFQO0FBWkY7QUFlRCxDQWpCRDs7a0JBbUJlSSxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBjb21wb25lbnQ6IG51bGwsXG4gIGxvY2F0aW9uOiBudWxsLFxuICBvcGVuOiBmYWxzZVxufVxuXG5jb25zdCBvcGVuID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIGNvbXBvbmVudDogYWN0aW9uLmNvbXBvbmVudCxcbiAgbG9jYXRpb246IGFjdGlvbi5sb2NhdGlvbixcbiAgb3BlbjogdHJ1ZVxufSlcblxuY29uc3QgY2xvc2UgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG9wZW46IGZhbHNlXG59KVxuXG5jb25zdCBjbGVhciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5JTklUSUFMX1NUQVRFXG59KVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIGNhc2UgJ09QRU4nOlxuICAgIHJldHVybiBvcGVuKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnQ0xPU0UnOlxuICAgIHJldHVybiBjbG9zZShzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ0NMRUFSJzpcbiAgICByZXR1cm4gY2xlYXIoc3RhdGUsIGFjdGlvbilcblxuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl19