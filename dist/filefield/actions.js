'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadComplete = exports.removeFile = exports.uploadFailure = exports.uploadSuccess = exports.uploadProgress = exports.uploadBegin = exports.addFile = exports.loadFiles = exports.setReady = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setReady = exports.setReady = function setReady() {
  return {
    type: actionTypes.SET_READY
  };
};

var loadFiles = exports.loadFiles = function loadFiles(endpoint, $ids) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    query: { $ids: $ids },
    request: actionTypes.LOAD_FILES_REQUEST,
    success: actionTypes.LOAD_FILES_SUCCESS,
    failure: actionTypes.LOAD_FILES_FAILURE
  };
};

var addFile = exports.addFile = function addFile(uniqueIdentifier, fileName, fileSize, contentType, totalChunks) {
  return {
    type: actionTypes.ADD_FILE,
    uniqueIdentifier: uniqueIdentifier,
    fileName: fileName,
    fileSize: fileSize,
    contentType: contentType,
    totalChunks: totalChunks
  };
};

var uploadBegin = exports.uploadBegin = function uploadBegin() {
  return {
    type: actionTypes.UPLOAD_BEGIN
  };
};

var uploadProgress = exports.uploadProgress = function uploadProgress(uniqueIdentifier, progress) {
  return {
    type: actionTypes.UPLOAD_PROGRESS,
    uniqueIdentifier: uniqueIdentifier,
    progress: progress
  };
};

var uploadSuccess = exports.uploadSuccess = function uploadSuccess(uniqueIdentifier, response) {
  return {
    type: actionTypes.UPLOAD_SUCCESS,
    uniqueIdentifier: uniqueIdentifier,
    asset: response.data
  };
};

var uploadFailure = exports.uploadFailure = function uploadFailure() {
  return {
    type: actionTypes.UPLOAD_FAILURE
  };
};

var removeFile = exports.removeFile = function removeFile(uniqueIdentifier) {
  return {
    type: actionTypes.REMOVE_FILE,
    uniqueIdentifier: uniqueIdentifier
  };
};

var uploadComplete = exports.uploadComplete = function uploadComplete() {
  return {
    type: actionTypes.UPLOAD_COMPLETE
  };
};