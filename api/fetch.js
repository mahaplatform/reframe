'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetch;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetch(url, options, client) {
  var api = new _index2.default(client);
  return api.loadJSON(url, options);
}