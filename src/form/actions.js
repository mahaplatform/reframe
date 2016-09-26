import * as actionTypes from './action_types'
import Api from '../utils/api'

export const addForm = (cid) => ({
  type: actionTypes.ADD_FORM,
  cid
})

export const removeForm = (cid) => ({
  type: actionTypes.REMOVE_FORM,
  cid
})

/* SECTIONS */

export const fetchSections = (cid, endpoint) => {
  return Api.get({
    cid,
    endpoint,
    request: fetchSectionsRequest,
    success: fetchSectionsSuccess,
    failure: fetchSectionsFailure
  })
}

export const fetchSectionsRequest = (request) => ({
  type: actionTypes.FETCH_SECTIONS_REQUEST,
  cid: request.cid
})

export const fetchSectionsSuccess = (response) => ({
  type: actionTypes.FETCH_SECTIONS_SUCCESS,
  cid: response.cid,
  sections: response.entity
})

export const fetchSectionsFailure = (response) => ({
  type: actionTypes.FETCH_SECTIONS_FAILURE,
  cid: response.cid,
  error: response.entity
})

export const setSections = (cid, sections) => ({
  type: actionTypes.SET_SECTIONS,
  sections,
  cid
})

/* DATA */

export const fetchData = (cid, endpoint) => {
  return Api.get({
    cid,
    endpoint,
    request: fetchDataRequest,
    success: fetchDataSuccess,
    failure: fetchDataFailure
  })
}

export const fetchDataRequest = (request) => ({
  type: actionTypes.FETCH_DATA_REQUEST,
  cid: request.cid
})

export const fetchDataSuccess = (response) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  cid: response.cid,
  data: response.entity
})

export const fetchDataFailure = (response) => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  cid: response.cid,
  error: response.entity
})

export const setData = (cid, data) => ({
  type: actionTypes.SET_DATA,
  data,
  cid
})

export const setReady = (cid) => ({
  type: actionTypes.SET_READY,
  cid
})

export const updateData = (cid, key, value) => ({
  type: actionTypes.UPDATE_DATA,
  key,
  value,
  cid
})

export const validateForm = (cid) => ({
  type: actionTypes.VALIDATE_FORM,
  cid
})

/* SUBMIT */

export const submitForm = (cid, method, endpoint, params) => {
  return Api.request({
    cid,
    method,
    endpoint,
    params,
    request: submitRequest,
    success: submitSuccess,
    failure: submitFailure
  })
}
export const submitRequest = (request) => ({
  type: actionTypes.SUBMIT_REQUEST,
  cid: request.cid
})

export const submitSuccess = (response) => ({
  type: actionTypes.SUBMIT_SUCCESS,
  cid: response.cid,
  data: response.entity
})

export const submitFailure = (response) => ({
  type: actionTypes.SUBMIT_FAILURE,
  cid: response.cid,
  error: response.entity
})

export const resetForm = (cid) => ({
  type: actionTypes.RESET_FORM,
  cid
})
