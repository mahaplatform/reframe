import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  chosen: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.CHOOSE:
    return {
      ...state,
      chosen: action.index
    }

  default:
    return state
  }

}
