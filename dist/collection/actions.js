'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeBatchAction = exports.reloadRecords = exports.exportRecords = exports.filterRecords = exports.sortRecords = exports.fetchRecordsFailure = exports.fetchRecordsSuccess = exports.fetchRecordsRequest = exports.fetchRecords = exports.setColumns = exports.fetchColumnsFailure = exports.fetchColumnsSuccess = exports.fetchColumnsRequest = exports.fetchColumns = exports.select = exports.selectAll = exports.changeLayout = exports.toggleFilters = exports.appendRecords = exports.setRecords = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setRecords = exports.setRecords = function setRecords(records) {
  return {
    type: actionTypes.SET_RECORDS,
    records: records
  };
};

var appendRecords = exports.appendRecords = function appendRecords(records) {
  return {
    type: actionTypes.APPEND_RECORDS,
    records: records
  };
};

var toggleFilters = exports.toggleFilters = function toggleFilters() {
  return {
    type: actionTypes.TOGGLE_FILTERS
  };
};

var changeLayout = exports.changeLayout = function changeLayout(layout) {
  return {
    type: actionTypes.CHANGE_LAYOUT,
    layout: layout
  };
};

var selectAll = exports.selectAll = function selectAll() {
  return {
    type: actionTypes.SELECT_ALL
  };
};

var select = exports.select = function select(id) {
  return {
    type: actionTypes.SELECT,
    id: id
  };
};

var fetchColumns = exports.fetchColumns = function fetchColumns(endpoint) {
  return _api2.default.get({
    endpoint: endpoint,
    request: fetchColumnsRequest,
    success: fetchColumnsSuccess,
    failure: fetchColumnsFailure
  });
};

var fetchColumnsRequest = exports.fetchColumnsRequest = function fetchColumnsRequest(request) {
  return {
    type: actionTypes.FETCH_COLUMNS_REQUEST
  };
};

var fetchColumnsSuccess = exports.fetchColumnsSuccess = function fetchColumnsSuccess(response) {
  return {
    type: actionTypes.FETCH_COLUMNS_SUCCESS,
    columns: response.entity
  };
};

var fetchColumnsFailure = exports.fetchColumnsFailure = function fetchColumnsFailure(response) {
  return {
    type: actionTypes.FETCH_COLUMNS_FAILURE,
    error: response.entity
  };
};

var setColumns = exports.setColumns = function setColumns(columns) {
  return {
    type: actionTypes.SET_COLUMNS,
    columns: columns
  };
};

var fetchRecords = exports.fetchRecords = function fetchRecords(endpoint, params) {
  return _api2.default.get({
    params: params,
    endpoint: endpoint,
    request: fetchRecordsRequest,
    success: fetchRecordsSuccess,
    failure: fetchRecordsFailure
  });
};

var fetchRecordsRequest = exports.fetchRecordsRequest = function fetchRecordsRequest(request) {
  return {
    type: actionTypes.FETCH_RECORDS_REQUEST
  };
};

var fetchRecordsSuccess = exports.fetchRecordsSuccess = function fetchRecordsSuccess(response) {
  return {
    type: actionTypes.FETCH_RECORDS_SUCCESS,
    records: response.entity
  };
};

var fetchRecordsFailure = exports.fetchRecordsFailure = function fetchRecordsFailure(response) {
  return {
    type: actionTypes.FETCH_RECORDS_FAILURE,
    error: response.entity
  };
};

var sortRecords = exports.sortRecords = function sortRecords(key) {
  return {
    type: actionTypes.SORT_RECORDS,
    key: key
  };
};

var filterRecords = exports.filterRecords = function filterRecords(params) {
  return {
    type: actionTypes.FILTER_RECORDS,
    params: params
  };
};

var exportRecords = exports.exportRecords = function exportRecords() {
  return {
    type: actionTypes.EXPORT_RECORDS
  };
};

var reloadRecords = exports.reloadRecords = function reloadRecords() {
  return {
    type: actionTypes.RELOAD_RECORDS
  };
};

var executeBatchAction = exports.executeBatchAction = function executeBatchAction(batchAction) {
  return {
    type: actionTypes.EXECUTE_BATCH_ACTION,
    batchAction: batchAction
  };
};