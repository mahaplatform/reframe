'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.button',
  component: _button2.default,
  reducer: _reducer2.default,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsImJ1dHRvbiIsInJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsTzs7Ozs7O2tCQUVHLCtCQUFRO0FBQ3JCQyxhQUFXLGdCQURVO0FBRXJCQyxhQUFXQyxnQkFGVTtBQUdyQkMsNEJBSHFCO0FBSXJCSjtBQUpxQixDQUFSLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY3RvcnkgfSBmcm9tICdyZWR1eC1ydWJiZXJzdGFtcCdcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCBidXR0b24gZnJvbSAnLi9idXR0b24nXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgRmFjdG9yeSh7XG4gIG5hbWVzcGFjZTogJ3JlZnJhbWUuYnV0dG9uJyxcbiAgY29tcG9uZW50OiBidXR0b24sXG4gIHJlZHVjZXIsXG4gIGFjdGlvbnNcbn0pXG4iXX0=