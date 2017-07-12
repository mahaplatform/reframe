import * as actionTypes from './action_types'

export const type = (q) => ({
  type: actionTypes.TYPE,
  q
})

export const abort = () => ({
  type: actionTypes.ABORT
})
