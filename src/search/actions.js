import * as actionTypes from './action_types'

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
