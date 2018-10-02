'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _tabs = require('./tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.tabs',
  component: _tabs2.default,
  reducer: _reducer2.default,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsInRhYnMiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLE87Ozs7OztrQkFFRywrQkFBUTtBQUNyQkMsYUFBVyxjQURVO0FBRXJCQyxhQUFXQyxjQUZVO0FBR3JCQyw0QkFIcUI7QUFJckJKO0FBSnFCLENBQVIsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjdG9yeSB9IGZyb20gJ3JlZHV4LXJ1YmJlcnN0YW1wJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IHRhYnMgZnJvbSAnLi90YWJzJ1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5cbmV4cG9ydCBkZWZhdWx0IEZhY3Rvcnkoe1xuICBuYW1lc3BhY2U6ICdyZWZyYW1lLnRhYnMnLFxuICBjb21wb25lbnQ6IHRhYnMsXG4gIHJlZHVjZXIsXG4gIGFjdGlvbnNcbn0pXG4iXX0=