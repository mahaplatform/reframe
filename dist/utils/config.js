'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function () {
  function Config(config) {
    _classCallCheck(this, Config);

    this.config = config[process.env.NODE_ENV];
  }

  _createClass(Config, [{
    key: 'get',
    value: function get(key) {
      return _lodash2.default.get(this.config, key);
    }
  }]);

  return Config;
}();

// const configurations = require('../../../../../config/config')
// const config = new Config(configurations)
//
// export default config