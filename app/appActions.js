'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dismissFlashMessage = exports.clearFlashMessages = exports.showErrorMessage = exports.showSuccessMessage = exports.showInfoMessage = exports.showFlashMessage = exports.loadSession = undefined;

var _appActionTypes = require('./appActionTypes');

var _keys = require('when/keys');

var _keys2 = _interopRequireDefault(_keys);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loadSession = exports.loadSession = function loadSession(endpoint) {
  return function (dispatch) {
    var api = new _api2.default();
    _keys2.default.all({
      data: api.loadJSON(endpoint)
    }).tap(function (_ref) {
      var data = _ref.data;

      console.log(data);
      dispatch({
        type: _appActionTypes.LOAD_SESSION,
        session: data
      });
    }).then(function () {
      return dispatch({ type: _appActionTypes.SHOW_APPLICATION });
    }).catch(function (error) {
      console.error(error);
      dispatch({ type: _appActionTypes.SHOW_SESSION_ERROR });
    });
  };
};

var showFlashMessage = exports.showFlashMessage = function showFlashMessage(message, type) {
  return {
    type: _appActionTypes.SHOW_FLASH_MESSAGE,
    messageType: type,
    messageBody: message
  };
};

var showInfoMessage = exports.showInfoMessage = function showInfoMessage(message) {
  return showFlashMessage(message, 'info');
};
var showSuccessMessage = exports.showSuccessMessage = function showSuccessMessage(message) {
  return showFlashMessage(message, 'success');
};
var showErrorMessage = exports.showErrorMessage = function showErrorMessage(message) {
  return showFlashMessage(message, 'error');
};

var clearFlashMessages = exports.clearFlashMessages = function clearFlashMessages() {
  return {
    type: _appActionTypes.CLEAR_FLASH_MESSAGES
  };
};

var dismissFlashMessage = exports.dismissFlashMessage = function dismissFlashMessage(id) {
  return {
    type: _appActionTypes.DISMISS_FLASH_MESSAGE,
    id: id
  };
};

exports.default = {
  loadSession: loadSession,
  showFlashMessage: showFlashMessage,
  showInfoMessage: showInfoMessage,
  showSuccessMessage: showSuccessMessage,
  showErrorMessage: showErrorMessage,
  dismissFlashMessage: dismissFlashMessage,
  clearFlashMessages: clearFlashMessages
};