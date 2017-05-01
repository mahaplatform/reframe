import * as actionTypes from './action_types'

export const push = (component) => ({
  type: actionTypes.PUSH,
  component
})

export const pop = () => ({
  type: actionTypes.POP
})

export const close = () => ({
  type: actionTypes.CLOSE
})
