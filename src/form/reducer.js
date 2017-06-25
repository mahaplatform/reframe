import * as actionTypes from './action_types'

const INITIAL_STATE = {
  status: 'pending',
  config: [],
  entity: {},
  data: {},
  errors: {}
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.SET_SECTIONS:
    return {
      ...state,
      config: action.sections,
      status: 'configured'
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
      data: action.result.data
    }

  case actionTypes.FETCH_DATA_FAILURE:
    return {
      ...state,
      status: 'error',
      error: action.result.error
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
