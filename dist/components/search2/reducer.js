'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  q: ''
};

var query = function query(state, action) {
  return (0, _extends3.default)({}, state, {
    q: action.q
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'QUERY':
      return query(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInEiLCJxdWVyeSIsInN0YXRlIiwiYWN0aW9uIiwicmVkdWNlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLGdCQUFnQjtBQUNwQkMsS0FBRztBQURpQixDQUF0Qjs7QUFJQSxJQUFNQyxRQUFRLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1RELEtBRFM7QUFFWkYsT0FBR0csT0FBT0g7QUFGRTtBQUFBLENBQWQ7O0FBS0EsSUFBTUksVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsTUFBbENGLEtBQWtDLHVFQUExQkgsYUFBMEI7QUFBQSxNQUFYSSxNQUFXOzs7QUFFakQsVUFBUUEsT0FBT0UsSUFBZjs7QUFFQSxTQUFLLE9BQUw7QUFDRSxhQUFPSixNQUFNQyxLQUFOLEVBQWFDLE1BQWIsQ0FBUDs7QUFFRjtBQUNFLGFBQU9ELEtBQVA7QUFORjtBQVNELENBWEQ7O2tCQWFlRSxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBxOiAnJ1xufVxuXG5jb25zdCBxdWVyeSA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgcTogYWN0aW9uLnFcbn0pXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgY2FzZSAnUVVFUlknOlxuICAgIHJldHVybiBxdWVyeShzdGF0ZSwgYWN0aW9uKVxuXG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXX0=