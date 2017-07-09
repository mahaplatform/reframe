import * as actionTypes from './action_types'

export const set = (ids) => ({
  type: actionTypes.SET,
  ids
})

export const toggle = (id) => ({
  type: actionTypes.TOGGLE,
  id
})
