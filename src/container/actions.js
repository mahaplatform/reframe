import * as actionTypes from './action_types'
import Api from '../utils/api'

export const fetchResource = (prop, endpoint) => {
  return Api.get({
    endpoint,
    request: fetchResourceRequest,
    success: fetchResourceSuccess(prop),
    failure: fetchResourceFailure
  })
}

export const fetchResourceRequest = (request) => ({
  type: actionTypes.FETCH_RESOURCE_REQUEST
})

export const fetchResourceSuccess = (prop)  => {
  return (response) => ({
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    result: response.entity,
    prop
  })
}

export const fetchResourceFailure = (response) => ({
  type: actionTypes.FETCH_RESOURCE_FAILURE,
  error: response.entity,
})
