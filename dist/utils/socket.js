'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _faye = require('faye');

var _faye2 = _interopRequireDefault(_faye);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Socket = function () {
  function Socket() {
    _classCallCheck(this, Socket);

    this.client = new _faye2.default.Client(_config2.default.get('socket.host') + '/faye');
    this.subscriptions = {};
  }

  _createClass(Socket, [{
    key: 'subscribe',
    value: function subscribe(channel, callback) {
      this.subscriptions[channel] = this.client.subscribe(channel, callback);
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(channel) {
      this.client.unsubscribe(channel, this.subscriptions[channel]);
      this.subscriptions.delete(channel);
    }
  }]);

  return Socket;
}();

var socket = new Socket();

exports.default = socket;