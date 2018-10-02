'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _modal = require('./modal');

var _modal2 = _interopRequireDefault(_modal);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Singleton)({
  namespace: 'reframe.modal',
  component: _modal2.default,
  reducer: _reducer2.default,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsIm1vZGFsIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxPOzs7Ozs7a0JBRUcsaUNBQVU7QUFDdkJDLGFBQVcsZUFEWTtBQUV2QkMsYUFBV0MsZUFGWTtBQUd2QkMsNEJBSHVCO0FBSXZCSjtBQUp1QixDQUFWLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNpbmdsZXRvbiB9IGZyb20gJ3JlZHV4LXJ1YmJlcnN0YW1wJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xldG9uKHtcbiAgbmFtZXNwYWNlOiAncmVmcmFtZS5tb2RhbCcsXG4gIGNvbXBvbmVudDogbW9kYWwsXG4gIHJlZHVjZXIsXG4gIGFjdGlvbnNcbn0pXG4iXX0=