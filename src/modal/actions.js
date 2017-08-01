import * as actionTypes from './action_types'

export const open = (component) => ({
  type: actionTypes.OPEN,
  component
})

export const close = () => ({
  type: actionTypes.CLOSE
})

export const clear = () => ({
  type: actionTypes.CLEAR
})
