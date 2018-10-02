'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  items: []
};

var set = function set(state, action) {
  return (0, _extends3.default)({}, state, {
    items: action.items
  });
};

var toggle = function toggle(state, action) {
  return (0, _extends3.default)({}, state, {
    items: state.items.map(function (item, index) {
      if (index !== action.index) return item;
      return (0, _extends3.default)({}, item, {
        checked: !item.checked
      });
    })
  });
};

var move = function move(state, action) {
  return (0, _extends3.default)({}, state, {
    items: action.from < action.to ? [].concat((0, _toConsumableArray3.default)(state.items.slice(0, action.from)), (0, _toConsumableArray3.default)(state.items.slice(action.from + 1, action.to + 1)), [state.items[action.from]], (0, _toConsumableArray3.default)(state.items.slice(action.to + 1))) : [].concat((0, _toConsumableArray3.default)(state.items.slice(0, action.to)), [state.items[action.from]], (0, _toConsumableArray3.default)(state.items.slice(action.to, action.from)), (0, _toConsumableArray3.default)(state.items.slice(action.from + 1)))
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET':
      return set(state, action);

    case 'TOGGLE':
      return toggle(state, action);

    case 'MOVE':
      return move(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsIml0ZW1zIiwic2V0Iiwic3RhdGUiLCJhY3Rpb24iLCJ0b2dnbGUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjaGVja2VkIiwibW92ZSIsImZyb20iLCJ0byIsInNsaWNlIiwicmVkdWNlciIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLFNBQU87QUFEYSxDQUF0Qjs7QUFJQSxJQUFNQyxNQUFNLFNBQU5BLEdBQU0sQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1BELEtBRE87QUFFVkYsV0FBT0csT0FBT0g7QUFGSjtBQUFBLENBQVo7O0FBS0EsSUFBTUksU0FBUyxTQUFUQSxNQUFTLENBQUNGLEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNWRCxLQURVO0FBRWJGLFdBQU9FLE1BQU1GLEtBQU4sQ0FBWUssR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDdEMsVUFBR0EsVUFBVUosT0FBT0ksS0FBcEIsRUFBMkIsT0FBT0QsSUFBUDtBQUMzQix3Q0FDS0EsSUFETDtBQUVFRSxpQkFBUyxDQUFDRixLQUFLRTtBQUZqQjtBQUlELEtBTk07QUFGTTtBQUFBLENBQWY7O0FBV0EsSUFBTUMsT0FBTyxTQUFQQSxJQUFPLENBQUNQLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUM5QixvQ0FDS0QsS0FETDtBQUVFRixXQUFRRyxPQUFPTyxJQUFQLEdBQWNQLE9BQU9RLEVBQXRCLDhDQUNGVCxNQUFNRixLQUFOLENBQVlZLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJULE9BQU9PLElBQTVCLENBREUsb0NBRUZSLE1BQU1GLEtBQU4sQ0FBWVksS0FBWixDQUFrQlQsT0FBT08sSUFBUCxHQUFjLENBQWhDLEVBQW1DUCxPQUFPUSxFQUFQLEdBQVksQ0FBL0MsQ0FGRSxJQUdMVCxNQUFNRixLQUFOLENBQVlHLE9BQU9PLElBQW5CLENBSEssb0NBSUZSLE1BQU1GLEtBQU4sQ0FBWVksS0FBWixDQUFrQlQsT0FBT1EsRUFBUCxHQUFZLENBQTlCLENBSkUsZ0RBTUZULE1BQU1GLEtBQU4sQ0FBWVksS0FBWixDQUFrQixDQUFsQixFQUFxQlQsT0FBT1EsRUFBNUIsQ0FORSxJQU9MVCxNQUFNRixLQUFOLENBQVlHLE9BQU9PLElBQW5CLENBUEssb0NBUUZSLE1BQU1GLEtBQU4sQ0FBWVksS0FBWixDQUFrQlQsT0FBT1EsRUFBekIsRUFBNkJSLE9BQU9PLElBQXBDLENBUkUsb0NBU0ZSLE1BQU1GLEtBQU4sQ0FBWVksS0FBWixDQUFrQlQsT0FBT08sSUFBUCxHQUFjLENBQWhDLENBVEU7QUFGVDtBQWNELENBZkQ7O0FBaUJBLElBQU1HLFVBQVUsU0FBVkEsT0FBVSxHQUFtQztBQUFBLE1BQWxDWCxLQUFrQyx1RUFBMUJILGFBQTBCO0FBQUEsTUFBWEksTUFBVzs7O0FBRWpELFVBQVFBLE9BQU9XLElBQWY7O0FBRUEsU0FBSyxLQUFMO0FBQ0UsYUFBT2IsSUFBSUMsS0FBSixFQUFXQyxNQUFYLENBQVA7O0FBRUYsU0FBSyxRQUFMO0FBQ0UsYUFBT0MsT0FBT0YsS0FBUCxFQUFjQyxNQUFkLENBQVA7O0FBRUYsU0FBSyxNQUFMO0FBQ0UsYUFBT00sS0FBS1AsS0FBTCxFQUFZQyxNQUFaLENBQVA7O0FBRUY7QUFDRSxhQUFPRCxLQUFQO0FBWkY7QUFlRCxDQWpCRDs7a0JBbUJlVyxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBpdGVtczogW11cbn1cblxuY29uc3Qgc2V0ID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBpdGVtczogYWN0aW9uLml0ZW1zXG59KVxuXG5jb25zdCB0b2dnbGUgPSAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgLi4uc3RhdGUsXG4gIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYoaW5kZXggIT09IGFjdGlvbi5pbmRleCkgcmV0dXJuIGl0ZW1cbiAgICByZXR1cm4ge1xuICAgICAgLi4uaXRlbSxcbiAgICAgIGNoZWNrZWQ6ICFpdGVtLmNoZWNrZWRcbiAgICB9XG4gIH0pXG59KVxuXG5jb25zdCBtb3ZlID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBpdGVtczogKGFjdGlvbi5mcm9tIDwgYWN0aW9uLnRvKSA/IFtcbiAgICAgIC4uLnN0YXRlLml0ZW1zLnNsaWNlKDAsIGFjdGlvbi5mcm9tKSxcbiAgICAgIC4uLnN0YXRlLml0ZW1zLnNsaWNlKGFjdGlvbi5mcm9tICsgMSwgYWN0aW9uLnRvICsgMSksXG4gICAgICBzdGF0ZS5pdGVtc1thY3Rpb24uZnJvbV0sXG4gICAgICAuLi5zdGF0ZS5pdGVtcy5zbGljZShhY3Rpb24udG8gKyAxKVxuICAgIF0gOiBbXG4gICAgICAuLi5zdGF0ZS5pdGVtcy5zbGljZSgwLCBhY3Rpb24udG8pLFxuICAgICAgc3RhdGUuaXRlbXNbYWN0aW9uLmZyb21dLFxuICAgICAgLi4uc3RhdGUuaXRlbXMuc2xpY2UoYWN0aW9uLnRvLCBhY3Rpb24uZnJvbSksXG4gICAgICAuLi5zdGF0ZS5pdGVtcy5zbGljZShhY3Rpb24uZnJvbSArIDEpXG4gICAgXVxuICB9XG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cbiAgY2FzZSAnU0VUJzpcbiAgICByZXR1cm4gc2V0KHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnVE9HR0xFJzpcbiAgICByZXR1cm4gdG9nZ2xlKHN0YXRlLCBhY3Rpb24pXG5cbiAgY2FzZSAnTU9WRSc6XG4gICAgcmV0dXJuIG1vdmUoc3RhdGUsIGFjdGlvbilcblxuICBkZWZhdWx0OlxuICAgIHJldHVybiBzdGF0ZVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlclxuIl19