'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _collection = require('./collection');

var _collection2 = _interopRequireDefault(_collection);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _selectors = require('./selectors');

var selectors = _interopRequireWildcard(_selectors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.collection',
  component: _collection2.default,
  reducer: _reducer2.default,
  selectors: selectors,
  actions: actions
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiYWN0aW9ucyIsInNlbGVjdG9ycyIsIm5hbWVzcGFjZSIsImNvbXBvbmVudCIsImNvbGxlY3Rpb24iLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLE87O0FBQ1o7O0lBQVlDLFM7Ozs7OztrQkFFRywrQkFBUTtBQUNyQkMsYUFBVyxvQkFEVTtBQUVyQkMsYUFBV0Msb0JBRlU7QUFHckJDLDRCQUhxQjtBQUlyQkosc0JBSnFCO0FBS3JCRDtBQUxxQixDQUFSLEMiLCJmaWxlIjoidW5rbm93biIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZhY3RvcnkgfSBmcm9tICdyZWR1eC1ydWJiZXJzdGFtcCdcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcidcbmltcG9ydCBjb2xsZWN0aW9uIGZyb20gJy4vY29sbGVjdGlvbidcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBGYWN0b3J5KHtcbiAgbmFtZXNwYWNlOiAncmVmcmFtZS5jb2xsZWN0aW9uJyxcbiAgY29tcG9uZW50OiBjb2xsZWN0aW9uLFxuICByZWR1Y2VyLFxuICBzZWxlY3RvcnMsXG4gIGFjdGlvbnNcbn0pXG4iXX0=