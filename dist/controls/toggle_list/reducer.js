'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = {
  filtering: false,
  filter: {},
  query: '',
  chosen: []
};

var loadSuccess = function loadSuccess(state, action) {
  return (0, _extends3.default)({}, state, {
    chosen: action.result.data
  });
};

var setChosen = function setChosen(state, action) {
  return (0, _extends3.default)({}, state, {
    chosen: action.chosen
  });
};

var setQuery = function setQuery(state, action) {
  return (0, _extends3.default)({}, state, {
    query: action.query
  });
};

var setFilter = function setFilter(state, action) {
  return (0, _extends3.default)({}, state, {
    filter: action.filter
  });
};

var toggleFilter = function toggleFilter(state, action) {
  return (0, _extends3.default)({}, state, {
    filtering: !state.filtering
  });
};

var toggleRecord = function toggleRecord(state, action) {

  var getChosen = function getChosen() {
    if (!action.multiple) return [action.record];
    if (_lodash2.default.find(state.chosen, { id: action.record.id }) !== undefined) {
      return state.chosen.filter(function (record) {
        return record.id !== action.record.id;
      });
    }
    return [].concat((0, _toConsumableArray3.default)(state.chosen), [action.record]);
  };

  return (0, _extends3.default)({}, state, {
    chosen: getChosen()
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'LOAD_SUCCESS':
      return loadSuccess(state, action);

    case 'SET_CHOSEN':
      return setChosen(state, action);

    case 'SET_QUERY':
      return setQuery(state, action);

    case 'SET_FILTER':
      return setFilter(state, action);

    case 'TOGGLE_FILTER':
      return toggleFilter(state, action);

    case 'TOGGLE_RECORD':
      return toggleRecord(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImZpbHRlcmluZyIsImZpbHRlciIsInF1ZXJ5IiwiY2hvc2VuIiwibG9hZFN1Y2Nlc3MiLCJzdGF0ZSIsImFjdGlvbiIsInJlc3VsdCIsImRhdGEiLCJzZXRDaG9zZW4iLCJzZXRRdWVyeSIsInNldEZpbHRlciIsInRvZ2dsZUZpbHRlciIsInRvZ2dsZVJlY29yZCIsImdldENob3NlbiIsIm11bHRpcGxlIiwicmVjb3JkIiwiXyIsImZpbmQiLCJpZCIsInVuZGVmaW5lZCIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRU8sSUFBTUEsd0NBQWdCO0FBQzNCQyxhQUFXLEtBRGdCO0FBRTNCQyxVQUFRLEVBRm1CO0FBRzNCQyxTQUFPLEVBSG9CO0FBSTNCQyxVQUFRO0FBSm1CLENBQXRCOztBQU9QLElBQU1DLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVFDLE1BQVI7QUFBQSxvQ0FDZkQsS0FEZTtBQUVsQkYsWUFBUUcsT0FBT0MsTUFBUCxDQUFjQztBQUZKO0FBQUEsQ0FBcEI7O0FBS0EsSUFBTUMsWUFBWSxTQUFaQSxTQUFZLENBQUNKLEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNiRCxLQURhO0FBRWhCRixZQUFRRyxPQUFPSDtBQUZDO0FBQUEsQ0FBbEI7O0FBS0EsSUFBTU8sV0FBVyxTQUFYQSxRQUFXLENBQUNMLEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNaRCxLQURZO0FBRWZILFdBQU9JLE9BQU9KO0FBRkM7QUFBQSxDQUFqQjs7QUFLQSxJQUFNUyxZQUFZLFNBQVpBLFNBQVksQ0FBQ04sS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ2JELEtBRGE7QUFFaEJKLFlBQVFLLE9BQU9MO0FBRkM7QUFBQSxDQUFsQjs7QUFLQSxJQUFNVyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ2hCRCxLQURnQjtBQUVuQkwsZUFBVyxDQUFDSyxNQUFNTDtBQUZDO0FBQUEsQ0FBckI7O0FBS0EsSUFBTWEsZUFBZSxTQUFmQSxZQUFlLENBQUNSLEtBQUQsRUFBUUMsTUFBUixFQUFtQjs7QUFFdEMsTUFBTVEsWUFBWSxTQUFaQSxTQUFZLEdBQU07QUFDdEIsUUFBRyxDQUFDUixPQUFPUyxRQUFYLEVBQXFCLE9BQU8sQ0FBQ1QsT0FBT1UsTUFBUixDQUFQO0FBQ3JCLFFBQUdDLGlCQUFFQyxJQUFGLENBQU9iLE1BQU1GLE1BQWIsRUFBcUIsRUFBRWdCLElBQUliLE9BQU9VLE1BQVAsQ0FBY0csRUFBcEIsRUFBckIsTUFBbURDLFNBQXRELEVBQWlFO0FBQy9ELGFBQU9mLE1BQU1GLE1BQU4sQ0FBYUYsTUFBYixDQUFvQjtBQUFBLGVBQVVlLE9BQU9HLEVBQVAsS0FBY2IsT0FBT1UsTUFBUCxDQUFjRyxFQUF0QztBQUFBLE9BQXBCLENBQVA7QUFDRDtBQUNELHNEQUNLZCxNQUFNRixNQURYLElBRUVHLE9BQU9VLE1BRlQ7QUFJRCxHQVREOztBQVdBLG9DQUNLWCxLQURMO0FBRUVGLFlBQVFXO0FBRlY7QUFLRCxDQWxCRDs7QUFvQkEsSUFBTU8sVUFBVSxTQUFWQSxPQUFVLEdBQW1DO0FBQUEsTUFBbENoQixLQUFrQyx1RUFBMUJOLGFBQTBCO0FBQUEsTUFBWE8sTUFBVzs7O0FBRWpELFVBQVFBLE9BQU9nQixJQUFmOztBQUVBLFNBQUssY0FBTDtBQUNFLGFBQU9sQixZQUFZQyxLQUFaLEVBQW1CQyxNQUFuQixDQUFQOztBQUVGLFNBQUssWUFBTDtBQUNFLGFBQU9HLFVBQVVKLEtBQVYsRUFBaUJDLE1BQWpCLENBQVA7O0FBRUYsU0FBSyxXQUFMO0FBQ0UsYUFBT0ksU0FBU0wsS0FBVCxFQUFnQkMsTUFBaEIsQ0FBUDs7QUFFRixTQUFLLFlBQUw7QUFDRSxhQUFPSyxVQUFVTixLQUFWLEVBQWlCQyxNQUFqQixDQUFQOztBQUVGLFNBQUssZUFBTDtBQUNFLGFBQU9NLGFBQWFQLEtBQWIsRUFBb0JDLE1BQXBCLENBQVA7O0FBRUYsU0FBSyxlQUFMO0FBQ0UsYUFBT08sYUFBYVIsS0FBYixFQUFvQkMsTUFBcEIsQ0FBUDs7QUFFRjtBQUNFLGFBQU9ELEtBQVA7QUFyQkY7QUF3QkQsQ0ExQkQ7O2tCQTRCZWdCLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGZpbHRlcmluZzogZmFsc2UsXG4gIGZpbHRlcjoge30sXG4gIHF1ZXJ5OiAnJyxcbiAgY2hvc2VuOiBbXVxufVxuXG5jb25zdCBsb2FkU3VjY2VzcyA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgY2hvc2VuOiBhY3Rpb24ucmVzdWx0LmRhdGFcbn0pXG5cbmNvbnN0IHNldENob3NlbiA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgY2hvc2VuOiBhY3Rpb24uY2hvc2VuXG59KVxuXG5jb25zdCBzZXRRdWVyeSA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgcXVlcnk6IGFjdGlvbi5xdWVyeVxufSlcblxuY29uc3Qgc2V0RmlsdGVyID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBmaWx0ZXI6IGFjdGlvbi5maWx0ZXJcbn0pXG5cbmNvbnN0IHRvZ2dsZUZpbHRlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZmlsdGVyaW5nOiAhc3RhdGUuZmlsdGVyaW5nXG59KVxuXG5jb25zdCB0b2dnbGVSZWNvcmQgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXG4gIGNvbnN0IGdldENob3NlbiA9ICgpID0+IHtcbiAgICBpZighYWN0aW9uLm11bHRpcGxlKSByZXR1cm4gW2FjdGlvbi5yZWNvcmRdXG4gICAgaWYoXy5maW5kKHN0YXRlLmNob3NlbiwgeyBpZDogYWN0aW9uLnJlY29yZC5pZCB9KSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc3RhdGUuY2hvc2VuLmZpbHRlcihyZWNvcmQgPT4gcmVjb3JkLmlkICE9PSBhY3Rpb24ucmVjb3JkLmlkKVxuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgLi4uc3RhdGUuY2hvc2VuLFxuICAgICAgYWN0aW9uLnJlY29yZFxuICAgIF1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgY2hvc2VuOiBnZXRDaG9zZW4oKVxuICB9XG5cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdMT0FEX1NVQ0NFU1MnOlxuICAgIHJldHVybiBsb2FkU3VjY2VzcyhzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ1NFVF9DSE9TRU4nOlxuICAgIHJldHVybiBzZXRDaG9zZW4oc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdTRVRfUVVFUlknOlxuICAgIHJldHVybiBzZXRRdWVyeShzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ1NFVF9GSUxURVInOlxuICAgIHJldHVybiBzZXRGaWx0ZXIoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdUT0dHTEVfRklMVEVSJzpcbiAgICByZXR1cm4gdG9nZ2xlRmlsdGVyKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnVE9HR0xFX1JFQ09SRCc6XG4gICAgcmV0dXJuIHRvZ2dsZVJlY29yZChzdGF0ZSwgYWN0aW9uKVxuXG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyXG4iXX0=