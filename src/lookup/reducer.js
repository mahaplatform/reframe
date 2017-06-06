import * as actionTypes from './action_types'

const INITIAL_VALUE = {
  active: false,
  query: null,
  selected: null,
  results: [],
  status: 'ready'
}

export default (state = INITIAL_VALUE, action) => {

  switch (action.type) {

  case actionTypes.BEGIN:
    return {
      ...state,
      active: true
    }

  case actionTypes.CLEAR:
    return {
      ...state,
      selected: null
    }

  case actionTypes.CANCEL:
    return {
      ...state,
      active: false
    }

  case actionTypes.CHOOSE:
    return {
      ...state,
      active: false,
      selected: action.index
    }

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

  case actionTypes.LOAD_SUCCESS:
    return {
      ...state,
      status: 'success'
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
