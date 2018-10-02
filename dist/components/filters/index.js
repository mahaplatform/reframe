'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _filters = require('./filters');

var _filters2 = _interopRequireDefault(_filters);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _selectors = require('./selectors');

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filters = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.filters',
  component: _filters2.default,
  reducer: _reducer2.default,
  actions: actions,
  selectors: selectors
});

exports.default = Filters;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsInNlbGVjdG9ycyIsIkZpbHRlcnMiLCJuYW1lc3BhY2UiLCJjb21wb25lbnQiLCJmaWx0ZXJzIiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxPOztBQUNaOztJQUFZQyxTOzs7Ozs7QUFFWixJQUFNQyxVQUFVLCtCQUFRO0FBQ3RCQyxhQUFXLGlCQURXO0FBRXRCQyxhQUFXQyxpQkFGVztBQUd0QkMsNEJBSHNCO0FBSXRCTixrQkFKc0I7QUFLdEJDO0FBTHNCLENBQVIsQ0FBaEI7O2tCQVFlQyxPIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGYWN0b3J5IH0gZnJvbSAncmVkdXgtcnViYmVyc3RhbXAnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgZmlsdGVycyBmcm9tICcuL2ZpbHRlcnMnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycydcblxuY29uc3QgRmlsdGVycyA9IEZhY3Rvcnkoe1xuICBuYW1lc3BhY2U6ICdyZWZyYW1lLmZpbHRlcnMnLFxuICBjb21wb25lbnQ6IGZpbHRlcnMsXG4gIHJlZHVjZXIsXG4gIGFjdGlvbnMsXG4gIHNlbGVjdG9yc1xufSlcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyc1xuIl19