import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  q: ''
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.TYPE:
    return {
      ...state,
      q: action.q
    }

  case actionTypes.ABORT:
    return {
      ...state,
      q: ''
    }

  default:
    return state
  }

}
