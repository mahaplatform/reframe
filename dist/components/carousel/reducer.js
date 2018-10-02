'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = {
  direction: 'left',
  active: 0,
  total: 0
};

var setTotal = function setTotal(state, action) {
  return (0, _extends3.default)({}, state, {
    total: action.total
  });
};

var previous = function previous(state, action) {
  return (0, _extends3.default)({}, state, {
    direction: 'right',
    active: state.active === 0 ? state.total - 1 : state.active - 1
  });
};

var next = function next(state, action) {
  return (0, _extends3.default)({}, state, {
    direction: 'left',
    active: state.active === state.total - 1 ? 0 : state.active + 1
  });
};

var goto = function goto(state, action) {
  return (0, _extends3.default)({}, state, {
    direction: action.index > state.index || state.index === state.total && action.index === 0 ? 'left' : 'right',
    active: action.index
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_TOTAL':
      return setTotal(state, action);

    case 'PREVIOUS':
      return previous(state, action);

    case 'NEXT':
      return next(state, action);

    case 'GOTO':
      return goto(state, action);

    default:
      return state;
  }
};

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsImRpcmVjdGlvbiIsImFjdGl2ZSIsInRvdGFsIiwic2V0VG90YWwiLCJzdGF0ZSIsImFjdGlvbiIsInByZXZpb3VzIiwibmV4dCIsImdvdG8iLCJpbmRleCIsInJlZHVjZXIiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLGFBQVcsTUFEUztBQUVwQkMsVUFBUSxDQUZZO0FBR3BCQyxTQUFPO0FBSGEsQ0FBdEI7O0FBTUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNaRCxLQURZO0FBRWZGLFdBQU9HLE9BQU9IO0FBRkM7QUFBQSxDQUFqQjs7QUFLQSxJQUFNSSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0YsS0FBRCxFQUFRQyxNQUFSO0FBQUEsb0NBQ1pELEtBRFk7QUFFZkosZUFBVyxPQUZJO0FBR2ZDLFlBQVFHLE1BQU1ILE1BQU4sS0FBaUIsQ0FBakIsR0FBcUJHLE1BQU1GLEtBQU4sR0FBYyxDQUFuQyxHQUF3Q0UsTUFBTUgsTUFBTixHQUFlO0FBSGhEO0FBQUEsQ0FBakI7O0FBTUEsSUFBTU0sT0FBTyxTQUFQQSxJQUFPLENBQUNILEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNSRCxLQURRO0FBRVhKLGVBQVcsTUFGQTtBQUdYQyxZQUFRRyxNQUFNSCxNQUFOLEtBQWlCRyxNQUFNRixLQUFOLEdBQWMsQ0FBL0IsR0FBbUMsQ0FBbkMsR0FBdUNFLE1BQU1ILE1BQU4sR0FBZTtBQUhuRDtBQUFBLENBQWI7O0FBTUEsSUFBTU8sT0FBTyxTQUFQQSxJQUFPLENBQUNKLEtBQUQsRUFBUUMsTUFBUjtBQUFBLG9DQUNSRCxLQURRO0FBRVhKLGVBQVlLLE9BQU9JLEtBQVAsR0FBZUwsTUFBTUssS0FBckIsSUFBK0JMLE1BQU1LLEtBQU4sS0FBZ0JMLE1BQU1GLEtBQXRCLElBQStCRyxPQUFPSSxLQUFQLEtBQWlCLENBQWhGLEdBQXNGLE1BQXRGLEdBQStGLE9BRi9GO0FBR1hSLFlBQVFJLE9BQU9JO0FBSEo7QUFBQSxDQUFiOztBQU9BLElBQU1DLFVBQVUsU0FBVkEsT0FBVSxHQUFtQztBQUFBLE1BQWxDTixLQUFrQyx1RUFBMUJMLGFBQTBCO0FBQUEsTUFBWE0sTUFBVzs7O0FBRWpELFVBQVFBLE9BQU9NLElBQWY7O0FBRUEsU0FBSyxXQUFMO0FBQ0UsYUFBT1IsU0FBU0MsS0FBVCxFQUFnQkMsTUFBaEIsQ0FBUDs7QUFFRixTQUFLLFVBQUw7QUFDRSxhQUFPQyxTQUFTRixLQUFULEVBQWdCQyxNQUFoQixDQUFQOztBQUVGLFNBQUssTUFBTDtBQUNFLGFBQU9FLEtBQUtILEtBQUwsRUFBWUMsTUFBWixDQUFQOztBQUVGLFNBQUssTUFBTDtBQUNFLGFBQU9HLEtBQUtKLEtBQUwsRUFBWUMsTUFBWixDQUFQOztBQUVGO0FBQ0UsYUFBT0QsS0FBUDtBQWZGO0FBa0JELENBcEJEOztrQkFzQmVNLE8iLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIGRpcmVjdGlvbjogJ2xlZnQnLFxuICBhY3RpdmU6IDAsXG4gIHRvdGFsOiAwXG59XG5cbmNvbnN0IHNldFRvdGFsID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICB0b3RhbDogYWN0aW9uLnRvdGFsXG59KVxuXG5jb25zdCBwcmV2aW91cyA9IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAuLi5zdGF0ZSxcbiAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICBhY3RpdmU6IHN0YXRlLmFjdGl2ZSA9PT0gMCA/IHN0YXRlLnRvdGFsIC0gMSA6ICBzdGF0ZS5hY3RpdmUgLSAxXG59KVxuXG5jb25zdCBuZXh0ID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBkaXJlY3Rpb246ICdsZWZ0JyxcbiAgYWN0aXZlOiBzdGF0ZS5hY3RpdmUgPT09IHN0YXRlLnRvdGFsIC0gMSA/IDAgOiBzdGF0ZS5hY3RpdmUgKyAxXG59KVxuXG5jb25zdCBnb3RvID0gKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gIC4uLnN0YXRlLFxuICBkaXJlY3Rpb246IChhY3Rpb24uaW5kZXggPiBzdGF0ZS5pbmRleCB8fCAoc3RhdGUuaW5kZXggPT09IHN0YXRlLnRvdGFsICYmIGFjdGlvbi5pbmRleCA9PT0gMCkpID8gJ2xlZnQnIDogJ3JpZ2h0JyxcbiAgYWN0aXZlOiBhY3Rpb24uaW5kZXhcbn0pXG5cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdTRVRfVE9UQUwnOlxuICAgIHJldHVybiBzZXRUb3RhbChzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ1BSRVZJT1VTJzpcbiAgICByZXR1cm4gcHJldmlvdXMoc3RhdGUsIGFjdGlvbilcblxuICBjYXNlICdORVhUJzpcbiAgICByZXR1cm4gbmV4dChzdGF0ZSwgYWN0aW9uKVxuXG4gIGNhc2UgJ0dPVE8nOlxuICAgIHJldHVybiBnb3RvKHN0YXRlLCBhY3Rpb24pXG5cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGVcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJcbiJdfQ==