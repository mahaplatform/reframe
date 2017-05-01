import * as actionTypes from './action_types'

export const push = (pathname) => ({
  type: actionTypes.PUSH,
  pathname
})

export const back = () => ({
  type: actionTypes.BACK
})

export const reset = (pathname) => ({
  type: actionTypes.RESET,
  pathname
})
