export const setSections = (sections) => ({
  type: 'SET_SECTIONS',
  sections
})

export const updateSections = (sections) => ({
  type: 'UPDATE_SECTIONS',
  sections
})

export const fetchSections = (endpoint) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  request: 'FETCH_SECTIONS_REQUEST',
  success: 'FETCH_SECTIONS_SUCCESS',
  failure: 'FETCH_SECTIONS_FAILURE'
})

export const fetchData = (endpoint, defaults) => ({
  type: 'API_REQUEST',
  method: 'GET',
  endpoint,
  meta: { defaults },
  request: 'FETCH_DATA_REQUEST',
  success: 'FETCH_DATA_SUCCESS',
  failure: 'FETCH_DATA_FAILURE'
})

export const pop = (num = 1) => ({
  type: 'POP',
  num
})

export const push = (component) => ({
  type: 'PUSH',
  component
})

export const setData = (data) => ({
  type: 'SET_DATA',
  data
})

export const setReady = (field) => ({
  type: 'SET_READY',
  field
})

export const toggleBusy = (field) => ({
  type: 'TOGGLE_BUSY' ,
  field
})

export const updateData = (key, value) => ({
  type: 'UPDATE_DATA',
  key,
  value
})

export const submitForm = (method, endpoint, body) => ({
  type: 'API_REQUEST',
  method,
  body,
  endpoint,
  request: 'SUBMIT_REQUEST',
  success: 'SUBMIT_SUCCESS',
  failure: 'SUBMIT_FAILURE'
})

export const validateForm = (validateResults) => ({
  type: 'VALIDATE_FORM',
  validateResults
})

export const reset = () => ({
  type: 'RESET'
})
