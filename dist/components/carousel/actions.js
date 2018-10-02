'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setTotal = exports.setTotal = function setTotal(total) {
  return {
    type: 'SET_TOTAL',
    total: total
  };
};

var previous = exports.previous = function previous() {
  return {
    type: 'PREVIOUS'
  };
};

var next = exports.next = function next() {
  return {
    type: 'NEXT'
  };
};

var goto = exports.goto = function goto(index) {
  return {
    type: 'GOTO',
    index: index
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsic2V0VG90YWwiLCJ0b3RhbCIsInR5cGUiLCJwcmV2aW91cyIsIm5leHQiLCJnb3RvIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsOEJBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ0MsVUFBTSxXQUQ0QjtBQUVsQ0Q7QUFGa0MsR0FBWjtBQUFBLENBQWpCOztBQUtBLElBQU1FLDhCQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUFPO0FBQzdCRCxVQUFNO0FBRHVCLEdBQVA7QUFBQSxDQUFqQjs7QUFJQSxJQUFNRSxzQkFBTyxTQUFQQSxJQUFPO0FBQUEsU0FBTztBQUN6QkYsVUFBTTtBQURtQixHQUFQO0FBQUEsQ0FBYjs7QUFJQSxJQUFNRyxzQkFBTyxTQUFQQSxJQUFPLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQzlCSixVQUFNLE1BRHdCO0FBRTlCSTtBQUY4QixHQUFaO0FBQUEsQ0FBYiIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNldFRvdGFsID0gKHRvdGFsKSA9PiAoe1xuICB0eXBlOiAnU0VUX1RPVEFMJyxcbiAgdG90YWxcbn0pXG5cbmV4cG9ydCBjb25zdCBwcmV2aW91cyA9ICgpID0+ICh7XG4gIHR5cGU6ICdQUkVWSU9VUydcbn0pXG5cbmV4cG9ydCBjb25zdCBuZXh0ID0gKCkgPT4gKHtcbiAgdHlwZTogJ05FWFQnXG59KVxuXG5leHBvcnQgY29uc3QgZ290byA9IChpbmRleCkgPT4gKHtcbiAgdHlwZTogJ0dPVE8nLFxuICBpbmRleFxufSlcbiJdfQ==