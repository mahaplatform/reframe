'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _drawer = require('./drawer');

var _drawer2 = _interopRequireDefault(_drawer);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Singleton)({
  namespace: 'reframe.drawer',
  component: _drawer2.default,
  reducer: _reducer2.default,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsImRyYXdlciIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsTzs7Ozs7O2tCQUVHLGlDQUFVO0FBQ3ZCQyxhQUFXLGdCQURZO0FBRXZCQyxhQUFXQyxnQkFGWTtBQUd2QkMsNEJBSHVCO0FBSXZCSjtBQUp1QixDQUFWLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJ3JlZHV4LXJ1YmJlcnN0YW1wJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IGRyYXdlciBmcm9tICcuL2RyYXdlcidcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGV0b24oe1xuICBuYW1lc3BhY2U6ICdyZWZyYW1lLmRyYXdlcicsXG4gIGNvbXBvbmVudDogZHJhd2VyLFxuICByZWR1Y2VyLFxuICBhY3Rpb25zXG59KVxuIl19