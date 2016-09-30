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

var setRecords = exports.setRecords = function setRecords(cid, records) {
  return {
    type: actionTypes.SET_RECORDS,
    cid: cid,
    records: records
  };
};

var appendRecords = exports.appendRecords = function appendRecords(cid, records) {
  return {
    type: actionTypes.APPEND_RECORDS,
    cid: cid,
    records: records
  };
};

var toggleFilters = exports.toggleFilters = function toggleFilters(cid) {
  return {
    type: actionTypes.TOGGLE_FILTERS,
    cid: cid
  };
};

var changeLayout = exports.changeLayout = function changeLayout(cid, layout) {
  return {
    type: actionTypes.CHANGE_LAYOUT,
    cid: cid,
    layout: layout
  };
};

var selectAll = exports.selectAll = function selectAll(cid) {
  return {
    type: actionTypes.SELECT_ALL,
    cid: cid
  };
};

var select = exports.select = function select(cid, id) {
  return {
    type: actionTypes.SELECT,
    cid: cid,
    id: id
  };
};

var fetchColumns = exports.fetchColumns = function fetchColumns(cid, endpoint) {
  return _api2.default.get({
    cid: cid,
    endpoint: endpoint,
    request: fetchColumnsRequest,
    success: fetchColumnsSuccess,
    failure: fetchColumnsFailure
  });
};

var fetchColumnsRequest = exports.fetchColumnsRequest = function fetchColumnsRequest(request) {
  return {
    type: actionTypes.FETCH_COLUMNS_REQUEST,
    cid: request.cid
  };
};

var fetchColumnsSuccess = exports.fetchColumnsSuccess = function fetchColumnsSuccess(response) {
  return {
    type: actionTypes.FETCH_COLUMNS_SUCCESS,
    cid: response.cid,
    columns: response.entity
  };
};

var fetchColumnsFailure = exports.fetchColumnsFailure = function fetchColumnsFailure(response) {
  return {
    type: actionTypes.FETCH_COLUMNS_FAILURE,
    cid: response.cid,
    error: response.entity
  };
};

var setColumns = exports.setColumns = function setColumns(cid, columns) {
  return {
    type: actionTypes.SET_COLUMNS,
    cid: cid,
    columns: columns
  };
};

var fetchRecords = exports.fetchRecords = function fetchRecords(cid, endpoint, params) {
  return _api2.default.get({
    cid: cid,
    params: params,
    endpoint: endpoint,
    request: fetchRecordsRequest,
    success: fetchRecordsSuccess,
    failure: fetchRecordsFailure
  });
};

var fetchRecordsRequest = exports.fetchRecordsRequest = function fetchRecordsRequest(request) {
  return {
    type: actionTypes.FETCH_RECORDS_REQUEST,
    cid: request.cid
  };
};

var fetchRecordsSuccess = exports.fetchRecordsSuccess = function fetchRecordsSuccess(response) {
  return {
    type: actionTypes.FETCH_RECORDS_SUCCESS,
    cid: response.cid,
    records: response.entity
  };
};

var fetchRecordsFailure = exports.fetchRecordsFailure = function fetchRecordsFailure(response) {
  return {
    type: actionTypes.FETCH_RECORDS_FAILURE,
    cid: response.cid,
    error: response.entity
  };
};

var sortRecords = exports.sortRecords = function sortRecords(cid, key) {
  return {
    type: actionTypes.SORT_RECORDS,
    cid: cid,
    key: key
  };
};

var filterRecords = exports.filterRecords = function filterRecords(cid, params) {
  return {
    type: actionTypes.FILTER_RECORDS,
    cid: cid,
    params: params
  };
};

var exportRecords = exports.exportRecords = function exportRecords(cid) {
  return {
    type: actionTypes.EXPORT_RECORDS,
    cid: cid
  };
};

var reloadRecords = exports.reloadRecords = function reloadRecords(cid) {
  return {
    type: actionTypes.RELOAD_RECORDS,
    cid: cid
  };
};

var executeBatchAction = exports.executeBatchAction = function executeBatchAction(cid, batchAction) {
  return {
    type: actionTypes.EXECUTE_BATCH_ACTION,
    cid: cid,
    batchAction: batchAction
  };
};