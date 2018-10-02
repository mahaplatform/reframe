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

var INITIAL_STATE = {
  records: null,
  request_id: null,
  selectAll: false,
  selected: [],
  status: 'pending'
};

var fetchRequest = function fetchRequest(state, action) {
  return (0, _extends3.default)({}, state, {
    request_id: action.request_id,
    status: status !== 'pending' && action.request.params.$page.skip === 0 ? 'loading' : 'refreshing'
  });
};

var fetchSuccess = function fetchSuccess(state, action) {
  if (action.request_id !== state.request_id) return state;
  if (!_lodash2.default.includes(['loading', 'refreshing', 'delayed'], state.status)) return state;
  var loaded = state.records ? state.records.length : 0;
  if (action.result.pagination.all !== undefined) {
    return (0, _extends3.default)({}, state, {
      all: action.result.pagination.all,
      request_id: null,
      records: action.result.pagination.skip > 0 ? [].concat((0, _toConsumableArray3.default)(state.records || []), (0, _toConsumableArray3.default)(action.result.data)) : action.result.data,
      total: action.result.pagination.total,
      status: loaded + action.result.data.length >= action.result.pagination.total ? 'completed' : 'loaded'
    });
  } else if (action.result.pagination.next !== undefined) {
    return (0, _extends3.default)({}, state, {
      next: action.result.pagination.next,
      request_id: null,
      records: action.result.pagination.skip > 0 ? [].concat((0, _toConsumableArray3.default)(state.records || []), (0, _toConsumableArray3.default)(action.result.data)) : action.result.data,
      status: action.result.pagination.next === null ? 'completed' : 'loaded'
    });
  }
};

var fetchFailure = function fetchFailure(state, action) {
  return (0, _extends3.default)({}, state, {
    status: 'failed'
  });
};

var fetchDelay = function fetchDelay(state, action) {
  return (0, _extends3.default)({}, state, {
    status: 'delayed'
  });
};

var fetchTimeout = function fetchTimeout(state, action) {
  return (0, _extends3.default)({}, state, {
    status: 'timeout'
  });
};

var select = function select(state, action) {
  var selected = !_lodash2.default.includes(state.selected, action.id) ? [].concat((0, _toConsumableArray3.default)(state.selected), [action.id]) : state.selected.filter(function (id) {
    return id !== action.id;
  });
  var all = state.records ? state.records.map(function (record) {
    return record.id;
  }) : [];
  var selectAll = _lodash2.default.isEqual(all.sort(), selected.sort());
  return (0, _extends3.default)({}, state, {
    selectAll: selectAll,
    selected: selected
  });
};

