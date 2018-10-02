'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  error: null,
  result: null,
  status: 'pending'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'REQUEST_REQUEST':
      return (0, _extends3.default)({}, state, {
        status: 'submitting'
      });

    case 'REQUEST_FAILURE':
      return (0, _extends3.default)({}, state, {
        status: 'failure',
        error: action.result.error.message
      });

    case 'REQUEST_SUCCESS':
      return (0, _extends3.default)({}, state, {
        result: action.result.data,
        status: 'success'
      });

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImVycm9yIiwicmVzdWx0Iiwic3RhdHVzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIm1lc3NhZ2UiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLFNBQU8sSUFEYTtBQUVwQkMsVUFBUSxJQUZZO0FBR3BCQyxVQUFRO0FBSFksQ0FBdEI7O0FBTUEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsTUFBbENDLEtBQWtDLHVFQUExQkwsYUFBMEI7QUFBQSxNQUFYTSxNQUFXOzs7QUFFakQsVUFBUUEsT0FBT0MsSUFBZjs7QUFFQSxTQUFLLGlCQUFMO0FBQ0Usd0NBQ0tGLEtBREw7QUFFRUYsZ0JBQVE7QUFGVjs7QUFLRixTQUFLLGlCQUFMO0FBQ0Usd0NBQ0tFLEtBREw7QUFFRUYsZ0JBQVEsU0FGVjtBQUdFRixlQUFPSyxPQUFPSixNQUFQLENBQWNELEtBQWQsQ0FBb0JPO0FBSDdCOztBQU1GLFNBQUssaUJBQUw7QUFDRSx3Q0FDS0gsS0FETDtBQUVFSCxnQkFBUUksT0FBT0osTUFBUCxDQUFjTyxJQUZ4QjtBQUdFTixnQkFBUTtBQUhWOztBQU1GO0FBQ0UsYUFBT0UsS0FBUDtBQXZCRjtBQTBCRCxDQTVCRDs7a0JBOEJlRCxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBlcnJvcjogbnVsbCxcbiAgcmVzdWx0OiBudWxsLFxuICBzdGF0dXM6ICdwZW5kaW5nJ1xufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIGNhc2UgJ1JFUVVFU1RfUkVRVUVTVCc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnc3VibWl0dGluZydcbiAgICB9XG5cbiAgY2FzZSAnUkVRVUVTVF9GQUlMVVJFJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICdmYWlsdXJlJyxcbiAgICAgIGVycm9yOiBhY3Rpb24ucmVzdWx0LmVycm9yLm1lc3NhZ2VcbiAgICB9XG5cbiAgY2FzZSAnUkVRVUVTVF9TVUNDRVNTJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICByZXN1bHQ6IGFjdGlvbi5yZXN1bHQuZGF0YSxcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXG4gICAgfVxuXG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXX0=