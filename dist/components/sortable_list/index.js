'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxRubberstamp = require('redux-rubberstamp');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _sortable_list = require('./sortable_list');

var _sortable_list2 = _interopRequireDefault(_sortable_list);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxRubberstamp.Factory)({
  namespace: 'reframe.sortable_list',
  component: _sortable_list2.default,
  reducer: _reducer2.default,
  actions: actions
});