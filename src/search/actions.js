import * as actionTypes from './action_types'

export const resetSearch = () => ({
  type: actionTypes.RESET_SEARCH
})

export const focusSearch = () => ({
  type: actionTypes.FOCUS_SEARCH
})

export const abortSearch = () => ({
  type: actionTypes.ABORT_SEARCH
})

export const completeSearch = (model, index) => ({
  type: actionTypes.COMPLETE_SEARCH,
  model,
  index
})

export const type = (q) => ({
  type: actionTypes.TYPE_SEARCH,
  q
})

export const lookup = (q) => ({
  type: 'API_REQUEST',
  method: 'GET',
  params: { q },
  endpoint: '/admin/search',
  request: actionTypes.LOOKUP_REQUEST,
  success: actionTypes.LOOKUP_SUCCESS,
  failure: actionTypes.LOOKUP_FAILURE
})
