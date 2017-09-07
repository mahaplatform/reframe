import * as actionTypes from './action_types'
import _ from 'lodash'

const INITIAL_STATE = {
  status: 'pending',
  config: [],
  entity: {},
  data: {},
  errors: {},
  ready: [],
  busy: []
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.SET_SECTIONS:
    return {
      ...state,
      config: action.sections,
      status: 'sections_loaded'
    }

  case actionTypes.FETCH_SECTIONS_REQUEST:
    return {
      ...state,
      status: 'loading_sections'
    }

  case actionTypes.FETCH_SECTIONS_SUCCESS:
    return {
      ...state,
      status: 'sections_loaded',
      config: action.result.data
    }

  case actionTypes.SET_DATA:
    return {
      ...state,
      status: 'data_loaded',
      data: {
        ...state.data,
        ..._.omitBy(action.data, _.isNil)
      }
    }

  case actionTypes.SET_READY:
    return {
      ...state,
      ready: [
        ...state.ready,
        action.field
      ]
    }

  case actionTypes.FETCH_DATA_REQUEST:
    return {
      ...state,
      status: 'loading_data'
    }

  case actionTypes.FETCH_DATA_SUCCESS:
    return {
      ...state,
      status: 'data_loaded',
      data: action.result.data
    }

  case actionTypes.TOGGLE_BUSY:
    return {
      ...state,
      busy: _.includes(state.busy, action.field) ? _.without(state.busy, action.field) : [ ...state.busy, action.field ]
    }

  case actionTypes.UPDATE_DATA:
    return {
      ...state,
      data: {
        ...state.data,
        [action.key]: action.value
      },
      errors: _.omit(state.errors, action.key)
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
      entity: action.result.data
    }

  case actionTypes.FETCH_SECTIONS_FAILURE:
  case actionTypes.FETCH_DATA_FAILURE:
  case actionTypes.SUBMIT_FAILURE:
    return {
      ...state,
      status: 'failure',
      errors: action.result.errors,
      message: action.result.meta.message
    }

  default:
    return state
  }

}
