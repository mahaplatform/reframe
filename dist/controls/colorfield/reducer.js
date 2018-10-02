'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INITIAL_STATE = {
  color: null
};

var set = function set(state, action) {
  return {
    color: action.color
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return set(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImNvbG9yIiwic2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJyZWR1Y2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLFNBQU87QUFEYSxDQUF0Qjs7QUFJQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsU0FBb0I7QUFDOUJILFdBQU9HLE9BQU9IO0FBRGdCLEdBQXBCO0FBQUEsQ0FBWjs7QUFJQSxJQUFNSSxVQUFVLFNBQVZBLE9BQVUsR0FBbUM7QUFBQSxNQUFsQ0YsS0FBa0MsdUVBQTFCSCxhQUEwQjtBQUFBLE1BQVhJLE1BQVc7OztBQUVqRCxVQUFRQSxPQUFPRSxJQUFmOztBQUVBLFNBQUssS0FBTDtBQUNFLGFBQU9KLElBQUlDLEtBQUosRUFBV0MsTUFBWCxDQUFQOztBQUVGO0FBQ0UsYUFBT0QsS0FBUDtBQU5GO0FBU0QsQ0FYRDs7a0JBYWVFLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGNvbG9yOiBudWxsXG59XG5cbmNvbnN0IHNldCA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICBjb2xvcjogYWN0aW9uLmNvbG9yXG59KVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIGNhc2UgJ1NFVCc6XG4gICAgcmV0dXJuIHNldChzdGF0ZSwgYWN0aW9uKVxuXG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXX0=