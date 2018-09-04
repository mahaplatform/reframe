'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_VALUE = {
  files: [],
  status: 'pending'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case 'SET_READY':
      return (0, _extends3.default)({}, state, {
        status: 'ready'
      });

    case 'LOAD_FILES_SUCCESS':
      return (0, _extends3.default)({}, state, {
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
      return (0, _extends3.default)({}, state, {
        files: _lodash2.default.find(state.files, function (file) {
          return file.uniqueIdentifier === action.uniqueIdentifier;
        }) ? state.files : [].concat((0, _toConsumableArray3.default)(state.files), [{
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
      return (0, _extends3.default)({}, state, {
        status: 'uploading'
      });

    case 'UPLOAD_PROGRESS':
      return (0, _extends3.default)({}, state, {
        files: state.files.map(function (file) {
          return file.uniqueIdentifier === action.uniqueIdentifier ? (0, _extends3.default)({}, file, {
            status: 'uploading',
            progress: Math.floor(action.progress * 100),
            uploadedChunks: state.uploadedChunks + 1
          }) : file;
        })
      });

    case 'UPLOAD_PROCESS_REQUEST':
      return (0, _extends3.default)({}, state, {
        status: 'processing'
      });

    case 'UPLOAD_PROCESS_SUCCESS':
      return (0, _extends3.default)({}, state, {
        status: 'success'
      });

    case 'UPLOAD_SUCCESS':
      return (0, _extends3.default)({}, state, {
        files: state.files.map(function (file) {
          return (0, _extends3.default)({}, file, {
            asset: file.uniqueIdentifier === action.uniqueIdentifier ? action.asset : file.asset,
            status: file.uniqueIdentifier === action.uniqueIdentifier ? 'success' : file.status
          });
        })
      });

    case 'UPLOAD_PROCESS_FAILURE':
    case 'UPLOAD_FAILED':
      return (0, _extends3.default)({}, state, {
        status: 'failed'
      });

    case 'REMOVE_FILE':
      return (0, _extends3.default)({}, state, {
        files: [].concat((0, _toConsumableArray3.default)(state.files.slice(0, action.index)), (0, _toConsumableArray3.default)(state.files.slice(action.index + 1)))
      });

    case 'UPLOAD_COMPLETE':
      return (0, _extends3.default)({}, state, {
        status: 'ready'
      });

    default:
      return state;

  }
};