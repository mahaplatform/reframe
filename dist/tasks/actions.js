'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = exports.clear = exports.close = exports.open = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var open = exports.open = function open(items) {
  return {
    type: actionTypes.OPEN,
    items: items
  };
};

var close = exports.close = function close() {
  return {
    type: actionTypes.CLOSE
  };
};

var clear = exports.clear = function clear() {
  return {
    type: actionTypes.CLEAR
  };
};

var request = exports.request = function request(_ref) {
  var method = _ref.method,
      endpoint = _ref.endpoint,
      onSuccess = _ref.onSuccess,
      onFailure = _ref.onFailure;
  return {
    type: 'API_REQUEST',
    method: method,
    endpoint: endpoint,
    request: actionTypes.REQUEST_REQUEST,
    success: actionTypes.REQUEST_SUCCESS,
    failure: actionTypes.REQUEST_FAILURE,
    onSuccess: onSuccess,
    onFailure: onFailure
  };
};