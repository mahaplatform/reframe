'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  columns: [],
  filter: {},
  managing: false,
  open: false,
  panel: null,
  q: '',
  records: null,
  selected: [],
  sort: {
    key: null,
    order: null
  }
};

var setParams = function setParams(state, action) {
  return (0, _extends3.default)({}, state, {
    filter: action.filter,
    sort: action.sort
  });
};

var setColumns = function setColumns(state, action) {
  return (0, _extends3.default)({}, state, {
    columns: action.columns
  });
};

var setSelected = function setSelected(state, action) {
  return (0, _extends3.default)({}, state, {
    selected: action.selected
  });
};

var filter = function filter(state, action) {
  return (0, _extends3.default)({}, state, {
    filter: action.filter
  });
};

var sort = function sort(state, action) {
  return (0, _extends3.default)({}, state, {
    sort: {
      key: action.key,
      order: state.sort.key == action.key && state.sort.order == 'asc' ? 'desc' : 'asc'
    }
  });
};

var setRecords = function setRecords(state, action) {
  return (0, _extends3.default)({}, state, {
    records: action.records
  });
};

var setFilter = function setFilter(state, action) {
  return (0, _extends3.default)({}, state, {
    filter: action.filter
  });
};

var setQuery = function setQuery(state, action) {
  return (0, _extends3.default)({}, state, {
    q: action.q
  });
};

var toggleTasks = function toggleTasks(state, action) {
  return (0, _extends3.default)({}, state, {
    managing: !state.managing
  });
};

var addPanel = function addPanel(state, action) {
  return (0, _extends3.default)({}, state, {
    open: true,
    panel: action.panel
  });
};

var removePanel = function removePanel(state, action) {
  return (0, _extends3.default)({}, state, {
    open: false
  });
};

