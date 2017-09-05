import * as actionTypes from './action_types'

export const close = () => ({
  type: actionTypes.CLOSE
})

export const open = () => ({
  type: actionTypes.OPEN
})

export const push = (component) => ({
  type: actionTypes.PUSH,
  component
})

export const pop = (panels) => ({
  type: actionTypes.POP,
  panels
})
