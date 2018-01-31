'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_VALUE = {
  files: [],
  status: 'pending'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_READY':
      return _extends({}, state, {
        status: 'ready'
      });

    case 'LOAD_FILES_SUCCESS':
      return _extends({}, state, {
        status: 'ready',
        files: action.result.data.map(function (file) {
          return {
            fileName: file.file_name,
            fileSize: file.file_size,
            contentType: file.content_type,
            status: 'success',
            progress: 0,
            uploadedChunks: 0,
            totalChunks: action.chunks_total,
            asset: file
          };
        })
      });

    case 'ADD_FILE':
      return _extends({}, state, {
        files: _lodash2.default.find(state.files, function (file) {
          return file.uniqueIdentifier === action.uniqueIdentifier;
        }) ? state.files : [].concat(_toConsumableArray(state.files), [{
          uniqueIdentifier: action.uniqueIdentifier,
          fileName: action.fileName,
          fileSize: action.fileSize,
          contentType: action.contentType,
          status: 'added',
          progress: 0,
          uploadedChunks: 0,
          totalChunks: action.totalChunks
        }])
      });

    case 'UPLOAD_BEGIN':
      return _extends({}, state, {
        status: 'uploading'
      });

    case 'UPLOAD_PROGRESS':
      return _extends({}, state, {
        files: state.files.map(function (file) {
          return file.uniqueIdentifier === action.uniqueIdentifier ? _extends({}, file, {
            status: 'uploading',
            progress: Math.floor(action.progress * 100),
            uploadedChunks: state.uploadedChunks + 1
          }) : file;
        })
      });

    case 'UPLOAD_PROCESS_REQUEST':
      return _extends({}, state, {
        status: 'processing'
      });

    case 'UPLOAD_PROCESS_SUCCESS':
      return _extends({}, state, {
        status: 'success'
      });

    case 'UPLOAD_SUCCESS':
      return _extends({}, state, {
        files: state.files.map(function (file) {
          return _extends({}, file, {
            asset: file.uniqueIdentifier === action.uniqueIdentifier ? action.asset : file.asset,
            status: file.uniqueIdentifier === action.uniqueIdentifier ? 'success' : file.status
          });
        })
      });

    case 'UPLOAD_PROCESS_FAILURE':
    case 'UPLOAD_FAILED':
      return _extends({}, state, {
        status: 'failed'
      });

    case 'REMOVE_FILE':
      return _extends({}, state, {
        files: [].concat(_toConsumableArray(state.files.slice(0, action.index)), _toConsumableArray(state.files.slice(action.index + 1)))
      });

    case 'UPLOAD_COMPLETE':
      return _extends({}, state, {
        status: 'ready'
      });

    default:
      return state;

  }
};