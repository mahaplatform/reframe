'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var open = exports.open = function open(title, message, options) {
  return {
    type: 'OPEN',
    title: title,
    message: message,
    options: options
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsib3BlbiIsInRpdGxlIiwibWVzc2FnZSIsIm9wdGlvbnMiLCJ0eXBlIiwiY2xvc2UiLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSxzQkFBTyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFpQkMsT0FBakI7QUFBQSxTQUE4QjtBQUNoREMsVUFBTSxNQUQwQztBQUVoREgsZ0JBRmdEO0FBR2hEQyxvQkFIZ0Q7QUFJaERDO0FBSmdELEdBQTlCO0FBQUEsQ0FBYjs7QUFPQSxJQUFNRSx3QkFBUSxTQUFSQSxLQUFRO0FBQUEsU0FBTztBQUMxQkQsVUFBTTtBQURvQixHQUFQO0FBQUEsQ0FBZDs7QUFJQSxJQUFNRSx3QkFBUSxTQUFSQSxLQUFRO0FBQUEsU0FBTztBQUMxQkYsVUFBTTtBQURvQixHQUFQO0FBQUEsQ0FBZCIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG9wZW4gPSAodGl0bGUsIG1lc3NhZ2UsIG9wdGlvbnMpID0+ICh7XG4gIHR5cGU6ICdPUEVOJyxcbiAgdGl0bGUsXG4gIG1lc3NhZ2UsXG4gIG9wdGlvbnNcbn0pXG5cbmV4cG9ydCBjb25zdCBjbG9zZSA9ICgpID0+ICh7XG4gIHR5cGU6ICdDTE9TRSdcbn0pXG5cbmV4cG9ydCBjb25zdCBjbGVhciA9ICgpID0+ICh7XG4gIHR5cGU6ICdDTEVBUidcbn0pXG4iXX0=