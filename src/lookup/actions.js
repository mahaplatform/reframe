import * as actionTypes from './action_types'

export const begin = () => ({
  type: actionTypes.BEGIN
})

export const clear = () => ({
  type: actionTypes.CLEAR
})

export const cancel = () => ({
  type: actionTypes.CANCEL
})

export const choose = (index) => ({
  type: actionTypes.CHOOSE,
  index
})

export const type = (q) => ({
  type: actionTypes.TYPE,
  q
})

export const load = (query, endpoint) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: actionTypes.LOAD_REQUEST,
  success: actionTypes.LOAD_SUCCESS,
  failure: actionTypes.LOAD_FAILURE
})

export const lookup = (query, endpoint) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: actionTypes.LOOKUP_REQUEST,
  success: actionTypes.LOOKUP_SUCCESS,
  failure: actionTypes.LOOKUP_FAILURE
})
