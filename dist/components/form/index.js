'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _selectors = require('./selectors');

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.form',
  component: _form2.default,
  reducer: _reducer2.default,
  actions: actions,
  selectors: selectors
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsInNlbGVjdG9ycyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsImZvcm0iLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLE87O0FBQ1o7O0lBQVlDLFM7Ozs7OztrQkFFRywrQkFBUTtBQUNyQkMsYUFBVyxjQURVO0FBRXJCQyxhQUFXQyxjQUZVO0FBR3JCQyw0QkFIcUI7QUFJckJMLGtCQUpxQjtBQUtyQkM7QUFMcUIsQ0FBUixDIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWN0b3J5IH0gZnJvbSAncmVkdXgtcnViYmVyc3RhbXAnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgZm9ybSBmcm9tICcuL2Zvcm0nXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycydcblxuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeSh7XG4gIG5hbWVzcGFjZTogJ3JlZnJhbWUuZm9ybScsXG4gIGNvbXBvbmVudDogZm9ybSxcbiAgcmVkdWNlcixcbiAgYWN0aW9ucyxcbiAgc2VsZWN0b3JzXG59KVxuIl19