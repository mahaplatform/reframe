'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var INITIAL_VALUE = {
  status: 'ready',
  file: null,
  totalChunks: 0,
  uploadedChunks: 0
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.ADD_FILE:
      return _extends({}, state, {
        status: 'added',
        uploadedChunks: 0,
        totalChunks: action.totalChunks
      });

    case actionTypes.UPLOAD_BEGIN:
      return _extends({}, state, {
        status: 'uploading'
      });

    case actionTypes.UPLOAD_PROGRESS:
      return _extends({}, state, {
        uploadedChunks: state.uploadedChunks + 1
      });

    case actionTypes.UPLOAD_PROCESS_REQUEST:
      return _extends({}, state, {
        status: 'processing'
      });

    case actionTypes.UPLOAD_PROCESS_SUCCESS:
    case actionTypes.UPLOAD_SUCCESS:
      return _extends({}, state, {
        status: 'success',
        file: action.file
      });

    case actionTypes.UPLOAD_PROCESS_FAILURE:
    case actionTypes.UPLOAD_FAILED:
      return _extends({}, state, {
        status: 'failed'
      });

    case actionTypes.REMOVE_FILE:
      return _extends({}, state, {
        status: 'ready'
      });

    case actionTypes.CHANGE_FILE:
      return _extends({}, state, {
        status: 'ready'
      });

    default:
      return state;

  }
};