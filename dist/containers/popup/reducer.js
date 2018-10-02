'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  component: null,
  open: false
};

var open = function open(state, action) {
  return {
    component: action.component,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImNvbXBvbmVudCIsIm9wZW4iLCJzdGF0ZSIsImFjdGlvbiIsImNsb3NlIiwiY2xlYXIiLCJyZWR1Y2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWdCO0FBQ3BCQyxhQUFXLElBRFM7QUFFcEJDLFFBQU07QUFGYyxDQUF0Qjs7QUFLQSxJQUFNQSxPQUFPLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsU0FBb0I7QUFDL0JILGVBQVdHLE9BQU9ILFNBRGE7QUFFL0JDLFVBQU07QUFGeUIsR0FBcEI7QUFBQSxDQUFiOztBQUtBLElBQU1HLFFBQVEsU0FBUkEsS0FBUSxDQUFDRixLQUFELEVBQVFDLE1BQVI7QUFBQSxvQ0FDVEQsS0FEUztBQUVaRCxVQUFNO0FBRk07QUFBQSxDQUFkOztBQUtBLElBQU1JLFFBQVEsU0FBUkEsS0FBUSxDQUFDSCxLQUFELEVBQVFDLE1BQVI7QUFBQSxvQ0FDVEosYUFEUztBQUFBLENBQWQ7O0FBSUEsSUFBTU8sVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsTUFBbENKLEtBQWtDLHVFQUExQkgsYUFBMEI7QUFBQSxNQUFYSSxNQUFXOzs7QUFFakQsVUFBUUEsT0FBT0ksSUFBZjs7QUFFQSxTQUFLLE1BQUw7QUFDRSxhQUFPTixLQUFLQyxLQUFMLEVBQVlDLE1BQVosQ0FBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPQyxNQUFNRixLQUFOLEVBQWFDLE1BQWIsQ0FBUDs7QUFFRixTQUFLLE9BQUw7QUFDRSxhQUFPRSxNQUFNSCxLQUFOLEVBQWFDLE1BQWIsQ0FBUDs7QUFFRjtBQUNFLGFBQU9ELEtBQVA7QUFaRjtBQWVELENBakJEOztrQkFtQmVJLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGNvbXBvbmVudDogbnVsbCxcbiAgb3BlbjogZmFsc2Vcbn1cblxuY29uc3Qgb3BlbiA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICBjb21wb25lbnQ6IGFjdGlvbi5jb21wb25lbnQsXG4gIG9wZW46IHRydWVcbn0pXG5cbmNvbnN0IGNsb3NlID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBvcGVuOiBmYWxzZVxufSlcblxuY29uc3QgY2xlYXIgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uSU5JVElBTF9TVEFURVxufSlcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdPUEVOJzpcbiAgICByZXR1cm4gb3BlbihzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ0NMT1NFJzpcbiAgICByZXR1cm4gY2xvc2Uoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdDTEVBUic6XG4gICAgcmV0dXJuIGNsZWFyKHN0YXRlLCBhY3Rpb24pXG5cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdfQ==