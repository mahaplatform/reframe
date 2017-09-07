import * as actionTypes from './action_types'

export const setSections = (sections) => ({
  type: actionTypes.SET_SECTIONS,
  sections
})

export const fetchSections = (endpoint) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  request: actionTypes.FETCH_SECTIONS_REQUEST,
  success: actionTypes.FETCH_SECTIONS_SUCCESS,
  failure: actionTypes.FETCH_SECTIONS_FAILURE
})

export const fetchData = (endpoint) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  request: actionTypes.FETCH_DATA_REQUEST,
  success: actionTypes.FETCH_DATA_SUCCESS,
  failure: actionTypes.FETCH_DATA_FAILURE
})

export const setData = (data) => ({
  type: actionTypes.SET_DATA,
  data
})

export const setReady = (field) => ({
  type: actionTypes.SET_READY,
  field
})

export const toggleBusy = (field) => ({
  type: actionTypes.TOGGLE_BUSY ,
  field
})

export const updateData = (key, value) => ({
  type: actionTypes.UPDATE_DATA,
  key,
  value
})

export const submitForm = (method, endpoint, body) => ({
  type: 'API_REQUEST',
  method,
  body,
  endpoint,
  request: actionTypes.SUBMIT_REQUEST,
  success: actionTypes.SUBMIT_SUCCESS,
  failure: actionTypes.SUBMIT_FAILURE
})
