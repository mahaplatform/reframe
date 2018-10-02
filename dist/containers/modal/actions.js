'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var close = exports.close = function close() {
  return {
    type: 'CLOSE'
  };
};

var open = exports.open = function open(component) {
  return {
    type: 'OPEN',
    component: component
  };
};

var pop = exports.pop = function pop() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    type: 'POP',
    num: num
  };
};

var push = exports.push = function push(component) {
  return {
    type: 'PUSH',
    component: component
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiY2xvc2UiLCJ0eXBlIiwib3BlbiIsImNvbXBvbmVudCIsInBvcCIsIm51bSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsd0JBQVEsU0FBUkEsS0FBUTtBQUFBLFNBQU87QUFDMUJDLFVBQU07QUFEb0IsR0FBUDtBQUFBLENBQWQ7O0FBSUEsSUFBTUMsc0JBQU8sU0FBUEEsSUFBTyxDQUFDQyxTQUFEO0FBQUEsU0FBZ0I7QUFDbENGLFVBQU0sTUFENEI7QUFFbENFO0FBRmtDLEdBQWhCO0FBQUEsQ0FBYjs7QUFLQSxJQUFNQyxvQkFBTSxTQUFOQSxHQUFNO0FBQUEsTUFBQ0MsR0FBRCx1RUFBTyxDQUFQO0FBQUEsU0FBYztBQUMvQkosVUFBTSxLQUR5QjtBQUUvQkk7QUFGK0IsR0FBZDtBQUFBLENBQVo7O0FBS0EsSUFBTUMsc0JBQU8sU0FBUEEsSUFBTyxDQUFDSCxTQUFEO0FBQUEsU0FBZ0I7QUFDbENGLFVBQU0sTUFENEI7QUFFbENFO0FBRmtDLEdBQWhCO0FBQUEsQ0FBYiIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNsb3NlID0gKCkgPT4gKHtcbiAgdHlwZTogJ0NMT1NFJ1xufSlcblxuZXhwb3J0IGNvbnN0IG9wZW4gPSAoY29tcG9uZW50KSA9PiAoe1xuICB0eXBlOiAnT1BFTicsXG4gIGNvbXBvbmVudFxufSlcblxuZXhwb3J0IGNvbnN0IHBvcCA9IChudW0gPSAxKSA9PiAoe1xuICB0eXBlOiAnUE9QJyxcbiAgbnVtXG59KVxuXG5leHBvcnQgY29uc3QgcHVzaCA9IChjb21wb25lbnQpID0+ICh7XG4gIHR5cGU6ICdQVVNIJyxcbiAgY29tcG9uZW50XG59KVxuIl19