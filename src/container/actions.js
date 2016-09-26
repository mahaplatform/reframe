import * as actionTypes from './action_types'
import Api from '../utils/api'

export const fetchResource = (cid, prop, endpoint) => {
  return Api.get({
    cid,
    endpoint,
    request: fetchResourceRequest,
    success: fetchResourceSuccess(prop),
    failure: fetchResourceFailure
  })
}

export const fetchResourceRequest = (request) => ({
  type: actionTypes.FETCH_RESOURCE_REQUEST,
  cid: request.cid
})

export const fetchResourceSuccess = (prop)  => {
  return (response) => ({
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    cid: response.cid,
    result: response.entity,
    prop
  })
}

export const fetchResourceFailure = (response) => ({
  type: actionTypes.FETCH_RESOURCE_FAILURE,
  cid: response.cid,
  error: response.entity,
})
