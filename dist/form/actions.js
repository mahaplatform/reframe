'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetForm = exports.submitFailure = exports.submitSuccess = exports.submitRequest = exports.submitForm = exports.validateForm = exports.updateData = exports.setReady = exports.setData = exports.fetchDataFailure = exports.fetchDataSuccess = exports.fetchDataRequest = exports.fetchData = exports.setSections = exports.fetchSectionsFailure = exports.fetchSectionsSuccess = exports.fetchSectionsRequest = exports.fetchSections = exports.removeForm = exports.addForm = undefined;

var _action_types = require('./action_types');

var actionTypes = _interopRequireWildcard(_action_types);

var _api = require('../utils/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addForm = exports.addForm = function addForm(cid) {
  return {
    type: actionTypes.ADD_FORM,
    cid: cid
  };
};

var removeForm = exports.removeForm = function removeForm(cid) {
  return {
    type: actionTypes.REMOVE_FORM,
    cid: cid
  };
};

/* SECTIONS */

var fetchSections = exports.fetchSections = function fetchSections(cid, endpoint) {
  return _api2.default.get({
    cid: cid,
    endpoint: endpoint,
    request: fetchSectionsRequest,
    success: fetchSectionsSuccess,
    failure: fetchSectionsFailure
  });
};

var fetchSectionsRequest = exports.fetchSectionsRequest = function fetchSectionsRequest(request) {
  return {
    type: actionTypes.FETCH_SECTIONS_REQUEST,
    cid: request.cid
  };
};

var fetchSectionsSuccess = exports.fetchSectionsSuccess = function fetchSectionsSuccess(response) {
  return {
    type: actionTypes.FETCH_SECTIONS_SUCCESS,
    cid: response.cid,
    sections: response.entity
  };
};

var fetchSectionsFailure = exports.fetchSectionsFailure = function fetchSectionsFailure(response) {
  return {
    type: actionTypes.FETCH_SECTIONS_FAILURE,
    cid: response.cid,
    error: response.entity
  };
};

var setSections = exports.setSections = function setSections(cid, sections) {
  return {
    type: actionTypes.SET_SECTIONS,
    sections: sections,
    cid: cid
  };
};

/* DATA */

var fetchData = exports.fetchData = function fetchData(cid, endpoint) {
  return _api2.default.get({
    cid: cid,
    endpoint: endpoint,
    request: fetchDataRequest,
    success: fetchDataSuccess,
    failure: fetchDataFailure
  });
};

var fetchDataRequest = exports.fetchDataRequest = function fetchDataRequest(request) {
  return {
    type: actionTypes.FETCH_DATA_REQUEST,
    cid: request.cid
  };
};

var fetchDataSuccess = exports.fetchDataSuccess = function fetchDataSuccess(response) {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    cid: response.cid,
    data: response.entity
  };
};

var fetchDataFailure = exports.fetchDataFailure = function fetchDataFailure(response) {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
    cid: response.cid,
    error: response.entity
  };
};

var setData = exports.setData = function setData(cid, data) {
  return {
    type: actionTypes.SET_DATA,
    data: data,
    cid: cid
  };
};

var setReady = exports.setReady = function setReady(cid) {
  return {
    type: actionTypes.SET_READY,
    cid: cid
  };
};

var updateData = exports.updateData = function updateData(cid, key, value) {
  return {
    type: actionTypes.UPDATE_DATA,
    key: key,
    value: value,
    cid: cid
  };
};

var validateForm = exports.validateForm = function validateForm(cid) {
  return {
    type: actionTypes.VALIDATE_FORM,
    cid: cid
  };
};

/* SUBMIT */

var submitForm = exports.submitForm = function submitForm(cid, method, endpoint, params) {
  return _api2.default.request({
    cid: cid,
    method: method,
    endpoint: endpoint,
    params: params,
    request: submitRequest,
    success: submitSuccess,
    failure: submitFailure
  });
};
var submitRequest = exports.submitRequest = function submitRequest(request) {
  return {
    type: actionTypes.SUBMIT_REQUEST,
    cid: request.cid
  };
};

var submitSuccess = exports.submitSuccess = function submitSuccess(response) {
  return {
    type: actionTypes.SUBMIT_SUCCESS,
    cid: response.cid,
    data: response.entity
  };
};

var submitFailure = exports.submitFailure = function submitFailure(response) {
  return {
    type: actionTypes.SUBMIT_FAILURE,
    cid: response.cid,
    error: response.entity
  };
};

var resetForm = exports.resetForm = function resetForm(cid) {
  return {
    type: actionTypes.RESET_FORM,
    cid: cid
  };
};