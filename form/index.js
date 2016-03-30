'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('./core');

var _loop = function _loop(_key2) {
  if (_key2 === "default") return 'continue';
  Object.defineProperty(exports, _key2, {
    enumerable: true,
    get: function get() {
      return _core[_key2];
    }
  });
};

for (var _key2 in _core) {
  var _ret = _loop(_key2);

  if (_ret === 'continue') continue;
}

var _omni = require('./omni');

var _omni2 = _interopRequireDefault(_omni);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _omni2.default;