import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  q: ''
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.QUERY:
    return {
      ...state,
      q: action.q
    }

  default:
    return state
  }

}
