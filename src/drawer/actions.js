import * as actionTypes from './action_types'

export const open = (component, location) => ({
  type: actionTypes.OPEN,
  component,
  location
})

export const close = () => ({
  type: actionTypes.CLOSE
})
