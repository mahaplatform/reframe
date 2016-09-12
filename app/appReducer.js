'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createReducer;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _appActionTypes = require('./appActionTypes');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _random = require('../utils/random');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  status: 'LOADING',
  session: {},
  config: {},
  messages: [],
  user: {}
};

var createReducer = function createReducer(initialState, handlers) {
  return function () {
    var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
    var action = arguments[1];
    return _lodash2.default.invoke(handlers, action.type, state, action) || state;
  };
};

exports.default = createReducer(initialState, (_createReducer = {}, _defineProperty(_createReducer, _appActionTypes.LOAD_SESSION, function (state, _ref) {
  var session = _ref.session;
  var config = session.config;
  var user = session.user;

  return _extends({}, state, {
    session: session,
    config: config,
    user: user
  });
}), _defineProperty(_createReducer, _appActionTypes.SHOW_APPLICATION, function (state) {
  return _extends({}, state, {
    status: 'READY'
  });
}), _defineProperty(_createReducer, _appActionTypes.SHOW_SESSION_ERROR, function (state) {
  return _extends({}, state, {
    status: 'ERROR'
  });
}), _defineProperty(_createReducer, _appActionTypes.SHOW_FLASH_MESSAGE, function (state, _ref2) {
  var messageType = _ref2.messageType;
  var messageBody = _ref2.messageBody;

  return _extends({}, state, {
    messages: [{ id: (0, _random.uid)(), messageType: messageType, messageBody: messageBody }].concat(_toConsumableArray(state.messages))
  });
}), _defineProperty(_createReducer, _appActionTypes.DISMISS_FLASH_MESSAGE, function (state, _ref3) {
  var id = _ref3.id;

  return _extends({}, state, {
    messages: _lodash2.default.reject(state.messages, { id: id })
  });
}), _defineProperty(_createReducer, _appActionTypes.CLEAR_FLASH_MESSAGES, function (state) {
  return _extends({}, state, {
    messages: []
  });
}), _createReducer));