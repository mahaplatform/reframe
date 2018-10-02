'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  busy: [],
  config: [],
  data: {},
  entity: {},
  errors: {},
  panels: [],
  ready: [],
  status: 'pending'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_SECTIONS':
      return (0, _extends5.default)({}, state, {
        config: action.sections,
        status: 'sections_loaded'
      });

    case 'RESET':
      return (0, _extends5.default)({}, state, {
        data: {}
      });

    case 'FETCH_SECTIONS_REQUEST':
      return (0, _extends5.default)({}, state, {
        status: 'loading_sections'
      });

    case 'FETCH_SECTIONS_SUCCESS':
      return (0, _extends5.default)({}, state, {
        status: 'sections_loaded',
        config: action.result.data
      });

    case 'POP':
      return (0, _extends5.default)({}, state, {
        panels: state.panels.slice(0, 0 - action.num)
      });

    case 'PUSH':
      return (0, _extends5.default)({}, state, {
        panels: [].concat((0, _toConsumableArray3.default)(state.panels), [action.component])
      });

    case 'SET_DATA':
      return (0, _extends5.default)({}, state, {
        status: 'data_loaded',
        data: (0, _extends5.default)({}, state.data, _lodash2.default.omitBy(action.data, _lodash2.default.isNil))
      });

    case 'SET_READY':
      return (0, _extends5.default)({}, state, {
        ready: [].concat((0, _toConsumableArray3.default)(state.ready), [action.field])
      });

    case 'FETCH_DATA_REQUEST':
      return (0, _extends5.default)({}, state, {
        status: 'loading_data'
      });

    case 'FETCH_DATA_SUCCESS':
      return (0, _extends5.default)({}, state, {
        status: 'data_loaded',
        data: Object.keys(action.defaults).reduce(function (data, key) {
          return (0, _extends5.default)({}, data, (0, _defineProperty3.default)({}, key, _lodash2.default.get(action.result.data, key) || action.defaults[key] || null));
        }, {})
      });

    case 'TOGGLE_BUSY':
      return (0, _extends5.default)({}, state, {
        busy: _lodash2.default.includes(state.busy, action.field) ? _lodash2.default.without(state.busy, action.field) : [].concat((0, _toConsumableArray3.default)(state.busy), [action.field])
      });

    case 'UPDATE_DATA':
      return (0, _extends5.default)({}, state, {
        data: (0, _extends5.default)({}, state.data, (0, _defineProperty3.default)({}, action.key, action.value)),
        errors: _lodash2.default.omit(state.errors, action.key)
      });

    case 'UPDATE_FIELD':
      return (0, _extends5.default)({}, state, {
        config: [].concat((0, _toConsumableArray3.default)(_lodash2.default.set(state.config, '[' + action.sectionIndex + '].fields[' + action.fieldIndex + ']', action.field)))
      });

    case 'SUBMIT_REQUEST':
      return (0, _extends5.default)({}, state, {
        status: 'submitting'
      });

    case 'SUBMIT_SUCCESS':
      return (0, _extends5.default)({}, state, {
        status: 'success',
        entity: action.result.data
      });

    case 'FETCH_SECTIONS_FAILURE':
    case 'FETCH_DATA_FAILURE':
    case 'SUBMIT_FAILURE':
      return (0, _extends5.default)({}, state, {
        status: 'failure',
        errors: action.result.errors,
        message: action.result.meta.message
      });

    default:
      return state;
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImJ1c3kiLCJjb25maWciLCJkYXRhIiwiZW50aXR5IiwiZXJyb3JzIiwicGFuZWxzIiwicmVhZHkiLCJzdGF0dXMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJzZWN0aW9ucyIsInJlc3VsdCIsInNsaWNlIiwibnVtIiwiY29tcG9uZW50IiwiXyIsIm9taXRCeSIsImlzTmlsIiwiZmllbGQiLCJPYmplY3QiLCJrZXlzIiwiZGVmYXVsdHMiLCJyZWR1Y2UiLCJrZXkiLCJnZXQiLCJpbmNsdWRlcyIsIndpdGhvdXQiLCJ2YWx1ZSIsIm9taXQiLCJzZXQiLCJzZWN0aW9uSW5kZXgiLCJmaWVsZEluZGV4IiwibWVzc2FnZSIsIm1ldGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLFFBQU0sRUFEYztBQUVwQkMsVUFBUSxFQUZZO0FBR3BCQyxRQUFNLEVBSGM7QUFJcEJDLFVBQVEsRUFKWTtBQUtwQkMsVUFBUSxFQUxZO0FBTXBCQyxVQUFRLEVBTlk7QUFPcEJDLFNBQU8sRUFQYTtBQVFwQkMsVUFBUTtBQVJZLENBQXRCOztrQkFXZSxZQUFtQztBQUFBLE1BQWxDQyxLQUFrQyx1RUFBMUJULGFBQTBCO0FBQUEsTUFBWFUsTUFBVzs7O0FBRWhELFVBQVFBLE9BQU9DLElBQWY7O0FBRUEsU0FBSyxjQUFMO0FBQ0Usd0NBQ0tGLEtBREw7QUFFRVAsZ0JBQVFRLE9BQU9FLFFBRmpCO0FBR0VKLGdCQUFRO0FBSFY7O0FBTUYsU0FBSyxPQUFMO0FBQ0Usd0NBQ0tDLEtBREw7QUFFRU4sY0FBTTtBQUZSOztBQUtGLFNBQUssd0JBQUw7QUFDRSx3Q0FDS00sS0FETDtBQUVFRCxnQkFBUTtBQUZWOztBQUtGLFNBQUssd0JBQUw7QUFDRSx3Q0FDS0MsS0FETDtBQUVFRCxnQkFBUSxpQkFGVjtBQUdFTixnQkFBUVEsT0FBT0csTUFBUCxDQUFjVjtBQUh4Qjs7QUFNRixTQUFLLEtBQUw7QUFDRSx3Q0FDS00sS0FETDtBQUVFSCxnQkFBUUcsTUFBTUgsTUFBTixDQUFhUSxLQUFiLENBQW1CLENBQW5CLEVBQXNCLElBQUlKLE9BQU9LLEdBQWpDO0FBRlY7O0FBS0YsU0FBSyxNQUFMO0FBQ0Usd0NBQ0tOLEtBREw7QUFFRUgsMkRBQ0tHLE1BQU1ILE1BRFgsSUFFRUksT0FBT00sU0FGVDtBQUZGOztBQVFGLFNBQUssVUFBTDtBQUNFLHdDQUNLUCxLQURMO0FBRUVELGdCQUFRLGFBRlY7QUFHRUwseUNBQ0tNLE1BQU1OLElBRFgsRUFFS2MsaUJBQUVDLE1BQUYsQ0FBU1IsT0FBT1AsSUFBaEIsRUFBc0JjLGlCQUFFRSxLQUF4QixDQUZMO0FBSEY7O0FBU0YsU0FBSyxXQUFMO0FBQ0Usd0NBQ0tWLEtBREw7QUFFRUYsMERBQ0tFLE1BQU1GLEtBRFgsSUFFRUcsT0FBT1UsS0FGVDtBQUZGOztBQVFGLFNBQUssb0JBQUw7QUFDRSx3Q0FDS1gsS0FETDtBQUVFRCxnQkFBUTtBQUZWOztBQUtGLFNBQUssb0JBQUw7QUFDRSx3Q0FDS0MsS0FETDtBQUVFRCxnQkFBUSxhQUZWO0FBR0VMLGNBQU1rQixPQUFPQyxJQUFQLENBQVlaLE9BQU9hLFFBQW5CLEVBQTZCQyxNQUE3QixDQUFvQyxVQUFDckIsSUFBRCxFQUFPc0IsR0FBUDtBQUFBLDRDQUNyQ3RCLElBRHFDLG9DQUV2Q3NCLEdBRnVDLEVBRWpDUixpQkFBRVMsR0FBRixDQUFNaEIsT0FBT0csTUFBUCxDQUFjVixJQUFwQixFQUEwQnNCLEdBQTFCLEtBQWtDZixPQUFPYSxRQUFQLENBQWdCRSxHQUFoQixDQUFsQyxJQUEwRCxJQUZ6QjtBQUFBLFNBQXBDLEVBR0YsRUFIRTtBQUhSOztBQVNGLFNBQUssYUFBTDtBQUNFLHdDQUNLaEIsS0FETDtBQUVFUixjQUFNZ0IsaUJBQUVVLFFBQUYsQ0FBV2xCLE1BQU1SLElBQWpCLEVBQXVCUyxPQUFPVSxLQUE5QixJQUF1Q0gsaUJBQUVXLE9BQUYsQ0FBVW5CLE1BQU1SLElBQWhCLEVBQXNCUyxPQUFPVSxLQUE3QixDQUF2Qyw4Q0FBa0ZYLE1BQU1SLElBQXhGLElBQThGUyxPQUFPVSxLQUFyRztBQUZSOztBQUtGLFNBQUssYUFBTDtBQUNFLHdDQUNLWCxLQURMO0FBRUVOLHlDQUNLTSxNQUFNTixJQURYLG9DQUVHTyxPQUFPZSxHQUZWLEVBRWdCZixPQUFPbUIsS0FGdkIsRUFGRjtBQU1FeEIsZ0JBQVFZLGlCQUFFYSxJQUFGLENBQU9yQixNQUFNSixNQUFiLEVBQXFCSyxPQUFPZSxHQUE1QjtBQU5WOztBQVNGLFNBQUssY0FBTDtBQUNFLHdDQUNLaEIsS0FETDtBQUVFUCwyREFBWWUsaUJBQUVjLEdBQUYsQ0FBTXRCLE1BQU1QLE1BQVosUUFBd0JRLE9BQU9zQixZQUEvQixpQkFBdUR0QixPQUFPdUIsVUFBOUQsUUFBNkV2QixPQUFPVSxLQUFwRixDQUFaO0FBRkY7O0FBS0YsU0FBSyxnQkFBTDtBQUNFLHdDQUNLWCxLQURMO0FBRUVELGdCQUFRO0FBRlY7O0FBS0YsU0FBSyxnQkFBTDtBQUNFLHdDQUNLQyxLQURMO0FBRUVELGdCQUFRLFNBRlY7QUFHRUosZ0JBQVFNLE9BQU9HLE1BQVAsQ0FBY1Y7QUFIeEI7O0FBTUYsU0FBSyx3QkFBTDtBQUNBLFNBQUssb0JBQUw7QUFDQSxTQUFLLGdCQUFMO0FBQ0Usd0NBQ0tNLEtBREw7QUFFRUQsZ0JBQVEsU0FGVjtBQUdFSCxnQkFBUUssT0FBT0csTUFBUCxDQUFjUixNQUh4QjtBQUlFNkIsaUJBQVN4QixPQUFPRyxNQUFQLENBQWNzQixJQUFkLENBQW1CRDtBQUo5Qjs7QUFPRjtBQUNFLGFBQU96QixLQUFQO0FBNUhGO0FBK0hELEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgYnVzeTogW10sXG4gIGNvbmZpZzogW10sXG4gIGRhdGE6IHt9LFxuICBlbnRpdHk6IHt9LFxuICBlcnJvcnM6IHt9LFxuICBwYW5lbHM6IFtdLFxuICByZWFkeTogW10sXG4gIHN0YXR1czogJ3BlbmRpbmcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdTRVRfU0VDVElPTlMnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGNvbmZpZzogYWN0aW9uLnNlY3Rpb25zLFxuICAgICAgc3RhdHVzOiAnc2VjdGlvbnNfbG9hZGVkJ1xuICAgIH1cblxuICBjYXNlICdSRVNFVCc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZGF0YToge31cbiAgICB9XG5cbiAgY2FzZSAnRkVUQ0hfU0VDVElPTlNfUkVRVUVTVCc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnbG9hZGluZ19zZWN0aW9ucydcbiAgICB9XG5cbiAgY2FzZSAnRkVUQ0hfU0VDVElPTlNfU1VDQ0VTUyc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnc2VjdGlvbnNfbG9hZGVkJyxcbiAgICAgIGNvbmZpZzogYWN0aW9uLnJlc3VsdC5kYXRhXG4gICAgfVxuXG4gIGNhc2UgJ1BPUCc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgcGFuZWxzOiBzdGF0ZS5wYW5lbHMuc2xpY2UoMCwgMCAtIGFjdGlvbi5udW0pXG4gICAgfVxuXG4gIGNhc2UgJ1BVU0gnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHBhbmVsczogW1xuICAgICAgICAuLi5zdGF0ZS5wYW5lbHMsXG4gICAgICAgIGFjdGlvbi5jb21wb25lbnRcbiAgICAgIF1cbiAgICB9XG5cbiAgY2FzZSAnU0VUX0RBVEEnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2RhdGFfbG9hZGVkJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4uc3RhdGUuZGF0YSxcbiAgICAgICAgLi4uXy5vbWl0QnkoYWN0aW9uLmRhdGEsIF8uaXNOaWwpXG4gICAgICB9XG4gICAgfVxuXG4gIGNhc2UgJ1NFVF9SRUFEWSc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgcmVhZHk6IFtcbiAgICAgICAgLi4uc3RhdGUucmVhZHksXG4gICAgICAgIGFjdGlvbi5maWVsZFxuICAgICAgXVxuICAgIH1cblxuICBjYXNlICdGRVRDSF9EQVRBX1JFUVVFU1QnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2xvYWRpbmdfZGF0YSdcbiAgICB9XG5cbiAgY2FzZSAnRkVUQ0hfREFUQV9TVUNDRVNTJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICdkYXRhX2xvYWRlZCcsXG4gICAgICBkYXRhOiBPYmplY3Qua2V5cyhhY3Rpb24uZGVmYXVsdHMpLnJlZHVjZSgoZGF0YSwga2V5KSA9PiAoe1xuICAgICAgICAuLi5kYXRhLFxuICAgICAgICBba2V5XTogXy5nZXQoYWN0aW9uLnJlc3VsdC5kYXRhLCBrZXkpIHx8IGFjdGlvbi5kZWZhdWx0c1trZXldIHx8IG51bGxcbiAgICAgIH0pLCB7fSlcbiAgICB9XG5cbiAgY2FzZSAnVE9HR0xFX0JVU1knOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGJ1c3k6IF8uaW5jbHVkZXMoc3RhdGUuYnVzeSwgYWN0aW9uLmZpZWxkKSA/IF8ud2l0aG91dChzdGF0ZS5idXN5LCBhY3Rpb24uZmllbGQpIDogWyAuLi5zdGF0ZS5idXN5LCBhY3Rpb24uZmllbGQgXVxuICAgIH1cblxuICBjYXNlICdVUERBVEVfREFUQSc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZGF0YToge1xuICAgICAgICAuLi5zdGF0ZS5kYXRhLFxuICAgICAgICBbYWN0aW9uLmtleV06IGFjdGlvbi52YWx1ZVxuICAgICAgfSxcbiAgICAgIGVycm9yczogXy5vbWl0KHN0YXRlLmVycm9ycywgYWN0aW9uLmtleSlcbiAgICB9XG5cbiAgY2FzZSAnVVBEQVRFX0ZJRUxEJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBjb25maWc6IFsuLi5fLnNldChzdGF0ZS5jb25maWcsIGBbJHthY3Rpb24uc2VjdGlvbkluZGV4fV0uZmllbGRzWyR7YWN0aW9uLmZpZWxkSW5kZXh9XWAsIGFjdGlvbi5maWVsZCldXG4gICAgfVxuXG4gIGNhc2UgJ1NVQk1JVF9SRVFVRVNUJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICdzdWJtaXR0aW5nJ1xuICAgIH1cblxuICBjYXNlICdTVUJNSVRfU1VDQ0VTUyc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICBlbnRpdHk6IGFjdGlvbi5yZXN1bHQuZGF0YVxuICAgIH1cblxuICBjYXNlICdGRVRDSF9TRUNUSU9OU19GQUlMVVJFJzpcbiAgY2FzZSAnRkVUQ0hfREFUQV9GQUlMVVJFJzpcbiAgY2FzZSAnU1VCTUlUX0ZBSUxVUkUnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ2ZhaWx1cmUnLFxuICAgICAgZXJyb3JzOiBhY3Rpb24ucmVzdWx0LmVycm9ycyxcbiAgICAgIG1lc3NhZ2U6IGFjdGlvbi5yZXN1bHQubWV0YS5tZXNzYWdlXG4gICAgfVxuXG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxufVxuIl19