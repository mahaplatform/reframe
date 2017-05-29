// @flow

type requestType = {
  params: Object
}

type responseType = {
  entity: Object
}

import * as actionTypes from './action_types'
import Api from '../../utils/api'

export const fetchSections = (endpoint: string) => {
  return Api.get({
    endpoint,
    request: fetchSectionsRequest,
    success: fetchSectionsSuccess,
    failure: fetchSectionsFailure
  })
}

export const fetchSectionsRequest = (request: requestType) => ({
  type: actionTypes.FETCH_SECTIONS_REQUEST
})

export const fetchSectionsSuccess = (response: responseType) => ({
  type: actionTypes.FETCH_SECTIONS_SUCCESS,
  sections: response.entity
})

export const fetchSectionsFailure = (response: responseType) => ({
  type: actionTypes.FETCH_SECTIONS_FAILURE,
  error: response.entity
})

export const setSections = (sections: Array<Object>) => ({
  type: actionTypes.SET_SECTIONS,
  sections
})

/* DATA */

export const fetchData = (endpoint: string) => {
  return Api.get({
    endpoint,
    request: fetchDataRequest,
    success: fetchDataSuccess,
    failure: fetchDataFailure
  })
}

export const fetchDataRequest = (request: requestType) => ({
  type: actionTypes.FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (response: responseType) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  data: response.entity
})

export const fetchDataFailure = (response: responseType) => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  error: response.entity
})

export const setData = (data: Object) => ({
  type: actionTypes.SET_DATA,
  data
})

export const setReady = () => ({
  type: actionTypes.SET_READY
})

export const updateData = (key: string, value: any) => ({
  type: actionTypes.UPDATE_DATA,
  key,
  value
})

export const validateForm = () => ({
  type: actionTypes.VALIDATE_FORM
})

/* SUBMIT */

export const submitForm = (method: string, endpoint: string, params: Object) => {
  return Api.request({
    method,
    endpoint,
    params,
    request: submitRequest,
    success: submitSuccess,
    failure: submitFailure
  })
}
export const submitRequest = (request: requestType) => ({
  type: actionTypes.SUBMIT_REQUEST
})

export const submitSuccess = (response: responseType) => ({
  type: actionTypes.SUBMIT_SUCCESS,
  data: response.entity
})

export const submitFailure = (response: responseType) => ({
  type: actionTypes.SUBMIT_FAILURE,
  error: response.entity
})

export const resetForm = () => ({
  type: actionTypes.RESET_FORM
})
