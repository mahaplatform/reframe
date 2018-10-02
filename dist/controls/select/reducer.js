'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_VALUE = {
  items: [],
  selected: [],
  status: 'pending'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_ITEMS':
      return (0, _extends3.default)({}, state, {
        items: action.items
      });

    case 'FETCH_ITEMS_REQUEST':
      return (0, _extends3.default)({}, state, {
        status: 'loading'
      });

    case 'FETCH_ITEMS_FAILURE':
      return (0, _extends3.default)({}, state, {
        status: 'success'
      });

    case 'FETCH_ITEMS_SUCCESS':
      return (0, _extends3.default)({}, state, {
        items: action.result.data,
        status: 'success'
      });

    case 'SET_SELECTED':
      return (0, _extends3.default)({}, state, {
        selected: action.values
      });

    case 'CHOOSE':
      return (0, _extends3.default)({}, state, {
        selected: _lodash2.default.includes(state.selected, action.value) ? action.multiple ? _lodash2.default.without(state.selected, action.value) : [].concat((0, _toConsumableArray3.default)(state.selected)) : action.multiple ? [].concat((0, _toConsumableArray3.default)(state.selected), [action.value]) : [action.value]

      });

    default:
      return state;

  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9WQUxVRSIsIml0ZW1zIiwic2VsZWN0ZWQiLCJzdGF0dXMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJyZXN1bHQiLCJkYXRhIiwidmFsdWVzIiwiXyIsImluY2x1ZGVzIiwidmFsdWUiLCJtdWx0aXBsZSIsIndpdGhvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQjtBQUNwQkMsU0FBTyxFQURhO0FBRXBCQyxZQUFVLEVBRlU7QUFHcEJDLFVBQVE7QUFIWSxDQUF0Qjs7a0JBTWUsWUFBbUM7QUFBQSxNQUFsQ0MsS0FBa0MsdUVBQTFCSixhQUEwQjtBQUFBLE1BQVhLLE1BQVc7OztBQUVoRCxVQUFRQSxPQUFPQyxJQUFmOztBQUVBLFNBQUssV0FBTDtBQUNFLHdDQUNLRixLQURMO0FBRUVILGVBQU9JLE9BQU9KO0FBRmhCOztBQUtGLFNBQUsscUJBQUw7QUFDRSx3Q0FDS0csS0FETDtBQUVFRCxnQkFBUTtBQUZWOztBQUtGLFNBQUsscUJBQUw7QUFDRSx3Q0FDS0MsS0FETDtBQUVFRCxnQkFBUTtBQUZWOztBQUtGLFNBQUsscUJBQUw7QUFDRSx3Q0FDS0MsS0FETDtBQUVFSCxlQUFPSSxPQUFPRSxNQUFQLENBQWNDLElBRnZCO0FBR0VMLGdCQUFRO0FBSFY7O0FBTUYsU0FBSyxjQUFMO0FBQ0Usd0NBQ0tDLEtBREw7QUFFRUYsa0JBQVVHLE9BQU9JO0FBRm5COztBQUtGLFNBQUssUUFBTDtBQUNFLHdDQUNLTCxLQURMO0FBRUVGLGtCQUFVUSxpQkFBRUMsUUFBRixDQUFXUCxNQUFNRixRQUFqQixFQUEyQkcsT0FBT08sS0FBbEMsSUFDUFAsT0FBT1EsUUFBUCxHQUFrQkgsaUJBQUVJLE9BQUYsQ0FBVVYsTUFBTUYsUUFBaEIsRUFBMEJHLE9BQU9PLEtBQWpDLENBQWxCLDhDQUFpRVIsTUFBTUYsUUFBdkUsRUFETyxHQUVQRyxPQUFPUSxRQUFQLDhDQUF1QlQsTUFBTUYsUUFBN0IsSUFBdUNHLE9BQU9PLEtBQTlDLEtBQXdELENBQUNQLE9BQU9PLEtBQVI7O0FBSjdEOztBQVFGO0FBQ0UsYUFBT1IsS0FBUDs7QUEzQ0Y7QUErQ0QsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBJTklUSUFMX1ZBTFVFID0ge1xuICBpdGVtczogW10sXG4gIHNlbGVjdGVkOiBbXSxcbiAgc3RhdHVzOiAncGVuZGluZydcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gSU5JVElBTF9WQUxVRSwgYWN0aW9uKSA9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIGNhc2UgJ1NFVF9JVEVNUyc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtc1xuICAgIH1cblxuICBjYXNlICdGRVRDSF9JVEVNU19SRVFVRVNUJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICdsb2FkaW5nJ1xuICAgIH1cblxuICBjYXNlICdGRVRDSF9JVEVNU19GQUlMVVJFJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJ1xuICAgIH1cblxuICBjYXNlICdGRVRDSF9JVEVNU19TVUNDRVNTJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBpdGVtczogYWN0aW9uLnJlc3VsdC5kYXRhLFxuICAgICAgc3RhdHVzOiAnc3VjY2VzcydcbiAgICB9XG5cbiAgY2FzZSAnU0VUX1NFTEVDVEVEJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzZWxlY3RlZDogYWN0aW9uLnZhbHVlc1xuICAgIH1cblxuICBjYXNlICdDSE9PU0UnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHNlbGVjdGVkOiBfLmluY2x1ZGVzKHN0YXRlLnNlbGVjdGVkLCBhY3Rpb24udmFsdWUpID9cbiAgICAgICAgKGFjdGlvbi5tdWx0aXBsZSA/IF8ud2l0aG91dChzdGF0ZS5zZWxlY3RlZCwgYWN0aW9uLnZhbHVlKSA6IFsgLi4uc3RhdGUuc2VsZWN0ZWQgXSkgOlxuICAgICAgICAoYWN0aW9uLm11bHRpcGxlID8gWyAuLi5zdGF0ZS5zZWxlY3RlZCwgYWN0aW9uLnZhbHVlIF0gOiBbYWN0aW9uLnZhbHVlXSlcblxuICAgIH1cblxuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZVxuXG4gIH1cblxufVxuIl19