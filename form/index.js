'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('./core');

for (let _key in _core) {
  if (_key === "default") continue;
  Object.defineProperty(exports, _key, {
    enumerable: true,
    get: function () {
      return _core[_key];
    }
  });
}

var _omni = require('./omni');

var _omni2 = _interopRequireDefault(_omni);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _omni2.default;