import * as actionTypes from './action_types'

export const set = (style, message) => ({
  type: actionTypes.SET,
  style,
  message
})

export const clear = () => ({
  type: actionTypes.CLEAR
})
