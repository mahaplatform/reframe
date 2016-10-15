import * as actionTypes from './action_types'
import _ from 'lodash'
import mapFields from './map_fields'

const INITIAL_STATE = {
  status: 'initialized',
  sections: [],
  data: {},
  errors: {},
  result: {},
  message: null
}

const getDefaults = function(sections) {
  let defaults = {}
  mapFields(sections, (field) => {
    if(field.include !== false) {
      defaults[field.code] = field.defaultValue || null
    }
  })
  return defaults
}

const validateForm = function(sections, data) {
  let errors = {}
  mapFields(sections, (field) => {
    let value = data[field.code]
    if(field.required && _.isEmpty(value)) {
      errors[field.code] = ['field is required']
    }
  })
  return errors
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.FETCH_SECTIONS_REQUEST:
    return {
      ...state,
      status: 'configuring'
    }

  case actionTypes.FETCH_SECTIONS_SUCCESS:
  case actionTypes.SET_SECTIONS:
    return {
      ...state,
      status: 'configured',
      sections: action.sections,
      data: getDefaults(action.sections)
    }

  case actionTypes.FETCH_CONFIG_FAILURE:
    return {
      ...state,
      status: 'error',
      errors: action.error.errors,
      message: {
        type: 'error',
        title: 'Unable to load form configuration',
        text: action.error.message
      }
    }

  case actionTypes.FETCH_DATA_REQUEST:
    return {
      ...state,
      status: 'loading'
    }

  case actionTypes.FETCH_DATA_SUCCESS:
  case actionTypes.SET_DATA:
    return {
      ...state,
      status: 'ready',
      data: action.data
    }

  case actionTypes.FETCH_DATA_FAILURE:
    return {
      ...state,
      status: 'error',
      errors: action.error.errors,
      message: {
        type: 'error',
        title: 'Unable to load form data',
        text: action.error.message
      }
    }

  case actionTypes.SET_READY:
    return {
      ...state,
      status: 'ready'
    }

  case actionTypes.UPDATE_DATA:
    return {
      ...state,
      data: {
        ...state.data,
        [action.key]: action.value
      }
    }

  case actionTypes.VALIDATE_FORM:
    let errors = validateForm(state.sections, state.data)
    return {
      ...state,
      errors,
      status: (_.isEmpty(errors)) ? 'validated' : state.status
    }

  case actionTypes.SUBMIT_REQUEST:
    return {
      ...state,
      status: 'submitting'
    }

  case actionTypes.SUBMIT_SUCCESS:
    return {
      ...state,
      status: 'success',
      result: action.data
    }

  case actionTypes.SUBMIT_FAILURE:
    return {
      ...state,
      status: 'error',
      errors: action.error.errors,
      message: {
        type: 'error',
        title: 'Unable to submit your data',
        text: action.error.message
      }
    }

  case actionTypes.RESET_FORM:
    return {
      ...state,
      status: 'ready',
      data: {},
      errors: {},
      result: {},
      message: null
    }

  default:
    return state

  }
}
