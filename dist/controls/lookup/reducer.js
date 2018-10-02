'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_VALUE = {
  active: false,
  q: null,
  chosen: null,
  status: 'ready',
  adding: false
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case 'BEGIN':
      return (0, _extends3.default)({}, state, {
        active: true
      });

    case 'END':
      return (0, _extends3.default)({}, state, {
        active: false
      });

    case 'CLEAR':
      return (0, _extends3.default)({}, state, {
        chosen: null
      });

    case 'CANCEL':
      return (0, _extends3.default)({}, state, {
        active: false
      });

    case 'CHOOSE':
      return (0, _extends3.default)({}, state, {
        active: false,
        chosen: action.chosen
      });

    case 'QUERY':
      return (0, _extends3.default)({}, state, {
        q: action.q
      });

    case 'LOAD_SUCCESS':
      return (0, _extends3.default)({}, state, {
        chosen: action.result.data[0],
        status: 'success'
      });

    case 'SHOW_FORM':
      return (0, _extends3.default)({}, state, {
        adding: true
      });

    case 'HIDE_FORM':
      return (0, _extends3.default)({}, state, {
        active: false,
        adding: false
      });
    default:
      return state;

  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9WQUxVRSIsImFjdGl2ZSIsInEiLCJjaG9zZW4iLCJzdGF0dXMiLCJhZGRpbmciLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJyZXN1bHQiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLFVBQVEsS0FEWTtBQUVwQkMsS0FBRyxJQUZpQjtBQUdwQkMsVUFBUSxJQUhZO0FBSXBCQyxVQUFRLE9BSlk7QUFLcEJDLFVBQVE7QUFMWSxDQUF0Qjs7a0JBUWUsWUFBbUM7QUFBQSxNQUFsQ0MsS0FBa0MsdUVBQTFCTixhQUEwQjtBQUFBLE1BQVhPLE1BQVc7OztBQUVoRCxVQUFRQSxPQUFPQyxJQUFmOztBQUVBLFNBQUssT0FBTDtBQUNFLHdDQUNLRixLQURMO0FBRUVMLGdCQUFRO0FBRlY7O0FBS0YsU0FBSyxLQUFMO0FBQ0Usd0NBQ0tLLEtBREw7QUFFRUwsZ0JBQVE7QUFGVjs7QUFLRixTQUFLLE9BQUw7QUFDRSx3Q0FDS0ssS0FETDtBQUVFSCxnQkFBUTtBQUZWOztBQUtGLFNBQUssUUFBTDtBQUNFLHdDQUNLRyxLQURMO0FBRUVMLGdCQUFRO0FBRlY7O0FBS0YsU0FBSyxRQUFMO0FBQ0Usd0NBQ0tLLEtBREw7QUFFRUwsZ0JBQVEsS0FGVjtBQUdFRSxnQkFBUUksT0FBT0o7QUFIakI7O0FBTUYsU0FBSyxPQUFMO0FBQ0Usd0NBQ0tHLEtBREw7QUFFRUosV0FBR0ssT0FBT0w7QUFGWjs7QUFLRixTQUFLLGNBQUw7QUFDRSx3Q0FDS0ksS0FETDtBQUVFSCxnQkFBUUksT0FBT0UsTUFBUCxDQUFjQyxJQUFkLENBQW1CLENBQW5CLENBRlY7QUFHRU4sZ0JBQVE7QUFIVjs7QUFNRixTQUFLLFdBQUw7QUFDRSx3Q0FDS0UsS0FETDtBQUVFRCxnQkFBUTtBQUZWOztBQUtGLFNBQUssV0FBTDtBQUNFLHdDQUNLQyxLQURMO0FBRUVMLGdCQUFRLEtBRlY7QUFHRUksZ0JBQVE7QUFIVjtBQUtGO0FBQ0UsYUFBT0MsS0FBUDs7QUEzREY7QUErREQsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgSU5JVElBTF9WQUxVRSA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgcTogbnVsbCxcbiAgY2hvc2VuOiBudWxsLFxuICBzdGF0dXM6ICdyZWFkeScsXG4gIGFkZGluZzogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gSU5JVElBTF9WQUxVRSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIGNhc2UgJ0JFR0lOJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBhY3RpdmU6IHRydWVcbiAgICB9XG5cbiAgY2FzZSAnRU5EJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBhY3RpdmU6IGZhbHNlXG4gICAgfVxuXG4gIGNhc2UgJ0NMRUFSJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBjaG9zZW46IG51bGxcbiAgICB9XG5cbiAgY2FzZSAnQ0FOQ0VMJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBhY3RpdmU6IGZhbHNlXG4gICAgfVxuXG4gIGNhc2UgJ0NIT09TRSc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGNob3NlbjogYWN0aW9uLmNob3NlblxuICAgIH1cblxuICBjYXNlICdRVUVSWSc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgcTogYWN0aW9uLnFcbiAgICB9XG5cbiAgY2FzZSAnTE9BRF9TVUNDRVNTJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBjaG9zZW46IGFjdGlvbi5yZXN1bHQuZGF0YVswXSxcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXG4gICAgfVxuXG4gIGNhc2UgJ1NIT1dfRk9STSc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgYWRkaW5nOiB0cnVlXG4gICAgfVxuXG4gIGNhc2UgJ0hJREVfRk9STSc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgIGFkZGluZzogZmFsc2VcbiAgICB9XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlXG5cbiAgfVxuXG59XG4iXX0=