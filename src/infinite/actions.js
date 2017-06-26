import * as actionTypes from './action_types'

export const fetch = (endpoint, query) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: actionTypes.FETCH_REQUEST,
  success: actionTypes.FETCH_SUCCESS,
  failure: actionTypes.FETCH_FAILURE
})

export const fetchDelay = () => ({
  type: actionTypes.FETCH_DELAY
})

export const fetchTimeout = () => ({
  type: actionTypes.FETCH_TIMEOUT
})
