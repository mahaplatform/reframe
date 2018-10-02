'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var open = exports.open = function open(items) {
  return {
    type: 'OPEN',
    items: items
  };
};

var close = exports.close = function close() {
  return {
    type: 'CLOSE'
  };
};

var clear = exports.clear = function clear() {
  return {
    type: 'CLEAR'
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsib3BlbiIsIml0ZW1zIiwidHlwZSIsImNsb3NlIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsc0JBQU8sU0FBUEEsSUFBTyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUM5QkMsVUFBTSxNQUR3QjtBQUU5QkQ7QUFGOEIsR0FBWjtBQUFBLENBQWI7O0FBS0EsSUFBTUUsd0JBQVEsU0FBUkEsS0FBUTtBQUFBLFNBQU87QUFDMUJELFVBQU07QUFEb0IsR0FBUDtBQUFBLENBQWQ7O0FBSUEsSUFBTUUsd0JBQVEsU0FBUkEsS0FBUTtBQUFBLFNBQU87QUFDMUJGLFVBQU07QUFEb0IsR0FBUDtBQUFBLENBQWQiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBvcGVuID0gKGl0ZW1zKSA9PiAoe1xuICB0eXBlOiAnT1BFTicsXG4gIGl0ZW1zXG59KVxuXG5leHBvcnQgY29uc3QgY2xvc2UgPSAoKSA9PiAoe1xuICB0eXBlOiAnQ0xPU0UnXG59KVxuXG5leHBvcnQgY29uc3QgY2xlYXIgPSAoKSA9PiAoe1xuICB0eXBlOiAnQ0xFQVInXG59KVxuIl19