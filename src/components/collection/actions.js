// @flow

type requestType = {
  params: Object
}

type responseType = {
  entity: Object
}

import * as actionTypes from './action_types'
import Api from '../../utils/api'

export const setRecords = (records: Array<Object>) => ({
  type: actionTypes.SET_RECORDS,
  records
})

export const appendRecords = (records: Array<Object>) => ({
  type: actionTypes.APPEND_RECORDS,
  records
})

export const toggleFilters = () => ({
  type: actionTypes.TOGGLE_FILTERS,
})

export const changeLayout = (layout: string) => ({
  type: actionTypes.CHANGE_LAYOUT,
  layout
})

export const selectAll = () => ({
  type: actionTypes.SELECT_ALL,
})

export const select = (id: number) => ({
  type: actionTypes.SELECT,
  id
})

export const fetchColumns = (endpoint: string) => {
  return Api.get({
    endpoint,
    request: fetchColumnsRequest,
    success: fetchColumnsSuccess,
    failure: fetchColumnsFailure
  })
}

export const fetchColumnsRequest = (request: requestType) => ({
  type: actionTypes.FETCH_COLUMNS_REQUEST,
})

export const fetchColumnsSuccess = (response: responseType) => ({
  type: actionTypes.FETCH_COLUMNS_SUCCESS,
  columns: response.entity
})

export const fetchColumnsFailure = (response: responseType) => ({
  type: actionTypes.FETCH_COLUMNS_FAILURE,
  error: response.entity
})

export const setColumns = (columns: Array<Object>)  => ({
  type: actionTypes.SET_COLUMNS,
  columns
})

export const fetchRecords = (endpoint: string, params: Object) => {
  return Api.get({
    params,
    endpoint: endpoint,
    request: fetchRecordsRequest,
    success: fetchRecordsSuccess,
    failure: fetchRecordsFailure
  })
}

export const fetchRecordsRequest = (request: requestType) => ({
  type: actionTypes.FETCH_RECORDS_REQUEST
})

export const fetchRecordsSuccess = (response: responseType) => ({
  type: actionTypes.FETCH_RECORDS_SUCCESS,
  records: response.entity
})

export const fetchRecordsFailure = (response: responseType) => ({
  type: actionTypes.FETCH_RECORDS_FAILURE,
  error: response.entity
})

export const sortRecords = (key: string) => ({
  type: actionTypes.SORT_RECORDS,
  key
})

export const filterRecords = (params: Object) => ({
  type: actionTypes.FILTER_RECORDS,
  params,
})

export const exportRecords = () => ({
  type: actionTypes.EXPORT_RECORDS
})

export const reloadRecords = () => ({
  type: actionTypes.RELOAD_RECORDS
})

export const executeBatchAction = (batchAction: string) => ({
  type: actionTypes.EXECUTE_BATCH_ACTION,
  batchAction
})
