import * as actionTypes from './action_types'

export const setParams = (filter, sort) => ({
  type: actionTypes.SET_PARAMS,
  filter,
  sort
})

export const sort = (key) => ({
  type: actionTypes.SORT,
  key
})

export const filter = (filter) => ({
  type: actionTypes.FILTER,
  filter
})

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
