import _ from 'lodash'

const INITIAL_STATE = {
  busy: [],
  config: [],
  data: {},
  entity: {},
  errors: {},
  panels: [],
  ready: [],
  status: 'pending'
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case 'SET_SECTIONS':
    return {
      ...state,
      config: action.sections,
      status: 'sections_loaded'
    }

  case 'UPDATE_SECTIONS':
    return {
      ...state,
      config: action.sections
    }

  case 'RESET':
    return {
      ...state,
      data: {}
    }

  case 'FETCH_SECTIONS_REQUEST':
    return {
      ...state,
      status: 'loading_sections'
    }

  case 'FETCH_SECTIONS_SUCCESS':
    return {
      ...state,
      status: 'sections_loaded',
      config: action.result.data
    }

  case 'POP':
    return {
      ...state,
      panels: state.panels.slice(0, 0 - action.num)
    }

  case 'PUSH':
    return {
      ...state,
      panels: [
        ...state.panels,
        action.component
      ]
    }

  case 'SET_DATA':
    return {
      ...state,
      status: 'data_loaded',
      data: {
        ...state.data,
        ..._.omitBy(action.data, _.isNil)
      }
    }

  case 'SET_READY':
    return {
      ...state,
      ready: [
        ...state.ready,
        action.field
      ]
    }

  case 'FETCH_DATA_REQUEST':
    return {
      ...state,
      status: 'loading_data'
    }

  case 'FETCH_DATA_SUCCESS':
    return {
      ...state,
      status: 'data_loaded',
      data: Object.keys(action.defaults).reduce((data, key) => ({
        ...data,
        [key]: _.get(action.result.data, key) || action.defaults[key] || null
      }), {})
    }

  case 'TOGGLE_BUSY':
    return {
      ...state,
      busy: _.includes(state.busy, action.field) ? _.without(state.busy, action.field) : [ ...state.busy, action.field ]
    }

  case 'UPDATE_DATA':
    return {
      ...state,
      data: {
        ...state.data,
        [action.key]: action.value
      },
      errors: _.omit(state.errors, action.key)
    }

  case 'UPDATE_FIELD':
    return {
      ...state,
      config: [..._.set(state.config, `[${action.sectionIndex}].fields[${action.fieldIndex}]`, action.field)]
    }

  case 'SUBMIT_REQUEST':
    return {
      ...state,
      status: 'submitting'
    }

  case 'SUBMIT_SUCCESS':
    return {
      ...state,
      status: 'success',
      entity: action.result.data
    }

  case 'FETCH_SECTIONS_FAILURE':
  case 'FETCH_DATA_FAILURE':
  case 'SUBMIT_FAILURE':
    return {
      ...state,
      status: 'failure',
      errors: action.result.errors,
      message: action.result.meta.message
    }

  case 'VALIDATE_FORM':
    return {
      ...state,
      status: 'failure',
      errors: action.validateResults,
      message: 'The form has not passed validation.'
    }

  default:
    return state
  }

}
