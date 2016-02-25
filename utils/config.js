'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appDefaults = {};

var globalConfig = {};

var Config = function () {
  function Config() {
    _classCallCheck(this, Config);
  }

  _createClass(Config, null, [{
    key: 'load',
    value: function load(cfg) {
      globalConfig = _lodash2.default.cloneDeep(cfg);
    }
  }, {
    key: 'get',
    value: function get(item, defaultValue) {
      return _lodash2.default.get(globalConfig, item, defaultValue);
    }
  }, {
    key: 'set',
    value: function set(path, item) {
      _lodash2.default.set(globalConfig, path, item);
    }
  }]);

  return Config;
}();

exports.default = Config;