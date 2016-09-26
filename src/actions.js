import * as actionTypes from './action_types'

export const addComponent = (namespace, cid) => ({
  type: actionTypes.ADD_COMPONENT,
  namespace,
  cid
})

export const removeComponent = (namespace, cid) => ({
  type: actionTypes.REMOVE_COMPONENT,
  namespace,
  cid
})
