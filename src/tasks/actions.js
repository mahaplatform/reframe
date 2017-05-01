import * as actionTypes from './action_types'

export const open = (items) => ({
  type: actionTypes.OPEN,
  items
})

export const close = () => ({
  type: actionTypes.CLOSE
})
