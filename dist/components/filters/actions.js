'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var set = exports.set = function set(results) {
  return {
    type: 'SET',
    results: results
  };
};

var change = exports.change = function change(name, value) {
  return {
    type: 'CHANGE',
    name: name,
    value: value
  };
};

var addPanel = exports.addPanel = function addPanel(panel) {
  return {
    type: 'ADD_PANEL',
    panel: panel
  };
};

var removePanel = exports.removePanel = function removePanel() {
  return {
    type: 'REMOVE_PANEL'
  };
};

var reset = exports.reset = function reset() {
  return {
    type: 'RESET'
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsic2V0IiwicmVzdWx0cyIsInR5cGUiLCJjaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJhZGRQYW5lbCIsInBhbmVsIiwicmVtb3ZlUGFuZWwiLCJyZXNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSxvQkFBTSxTQUFOQSxHQUFNLENBQUNDLE9BQUQ7QUFBQSxTQUFjO0FBQy9CQyxVQUFNLEtBRHlCO0FBRS9CRDtBQUYrQixHQUFkO0FBQUEsQ0FBWjs7QUFLQSxJQUFNRSwwQkFBUyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFNBQWtCO0FBQ3RDSCxVQUFNLFFBRGdDO0FBRXRDRSxjQUZzQztBQUd0Q0M7QUFIc0MsR0FBbEI7QUFBQSxDQUFmOztBQU1BLElBQU1DLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENMLFVBQU0sV0FENEI7QUFFbENLO0FBRmtDLEdBQVo7QUFBQSxDQUFqQjs7QUFLQSxJQUFNQyxvQ0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FBTztBQUNoQ04sVUFBTTtBQUQwQixHQUFQO0FBQUEsQ0FBcEI7O0FBSUEsSUFBTU8sd0JBQVEsU0FBUkEsS0FBUTtBQUFBLFNBQU87QUFDMUJQLFVBQU07QUFEb0IsR0FBUDtBQUFBLENBQWQiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXQgPSAocmVzdWx0cykgPT4gKHtcbiAgdHlwZTogJ1NFVCcsXG4gIHJlc3VsdHNcbn0pXG5cbmV4cG9ydCBjb25zdCBjaGFuZ2UgPSAobmFtZSwgdmFsdWUpID0+ICh7XG4gIHR5cGU6ICdDSEFOR0UnLFxuICBuYW1lLFxuICB2YWx1ZVxufSlcblxuZXhwb3J0IGNvbnN0IGFkZFBhbmVsID0gKHBhbmVsKSA9PiAoe1xuICB0eXBlOiAnQUREX1BBTkVMJyxcbiAgcGFuZWxcbn0pXG5cbmV4cG9ydCBjb25zdCByZW1vdmVQYW5lbCA9ICgpID0+ICh7XG4gIHR5cGU6ICdSRU1PVkVfUEFORUwnXG59KVxuXG5leHBvcnQgY29uc3QgcmVzZXQgPSAoKSA9PiAoe1xuICB0eXBlOiAnUkVTRVQnXG59KVxuIl19