var clearPanel = function clearPanel(state, action) {
  return (0, _extends3.default)({}, state, {
    panel: null
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_PARAMS':
      return setParams(state, action);

    case 'SET_COLUMNS':
      return setColumns(state, action);

    case 'SET_SELECTED':
      return setSelected(state, action);

    case 'FILTER':
      return filter(state, action);

    case 'SORT':
      return sort(state, action);

    case 'SET_RECORDS':
      return setRecords(state, action);

    case 'SET_FILTER':
      return setFilter(state, action);

    case 'SET_QUERY':
      return setQuery(state, action);

    case 'TOGGLE_TASKS':
      return toggleTasks(state, action);

    case 'ADD_PANEL':
      return addPanel(state, action);

    case 'REMOVE_PANEL':
      return removePanel(state, action);

    case 'CLEAR_PANEL':
      return clearPanel(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImNvbHVtbnMiLCJmaWx0ZXIiLCJtYW5hZ2luZyIsIm9wZW4iLCJwYW5lbCIsInEiLCJyZWNvcmRzIiwic2VsZWN0ZWQiLCJzb3J0Iiwia2V5Iiwib3JkZXIiLCJzZXRQYXJhbXMiLCJzdGF0ZSIsImFjdGlvbiIsInNldENvbHVtbnMiLCJzZXRTZWxlY3RlZCIsInNldFJlY29yZHMiLCJzZXRGaWx0ZXIiLCJzZXRRdWVyeSIsInRvZ2dsZVRhc2tzIiwiYWRkUGFuZWwiLCJyZW1vdmVQYW5lbCIsImNsZWFyUGFuZWwiLCJyZWR1Y2VyIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsZ0JBQWdCO0FBQ3BCQyxXQUFTLEVBRFc7QUFFcEJDLFVBQVEsRUFGWTtBQUdwQkMsWUFBVSxLQUhVO0FBSXBCQyxRQUFNLEtBSmM7QUFLcEJDLFNBQU8sSUFMYTtBQU1wQkMsS0FBRyxFQU5pQjtBQU9wQkMsV0FBUyxJQVBXO0FBUXBCQyxZQUFVLEVBUlU7QUFTcEJDLFFBQU07QUFDSkMsU0FBSyxJQUREO0FBRUpDLFdBQU87QUFGSDtBQVRjLENBQXRCOztBQWVBLElBQU1DLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxvQ0FDYkQsS0FEYTtBQUVoQlgsWUFBUVksT0FBT1osTUFGQztBQUdoQk8sVUFBTUssT0FBT0w7QUFIRztBQUFBLENBQWxCOztBQU1BLElBQU1NLGFBQWEsU0FBYkEsVUFBYSxDQUFDRixLQUFELEVBQVFDLE1BQVI7QUFBQSxvQ0FDZEQsS0FEYztBQUVqQlosYUFBU2EsT0FBT2I7QUFGQztBQUFBLENBQW5COztBQUtBLElBQU1lLGNBQWMsU0FBZEEsV0FBYyxDQUFDSCxLQUFELEVBQVFDLE1BQVI7QUFBQSxvQ0FDZkQsS0FEZTtBQUVsQkwsY0FBVU0sT0FBT047QUFGQztBQUFBLENBQXBCOztBQUtBLElBQU1OLFNBQVMsU0FBVEEs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QUFsQixDQUFQOztBQUVGO0FBQ0UsYUFBT0QsS0FBUDtBQXZDRjtBQTBDRCxDQTVDRDs7a0JBOENlVyxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBjb2x1bW5zOiBbXSxcbiAgZmlsdGVyOiB7fSxcbiAgbWFuYWdpbmc6IGZhbHNlLFxuICBvcGVuOiBmYWxzZSxcbiAgcGFuZWw6IG51bGwsXG4gIHE6ICcnLFxuICByZWNvcmRzOiBudWxsLFxuICBzZWxlY3RlZDogW10sXG4gIHNvcnQ6IHtcbiAgICBrZXk6IG51bGwsXG4gICAgb3JkZXI6IG51bGxcbiAgfVxufVxuXG5jb25zdCBzZXRQYXJhbXMgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGZpbHRlcjogYWN0aW9uLmZpbHRlcixcbiAgc29ydDogYWN0aW9uLnNvcnRcbn0pXG5cbmNvbnN0IHNldENvbHVtbnMgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGNvbHVtbnM6IGFjdGlvbi5jb2x1bW5zXG59KVxuXG5jb25zdCBzZXRTZWxlY3RlZCA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgc2VsZWN0ZWQ6IGFjdGlvbi5zZWxlY3RlZFxufSlcblxuY29uc3QgZmlsdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBmaWx0ZXI6IGFjdGlvbi5maWx0ZXJcbn0pXG5cbmNvbnN0IHNvcnQgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIHNvcnQ6IHtcbiAgICBrZXk6IGFjdGlvbi5rZXksXG4gICAgb3JkZXI6IChzdGF0ZS5zb3J0LmtleSA9PSBhY3Rpb24ua2V5ICYmIHN0YXRlLnNvcnQub3JkZXIgPT0gJ2FzYycpID8gJ2Rlc2MnIDogJ2FzYydcbiAgfVxufSlcblxuY29uc3Qgc2V0UmVjb3JkcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgcmVjb3JkczogYWN0aW9uLnJlY29yZHNcbn0pXG5cbmNvbnN0IHNldEZpbHRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZmlsdGVyOiBhY3Rpb24uZmlsdGVyXG59KVxuXG5jb25zdCBzZXRRdWVyeSA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgcTogYWN0aW9uLnFcbn0pXG5cbmNvbnN0IHRvZ2dsZVRhc2tzID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBtYW5hZ2luZzogIXN0YXRlLm1hbmFnaW5nXG59KVxuXG5jb25zdCBhZGRQYW5lbCA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgb3BlbjogdHJ1ZSxcbiAgcGFuZWw6IGFjdGlvbi5wYW5lbFxufSlcblxuY29uc3QgcmVtb3ZlUGFuZWwgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIG9wZW46IGZhbHNlXG59KVxuXG5jb25zdCBjbGVhclBhbmVsID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBwYW5lbDogbnVsbFxufSlcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbik9PiB7XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuXG4gIGNhc2UgJ1NFVF9QQVJBTVMnOlxuICAgIHJldHVybiBzZXRQYXJhbXMoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdTRVRfQ09MVU1OUyc6XG4gICAgcmV0dXJuIHNldENvbHVtbnMoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdTRVRfU0VMRUNURUQnOlxuICAgIHJldHVybiBzZXRTZWxlY3RlZChzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ0ZJTFRFUic6XG4gICAgcmV0dXJuIGZpbHRlcihzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ1NPUlQnOlxuICAgIHJldHVybiBzb3J0KHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnU0VUX1JFQ09SRFMnOlxuICAgIHJldHVybiBzZXRSZWNvcmRzKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnU0VUX0ZJTFRFUic6XG4gICAgcmV0dXJuIHNldEZpbHRlcihzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ1NFVF9RVUVSWSc6XG4gICAgcmV0dXJuIHNldFF1ZXJ5KHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnVE9HR0xFX1RBU0tTJzpcbiAgICByZXR1cm4gdG9nZ2xlVGFza3Moc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdBRERfUEFORUwnOlxuICAgIHJldHVybiBhZGRQYW5lbChzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ1JFTU9WRV9QQU5FTCc6XG4gICAgcmV0dXJuIHJlbW92ZVBhbmVsKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnQ0xFQVJfUEFORUwnOlxuICAgIHJldHVybiBjbGVhclBhbmVsKHN0YXRlLCBhY3Rpb24pXG5cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdfQ==