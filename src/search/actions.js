import * as actionTypes from './action_types'

export const type = (q) => ({
  type: actionTypes.TYPE,
  q
})

export const lookup = (endpoint, query) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: actionTypes.LOOKUP_REQUEST,
  success: actionTypes.LOOKUP_SUCCESS,
  failure: actionTypes.LOOKUP_FAILURE
})
