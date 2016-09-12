'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diceroll = undefined;
exports.uid = uid;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function uid() {
  return Math.floor(Math.random() * 999999999).toString(36);
}

var diceroll = exports.diceroll = function diceroll(p) {
  return _lodash2.default.flow(Math.random, function (i) {
    return i * 100;
  }, Math.floor, function (i) {
    return i <= p;
  })();
};