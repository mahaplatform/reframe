'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _toggle_list = require('./toggle_list');

var _toggle_list2 = _interopRequireDefault(_toggle_list);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.toggle_list',
  component: _toggle_list2.default,
  reducer: _reducer2.default,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsInRvZ2dsZV9saXN0IiwicmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxPOzs7Ozs7a0JBRUcsK0JBQVE7QUFDckJDLGFBQVcscUJBRFU7QUFFckJDLGFBQVdDLHFCQUZVO0FBR3JCQyw0QkFIcUI7QUFJckJKO0FBSnFCLENBQVIsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjdG9yeSB9IGZyb20gJ3JlZHV4LXJ1YmJlcnN0YW1wJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IHRvZ2dsZV9saXN0IGZyb20gJy4vdG9nZ2xlX2xpc3QnXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeSh7XG4gIG5hbWVzcGFjZTogJ3JlZnJhbWUudG9nZ2xlX2xpc3QnLFxuICBjb21wb25lbnQ6IHRvZ2dsZV9saXN0LFxuICByZWR1Y2VyLFxuICBhY3Rpb25zXG59KVxuIl19