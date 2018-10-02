'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _filefield = require('./filefield');

var _filefield2 = _interopRequireDefault(_filefield);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _selectors = require('./selectors');

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.filefield',
  component: _filefield2.default,
  reducer: _reducer2.default,
  actions: actions,
  selectors: selectors
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsInNlbGVjdG9ycyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsImZpbGVmaWVsZCIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsTzs7QUFDWjs7SUFBWUMsUzs7Ozs7O2tCQUVHLCtCQUFRO0FBQ3JCQyxhQUFXLG1CQURVO0FBRXJCQyxhQUFXQyxtQkFGVTtBQUdyQkMsNEJBSHFCO0FBSXJCTCxrQkFKcUI7QUFLckJDO0FBTHFCLENBQVIsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjdG9yeSB9IGZyb20gJ3JlZHV4LXJ1YmJlcnN0YW1wJ1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2VyJ1xuaW1wb3J0IGZpbGVmaWVsZCBmcm9tICcuL2ZpbGVmaWVsZCdcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBGYWN0b3J5KHtcbiAgbmFtZXNwYWNlOiAncmVmcmFtZS5maWxlZmllbGQnLFxuICBjb21wb25lbnQ6IGZpbGVmaWVsZCxcbiAgcmVkdWNlcixcbiAgYWN0aW9ucyxcbiAgc2VsZWN0b3JzXG59KVxuIl19