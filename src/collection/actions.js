import * as actionTypes from './action_types'
import Api from '../utils/api'

export const addCollection = (cid) => ({
  type: actionTypes.ADD_COLLECTION,
  cid
})

export const removeCollection = (cid) => ({
  type: actionTypes.REMOVE_COLLECTION,
  cid
})

export const setRecords = (cid, records) => ({
  type: actionTypes.SET_RECORDS,
  cid,
  records
})

export const appendRecords = (cid, records) => ({
  type: actionTypes.APPEND_RECORDS,
  cid,
  records
})

export const toggleFilters = (cid) => ({
  type: actionTypes.TOGGLE_FILTERS,
  cid
})

export const changeLayout = (cid, layout) => ({
  type: actionTypes.CHANGE_LAYOUT,
  cid,
  layout
})

export const selectAll = (cid) => ({
  type: actionTypes.SELECT_ALL,
  cid
})

export const select = (cid, id) => ({
  type: actionTypes.SELECT,
  cid,
  id
})

/* COLUMNS */

export const fetchColumns = (cid, endpoint) => {
  return Api.get({
    cid,
    endpoint,
    request: fetchColumnsRequest,
    success: fetchColumnsSuccess,
    failure: fetchColumnsFailure
  })
}

export const fetchColumnsRequest = (request) => ({
  type: actionTypes.FETCH_COLUMNS_REQUEST,
  cid: request.cid
})

export const fetchColumnsSuccess = (response) => ({
  type: actionTypes.FETCH_COLUMNS_SUCCESS,
  cid: response.cid,
  columns: response.entity
})

export const fetchColumnsFailure = (response) => ({
  type: actionTypes.FETCH_COLUMNS_FAILURE,
  cid: response.cid,
  error: response.entity
})

export const setColumns = (cid, columns)  => ({
  type: actionTypes.SET_COLUMNS,
  cid,
  columns
})

/* RECORDS */

export const fetchRecords = (cid, endpoint, params) => {
  return Api.get({
    cid,
    params,
    endpoint: endpoint,
    request: fetchRecordsRequest,
    success: fetchRecordsSuccess,
    failure: fetchRecordsFailure
  })
}

export const fetchRecordsRequest = (request) => ({
  type: actionTypes.FETCH_RECORDS_REQUEST,
  cid: request.cid
})

export const fetchRecordsSuccess = (response) => ({
  type: actionTypes.FETCH_RECORDS_SUCCESS,
  cid: response.cid,
  records: response.entity
})

export const fetchRecordsFailure = (response) => ({
  type: actionTypes.FETCH_RECORDS_FAILURE,
  cid: response.cid,
  error: response.entity
})

/* SORTING */

export const sortRecords = (cid, key) => ({
  type: actionTypes.SORT_RECORDS,
  cid,
  key
})

/* FILTERING */

export const filterRecords = (cid, params) => ({
  type: actionTypes.FILTER_RECORDS,
  cid,
  params,
})

/* RELOADING */

export const exportRecords = (cid) => ({
  type: actionTypes.EXPORT_RECORDS,
  cid
})

export const reloadRecords = (cid) => ({
  type: actionTypes.RELOAD_RECORDS,
  cid
})

export const executeBatchAction = (cid, batchAction) => ({
  type: actionTypes.EXECUTE_BATCH_ACTION,
  cid,
  batchAction
})
