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

export const choose = (chosen) => ({
  type: actionTypes.CHOOSE,
  chosen
})

export const query = (q) => ({
  type: actionTypes.QUERY,
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

export const showForm = () => ({
  type: actionTypes.SHOW_FORM
})

export const hideForm = () => ({
  type: actionTypes.HIDE_FORM
})
