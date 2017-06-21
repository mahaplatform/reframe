import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  query: '',
  results: null,
  status: 'ready'
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.RESET:
    return INITIAL_STATE

  case actionTypes.TYPE:
    return {
      ...state,
      query: action.q
    }

  case actionTypes.LOOKUP_REQUEST:
    return {
      ...state,
      status: 'loading',
      query: action.request.params.$filter.q
    }

  case actionTypes.LOOKUP_SUCCESS:
    return {
      ...state,
      status: 'success',
      results: action.result.data
    }

  case actionTypes.LOOKUP_FAILURE:
    return {
      ...state,
      status: 'failure'
    }

  default:
    return state
  }

}
