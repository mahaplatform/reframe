'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = require('history');

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _createMemoryHistory = require('history/lib/createMemoryHistory');

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.env.NODE_ENV === 'test') {
  var history = (0, _history.useQueries)(_createMemoryHistory2.default)();
} else {
  var history = (0, _history.useQueries)(_createBrowserHistory2.default)();
}

exports.default = history;