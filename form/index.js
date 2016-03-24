'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('./core');

Object.keys(_core).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

var _omni = require('./omni');

var _omni2 = _interopRequireDefault(_omni);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _omni2.default;