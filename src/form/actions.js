import * as actionTypes from './action_types'
import Api from '../utils/api'

export const addForm = () => ({
  type: actionTypes.ADD_FORM
})

export const removeForm = () => ({
  type: actionTypes.REMOVE_FORM
})

/* SECTIONS */

export const fetchSections = (endpoint) => {
  return Api.get({
    endpoint,
    request: fetchSectionsRequest,
    success: fetchSectionsSuccess,
    failure: fetchSectionsFailure
  })
}

export const fetchSectionsRequest = (request) => ({
  type: actionTypes.FETCH_SECTIONS_REQUEST
})

export const fetchSectionsSuccess = (response) => ({
  type: actionTypes.FETCH_SECTIONS_SUCCESS,
  sections: response.entity
})

export const fetchSectionsFailure = (response) => ({
  type: actionTypes.FETCH_SECTIONS_FAILURE,
  error: response.entity
})

export const setSections = (sections) => ({
  type: actionTypes.SET_SECTIONS,
  sections
})

/* DATA */

export const fetchData = (endpoint) => {
  return Api.get({
    endpoint,
    request: fetchDataRequest,
    success: fetchDataSuccess,
    failure: fetchDataFailure
  })
}

export const fetchDataRequest = (request) => ({
  type: actionTypes.FETCH_DATA_REQUEST
})

export const fetchDataSuccess = (response) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  data: response.entity
})

export const fetchDataFailure = (response) => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  error: response.entity
})

export const setData = (data) => ({
  type: actionTypes.SET_DATA,
  data
})

export const setReady = () => ({
  type: actionTypes.SET_READY
})

export const updateData = (key, value) => ({
  type: actionTypes.UPDATE_DATA,
  key,
  value
})

export const validateForm = () => ({
  type: actionTypes.VALIDATE_FORM
})

/* SUBMIT */

export const submitForm = (method, endpoint, params) => {
  return Api.request({
    method,
    endpoint,
    params,
    request: submitRequest,
    success: submitSuccess,
    failure: submitFailure
  })
}
export const submitRequest = (request) => ({
  type: actionTypes.SUBMIT_REQUEST
})

export const submitSuccess = (response) => ({
  type: actionTypes.SUBMIT_SUCCESS,
  data: response.entity
})

export const submitFailure = (response) => ({
  type: actionTypes.SUBMIT_FAILURE,
  error: response.entity
})

export const resetForm = () => ({
  type: actionTypes.RESET_FORM
})
