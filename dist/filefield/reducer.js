'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var INITIAL_VALUE = {
  files: [],
  status: 'ready'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_VALUE;
  var action = arguments[1];


  switch (action.type) {

    case actionTypes.LOAD_FILES_SUCCESS:
      return _extends({}, state, {
        files: action.data.map(function (file) {
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

    case actionTypes.ADD_FILE:
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

    case actionTypes.UPLOAD_BEGIN:
      return _extends({}, state, {
        status: 'uploading'
      });

    case actionTypes.UPLOAD_PROGRESS:
      return _extends({}, state, {
        files: state.files.map(function (file) {
          return file.uniqueIdentifier === action.uniqueIdentifier ? _extends({}, file, {
            status: 'uploading',
            progress: Math.floor(action.progress * 100),
            uploadedChunks: state.uploadedChunks + 1
          }) : file;
        })
      });

    case actionTypes.UPLOAD_PROCESS_REQUEST:
      return _extends({}, state, {
        status: 'processing'
      });

    case actionTypes.UPLOAD_PROCESS_SUCCESS:
      return _extends({}, state, {
        status: 'success'
      });

    case actionTypes.UPLOAD_SUCCESS:
      return _extends({}, state, {
        files: state.files.map(function (file) {
          return _extends({}, file, {
            asset: action.asset,
            status: file.uniqueIdentifier === action.uniqueIdentifier ? 'success' : file.status
          });
        })
      });

    case actionTypes.UPLOAD_PROCESS_FAILURE:
    case actionTypes.UPLOAD_FAILED:
      return _extends({}, state, {
        status: 'failed'
      });

    case actionTypes.REMOVE_FILE:
      var index = _lodash2.default.findIndex(state.files, function (file) {
        return file.uniqueIdentifier === action.uniqueIdentifier;
      });
      return _extends({}, state, {
        files: [].concat(_toConsumableArray(state.files.slice(0, index)), _toConsumableArray(state.files.slice(index + 1)))
      });

    case actionTypes.UPLOAD_COMPLETE:
      return _extends({}, state, {
        status: 'ready'
      });

    default:
      return state;

  }
};