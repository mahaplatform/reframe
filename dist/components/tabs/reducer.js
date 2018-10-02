'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  chosen: null
};

var choose = function choose(state, action) {
  return (0, _extends3.default)({}, state, {
    chosen: action.index
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'CHOOSE':
      return choose(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImNob3NlbiIsImNob29zZSIsInN0YXRlIiwiYWN0aW9uIiwiaW5kZXgiLCJyZWR1Y2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLHdDQUFnQjtBQUMzQkMsVUFBUTtBQURtQixDQUF0Qjs7QUFJUCxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1ZELEtBRFU7QUFFYkYsWUFBUUcsT0FBT0M7QUFGRjtBQUFBLENBQWY7O0FBS0EsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsTUFBbENILEtBQWtDLHVFQUExQkgsYUFBMEI7QUFBQSxNQUFYSSxNQUFXOzs7QUFFakQsVUFBUUEsT0FBT0csSUFBZjs7QUFFQSxTQUFLLFFBQUw7QUFDRSxhQUFPTCxPQUFPQyxLQUFQLEVBQWNDLE1BQWQsQ0FBUDs7QUFFRjtBQUNFLGFBQU9ELEtBQVA7QUFORjtBQVNELENBWEQ7O2tCQWFlRyxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgY2hvc2VuOiBudWxsXG59XG5cbmNvbnN0IGNob29zZSA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgY2hvc2VuOiBhY3Rpb24uaW5kZXhcbn0pXG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgY2FzZSAnQ0hPT1NFJzpcbiAgICByZXR1cm4gY2hvb3NlKHN0YXRlLCBhY3Rpb24pXG5cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdfQ==