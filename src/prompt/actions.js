import * as actionTypes from './action_types'

export const open = (message, options) => ({
  type: actionTypes.OPEN,
  message,
  options
})

export const close = () => ({
  type: actionTypes.CLOSE
})
