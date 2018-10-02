'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _colorfield = require('./colorfield');

var _colorfield2 = _interopRequireDefault(_colorfield);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.colorfield',
  component: _colorfield2.default,
  reducer: _reducer2.default,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsImNvbG9yZmllbGQiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLE87Ozs7OztrQkFFRywrQkFBUTtBQUNyQkMsYUFBVyxvQkFEVTtBQUVyQkMsYUFBV0Msb0JBRlU7QUFHckJDLDRCQUhxQjtBQUlyQko7QUFKcUIsQ0FBUixDIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWN0b3J5IH0gZnJvbSAncmVkdXgtcnViYmVyc3RhbXAnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgY29sb3JmaWVsZCBmcm9tICcuL2NvbG9yZmllbGQnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeSh7XG4gIG5hbWVzcGFjZTogJ3JlZnJhbWUuY29sb3JmaWVsZCcsXG4gIGNvbXBvbmVudDogY29sb3JmaWVsZCxcbiAgcmVkdWNlcixcbiAgYWN0aW9uc1xufSlcbiJdfQ==