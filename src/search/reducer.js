import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  query: '',
  q: ''
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.TYPE:
    return {
      ...state,
      query: action.query
    }

  case actionTypes.LOOKUP:
    return {
      ...state,
      q: action.q
    }

  case actionTypes.ABORT:
    return {
      ...state,
      query: '',
      q: ''
    }

  default:
    return state
  }

}
