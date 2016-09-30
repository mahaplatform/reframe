// @flow

import * as actionTypes from './action_types'
import Api from '../utils/api'

type requestType = {
  cid: string,
  params: Object
}

type responseType = {
  cid: string,
  entity: Object
}

export const setRecords = (cid: string, records: Array<Object>) => ({
  type: actionTypes.SET_RECORDS,
  cid,
  records
})

export const appendRecords = (cid: string, records: Array<Object>) => ({
  type: actionTypes.APPEND_RECORDS,
  cid,
  records
})

export const toggleFilters = (cid: string) => ({
  type: actionTypes.TOGGLE_FILTERS,
  cid
})

export const changeLayout = (cid: string, layout: string) => ({
  type: actionTypes.CHANGE_LAYOUT,
  cid,
  layout
})

export const selectAll = (cid: string) => ({
  type: actionTypes.SELECT_ALL,
  cid
})

export const select = (cid: string, id: number) => ({
  type: actionTypes.SELECT,
  cid,
  id
})

export const fetchColumns = (cid: string, endpoint: string) => {
  return Api.get({
    cid,
    endpoint,
    request: fetchColumnsRequest,
    success: fetchColumnsSuccess,
    failure: fetchColumnsFailure
  })
}

export const fetchColumnsRequest = (request: requestType) => ({
  type: actionTypes.FETCH_COLUMNS_REQUEST,
  cid: request.cid
})

export const fetchColumnsSuccess = (response: responseType) => ({
  type: actionTypes.FETCH_COLUMNS_SUCCESS,
  cid: response.cid,
  columns: response.entity
})

export const fetchColumnsFailure = (response: responseType) => ({
  type: actionTypes.FETCH_COLUMNS_FAILURE,
  cid: response.cid,
  error: response.entity
})

export const setColumns = (cid: string, columns: Array<Object>)  => ({
  type: actionTypes.SET_COLUMNS,
  cid,
  columns
})

export const fetchRecords = (cid: string, endpoint: string, params: Object) => {
  return Api.get({
    cid,
    params,
    endpoint: endpoint,
    request: fetchRecordsRequest,
    success: fetchRecordsSuccess,
    failure: fetchRecordsFailure
  })
}

export const fetchRecordsRequest = (request: requestType) => ({
  type: actionTypes.FETCH_RECORDS_REQUEST,
  cid: request.cid
})

export const fetchRecordsSuccess = (response: responseType) => ({
  type: actionTypes.FETCH_RECORDS_SUCCESS,
  cid: response.cid,
  records: response.entity
})

export const fetchRecordsFailure = (response: responseType) => ({
  type: actionTypes.FETCH_RECORDS_FAILURE,
  cid: response.cid,
  error: response.entity
})

export const sortRecords = (cid: string, key: string) => ({
  type: actionTypes.SORT_RECORDS,
  cid,
  key
})

export const filterRecords = (cid: string, params: Object) => ({
  type: actionTypes.FILTER_RECORDS,
  cid,
  params,
})

export const exportRecords = (cid: string) => ({
  type: actionTypes.EXPORT_RECORDS,
  cid
})

export const reloadRecords = (cid: string) => ({
  type: actionTypes.RELOAD_RECORDS,
  cid
})

export const executeBatchAction = (cid: string, batchAction: string) => ({
  type: actionTypes.EXECUTE_BATCH_ACTION,
  cid,
  batchAction
})
