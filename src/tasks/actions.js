import * as actionTypes from './action_types'

export const open = (items) => ({
  type: actionTypes.OPEN,
  items
})

export const close = () => ({
  type: actionTypes.CLOSE
})

export const clear = () => ({
  type: actionTypes.CLEAR
})

export const request = ({ method, endpoint, onSuccess, onFailure}) => ({
  type: 'API_REQUEST',
  method,
  endpoint,
  request: actionTypes.REQUEST_REQUEST,
  success: actionTypes.REQUEST_SUCCESS,
  failure: actionTypes.REQUEST_FAILURE,
  onSuccess,
  onFailure
})