var selectAll = function selectAll(state, action) {
  var all = state.records ? state.records.map(function (record) {
    return record.id;
  }) : [];
  var selectAll = !_lodash2.default.isEqual(all.sort(), state.selected.sort());
  return (0, _extends3.default)({}, state, {
    selectAll: selectAll,
    selected: selectAll ? all : []
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'FETCH_REQUEST':
      return fetchRequest(state, action);

    case 'FETCH_SUCCESS':
      return fetchSuccess(state, action);

    case 'FETCH_FAILURE':
      return fetchFailure(state, action);

    case 'FETCH_DELAY':
      return fetchDelay(state, action);

    case 'FETCH_TIMEOUT':
      return fetchTimeout(state, action);

    case 'SELECT':
      return select(state, action);

    case 'SELECT_ALL':
      return selectAll(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInJlY29yZHMiLCJyZXF1ZXN0X2lkIiwic2VsZWN0QWxsIiwic2VsZWN0ZWQiLCJzdGF0dXMiLCJmZXRjaFJlcXVlc3QiLCJzdGF0ZSIsImFjdGlvbiIsInJlcXVlc3QiLCJwYXJhbXMiLCIkcGFnZSIsInNraXAiLCJmZXRjaFN1Y2Nlc3MiLCJfIiwiaW5jbHVkZXMiLCJsb2FkZWQiLCJsZW5ndGgiLCJyZXN1bHQiLCJwYWdpbmF0aW9uIiwiYWxsIiwidW5kZWZpbmVkIiwiZGF0YSIsInRvdGFsIiwibmV4dCIsImZldGNoRmFpbHVyZSIsImZldGNoRGVsYXkiLCJmZXRjaFRpbWVvdXQiLCJzZWxlY3QiLCJpZCIsImZpbHRlciIsIm1hcCIsInJlY29yZCIsImlzRXF1YWwiLCJzb3J0IiwicmVkdWNlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztBQUVBLElBQU1BLGdCQUF1QjtBQUMzQkMsV0FBUyxJQURrQjtBQUUzQkMsY0FBWSxJQUZlO0FBRzNCQyxhQUFXLEtBSGdCO0FBSTNCQyxZQUFVLEVBSmlCO0FBSzNCQyxVQUFRO0FBTG1CLENBQTdCOztBQVFBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQWVDLE1BQWY7QUFBQSxvQ0FDaEJELEtBRGdCO0FBRW5CTCxnQkFBWU0sT0FBT04sVUFGQTtBQUduQkcsWUFBU0EsV0FBVyxTQUFYLElBQXdCRyxPQUFPQyxPQUFQLENBQWVDLE1BQWYsQ0FBc0JDLEtBQXRCLENBQTRCQyxJQUE1QixLQUFxQyxDQUE5RCxHQUFtRSxTQUFuRSxHQUErRTtBQUhwRTtBQUFBLENBQXJCOztBQU1BLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDTixLQUFELEVBQWVDLE1BQWYsRUFBK0M7QUFDbEUsTUFBR0EsT0FBT04sVUFBUCxLQUFzQkssTUFBTUwsVUFBL0IsRUFBMkMsT0FBT0ssS0FBUDtBQUMzQyxNQUFH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QUFDRSxhQUFPRCxLQUFQO0FBeEJGO0FBMkJELENBN0JEOztrQkErQmU0QixPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEZldGNoUmVxdWVzdCwgRmV0Y2hTdWNjZXNzLCBGZXRjaEZhaWx1cmUsIEZldGNoRGVsYXksIEZldGNoVGltZW91dCwgU2VsZWN0LCBTZWxlY3RBbGwsIFN0YXRlLCBBY3Rpb24gfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cbmNvbnN0IElOSVRJQUxfU1RBVEU6IFN0YXRlID0ge1xuICByZWNvcmRzOiBudWxsLFxuICByZXF1ZXN0X2lkOiBudWxsLFxuICBzZWxlY3RBbGw6IGZhbHNlLFxuICBzZWxlY3RlZDogW10sXG4gIHN0YXR1czogJ3BlbmRpbmcnXG59XG5cbmNvbnN0IGZldGNoUmVxdWVzdCA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogRmV0Y2hSZXF1ZXN0KTogU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIHJlcXVlc3RfaWQ6IGFjdGlvbi5yZXF1ZXN0X2lkLFxuICBzdGF0dXM6IChzdGF0dXMgIT09ICdwZW5kaW5nJyAmJiBhY3Rpb24ucmVxdWVzdC5wYXJhbXMuJHBhZ2Uuc2tpcCA9PT0gMCkgPyAnbG9hZGluZycgOiAncmVmcmVzaGluZydcbn0pXG5cbmNvbnN0IGZldGNoU3VjY2VzcyA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogRmV0Y2hTdWNjZXNzKTogU3RhdGUgPT4ge1xuICBpZihhY3Rpb24ucmVxdWVzdF9pZCAhPT0gc3RhdGUucmVxdWVzdF9pZCkgcmV0dXJuIHN0YXRlXG4gIGlmKCFfLmluY2x1ZGVzKFsnbG9hZGluZycsJ3JlZnJlc2hpbmcnLCdkZWxheWVkJ10sIHN0YXRlLnN0YXR1cykpIHJldHVybiBzdGF0ZVxuICBjb25zdCBsb2FkZWQgPSBzdGF0ZS5yZWNvcmRzID8gc3RhdGUucmVjb3Jkcy5sZW5ndGggOiAwXG4gIGlmKGFjdGlvbi5yZXN1bHQucGFnaW5hdGlvbi5hbGwgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGFsbDogYWN0aW9uLnJlc3VsdC5wYWdpbmF0aW9uLmFsbCxcbiAgICAgIHJlcXVlc3RfaWQ6IG51bGwsXG4gICAgICByZWNvcmRzOiAoYWN0aW9uLnJlc3VsdC5wYWdpbmF0aW9uLnNraXAgPiAwKSA/IFtcbiAgICAgICAgLi4uc3RhdGUucmVjb3JkcyB8fCBbXSxcbiAgICAgICAgLi4uYWN0aW9uLnJlc3VsdC5kYXRhXG4gICAgICBdIDogYWN0aW9uLnJlc3VsdC5kYXRhLFxuICAgICAgdG90YWw6IGFjdGlvbi5yZXN1bHQucGFnaW5hdGlvbi50b3RhbCxcbiAgICAgIHN0YXR1czogKGxvYWRlZCArIGFjdGlvbi5yZXN1bHQuZGF0YS5sZW5ndGggPj0gYWN0aW9uLnJlc3VsdC5wYWdpbmF0aW9uLnRvdGFsKSA/ICdjb21wbGV0ZWQnIDogJ2xvYWRlZCdcbiAgICB9XG4gIH0gZWxzZSBpZihhY3Rpb24ucmVzdWx0LnBhZ2luYXRpb24ubmV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbmV4dDogYWN0aW9uLnJlc3VsdC5wYWdpbmF0aW9uLm5leHQsXG4gICAgICByZXF1ZXN0X2lkOiBudWxsLFxuICAgICAgcmVjb3JkczogKGFjdGlvbi5yZXN1bHQucGFnaW5hdGlvbi5za2lwID4gMCkgPyBbXG4gICAgICAgIC4uLnN0YXRlLnJlY29yZHMgfHwgW10sXG4gICAgICAgIC4uLmFjdGlvbi5yZXN1bHQuZGF0YVxuICAgICAgXSA6IGFjdGlvbi5yZXN1bHQuZGF0YSxcbiAgICAgIHN0YXR1czogYWN0aW9uLnJlc3VsdC5wYWdpbmF0aW9uLm5leHQgPT09IG51bGwgPyAnY29tcGxldGVkJyA6ICdsb2FkZWQnXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGZldGNoRmFpbHVyZSA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogRmV0Y2hGYWlsdXJlKTogU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIHN0YXR1czogJ2ZhaWxlZCdcbn0pXG5cbmNvbnN0IGZldGNoRGVsYXkgPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb246IEZldGNoRGVsYXkpOiBTdGF0ZSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgc3RhdHVzOiAnZGVsYXllZCdcbn0pXG5cbmNvbnN0IGZldGNoVGltZW91dCA9IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogRmV0Y2hUaW1lb3V0KTogU3RhdGUgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIHN0YXR1czogJ3RpbWVvdXQnXG59KVxuXG5jb25zdCBzZWxlY3QgPSAoc3RhdGU6IFN0YXRlLCBhY3Rpb246IFNlbGVjdCk6IFN0YXRlID0+IHtcbiAgY29uc3Qgc2VsZWN0ZWQgPSAoIV8uaW5jbHVkZXMoc3RhdGUuc2VsZWN0ZWQsIGFjdGlvbi5pZCkpID8gW1xuICAgIC4uLnN0YXRlLnNlbGVjdGVkLFxuICAgIGFjdGlvbi5pZFxuICBdIDogc3RhdGUuc2VsZWN0ZWQuZmlsdGVyKGlkID0+IGlkICE9PSBhY3Rpb24uaWQpXG4gIGNvbnN0IGFsbCA9IHN0YXRlLnJlY29yZHMgPyBzdGF0ZS5yZWNvcmRzLm1hcChyZWNvcmQgPT4gcmVjb3JkLmlkKSA6IFtdXG4gIGNvbnN0IHNlbGVjdEFsbCA9IF8uaXNFcXVhbChhbGwuc29ydCgpLCBzZWxlY3RlZC5zb3J0KCkpXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgc2VsZWN0QWxsLFxuICAgIHNlbGVjdGVkXG4gIH1cbn1cblxuY29uc3Qgc2VsZWN0QWxsID0gKHN0YXRlOiBTdGF0ZSwgYWN0aW9uOiBTZWxlY3RBbGwpOiBTdGF0ZSA9PiB7XG4gIGNvbnN0IGFsbCA9IHN0YXRlLnJlY29yZHMgPyBzdGF0ZS5yZWNvcmRzLm1hcChyZWNvcmQgPT4gcmVjb3JkLmlkKSA6IFtdXG4gIGNvbnN0IHNlbGVjdEFsbCA9ICFfLmlzRXF1YWwoYWxsLnNvcnQoKSwgc3RhdGUuc2VsZWN0ZWQuc29ydCgpKVxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIHNlbGVjdEFsbCxcbiAgICBzZWxlY3RlZDogc2VsZWN0QWxsID8gYWxsIDogW11cbiAgfVxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBTdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbjogQWN0aW9uKTogU3RhdGUgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdGRVRDSF9SRVFVRVNUJzpcbiAgICByZXR1cm4gZmV0Y2hSZXF1ZXN0KHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnRkVUQ0hfU1VDQ0VTUyc6XG4gICAgcmV0dXJuIGZldGNoU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ0ZFVENIX0ZBSUxVUkUnOlxuICAgIHJldHVybiBmZXRjaEZhaWx1cmUoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdGRVRDSF9ERUxBWSc6XG4gICAgcmV0dXJuIGZldGNoRGVsYXkoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdGRVRDSF9USU1FT1VUJzpcbiAgICByZXR1cm4gZmV0Y2hUaW1lb3V0KHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnU0VMRUNUJzpcbiAgICByZXR1cm4gc2VsZWN0KHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnU0VMRUNUX0FMTCc6XG4gICAgcmV0dXJuIHNlbGVjdEFsbChzdGF0ZSwgYWN0aW9uKVxuXG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXX0=