'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var setReady = exports.setReady = function setReady() {
  return {
    type: 'SET_READY'
  };
};

var loadFiles = exports.loadFiles = function loadFiles(endpoint, $ids) {
  return {
    type: 'API_REQUEST',
    method: 'GET',
    endpoint: endpoint,
    query: { $ids: $ids },
    request: 'LOAD_FILES_REQUEST',
    success: 'LOAD_FILES_SUCCESS',
    failure: 'LOAD_FILES_FAILURE'
  };
};

var addFile = exports.addFile = function addFile(uniqueIdentifier, fileName, fileSize, contentType, totalChunks) {
  return {
    type: 'ADD_FILE',
    uniqueIdentifier: uniqueIdentifier,
    fileName: fileName,
    fileSize: fileSize,
    contentType: contentType,
    totalChunks: totalChunks
  };
};

var uploadBegin = exports.uploadBegin = function uploadBegin() {
  return {
    type: 'UPLOAD_BEGIN'
  };
};

var uploadProgress = exports.uploadProgress = function uploadProgress(uniqueIdentifier, progress) {
  return {
    type: 'UPLOAD_PROGRESS',
    uniqueIdentifier: uniqueIdentifier,
    progress: progress
  };
};

var uploadSuccess = exports.uploadSuccess = function uploadSuccess(uniqueIdentifier, response) {
  return {
    type: 'UPLOAD_SUCCESS',
    uniqueIdentifier: uniqueIdentifier,
    asset: response.data
  };
};

var uploadFailure = exports.uploadFailure = function uploadFailure() {
  return {
    type: 'UPLOAD_FAILURE'
  };
};

var removeFile = exports.removeFile = function removeFile(uniqueIdentifier) {
  return {
    type: 'REMOVE_FILE',
    uniqueIdentifier: uniqueIdentifier
  };
};

var uploadComplete = exports.uploadComplete = function uploadComplete() {
  return {
    type: 'UPLOAD_COMPLETE'
  };
};