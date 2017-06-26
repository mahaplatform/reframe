import * as actionTypes from './action_types'

export const load = (key, endpoint, value, text, ids) => ({
  type: 'APIREQUEST',
  method: 'GET',
  endpoint,
  meta: { key, value, text },
  query: { $ids: ids },
  request: actionTypes.LOAD_REQUEST,
  success: actionTypes.LOAD_SUCCESS,
  failure: actionTypes.LOAD_FAILURE
})

export const set = (key, value) => ({
  type: actionTypes.SET,
  key,
  value
})

export const choose = (index) => ({
  type: actionTypes.CHOOSE,
  index
})

export const back = () => ({
  type: actionTypes.BACK
})

export const restart = () => ({
  type: actionTypes.RESTART
})

export const resetAll = () => ({
  type: actionTypes.RESET_ALL
})

export const reset = (key) => ({
  type: actionTypes.RESET,
  key
})

export const update = (key, value) => ({
  type: actionTypes.UPDATE,
  key,
  value
})

export const remove = (key, index) => ({
  type: actionTypes.REMOVE,
  key,
  index
})

export const type = (query) => ({
  type: actionTypes.TYPE,
  query
})

export const lookup = (q) => ({
  type: actionTypes.LOOKUP,
  q
})

export const abort = () => ({
  type: actionTypes.ABORT
})
