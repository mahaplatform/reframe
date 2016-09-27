'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _rest = require('rest');

var _rest2 = _interopRequireDefault(_rest);

var _mime = require('rest/interceptor/mime');

var _mime2 = _interopRequireDefault(_mime);

var _defaultRequest = require('rest/interceptor/defaultRequest');

var _defaultRequest2 = _interopRequireDefault(_defaultRequest);

var _errorCode = require('rest/interceptor/errorCode');

var _errorCode2 = _interopRequireDefault(_errorCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
  function Api() {
    _classCallCheck(this, Api);

    this.client = _rest2.default.wrap(_mime2.default).wrap(_defaultRequest2.default).wrap(_errorCode2.default);
  }

  _createClass(Api, [{
    key: 'get',
    value: function get(options) {
      options['method'] = 'GET';
      return this.request(options);
    }
  }, {
    key: 'patch',
    value: function patch(options) {
      options['method'] = 'PATCH';
      return this.request(options);
    }
  }, {
    key: 'post',
    value: function post(options) {
      options['method'] = 'POST';
      return this.request(options);
    }
  }, {
    key: 'destroy',
    value: function destroy(options) {
      options['method'] = 'DELETE';
      return this.request(options);
    }
  }, {
    key: 'request',
    value: function request(options) {
      var _this = this;

      options.requestCallback = options.request ? options.request : function () {};
      options.successCallback = options.success ? options.success : function () {};
      options.failureCallback = options.failure ? options.failure : function () {};
      var config = {
        method: options.method,
        path: this.path(options.endpoint),
        headers: { 'Content-Type': 'application/json' },
        mixin: { withCredentials: true }
      };
      if (options.params) {
        if (options.method == 'GET') {
          config.params = options.params;
        } else {
          config.entity = options.params;
        }
      }
      return function (dispatch) {

        var request = {};
        if (options.cid) {
          request.cid = options.cid;
        }
        if (options.params) {
          request.params = options.params;
        }
        dispatch(options.requestCallback(request));

        return _this.client(config).then(function (response) {
          return response.entity;
        }).then(function (json) {

          var success = {
            entity: json
          };
          if (options.cid) {
            success.cid = options.cid;
          }
          dispatch(options.successCallback(success));
        }, function (response) {

          var failure = {
            entity: response.entity
          };
          if (options.cid) {
            failure.cid = options.cid;
          }
          dispatch(options.errorCallback(failure));
        });
      };
    }
  }, {
    key: 'path',
    value: function path(endpoint) {
      return _config2.default.get('api.host') + endpoint;
    }
  }]);

  return Api;
}();

var api = new Api();

exports.default = api;