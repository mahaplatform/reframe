import * as actionTypes from './action_types'

export const type = (q) => ({
  type: actionTypes.TYPE,
  q
})

export const toggle = (record) => ({
  type: actionTypes.TOGGLE,
  record
})

export const load = (endpoint, query) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  query,
  request: actionTypes.LOAD_REQUEST,
  success: actionTypes.LOAD_SUCCESS,
  failure: actionTypes.LOAD_FAILURE
})

export const save = (endpoint, ids, onSuccess, onFailure) => ({
  type: 'API_REQUEST',
  method: 'PATCH',
  endpoint,
  body: { ids },
  request: actionTypes.SAVE_REQUEST,
  success: actionTypes.SAVE_SUCCESS,
  failure: actionTypes.SAVE_FAILURE,
  onSuccess,
  onFailure
})
