'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchResourceFailure = exports.fetchResourceSuccess = exports.fetchResourceRequest = exports.fetchResource = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fetchResource = exports.fetchResource = function fetchResource(cid, prop, endpoint) {
  return _api2.default.get({
    cid: cid,
    endpoint: endpoint,
    request: fetchResourceRequest,
    success: fetchResourceSuccess(prop),
    failure: fetchResourceFailure
  });
};

var fetchResourceRequest = exports.fetchResourceRequest = function fetchResourceRequest(request) {
  return {
    type: actionTypes.FETCH_RESOURCE_REQUEST,
    cid: request.cid
  };
};

var fetchResourceSuccess = exports.fetchResourceSuccess = function fetchResourceSuccess(prop) {
  return function (response) {
    return {
      type: actionTypes.FETCH_RESOURCE_SUCCESS,
      cid: response.cid,
      result: response.entity,
      prop: prop
    };
  };
};

var fetchResourceFailure = exports.fetchResourceFailure = function fetchResourceFailure(response) {
  return {
    type: actionTypes.FETCH_RESOURCE_FAILURE,
    cid: response.cid,
    error: response.entity
  };
};