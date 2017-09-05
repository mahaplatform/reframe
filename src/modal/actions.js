import * as actionTypes from './action_types'

export const clear = () => ({
  type: actionTypes.CLEAR
})

export const push = (component) => ({
  type: actionTypes.PUSH,
  component
})

export const pop = () => ({
  type: actionTypes.POP
})
