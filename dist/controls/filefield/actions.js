'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadProcessFailure = exports.uploadProcessSuccess = exports.uploadProcessRequest = exports.uploadProcess = undefined;
exports.addFile = addFile;
exports.uploadBegin = uploadBegin;
exports.uploadProgress = uploadProgress;
exports.uploadSuccess = uploadSuccess;
exports.uploadFailure = uploadFailure;
exports.removeFile = removeFile;
exports.changeFile = changeFile;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _api = require('../../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addFile(cid, totalChunks) {
  return {
    type: actionTypes.ADD_FILE,
    cid: cid,
    totalChunks: totalChunks
  };
}

function uploadBegin(cid) {
  return {
    type: actionTypes.UPLOAD_BEGIN,
    cid: cid
  };
}

function uploadProgress(cid) {
  return {
    type: actionTypes.UPLOAD_PROGRESS,
    cid: cid
  };
}

/* RECORDS */

var uploadProcess = exports.uploadProcess = function uploadProcess(cid, upload_id) {
  return _api2.default.patch({
    cid: cid,
    params: {
      upload_id: upload_id
    },
    endpoint: '/admin/uploads/chunks',
    request: uploadProcessRequest,
    success: uploadProcessSuccess,
    failure: uploadProcessFailure
  });
};

var uploadProcessRequest = exports.uploadProcessRequest = function uploadProcessRequest(request) {
  return {
    type: actionTypes.UPLOAD_PROCESS_REQUEST,
    cid: request.cid
  };
};

var uploadProcessSuccess = exports.uploadProcessSuccess = function uploadProcessSuccess(response) {
  return {
    type: actionTypes.UPLOAD_PROCESS_SUCCESS,
    cid: response.cid,
    file: response.entity
  };
};

var uploadProcessFailure = exports.uploadProcessFailure = function uploadProcessFailure(response) {
  return {
    type: actionTypes.UPLOAD_PROCESS_FAILURE,
    cid: response.cid,
    error: response.entity
  };
};

function uploadSuccess(cid, file) {
  return {
    type: actionTypes.UPLOAD_SUCCESS,
    cid: cid,
    file: file
  };
}

function uploadFailure(cid) {
  return {
    type: actionTypes.UPLOAD_FAILURE,
    cid: cid
  };
}

function removeFile(cid) {
  return {
    type: actionTypes.REMOVE_FILE,
    cid: cid
  };
}

function changeFile(cid) {
  return {
    type: actionTypes.CHANGE_FILE,
    cid: cid
  };
}