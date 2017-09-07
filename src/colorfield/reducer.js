import * as actionTypes from './action_types'

export const INITIAL_STATE = {
  color: null
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {

  case actionTypes.SET:
    return {
      color: action.color
    }

  default:
    return state
  }

}
