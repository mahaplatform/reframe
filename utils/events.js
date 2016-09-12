'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swallow = swallow;

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function swallow(event) {
  _logger2.default.notice.apply(_logger2.default, ['Swallowed event '].concat(Array.prototype.slice.call(arguments)));
  event.preventDefault();
  event.stopPropagation();
  return false;
}