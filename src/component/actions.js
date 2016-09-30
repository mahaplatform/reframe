import * as actionTypes from './action_types'

export const addComponent = (namespace, cid = null) => ({
  type: actionTypes.ADD_COMPONENT,
  namespace,
  cid
})

export const removeComponent = (namespace, cid = null) => ({
  type: actionTypes.REMOVE_COMPONENT,
  namespace,
  cid
})
