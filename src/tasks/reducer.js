import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  error: null,
  items: null,
  open: false,
  status: 'pending'
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.OPEN:
    return {
      items: action.items,
      open: true
    }

  case actionTypes.CLOSE:
    return {
      ...state,
      open: false
    }

  case actionTypes.REQUEST_REQUEST:
    return {
      ...state,
      status: 'submitting'
    }

  case actionTypes.REQUEST_FAILURE:
    return {
      ...state,
      status: 'failure',
      error: action.result.error.message
    }

  case actionTypes.REQUEST_SUCCESS:
    return {
      ...state,
      status: 'success'
    }

  case actionTypes.CLEAR:
    return INITIAL_STATE

  default:
    return state
  }

}
