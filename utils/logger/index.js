'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: 'trap',
    value: function trap() {
      return process.env.NODE_ENV !== 'production';
    }
  }, {
    key: 'notice',
    value: function notice() {
      var _console;

      if (Logger.trap()) (_console = console).notice.apply(_console, arguments);
    }
  }, {
    key: 'info',
    value: function info() {
      var _console2;

      if (Logger.trap()) (_console2 = console).info.apply(_console2, arguments);
    }
  }, {
    key: 'log',
    value: function log() {
      var _console3;

      if (Logger.trap()) (_console3 = console).log.apply(_console3, arguments);
    }
  }, {
    key: 'error',
    value: function error() {
      var _console4;

      if (Logger.trap()) (_console4 = console).error.apply(_console4, arguments);
    }
  }, {
    key: 'warn',
    value: function warn() {
      var _console5;

      if (Logger.trap()) (_console5 = console).warn.apply(_console5, arguments);
    }
  }]);

  return Logger;
}();

exports.default = Logger;