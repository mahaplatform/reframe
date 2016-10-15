// @flow

type requestType = {
  params: Object
}

type responseType = {
  entity: Object
}

import * as actionTypes from './action_types'
import Api from '../../utils/api'

export const fetchResource = (prop: string, endpoint: string) => {
  return Api.get({
    endpoint,
    request: fetchResourceRequest,
    success: fetchResourceSuccess(prop),
    failure: fetchResourceFailure
  })
}

export const fetchResourceRequest = (request: requestType) => ({
  type: actionTypes.FETCH_RESOURCE_REQUEST
})

export const fetchResourceSuccess = (prop: string )  => {
  return (response: responseType) => ({
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    result: response.entity,
    prop
  })
}

export const fetchResourceFailure = (response: responseType) => ({
  type: actionTypes.FETCH_RESOURCE_FAILURE,
  error: response.entity
})
