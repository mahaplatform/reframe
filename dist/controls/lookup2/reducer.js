'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  active: false,
  records: null,
  selected: [],
  status: 'pending'
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_REQUEST':
      return (0, _extends3.default)({}, state, {
        status: 'loading'
      });

    case 'FETCH_FAILURE':
      return (0, _extends3.default)({}, state, {
        status: 'failure'
      });

    case 'FETCH_SUCCESS':
      return (0, _extends3.default)({}, state, {
        selected: action.result.data,
        status: 'success'
      });

    case 'SET':
      return (0, _extends3.default)({}, state, {
        records: action.records
      });

    case 'BEGIN':
      return (0, _extends3.default)({}, state, {
        active: true
      });

    case 'END':
      return (0, _extends3.default)({}, state, {
        active: false
      });

    case 'SELECT':
      return (0, _extends3.default)({}, state, {
        selected: action.selected
      });

    case 'REMOVE':
      return (0, _extends3.default)({}, state, {
        selected: [].concat((0, _toConsumableArray3.default)(state.selected.slice(0, action.index)), (0, _toConsumableArray3.default)(state.selected.slice(action.index + 1)))
      });

    default:
      return state;

  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImFjdGl2ZSIsInJlY29yZHMiLCJzZWxlY3RlZCIsInN0YXR1cyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJyZXN1bHQiLCJkYXRhIiwic2xpY2UiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSx3Q0FBZ0I7QUFDM0JDLFVBQVEsS0FEbUI7QUFFM0JDLFdBQVMsSUFGa0I7QUFHM0JDLFlBQVUsRUFIaUI7QUFJM0JDLFVBQVE7QUFKbUIsQ0FBdEI7O0FBT1AsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsTUFBbENDLEtBQWtDLHVFQUExQk4sYUFBMEI7QUFBQSxNQUFYTyxNQUFXOzs7QUFFakQsVUFBUUEsT0FBT0MsSUFBZjs7QUFFQSxTQUFLLGVBQUw7QUFDRSx3Q0FDS0YsS0FETDtBQUVFRixnQkFBUTtBQUZWOztBQUtGLFNBQUssZUFBTDtBQUNFLHdDQUNLRSxLQURMO0FBRUVGLGdCQUFRO0FBRlY7O0FBS0YsU0FBSyxlQUFMO0FBQ0Usd0NBQ0tFLEtBREw7QUFFRUgsa0JBQVVJLE9BQU9FLE1BQVAsQ0FBY0MsSUFGMUI7QUFHRU4sZ0JBQVE7QUFIVjs7QUFNRixTQUFLLEtBQUw7QUFDRSx3Q0FDS0UsS0FETDtBQUVFSixpQkFBU0ssT0FBT0w7QUFGbEI7O0FBS0YsU0FBSyxPQUFMO0FBQ0Usd0NBQ0tJLEtBREw7QUFFRUwsZ0JBQVE7QUFGVjs7QUFLRixTQUFLLEtBQUw7QUFDRSx3Q0FDS0ssS0FETDtBQUVFTCxnQkFBUTtBQUZWOztBQUtGLFNBQUssUUFBTDtBQUNFLHdDQUNLSyxLQURMO0FBRUVILGtCQUFVSSxPQUFPSjtBQUZuQjs7QUFLRixTQUFLLFFBQUw7QUFDRSx3Q0FDS0csS0FETDtBQUVFSCw2REFDS0csTUFBTUgsUUFBTixDQUFlUSxLQUFmLENBQXFCLENBQXJCLEVBQXdCSixPQUFPSyxLQUEvQixDQURMLG9DQUVLTixNQUFNSCxRQUFOLENBQWVRLEtBQWYsQ0FBcUJKLE9BQU9LLEtBQVAsR0FBZSxDQUFwQyxDQUZMO0FBRkY7O0FBUUY7QUFDRSxhQUFPTixLQUFQOztBQXZERjtBQTJERCxDQTdERDs7a0JBK0RlRCxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgcmVjb3JkczogbnVsbCxcbiAgc2VsZWN0ZWQ6IFtdLFxuICBzdGF0dXM6ICdwZW5kaW5nJ1xufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIGNhc2UgJ0ZFVENIX1JFUVVFU1QnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2xvYWRpbmcnXG4gICAgfVxuXG4gIGNhc2UgJ0ZFVENIX0ZBSUxVUkUnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2ZhaWx1cmUnXG4gICAgfVxuXG4gIGNhc2UgJ0ZFVENIX1NVQ0NFU1MnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkOiBhY3Rpb24ucmVzdWx0LmRhdGEsXG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJ1xuICAgIH1cblxuICBjYXNlICdTRVQnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHJlY29yZHM6IGFjdGlvbi5yZWNvcmRzXG4gICAgfVxuXG4gIGNhc2UgJ0JFR0lOJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBhY3RpdmU6IHRydWVcbiAgICB9XG5cbiAgY2FzZSAnRU5EJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBhY3RpdmU6IGZhbHNlXG4gICAgfVxuXG4gIGNhc2UgJ1NFTEVDVCc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc2VsZWN0ZWQ6IGFjdGlvbi5zZWxlY3RlZFxuICAgIH1cblxuICBjYXNlICdSRU1PVkUnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkOiBbXG4gICAgICAgIC4uLnN0YXRlLnNlbGVjdGVkLnNsaWNlKDAsIGFjdGlvbi5pbmRleCksXG4gICAgICAgIC4uLnN0YXRlLnNlbGVjdGVkLnNsaWNlKGFjdGlvbi5pbmRleCArIDEpXG4gICAgICBdXG4gICAgfVxuXG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdfQ==