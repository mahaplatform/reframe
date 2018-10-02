'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _tray = require('./tray');

var _tray2 = _interopRequireDefault(_tray);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Singleton)({
  namespace: 'reframe.tray',
  component: _tray2.default,
  reducer: _reducer2.default,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsInRyYXkiLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLE87Ozs7OztrQkFFRyxpQ0FBVTtBQUN2QkMsYUFBVyxjQURZO0FBRXZCQyxhQUFXQyxjQUZZO0FBR3ZCQyw0QkFIdUI7QUFJdkJKO0FBSnVCLENBQVYsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2luZ2xldG9uIH0gZnJvbSAncmVkdXgtcnViYmVyc3RhbXAnXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInXG5pbXBvcnQgdHJheSBmcm9tICcuL3RyYXknXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgU2luZ2xldG9uKHtcbiAgbmFtZXNwYWNlOiAncmVmcmFtZS50cmF5JyxcbiAgY29tcG9uZW50OiB0cmF5LFxuICByZWR1Y2VyLFxuICBhY3Rpb25zXG59KVxuIl19