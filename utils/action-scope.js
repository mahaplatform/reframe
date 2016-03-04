'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (actions, scope) {
  return _lodash2.default.mapValues(actions, function (f) {
    if (_lodash2.default.isFunction(f)) {
      return _lodash2.default.partial(f, scope);
    } else {
      return f;
    }
  });
};

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }