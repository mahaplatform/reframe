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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiSU5JVElBTF9WQUxVRSIsImZpbGVzIiwic3RhdHVzIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicmVzdWx0IiwiZGF0YSIsIm1hcCIsImZpbGVOYW1lIiwiZmlsZSIsImZpbGVfbmFtZSIsImZpbGVTaXplIiwiZmlsZV9zaXplIiwiY29udGVudFR5cGUiLCJjb250ZW50X3R5cGUiLCJwcm9ncmVzcyIsInVwbG9hZGVkQ2h1bmtzIiwidG90YWxDaHVua3MiLCJjaHVua3NfdG90YWwiLCJhc3NldCIsIl8iLCJmaW5kIiwidW5pcXVlSWRlbnRpZmllciIsIk1hdGgiLCJmbG9vciIsInNsaWNlIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQjtBQUNwQkMsU0FBTyxFQURhO0FBRXBCQyxVQUFRO0FBRlksQ0FBdEI7O2tCQUtlLFlBQW1DO0FBQUEsTUFBbENDLEtBQWtDLHVFQUExQkgsYUFBMEI7QUFBQSxNQUFYSSxNQUFXOzs7QUFFaEQsVUFBUUEsT0FBT0MsSUFBZjs7QUFFQSxTQUFLLFdBQUw7QUFDRSx3Q0FDS0YsS0FETDtBQUVFRCxnQkFBUTtBQUZWOztBQUtGLFNBQUssb0JBQUw7QUFDRSx3Q0FDS0MsS0FETDtBQUVFRCxnQkFBUSxPQUZWO0FBR0VELGVBQU9HLE9BQU9FLE1BQVAsQ0FBY0MsSUFBZCxDQUFtQkMsR0FBbkIsQ0FBdUI7QUFBQSxpQkFBUztBQUNyQ0Msc0JBQVVDLEtBQUtDLFNBRHNCO0FBRXJDQyxzQkFBVUYsS0FBS0csU0FGc0I7QUFHckNDLHlCQUFhSixLQUFLSyxZQUhtQjtBQUlyQ2Isb0JBQVEsU0FKNkI7QUFLckNjLHNCQUFVLENBTDJCO0FBTXJDQyw0QkFBZ0IsQ0FOcUI7QUFPckNDLHlCQUFhZCxPQUFPZSxZQVBpQjtBQVFyQ0MsbUJBQU9WO0FBUjhCLFdBQVQ7QUFBQSxTQUF2QjtBQUhUOztBQWVGLFNBQUssVUFBTDtBQUNFLHdDQUNLUCxLQURMO0FBRUVGLGVBQU9vQixpQkFBRUMsSUFBRixDQUFPbkIsTUFBTUYsS0FBYixFQUFvQixnQkFBUTtBQUFFLGlCQUFPUyxLQUFLYSxnQkFBTCxLQUEwQm5CLE9BQU9tQixnQkFBeEM7QUFBMEQsU0FBeEYsSUFBNEZwQixNQUFNRixLQUFsRyw4Q0FDRkUsTUFBTUYsS0FESixJQUVMO0FBQ0VzQiw0QkFBa0JuQixPQUFPbUIsZ0JBRDNCO0FBRUVkLG9CQUFVTCxPQUFPSyxRQUZuQjtBQUdFRyxvQkFBVVIsT0FBT1EsUUFIbkI7QUFJRUUsdUJBQWFWLE9BQU9VLFdBSnRCO0FBS0VaLGtCQUFRLE9BTFY7QUFNRWMsb0JBQVUsQ0FOWjtBQU9FQywwQkFBZ0IsQ0FQbEI7QUFRRUMsdUJBQWFkLE9BQU9jO0FBUnRCLFNBRks7QUFGVDs7QUFpQkYsU0FBSyxjQUFMO0FBQ0Usd0NBQ0tmLEtBREw7QUFFRUQsZ0JBQVE7QUFGVjs7QUFLRixTQUFLLGlCQUFMO0FBQ0Usd0NBQ0tDLEtBREw7QUFFRUYsZUFBT0UsTUFBTUYsS0FBTixDQUFZTyxHQUFaLENBQWdCO0FBQUEsaUJBQVNFLEtBQUthLGdCQUFMLEtBQTBCbkIsT0FBT21CLGdCQUFsQyw4QkFDMUJiLElBRDBCO0FBRTdCUixvQkFBUSxXQUZxQjtBQUc3QmMsc0JBQVVRLEtBQUtDLEtBQUwsQ0FBV3JCLE9BQU9ZLFFBQVAsR0FBa0IsR0FBN0IsQ0FIbUI7QUFJN0JDLDRCQUFnQmQsTUFBTWMsY0FBTixHQUF1QjtBQUpWLGVBSzNCUCxJQUxtQjtBQUFBLFNBQWhCO0FBRlQ7O0FBVUYsU0FBSyx3QkFBTDtBQUNFLHdDQUNLUCxLQURMO0FBRUVELGdCQUFRO0FBRlY7O0FBS0YsU0FBSyx3QkFBTDtBQUNFLHdDQUNLQyxLQURMO0FBRUVELGdCQUFRO0FBRlY7O0FBS0YsU0FBSyxnQkFBTDtBQUNFLHdDQUNLQyxLQURMO0FBRUVGLGVBQU9FLE1BQU1GLEtBQU4sQ0FBWU8sR0FBWixDQUFnQjtBQUFBLDRDQUNsQkUsSUFEa0I7QUFFckJVLG1CQUFRVixLQUFLYSxnQkFBTCxLQUEwQm5CLE9BQU9tQixnQkFBbEMsR0FBc0RuQixPQUFPZ0IsS0FBN0QsR0FBcUVWLEtBQUtVLEtBRjVEO0FBR3JCbEIsb0JBQVNRLEtBQUthLGdCQUFMLEtBQTBCbkIsT0FBT21CLGdCQUFsQyxHQUFzRCxTQUF0RCxHQUFrRWIsS0FBS1I7QUFIMUQ7QUFBQSxTQUFoQjtBQUZUOztBQVNGLFNBQUssd0JBQUw7QUFDQSxTQUFLLGVBQUw7QUFDRSx3Q0FDS0MsS0FETDtBQUVFRCxnQkFBUTtBQUZWOztBQUtGLFNBQUssYUFBTDtBQUNFLHdDQUNLQyxLQURMO0FBRUVGLDBEQUNLRSxNQUFNRixLQUFOLENBQVl5QixLQUFaLENBQWtCLENBQWxCLEVBQXFCdEIsT0FBT3VCLEtBQTVCLENBREwsb0NBRUt4QixNQUFNRixLQUFOLENBQVl5QixLQUFaLENBQWtCdEIsT0FBT3VCLEtBQVAsR0FBZSxDQUFqQyxDQUZMO0FBRkY7O0FBUUYsU0FBSyxpQkFBTDtBQUNFLHdDQUNLeEIsS0FETDtBQUVFRCxnQkFBUTtBQUZWOztBQUtGO0FBQ0UsYUFBT0MsS0FBUDs7QUF4R0Y7QUE0R0QsQyIsImZpbGUiOiJ1bmtub3duIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5jb25zdCBJTklUSUFMX1ZBTFVFID0ge1xuICBmaWxlczogW10sXG4gIHN0YXR1czogJ3BlbmRpbmcnXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IElOSVRJQUxfVkFMVUUsIGFjdGlvbikgPT4ge1xuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblxuICBjYXNlICdTRVRfUkVBRFknOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ3JlYWR5J1xuICAgIH1cblxuICBjYXNlICdMT0FEX0ZJTEVTX1NVQ0NFU1MnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ3JlYWR5JyxcbiAgICAgIGZpbGVzOiBhY3Rpb24ucmVzdWx0LmRhdGEubWFwKGZpbGUgPT4gKHtcbiAgICAgICAgZmlsZU5hbWU6IGZpbGUuZmlsZV9uYW1lLFxuICAgICAgICBmaWxlU2l6ZTogZmlsZS5maWxlX3NpemUsXG4gICAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLmNvbnRlbnRfdHlwZSxcbiAgICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXG4gICAgICAgIHByb2dyZXNzOiAwLFxuICAgICAgICB1cGxvYWRlZENodW5rczogMCxcbiAgICAgICAgdG90YWxDaHVua3M6IGFjdGlvbi5jaHVua3NfdG90YWwsXG4gICAgICAgIGFzc2V0OiBmaWxlXG4gICAgICB9KSlcbiAgICB9XG5cbiAgY2FzZSAnQUREX0ZJTEUnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGZpbGVzOiBfLmZpbmQoc3RhdGUuZmlsZXMsIGZpbGUgPT4geyByZXR1cm4gZmlsZS51bmlxdWVJZGVudGlmaWVyID09PSBhY3Rpb24udW5pcXVlSWRlbnRpZmllciB9KSA/IHN0YXRlLmZpbGVzIDogW1xuICAgICAgICAuLi5zdGF0ZS5maWxlcyxcbiAgICAgICAge1xuICAgICAgICAgIHVuaXF1ZUlkZW50aWZpZXI6IGFjdGlvbi51bmlxdWVJZGVudGlmaWVyLFxuICAgICAgICAgIGZpbGVOYW1lOiBhY3Rpb24uZmlsZU5hbWUsXG4gICAgICAgICAgZmlsZVNpemU6IGFjdGlvbi5maWxlU2l6ZSxcbiAgICAgICAgICBjb250ZW50VHlwZTogYWN0aW9uLmNvbnRlbnRUeXBlLFxuICAgICAgICAgIHN0YXR1czogJ2FkZGVkJyxcbiAgICAgICAgICBwcm9ncmVzczogMCxcbiAgICAgICAgICB1cGxvYWRlZENodW5rczogMCxcbiAgICAgICAgICB0b3RhbENodW5rczogYWN0aW9uLnRvdGFsQ2h1bmtzXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgY2FzZSAnVVBMT0FEX0JFR0lOJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICd1cGxvYWRpbmcnXG4gICAgfVxuXG4gIGNhc2UgJ1VQTE9BRF9QUk9HUkVTUyc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZmlsZXM6IHN0YXRlLmZpbGVzLm1hcChmaWxlID0+IChmaWxlLnVuaXF1ZUlkZW50aWZpZXIgPT09IGFjdGlvbi51bmlxdWVJZGVudGlmaWVyKSA/IHtcbiAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgc3RhdHVzOiAndXBsb2FkaW5nJyxcbiAgICAgICAgcHJvZ3Jlc3M6IE1hdGguZmxvb3IoYWN0aW9uLnByb2dyZXNzICogMTAwKSxcbiAgICAgICAgdXBsb2FkZWRDaHVua3M6IHN0YXRlLnVwbG9hZGVkQ2h1bmtzICsgMVxuICAgICAgfSA6IGZpbGUpXG4gICAgfVxuXG4gIGNhc2UgJ1VQTE9BRF9QUk9DRVNTX1JFUVVFU1QnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ3Byb2Nlc3NpbmcnXG4gICAgfVxuXG4gIGNhc2UgJ1VQTE9BRF9QUk9DRVNTX1NVQ0NFU1MnOlxuICAgIHJldHVybiB7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnXG4gICAgfVxuXG4gIGNhc2UgJ1VQTE9BRF9TVUNDRVNTJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBmaWxlczogc3RhdGUuZmlsZXMubWFwKGZpbGUgPT4gKHtcbiAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgYXNzZXQ6IChmaWxlLnVuaXF1ZUlkZW50aWZpZXIgPT09IGFjdGlvbi51bmlxdWVJZGVudGlmaWVyKSA/IGFjdGlvbi5hc3NldCA6IGZpbGUuYXNzZXQsXG4gICAgICAgIHN0YXR1czogKGZpbGUudW5pcXVlSWRlbnRpZmllciA9PT0gYWN0aW9uLnVuaXF1ZUlkZW50aWZpZXIpID8gJ3N1Y2Nlc3MnIDogZmlsZS5zdGF0dXNcbiAgICAgIH0pKVxuICAgIH1cblxuICBjYXNlICdVUExPQURfUFJPQ0VTU19GQUlMVVJFJzpcbiAgY2FzZSAnVVBMT0FEX0ZBSUxFRCc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgc3RhdHVzOiAnZmFpbGVkJ1xuICAgIH1cblxuICBjYXNlICdSRU1PVkVfRklMRSc6XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgZmlsZXM6IFtcbiAgICAgICAgLi4uc3RhdGUuZmlsZXMuc2xpY2UoMCwgYWN0aW9uLmluZGV4KSxcbiAgICAgICAgLi4uc3RhdGUuZmlsZXMuc2xpY2UoYWN0aW9uLmluZGV4ICsgMSlcbiAgICAgIF1cbiAgICB9XG5cbiAgY2FzZSAnVVBMT0FEX0NPTVBMRVRFJzpcbiAgICByZXR1cm4ge1xuICAgICAgLi4uc3RhdGUsXG4gICAgICBzdGF0dXM6ICdyZWFkeSdcbiAgICB9XG5cbiAgZGVmYXVsdDpcbiAgICByZXR1cm4gc3RhdGVcblxuICB9XG5cbn1cbiJdfQ==