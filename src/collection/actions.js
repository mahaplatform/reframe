import * as actionTypes from './action_types'

export const setRecords = (records) => ({
  type: 'SET_RECORDS',
  records
})

export const fetch = (endpoint, query) => ({
  type: 'API_REQUEST',
  method: 'POST',
  endpoint,
  query,
  request: actionTypes.FETCH_REQUEST,
  success: actionTypes.FETCH_SUCCESS,
  failure: actionTypes.FETCH_FAILURE
})
